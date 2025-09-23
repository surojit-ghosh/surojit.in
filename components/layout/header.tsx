"use client";

import React from "react";
import Container from "@/components/layout/container";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { USER } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import useIsScrolled from "@/lib/hooks/use-is-scrolled";
import { usePathname } from "next/navigation";

type Link = {
    name: string;
    href: string;
};

const links: Link[] = [
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
];

const Header = () => {
    const isScrolled = useIsScrolled(10);
    const pathname = usePathname();

    return (
        <header
            className={cn(
                "bg-background sticky top-0 z-50 pt-2 transition-shadow [&>div]:border-t",
                isScrolled && "shadow-[0_0_16px_0_black]/8 dark:shadow-[0_0_16px_0_black]/80"
            )}
        >
            <Container className="flex flex-row items-center justify-between py-2">
                <Link href="/">
                    <h1 className="rounded-lg text-xl font-bold">{USER.logo}</h1>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden space-x-4 md:flex">
                        {links.map((link: Link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-muted-foreground hover:text-foreground text-sm transition-colors hover:bg-transparent dark:hover:bg-transparent",
                                    pathname.split("/")[1] === link.href.split("/")[1] &&
                                        "text-foreground"
                                )}
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
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "text-muted-foreground hover:text-foreground text-sm transition-colors hover:bg-transparent dark:hover:bg-transparent",
                                                    pathname.split("/")[1] ===
                                                        link.href.split("/")[1] && "text-foreground"
                                                )}
                                            >
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
