import AboutSection from "../components/AboutSection";
import BeyondWorkingSection from "../components/BeyondWorkingSection";
import CertificatesSection from "../components/CertificatesSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Goals from "../components/Goals";
import HeroMain from "../components/HeroMain";
import SkillsSection from "../components/SkillsSection";
import ToolsSection from "../components/ToolsSection";
import HeroSection from "../components/ui/HeroSection";
import SectionTitle from "../components/ui/SectionTitle";

function HomePage() {
    return (
        <>
            <HeroSection />

            {/* <HeroMain /> */}

            <div className="grid gap-3 grid-cols-1 mb-3">
                <AboutSection />
                {/* <div className="col-span-1 md:col-span-2"></div>
                <EducationSection /> */}
            </div>

            <div className="gap-3 grid grid-cols-1 md:grid-cols-2 border-b md:pb-10 pb-6 md:mb-8 mb-4 dark:border-b-neutral-800 border-t-neutral-200">
                <SkillsSection />
                <ToolsSection />
            </div>

            <ExperienceSection />

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-3 mb-3">
                <div className="grid grid-cols-1 gap-3">
                    <CertificatesSection />
                    <BeyondWorkingSection />
                </div>
                <GetInTouchSection />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <Goals />
            </div>
        </>
    );
}

export default HomePage;
