import SectionTitle from "./ui/SectionTitle";

function BeyondWorkingSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-4 md:p-6  dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle title="Beyond Working" />

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                When I'm not immersed in my tasks, you'll probably find me
                brainstorming ideas to improve my skills by joining webinars
                conducted by successful Amazon VAs. I also enjoy watching
                YouTube tutorials or simply relaxing with my favorite sitcoms
                like The Big Bang Theory and Friends.
            </p>
        </div>
    );
}

export default BeyondWorkingSection;
