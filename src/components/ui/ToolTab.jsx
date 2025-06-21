export default function ToolTab({ tool, logo }) {
    return (
        <div className="border border-neutral-400 dark:border-neutral-700 py-3 px-3 text-neutral-700 dark:text-neutral-200 flex items-center hover:bg-emerald-50 duration-300 hover:border-emerald-600 dark:hover:bg-emerald-950">
            <img
                src={`/images/${logo}`}
                alt="Tool logo"
                className="w-6 h-6 object-cover me-3"
            />
            <p className="text-sm">{tool}</p>
        </div>
    );
}
