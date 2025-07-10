import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema, insertPersonSchema, insertActivitySchema, insertDocumentSchema, searchFiltersSchema } from "@shared/schema";
import { z } from "zod";
import multer from "multer";
import { nanoid } from "nanoid";

const upload = multer({ dest: 'uploads/' });

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Projects routes
  app.get("/api/projects", async (req, res) => {
    try {
      const filters = searchFiltersSchema.parse(req.query);
      const projects = await storage.getProjects(filters);
      res.json(projects);
    } catch (error) {
      res.status(400).json({ error: "Invalid filter parameters" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(projectData);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid project data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create project" });
      }
    }
  });

  app.put("/api/projects/:id", async (req, res) => {
    try {
      const projectData = insertProjectSchema.partial().parse(req.body);
      const project = await storage.updateProject(req.params.id, projectData);
      res.json(project);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid project data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to update project" });
      }
    }
  });

  app.delete("/api/projects/:id", async (req, res) => {
    try {
      await storage.deleteProject(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  // People routes
  app.get("/api/people", async (req, res) => {
    try {
      const filters = searchFiltersSchema.parse(req.query);
      const people = await storage.getPeople(filters);
      res.json(people);
    } catch (error) {
      res.status(400).json({ error: "Invalid filter parameters" });
    }
  });

  app.get("/api/people/:id", async (req, res) => {
    try {
      const person = await storage.getPerson(req.params.id);
      if (!person) {
        return res.status(404).json({ error: "Person not found" });
      }
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch person" });
    }
  });

  app.post("/api/people", async (req, res) => {
    try {
      const personData = insertPersonSchema.parse(req.body);
      const person = await storage.createPerson(personData);
      res.status(201).json(person);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid person data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create person" });
      }
    }
  });

  // Activities routes
  app.get("/api/activities", async (req, res) => {
    try {
      const projectId = req.query.projectId as string;
      const activities = await storage.getActivities(projectId);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  });

  app.post("/api/activities", async (req, res) => {
    try {
      const activityData = insertActivitySchema.parse(req.body);
      const activity = await storage.createActivity(activityData);
      res.status(201).json(activity);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid activity data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create activity" });
      }
    }
  });

  // Documents routes
  app.get("/api/documents", async (req, res) => {
    try {
      const projectId = req.query.projectId as string;
      const documents = await storage.getDocuments(projectId);
      res.json(documents);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch documents" });
    }
  });

  app.post("/api/documents/upload", upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const documentData = insertDocumentSchema.parse({
        projectId: req.body.projectId,
        name: req.file.originalname,
        type: req.body.type,
        version: req.body.version || "1.0",
        uploadedBy: req.body.uploadedBy,
        fileSize: req.file.size,
        filePath: req.file.path,
      });

      const document = await storage.createDocument(documentData);
      
      // Create activity for document upload
      await storage.createActivity({
        projectId: document.projectId,
        type: "document_upload",
        description: `${document.type} uploaded: ${document.name}`,
        documentType: document.type,
        fileName: document.name,
        userId: document.uploadedBy,
        metadata: { documentId: document.id }
      });

      res.status(201).json(document);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid document data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to upload document" });
      }
    }
  });

  // Search route
  app.get("/api/search", async (req, res) => {
    try {
      const filters = searchFiltersSchema.parse(req.query);
      const results = await storage.searchAll(filters);
      res.json(results);
    } catch (error) {
      res.status(400).json({ error: "Invalid search parameters" });
    }
  });

  // Load sample data
  app.post("/api/sample-data", async (req, res) => {
    try {
      // Import and load sample data
      const { loadSampleData } = await import("../client/src/lib/sample-data");
      await loadSampleData(storage);
      res.json({ message: "Sample data loaded successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to load sample data" });
    }
  });

  // Dashboard stats
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      const people = await storage.getPeople();
      const activities = await storage.getActivities();

      const stats = {
        activeProjects: projects.filter(p => p.status === "Active").length,
        totalProjects: projects.length,
        teamMembers: people.length,
        totalPatents: people.reduce((sum, p) => sum + (p.patents || 0), 0),
        completionRate: Math.round((projects.filter(p => p.status === "Completed").length / projects.length) * 100) || 0,
        recentActivities: activities.slice(0, 10),
        projectsByStatus: {
          Active: projects.filter(p => p.status === "Active").length,
          Planning: projects.filter(p => p.status === "Planning").length,
          "On Hold": projects.filter(p => p.status === "On Hold").length,
          Completed: projects.filter(p => p.status === "Completed").length,
          Delayed: projects.filter(p => p.status === "Delayed").length,
        },
        projectsByCategory: {
          Diabetes: projects.filter(p => p.category === "Diabetes").length,
          Cardiac: projects.filter(p => p.category === "Cardiac").length,
          Surgical: projects.filter(p => p.category === "Surgical").length,
          Neuromodulation: projects.filter(p => p.category === "Neuromodulation").length,
          "Digital Health": projects.filter(p => p.category === "Digital Health").length,
        }
      };

      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch dashboard stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
