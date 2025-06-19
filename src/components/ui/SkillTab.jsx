import React from "react";

function SkillTab({ skill }) {
  return (
    <div>
      <div className="bg-blue-100 bg-gradient-to-br from-neutral-100 to-neutral-300 shadow-sm dark:from-neutral-700 dark:text-gray-200 dark:to-neutral-950 tracking-wide px-3.5 py-2 rounded-full border dark:border-neutral-700 text-xs">
        {skill}
      </div>
    </div>
  );
}

export default SkillTab;
