function PrimaryButton({ label, icon }) {
  return (
    <button className="dark:bg-white dark:text- inline-white flex items-center gap-2 px-3 rounded-md py-1.5 font-medium bg-gradient-to-b outline-none from-emerald-500 to-emerald-900 dark:from-emerald-600 dark:border-emerald-400 dark:to-emerald-950 text-white hover:opacity-80 duration-300">
      <span>{icon}</span>
      {label}
    </button>
  );
}

export default PrimaryButton;
