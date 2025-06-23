function SectionWrapper({ children, containerStyle, id }) {
    return (
        <div
            id={id}
            className={`shadow-sm h-full rounded-xl p-4 md:p-6 dark:bg-gray-600/10 dark:border-violet-100/10 border-neutral-200 border ${containerStyle}`}
        >
            {children}
        </div>
    );
}

export default SectionWrapper;
