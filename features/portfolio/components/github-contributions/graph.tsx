"use client";

import { LoaderIcon } from "lucide-react";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import {
    ContributionGraph,
    ContributionGraphBlock,
    ContributionGraphCalendar,
    ContributionGraphFooter,
    ContributionGraphLegend,
    ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { format } from "date-fns";

export function GitHubContributionGraph({ contributions }: { contributions: Activity[] }) {
    const data = contributions;

    return (
        <ContributionGraph data={data} blockSize={10.92} blockMargin={3} blockRadius={0}>
            <ContributionGraphCalendar className="no-scrollbar">
                {({ activity, dayIndex, weekIndex }) => (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <g>
                                <ContributionGraphBlock
                                    activity={activity}
                                    dayIndex={dayIndex}
                                    weekIndex={weekIndex}
                                />
                            </g>
                        </TooltipTrigger>

                        <TooltipContent className="font-sans">
                            <p>
                                {activity.count} contribution{activity.count > 1 ? "s" : null} on{" "}
                                {format(new Date(activity.date), "dd.MM.yyyy")}
                            </p>
                        </TooltipContent>
                    </Tooltip>
                )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter>
                <ContributionGraphTotalCount>
                    {({ totalCount }) => (
                        <div className="text-muted-foreground text-wrap">
                            {totalCount.toLocaleString("en")} contributions in the last year on{" "}
                            <a
                                className="font-medium underline underline-offset-4"
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener"
                            >
                                GitHub
                            </a>
                            .
                        </div>
                    )}
                </ContributionGraphTotalCount>

                <ContributionGraphLegend />
            </ContributionGraphFooter>
        </ContributionGraph>
    );
}

export function GitHubContributionFallback() {
    return (
        <div className="flex h-40.5 w-full items-center justify-center">
            <LoaderIcon className="text-muted-foreground animate-spin" />
        </div>
    );
}
