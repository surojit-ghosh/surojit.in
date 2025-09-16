"use client";

import React from "react";
import Container from "./container";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { USER } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

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
        <header className="bg-background/75 sticky top-0 z-50 pt-2 shadow-[0_0_16px_0_black]/8 backdrop-blur-lg dark:shadow-[0_0_16px_0_black]/80 [&>div]:border-t">
            <Container className="flex flex-row items-center justify-between p-2">
                <Link href={"/"}>
                    <h1 className="rounded-lg px-2 py-0.5 text-xl font-bold">{USER.logo}</h1>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden space-x-4 md:flex">
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
                                "size-8 rounded-full"
                            )}
                        >
                            <Icons.github className="size-4" />
                        </Link>
                        <ThemeToggle />

                        {/* Mobile Navigation */}
                        <div className="md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        size={"icon"}
                                        variant="outline"
                                        className="size-8 rounded-full"
                                    >
                                        <Menu className="size-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent side="bottom" align="end" sideOffset={8}>
                                    {links.map((link) => (
                                        <DropdownMenuItem key={link.href} asChild>
                                            <Link href={link.href} className="w-full">
                                                {link.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
