"use client";

import { IFrontMatter } from "@/lib/mdx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Icons } from "./icons";
import { ArrowRight, ExternalLink } from "lucide-react";
import { techStack } from "../lib/techs";
import { SimpleTooltip } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Badge } from "./ui/badge";

const ProjectsCard = ({ slug, details }: { slug: string; details: IFrontMatter }) => {
    const { theme } = useTheme();
    const [image, setImage] = useState<string | null>(details.image as string);

    useEffect(() => {
        if (details.image) {
            setImage((details.image as string).replace(/\.png$/, `-${theme || "dark"}.png`));
        }
    }, [theme, details.image]);

    return (
        <div className="bg-card col-span-1 flex h-full flex-col space-y-4 rounded-sm p-4 shadow-sm">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-sm">
                {image && (
                    <Image
                        src={image}
                        alt={details.title}
                        fill
                        className="rounded-sm object-cover"
                    />
                )}
            </AspectRatio>
            <div className="flex items-center justify-between gap-4">
                <Link key={slug} href={`/projects/${slug}`}>
                    <h2 className="font-sans text-xl font-semibold underline-offset-4 hover:underline">
                        {details.title}
                    </h2>
                </Link>
                <div className="flex items-center justify-center gap-2">
                    {details.github && (
                        <SimpleTooltip content={"Source Code"}>
                            <Link href={details.github} target="_blank" rel="noopener noreferrer">
                                <Icons.github className="text-muted-foreground hover:text-foreground size-5 transition-colors" />
                            </Link>
                        </SimpleTooltip>
                    )}

                    {details.preview && (
                        <SimpleTooltip content={"Live Preview"}>
                            <Link href={details.preview} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="text-muted-foreground hover:text-foreground size-5 transition-colors" />
                            </Link>
                        </SimpleTooltip>
                    )}
                </div>
            </div>

            <p className="text-muted-foreground">{details.description}</p>

            <div className="mt-auto flex flex-wrap items-center gap-1">
                {details.techStack?.map((tech) => {
                    const Icon = techStack.find((t) => t.key === tech);

                    return (
                        <span className="scale-90 transition-transform hover:scale-110" key={tech}>
                            {Icon && (
                                <SimpleTooltip content={Icon.name}>
                                    <Icon.icon className="size-6" />
                                </SimpleTooltip>
                            )}
                        </span>
                    );
                })}
            </div>

            <div className="flex items-center justify-between">
                {details.status == false ? (
                    <Badge variant={"secondary"} className="gap-2 bg-red-500/10 py-1">
                        <span className="block h-2 w-2 animate-pulse rounded-full bg-red-500" />
                        <h3>Building</h3>
                    </Badge>
                ) : (
                    <Badge variant={"secondary"} className="gap-2 bg-green-500/10 py-1">
                        <span className="block h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        <h3>Completed</h3>
                    </Badge>
                )}

                <Link
                    href={`/projects/${slug}`}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "text-muted-foreground hover:text-foreground/80 h-fit !p-0 transition-colors hover:bg-transparent dark:hover:bg-transparent"
                    )}
                >
                    View Details <ArrowRight className="size-4" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectsCard;
