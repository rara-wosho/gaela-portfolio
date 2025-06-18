function SecondaryButton({ icon, label }) {
  return (
    <button className="inline-flex text-gray-800 dark:text-gray-100 items-center gap-2 px-3 rounded-md py-1.5 border border-gray-300 font-medium hover:bg-gray-200 duration-300">
      <span>{icon}</span>
      {label}
    </button>
  );
}

export default SecondaryButton;
