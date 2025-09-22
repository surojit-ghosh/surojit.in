import { cn } from "@/lib/utils";

interface ProseProps {
    children: React.ReactNode;
    className?: string;
}

export function Prose({ children, className }: ProseProps) {
    return (
        <div
            className={cn(
                "prose prose-neutral dark:prose-invert max-w-none",
                "prose-headings:text-foreground",
                "prose-p:text-muted-foreground prose-li:text-muted-foreground",
                "prose-a:text-primary hover:prose-a:text-primary/80",
                "prose-strong:text-foreground",
                "prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded",
                "prose-pre:bg-muted prose-pre:text-muted-foreground prose-pre:border",
                "prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary",
                "prose-th:text-foreground prose-td:text-muted-foreground",
                className
            )}
        >
            {children}
        </div>
    );
}
