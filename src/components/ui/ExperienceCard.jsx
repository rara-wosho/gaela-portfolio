export default function ExperienceCard({ title, date, secondTitle, children }) {
    return (
        <div className="border dark:border-neutral-700 dark:bg-neutral-900 rounded-xl p-6">
            <p className="rounded-full inline-block border dark:border-neutral-700 px-2.5 py-1 dark:text-gray-300 text-[11px] text-gray-600 mb-3">
                {date}
            </p>
            <p className="dark:text-neutral-100 text-neutral-700 mb-1 font-bold">
                {title}
            </p>

            <p className="dark:text-orange-400 text-orange-600 mb-6">
                {secondTitle}
            </p>
            {children}
        </div>
    );
}
