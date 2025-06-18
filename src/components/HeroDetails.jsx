import React from "react";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import Avatar from "./ui/Avatar";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";

function HeroDetails() {
    return (
        <div className="flex flex-col bg-neutral-100 dark:bg-neutral-900/35 flex-grow">
            <AboutSection />
            <EducationSection />
        </div>
    );
}

export default HeroDetails;
