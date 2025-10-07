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
                description: `- Built 15+ real-world projects, including full-stack web apps and automation tools (e.g., Discord bots).
- Followed complete SDLC processes — from requirement analysis to deployment and maintenance.
- Gained hands-on experience in both frontend and backend development.
- Delivered production-ready, scalable, and maintainable solutions.`,
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
