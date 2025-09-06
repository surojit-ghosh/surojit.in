import { USER } from "@/lib/config";

const HeroSection = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="space-y-1">
                <h1 className="text-lg font-medium sm:text-xl">Hey, I&apos;m {USER.name}</h1>
                <h2 className="text-muted-foreground text-sm">{USER.description}</h2>
            </div>
        </div>
    );
};

export default HeroSection;
