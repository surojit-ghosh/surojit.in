import { cn } from "@/lib/utils";

interface ProseProps {
    children: React.ReactNode;
    className?: string;
}

export function Prose({ children, className }: ProseProps) {
    return (
        <div
            className={cn(
                "prose prose-sm text-foreground prose-neutral dark:prose-invert max-w-none font-mono",
                "prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance",
                "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl",
                "prose-lead:text-base",
                "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
                "prose-hr:border-edge",
                className
            )}
        >
            {children}
        </div>
    );
}
