import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import SectionTitle from "./ui/SectionTitle";

function AboutSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-6  dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle
                title="PROFILE"
                border
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
                    >
                        <path d="M18 20a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="10" r="4" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                }
            />

            <p className="text-gray-800 mt-2 dark:text-gray-200">
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
                <PrimaryButton
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
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                    }
                    label="Send Email"
                />
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
                            className="lucide lucide-phone-icon lucide-phone"
                        >
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                        </svg>
                    }
                    label="Contact Me"
                />
            </div>
        </div>
    );
}

export default AboutSection;
