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

    // Expertise discovery queries
    if (lowerQuery.includes("expert") || lowerQuery.includes("specialist") || lowerQuery.includes("experienced") ||
        lowerQuery.includes("battery") || lowerQuery.includes("materials") || lowerQuery.includes("python") ||
        lowerQuery.includes("automation") || lowerQuery.includes("machine learning") || lowerQuery.includes("ai") ||
        lowerQuery.includes("cardiac") || lowerQuery.includes("surgical") || lowerQuery.includes("diabetes") ||
        lowerQuery.includes("regulatory") || lowerQuery.includes("clinical") || lowerQuery.includes("engineering") ||
        lowerQuery.includes("data science") || lowerQuery.includes("software") || lowerQuery.includes("hardware") ||
        lowerQuery.includes("quality") || lowerQuery.includes("manufacturing") || lowerQuery.includes("robotics")) {
      return this.handleExpertiseDiscovery(query);
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

    // Project management advice and tips
    if (lowerQuery.includes("how to") || lowerQuery.includes("advice") || lowerQuery.includes("tips") || 
        lowerQuery.includes("best practices") || lowerQuery.includes("recommend") || lowerQuery.includes("improve") ||
        lowerQuery.includes("strategy") || lowerQuery.includes("approach") || lowerQuery.includes("manage") ||
        lowerQuery.includes("should i") || lowerQuery.includes("what if") || lowerQuery.includes("help")) {
      return this.handleProjectManagementAdvice(query);
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

  private handleExpertiseDiscovery(query: string): AIQueryResponse {
    const lowerQuery = query.toLowerCase();
    let relevantPeople: Person[] = [];
    let answer = "";
    let expertiseArea = "";

    // Advanced expertise matching
    const expertiseKeywords = {
      "battery": ["battery", "energy storage", "power management", "lithium"],
      "materials": ["materials", "biocompatible", "polymer", "ceramic", "metal"],
      "python": ["python", "automation", "scripting", "data analysis"],
      "automation": ["automation", "robotics", "manufacturing", "process"],
      "machine learning": ["machine learning", "ai", "data science", "algorithms"],
      "cardiac": ["cardiac", "heart", "cardiovascular", "pacemaker", "defibrillator"],
      "surgical": ["surgical", "surgery", "robotic surgery", "minimally invasive"],
      "diabetes": ["diabetes", "glucose", "insulin", "endocrinology"],
      "regulatory": ["regulatory", "fda", "compliance", "clinical trials"],
      "clinical": ["clinical", "research", "trials", "patient"],
      "software": ["software", "programming", "development", "coding"],
      "hardware": ["hardware", "electronics", "embedded", "circuits"],
      "quality": ["quality", "validation", "testing", "iso"],
      "manufacturing": ["manufacturing", "production", "assembly", "scale-up"],
      "data science": ["data science", "analytics", "statistics", "visualization"],
      "biomedical": ["biomedical", "bioengineering", "medical device", "biomechanics"],
      "firmware": ["firmware", "embedded software", "microcontroller", "real-time"],
      "signal processing": ["signal processing", "dsp", "filtering", "algorithms"],
      "user experience": ["user experience", "ux", "human factors", "usability"],
      "project management": ["project management", "agile", "scrum", "leadership"]
    };

    // Find matching expertise area
    for (const [area, keywords] of Object.entries(expertiseKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        expertiseArea = area;
        break;
      }
    }

    if (expertiseArea) {
      // Find people with matching skills
      relevantPeople = this.people.filter(person => {
        const personSkills = person.skills.join(" ").toLowerCase();
        const personBio = person.bio?.toLowerCase() || "";
        const personTitle = person.title.toLowerCase();
        
        return expertiseKeywords[expertiseArea].some(keyword => 
          personSkills.includes(keyword) || 
          personBio.includes(keyword) || 
          personTitle.includes(keyword)
        );
      });

      // Sort by experience and patents (expertise indicators)
      relevantPeople.sort((a, b) => 
        (b.yearsExperience + b.patents * 2) - (a.yearsExperience + a.patents * 2)
      );

      if (relevantPeople.length > 0) {
        answer = `Found ${relevantPeople.length} expert${relevantPeople.length > 1 ? 's' : ''} in ${expertiseArea}:\n\n`;
        
        relevantPeople.slice(0, 5).forEach((person, index) => {
          const relevantSkills = person.skills.filter(skill => 
            expertiseKeywords[expertiseArea].some(keyword => 
              skill.toLowerCase().includes(keyword)
            )
          );
          
          // Find projects this person has worked on
          const personProjects = this.projects.filter(project => 
            project.teamMembers.includes(person.name)
          );

          answer += `${index + 1}. ${person.name} - ${person.title}\n`;
          answer += `   📍 ${person.location} | ${person.yearsExperience} years experience | ${person.patents} patents\n`;
          if (relevantSkills.length > 0) {
            answer += `   🔧 Skills: ${relevantSkills.join(", ")}\n`;
          }
          if (personProjects.length > 0) {
            answer += `   📋 Recent Projects: ${personProjects.slice(0, 3).map(p => p.name).join(", ")}\n`;
            if (personProjects.length > 3) answer += `   ... and ${personProjects.length - 3} more projects\n`;
          }
          answer += `   📧 Contact: ${person.email}\n\n`;
        });

        if (relevantPeople.length > 5) {
          answer += `... and ${relevantPeople.length - 5} more experts available in the team directory.`;
        }
      } else {
        answer = `No specific experts found in ${expertiseArea}. Consider broadening your search or checking related skill areas.`;
      }
    } else {
      // General expertise search
      relevantPeople = this.people
        .filter(p => p.patents > 3 || p.publications > 10)
        .sort((a, b) => (b.patents + b.publications) - (a.patents + a.publications));
      
      answer = `Top technical experts by patent and publication count:\n\n`;
      relevantPeople.slice(0, 5).forEach((person, index) => {
        answer += `${index + 1}. ${person.name} - ${person.title}\n`;
        answer += `   📊 ${person.patents} patents, ${person.publications} publications\n`;
        answer += `   🔧 Expertise: ${person.skills.slice(0, 4).join(", ")}\n\n`;
      });
    }

    const suggestions = [
      "Click on expert profiles to see detailed experience and project history",
      "Check patent portfolios for deep technical expertise",
      "Review project team compositions for collaboration opportunities",
      "Consider cross-functional expertise for complex challenges",
      "Use specific technology keywords for more targeted results"
    ];

    // Find related projects based on expertise area
    const relatedProjects = expertiseArea ? this.projects.filter(project => {
      const projectSkills = project.skills.join(" ").toLowerCase();
      const projectDesc = project.description.toLowerCase();
      return expertiseKeywords[expertiseArea].some(keyword => 
        projectSkills.includes(keyword) || projectDesc.includes(keyword)
      );
    }) : [];

    return {
      answer,
      relevantPeople: relevantPeople.slice(0, 10),
      relevantProjects: relatedProjects.slice(0, 5),
      suggestions
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

  private handleProjectManagementAdvice(query: string): AIQueryResponse {
    const lowerQuery = query.toLowerCase();

    // Risk management advice
    if (lowerQuery.includes("risk") || lowerQuery.includes("delay") || lowerQuery.includes("behind")) {
      return {
        answer: "For managing project risks and delays in medical device development:\n\n1. **Early Risk Assessment**: Identify potential regulatory, technical, and resource risks during planning\n2. **Milestone Buffers**: Build 15-20% buffer time into critical path activities\n3. **Cross-functional Communication**: Weekly stakeholder updates prevent surprises\n4. **Regulatory Alignment**: Engage with regulatory teams early and often\n5. **Resource Contingency**: Maintain backup resources for critical skills\n\nFor current delayed projects, prioritize those closest to patient impact or regulatory deadlines.",
        suggestions: [
          "How to improve team communication?",
          "Best practices for regulatory compliance?",
          "Tips for managing scope creep?",
          "How to accelerate FDA approval process?"
        ],
        relevantProjects: this.projects.filter(p => p.status === "Delayed" || p.status === "On Hold")
      };
    }

    // Team management advice
    if (lowerQuery.includes("team") || lowerQuery.includes("leadership") || lowerQuery.includes("communication")) {
      return {
        answer: "Effective team management in medical device projects:\n\n1. **Clear Role Definition**: Ensure each team member understands their responsibilities and decision-making authority\n2. **Regular Check-ins**: Schedule weekly 1:1s with key contributors and bi-weekly team meetings\n3. **Cross-functional Collaboration**: Foster connections between R&D, Clinical, Regulatory, and Quality teams\n4. **Knowledge Sharing**: Implement peer reviews and technical presentations\n5. **Mentorship Programs**: Pair experienced team members with newer colleagues\n\nFor complex projects, consider appointing technical leads for each major workstream.",
        suggestions: [
          "How to handle conflicting priorities?",
          "Best practices for remote team management?",
          "Tips for managing technical debt?",
          "How to motivate underperforming team members?"
        ],
        relevantPeople: this.people.filter(p => p.title.toLowerCase().includes("lead") || p.title.toLowerCase().includes("manager"))
      };
    }

    // Quality and compliance advice
    if (lowerQuery.includes("quality") || lowerQuery.includes("compliance") || lowerQuery.includes("fda") || lowerQuery.includes("regulatory")) {
      return {
        answer: "Quality and regulatory compliance strategies:\n\n1. **Design Controls**: Implement rigorous design controls from concept through launch\n2. **Risk Management**: Follow ISO 14971 for systematic risk analysis\n3. **Documentation**: Maintain comprehensive design history files (DHF)\n4. **Testing Strategy**: Plan verification and validation activities early\n5. **Regulatory Pathway**: Align with FDA's predetermined pathway (510(k), PMA, De Novo)\n\nConsider engaging regulatory consultants for complex or first-in-class devices.",
        suggestions: [
          "How to prepare for FDA submissions?",
          "Best practices for clinical trials?",
          "Tips for managing design changes?",
          "How to streamline quality processes?"
        ],
        relevantProjects: this.projects.filter(p => p.function === "Regulatory" || p.function === "Quality")
      };
    }

    // Budget and resource management
    if (lowerQuery.includes("budget") || lowerQuery.includes("cost") || lowerQuery.includes("resource") || lowerQuery.includes("allocation")) {
      return {
        answer: "Resource and budget management best practices:\n\n1. **Activity-Based Costing**: Track costs by project phase and function\n2. **Resource Forecasting**: Plan resources 2-3 quarters ahead\n3. **Portfolio Balancing**: Balance high-risk/high-reward projects with stable revenue generators\n4. **Vendor Management**: Develop strategic partnerships with key suppliers\n5. **ROI Tracking**: Monitor project ROI and adjust priorities accordingly\n\nFor medical devices, allocate 30-40% of budget to regulatory and clinical activities.",
        suggestions: [
          "How to justify project investments?",
          "Best practices for vendor negotiations?",
          "Tips for managing scope creep?",
          "How to optimize resource utilization?"
        ]
      };
    }

    // Innovation and technology advice
    if (lowerQuery.includes("innovation") || lowerQuery.includes("technology") || lowerQuery.includes("digital") || lowerQuery.includes("ai")) {
      return {
        answer: "Innovation and technology integration strategies:\n\n1. **Technology Roadmapping**: Align technology investments with business strategy\n2. **Digital Health Integration**: Consider connectivity and data analytics from the start\n3. **AI/ML Applications**: Explore AI for diagnostics, personalization, and predictive analytics\n4. **User-Centered Design**: Involve clinicians and patients in design processes\n5. **Intellectual Property**: Develop strong IP portfolio to protect innovations\n\nFor digital health solutions, ensure cybersecurity and data privacy compliance.",
        suggestions: [
          "How to evaluate new technologies?",
          "Best practices for digital health projects?",
          "Tips for managing technical debt?",
          "How to foster innovation culture?"
        ],
        relevantProjects: this.projects.filter(p => p.category === "Digital Health" || p.name.toLowerCase().includes("ai"))
      };
    }

    // General project management advice
    return {
      answer: "General project management principles for medical device development:\n\n1. **Patient-Centric Focus**: Always prioritize patient outcomes and safety\n2. **Agile Methodology**: Use iterative development with regular feedback loops\n3. **Stakeholder Engagement**: Maintain active communication with all stakeholders\n4. **Continuous Learning**: Conduct post-project reviews and share lessons learned\n5. **Metrics-Driven**: Track key performance indicators and adjust strategies accordingly\n\nRemember that medical device projects require longer timelines due to regulatory requirements.",
      suggestions: [
        "How to handle project delays?",
        "Best practices for cross-functional teams?",
        "Tips for managing stakeholder expectations?",
        "How to improve project efficiency?"
      ],
      relevantProjects: this.projects.slice(0, 5)
    };
  }
}