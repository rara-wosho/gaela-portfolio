import SectionWrapper from "./SectionWrapper";

export default function ExperienceCard({
    title,
    date,
    secondTitle,
    children,
    containerStyle,
    image,
}) {
    return (
        <SectionWrapper containerStyle={containerStyle}>
            <div>
                <p className="rounded-full inline-block border group-hover:text-emerald-600 group-hover:border-emerald-600 duration-500 dark:group-hover:text-emerald-400 dark:border-neutral-700 px-2.5 py-1 dark:text-gray-300 text-[11px] text-gray-600 mb-3">
                    {date}
                </p>
            </div>
            <p className="dark:text-neutral-100 text-neutral-700 mb-1 font-bold">
                {title}
            </p>

            <p className="dark:text-pink-500 text-fuchsia-800 mb-4 min-h-6 text-sm">
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
        </SectionWrapper>
    );
}
