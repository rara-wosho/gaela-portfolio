import AboutSection from "../components/AboutSection";
import CertificatesSection from "../components/CertificatesSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import GetInTouchSection from "../components/GetInTouchSection";
import SkillsSection from "../components/SkillsSection";
import ToolsSection from "../components/ToolsSection";
import HeroSection from "../components/ui/HeroSection";
import SectionTitle from "../components/ui/SectionTitle";

function HomePage() {
    return (
        <>
            <HeroSection />

            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 mb-3">
                <div className="col-span-1 md:col-span-2">
                    <AboutSection />
                </div>
                <EducationSection />
            </div>

            <div className="gap-3 grid grid-cols-1 md:grid-cols-2 border-b md:pb-10 pb-6 md:mb-8 mb-4 dark:border-b-neutral-800 border-t-neutral-200">
                <SkillsSection />
                <ToolsSection />
            </div>

            <ExperienceSection />

            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-3 mb-3">
                <CertificatesSection />
                <GetInTouchSection />
            </div>

            <div className="shadow-sm h-full rounded-xl p-6  dark:bg-neutral-900 dark:border-neutral-700 border">
                <SectionTitle title="Beyond Working" />
            </div>
        </>
    );
}

export default HomePage;
