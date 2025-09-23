import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import type { LineElement } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";

export const components: MDXRemoteProps["components"] = {};
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
        ],
    },
};
