# Medtronic Project Intelligence Platform

## Overview

This is a full-stack web application designed for managing project intelligence at Medtronic. The platform provides comprehensive project management capabilities with real-time search, analytics, and AI-powered insights for medical device development projects. The platform features a real-time "lives saved per minute" counter, comprehensive project and people profiles, document activity tracking, and advanced search capabilities across all Medtronic medical device categories.

## User Preferences

Preferred communication style: Simple, everyday language.

### Recent Feature Requests and Implementation Status (July 10, 2025):
✅ Migration from Replit Agent to Replit environment completed - COMPLETED (July 10, 2025)
✅ Updated application title to "MedMilestones" with new logo - COMPLETED (July 10, 2025)
✅ Removed team overview section from homepage - COMPLETED (July 10, 2025)
✅ Replaced document upload button with "Agile Integration Coming Soon" message - COMPLETED (July 10, 2025)
✅ Add DRM belt icons (black, green, yellow) and fellowship indicators (tech fellow, bakken fellow) to person profiles - COMPLETED
✅ Make abstracts and patents sections interactive with detailed information (title, conference, date, description, contributors) - COMPLETED
✅ Add connection map/network to show individual connections to projects through skills and relationships - COMPLETED
✅ Add project timelines based on development phases (R&D, clinical trials, FDA approval) - COMPLETED
✅ Default homepage to show team statistics and project numbers - COMPLETED
✅ Make team member names clickable links to their profiles in project pages - COMPLETED
✅ Add cornerstone trainings to education section in personal profiles - COMPLETED
✅ Enhance AI capabilities for broader project management questions (finding best person for specific problems) - COMPLETED (July 10, 2025)
✅ Include mock documents, bill of materials, parts, and drawings in projects - COMPLETED (July 10, 2025)
✅ Integrate expertise discovery engine for finding experts by specific skills and project history - COMPLETED (July 10, 2025)

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

### Lives Saved Counter
- Real-time animated counter showing lives saved per minute
- Prominent display emphasizing Medtronic's mission impact
- Smooth animation with Medtronic brand colors

### Data Models
- Projects support multiple categories (Diabetes, Cardiac, Surgical, Neuromodulation, Digital Health)
- Flexible status system (Active, Planning, On Hold, Completed, Delayed)
- Multi-dimensional project organization by function, location, and stage
- Rich team member profiles with patents, publications, education, and achievements
- Comprehensive project details including milestones, team roles, and recent activity

### Search & Filtering
- Full-text search across projects and people
- Advanced filtering by category, status, function, location, and stage
- Real-time search results with highlighted matches
- AI-powered query interpretation and suggestions
- Default display of all projects and people without search filters

### Analytics & Visualization
- Dashboard with key performance indicators
- Project distribution charts using Recharts
- Progress tracking and completion metrics
- Activity feed with real-time updates
- Visual project cards with progress bars and status indicators

### AI Features
- Intelligent query processing and response generation
- Context-aware suggestions based on project data
- Natural language search capabilities
- Automated insights and recommendations
- **Enhanced Project Management Advice**: AI now provides qualitative guidance on risk management, team leadership, regulatory compliance, budget planning, and innovation strategies
- **Contextual Expert Recommendations**: Smart suggestions for finding the right people for specific project challenges
- **Expertise Discovery Engine**: Advanced search for experts by specific skills (battery, materials, python automation, signal processing, etc.) with project history and contact information

### Document Management
- File upload capabilities with document type classification
- Activity tracking for document uploads and updates
- Document version control and metadata storage
- Integration with project activity feeds
- **Comprehensive Mock Document Library**: 50+ realistic documents across all projects including:
  - Engineering drawings (.dwg files)
  - Bills of Materials (Excel files)
  - Technical specifications and design documents
  - Clinical protocols and test reports
  - Regulatory submission packages
  - Software documentation and architecture specs
  - Risk management files and validation documents

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