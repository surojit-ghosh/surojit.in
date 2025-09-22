import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export type IFrontMatter = {
    title: string;
    description: string;
    date: string;
    image?: string;
    featured?: boolean;
    github?: string;
    preview?: string;
    stat?: boolean | string;
    techStack?: string[];
};

const getFiles = async (dir: string) => {
    const files = await fs.readdir(path.join(process.cwd(), `content/${dir}`));
    return files;
};

export const getProjects = async ({ featured = false }: { featured?: boolean } = {}) => {
    const projects = await getFiles("projects");

    const allProjects = await Promise.all(
        projects.map(async (project) => {
            const slug = project.replace(".mdx", "");
            const { frontmatter } = await getDetailsBySlug("projects", slug);

            return { slug, details: frontmatter };
        })
    );

    if (featured) {
        return allProjects.filter((project) => project.details.featured === true);
    }

    return allProjects;
};

export const getDetailsBySlug = async (dir: string, slug: string) => {
    const source = await fs.readFile(
        path.join(process.cwd(), `content/${dir}/${slug}.mdx`),
        "utf-8"
    );

    const { frontmatter, content } = await compileMDX<IFrontMatter>({
        source,
        options: {
            parseFrontmatter: true,
        },
    });

    return { frontmatter, content };
};
