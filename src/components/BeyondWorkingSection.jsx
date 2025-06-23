import SectionTitle from "./ui/SectionTitle";
import SectionWrapper from "./ui/SectionWrapper";

function BeyondWorkingSection() {
    return (
        <SectionWrapper>
            <SectionTitle title="Beyond Working" />

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                When I'm not immersed in my tasks, you'll probably find me
                brainstorming ideas to improve my skills by joining webinars
                conducted by successful Amazon VAs. I also enjoy watching
                YouTube tutorials or simply relaxing with my favorite sitcoms
                like The Big Bang Theory and Friends.
            </p>
        </SectionWrapper>
    );
}

export default BeyondWorkingSection;
