<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Permanent constraints (do not violate)

- Static export only. Deploy artifact must be pure HTML/CSS with no server-side runtime. No SSR.
- Deploy via static hosting (CloudBase). Never enable SSR/server deployment.
- Page content area max-width ≤ 800px.
- HTML5 semantic tags; styles in external CSS (Tailwind compiled), no `style=""` inline attributes.
- Page source and built page resources belong in pages-related directories (source: `app/`; export: `out/`).
- Markdown articles and source materials live in root `articles/` folder.

## Stack & commands

- Next.js 16.2.10 (App Router) + React 19.2.4 + Tailwind v4 + TypeScript. Build uses Turbopack.
- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — static export to `out/`
- `npm run lint` — eslint
- `npm run start` is inert under `output: 'export'` (no SSR server) — don't use it.
- Verify before finishing: `npm run lint` then `npm run build`.

## Static export gotchas

- `output: 'export'` is set in `next.config.ts` → `out/` holds pure HTML/CSS/JS. `out/` and `.next/` are gitignored — never commit build output.
- `next/image` under export emits `/_next/image?url=...` (a server endpoint) → broken on static hosting. Set `images.unoptimized: true` in `next.config.ts` to serve `src` as-is. Currently NOT set, so the pravatar avatar is broken in the export — any `<Image>` must account for this.
- `.github/workflows/deploy.yml` exists but is empty — no CI; CloudBase deploy is manual.

## Structure

- App Router pages in `app/` (one `page.tsx` per route): `/`, `/about`, `/blog`, `/papers`, `/wiki`, `/projects`.
- Shared `Navbar` (Client Component, `usePathname()` highlights the active page) + `Footer` in `app/components/`, both mounted in `app/layout.tsx`. Adding a page = new folder + `page.tsx` + an entry in Navbar's `menu` array.
- `articles/` does not exist yet — create it when adding Markdown content.
- `CLAUDE.md` is just `@AGENTS.md`; this file is the instruction source of truth.

## Styling

- Tailwind v4 via `@import "tailwindcss"` + `@theme` in `app/globals.css`. Tokens: `blush` #F9E8E8, `accent` #E8A0A0, `ink` #3D2C2C.
- Do NOT name a color token `base` — it collides with Tailwind's `text-base` font-size utility (that's why the background token is `blush`).
- Content max-width is `max-w-3xl` (768px) on `<main>` — within the 800px limit.

## Dependency quirks

- lucide-react: `Mail` is exported; `Github` is NOT (brand icons were removed). The GitHub logo is an inline SVG in `app/components/Footer.tsx` — don't try to import `Github` from lucide-react.
- `next/image` remote host `i.pravatar.cc` is whitelisted in `next.config.ts` `images.remotePatterns`.

## Git

- Branch `main`; remote `origin` → github.com/xiayunyuan/my-personal-site.
- Push requires a PAT (GitHub rejects account passwords). If `git push` hangs on auth (no credential helper / TTY), run it from your own terminal.
