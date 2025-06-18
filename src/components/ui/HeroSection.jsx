import HeroDetails from "../HeroDetails";
import HeroMain from "../HeroMain";
import Avatar from "./Avatar";

function HeroSection() {
  return (
    <div className="hero-section flex items-start mb-4">
      <HeroMain />
      <HeroDetails />
      {/* <Avatar /> */}
    </div>
  );
}

export default HeroSection;
