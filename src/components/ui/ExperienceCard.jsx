export default function ExperienceCard({
    title,
    date,
    secondTitle,
    children,
    containerStyle,
}) {
    return (
        <div
            className={`${containerStyle} flex flex-col border dark:border-neutral-700 dark:bg-neutral-900 rounded-xl p-6 shadow-sm`}
        >
            <div>
                <p className="rounded-full inline-block border dark:border-neutral-700 px-2.5 py-1 dark:text-gray-300 text-[11px] text-gray-600 mb-3">
                    {date}
                </p>
            </div>
            <p className="dark:text-neutral-100 text-neutral-700 mb-1 font-bold">
                {title}
            </p>

            <p className="dark:text-orange-400 text-orange-600 mb-6 text-sm">
                {secondTitle}
            </p>
            {children}

            {/* <div className="flex pt-6 items-center text-neutral-500 dark:text-neutral-600 mt-auto">
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
                    class="lucide lucide-map-pin-icon lucide-map-pin me-1"
                >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <em className="text-xs ">GF Limketkai, Cagayan de Oro City</em>
            </div> */}
        </div>
    );
}
