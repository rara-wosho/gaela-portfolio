import { useEffect, useState } from "react";
import Avatar from "./ui/Avatar";
import HeroDetailTabs from "./ui/HeroDetailTabs";
import SecondaryButton from "./ui/SecondaryButton";
import PrimaryButton from "./ui/PrimaryButton";

function HeroMain() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-transparent flex-shrink-0 mb-1 pt-4 pb-2 flex flex-col justify-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <Avatar />
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 mb-2">
            <p className="text-[18px] md:text-4xl font-bold tracking-wide">
              Avygael De Vera
            </p>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide md:w-6 w-4 lucide-moon-icon lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide md:w-6 w-4 lucide-sun-icon lucide-sun"
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
              )}
            </div>
          </div>

          <div
            className="flex items-center gap-2 mb-1
         text-gray-800 dark:text-gray-200"
          >
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
              className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <p className="text-[10px] md:text-sm">
              Bachelor of Arts in English Language
            </p>
          </div>
          <div
            className="flex items-center gap-2 mb-1
         text-gray-800 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
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
            <p className="text-[10px] md:text-sm">devera.avygael@gmail.com</p>
          </div>
          <div
            className="flex items-center gap-2 mb-1
         text-gray-800 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin-icon lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-[10px] md:text-sm">Cagayan De Oro City</p>
          </div>
        </div>
      </div>

      {/* intro buttons */}
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <a href="mailto:devera.avygael@gmail.com">
          <PrimaryButton
            containerStyle="px-3 text-[12px] md:text-sm"
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
        </a>
        <a href="#get-in-touch">
          <SecondaryButton
            containerStyle="text-[12px] md:text-sm"
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

export default HeroMain;
