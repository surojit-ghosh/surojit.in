import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { ISocialLink, SOCIAL_LINKS, USER } from "@/lib/config";
import { cn } from "@/lib/utils";
import { FileText, Send } from "lucide-react";
import Images from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <Container className="space-y-4">
            <div className="flex items-start gap-4">
                <Images
                    className="rounded-xl"
                    src={USER.avatar}
                    alt={USER.name}
                    width={64}
                    height={64}
                />

                <div className="flex-1">
                    <h1 className="text-foreground font-sans text-2xl font-semibold tracking-tight md:text-3xl">
                        {USER.name}
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base">{USER.subheading}</p>
                </div>
            </div>

            <h2 className="text-muted-foreground text-base">{USER.description}</h2>

            <div className="flex gap-2">
                <Link
                    href={"/resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                    <FileText />
                    Resume
                </Link>

                <Link
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                >
                    <Send />
                    Contact
                </Link>
            </div>

            <div className="flex gap-2">
                {SOCIAL_LINKS.map((link: ISocialLink, index: number) => (
                    <SimpleTooltip side="bottom" key={index} content={link.platform}>
                        <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "icon" }),
                                "inset-shadow-muted-foreground/20 size-8 border-0 inset-shadow-2xs"
                            )}
                        >
                            <link.icon className="size-4" />
                            <span className="sr-only">{link.platform}</span>
                        </Link>
                    </SimpleTooltip>
                ))}
            </div>
        </Container>
    );
};

export default HeroSection;
