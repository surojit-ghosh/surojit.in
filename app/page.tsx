import Divider from "@/components/layout/divider";
import HeroSection from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
// import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Divider />
            <Projects />
            <Divider />
            {/* <Experience />
            <Divider /> */}
            <Education />
        </>
    );
}
