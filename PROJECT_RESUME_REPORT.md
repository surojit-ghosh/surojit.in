# Project Resume Report

## 1. Project Identity
- **Project name:** `surojit.in`.
- **One-sentence description:** A personal portfolio website built with Next.js App Router and TypeScript to showcase projects, experience, education, and GitHub contribution activity.
- **Application type:** Personal portfolio / static-content-driven website with a small server-side content layer.
- **Repository structure:** Next.js application with an `app/` frontend, reusable `components/`, feature-specific `features/`, content files in `lib/data/`, and public assets in `public/`.
- **Live URL and repository URL:** Live site `https://surojit.in`; repository `https://github.com/surojit-ghosh/surojit.in`.
- **Current completion/deployment status:** Public repository with a deployed-looking production homepage metadata and live URL references. The code also includes Vercel Analytics and an Open Graph image route, but actual deployment status beyond these signals is **Needs confirmation**.

## 2. Problem and Users
- **Problem the project solves:** Presents the author’s projects, professional experience, education, and contact details in a structured personal website.
- **Intended users:** Visitors evaluating the author’s background, recruiters, hiring managers, collaborators, and the author themself.
- **Main user workflows:**
  - Land on the homepage and view hero, featured projects, GitHub contribution activity, experience, and education.
  - Browse `/projects` and individual project pages sourced from MDX files.
  - Browse `/blog` for markdown/MDX content.
  - Switch themes and open external links to GitHub, preview URLs, and social profiles.
- **Needs confirmation:** Whether the site is used primarily as a job-search portfolio, a personal brand site, or a broader content site; whether all linked pages are publicly reachable in production.

## 3. Implemented Features

### Authentication and authorization
- No verified authentication or authorization flow is present in the repository.
- No login, session, role, or permission system is evident in the inspected files.

### Core product features
- **Personal portfolio homepage** with hero, projects, GitHub contributions, experience, and education sections (`app/page.tsx`, `components/sections/*`).
- **Project listing and project detail pages** with MDX-backed content (`app/projects/page.tsx`, `app/projects/[slug]/page.tsx`, `lib/mdx.ts`, `lib/data/projects/*.mdx`).
- **Blog section** exists in routing and MDX-related components (`app/blog/page.tsx`, `components/blog/mdx.tsx`, `components/blog/code-copy-button.tsx`).
- **Theme switching** via `ThemeToggle` and `next-themes` (`components/theme-toggle.tsx`, `components/layout/providers.tsx`).
- **Social/navigation affordances** in the header and footer (`components/layout/header.tsx`, `components/layout/footer.tsx`).

### Dashboard/frontend
- Responsive header with desktop and mobile navigation, active-route highlighting, and sticky scroll shadow behavior (`components/layout/header.tsx`, `lib/hooks/use-is-scrolled.tsx`).
- Structured card-based presentation for experience and education (`components/experience-card.tsx`, `components/education-card.tsx`).
- Project cards and project thumbnails likely render featured project grids (`components/proejcts-card.tsx`, `components/thumbnail.tsx`).
- Theme-aware global layout and typography styling (`app/layout.tsx`, `app/globals.css`).

### Backend and APIs
- **Open Graph image API route** implemented as a Next.js edge route (`app/api/og/route.tsx`).
- **Server-side data fetching for GitHub contributions** via a dedicated server action (`features/portfolio/actions/github-contributions.ts`).
- No custom CRUD API, auth API, or database API routes were verified.

### Database and data modeling
- No database schema, migrations, ORM models, or persistent data store were found in the inspected files.
- Portfolio content is file-based and typed through MDX frontmatter (`lib/mdx.ts`, `lib/data/projects/*.mdx`).
- Experience and education are structured as static TypeScript arrays (`lib/data/experience.ts`, `lib/data/education.ts`).

### Real-time functionality
- No verified real-time synchronization, websockets, subscriptions, or live collaboration features were found.
- GitHub contributions are fetched server-side and cached with Next.js revalidation rather than streamed live (`features/portfolio/actions/github-contributions.ts`).

### AI or external integrations
- **GitHub contributions integration** through `github-contributions-api.jogruber.de` (`config/site.ts`, `features/portfolio/actions/github-contributions.ts`).
- **Google Analytics** is loaded in the root layout (`app/layout.tsx`).
- **Vercel Analytics** is included in the root layout (`app/layout.tsx`).
- **Open Graph image generation** uses a fetched favicon and custom font for social previews (`app/api/og/route.tsx`).

### Search, analytics, payments, uploads, notifications, etc.
- **Analytics:** Google Analytics and Vercel Analytics are present (`app/layout.tsx`).
- No verified search, payments, uploads, notifications, or email-sending flows were found.

### Security and validation
- External GitHub link in the header uses `rel="noopener noreferrer"` (`components/layout/header.tsx`).
- MDX rendering uses configured components and rehype/remark tooling (`lib/mdx.ts`, `components/blog/mdx.tsx`).
- No server-side input validation or security middleware was found beyond standard framework patterns.

### Deployment and operations
- Next.js metadata and Open Graph configuration are set for production sharing (`app/layout.tsx`).
- The app uses `next build` / `next start` scripts and standard Next.js deployment flow (`package.json`).
- Vercel-specific analytics and edge runtime usage suggest deployment on Vercel, but this is **Needs confirmation**.

## 4. Technical Architecture
- **Frontend architecture:** Next.js App Router with server components for content pages and client components for interactive parts like header, theme toggle, and provider wrappers (`app/*`, `components/layout/*`, `components/sections/*`).
- **Backend architecture:** Minimal server-side layer inside Next.js, consisting of an edge API route for Open Graph images and a server action for GitHub contributions (`app/api/og/route.tsx`, `features/portfolio/actions/github-contributions.ts`).
- **Database design:** No database detected. Content is stored as MDX files and static TypeScript data.
- **API design:** Internal API surface is very small: `/api/og` for image generation. External data is fetched from the GitHub contributions API.
- **State and server-data management:** `@tanstack/react-query` is initialized globally with caching defaults in `components/layout/providers.tsx`, but no direct query usage was verified in the inspected files. `next-themes` manages persisted theme state.
- **Authentication/authorization flow:** None verified.
- **Background jobs or queues:** None verified.
- **Caching:** GitHub contributions fetch uses `revalidate: 86400` for daily refresh (`features/portfolio/actions/github-contributions.ts`). React Query default caching is configured (`components/layout/providers.tsx`).
- **Real-time communication:** None verified.
- **External services:** GitHub contributions API, Google Analytics, Vercel Analytics, and Google favicon lookup in the OG route.
- **Testing:** No automated test files or test scripts were verified in the inspected files.
- **Deployment:** Standard Next.js deployment, likely compatible with Vercel. Edge runtime is used for the OG route.

**Concise request/data flow:**
1. Browser loads `app/layout.tsx`, which sets fonts, analytics, providers, header, and footer.
2. Homepage `app/page.tsx` composes server-rendered and client-rendered sections.
3. Project data is read from `lib/data/projects/*.mdx` through `lib/mdx.ts`, compiled with `next-mdx-remote`, and displayed in cards and detail pages.
4. GitHub contribution activity is fetched server-side from the external API and cached for a day.
5. `/api/og` generates a social preview image at request time using edge runtime and a bundled font.

## 5. Verified Technology Stack

### Languages
- **TypeScript:** Primary application language across app, components, data, and config files.
- **MDX:** Used for project content authoring (`lib/data/projects/*.mdx`).
- **CSS:** Global styling via `app/globals.css` and Tailwind utility classes.
- **JavaScript:** Minor usage through framework/config files and package ecosystem; TypeScript dominates.

### Frontend
- **Next.js 15:** App Router, server components, metadata, edge route, and image generation (`package.json`, `app/*`).
- **React 19:** UI rendering layer (`package.json`).
- **Tailwind CSS 4:** Utility-first styling (`package.json`, class names throughout components).
- **shadcn/ui components:** `Button`, dropdown, tooltip, collapsible, separator, tabs, aspect ratio, etc. are present in `components/ui/*` and `components.json`.
- **next-themes:** Theme switching and persistence (`components/layout/providers.tsx`, `components/theme-toggle.tsx`).
- **Motion:** Installed; usage not clearly verified in the inspected files.

### Backend
- **Next.js server actions:** Used for GitHub contributions fetching (`features/portfolio/actions/github-contributions.ts`).
- **Next.js edge runtime:** Used for the Open Graph API route (`app/api/og/route.tsx`).

### Databases and ORMs
- **None verified.** No ORM, migrations, or database client detected.

### AI
- **None verified.** No LLM, agent, or AI tooling found in the inspected files.

### APIs and integrations
- **GitHub Contributions API:** External service for activity graph (`config/site.ts`, `features/portfolio/actions/github-contributions.ts`).
- **Google Analytics:** Inline script in root layout (`app/layout.tsx`).
- **Vercel Analytics:** App-wide analytics component (`app/layout.tsx`).
- **next-mdx-remote:** Content compilation pipeline for MDX (`lib/mdx.ts`).

### Authentication and security
- **next-themes:** Theme preference storage is not authentication, but it is a client state integration.
- **rel=noopener noreferrer:** Safer external links in header.
- **rehype-external-links:** Installed and likely used for external-link hardening in MDX, but usage should be confirmed in `components/blog/mdx.tsx`.

### Testing
- **None verified.** No test runner or test suite files were inspected.

### DevOps/deployment
- **Vercel analytics:** Suggests deployment on Vercel.
- **Next.js build/start scripts:** Standard production workflow.
- **Edge runtime and metadata:** Production-oriented configuration.

### Developer tools
- **ESLint:** Linting (`package.json`, `eslint.config.mjs`).
- **Prettier:** Formatting (`package.json`, `.prettierrc.json`).
- **TypeScript:** Static typing and config (`tsconfig.json`).
- **Tailwind tooling:** `@tailwindcss/postcss`, `prettier-plugin-tailwindcss`, `tw-animate-css`.

## 6. Engineering Complexity
Strongest verified engineering work:
- **MDX-backed content system:** File-based content is parsed into typed frontmatter and rendered as rich content (`lib/mdx.ts`, `lib/data/projects/*.mdx`).
- **App Router composition:** The homepage mixes server and client components cleanly across sections and layout (`app/page.tsx`, `app/layout.tsx`).
- **Edge OG image generation:** Custom social preview image route with font loading and dynamic mode handling (`app/api/og/route.tsx`).
- **Theme persistence and UI state:** Global providers and theme toggling with hydration-safe setup (`components/layout/providers.tsx`, `components/theme-toggle.tsx`).
- **External data integration with fallback handling:** GitHub contributions fetch includes error handling and safe empty-state fallback (`features/portfolio/actions/github-contributions.ts`).
- **Responsive navigation and route awareness:** Header adapts to desktop/mobile and highlights the active route (`components/layout/header.tsx`).

Complexity that is present but modest:
- Static data-driven experience/education sections.
- Project filtering and homepage curation.

Not verified:
- Multi-tenant design, role-based permissions, queues, caching layers beyond framework defaults, or production-scale performance tuning.

## 7. My Contribution — Questions for Me
To separate your contribution from the existing repository, answer these:
- What parts did **you personally design and implement** in this repo?
- Was this a **personal project, freelance work, internship, employment, or academic project**?
- What **dates** did you actively work on it?
- Did you work **alone or on a team**? If on a team, what was your exact role?
- Which features are **actually deployed and used in production** today?
- Which parts are **prototype, unfinished, or never shipped**?
- What production problems, user feedback, or bugs did you solve?
- Are there any truthful metrics you can provide, such as page views, projects published, or deployment frequency?
- What were the hardest technical challenges you solved?
- Did you own the content, the frontend, the deployment, or the full stack?

## 8. Resume Bullet Candidates

### Projects section candidates
- Built a Next.js App Router portfolio site with TypeScript, MDX-driven project pages, and reusable UI components to present projects, experience, and education in a structured personal website.
- Implemented a file-based content pipeline that reads project MDX frontmatter, compiles rich markdown content, and renders dynamic project detail pages with shared components.
- Added an edge-based Open Graph image route and metadata configuration to improve social sharing previews for the personal site.
- Integrated a GitHub contributions section backed by an external API with server-side fetching and daily revalidation for cached activity display.

### Experience section candidates
- Developed a responsive portfolio interface using Next.js, Tailwind CSS, and shadcn/ui components with client/server composition for navigation, theming, and content sections.
- Configured global analytics and theme persistence across the application while keeping the content architecture file-based and easy to update.

**Placeholders you may optionally fill with confirmation:**
- Showcased work to [recruiters / clients / employers / peers].
- Maintained [X] live projects or [X] published case studies.

## 9. ATS Keywords
Verified keywords supported by the implementation:
- Next.js App Router
- React
- TypeScript
- MDX
- Server components
- Client components
- Edge runtime
- Open Graph image generation
- Theme switching
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Query
- Static content rendering
- File-based content management
- Metadata / SEO
- Analytics integration
- Responsive design
- Component composition
- Server-side data fetching
- Revalidation / caching
- External API integration
- UI state persistence

## 10. Resume Recommendation
- **Full-stack relevance:** 6/10
- **Technical depth:** 5/10
- **Uniqueness:** 6/10
- **Production credibility:** 5/10
- **Resume value:** 7/10
- **Best target roles:** Frontend developer, full-stack developer, React/Next.js developer, portfolio/project-based applications, junior-to-mid web engineer roles.
- **Strongest two features:**
  1. MDX-driven portfolio content system with reusable rendering.
  2. Edge Open Graph image route plus polished App Router layout/theme architecture.
- **Weaknesses or missing evidence:** No database, auth, complex backend, tests, or clear production metrics were verified. Several claims in the MDX content are self-reported and should be treated as **Needs confirmation** unless you can corroborate them.
- **Recommendation:** **Include if space permits**. It is a strong personal portfolio project and a credible frontend-heavy showcase, but it is not strong evidence of deep backend or large-scale systems work.

## Portfolio Project Note
- **Project ownership note:** This is a **portfolio/personal project done for myself**.
