import ExperienceSection from "../components/ExperienceSection";
import OjtSection from "../components/OjtSection";
import WorkExperience from "../components/WorkExperience";
import OrganizationalExperience from "../components/OrganizationalExperience";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

function Experiences() {
    const navigate = useNavigate();

    return (
        <>
            <ScrollToTop />
            <div className="py-4">
                <div className="py-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-neutral-600 dark:text-gray-300 flex items-center gap-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-left-icon lucide-chevron-left"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back
                    </button>
                </div>
                <ExperienceSection />
                <OjtSection />
                <WorkExperience />
                <OrganizationalExperience />
            </div>
        </>
    );
}

export default Experiences;
