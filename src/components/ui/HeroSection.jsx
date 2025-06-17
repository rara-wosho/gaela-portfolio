import HeroDetails from "../HeroDetails";
import Avatar from "./Avatar";

function HeroSection() {
  return (
    <div className="hero-section font-bold text-red-500 text-5xl flex items-start py-6">
      <Avatar />
      <HeroDetails />
    </div>
  );
}

export default HeroSection;
