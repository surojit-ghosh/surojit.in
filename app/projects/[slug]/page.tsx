import Container from "@/components/container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Prose } from "@/components/prose";
import { getDetailsBySlug } from "@/lib/mdx";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Share, Undo2 } from "lucide-react";
import Divider from "@/components/divider";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SingleProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const { frontmatter, content } = await getDetailsBySlug("projects", slug);

    return (
        <article>
            <Divider />
            <Container className="flex items-center justify-between py-2">
                <Link
                    href={"/projects/"}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "text-muted-foreground hover:text-foreground/80 hover:bg-transparent dark:hover:bg-transparent"
                    )}
                >
                    <Undo2 />
                    Back to Projects
                </Link>

                <Button size={"icon"} variant={"outline"}>
                    <Share />
                </Button>
            </Container>
            <Divider />
            <Container className="space-y-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-sm">
                    {frontmatter.image && (
                        <Image
                            src={frontmatter.image as string}
                            alt={frontmatter.title}
                            fill
                            className="rounded-sm object-cover"
                        />
                    )}
                </AspectRatio>
            </Container>
            <Container className="py-0">
                <h1 className="font-sans text-3xl font-semibold">{frontmatter.title}</h1>
            </Container>
            <Container className="">
                <h3 className="text-muted-foreground text-lg">{frontmatter.description}</h3>
            </Container>
            <Container className="space-y-4 pt-6">
                <Prose>{content}</Prose>
            </Container>
            <Divider />
        </article>
    );
};

export default SingleProjectPage;
