import Divider from "@/components/layout/divider";
import HeroSection from "@/app/sections/hero";
import Projects from "@/app/sections/projects";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Divider />
            <Projects />
        </>
    );
}
