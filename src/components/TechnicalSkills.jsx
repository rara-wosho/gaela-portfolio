import SectionTitle from "./ui/SectionTitle";
import List from "../components/ui/List";

function TechnicalSkills() {
    return (
        <div>
            <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-3">
                <ul className="px-8 md:px-10 py-4 flex flex-col gap-4 shadow-sm h-full rounded-xl md:py-6  dark:bg-neutral-900 dark:border-neutral-700 border">
                    <SectionTitle title="Technical" />
                    <List>
                        <span className="text-orange-500">Office Software</span>
                        : Proficient in document creation, spreadsheet
                        management, and presentation software.
                    </List>
                    <List>
                        <span className="text-orange-500">Data Entry</span>:
                        Accurate and efficient data entry skills.
                    </List>
                </ul>
                <ul className="px-8 md:px-10 py-4 flex flex-col gap-4 shadow-sm h-full rounded-xl md:py-6  dark:bg-neutral-900 dark:border-neutral-700 border">
                    <SectionTitle title="Customer Service" />
                    <List>
                        <span className="text-orange-500">
                            Customer Handling
                        </span>
                        : Strong ability to manage and assist customers
                        effectively.
                    </List>
                    <List>
                        <span className="text-orange-500">Cashering</span>:
                        Experienced in handling cash transactions and
                        maintaining accurate financial records
                    </List>
                </ul>
                <ul className="px-8 md:px-10 py-4 flex flex-col gap-4 shadow-sm h-full rounded-xl md:py-6  dark:bg-neutral-900 dark:border-neutral-700 border">
                    <SectionTitle title="Communication" />
                    <List>
                        <span className="text-orange-500">Languages</span>:
                        Excellent command of both English and Filipino, both
                        verbal and written.
                    </List>
                </ul>
                <ul className="px-8 md:px-10 py-4 flex flex-col gap-4 shadow-sm h-full rounded-xl md:py-6  dark:bg-neutral-900 dark:border-neutral-700 border">
                    <SectionTitle title="Problem Solving" />
                    <List>
                        Effective in identifying issues and implementing
                        practical solutions.
                    </List>
                </ul>
            </div>
        </div>
    );
}

export default TechnicalSkills;
