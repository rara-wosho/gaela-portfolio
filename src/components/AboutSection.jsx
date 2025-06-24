import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import SectionTitle from "./ui/SectionTitle";
import SectionWrapper from "./ui/SectionWrapper";

function AboutSection() {
  return (
    <SectionWrapper>
      <SectionTitle
        title="PROFILE"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
          >
            <path d="M18 20a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      />

      <p className="text-gray-800 mt-2 text-sm dark:text-gray-300">
        An experienced{" "}
        <span className="text-pink-800 dark:text-pink-800 font-medium">
          E-Commerce Account Specialist
        </span>{" "}
        with 3 years of proven experience and expertise in Amazon store
        management, including product/content optimization, order processing,
        customer service, and admin support.
      </p>

      <p className="text-gray-700 text-xs dark:text-gray-200 tracking-wider uppercase mt-4 mb-1">
        Specializing in
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="py-2 px-2 md:px-3 border inline-flex justify-center items-center border-pink-400/50 dark:border-pink-900 dark:bg-pink-500/5 dark:text-pink-500 text-pink-800 rounded-md text-[12px] md:text-sm">
          Amazon Account Management
        </div>
        <div className="py-2 px-2 md:px-3 border inline-flex justify-center items-center border-pink-400/50 dark:border-pink-900 dark:bg-pink-500/5 dark:text-pink-500 text-pink-800 rounded-md text-[12px] md:text-sm">
          ESL Tutoring
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
