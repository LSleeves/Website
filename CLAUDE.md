# CLAUDE.md — Website (gannonrutty.com)

## Summary

Personal portfolio site at gannonrutty.com. React + Vite SPA with a hero, projects showcase, contact section, a footer, and an interactive Tic-Tac-Toe component. Served in production by a tiny Node static server on Railway.

## Tech stack

- **Build tool**: Vite 7
- **Framework**: React 19 (plain JSX, not TypeScript — this is the one project in the folder that's JS, not TS)
- **Styling**: Plain CSS with CSS custom properties (no Tailwind here)
- **Production server**: `server.mjs` — a small Node HTTP server serving the Vite build from `dist/`
- **Node**: >= 22.x

## Key folders

- `src/` — App source: `App.jsx`, `main.jsx`, `components/` (Header, Hero, Projects, Contact, Footer, TicTacToe), `hooks/` (useScrollAnimation).
- `styles/main.css` — Main stylesheet with CSS variables / animations.
- `public/` — Static assets (logo, etc.).
- `index.html` — HTML entry with meta tags.
- `dist/` — Vite build output (gitignored / generated).
- `server.mjs` — Production static server.
- `vite.config.ts` — Vite config.
- `railway.json` — Railway deploy config.
- `.nvmrc` — Pins Node version.

## Dev commands

From `package.json`:

- `npm run dev` — Vite dev server (http://localhost:5173 by default)
- `npm run build` — Vite production build into `dist/`
- `npm run preview` — Preview the build locally on port 5173
- `npm run start` — Run `server.mjs` with a 96MB heap cap (used in Railway to keep memory tight)

No lint, no typecheck, no test scripts.

## Environment

No environment variables required. The server reads `PORT` if set (Railway provides this automatically) but otherwise there's nothing to configure.

## Deployment

- Hosted on **Railway** — push to `main` on `github.com/LSleeves/Website` and Railway rebuilds.
- Build: `npm run build`. Start: `npm run start` (the lightweight static server, NOT `vite preview`).
- Memory footprint is deliberately small — `NODE_OPTIONS=--max-old-space-size=96` in the start script keeps Railway costs down.

## Known quirks

- **JSX, not TSX** — don't add a TypeScript setup here unless I ask. It's intentionally a tiny JS project.
- **No Tailwind** — styling is handcrafted CSS with custom properties in `styles/main.css`. Keep that consistency if adding new styles.
- **Serve via `server.mjs`, not `vite preview`**, in production. `vite preview` is for local checks only.
- **Heap cap in `npm run start`** — if you change the start script, keep the `--max-old-space-size` flag or expect Railway OOMs.

## Git workflow (reminder)

Before any work: `git pull`. After: `git add .`, clear commit message, `git push`. Every time, no exceptions.

## Commit authorship rules

**Non-negotiable. Applies to every commit in every project — current and future.**

- Every commit is authored solely by **Gannon Rutty <gannonrutty@gmail.com>**.
- **Never** add `Co-authored-by:` trailers of any kind — no Claude, no Anthropic, no other AI tool, no other person.
- **Never** include phrases like "Generated with Claude Code", "Created by Claude", "AI-assisted", "with Claude's help", or any other AI / Anthropic attribution in commit messages, PR descriptions, or code comments.
- **Never** add Claude / Anthropic references to README files, documentation, or any committed file.
- Commit messages are written in **first person, as if Gannon wrote them himself** — "Fix login bug", "Add invoice export", "Refactor PO validation" — not "Claude helped fix…" and not "We fixed…".
- Configure `git` locally with Gannon's identity before committing:
  ```bash
  git config user.name  "Gannon Rutty"
  git config user.email "gannonrutty@gmail.com"
  ```
- This rule is inherited from the master `Projects/CLAUDE.md` and restated here so it applies regardless of which CLAUDE.md Claude Code loads.

---

## Terminal aliases

See the master `CLAUDE.md` at `../CLAUDE.md` (Projects root) for the full alias list. Key ones: `gp` (git pull), `gcp "msg"` (add + commit + push), `gs` (git status).
