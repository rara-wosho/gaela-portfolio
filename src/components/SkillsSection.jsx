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
];

function SkillsSection() {
    return (
        <div className="shadow-sm h-full flex-grow rounded-xl p-4 md:p-6 dark:bg-neutral-900 dark:border-neutral-700 border">
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

            <div className="gap-2 mt-2 text-sm grid grid-cols-2">
                {skills.map((skill) => (
                    <SkillTab skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;
