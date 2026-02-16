import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_CONTRIBUTIONS_API_URL, GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
    contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
    async () => {
        const res = await fetch(`${GITHUB_CONTRIBUTIONS_API_URL}/v4/${GITHUB_USERNAME}?y=last`);
        const data = (await res.json()) as GitHubContributionsResponse;
        return data.contributions;
    },
    ["github-contributions"],
    { revalidate: 86400 }
);
