export default function ToolTab({ tool, logo }) {
    return (
        <div className="border border-neutral-400 dark:border-neutral-600 py-2 px-3 text-neutral-700 dark:text-neutral-200 flex items-center hover:bg-emerald-50 duration-300 hover:border-emerald-600 dark:hover:bg-emerald-950">
            <div className="p-1 dark:bg-emerald-600/10 bg-emerald-50 rounded-md me-2 md:me-3">
                <img
                    src={`/images/${logo}`}
                    alt="Tool logo"
                    className="w-6 h-6 object-cover"
                />
            </div>
            <p className="text-[12px] md:text-sm">{tool}</p>
        </div>
    );
}
