function SkillTab({ skill }) {
    return (
        <div className="group flex items-center duration-300 bg-gradient-to-br from-white to-neutral-200 shadow-sm dark:from-neutral-800 dark:text-gray-200 dark:to-neutral-950 tracking-wide px-4 py-2.5 rounded-0 border border-neutral-300 dark:border-neutral-700 text-sm hover:text-emerald-600 hover:border-emerald-400 dark:hover:text-emerald-400">
            <div className="w-2 aspect-square bg-neutral-300 dark:bg-neutral-400 rounded-full border me-2 border-neutral-400 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300"></div>
            {skill}
        </div>
    );
}

export default SkillTab;
