import ExperienceCard from "./ui/ExperienceCard";
import SectionTitle from "./ui/SectionTitle";

function ExperienceSection() {
    return (
        <div className="shadow-sm h-full rounded-xl mt-4 mb-3.5">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <ExperienceCard
                    title="E-Commerce Account Specialist"
                    secondTitle="Independent Contractor"
                    date="2022 - present"
                >
                    <ul className="ps-4">
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Managed and optimized Amazon product listings to
                            improve visibility, rankings, and conversion rates
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Conducted keyword research, competitor analysis, and
                            listing audits to enhance SEO performance
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Handled order processing, inventory tracking, and
                            customer service coordination to ensure smooth
                            operations
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Collaborated with marketing teams to plan
                            promotions, PPC campaigns, and storefront
                            enhancements
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Prepared weekly performance reports using tools like
                            Seller Central and Helium 10 to guide
                            decision-making
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Ensured account health compliance with platform
                            policies, responding to alerts and resolving issues
                            promptly
                        </li>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Jan 2024 - Jan 2025"
                    secondTitle="Sterry Limited"
                    title="Public Relations Virtual Assistant (Lead Generation)"
                >
                    <ul className="ps-4">
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Identified Key Opinion Leaders (KOLs) aligned with
                            industry trends and campaign goals for potential
                            brand collaborations
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Maintained and organized confidential data sheets
                            critical to daily e-commerce operations
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Assisted in data entry, reporting, and basic
                            analysis to support strategic decisionmaking
                        </li>
                        <li className="text-sm list-disc text-gray-700 dark:text-neutral-300 mb-3">
                            Provided administrative support to the e-commerce
                            team, ensuring smooth workflow and task execution
                        </li>
                    </ul>
                </ExperienceCard>
            </div>
        </div>
    );
}

export default ExperienceSection;
