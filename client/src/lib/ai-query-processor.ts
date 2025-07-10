import { Project, Person } from "@shared/schema";

export interface AIQueryResponse {
  answer: string;
  relevantProjects?: Project[];
  relevantPeople?: Person[];
  suggestions?: string[];
}

export class AIQueryProcessor {
  private projects: Project[] = [];
  private people: Person[] = [];

  constructor(projects: Project[], people: Person[]) {
    this.projects = projects;
    this.people = people;
  }

  processQuery(query: string): AIQueryResponse {
    const lowerQuery = query.toLowerCase();

    // Operational questions about reaching out to people
    if (lowerQuery.includes("reach out") || lowerQuery.includes("contact") || lowerQuery.includes("talk to")) {
      return this.handleContactQuery(query);
    }

    // Questions about delayed projects
    if (lowerQuery.includes("delayed") || lowerQuery.includes("behind schedule")) {
      return this.handleDelayedProjectsQuery(query);
    }

    // Questions about project status
    if (lowerQuery.includes("status") || lowerQuery.includes("progress")) {
      return this.handleStatusQuery(query);
    }

    // Questions about team members or expertise
    if (lowerQuery.includes("who") && (lowerQuery.includes("working on") || lowerQuery.includes("expert") || lowerQuery.includes("specialist"))) {
      return this.handleExpertiseQuery(query);
    }

    // Questions about deadlines
    if (lowerQuery.includes("deadline") || lowerQuery.includes("due date") || lowerQuery.includes("when")) {
      return this.handleDeadlineQuery(query);
    }

    // Questions about locations or facilities
    if (lowerQuery.includes("location") || lowerQuery.includes("where") || lowerQuery.includes("facility")) {
      return this.handleLocationQuery(query);
    }

    // Questions about categories or functions
    if (lowerQuery.includes("diabetes") || lowerQuery.includes("cardiac") || lowerQuery.includes("surgical") || lowerQuery.includes("neuromodulation")) {
      return this.handleCategoryQuery(query);
    }

    // Questions about resources or capacity
    if (lowerQuery.includes("capacity") || lowerQuery.includes("resources") || lowerQuery.includes("team size")) {
      return this.handleResourceQuery(query);
    }

    // Default response for unrecognized queries
    return this.handleGeneralQuery(query);
  }

  private handleContactQuery(query: string): AIQueryResponse {
    const suggestions = [
      "Use the team directory to find contact information",
      "Check project cards for team member roles and expertise",
      "Consider reaching out to project leaders first",
      "Use internal communication channels like Slack or Teams"
    ];

    return {
      answer: "To reach out to team members, you can use their email addresses listed in their profiles. For project-specific questions, contact the project leader directly. For technical expertise, look for team members with relevant skills listed in their profiles.",
      suggestions,
      relevantPeople: this.people.slice(0, 5) // Show first 5 people as examples
    };
  }

  private handleDelayedProjectsQuery(query: string): AIQueryResponse {
    const delayedProjects = this.projects.filter(p => p.status === "Delayed");
    const onHoldProjects = this.projects.filter(p => p.status === "On Hold");
    
    const totalDelayed = delayedProjects.length + onHoldProjects.length;
    const currentQuarter = "Q3 2024";

    let answer = `Currently, there are ${totalDelayed} projects experiencing delays or on hold. `;
    
    if (delayedProjects.length > 0) {
      answer += `${delayedProjects.length} projects are delayed: ${delayedProjects.map(p => p.name).join(", ")}. `;
    }
    
    if (onHoldProjects.length > 0) {
      answer += `${onHoldProjects.length} projects are on hold: ${onHoldProjects.map(p => p.name).join(", ")}. `;
    }

    answer += "Consider reviewing these projects with their respective teams to understand blockers and develop mitigation strategies.";

    return {
      answer,
      relevantProjects: [...delayedProjects, ...onHoldProjects],
      suggestions: [
        "Schedule status review meetings with delayed project teams",
        "Identify common blockers across delayed projects",
        "Consider resource reallocation to critical projects",
        "Update project timelines and communicate to stakeholders"
      ]
    };
  }

  private handleStatusQuery(query: string): AIQueryResponse {
    const activeProjects = this.projects.filter(p => p.status === "Active");
    const completedProjects = this.projects.filter(p => p.status === "Completed");
    const delayedProjects = this.projects.filter(p => p.status === "Delayed");

    const avgProgress = Math.round(
      activeProjects.reduce((sum, p) => sum + p.progress, 0) / activeProjects.length
    );

    const answer = `Project Portfolio Status: ${activeProjects.length} active projects (${avgProgress}% avg progress), ${completedProjects.length} completed, ${delayedProjects.length} delayed. Active projects span across all business units with strong progress in Digital Health and Cardiac divisions.`;

    return {
      answer,
      relevantProjects: [...activeProjects.slice(0, 5), ...delayedProjects],
      suggestions: [
        "Review progress on projects below 50% completion",
        "Celebrate completed milestones with teams",
        "Focus resources on high-impact delayed projects",
        "Consider quarterly business reviews for better tracking"
      ]
    };
  }

  private handleExpertiseQuery(query: string): AIQueryResponse {
    const lowerQuery = query.toLowerCase();
    let relevantPeople: Person[] = [];
    let answer = "";

    // Extract expertise area from query
    if (lowerQuery.includes("diabetes")) {
      relevantPeople = this.people.filter(p => 
        p.skills.some(s => s.toLowerCase().includes("diabetes")) ||
        p.function === "Clinical" && p.bio?.toLowerCase().includes("diabetes")
      );
      answer = `Diabetes expertise team includes ${relevantPeople.length} specialists: `;
    } else if (lowerQuery.includes("cardiac")) {
      relevantPeople = this.people.filter(p => 
        p.skills.some(s => s.toLowerCase().includes("cardiac")) ||
        p.title.toLowerCase().includes("cardiac") ||
        p.bio?.toLowerCase().includes("cardiac")
      );
      answer = `Cardiac expertise team includes ${relevantPeople.length} specialists: `;
    } else if (lowerQuery.includes("ai") || lowerQuery.includes("machine learning")) {
      relevantPeople = this.people.filter(p => 
        p.skills.some(s => s.toLowerCase().includes("ai") || s.toLowerCase().includes("machine learning"))
      );
      answer = `AI/ML expertise team includes ${relevantPeople.length} specialists: `;
    } else {
      relevantPeople = this.people.filter(p => p.patents > 5 || p.publications > 15);
      answer = `Top technical experts (high patent/publication count): `;
    }

    if (relevantPeople.length > 0) {
      answer += relevantPeople.map(p => `${p.name} (${p.title})`).join(", ");
    } else {
      answer = "No specific experts found matching your criteria. Consider broadening your search or checking project team members.";
    }

    return {
      answer,
      relevantPeople,
      suggestions: [
        "Check project team members for subject matter experts",
        "Look for people with relevant patents or publications",
        "Consider cross-functional collaboration opportunities",
        "Review team skills and experience profiles"
      ]
    };
  }

  private handleDeadlineQuery(query: string): AIQueryResponse {
    const upcomingDeadlines = this.projects
      .filter(p => p.deadline)
      .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime())
      .slice(0, 10);

    const urgentProjects = upcomingDeadlines.filter(p => {
      const deadline = new Date(p.deadline!);
      const now = new Date();
      const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntilDeadline <= 60; // Projects due within 60 days
    });

    let answer = `Upcoming project deadlines: ${urgentProjects.length} projects due within 60 days. `;
    
    if (urgentProjects.length > 0) {
      answer += `Most urgent: ${urgentProjects.slice(0, 3).map(p => 
        `${p.name} (${p.deadline})`
      ).join(", ")}. `;
    }

    answer += "Consider prioritizing resources for projects with tight deadlines.";

    return {
      answer,
      relevantProjects: urgentProjects,
      suggestions: [
        "Review resource allocation for urgent projects",
        "Consider risk mitigation for tight deadlines",
        "Communicate timeline expectations to stakeholders",
        "Identify opportunities to accelerate critical path activities"
      ]
    };
  }

  private handleLocationQuery(query: string): AIQueryResponse {
    const locationStats = this.projects.reduce((acc, p) => {
      acc[p.location] = (acc[p.location] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topLocations = Object.entries(locationStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);

    const answer = `Project distribution across locations: ${topLocations.map(([location, count]) => 
      `${location} (${count} projects)`
    ).join(", ")}. Major development hubs include Minneapolis, Fridley, and international locations like Dublin and Bangalore.`;

    return {
      answer,
      relevantProjects: this.projects.filter(p => 
        topLocations.map(([loc]) => loc).includes(p.location)
      ),
      suggestions: [
        "Consider location-specific resource planning",
        "Evaluate cross-site collaboration opportunities",
        "Review timezone considerations for global projects",
        "Assess facility capacity at major locations"
      ]
    };
  }

  private handleCategoryQuery(query: string): AIQueryResponse {
    const lowerQuery = query.toLowerCase();
    let category = "";
    
    if (lowerQuery.includes("diabetes")) category = "Diabetes";
    else if (lowerQuery.includes("cardiac")) category = "Cardiac";
    else if (lowerQuery.includes("surgical")) category = "Surgical";
    else if (lowerQuery.includes("neuromodulation")) category = "Neuromodulation";
    else if (lowerQuery.includes("digital")) category = "Digital Health";

    const categoryProjects = this.projects.filter(p => p.category === category);
    const activeInCategory = categoryProjects.filter(p => p.status === "Active");
    
    const answer = `${category} portfolio includes ${categoryProjects.length} projects (${activeInCategory.length} active). Current focus areas include ${categoryProjects.map(p => p.name).slice(0, 3).join(", ")}${categoryProjects.length > 3 ? " and others" : ""}.`;

    return {
      answer,
      relevantProjects: categoryProjects,
      suggestions: [
        `Review ${category} portfolio performance`,
        "Identify synergies between related projects",
        "Consider category-specific resource allocation",
        "Evaluate market opportunities in this category"
      ]
    };
  }

  private handleResourceQuery(query: string): AIQueryResponse {
    const totalTeamMembers = this.people.length;
    const avgTeamSize = Math.round(
      this.projects.reduce((sum, p) => sum + p.teamMembers.length, 0) / this.projects.length
    );

    const functionStats = this.people.reduce((acc, p) => {
      acc[p.function] = (acc[p.function] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const answer = `Resource Overview: ${totalTeamMembers} team members across functions. Distribution: ${Object.entries(functionStats).map(([func, count]) => `${func} (${count})`).join(", ")}. Average project team size: ${avgTeamSize} members.`;

    return {
      answer,
      relevantPeople: this.people.slice(0, 8),
      suggestions: [
        "Review team utilization across active projects",
        "Consider cross-training opportunities",
        "Evaluate resource needs for upcoming projects",
        "Assess skill gaps and hiring requirements"
      ]
    };
  }

  private handleGeneralQuery(query: string): AIQueryResponse {
    return {
      answer: `I can help you with questions about projects, team members, deadlines, and operational insights. Try asking about: "projects delayed this quarter", "who's working on cardiac devices", "upcoming deadlines", or "how to reach out to team members".`,
      suggestions: [
        "Ask about project status or progress",
        "Find experts in specific areas",
        "Check upcoming deadlines",
        "Get team contact information",
        "Review delayed or at-risk projects"
      ]
    };
  }
}