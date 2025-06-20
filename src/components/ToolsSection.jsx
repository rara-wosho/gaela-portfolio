import SectionTitle from "./ui/SectionTitle";
import ToolTab from "./ui/ToolTab";

export default function ToolsSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-4 md:p-6 flex-grow dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle title="Tools" />

            <div className="grid gap-2 mt-3 grid-cols-2">
                <ToolTab tool="Helium 10" />
                <ToolTab tool="Keepa" />
                <ToolTab tool="ChatGPT" />
                <ToolTab tool="Trello" />
                <ToolTab tool="Slack" />
                <ToolTab tool="Loom" />
                <ToolTab tool="Clockify" />
                <ToolTab tool="Google Workspace" />
            </div>
        </div>
    );
}
