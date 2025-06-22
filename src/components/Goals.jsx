import List from "./ui/List";
import SectionTitle from "./ui/SectionTitle";

function Goals() {
    return (
        <div className="shadow-sm h-full rounded-xl p-4 md:p-6  dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle
                title="Goals"
                icon={
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
                        className="lucide lucide-flag-icon lucide-flag"
                    >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                }
            />

            <p className="text-sm italic text-gray-600 dark:text-gray-300 mt-3">
                As I continue my journey in e-commerce, I am excited to dive
                deeper into tools and platforms that enhance performance and
                client success.
            </p>
            <div className="flex flex-col gap-3 mt-3">
                <ul className="flex flex-col gap-6 mt-5 ps-4 border-s dark:border-s-neutral-700">
                    <List>
                        <span className="text-emerald-700 font-semibold dark:text-emerald-600">
                            Graphic Design{" "}
                        </span>
                        : Learning to create visually compelling A+ Content that
                        boosts product appeal and conversion rates.
                    </List>
                    <List>
                        <span className="text-emerald-700 font-semibold dark:text-emerald-600">
                            Excel{" "}
                        </span>
                        : Continuously improving my skills to manage, analyze,
                        and visualize data more effectively.
                    </List>
                    <List>
                        <span className="text-emerald-700 font-semibold dark:text-emerald-600">
                            Other E-commerce Platforms{" "}
                        </span>
                        : Expanding my knowledge of platforms like Shopify,
                        Etsy, Walmart, and others to offer well-rounded support
                        across multiple marketplaces.
                    </List>
                </ul>
            </div>
        </div>
    );
}

export default Goals;
