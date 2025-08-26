import { USER } from "@/lib/config";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex items-center gap-4">
            <Image
                className="rounded-full"
                src="/surojit.jpg"
                alt="Hero Image"
                width={100}
                height={100}
            />

            <div className="space-y-1">
                <h1 className="text-lg font-medium sm:text-xl">Hey, I&apos;m {USER.name}</h1>
                <h2 className="text-muted-foreground text-sm">{USER.description}</h2>
            </div>
        </div>
    );
};

export default HeroSection;
