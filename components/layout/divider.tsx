import { cn } from "@/lib/utils";

const Divider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={cn("h-6 border-b px-2", className)}>
            <div className={"mx-auto h-full w-full max-w-3xl border-x"}>
                <div className="h-full bg-[image:repeating-linear-gradient(315deg,_var(--muted)_0,_var(--muted)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed" />
            </div>
        </div>
    );
};

export default Divider;
