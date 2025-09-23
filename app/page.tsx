import Divider from "@/components/divider";
import HeroSection from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Divider />
            <Projects />
        </>
    );
}
