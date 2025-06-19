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
        <div className="mb-2">
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

            <div className="gap-2 mt-3 text-sm grid grid-cols-5">
                {skills.map((skill) => (
                    <SkillTab skill={skill} />
                ))}
                {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          Account Management
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
          Listing Optimization
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          SEO & Advertising
        </span>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
          Order Management
        </span>
        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
          Inventory Management
        </span>
        <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
          Product Development
        </span>
        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
          Data Entry
        </span>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
          Intensive Research
        </span> */}
            </div>
        </div>
    );
}

export default SkillsSection;
