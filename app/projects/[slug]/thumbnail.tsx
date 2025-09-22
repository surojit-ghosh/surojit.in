"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export const Thumbnail = ({ image }: { image: string }) => {
    const { theme } = useTheme();
    return (
        <Image
            src={
                theme === "dark"
                    ? (image as string).replace(/\.png$/, "-dark.png")
                    : (image as string).replace(/\.png$/, "-light.png")
            }
            alt={"Thumbnail"}
            fill
            className="rounded-sm object-cover"
        />
    );
};
