function PrimaryButton({ label, icon }) {
    return (
        <button className="dark:bg-white dark:text-gray-800 inline-flex items-center gap-2 px-3 rounded-md py-1.5 border border-gray-300 font-medium bg-emerald-800 text-white hover:bg-gray-800 duration-300">
            <span>{icon}</span>
            {label}
        </button>
    );
}

export default PrimaryButton;
