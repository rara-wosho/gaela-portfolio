import Avatar from "./ui/Avatar";

function UpperHero() {
  return (
    <div className="px-4 w-full bg-[url('/images/bg.jpeg')] bg-cover mb-2 bg-center flex items-end relative justify-end pt-16">
      <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-neutral-500/85 dark:from-neutral-800/90 dark:to-neutral-900/95 to-neutral-700/95"></div>

      <Avatar />
      <h1 className="font-bold text-white text-[52px] uppercase tracking-wider z-10">
        <span className="text-emerald-500">Avy</span>gael Dela Cerna
      </h1>
    </div>
  );
}

export default UpperHero;
