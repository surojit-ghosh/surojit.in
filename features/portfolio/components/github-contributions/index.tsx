import { Suspense } from "react";

import { getGitHubContributions } from "../../data/github-contributions";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";
import Container from "@/components/layout/container";

export function GitHubContributions() {
    const contributions = getGitHubContributions();

    return (
        <Container>
            <h2 className="sr-only">GitHub Contributions</h2>

            <Suspense fallback={<GitHubContributionFallback />}>
                <GitHubContributionGraph contributions={contributions} />
            </Suspense>
        </Container>
    );
}
