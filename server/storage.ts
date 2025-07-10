import { 
  projects, 
  people, 
  activities, 
  documents,
  type Project, 
  type Person, 
  type Activity, 
  type Document,
  type InsertProject, 
  type InsertPerson, 
  type InsertActivity, 
  type InsertDocument,
  type SearchFilters
} from "@shared/schema";
import { nanoid } from "nanoid";

export interface IStorage {
  // Projects
  getProjects(filters?: SearchFilters): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: string): Promise<void>;

  // People
  getPeople(filters?: SearchFilters): Promise<Person[]>;
  getPerson(id: string): Promise<Person | undefined>;
  createPerson(person: InsertPerson): Promise<Person>;
  updatePerson(id: string, person: Partial<InsertPerson>): Promise<Person>;
  deletePerson(id: string): Promise<void>;

  // Activities
  getActivities(projectId?: string): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;

  // Documents
  getDocuments(projectId?: string): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;

  // Search
  searchAll(filters: SearchFilters): Promise<{ projects: Project[]; people: Person[] }>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project> = new Map();
  private people: Map<string, Person> = new Map();
  private activities: Map<string, Activity> = new Map();
  private documents: Map<string, Document> = new Map();

  // Projects
  async getProjects(filters?: SearchFilters): Promise<Project[]> {
    let results = Array.from(this.projects.values());

    if (filters?.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(project => 
        project.name.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.function.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.projectLeader.toLowerCase().includes(query) ||
        project.teamMembers.some(member => member.toLowerCase().includes(query)) ||
        project.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    if (filters?.function) {
      results = results.filter(project => project.function === filters.function);
    }

    if (filters?.location) {
      results = results.filter(project => project.location === filters.location);
    }

    if (filters?.status) {
      results = results.filter(project => project.status === filters.status);
    }

    if (filters?.category) {
      results = results.filter(project => project.category === filters.category);
    }

    if (filters?.stage) {
      results = results.filter(project => project.stage === filters.stage);
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = nanoid();
    const now = new Date();
    const newProject: Project = {
      ...project,
      id,
      progress: project.progress || 0,
      deadline: project.deadline || null,
      teamMembers: project.teamMembers || [],
      roles: project.roles || [],
      skills: project.skills || [],
      milestones: project.milestones || [],
      recentActivity: project.recentActivity || [],
      createdAt: now,
      updatedAt: now,
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project> {
    const existing = this.projects.get(id);
    if (!existing) {
      throw new Error('Project not found');
    }

    const updated: Project = {
      ...existing,
      ...project,
      updatedAt: new Date(),
    };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<void> {
    this.projects.delete(id);
  }

  // People
  async getPeople(filters?: SearchFilters): Promise<Person[]> {
    let results = Array.from(this.people.values());

    if (filters?.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(person => 
        person.name.toLowerCase().includes(query) ||
        person.title.toLowerCase().includes(query) ||
        person.function.toLowerCase().includes(query) ||
        person.location.toLowerCase().includes(query) ||
        person.skills.some(skill => skill.toLowerCase().includes(query)) ||
        person.bio?.toLowerCase().includes(query)
      );
    }

    if (filters?.function) {
      results = results.filter(person => person.function === filters.function);
    }

    if (filters?.location) {
      results = results.filter(person => person.location === filters.location);
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }

  async getPerson(id: string): Promise<Person | undefined> {
    return this.people.get(id);
  }

  async createPerson(person: InsertPerson): Promise<Person> {
    const id = nanoid();
    const now = new Date();
    const newPerson: Person = {
      ...person,
      id,
      email: person.email || null,
      avatar: person.avatar || null,
      bio: person.bio || null,
      patents: person.patents || 0,
      publications: person.publications || 0,
      yearsExperience: person.yearsExperience || 0,
      projects: person.projects || [],
      skills: person.skills || [],
      education: person.education || [],
      achievements: person.achievements || [],
      createdAt: now,
      updatedAt: now,
    };
    this.people.set(id, newPerson);
    return newPerson;
  }

  async updatePerson(id: string, person: Partial<InsertPerson>): Promise<Person> {
    const existing = this.people.get(id);
    if (!existing) {
      throw new Error('Person not found');
    }

    const updated: Person = {
      ...existing,
      ...person,
      updatedAt: new Date(),
    };
    this.people.set(id, updated);
    return updated;
  }

  async deletePerson(id: string): Promise<void> {
    this.people.delete(id);
  }

  // Activities
  async getActivities(projectId?: string): Promise<Activity[]> {
    let results = Array.from(this.activities.values());
    
    if (projectId) {
      results = results.filter(activity => activity.projectId === projectId);
    }

    return results.sort((a, b) => 
      new Date(b.timestamp!).getTime() - new Date(a.timestamp!).getTime()
    );
  }

  async createActivity(activity: InsertActivity): Promise<Activity> {
    const id = nanoid();
    const newActivity: Activity = {
      ...activity,
      id,
      documentType: activity.documentType || null,
      fileName: activity.fileName || null,
      userId: activity.userId || null,
      metadata: activity.metadata || {},
      timestamp: new Date(),
    };
    this.activities.set(id, newActivity);
    return newActivity;
  }

  // Documents
  async getDocuments(projectId?: string): Promise<Document[]> {
    let results = Array.from(this.documents.values());
    
    if (projectId) {
      results = results.filter(doc => doc.projectId === projectId);
    }

    return results.sort((a, b) => 
      new Date(b.uploadedAt!).getTime() - new Date(a.uploadedAt!).getTime()
    );
  }

  async createDocument(document: InsertDocument): Promise<Document> {
    const id = nanoid();
    const newDocument: Document = {
      ...document,
      id,
      version: document.version || "1.0",
      status: document.status || "active",
      fileSize: document.fileSize || null,
      filePath: document.filePath || null,
      uploadedAt: new Date(),
    };
    this.documents.set(id, newDocument);
    return newDocument;
  }

  // Search
  async searchAll(filters: SearchFilters): Promise<{ projects: Project[]; people: Person[] }> {
    const projects = await this.getProjects(filters);
    const people = await this.getPeople(filters);
    
    return { projects, people };
  }
}

export const storage = new MemStorage();
