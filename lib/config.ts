import { Icons } from "@/components/icons";
import { Mail } from "lucide-react";

export const USER = {
    logo: "surojit",
    name: "Surojit Ghosh",
    subheading: "Full-Stack Developer",
    description:
        "Software engineer crafting modern, responsive, and intuitive digital experiences—shipping fast with purpose and clarity.",
    avatar: "/surojit.webp",
    mail: "contact@surojit.in",
};

export type ISocialLink = {
    platform: string;
    url: string;
    icon: React.ElementType;
};

export const SOCIAL_LINKS: ISocialLink[] = [
    { platform: "GitHub", url: "https://github.com/surojit-ghosh", icon: Icons.github },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/ghoshsurojit/",
        icon: Icons.linkedin,
    },
    { platform: "Twitter", url: "https://x.com/surojitghosh_", icon: Icons.x },
    { platform: "Mail", url: "mailto:contact@surojit.in", icon: Mail },
];
