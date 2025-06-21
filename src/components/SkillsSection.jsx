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
    "Transcribing",
    "Competitor Analysis",
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
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-laptop-minimal-icon lucide-laptop-minimal"
                        >
                            <rect
                                width="18"
                                height="12"
                                x="3"
                                y="4"
                                rx="2"
                                ry="2"
                            />
                            <line x1="2" x2="22" y1="20" y2="20" />
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
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-laptop-minimal-icon lucide-laptop-minimal"
                                >
                                    <rect
                                        width="18"
                                        height="12"
                                        x="3"
                                        y="4"
                                        rx="2"
                                        ry="2"
                                    />
                                    <line x1="2" x2="22" y1="20" y2="20" />
                                </svg>
                            }
                        />
                        <Link
                            className="text-neutral-600 text-sm dark:text-neutral-300 hover:text-emerald-600"
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
