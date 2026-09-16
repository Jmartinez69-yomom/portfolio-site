# Javier Martinez — Portfolio

React + Vite + Tailwind CSS v4 + React Router. Dark, photographic, engineering-spec-sheet
aesthetic. Scroll-snap "block" sections on Home and Projects.

## 1. Set up your environment

You said Node.js should already be installed — verify, then open the project:

1. Open a terminal and run `node -v` — you need v18 or newer. If that fails, install
   Node from https://nodejs.org (LTS version).
2. Open VS Code, then `File > Open Folder...` and select this `portfolio-website` folder.
3. Install the recommended VS Code extensions if you don't have them: **ES7+ React/Redux
   snippets** and **Tailwind CSS IntelliSense** (search these in the Extensions panel,
   Ctrl+Shift+X). Not required, but they make editing much faster.
4. Open a terminal *inside* VS Code (`` Ctrl+` ``) and run:
   ```
   npm install
   ```
   This reads package.json and downloads every library this project needs (React, React
   Router, Tailwind, EmailJS) into a `node_modules` folder — that folder isn't included
   in what I sent you, since it's large and gets regenerated automatically.
5. Start the local dev server:
   ```
   npm run dev
   ```
   Then open the URL it prints (usually http://localhost:5173). The page hot-reloads
   as you edit files — no need to restart the server.

## 2. Where to put your content

- **Images** → `public/images/projects/` for project photos, `public/images/misc/` for
  your portrait/about photo. Reference them in code as `/images/projects/yourfile.jpg`
  (no `public` in the path — Vite serves that folder at the site root).
  Until you add real files, every image slot shows a labeled placeholder box instead of
  a broken-image icon, so the layout always looks intentional.
- **Project text** → `src/data/projects.js`. One object per project — title, dates,
  description, tags, and the little spec-sheet numbers. Every field has a comment
  explaining what it controls.
- **About page copy** → `src/pages/About.jsx` (marked with TODO comments).
- **Resume PDF** → drop your file at `public/resume/Javier_Martinez_Resume.pdf` — the
  Resume page's download button and embedded preview both point there already.

## 3. Contact form (EmailJS)

The form in `src/pages/Contact.jsx` uses EmailJS so it works with no backend server.
Until you set it up, the `mailto:` fallback link under the form works immediately.

To activate the real form:
1. Create a free account at https://www.emailjs.com
2. Add an Email Service (e.g. connect Gmail) → copy the **Service ID**
3. Create an Email Template → copy the **Template ID**
4. Find your **Public Key** under Account → API Keys
5. Paste all three into the constants at the top of `src/pages/Contact.jsx`

## 4. Deploying (so your domain actually works)

Recommended: deploy to **Vercel** or **Netlify** (both free) instead of hosting from
your laptop — your laptop would need to stay on 24/7 and usually needs router
port-forwarding + a dynamic DNS workaround, since most home ISPs don't hand out a
static IP. A static host keeps the site up permanently with zero maintenance, and both
let you connect a domain you already own in a few clicks.

Quick path with Vercel:
1. Push this project to a GitHub repo.
2. Go to https://vercel.com → "New Project" → import that repo. Vercel auto-detects
   Vite and sets the right build command (`npm run build`) and output folder (`dist`).
3. In Project Settings → Domains, add your domain and follow the DNS instructions
   Vercel gives you (usually just adding one or two records at your domain registrar).

If you do want to serve it from your own laptop instead, let me know and I can walk
you through the port-forwarding / dynamic DNS setup — just flagging it's more
maintenance than the two options above.

## Project structure

```
src/
  components/
    Navbar.jsx          fixed top nav
    ProjectBlock.jsx     one full-screen project section (image + write-up + specs)
    PlaceholderImage.jsx  image with a labeled fallback when the file is missing
  pages/
    Home.jsx, About.jsx, Projects.jsx, Resume.jsx, Contact.jsx
  data/
    projects.js          all project content lives here
  index.css              color/font tokens + scroll-snap styles
```
