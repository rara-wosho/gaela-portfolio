export default function ExperienceCard({ title, date, secondTitle }) {
    return (
        <div className="border dark:border-neutral-800 dark:bg-transparent rounded-md p-4">
            <p className="rounded-full inline-block border dark:border-neutral-700 px-2.5 py-1 dark:text-gray-300 text-[11px] text-gray-600 mb-3">
                {date}
            </p>
            <p className="dark:text-neutral-100 text-neutral-700 mb-1 font-bold">
                {title}
            </p>

            <p className="dark:text-orange-400 text-orange-600 mb-6">
                {secondTitle}
            </p>

            <ul className="ps-4">
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Managed and optimized Amazon product listings to improve
                    visibility, rankings, and conversion rates
                </li>
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Conducted keyword research, competitor analysis, and listing
                    audits to enhance SEO performance
                </li>
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Handled order processing, inventory tracking, and customer
                    service coordination to ensure smooth operations
                </li>
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Collaborated with marketing teams to plan promotions, PPC
                    campaigns, and storefront enhancements
                </li>
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Prepared weekly performance reports using tools like Seller
                    Central and Helium 10 to guide decision-making
                </li>
                <li className="text-sm list-disc text-gray-600 dark:text-gray-200 mb-3">
                    Ensured account health compliance with platform policies,
                    responding to alerts and resolving issues promptly
                </li>
            </ul>
        </div>
    );
}
