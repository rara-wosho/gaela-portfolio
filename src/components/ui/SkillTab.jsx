function SkillTab({ skill }) {
  return (
    <div className="group flex items-center duration-300 bg-gradient-to-br from-white to-neutral-200 shadow-sm dark:from-neutral-900 dark:text-gray-200 dark:to-neutral-950 tracking-wide px-4 py-3 rounded-0 border border-neutral-300 dark:border-neutral-800/90 text-sm hover:text-pink-600 hover:border-pink-400 dark:hover:text-pink-400">
      <div className="w-2 aspect-square bg-neutral-300 dark:bg-neutral-400 rounded-full border me-2 border-neutral-400 group-hover:bg-pink-600 group-hover:border-pink-600 transition-colors duration-300"></div>
      {skill}
    </div>
  );
}

export default SkillTab;
