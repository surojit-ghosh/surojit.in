import Container from "@/components/layout/container";
import ProjectsCard from "@/components/proejcts-card";
import { buttonVariants } from "@/components/ui/button";
import { MAX_PROJECTS_IN_HOMEPAGE } from "@/lib/config";
import { getProjects, IFrontMatter } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = async () => {
    const allProjects = await getProjects({ featured: true });

    return (
        <>
            <Container className="space-y-4 py-0">
                <h1 className="text-3xl font-semibold">
                    Projects
                    <sup className="text-muted-foreground ml-1 font-mono text-sm select-none">
                        ({allProjects.length})
                    </sup>
                </h1>
            </Container>
            <Container className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {allProjects
                        .slice(0, MAX_PROJECTS_IN_HOMEPAGE)
                        .map(({ slug, details }: { slug: string; details: IFrontMatter }) => (
                            <ProjectsCard key={slug} slug={slug} details={details} />
                        ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/projects"
                        className={cn(
                            buttonVariants({ size: "sm", variant: "outline" }),
                            "mx-auto"
                        )}
                    >
                        See all Projects <ArrowRight className="size-4" />
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Projects;
