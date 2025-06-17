import HeroDetails from "../HeroDetails";
import Avatar from "./Avatar";

function HeroSection() {
    return (
        <div className="hero-section flex items-center py-6 mb-4 border gap-6">
            <Avatar />
            <HeroDetails />
        </div>
    );
}

export default HeroSection;
