import { cn } from "@/lib/utils";

interface ProseProps {
    children: React.ReactNode;
    className?: string;
}

export function Prose({ children, className }: ProseProps) {
    return (
        <div
            className={cn(
                "prose prose-sm text-foreground prose-zinc dark:prose-invert max-w-none font-mono",
                "prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance",
                "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl",
                "prose-lead:text-base",
                "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
                "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
                "prose-hr:border-edge",
                className
            )}
        >
            {children}
        </div>
    );
}

export function Code({ className, ...props }: React.ComponentProps<"code">) {
    const isCodeBlock = "data-language" in props;

    return (
        <code
            data-slot={isCodeBlock ? "code-block" : "code-inline"}
            className={cn(
                !isCodeBlock &&
                    "not-prose bg-muted/50 rounded-md border px-[0.3rem] py-[0.2rem] font-mono text-sm",
                className
            )}
            {...props}
        />
    );
}
