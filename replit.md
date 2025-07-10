# Medtronic Project Intelligence Platform

## Overview

This is a full-stack web application designed for managing project intelligence at Medtronic. The platform provides comprehensive project management capabilities with real-time search, analytics, and AI-powered insights for medical device development projects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Medtronic brand colors and design system

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful endpoints with Express routes
- **File Uploads**: Multer middleware for handling file uploads
- **Session Management**: PostgreSQL-based session storage

### Database Schema
The application uses a PostgreSQL database with the following main entities:
- **Projects**: Core project information including status, category, function, location, stage, progress, and team data
- **People**: Team member profiles with skills, roles, and project associations
- **Activities**: Activity feed tracking project events and updates
- **Documents**: File attachments and document management

## Key Components

### Data Models
- Projects support multiple categories (Diabetes, Cardiac, Surgical, Neuromodulation, Digital Health)
- Flexible status system (Active, Planning, On Hold, Completed, Delayed)
- Multi-dimensional project organization by function, location, and stage
- Rich team member profiles with skills and experience tracking

### Search & Filtering
- Full-text search across projects and people
- Advanced filtering by category, status, function, location, and stage
- Real-time search results with highlighted matches
- AI-powered query interpretation and suggestions

### Analytics & Visualization
- Dashboard with key performance indicators
- Project distribution charts using Recharts
- Progress tracking and completion metrics
- Activity feed with real-time updates

### AI Features
- Intelligent query processing and response generation
- Context-aware suggestions based on project data
- Natural language search capabilities
- Automated insights and recommendations

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to Express backend
2. Backend processes requests using Drizzle ORM
3. Database queries executed against PostgreSQL
4. Results formatted and returned as JSON
5. Frontend updates UI using React Query cache

### State Management
- Server state managed by React Query with automatic caching
- Local UI state handled by React hooks
- Theme preferences stored in localStorage
- Search state managed through custom hooks

### File Upload Flow
1. Files uploaded via multipart form data
2. Multer middleware processes uploads
3. File metadata stored in database
4. Physical files stored in uploads directory
5. Activity feed updated with upload events

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, React Query
- **Database**: Drizzle ORM, @neondatabase/serverless
- **UI Components**: Radix UI primitives, Tailwind CSS
- **Utilities**: date-fns, nanoid, zod for validation
- **Development**: Vite, TypeScript, ESLint

### Database Connection
- Uses Neon Database serverless PostgreSQL
- Connection managed through environment variables
- Drizzle Kit for schema migrations and database management

### Third-Party Services
- Replit development environment integration
- Vite plugins for development tooling
- PostCSS for CSS processing

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with TypeScript compilation via tsx
- Database migrations handled by Drizzle Kit
- Environment variables for configuration

### Production Build
- Frontend built with Vite to static assets
- Backend compiled with esbuild to ESM modules
- Static files served from dist/public directory
- Single process serving both API and static content

### Database Management
- Schema defined in TypeScript using Drizzle
- Migrations stored in dedicated migrations directory
- Push-based deployment with `db:push` command
- PostgreSQL dialect with full SQL feature support

The architecture prioritizes developer experience with fast builds, type safety, and modern tooling while maintaining production readiness with optimized builds and efficient database operations.