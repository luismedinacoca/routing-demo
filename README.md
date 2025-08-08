# Next.js 13 Routing Demo (App Router)

## 1. Project Overview
This repository is a **hands-on laboratory** for experimenting with the new _App Router_ introduced in Next.js 13. It demonstrates how file-system-based routing works, how layouts are composed, and how dynamic/static segments are handled. The code purposefully stays minimal so you can focus on understanding routing mechanics rather than business logic.

---

## 2. Project Structure (high-level & detailed)
```text
Root
├── src/
│   └── app/                       # Entry point for the App Router
│       ├── layout.tsx             # Root layout: <html>, providers, metadata
│       ├── globals.css            # Global Tailwind + custom styles
│       ├── page.tsx               # Home page
│       ├── about/                 # Static segment  →  /about
│       │   └── page.tsx
│       ├── blog/                  # Parent segment  →  /blog
│       │   ├── page.tsx           # Blog index
│       │   ├── first/             # Static child    →  /blog/first
│       │   │   └── page.tsx
│       │   └── second/
│       │       └── page.tsx
│       ├── docs/                  # Catch-all route ([[...slug]])
│       │   └── [[...slug]]/
│       │       └── page.tsx
│       ├── products/              # Dynamic segment →  /products
│       │   ├── page.tsx           # Products list
│       │   └── [productId]/       # Dynamic child   →  /products/:productId
│       │       ├── page.tsx       # Product detail
│       │       └── reviews/
│       │           └── [reviewId]/# Dynamic nested  →  /products/:productId/reviews/:reviewId
│       │               ├── page.tsx
│       │               └── not-found.tsx
│       ├── profile/               # Static route    →  /profile
│       │   └── page.tsx
│       ├── not-found.tsx          # Global 404 fallback
│       └── favicon.ico
├── public/                         # Static assets (SVGs, images)
├── tailwind.config.ts              # Tailwind configuration
├── eslint.config.mjs               # ESLint rules
├── tsconfig.json                   # TypeScript config
└── package.json                    # Scripts & dependencies
```

> Each folder or file is annotated on the right to clarify its responsibility within the architecture.

---

## 3. Core Concepts Demonstrated
- **File-system routing** with the _App Router_.
- **Static vs. dynamic** route segments (`about/` vs. `[productId]/`).
- **Nested & catch-all routes** (`[[...slug]]`).
- **Shared & nested layouts** for consistent UI composition.
- **Per-route and global 404 pages** via `not-found.tsx`.
- **Server Components vs. Client Components** boundaries.
- **SEO metadata** using the `metadata` export.
- **Type safety** through TypeScript strict mode.
- **Styling pipeline** with Tailwind CSS and global CSS.
- **Optimised image & asset delivery** from `/public`.
- **Accessibility (a11y)** best practices.
- **Linting & formatting** workflow powered by ESLint.

---

## 4. Learning Goals
1. Understand how the new **App Router** supersedes the legacy *Pages Router*.
2. Practise building **dynamic, nested and catch-all** routing patterns.
3. Master **layout composition** for shared headers/footers.
4. Customise **404 responses** at both global and route level.
5. Reinforce component isolation with **Server vs. Client** boundaries.
6. Apply **Tailwind utility classes** in a scalable way.
7. Strengthen **SDLC awareness** by focusing on design & build phases.

---

## 5. SDLC Phases – Reviewed vs. Not Reviewed
| Phase                       | Covered | Notes                                                                    |
|-----------------------------|:-------:|--------------------------------------------------------------------------|
| Requirements / Planning     |   ✔︎    | Scope defined: routing showcase only                                     |
| System & UI Design          |   ✔︎    | Folder architecture, layouts, a11y strategy                               |
| Implementation / Build      |   ✔︎    | All routes & components coded                                             |
| Testing (unit / e2e)        |   ✖︎    | Out of scope, manual validation only                                      |
| Deployment / Release        |   ✖︎    | Local dev server assumed; no CI/CD pipeline                               |
| Maintenance / Operations    |   ✖︎    | Not part of demo                                                          |

---

## 6. Current Scope
- **Front-end only**; no database or API routes.
- Focus on **routing mechanics**, not on business features.
- Designed to run in **development mode** (`next dev`).
- No authentication, global state management or i18n.
- Tailwind used for rapid styling; no design-system integration.

---

## 7. Risks & Considerations
- Future **Next.js API changes** may break demo code.
- Absence of **automated tests** increases regression risk.
- Dependencies (Tailwind, ESLint plugins) could become outdated.
- Limited scope might lead to **misconceptions about production readiness**.

---

## 8. Getting Started
### Prerequisites
- **Node.js ≥ 18**
- **npm ≥ 9**

### Installation & Run
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Recommended VS Code Extensions
- “Tailwind CSS IntelliSense”
- “ESLint”

---

## 9. License & Credits
This project is released under the **MIT License**. Feel free to use it as a learning resource.

Demo created by **<your-name>**, inspired by the official Next.js examples.

