import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import type { LineElement } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import React from "react";
import { CodeCopyButton } from "./code-copy-button";
import Image from "next/image";

export const components: MDXRemoteProps["components"] = {
    img: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
        <Image src={src} alt={alt} width={800} height={400} className="rounded-lg" {...props} />
    ),
    h1: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <h1 className="mb-6 text-4xl font-bold" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <h3 className="mt-6 mb-3 text-2xl font-medium" {...props}>
            {children}
        </h3>
    ),
    p: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <p className="text-muted-foreground mb-4 leading-7" {...props}>
            {children}
        </p>
    ),
    ul: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <li className="text-muted-foreground leading-7" {...props}>
            {children}
        </li>
    ),
    pre: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
        const getTextContent = (node: React.ReactNode): string => {
            if (typeof node === "string") {
                return node;
            }
            if (typeof node === "number") {
                return String(node);
            }
            if (React.isValidElement(node) && node.props && typeof node.props === "object") {
                return getTextContent((node.props as { children?: React.ReactNode }).children);
            }
            if (Array.isArray(node)) {
                return node.map(getTextContent).join("");
            }
            return "";
        };

        const codeText = getTextContent(children);

        return (
            <div className="group relative">
                <pre
                    className="bg-muted/30 overflow-x-auto rounded-lg border p-4 text-base"
                    {...props}
                >
                    {children}
                </pre>
                <CodeCopyButton code={codeText} />
            </div>
        );
    },
    blockquote: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
        <blockquote
            className="border-primary text-muted-foreground border-l-4 pl-4 italic"
            {...props}
        >
            {children}
        </blockquote>
    ),
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
                    theme: "github-dark",
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
