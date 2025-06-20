export default function ToolTab({ tool }) {
    return (
        <div className="border dark:border-neutral-700 py-2 px-3 text-neutral-200 flex items-center">
            <img
                src="\images\chatgpt.png"
                alt="Tool logo"
                className="w-8 h-8 object-cover me-3"
            />
            <p className="text-sm">{tool}</p>
        </div>
    );
}
