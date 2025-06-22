import ExperienceCard from "./ui/ExperienceCard";
import List from "./ui/List";
import SectionTitle from "./ui/SectionTitle";

function OjtSection() {
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
                title="on-the-job training"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <ExperienceCard
                    containerStyle="md:col-span-2"
                    date="May 2023 - Jun 2023"
                    secondTitle="St. Peter's College, College of Arts and Sciences Office"
                    title="Data Entry-Intern"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Completed data entry tasks with a high level of
                            accuracy and attention to detail.
                        </List>
                        <List>
                            Handled sensitive and confidential information with
                            the utmost professionalism and adherence to privacy
                            protocols.
                        </List>
                        <List>
                            Demonstrated strong time management skills to meet
                            deadlines and manage multiple projects
                            simultaneously.
                        </List>
                        <List>
                            Adapted quickly to new software or tools used for
                            data entry and reporting purposes.
                        </List>
                        <List>
                            Communicated effectively with supervisors and team
                            members to provide updates and seek clarification
                            when necessary.
                        </List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Mar 2023 - Apr 2023"
                    title="K-1 Practice Teacher"
                    secondTitle="Fountain of Life Academy of Iligan City, INC."
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Graded simple assignments and reported individual
                            progress to the supervising teacher, focusing on
                            early learning milestones.
                        </List>
                        <List>
                            Maintained and organized confidential student
                            records and daily observation sheets.
                        </List>
                        <List>
                            Helped decorate and set up the classroom with
                            age-appropriate themes and learning materials before
                            classes began.
                        </List>
                        <List>
                            Monitored the classroom to ensure a safe and
                            nurturing environment, encouraging positive behavior
                            through gentle guidance and reinforcement.
                        </List>
                        <List>
                            Provided personalized support to young learners,
                            helping them with early literacy, motor skills, and
                            emotional development to foster a positive and
                            engaging learning experience.
                        </List>
                    </ul>
                </ExperienceCard>
                <ExperienceCard
                    date="Feb 2023 - Mar 2023"
                    title="Grade 9 and Grade 10 Practice Teacher"
                    secondTitle="St. Peter's College, Basic Education Department"
                >
                    <ul className="ps-4 border-s border-s-neutral-200 dark:border-s-neutral-800 flex flex-col gap-6 mb-2">
                        <List>
                            Checked and graded student assignments, quizzes, and
                            seatwork, then reported individual progress to the
                            supervising teacher for academic tracking.
                        </List>
                        <List>
                            Maintained and organized confidential student
                            records, including performance data and attendance
                            sheets.
                        </List>
                        <List>
                            Assisted in preparing and arranging the classroom
                            with subject-related visual aids and instructional
                            materials to enhance student engagement.
                        </List>
                        <List>
                            Monitored class behavior and ensured a safe,
                            respectful learning environment by reinforcing
                            classroom rules and addressing disruptions calmly.
                        </List>
                    </ul>
                </ExperienceCard>
            </div>
        </div>
    );
}

export default OjtSection;
