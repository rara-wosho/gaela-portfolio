export default function List({ children }) {
  return (
    <li
      className="text-sm text-gray-700 dark:text-neutral-300 relative
    after:content-[''] after:absolute after:w-[12px] after:h-[12px]
    after:rounded-full after:bg-white after:border-neutral-500 dark:after:bg-neutral-950 after:-left-[22px]
    after:top-1.5 after:border dark:after:border-neutral-700 hover:after:bg-pink-600 hover:dark:after:bg-pink-500 after:duration-500"
    >
      {children}
    </li>
  );
}
