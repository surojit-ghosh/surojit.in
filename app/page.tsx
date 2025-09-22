import Divider from "@/components/divider";
import HeroSection from "./sections/hero";
import Projects from "./sections/projects";

export default function Home() {
    return (
        <>
            <Divider />
            <HeroSection />
            <Divider />
            <Projects />
            <Divider />
        </>
    );
}
