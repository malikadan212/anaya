# Anaya — Luxury Jewellery E-Commerce

A premium luxury jewellery e-commerce platform built with React, TypeScript, and Express.

## Features

- 🎨 Modern, elegant UI with smooth animations
- 🛍️ Product catalog with detailed product pages
- 📱 Fully responsive design
- 🎭 Custom cursor and scroll effects
- 🔄 Page transitions with GSAP
- 🎯 Type-safe API with Zod validation
- 💾 PostgreSQL database with Drizzle ORM

## Tech Stack

### Frontend (Anaya)
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- GSAP & Framer Motion
- Wouter (routing)
- Radix UI components
- React Query

### Backend (API Server)
- Express.js
- TypeScript
- Drizzle ORM
- PostgreSQL
- Pino (logging)

### Monorepo Management
- pnpm workspaces
- Shared TypeScript configuration
- Shared API types and validation

## Project Structure

```
.
├── artifacts/
│   ├── anaya/                # Frontend application
│   ├── api-server/           # Backend API
│   └── mockup-sandbox/       # Component playground
├── lib/
│   ├── api-client-react/     # React API client
│   ├── api-spec/             # OpenAPI specification
│   ├── api-zod/              # Zod schemas
│   └── db/                   # Database schema & migrations
└── scripts/                  # Build and development scripts
```

## Getting Started

### Prerequisites

- Node.js 24 or higher
- pnpm 9 or higher
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Anaya
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# See .env.example for required variables
cp .env.example .env
```

4. Set up the database:
```bash
pnpm --filter @workspace/db run push
```

### Development

Start all development servers:

```bash
# Frontend (default port 5173)
pnpm --filter @workspace/anaya run dev

# Backend API (requires PORT env var)
pnpm --filter @workspace/api-server run dev

# Mockup sandbox (port 8081)
pnpm --filter @workspace/mockup-sandbox run dev
```

### Build

Build all packages:

```bash
pnpm run build
```

Build specific packages:

```bash
pnpm --filter @workspace/anaya run build
pnpm --filter @workspace/api-server run build
```

### Type Checking

Run type checks across the workspace:

```bash
pnpm run typecheck
```

## Environment Variables

### Frontend (Anaya)
- `PORT` - Development server port (default: 5173)
- `BASE_PATH` - Base path for routing (default: /)

### Backend (API Server)
- `PORT` - Server port (required)
- `DATABASE_URL` - PostgreSQL connection string (required)
- `NODE_ENV` - Environment (development/production)

## Available Scripts

### Root Level
- `pnpm install` - Install all dependencies
- `pnpm run build` - Build all packages
- `pnpm run typecheck` - Type check all packages

### Per Package
- `pnpm --filter <package-name> run dev` - Start development server
- `pnpm --filter <package-name> run build` - Build package
- `pnpm --filter <package-name> run typecheck` - Type check package

## Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/anaya)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/anaya.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Import your repository at [vercel.com](https://vercel.com)
   - Vercel auto-detects configuration from `vercel.json`
   - Click Deploy

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## License

MIT
