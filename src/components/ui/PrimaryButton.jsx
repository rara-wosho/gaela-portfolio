function PrimaryButton({ label, icon, rightIcon, containerStyle }) {
    return (
        <button
            className={`dark:text-neutral-50 flex items-center justify-center gap-2 rounded-md py-1.5 font-medium bg-gradient-to-b from-pink-400 to-purple-600 dark:from-pink-600 dark:border-purple-800 text-white border dark:to-purple-950 hover:opacity-80 duration-300 ${containerStyle}`}
        >
            {icon && <span>{icon}</span>}
            {label}
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    );
}

export default PrimaryButton;
