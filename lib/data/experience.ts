import { Terminal } from "lucide-react";

export type IExperience = {
    company: string;
    logo: string;
    active: boolean;
    duration: string[];
    location: string;
    role: {
        title: string;
        description: string;
        duration: string[];
        location: string;
        tech: string[];
        icon: React.ElementType;
    }[];
};

export const experiences: IExperience[] = [
    {
        company: "CyberPeak IT Solutions",
        active: true,
        logo: "/assets/logos/cyberpeak.png",
        duration: ["May 2026"],
        location: "Kolkata · On-site",
        role: [
            {
                title: "Junior Full Stack Developer (Internship)",
                description: `In-house Project: PlanQuill

- Designed and shipped the AI project-planning agent end to end.
- Developed human-in-the-loop review before backlog apply.
- Added automatic time logging from board status changes.
- Enhanced core workspace features for boards and tasks.

Client Project: Neo Entertainment

- Developed bidirectional Google Calendar sync for suppliers.
- Implemented OAuth connect, webhook watches, and sync recovery.
- Mirrored booking create, update, and delete to Google Calendar.

Client Project: [RSJ Steel](https://rsjsteel.in)

- Designed the B2B steel catalog site end to end.
- Developed product specs, grade tables, and WhatsApp RFQ.
- Implemented SEO, sitemap, and Open Graph for go-live.`,
                duration: ["May 2026"],
                location: "Kolkata · On-site",
                tech: [
                    "nextjs",
                    "react",
                    "ts",
                    "js",
                    "nodejs",
                    "expressjs",
                    "nestjs",
                    "prisma",
                    "pg",
                    "tailwind",
                    "shadcnui",
                    "redux",
                    "reduxToolkit",
                    "axios",
                    "zod",
                    "langgraph",
                    "docker",
                    "githubactions",
                    "jest",
                    "nginx",
                ],
                icon: Terminal,
            },
        ],
    },
    {
        company: "Capgemini",
        active: false,
        logo: "/assets/logos/capgemini.png",
        duration: ["Jan 2026"],
        location: "Kolkata · On-site",
        role: [
            {
                title: "Analyst A4 · Software Engineer (Trainee)",
                description: `- Learned React, routing, forms, and client state management.
- Built role-based dashboards with protected routes and validated forms.
- Built multi-role food-delivery flows for customers, restaurants, and drivers.`,
                duration: ["May 2026", "Jul 2026"],
                location: "Remote",
                tech: [
                    "html",
                    "css",
                    "js",
                    "nodejs",
                    "react",
                    "reactRouter",
                    "vite",
                    "axios",
                    "zustand",
                    "redux",
                    "reduxToolkit",
                    "tanstackQuery",
                    "formik",
                    "yup",
                    "tailwind",
                    "bootstrap",
                    "expressjs",
                    "jest",
                    "reacttestinglibrary",
                ],
                icon: Terminal,
            },
            {
                title: "Analyst A4 · Software Engineer (Trainee)",
                description: `- Learned Java, Spring Boot, JPA/Hibernate, and PostgreSQL in the backend track.
- Built REST services with layered controller/service/entity architecture.
- Built relational models for customers, orders, products, and payments.    `,
                duration: ["Jan 2026", "Apr 2026"],
                location: "Kolkata · On-site",
                tech: [
                    "html",
                    "css",
                    "java",
                    "springboot",
                    "pg",
                    "hibernate",
                    "junit",
                    "mockito",
                    "thymeleaf",
                    "jenkins",
                ],
                icon: Terminal,
            },
        ],
    },
    {
        company: "Freelance",
        active: false,
        logo: "/assets/logos/surojit.png",
        duration: ["Aug 2022", "Dec 2025"],
        location: "Remote",
        role: [
            {
                title: "Full-Stack Developer",
                description: `- Delivered 15+ client projects end to end across web apps and integrations.
- Handled full lifecycle from requirement gathering to delivery and deployment.
- Owned client communication, scoping, UI, APIs, data modeling, and handoff.
- Maintained and iterated production client apps after launch.`,
                duration: ["Aug 2022", "Dec 2025"],
                location: "Remote",
                tech: [
                    "nextjs",
                    "react",
                    "ts",
                    "js",
                    "nodejs",
                    "expressjs",
                    "tailwind",
                    "shadcnui",
                    "prisma",
                    "pg",
                    "mongo",
                    "payload",
                    "zod",
                    "axios",
                    "tanstackQuery",
                    "mdx",
                    "docker",
                    "githubactions",
                    "betterauth",
                ],
                icon: Terminal,
            },
        ],
    },
];
