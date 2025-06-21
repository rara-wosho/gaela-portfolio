import { useState } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/ui/HeroSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ToolsSection from "./components/ToolsSection";
import OjtSection from "./components/OjtSection";
import WorkExperience from "./components/WorkExperience";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div
            className={`${
                darkMode ? "dark" : ""
            } main-container min-h-screen pb-8 bg-white dark:bg-neutral-950`}
        >
            <div
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 cursor-pointer absolute top-4 right-2 text-neutral-800 dark:text-gray-200"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun-icon lucide-sun"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            </div>

            <div className="mx-auto max-w-[1150px] main-wrapper px-3 pb-4">
                <HeroSection />

                <div className="grid gap-3 grid-cols-1 md:grid-cols-3 mb-3">
                    <div className="col-span-1 md:col-span-2">
                        <AboutSection />
                    </div>
                    <EducationSection />
                </div>

                <ExperienceSection />
                <OjtSection />
                <WorkExperience />

                <div className="mb-4 gap-3 grid grid-cols-1 md:grid-cols-2">
                    <SkillsSection />
                    <ToolsSection />
                </div>
            </div>
        </div>
    );
};

export default App;
