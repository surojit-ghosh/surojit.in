import { IFrontMatter } from "@/lib/mdx";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Icons } from "./icons";
import { ExternalLink } from "lucide-react";

const ProjectsCard = ({ slug, details }: { slug: string; details: IFrontMatter }) => {
    return (
        <div className="bg-card col-span-1 space-y-4 p-4">
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
        </div>
    );
};

export default ProjectsCard;
