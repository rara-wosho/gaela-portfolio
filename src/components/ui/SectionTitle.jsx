function SectionTitle({ title, icon, border }) {
    return (
        <div
            className={`${
                border &&
                "after:h-1 after:w-14 after:bg-emerald-600 after:absolute relative after:-bottom-4 after:left-0 mb-5"
            } inline-flex items-center justify-center gap-3 dark:text-gray-100 text-neutral-900`}
        >
            {icon && (
                <div className="secton-title-icon inline-flex items-center justify-center rounded-full">
                    {icon}
                </div>
            )}
            <p className="text-[18px] font-bold tracking-[6px]">{title}</p>
        </div>
    );
}

export default SectionTitle;
