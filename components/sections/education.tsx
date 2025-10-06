import React from "react";
import Container from "@/components/layout/container";
import { educations } from "@/lib/data/education";
import EducationCard from "../education-card";

const Education = () => {
    return (
        <>
            <Container className="py-0">
                <h1 className="text-3xl font-semibold">Education</h1>
            </Container>
            <>
                {educations.map((education, index) => (
                    <EducationCard education={education} key={index} />
                ))}
            </>
        </>
    );
};

export default Education;
