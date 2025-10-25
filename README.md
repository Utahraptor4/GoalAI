# GoalAI

This project is a skeleton for a full-stack TypeScript application using React and Express. It is intended to run in Codex or other development environments.

## Prerequisites

- Node.js 20 or later
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and edit it with your database connection:
   ```bash
   cp .env.example .env
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` – starts the Express server and Vite in development mode.
- `npm run check` – type‑checks the project with TypeScript.
- `npm run build` – builds the client and server for production.

## Environment Variables

`drizzle.config.ts` expects a `DATABASE_URL` variable. Provide it in an `.env` file.

---

This repository contains only minimal placeholder code. Replace it with your actual application logic.
