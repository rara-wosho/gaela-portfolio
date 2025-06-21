import { useEffect, useState } from "react";
import Avatar from "./ui/Avatar";

function UpperHero() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").classList.add("dark");
        } else {
            document.querySelector("body").classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="px-4 w-full bg-[url('/images/bg.jpeg')] bg-cover mb-2 bg-center flex flex-col items-end relative justify-end md:pt-10 pt-52 rounded-b-xl pb-2 md:pb-0">
            <div
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 cursor-pointer absolute top-4 left-1 z-20 text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun-icon lucide-sun"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            </div>

            <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-neutral-500/85 dark:from-neutral-800/90 dark:to-neutral-900/95 to-neutral-700/95 rounded-b-xl"></div>

            <Avatar />
            <div className="flex flex-col items-center md:items-end w-full">
                <div className="flex items-center dark:border-gray-500 border z-10 rounded-full px-3 gap-x-2">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                    <p className="py-1 text-white text-sm dark:text-gray-200">
                        Available for work
                    </p>
                </div>
                <h1 className="font-bold leading-12 text-white text-center md:text-end md:text-[64px] text-[32px] w-full uppercase tracking-wider z-10">
                    <span className="text-emerald-500">Avy</span>gael De Vera
                </h1>
            </div>
        </div>
    );
}

export default UpperHero;
