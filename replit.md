# GG Corporation Vietnam - Premium Wellbeing Solutions

## Overview

This is a modern full-stack web application for GG Corporation Vietnam, showcasing their premium wellbeing solutions across healthcare, automotive, and technology sectors. The application features a corporate website with comprehensive company information, services, and contact capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Server**: Custom Vite integration for SSR capabilities
- **Session Management**: Prepared for PostgreSQL-based sessions

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Management**: Drizzle ORM with TypeScript-first approach
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Full-screen banner with company branding
- **About Section**: Company overview with statistics and badges
- **Services**: Four service pillars (Medical Wellness, Premium Automotive, Selective Healthcare, AI & Smart Systems)
- **Vision & Mission**: Company values and future goals
- **Core Values**: Six fundamental principles with icons
- **Contact Form**: Interactive contact form with service selection
- **Footer**: Company information and social media links

### Backend Structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route System**: Modular route registration with HTTP server setup
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Integrated Vite middleware for development
- **Logging**: Request/response logging with timing information

## Data Flow

1. **Client Requests**: React components use TanStack React Query for data fetching
2. **API Routes**: Express.js handles API requests with `/api` prefix
3. **Storage Layer**: Abstracted storage interface allows for easy database switching
4. **Response Handling**: Centralized error handling and JSON response formatting
5. **Development Mode**: Vite handles client-side routing and hot module replacement

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Wouter, TanStack React Query
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns for date manipulation
- **Animations**: Embla Carousel for interactive elements

### Backend Dependencies
- **Server**: Express.js, Node.js HTTP server
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Build Tools**: Vite with React plugin and Replit integrations

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development Server**: Runs on port 5000 with hot reload
- **Database**: Automatic PostgreSQL provisioning in Replit environment
- **File Watching**: Vite handles file changes and hot module replacement

### Production Deployment
- **Build Process**: Vite builds client assets, esbuild bundles server code
- **Deployment Target**: Autoscale deployment on Replit
- **Port Configuration**: External port 80 mapping to internal port 5000
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Database Management
- **Schema**: Defined in shared/schema.ts with Drizzle ORM
- **Migrations**: Generated in ./migrations directory
- **Push Command**: `npm run db:push` for schema updates
- **Connection**: Neon Database serverless driver for production scalability

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Updated website with authentic GG Corporation content and imagery
  - Hero section: Added authentic background image and exact company description
  - Services: Updated to four authentic pillars with real service descriptions
  - Vision: Integrated authentic Asia-focused vision statement
  - Mission: Added five authentic mission points from company content
  - Core Values: Updated to five authentic core values with precise descriptions
  - About: Transformed to Premium Wellbeing focus with authentic content
  - All sections now use client's actual images from attached_assets
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```