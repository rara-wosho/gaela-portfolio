import React from "react";
import SectionTitle from "./ui/SectionTitle";

function EducationSection() {
  return (
    <div className="p-6 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 border shadow-sm">
      <SectionTitle title="EDUCATION" />

      <p className="font-medium mt-2 mb-1 text-gray-800 dark:text-gray-200">
        St. Peter’s College Iligan City
      </p>
      <p className="mb-4 text-xs dark:text-gray-300">2019-2023</p>
      <p className="font-medium mt-2 mb-1 text-gray-800 dark:text-gray-200">
        Bachelor of Arts in English Language
      </p>
      <p className="text-xs mb-2 dark:text-gray-300">GPA: 1.4</p>
      <div className="flex items-center ">
        <p className="text-[14px] border flex items-center border-emerald-700 px-3 font-semibold text-emerald-800 dark:text-emerald-500 dark:border-emerald-500 py-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-award-icon lucide-award me-1"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="6" />
          </svg>
          Dean's Lister
        </p>
      </div>
    </div>
  );
}

export default EducationSection;
