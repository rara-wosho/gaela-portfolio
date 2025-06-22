import { Link, useLocation } from "react-router";
import ExperienceCard from "./ui/ExperienceCard";
import List from "./ui/List";
import PrimaryButton from "./ui/PrimaryButton";
import SectionTitle from "./ui/SectionTitle";

function ExperienceSection() {
    const location = useLocation();

    return (
        <div className="h-full rounded-xl mt-4 mb-3.5">
            <div className="flex justify-start">
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
                    title="PROFESSIONAL EXPERIENCE"
                />

                {location.pathname === "/" && (
                    <div className="md:items-center md:justify-start hidden md:flex md:ms-auto">
                        <Link to="/experiences">
                            <PrimaryButton
                                rightIcon={
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
                                        className="lucide lucide-chevron-right-icon lucide-chevron-right"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                }
                                containerStyle="text-sm px-8 mb-2"
                                label="View All"
                            />
                        </Link>
                    </div>
                )}
            </div>

            {/* <p className="text-sm text-center md:text-start text-neutral-600 dark:text-neutral-300 pt-2 mb-4">
                My work experience spans professional virtual assistance,
                technical training, and customer-facing roles—each contributing
                to a well-rounded and adaptable skill set.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <ExperienceCard
                    title="E-Commerce Account Specialist"
                    secondTitle="Independent Contractor"
                    date="2022 - present"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Managed and optimized Amazon product listings to
                            improve visibility, rankings, and conversion rates
                        </List>
                        <List>
                            Conducted keyword research, competitor analysis, and
                            listing audits to enhance SEO performance
                        </List>
                        <List>
                            Handled order processing, inventory tracking, and
                            customer service coordination to ensure smooth
                            operations
                        </List>
                        <List>
                            Collaborated with marketing teams to plan
                            promotions, PPC campaigns, and storefront
                            enhancements
                        </List>
                        <List>
                            Prepared weekly performance reports using tools like
                            Seller Central and Helium 10 to guide
                            decision-making
                        </List>
                        <List>
                            Ensured account health compliance with platform
                            policies, responding to alerts and resolving issues
                            promptly
                        </List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Jan 2024 - Jan 2025"
                    secondTitle="Sterry Limited"
                    title="Public Relations Virtual Assistant (Lead Generation)"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Identified Key Opinion Leaders (KOLs) aligned with
                            industry trends and campaign goals for potential
                            brand collaborations
                        </List>
                        <List>
                            Maintained and organized confidential data sheets
                            critical to daily e-commerce operations
                        </List>
                        <List>
                            Assisted in data entry, reporting, and basic
                            analysis to support strategic decisionmaking
                        </List>
                        <List>
                            Provided administrative support to the e-commerce
                            team, ensuring smooth workflow and task execution
                        </List>
                    </ul>
                </ExperienceCard>

                {location.pathname === "/experiences" && (
                    <>
                        <ExperienceCard
                            title="ESL Tutor"
                            secondTitle="GLATS"
                            date="1 Year"
                            image="/images/image1.jpeg"
                        >
                            <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                                <List>
                                    As an ESL Tutor at GLATS, I provide engaging
                                    and personalized English lessons to students
                                    of various ages and proficiency levels. I
                                    help learners improve their speaking,
                                    listening, reading, and writing skills
                                    through interactive online sessions,
                                    fostering confidence and fluency in a
                                    supportive virtual environment.
                                </List>
                            </ul>
                        </ExperienceCard>
                        <ExperienceCard title="Tutoring Gig" date="4 years">
                            <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                                <List>
                                    In-person Support for Young Learners I offer
                                    in-person tutoring sessions at our place,
                                    assisting young learners with their daily
                                    tasks, school assignments, and preparation
                                    for activities and exams. I provide a
                                    patient, encouraging environment that helps
                                    build their understanding, confidence, and
                                    academic skills.
                                </List>
                            </ul>
                        </ExperienceCard>
                    </>
                )}
            </div>

            {location.pathname === "/" && (
                <div className="md:items-center mt-4 justify-center md:justify-start flex md:hidden">
                    <Link to="/experiences">
                        <PrimaryButton
                            rightIcon={
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
                                    className="lucide lucide-chevron-right-icon lucide-chevron-right"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            }
                            containerStyle="text-sm px-8 mb-2"
                            label="View All"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ExperienceSection;
