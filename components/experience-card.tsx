"use client";

import { IExperience } from "@/lib/data/experience";
import React, { useState } from "react";
import Container from "./layout/container";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Calendar, ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Prose } from "@/components/ui/typography";
import ReactMarkdown from "react-markdown";
import { Badge } from "./ui/badge";
import { techStack } from "@/lib/techs";

const ExperienceCard = ({ experience }: { experience: IExperience }) => {
    const [isOpen, setIsOpen] = useState<boolean>(experience.active);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <Container className="flex p-0">
                <div className="flex items-center justify-center border-r p-4">
                    <div className="size-8 md:size-14">
                        <AspectRatio ratio={1} className="">
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                fill
                                className="rounded-sm object-cover"
                            />
                        </AspectRatio>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <h2 className="flex items-center gap-4 font-sans text-lg font-semibold md:text-2xl">
                        {experience.company}

                        <span className="relative flex items-center justify-center">
                            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                        </span>
                    </h2>
                    <h3 className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                        <Calendar className="size-4" />
                        {experience.duration.length === 1 ? (
                            <span className="flex items-center gap-1">
                                {experience.duration[0]} - <Icons.infinity className="size-4" />
                            </span>
                        ) : (
                            experience.duration.join(" - ")
                        )}
                    </h3>
                </div>

                <div className="flex items-center justify-center border-l p-4">
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                            <ChevronsUpDown />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </Container>

            <CollapsibleContent>
                <Container>
                    <div className="before:bg-border relative space-y-4 before:absolute before:top-0 before:left-3 before:h-full before:w-px">
                        {experience.role.map((role, index) => {
                            const isLast = index === experience.role.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`relative ${isLast ? "before:bg-background before:absolute before:top-6 before:left-3 before:h-full before:w-px" : ""}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-muted text-muted-foreground border-border flex size-6 shrink-0 items-center justify-center rounded-sm border">
                                            <role.icon className="size-4" />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-foreground flex items-center gap-4 font-sans text-base font-medium md:text-xl">
                                                {role.title}
                                            </h4>
                                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                                <Calendar className="size-4" />
                                                {role.duration.length === 1 ? (
                                                    <span className="flex items-center gap-1 font-sans">
                                                        {role.duration[0]} -{" "}
                                                        <Icons.infinity className="size-4" />
                                                    </span>
                                                ) : (
                                                    role.duration.join(" - ")
                                                )}
                                            </div>

                                            <Prose className="mt-4">
                                                <ReactMarkdown>{role.description}</ReactMarkdown>
                                            </Prose>

                                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                                {role.tech?.map((tech) => {
                                                    const Tech = techStack.find(
                                                        (t) => t.key === tech
                                                    );

                                                    return (
                                                        <Badge
                                                            variant={"secondary"}
                                                            className="gap-1 py-1"
                                                            key={tech}
                                                        >
                                                            {Tech?.icon && (
                                                                <Tech.icon className="!size-4" />
                                                            )}
                                                            {Tech?.name}
                                                        </Badge>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default ExperienceCard;
