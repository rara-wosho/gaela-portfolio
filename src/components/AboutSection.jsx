import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import SectionTitle from "./ui/SectionTitle";

function AboutSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-4 md:p-6  dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle
                title="PROFILE"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
                    >
                        <path d="M18 20a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="10" r="4" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                }
            />

            <p className="text-gray-800 mt-2 dark:text-gray-300">
                An experienced{" "}
                <span className="text-emerald-900 dark:text-emerald-500 font-medium">
                    E-Commerce Account Specialist
                </span>{" "}
                with 3 years of proven experience and expertise in Amazon store
                management, including product/content optimization, order
                processing, customer service, and admin support.
            </p>

            {/* intro buttons */}
            <div className="flex items-center gap-2 mt-4">
                <a href="mailto:devera.avygael@gmail.com">
                    <PrimaryButton
                        containerStyle="px-3"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-mail-icon lucide-mail"
                            >
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                            </svg>
                        }
                        label="Send Email"
                    />
                </a>
                <a href="#get-in-touch">
                    <SecondaryButton
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-signal-icon lucide-signal"
                            >
                                <path d="M2 20h.01" />
                                <path d="M7 20v-4" />
                                <path d="M12 20v-8" />
                                <path d="M17 20V8" />
                                <path d="M22 4v16" />
                            </svg>
                        }
                        label="Get In Touch"
                    />
                </a>
            </div>
        </div>
    );
}

export default AboutSection;
