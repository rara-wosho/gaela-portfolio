import HeroDetails from "../HeroDetails";
import HeroMain from "../HeroMain";
import UpperHero from "../UpperHero";
import Avatar from "./Avatar";

function HeroSection() {
  return (
    <div className="hero-section flex flex-col items-stretch">
      <UpperHero />

      <div className="w-full flex items-center py-1 justify-end mb-4">
        <p className="text-gray-700 dark:text-gray-200 font-light tracking-wide uppercase pe-3 text-2xl">
          E-commerce account specialist
        </p>

        <div className="border rounded-full border-orange-500 py-1 px-3 flex items-center gap-1 text-orange-500 dark:text-orange-400 dark:border-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles-icon lucide-sparkles"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
          <p className="font-semibold text-sm tracking-wider">Amazon</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
