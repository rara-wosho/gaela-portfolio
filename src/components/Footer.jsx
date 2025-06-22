function Footer() {
    return (
        <div className="border-t border-t-neutral-300 dark:border-t-neutral-800 w-full pt-6 flex justify-between">
            <p className="text-gray-700 dark:text-gray-300 text-xs">
                ©{"2025 "}
                <a
                    className="text-emerald-600 dark:text-emerald-600"
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
    );
}

export default Footer;
