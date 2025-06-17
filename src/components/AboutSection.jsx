import SectionTitle from "./ui/SectionTitle";

function AboutSection() {
    return (
        <div className="mb-4 border rounded-md p-4">
            <SectionTitle
                title="ABOUT"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-user-round-icon lucide-user-round"
                    >
                        <circle cx="12" cy="8" r="5" />
                        <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                }
            />

            <p className="text-gray-800 mt-3">
                An experienced E-Commerce Account Specialist with 3 years of
                proven experience and expertise in Amazon store management,
                including product/content optimization, order processing,
                customer service, and admin support.
            </p>
        </div>
    );
}

export default AboutSection;
