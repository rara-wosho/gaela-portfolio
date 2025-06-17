function SecondaryButton({ icon, label }) {
    return (
        <button className="inline-flex items-center gap-2 px-3 rounded-md py-1.5 border border-gray-300 font-medium hover:bg-gray-200 duration-300">
            <span>{icon}</span>
            {label}
        </button>
    );
}

export default SecondaryButton;
