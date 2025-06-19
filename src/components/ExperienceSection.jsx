import ExperienceCard from "./ui/ExperienceCard";
import SectionTitle from "./ui/SectionTitle";

function ExperienceSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-6 dark:bg-neutral-900 dark:border-neutral-700 border mb-3">
            <SectionTitle
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
                        className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
                    >
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                }
                title="WORK EXPERIENCE"
            />

            <div className="grid grid-cols-2 gap-x-4 mt-3">
                <ExperienceCard
                    title="E-Commerce Account Specialist"
                    secondTitle="Independent Contractor"
                    date="2022 - present"
                />
                <ExperienceCard
                    date="Jan 2024 - Jan 2025"
                    secondTitle="Sterry Limited"
                    title="Public Relations Virtual Assistant (Lead Generation)"
                />
            </div>
        </div>
    );
}

export default ExperienceSection;
