import ExperienceCard from "./ui/ExperienceCard";
import List from "./ui/List";
import SectionTitle from "./ui/SectionTitle";

function WorkExperience() {
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
                title="Other Work Experience"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <ExperienceCard
                    date="Mar 2017 - Jun 2018"
                    secondTitle="Silicon Valley Computer Group Philippines, Inc."
                    title="Cashier/Sales Associate"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Receives payments via cash, check, or credit. Counts
                            cash in drawers at the beginning of shifts. Create
                            sales reports.
                        </List>
                        <List>Provides assistance to customers.</List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Oct 2016 - Jan 2017"
                    title="Promoter"
                    secondTitle="OPPO Mobile"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>Perform sales/product demo to customers</List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Apr 2016 - Oct 2016"
                    title="Redemption Booth Custodian (Contractual)"
                    secondTitle="World of Fun Amusement Center"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Collects arcade tickets, audit cash and rectify
                            reports
                        </List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Jul 2015 - Nov 2015"
                    title="Sales Clerk (Contractual)"
                    secondTitle="Manila Southern Associates"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Perform sales tasks and provide assistance to
                            customers
                        </List>
                    </ul>
                </ExperienceCard>
            </div>
        </div>
    );
}

export default WorkExperience;
