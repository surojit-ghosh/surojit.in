import Container from "@/components/layout/container";
import ProjectsCard from "@/components/proejcts-card";
import { getProjects, IFrontMatter } from "@/lib/mdx";
import React from "react";

const ProjectsPage = async () => {
    const allProjects = await getProjects();
    return (
        <>
            <Container className="space-y-4 text-center">
                <h1 className="font-sans text-3xl font-semibold">
                    All Projects
                    <sup className="text-muted-foreground ml-1 font-mono text-sm select-none">
                        ({allProjects.length})
                    </sup>
                </h1>
                <h3 className="text-muted-foreground">
                    My projects and work across different technologies and domains.
                </h3>
            </Container>
            <Container className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {allProjects.map(
                        ({ slug, details }: { slug: string; details: IFrontMatter }) => (
                            <ProjectsCard key={slug} slug={slug} details={details} />
                        )
                    )}
                </div>
            </Container>
        </>
    );
};

export default ProjectsPage;
