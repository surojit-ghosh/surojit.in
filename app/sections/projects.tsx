import Container from "@/components/container";
import ProjectsCard from "@/components/proejcts-card";
import { buttonVariants } from "@/components/ui/button";
import { getProjects, IFrontMatter } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = async () => {
    const allProjects = await getProjects();

    return (
        <>
            <Container className="space-y-4 py-0">
                <h1 className="flex items-center gap-1 font-sans text-2xl font-semibold">
                    Projects
                    <span className="text-muted-foreground font-sans text-sm">
                        ({allProjects.length})
                    </span>
                </h1>
            </Container>
            <Container className="space-y-8 py-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {allProjects.map(
                        ({ slug, details }: { slug: string; details: IFrontMatter }) => (
                            <ProjectsCard key={slug} slug={slug} details={details} />
                        )
                    )}
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
