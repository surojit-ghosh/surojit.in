import Container from "@/components/layout/container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Prose } from "@/components/prose";
import { getDetailsBySlug } from "@/lib/mdx";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, MoveLeft } from "lucide-react";
import Divider from "@/components/layout/divider";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Thumbnail } from "../../../components/thumbnail";
import { Icons } from "@/components/icons";
import { techStack } from "@/lib/techs";
import { Badge } from "@/components/ui/badge";

const SingleProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const { frontmatter, content } = await getDetailsBySlug("projects", slug);

    return (
        <article>
            <Container className="py-2">
                <Link
                    href={"/projects/"}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "text-muted-foreground hover:text-foreground/80 !px-0 hover:bg-transparent dark:hover:bg-transparent"
                    )}
                >
                    <MoveLeft />
                    Projects
                </Link>
            </Container>

            <Divider />

            <Container className="space-y-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-sm">
                    {frontmatter.image && <Thumbnail image={frontmatter.image as string} />}
                </AspectRatio>
            </Container>

            <Container className="py-0">
                <h1 className="font-sans text-3xl font-semibold">{frontmatter.title}</h1>
            </Container>

            <Container className="space-y-4">
                <h3 className="text-muted-foreground">{frontmatter.description}</h3>

                <div className="flex gap-2">
                    {frontmatter.github && (
                        <Link
                            href={frontmatter.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                        >
                            <Icons.github />
                            Source Code
                        </Link>
                    )}

                    {frontmatter.preview && (
                        <Link
                            href={frontmatter.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                        >
                            <ExternalLink />
                            Live Preview
                        </Link>
                    )}
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-2">
                    {frontmatter.techStack?.map((tech) => {
                        const Tech = techStack.find((t) => t.key === tech);

                        return (
                            <Badge variant={"secondary"} className="gap-1 py-1" key={tech}>
                                {Tech?.icon && <Tech.icon className="!size-4" />}
                                {Tech?.name}
                            </Badge>
                        );
                    })}
                </div>
            </Container>

            <Divider />

            <Container className="">
                <Prose>{content}</Prose>
            </Container>
        </article>
    );
};

export default SingleProjectPage;
