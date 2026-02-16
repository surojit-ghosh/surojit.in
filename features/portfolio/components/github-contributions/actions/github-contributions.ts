"use server";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_CONTRIBUTIONS_API_URL, GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
    contributions: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
    try {
        const url = `${GITHUB_CONTRIBUTIONS_API_URL}/v4/${GITHUB_USERNAME}?y=last`;

        const res = await fetch(url, {
            next: { revalidate: 86400 },
        });

        if (!res.ok) {
            console.error("GitHub API error:", res.status);
            return [];
        }

        const data = (await res.json()) as GitHubContributionsResponse;

        return data?.contributions ?? [];
    } catch (error) {
        console.error("GitHub contributions fetch failed:", error);
        return [];
    }
}
