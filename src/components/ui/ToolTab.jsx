export default function ToolTab({ tool, logo }) {
  return (
    <div className="border border-neutral-400 dark:border-neutral-700/70 py-2 px-3 text-neutral-700 dark:text-neutral-300 flex items-center hover:bg-pink-50 duration-300 hover:border-pink-400 dark:hover:bg-pink-950/20">
      <div className="p-1 dark:bg-pink-200/10 bg-pink-50 rounded-md me-2 md:me-3">
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
