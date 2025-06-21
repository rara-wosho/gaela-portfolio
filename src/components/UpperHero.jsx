import Avatar from "./ui/Avatar";

function UpperHero() {
    return (
        <div className="px-4 w-full bg-[url('/images/bg.jpeg')] bg-cover mb-2 bg-center flex flex-col items-end relative justify-end md:pt-10 pt-52 rounded-b-xl pb-2 md:pb-0">
            <div className="absolute h-full w-full inset-0 bg-gradient-to-b from-neutral-500/85 dark:from-neutral-800/90 dark:to-neutral-900/95 to-neutral-700/95 rounded-b-xl"></div>

            <Avatar />
            <div className="flex flex-col items-center md:items-end w-full">
                <div className="flex items-center dark:border-gray-500 border z-10 rounded-full px-3 gap-x-2">
                    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
                    <p className="py-1 text-white text-sm dark:text-gray-200">
                        Available for work
                    </p>
                </div>
                <h1 className="font-bold leading-12 text-white text-center md:text-end md:text-[64px] text-[32px] w-full uppercase tracking-wider z-10">
                    <span className="text-emerald-500">Avy</span>gael De Vera
                </h1>
            </div>
        </div>
    );
}

export default UpperHero;
