import { cn } from "@/lib/utils";
import React from "react";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
    return (
        <div className="border-b px-2">
            <div className={cn("mx-auto w-full max-w-3xl border-x p-4", className)}>{children}</div>
        </div>
    );
};

export default Container;
