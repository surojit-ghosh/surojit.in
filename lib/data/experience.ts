import { Terminal } from "lucide-react";

export type IExperience = {
    company: string;
    logo: string;
    active: boolean;
    duration: string[];
    role: {
        title: string;
        description: string;
        duration: string[];
        tech: string[];
        icon: React.ElementType;
    }[];
};

export const experiences: IExperience[] = [
    {
        company: "Freelance",
        active: true,
        logo: "/assets/logos/surojit.png",
        duration: ["2022"],
        role: [
            {
                title: "Full-Stack Developer",
                description: `- Developed 15+ real-world projects, including full-stack web apps and automation tools (like Discord bots).
- Practiced the entire SDLC — from planning and development to testing, deployment, and ongoing support.
- Built scalable, production-ready applications with modern web technologies.
- Focused on clean architecture, performance, and maintainability in every project.`,
                duration: ["2022"],
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
