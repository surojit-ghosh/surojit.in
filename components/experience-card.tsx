"use client";

import { IExperience } from "@/lib/data/experience";
import React, { useState } from "react";
import Container from "./layout/container";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Calendar, ChevronsUpDown, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Prose } from "@/components/ui/typography";
import ReactMarkdown from "react-markdown";
import { Badge } from "./ui/badge";
import { techStack } from "@/lib/techs";
import { motion, AnimatePresence } from "motion/react";

const ExperienceMeta = ({ duration, location }: { duration: string[]; location: string }) => (
    <div className="text-muted-foreground mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
        <span className="flex items-center gap-2">
            <Calendar className="size-3.5 shrink-0" />
            {duration.length === 1 ? (
                <span className="flex items-center gap-1">
                    {duration[0]} - <Icons.infinity className="size-3.5" />
                </span>
            ) : (
                <span>{duration.join(" - ")}</span>
            )}
        </span>

        <span className="bg-muted-foreground/40 hidden size-1 rounded-full sm:block" />

        <span className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" />
            <span>{location}</span>
        </span>
    </div>
);

const ExperienceCard = ({ experience }: { experience: IExperience }) => {
    const [isOpen, setIsOpen] = useState<boolean>(experience.active);

    return (
        <div>
            <Container className="flex p-0">
                <div className="flex items-center justify-center border-r p-4">
                    <div className="size-8 md:size-14">
                        <AspectRatio ratio={1} className="">
                            <Image
                                src={experience.logo}
                                alt={experience.company}
                                fill
                                className="bg-background rounded-sm object-contain"
                            />
                        </AspectRatio>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <h2 className="flex items-center gap-4 font-sans text-lg font-semibold md:text-2xl">
                        {experience.company}

                        {experience.active && (
                            <span className="relative flex items-center justify-center">
                                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                            </span>
                        )}
                    </h2>

                    <ExperienceMeta duration={experience.duration} location={experience.location} />
                </div>

                <div className="flex items-center justify-center border-l p-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </div>
            </Container>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
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
                                                    <ExperienceMeta
                                                        duration={role.duration}
                                                        location={role.location}
                                                    />

                                                    {role.description && (
                                                        <Prose className="mt-4">
                                                            <ReactMarkdown>
                                                                {role.description}
                                                            </ReactMarkdown>
                                                        </Prose>
                                                    )}

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
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperienceCard;
