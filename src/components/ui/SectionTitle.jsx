function SectionTitle({ title, icon, border, containerStyle }) {
    return (
        <div
            className={`${
                border &&
                "after:h-1 after:w-14 after:bg-emerald-600 after:absolute relative after:-bottom-4 after:left-0 mb-5"
            } inline-flex items-center gap-3 dark:text-pink-600 text-neutral-900 ${containerStyle}`}
        >
            {icon && (
                <div className="secton-title-icon inline-flex items-center justify-center rounded-full">
                    {icon}
                </div>
            )}
            <p className="text-[18px] font-bold md:tracking-[6px] uppercase bg-gradient-to-r dark:from-pink-700 dark:to-purple-700 inline-flex bg-clip-text text-transparent from-pink-800 to-purple-900">
                {title}
            </p>
        </div>
    );
}

export default SectionTitle;
