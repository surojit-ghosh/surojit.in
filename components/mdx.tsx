import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import type { LineElement } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { getIconForLanguageExtension } from "./icons";
import { cn } from "@/lib/utils";
import { Code } from "@/components/ui/typography";
import { CopyButton } from "./copy-button";

export const components: MDXRemoteProps["components"] = {
    figure({ className, ...props }: React.ComponentProps<"figure">) {
        const hasPrettyCode = "data-rehype-pretty-code-figure" in props;

        return <figure className={cn(hasPrettyCode && "not-prose", className)} {...props} />;
    },
    figcaption: ({ children, ...props }: React.ComponentProps<"figcaption">) => {
        const iconExtension =
            "data-language" in props && typeof props["data-language"] === "string"
                ? getIconForLanguageExtension(props["data-language"])
                : null;

        return (
            <figcaption {...props}>
                {iconExtension}
                {children}
            </figcaption>
        );
    },
    pre({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        __withMeta__,
        __rawString__,
        ...props
    }: React.ComponentProps<"pre"> & { __withMeta__?: boolean; __rawString__?: string }) {
        return (
            <>
                <pre {...props} />

                {__rawString__ && (
                    <CopyButton className="absolute top-2 right-2" value={__rawString__} />
                )}
            </>
        );
    },
    code: Code,
};
export const options: MDXRemoteProps["options"] = {
    parseFrontmatter: true,
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [rehypeExternalLinks, { target: "_blank", rel: "nofollow noopener noreferrer" }],
            [
                rehypePrettyCode,
                {
                    theme: { dark: "github-dark", light: "github-light" },
                    keepBackground: false,
                    onVisitLine(node: LineElement) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                },
            ],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "figure") {
                        if (!("data-rehype-pretty-code-figure" in node.properties)) {
                            return;
                        }

                        const preElement = node.children.at(-1);
                        if (preElement.tagName !== "pre") {
                            return;
                        }

                        preElement.properties["__withMeta__"] =
                            node.children.at(0).tagName === "figcaption";
                        preElement.properties["__rawString__"] = node.__rawString__;
                    }
                });
            },
        ],
    },
};
