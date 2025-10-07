"use client";

import React from "react";
import Container from "@/components/layout/container";
import ExperienceCard from "../experience-card";
import { experiences } from "@/lib/data/experience";

const Experience = () => {
    return (
        <>
            <Container className="py-0">
                <h1 className="text-3xl font-semibold">Experience</h1>
            </Container>
            <>
                {experiences.map((experience, index) => (
                    <ExperienceCard experience={experience} key={index} />
                ))}
            </>
        </>
    );
};

export default Experience;
