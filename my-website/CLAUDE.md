# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Common Development Commands

| Purpose | Script | How to Run
|---|---|---|
| **Start the React dev server** | `npm run dev` | Serves the single‑page app at `http://localhost:5173` (Vite default). The UI automatically reloads on change.
| **Run the Express API server** | `npm run api` | Starts the contact‑form endpoint on `http://localhost:3001`. Keep this running in a separate terminal while working on the frontend; the server reads `dotenv` values from `.env.local`.
| **Build a production bundle** | `npm run build` | Builds the static frontend into `dist/` for deployment. Combined with the `api` script in a serverless or container environment for a full stack deployment.
| **Lint the codebase** | `npm run lint` | Checks JavaScript/React code with ESLint. Fixes automatically with `--fix`.
| **Preview a production build** | `npm run preview` | Starts a static preview server for the `dist/` bundle.

### Running a Single Test

The repository currently has no automated test suite configured. If tests are added, they will be run with the standard Jest config that Vite generates.

---

## High‑Level Architecture

```
┌───────────────────────────────────────────────────────┐
│                         FRONTEND                       │
│  • React 19 (Vite) + TailwindCSS (v4.3)                 │
│  • Served by Vite dev server (watch mode)               │
│  • Builds to `dist/` for production                     │
├───────────────────────────────────────────────────────┤
│                        BACKEND                         │
│  • Express 5.x (Node.js)                               │
│  • Provides a single endpoint `/api/contact`           │
│  • Persists submissions to Supabase (Postgres)         │
│  • Sends notification emails via Resend (SMTP)        │
│  • Listens on port 3001                                 │
└───────────────────────────────────────────────────────┘
```

* **Entrypoints**
  * `src/main.jsx` – mounts the React app.
  * `server.js` – starts the Express API.

* **Key Packages**
  * `@supabase/ssr` & `@supabase/supabase-js` – server‑side and client‑side Supabase helpers.
  * `resend` – email/notification client.
  * `dotenv` – loads `.env.local` for secrets.
  * `vite` & `@vitejs/plugin-react` – bundling and rendering.

* **Environment Variables (required for the API)**
  * `RESEND_API_KEY` – Resend authentication token.
  * `SUPABASE_URL` – Supabase instance URL.
  * `SUPABASE_SERVICE_ROLE_KEY` – has write access to the `contact_submissions` table.
  * `CONTACT_TO_EMAIL` – the inbox address for new inquiries.
  * `CONTACT_FROM_EMAIL` – the sender address used by Resend.

* **Workflow**
  1. `npm run dev` → view the UI and perform UI work.
  2. In a separate terminal, `npm run api` → enable the contact form to send data to your Supabase instance and email destination.
  3. When deploying, simply run `npm run build` + `npm run api` in a process manager or container; the static files will be served by Vite's preview or any static host.

### Files Worth Noting

* `src/App.jsx` – root layout imports modules: Navbar, Hero, Services, Packages, FeaturedWork, Process, WhyWorkWithMe, About, Testimonial, FAQ, Contact, Footer.
* `src/components/Contact.jsx` – client‑side form handling and calls the `/api/contact` endpoint.
* `server.js` – the Express server handling `POST /api/contact` and `GET /api/contact`.
* `.env.local` – kept out of commit; contains sensitive environment vars.

---

## Suggested Configurations

* **Editor Linting** – Add an ESLint VS Code extension with the config from `eslint` package. Run `npm run lint` before committing.
* **Automatic Script** – If you run `npm run dev` and `npm run api` often, consider a `concurrently` script (not in current repo) to start both.

---

All information above should assist Claude Code in understanding the project layout, typical development tasks, and environment setup.
