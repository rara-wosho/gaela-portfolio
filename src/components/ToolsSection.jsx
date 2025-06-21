import SectionTitle from "./ui/SectionTitle";
import ToolTab from "./ui/ToolTab";

export default function ToolsSection() {
    return (
        <div className="shadow-sm h-full rounded-xl p-4 md:p-6 flex-grow dark:bg-neutral-900 dark:border-neutral-700 border">
            <SectionTitle
                title="Tools"
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
                        className="lucide lucide-layout-panel-left-icon lucide-layout-panel-left"
                    >
                        <rect width="7" height="18" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                    </svg>
                }
            />

            <div className="grid gap-2 mt-3 grid-cols-2">
                <ToolTab tool="Helium 10" logo="helium.jpeg" />
                <ToolTab tool="Keepa" logo="keepa.png" />
                <ToolTab tool="ChatGPT" logo="chatgpt.png" />
                <ToolTab tool="Trello" logo="trello.png" />
                <ToolTab tool="Slack" logo="slack.png" />
                <ToolTab tool="Lark" logo="lark.png" />
                <ToolTab tool="Loom" logo="loom.png" />
                <ToolTab tool="Clockify" logo="clockify.png" />
                <ToolTab tool="Google Workspace" logo="google.png" />
                <ToolTab tool="SwipeMagic" logo="google.png" />
            </div>
        </div>
    );
}
