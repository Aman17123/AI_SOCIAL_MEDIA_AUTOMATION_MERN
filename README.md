

<p align="center">
  <img src="client/public/logo.svg" alt="AI Social Media Automation Logo" width="120" />
</p>

<h1 align="center">AI Social Media Automation</h1>

<p align="center">
  <strong>Schedule, generate, and publish AI-powered social media content across multiple platforms — all from one dashboard.</strong>
</p>

<p align="center">
  <a href="#TODO">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtoken&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Node%20Cron-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node Cron" />
</p>

---

---

## Features

- **AI Content Generation** — Generate post text with Google Gemini 2.0 Flash and AI-generated images via Imagen 3.0.
- **Multi-Platform Publishing** — Publish to Twitter, Instagram, Facebook, LinkedIn, Facebook Pages, LinkedIn Pages, and Instagram Business via Zernio.
- **Post Scheduling** — Schedule posts for future dates with automatic publishing via `node-cron`.
- **OAuth Account Connection** — Connect social media accounts through Zernio's OAuth flow with cross-tab sync using `BroadcastChannel` API.
- **Rich Dashboard** — Overview of scheduled posts, connected accounts, recent activity, and AI generation history.
- **Media Uploads** — Upload images with posts, stored and optimized via Cloudinary.
- **Activity Logging** — Track every published post and AI reply with a detailed activity log.
- **JWT Authentication** — Secure register/login with bcrypt password hashing and 30-day JWT tokens.
- **Responsive UI** — Built with Tailwind CSS v4 and Framer Motion animations for a polished, mobile-friendly experience.
- **Landing Page** — Professional marketing site with hero, features, how-it-works, testimonials, pricing tiers, and call-to-action sections.

---

## Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Page & component animations |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Axios](https://axios-http.com/) | HTTP client |
| [Lucide React](https://lucide.dev/) | Icon library |
| [@icons-pack/react-simple-icons](https://github.com/icons-pack/react-simple-icons) | Social media brand icons |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [@vercel/speed-insights](https://vercel.com/docs/speed-insights) | Vercel performance analytics |

### Backend

| Technology | Purpose |
|------------|---------|
| [Express 5](https://expressjs.com/) | Web framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Mongoose](https://mongoosejs.com/) | MongoDB ODM |
| [JWT](https://jwt.io/) | Authentication tokens |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Password hashing |
| [Multer](https://github.com/expressjs/multer) | File upload handling |
| [node-cron](https://github.com/merencia/node-cron) | Scheduled task runner |

### Database

| Technology | Purpose |
|------------|---------|
| [MongoDB](https://www.mongodb.com/) | NoSQL document database |
| [Mongoose](https://mongoosejs.com/) | Schema modeling & validation |

### Third-Party APIs & Services

| Service | Purpose |
|---------|---------|
| [Zernio](https://zernio.com/) | Multi-platform social media publishing API & OAuth |
| [Google Gemini 2.0 Flash](https://ai.google.dev/) | AI text content generation |
| [Imagen 3.0](https://ai.google.dev/) | AI image generation |
| [Cloudinary](https://cloudinary.com/) | Media storage, optimization & delivery |

### Deployment & DevOps

| Tool | Purpose |
|------|---------|
| [Vercel](https://vercel.com/) | Frontend hosting + serverless API routes |
| [Render](https://render.com/) | Backend server hosting |

---

## Folder Structure

```
AI_SOCIAL_MEDIA_AUTOMATION_MERN/
│
├── api/                          # Vercel serverless entry point
│   └── index.ts                  #   Bootstraps Express app for Vercel
│
├── client/                       # React frontend (Vite + TypeScript)
│   ├── public/                   #   Static assets (logos, favicon)
│   └── src/
│       ├── api/                  #   Axios instance with base URL
│       ├── assets/               #   Platform icons, dummy data
│       ├── components/           #   Reusable UI components
│       │   ├── Home/             #   Landing page sections
│       │   │   ├── Navbar.tsx
│       │   │   ├── Hero.tsx
│       │   │   ├── Features.tsx
│       │   │   ├── HowItWorks.tsx
│       │   │   ├── Testimonials.tsx
│       │   │   ├── Pricing.tsx
│       │   │   ├── CTA.tsx
│       │   │   └── Footer.tsx
│       │   ├── Layout.tsx
│       │   ├── Sidebar.tsx
│       │   ├── AccountList.tsx
│       │   └── PlatformPickerModal.tsx
│       ├── context/              #   AuthContext (JWT state)
│       ├── pages/                #   Route-level pages
│       │   ├── Home.tsx
│       │   ├── Login.tsx
│       │   ├── Dashboard.tsx
│       │   ├── Accounts.tsx
│       │   ├── AIComposer.tsx
│       │   └── Scheduler.tsx
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── server/                       # Express backend (TypeScript)
│   ├── config/                   #   DB, Cloudinary, Multer, Zernio
│   ├── controllers/              #   Route handlers
│   ├── middlewares/              #   JWT auth middleware
│   ├── models/                   #   Mongoose schemas
│   ├── routes/                   #   Express route definitions
│   ├── services/                 #   Background scheduler service
│   ├── server.ts                 #   Entry point
│   └── tsconfig.json
│
├── package.json                  # Workspace root (npm workspaces)
├── vercel.json                   # Vercel deployment config
└── .gitignore
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 9
- A [MongoDB](https://www.mongodb.com/) instance ( Atlas or local)
- API keys (see [Environment Variables](#environment-variables))

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/AI_SOCIAL_MEDIA_AUTOMATION_MERN.git
cd AI_SOCIAL_MEDIA_AUTOMATION_MERN

# Install all dependencies (root + client + server)
npm install
```

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
# MongoDB
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>"

# JWT
JWT_SECRET="your-super-secret-key"

# Zernio (social media publishing API)
ZERNIO_API_KEY="sk_..."

# Google AI (Gemini + Imagen)
GEMINI_API_KEY="your-gemini-api-key"

# Cloudinary (media uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

Create a `.env` file in the `client/` directory for development:

```env
VITE_API_BASE_URL="http://localhost:3000"
```

For production deployment, add `client/.env.production`:

```env
VITE_API_BASE_URL="https://your-backend-url.com"
```

### Run Locally

#### Start the Backend

```bash
cd server
npm run server
```

The API will be available at `http://localhost:3000`.

#### Start the Frontend

```bash
cd client
npm run dev
```

The app will be available at `http://localhost:5173`.

> **Note:** The Vite dev server proxies `/api` requests to `http://localhost:3000` (configured in `vite.config.ts`).

---

## API Overview

All API routes are prefixed with `/api`. Protected routes require a `Bearer <token>` in the `Authorization` header.

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/auth/register` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Log in and receive JWT | ❌ |

### Social Media OAuth

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/oauth/:platform/url` | Get Zernio OAuth URL for a platform | ✅ |
| `GET` | `/api/oauth/sync` | Sync connected accounts from Zernio | ✅ |

### Connected Accounts

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/accounts` | List all connected accounts | ✅ |
| `POST` | `/api/accounts` | Manually add an account | ✅ |
| `DELETE` | `/api/accounts/:id` | Disconnect / remove an account | ✅ |

### Posts & AI Generation

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/posts` | List all posts (last 50) | ✅ |
| `GET` | `/api/posts/generations` | List AI generations (last 20) | ✅ |
| `POST` | `/api/posts` | Schedule a post (multipart optional media) | ✅ |
| `POST` | `/api/posts/generate` | Generate AI content (text + optional image) | ✅ |

### Activity Log

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/activity` | List recent activity (last 10 entries) | ✅ |

---

## Real-Time & Background Features

| Feature | Implementation |
|---------|----------------|
| **Scheduled Publishing** | `node-cron` runs every minute (`* * * * *`), finds due posts, publishes them via Zernio API, and logs the result. |
| **OAuth Cross-Tab Sync** | After connecting a social account via OAuth, the callback page uses `BroadcastChannel` API (with `localStorage` fallback) to notify the main app tab. |
| **Dashboard Polling** | The Scheduler page polls the backend every second for updated post data. |
| **Activity Logging** | Every post published by the cron job creates an `ActivityLog` document for the audit trail. |

---

## Project Workflow

```
┌──────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│  User signs  │────▶│  Auth (JWT + bcrypt) │────▶│  MongoDB User   │
│  up / logs in│     └─────────────────────┘     └─────────────────┘
└──────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Connect Social Accounts (OAuth) │
│  ──────────────────────────────  │
│  1. Pick platform (modal)        │
│  2. Get Zernio OAuth URL         │
│  3. Authorize in new tab         │
│  4. Sync accounts via Zernio API │
│  5. Accounts stored in MongoDB   │
└──────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│  AI Content Generation (AIComposer)  │
│  ──────────────────────────────────  │
│  1. Enter prompt + select tone       │
│  2. Gemini 2.0 Flash generates text  │
│  3. Imagen 3.0 generates image       │
│  4. Image uploaded to Cloudinary     │
│  5. Generation saved to MongoDB      │
│  6. Send to Scheduler with one click │
└──────────────────────────────────────┘
       │
       ▼
┌────────────────────────────────┐
│  Schedule Post (Scheduler)     │
│  ────────────────────────────  │
│  1. Pick generated / new text  │
│  2. Attach media (optional)    │
│  3. Upload to Cloudinary       │
│  4. Select platforms           │
│  5. Pick date & time           │
│  6. Save Post to MongoDB       │
└────────────────────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│  Automatic Publishing (node-cron)    │
│  ──────────────────────────────────  │
│  Every minute:                       │
│  1. Find due scheduled posts         │
│  2. Fetch connected Zernio accounts  │
│  3. Publish via Zernio API           │
│  4. Mark post as "posted" / "failed" │
│  5. Create ActivityLog entry         │
└──────────────────────────────────────┘
       │
       ▼
┌──────────────────┐
│  Dashboard View  │
│  ──────────────  │
│  Real-time stats,│
│  activity feed,  │
│  upcoming posts  │
└──────────────────┘
```

---

## Deployment

### Vercel (Frontend + Serverless API)

This project is configured for Vercel deployment with serverless API support via `api/index.ts`.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# MONGODB_URI, JWT_SECRET, ZERNIO_API_KEY, GEMINI_API_KEY,
# CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
```

The `vercel.json` configuration:
- Build command: `cd client && npm run build`
- Output directory: `client/dist`
- All routes rewritten to `index.html` (SPA fallback)

> **Important:** The `node-cron` scheduler is disabled on Vercel (checked via `!process.env.VERCEL`). Scheduled publishing will not work in the serverless environment. Use Render or a dedicated server for the backend with cron support.

### Render (Backend)

For full backend functionality including the scheduler:

1. Push the repository to GitHub.
2. Create a new **Web Service** on [Render](https://render.com/).
3. Connect your repository.
4. Set:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm run start`
5. Add all environment variables from `server/.env`.
6. Update `client/.env.production` with your Render backend URL.
7. Redeploy the frontend on Vercel with the production environment variables.

---

## Future Improvements

- [ ] WebSocket (Socket.io) integration for real-time dashboard updates instead of polling.
- [ ] AI-powered auto-reply to social media comments and messages.
- [ ] Multi-image carousel posts for Instagram and Facebook.
- [ ] Post analytics dashboard (likes, shares, impressions).
- [ ] Content calendar view (monthly/weekly grid).
- [ ] Team collaboration — multi-user workspace with roles.
- [ ] Draft auto-save and post templates.
- [ ] Docker Compose setup for local development.
- [ ] Unit and integration tests (Jest / Vitest).
- [ ] CI/CD pipeline with GitHub Actions.
- [ ] Social media inbox for managing mentions and DMs.

---

## Author

**Aman Alphiones**

<p align="left">
  <a href="https://amannakoti.vercel.app/">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/<your-linkedin-username>">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

---

<p align="center">
  Built with ❤️ using the MERN stack
</p>
