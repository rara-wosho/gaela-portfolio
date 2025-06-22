export default function ExperienceCard({
    title,
    date,
    secondTitle,
    children,
    containerStyle,
    image,
}) {
    return (
        <div
            className={`${containerStyle} group flex flex-col border border-neutral-300 dark:border-neutral-700 bg-transparent dark:bg-neutral-900 rounded-xl p-4 md:p-6 shadow-sm`}
        >
            <div>
                <p className="rounded-full inline-block border group-hover:text-emerald-600 group-hover:border-emerald-600 duration-500 dark:group-hover:text-emerald-400 dark:border-neutral-700 px-2.5 py-1 dark:text-gray-300 text-[11px] text-gray-600 mb-3">
                    {date}
                </p>
            </div>
            <p className="dark:text-neutral-100 text-neutral-700 mb-1 font-bold">
                {title}
            </p>

            <p className="dark:text-orange-400 text-orange-600 mb-4 min-h-6 text-sm">
                {secondTitle}
            </p>

            {children}
            {image && (
                <img
                    src={image}
                    className="aspect-video rounded-md mt-3 object-cover"
                    alt=""
                />
            )}
        </div>
    );
}
