function Footer() {
    return (
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-full pt-6 flex flex-col">
            <div className="flex flex-col items-center py-3 mb-6 md:mb-0">
                <p className="text-xl font-bold uppercase tracking-wide dark:text-neutral-300 text-gray-700">
                    Avygael P. De Vera
                </p>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                    E-commerce account specialist | ESL Teacher
                </p>
            </div>

            <div className="flex justify-between">
                <p className="text-gray-700 dark:text-gray-300 text-xs">
                    ©{"2025 "}
                    <a
                        className="text-pink-800 dark:text-pink-500"
                        href="https://raeldevera.vercel.app"
                        target="_blank"
                    >
                        Rael De Vera
                    </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-xs">
                    All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
