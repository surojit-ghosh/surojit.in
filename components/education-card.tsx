import React from "react";
import Container from "@/components/layout/container";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { IEducation } from "@/lib/data/education";
import { Calendar } from "lucide-react";

const EducationCard = ({ education }: { education: IEducation }) => {
    return (
        <Container className="flex p-0">
            <div className="flex items-center justify-center border-r p-4">
                <div className="size-10 md:size-16">
                    <AspectRatio ratio={1} className="">
                        <Image
                            src={education.logo}
                            alt={education.year}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </AspectRatio>
                </div>
            </div>

            <div className="flex-1 p-4">
                <h2 className="font-sans text-lg font-semibold md:text-2xl">{education.degree}</h2>
                <p className="text-muted-foreground text-sm text-balance">{education.institute}</p>

                <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
                    <Calendar className="size-4" /> {education.year}
                </div>
            </div>
        </Container>
    );
};

export default EducationCard;
