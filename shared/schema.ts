import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(), // Active, Planning, On Hold, Completed, Delayed
  category: text("category").notNull(), // Diabetes, Cardiac, Surgical, Neuromodulation, Digital Health
  function: text("function").notNull(), // R&D, Clinical, Regulatory, Manufacturing, Quality, Marketing
  location: text("location").notNull(),
  stage: text("stage").notNull(), // Concept, Design, Development, Testing, Validation, Launch
  progress: integer("progress").notNull().default(0),
  deadline: text("deadline"),
  projectLeader: text("project_leader").notNull(),
  teamMembers: text("team_members").array().notNull().default([]),
  roles: text("roles").array().notNull().default([]),
  skills: text("skills").array().notNull().default([]),
  milestones: text("milestones").array().notNull().default([]),
  recentActivity: jsonb("recent_activity").default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const people = pgTable("people", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  function: text("function").notNull(),
  location: text("location").notNull(),
  email: text("email"),
  avatar: text("avatar"),
  skills: text("skills").array().notNull().default([]),
  projects: jsonb("projects").default([]), // Array of project associations
  education: text("education").array().notNull().default([]),
  patents: integer("patents").notNull().default(0),
  publications: integer("publications").notNull().default(0),
  yearsExperience: integer("years_experience").notNull().default(0),
  bio: text("bio"),
  achievements: text("achievements").array().notNull().default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activities = pgTable("activities", {
  id: text("id").primaryKey(),
  projectId: text("project_id").notNull(),
  type: text("type").notNull(), // document_upload, milestone_reached, status_change, etc.
  description: text("description").notNull(),
  documentType: text("document_type"), // Design Doc, BOM, Drawing, Validation Plan, etc.
  fileName: text("file_name"),
  userId: text("user_id"),
  timestamp: timestamp("timestamp").defaultNow(),
  metadata: jsonb("metadata").default({}),
});

export const documents = pgTable("documents", {
  id: text("id").primaryKey(),
  projectId: text("project_id").notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(), // Design Doc, BOM, Drawing, Test Report, etc.
  version: text("version").notNull().default("1.0"),
  uploadedBy: text("uploaded_by").notNull(),
  uploadedAt: timestamp("uploaded_at").defaultNow(),
  fileSize: integer("file_size"),
  filePath: text("file_path"),
  status: text("status").notNull().default("active"), // active, archived, deleted
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertPersonSchema = createInsertSchema(people).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
  timestamp: true,
});

export const insertDocumentSchema = createInsertSchema(documents).omit({
  id: true,
  uploadedAt: true,
});

export type Project = typeof projects.$inferSelect;
export type Person = typeof people.$inferSelect;
export type Activity = typeof activities.$inferSelect;
export type Document = typeof documents.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertPerson = z.infer<typeof insertPersonSchema>;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type InsertDocument = z.infer<typeof insertDocumentSchema>;

// Search and filter types
export const searchFiltersSchema = z.object({
  query: z.string().optional(),
  function: z.string().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
  category: z.string().optional(),
  stage: z.string().optional(),
});

export type SearchFilters = z.infer<typeof searchFiltersSchema>;
