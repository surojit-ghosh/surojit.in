"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Thumbnail = ({ image }: { image: string }) => {
    const { theme } = useTheme();
    const [img, setImg] = useState<string>(image);

    useEffect(() => {
        if (image) {
            setImg((image as string).replace(/\.png$/, `-${theme || "dark"}.png`));
        }
    }, [theme, image]);

    return <Image src={img} alt={"Thumbnail"} fill className="rounded-sm object-cover" />;
};
