import { Icons } from "@/components/icons";
import { Linkedin, Mail } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

export const USER = {
    logo: "surojit",
    name: "Surojit Ghosh",
    subheading: "Full-Stack Developer building cool stuff",
    description: "Software engineer crafting modern, responsive, and intuitive digital experiences—shipping fast with purpose and clarity.",
    avatar: "/surojit.webp",
    mail: "contact@surojit.in"
};

export type ISocialLink = {
    platform: string;
    url: string;
    icon: React.ElementType;
};

export const SOCIAL_LINKS: ISocialLink[] = [
    { platform: "GitHub", url: "https://github.com/surojit-ghosh", icon: Icons.github },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ghoshsurojit/", icon: Linkedin },
    { platform: "Twitter", url: "https://x.com/surojitghosh_", icon: IconBrandX },
    { platform: "Mail", url: "mailto:contact@surojit.in", icon: Mail },
];