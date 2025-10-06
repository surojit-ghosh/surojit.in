"use client";

import React, { useState } from "react";

import { Icons } from "@/components/icons";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface CodeCopyButtonProps {
    code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Button
            onClick={copyToClipboard}
            size="icon"
            variant="outline"
            className="hover absolute top-3 right-3 size-8 rounded-md opacity-0 transition-all duration-200 group-hover:opacity-100 hover:cursor-pointer"
        >
            {isCopied ? (
                <SimpleTooltip content="Copied to clipboard!">
                    <Check className="size-4 text-green-500" />
                </SimpleTooltip>
            ) : (
                <SimpleTooltip content="Copy to Clipboard">
                    <Icons.copy className="size-4" />
                </SimpleTooltip>
            )}
        </Button>
    );
}
