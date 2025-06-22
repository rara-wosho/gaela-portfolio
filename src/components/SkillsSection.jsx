import { Link, useLocation } from "react-router";
import SectionTitle from "./ui/SectionTitle";
import SkillTab from "./ui/SkillTab";

const skills = [
    "Account Management",
    "SEO & Advertising",
    "Listing Optimization",
    "Order Management",
    "Shipment Management",
    "Case Management",
    "Inventory Management",
    "Product Development",
    "Data Entry",
    "Intensive Research",
    "ESL Tutor",
    "Transcribing",
    "Competitor and Market Analysis",
];

function SkillsSection() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/skills" && (
                <SectionTitle
                    title="Skills"
                    containerStyle="mb-2"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-lightbulb-icon lucide-lightbulb"
                        >
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                        </svg>
                    }
                />
            )}
            <div className="shadow-sm h-full flex-grow rounded-xl p-4 md:p-6 dark:bg-neutral-900 dark:border-neutral-700 border">
                {location.pathname === "/" && (
                    <div className="flex items-center justify-between mb-3.5">
                        <SectionTitle
                            title="Skills"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-lightbulb-icon lucide-lightbulb"
                                >
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                            }
                        />
                        <Link
                            className="text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 font-semibold"
                            to="/skills"
                        >
                            View All
                        </Link>
                    </div>
                )}

                <div
                    className={`${
                        location.pathname === "/skills"
                            ? "md:grid-cols-4"
                            : "md:grid-cols-2"
                    } gap-2 text-sm grid grid-cols-1`}
                >
                    {skills.map((skill) => (
                        <SkillTab key={skill} skill={skill} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSection;
