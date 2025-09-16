import { IFrontMatter } from "@/lib/mdx";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Icons } from "./icons";
import { ArrowRight, ExternalLink } from "lucide-react";
import { techStack } from "../lib/techs";
import { SimpleTooltip } from "./ui/tooltip";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const ProjectsCard = ({ slug, details }: { slug: string; details: IFrontMatter }) => {
    return (
        <div className="bg-card col-span-1 flex h-full flex-col space-y-4 p-4 shadow-sm">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                {details.image && (
                    <Image
                        src={details.image as string}
                        alt={details.title}
                        fill
                        className="object-cover"
                    />
                )}
            </AspectRatio>
            <div className="flex items-center justify-between">
                <Link key={slug} href={`/projects/${slug}`}>
                    <h2 className="font-sans text-xl font-semibold">{details.title}</h2>
                </Link>
                <div className="flex items-center justify-center gap-2">
                    {details.github && (
                        <Link href={details.github} target="_blank" rel="noopener noreferrer">
                            <Icons.github className="text-muted-foreground size-5" />
                        </Link>
                    )}

                    {details.preview && (
                        <Link href={details.preview} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="text-muted-foreground size-5" />
                        </Link>
                    )}
                </div>
            </div>

            <p className="text-muted-foreground">{details.description}</p>

            <div className="mt-auto flex flex-wrap items-center gap-0.5">
                {details.techStack?.map((tech) => {
                    const Icon = techStack.find((t) => t.key === tech);

                    return (
                        <span
                            className="scale-90 transition-transform duration-300 hover:scale-110"
                            key={tech}
                        >
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
                {details.stat == false ? (
                    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-red-400/20 px-3 py-1 text-xs">
                        <span className="block h-2 w-2 animate-pulse rounded-full bg-red-400" />
                        <h3>Building</h3>
                    </div>
                ) : (
                    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400/20 px-3 py-1 text-xs">
                        <h3>{details.stat}</h3>
                    </div>
                )}

                <Link
                    href={`/projects/${slug}`}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "text-muted-foreground hover:text-foreground/80 hover:bg-transparent dark:hover:bg-transparent"
                    )}
                >
                    View Details <ArrowRight className="size-4" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectsCard;
