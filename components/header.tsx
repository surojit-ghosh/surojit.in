"use client";

import React from "react";
import Container from "./container";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { USER } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";

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
    return (
        <header className="bg-background sticky top-0 z-50 pt-2 [&>div]:border-t">
            <Container className="flex flex-row items-center justify-between p-2">
                <Link href={"/"}>
                    <h1 className="bg-mutedd rounded-lg px-2 py-0.5 text-xl font-bold">
                        {USER.logo}
                    </h1>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Links */}
                    <div className="space-x-4">
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
                        <Link
                            href={"https://github.com/surojit-ghosh/surojit.in"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "icon" }),
                                "size-8 cursor-pointer rounded-full"
                            )}
                        >
                            <Icons.github className="size-4" />
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
