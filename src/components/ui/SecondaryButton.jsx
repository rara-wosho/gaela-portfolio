function SecondaryButton({ icon, label }) {
    return (
        <button className="inline-flex text-gray-800 dark:text-fuchsia-600 items-center gap-2 px-3 rounded-md py-1.5 border border-fuchsia-400/30 font-medium dark:hover:bg-fuchsia-900/10 hover:bg-gray-200 duration-300">
            <span>{icon}</span>
            {label}
        </button>
    );
}

export default SecondaryButton;
