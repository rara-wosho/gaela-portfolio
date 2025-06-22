import SectionTitle from "./ui/SectionTitle";

function GetInTouchSection() {
    return (
        <div
            id="get-in-touch"
            className="shadow-sm h-full rounded-xl p-6 mb-3 dark:bg-neutral-900 dark:border-neutral-700 border"
        >
            <SectionTitle
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
                        className="lucide lucide-signal-icon lucide-signal"
                    >
                        <path d="M2 20h.01" />
                        <path d="M7 20v-4" />
                        <path d="M12 20v-8" />
                        <path d="M17 20V8" />
                        <path d="M22 4v16" />
                    </svg>
                }
                title="Get in Touch"
            />

            <div className="flex flex-col gap-2 mt-3">
                <div className="bg-neutral-100 dark:bg-neutral-950 p-2 rounded-md dark:hover:bg-neutral-950/50 hover:bg-gray-200 duration-300">
                    <p className="text-xs text-gray-600 dark:text-neutral-400">
                        Email
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                        devera.avygael@gmail.com
                    </p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-950 p-2 rounded-md dark:hover:bg-neutral-950/50 hover:bg-gray-200 duration-300">
                    <p className="text-xs text-gray-600 dark:text-neutral-400">
                        Phone number
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                        09955133441
                    </p>
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-950 p-2 rounded-md dark:hover:bg-neutral-950/50 hover:bg-gray-200 duration-300">
                    <p className="text-xs text-gray-600 dark:text-neutral-400">
                        Address
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                        Upper Sumpong Indahag, Cagayan De Oro City
                    </p>
                </div>
                <p className="text-xs text-gray-700 dark:text-neutral-200 mt-1">
                    Social Links
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-1/2 flex justify-center bg-neutral-100 dark:bg-neutral-950 px-4 py-2 rounded-md dark:hover:bg-neutral-950/50 hover:bg-gray-200 duration-300 text-gray-600 dark:text-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-facebook-icon lucide-facebook"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </div>
                    <div className="w-1/2 flex justify-center bg-neutral-100 dark:bg-neutral-950 px-4 py-2 rounded-md dark:hover:bg-neutral-950/50 hover:bg-gray-200 duration-300 text-gray-600 dark:text-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin-icon lucide-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouchSection;
