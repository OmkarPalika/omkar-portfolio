import { memo } from "react";

// Type definitions for better type safety
type SkillType = {
  content: string;
  type: "icon" | "svg";
  textColor?: string;
  label: string;
};

function SkillsCard() {
  // Enhanced skills data with accessibility labels
  const skills: SkillType[] = [
    {
      content: "ri-html5-fill",
      type: "icon",
      textColor: "text-orange-600",
      label: "HTML5",
    },
    {
      content: "ri-css3-fill",
      type: "icon",
      textColor: "text-blue-500",
      label: "CSS3",
    },
    {
      content: "ri-javascript-fill",
      type: "icon",
      textColor: "text-yellow-400",
      label: "JavaScript",
    },
    {
      content: "ri-reactjs-fill",
      type: "icon",
      textColor: "text-blue-400",
      label: "React",
    },
    {
      content: "ri-github-fill",
      type: "icon",
      textColor: "text-white",
      label: "GitHub",
    },
    {
      content: "ri-bootstrap-fill",
      type: "icon",
      textColor: "text-violet-400",
      label: "Bootstrap",
    },
    {
      content: "ri-tailwind-css-fill",
      type: "icon",
      textColor: "text-blue-400",
      label: "Tailwind",
    },
    {
      content: "ri-nextjs-line",
      type: "icon",
      textColor: "text-white",
      label: "Next",
    },
    {
      content: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" key="python"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path></svg>`,
      type: "svg",
      textColor: "",
      label: "Python",
    },
    {
      content: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" key="dart"><path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"></path><path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path><path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"></path><polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon></svg>`,
      type: "svg",
      textColor: "text-white",
      label: "",
    },
  ];

  const renderSkill = (skill: SkillType, index: number) => (
    <div
      className="flex justify-center"
      key={`skill-${index}`}
      title={skill.label}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-md transform hover:rotate-6 hover:scale-110 transition-all duration-300`}
        aria-label={skill.label}
      >
        {skill.type === "icon" ? (
          <i
            className={`${skill.content} ${
              skill.textColor || "text-white"
            } text-lg`}
          ></i>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: skill.content }} />
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
