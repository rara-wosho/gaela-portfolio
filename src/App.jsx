import HeroSection from "./components/HeroSection";
import SectionTitle from "./components/SectionTitle";

const App = () => {
  return (
    <div className="main-container mx-auto max-w-[1200px] border">
      <HeroSection />
      <SectionTitle
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        title="About"
      />
    </div>
  );
};

export default App;
