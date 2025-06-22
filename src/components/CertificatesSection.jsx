import SecondaryButton from "./ui/SecondaryButton";
import SectionTitle from "./ui/SectionTitle";

function CertificatesSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-6 mb-3 dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle
                title="certificates"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-badge-check-icon lucide-badge-check"
                    >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="img-wrapper relative">
                    <img
                        src="/images/ecert2.PNG"
                        className="object-top object-cover w-full rounded-md aspect-video start "
                        alt=""
                    />
                    <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 font-semibold pe-4">
                        Teaching English as a Foreign Language Course
                    </p>
                </div>
                <div className="img-wrapper relative">
                    <img
                        src="/images/ecert1.PNG"
                        className="object-cover w-full rounded-md object-top aspect-video start"
                        alt=""
                    />
                    <p className="text-gray-700 dark:text-gray-200 text-sm mt-2 font-semibold pe-4">
                        EF Set English Certificate
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CertificatesSection;
