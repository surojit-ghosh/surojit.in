"use client";

import React from "react";
import Container from "./container";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { USER } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

type Link = {
    name: string;
    href: string;
};

const links: Link[] = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const Header = () => {
    const { theme, setTheme } = useTheme();

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className="bg-background sticky top-0 z-50 pt-2 [&>div]:border-t">
            <Container className="flex flex-row items-center justify-between p-2">
                <h1 className="text-xl font-bold tracking-tight">{USER.logo}</h1>

                <div className="flex items-center gap-4">
                    {/* Links */}
                    <div className="hidden space-x-4">
                        {links.map((link: Link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button
                            size={"icon"}
                            variant={"outline"}
                            className="size-8 cursor-pointer rounded-full"
                            onClick={handleToggleTheme}
                        >
                            {theme === "dark" ? (
                                <SunIcon className="size-4" />
                            ) : (
                                <MoonStarIcon className="size-4" />
                            )}
                        </Button>

                        <Link
                            href={"https://github.com/surojit-ghosh/website"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "icon" }),
                                "size-8 cursor-pointer rounded-full"
                            )}
                        >
                            <Icons.github className="size-4" />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
