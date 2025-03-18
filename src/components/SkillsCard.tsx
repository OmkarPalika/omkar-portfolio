import { memo } from "react";

// Type definitions for better type safety
type SkillType = {
  bg: string;
  content: string;
  type: "icon" | "text";
  textColor?: string;
  label: string;
};

function SkillsCard() {
  // Enhanced skills data with accessibility labels
  const skills: SkillType[] = [
    { bg: "bg-orange-600", content: "H5", type: "text", label: "HTML5" },
    { bg: "bg-blue-500", content: "C3", type: "text", label: "CSS3" },
    {
      bg: "bg-yellow-400",
      content: "JS",
      type: "text",
      textColor: "text-black",
      label: "JavaScript",
    },
    {
      bg: "bg-blue-400",
      content: "fa-brands fa-react",
      type: "icon",
      label: "React",
    },
    {
      bg: "bg-orange-700",
      content: "fa-brands fa-git-alt",
      type: "icon",
      label: "Git",
    },
    {
      bg: "bg-gray-800",
      content: "fa-brands fa-github",
      type: "icon",
      label: "GitHub",
    },
    {
      bg: "bg-pink-500",
      content: "fa-brands fa-sass",
      type: "icon",
      label: "Sass",
    },
    { bg: "bg-cyan-500", content: "TW", type: "text", label: "Tailwind CSS" },
    {
      bg: "bg-purple-500",
      content: "fa-brands fa-figma",
      type: "icon",
      label: "Figma",
    },
    { bg: "bg-blue-800", content: "Ps", type: "text", label: "Photoshop" },
  ];

  const renderSkill = (skill: SkillType, index: number) => (
    <div
      className="flex justify-center"
      key={`skill-${index}`}
      title={skill.label}
    >
      <div
        className={`w-10 h-10 ${skill.bg} flex items-center justify-center rounded-lg shadow-md transform hover:rotate-6 hover:scale-110 transition-all duration-300`}
        aria-label={skill.label}
      >
        {skill.type === "icon" ? (
          <i className={`${skill.content} text-white text-lg`}></i>
        ) : (
          <span
            className={`${skill.textColor || "text-white"} font-bold text-sm`}
          >
            {skill.content}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[var(--color-card-bg)] rounded-3xl p-6 shadow-xl h-full transition-all duration-300 hover:shadow-2xl group">
      <div className="flex flex-col justify-between gap-4">
        {/* Header with improved styling and accessibility */}
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-[var(--color-brand-green)] group-hover:scale-110 transition-transform duration-300" 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            Skills
          </h2>
          <div className="w-10 h-1 bg-[var(--color-brand-green)] rounded-full mt-1 group-hover:w-14 transition-all duration-300 ease-in-out"></div>
        </div>
        {/* Skill Icons with animation on hover */}
        <div className="grid gap-4 grid-cols-5 mb-3 mt-4 animate-fade-in">
          {skills.map((skill, index) => renderSkill(skill, index))}
        </div>

        {/* Project Link with improved styling */}
        <p className="text-gray-400 text-sm pt-3 border-t border-gray-800 group-hover:text-gray-300 transition-colors duration-300">
          Explore my portfolio to see these technologies in action.
        </p>
      </div>
    </div>
  );
}

export default memo(SkillsCard);
