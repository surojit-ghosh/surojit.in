"use client";

import { useQuery } from "@tanstack/react-query";

import { getGitHubContributions } from "./actions/github-contributions";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";
import Container from "@/components/layout/container";

export function GitHubContributions() {
    const { data: contributions = [], isLoading } = useQuery({
        queryKey: ["github-contributions"],
        queryFn: async () => await getGitHubContributions(),
        staleTime: 24 * 60 * 60 * 1000,
    });

    return (
        <Container>
            <h2 className="sr-only">GitHub Contributions</h2>

            {isLoading ? (
                <GitHubContributionFallback />
            ) : (
                <GitHubContributionGraph contributions={contributions} />
            )}
        </Container>
    );
}
