import ExperienceCard from "./ui/ExperienceCard";
import List from "./ui/List";
import SectionTitle from "./ui/SectionTitle";

function OrganizationalExperience() {
    return (
        <div className="h-full rounded-xl mt-4 mb-3.5">
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
                title="Organizational Experience"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <ExperienceCard
                    date="Aug 2022 - Aug 2023"
                    secondTitle="College of Arts and Sciences Student Society"
                    title="President"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Coordinating all student council activities and is
                            in charge of running student council meetings.
                        </List>
                        <List>
                            Responsible for the management of the organization.
                        </List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Aug 2021 - Aug 2022"
                    title="P. I. O."
                    secondTitle="College of Arts and Sciences Student Society"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Managed all external communications and media
                            relations on behalf of the student organization.
                        </List>
                        <List>
                            Collaborated with internal teams to ensure
                            consistent messaging and branding across all
                            communication channels.
                        </List>
                    </ul>
                </ExperienceCard>
            </div>
        </div>
    );
}

export default OrganizationalExperience;
