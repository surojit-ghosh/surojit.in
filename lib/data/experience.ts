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
        company: "Capgemini",
        active: true,
        logo: "/assets/logos/capgemini.png",
        duration: ["Jan 2026"],
        location: "Kolkata · On-site",
        role: [
            {
                title: "Analyst A4 · Software Engineer (Trainee)",
                description: "",
                duration: ["May 2026"],
                location: "Remote",
                tech: [
                    "html",
                    "css",
                    "tailwind",
                    "bootstrap",
                    "js",
                    "react",
                    "reactRouter",
                    "axios",
                    "zustand",
                    "redux",
                    "reduxToolkit",
                    "tanstackQuery"
                ],
                icon: Terminal,
            },
            {
                title: "Analyst A4 · Software Engineer (Trainee)",
                description: "",
                duration: ["Jan 2026", "Apr 2026"],
                location: "Kolkata · On-site",
                tech: [
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
        company: "CyberPeak IT Solutions",
        active: true,
        logo: "/assets/logos/cyberpeak.png",
        duration: ["May 2026"],
        location: "Kolkata · On-site",
        role: [
            {
                title: "Junior Full Stack Developer (Internship)",
                description: "",
                duration: ["May 2026"],
                location: "Kolkata · On-site",
                tech: [
                    "nextjs",
                    "react",
                    "expressjs",
                    "nestjs",
                    "ts",
                    "tailwind",
                    "shadcnui",
                    "prisma",
                    "pg",
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
                description: `- Developed 15+ real-world projects, including full-stack web apps and automation tools (like Discord bots).
- Practiced the entire SDLC — from planning and development to testing, deployment, and ongoing support.
- Built scalable, production-ready applications with modern web technologies.
- Focused on clean architecture, performance, and maintainability in every project.`,
                duration: ["Aug 2022", "Dec 2025"],
                location: "Remote",
                tech: [
                    "nextjs",
                    "react",
                    "ts",
                    "tailwind",
                    "shadcnui",
                    "prisma",
                    "pg",
                    "mdx",
                    "mongo",
                    "go",
                ],
                icon: Terminal,
            },
        ],
    },
];
