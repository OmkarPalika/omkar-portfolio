// components/SkillsCard.tsx
"use client";
import { memo } from "react";
import { skills } from "@/data/iconData";
import Image from "next/image";

const SkillsCard = memo(() => (
  <div className="bg-[var(--color-card-bg)] rounded-3xl p-6 shadow-xl h-full transition-all duration-300 hover:shadow-2xl group">
    <div className="flex flex-col justify-between gap-4">
      {/* Section Title */}
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
        <div className="w-10 h-1 bg-[var(--color-brand-green)] rounded-full mt-1 group-hover:w-14 transition-all duration-700 ease-in-out" />
      </div>

      {/* Skill Icons */}
      <div className="grid gap-4 grid-cols-5 mb-3 mt-4 animate-fade-in">
        {skills.map(({ content, type, textColor = "", label }, index) => (
          <div
            className="flex justify-center"
            key={`skill-${index}`}
            title={label}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-md shadow-green-600/20 transition-transform duration-300 hover:scale-110 ${textColor}`}
              role="img"
              aria-label={label}
              style={{ willChange: "transform" }}
            >
              {type === "icon" ? (
                <i className={`${content} text-3xl`} aria-hidden="true" />
              ) : type === "svg" ? (
                <Image
                  src={content}
                  alt={label}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              ) : (
                <span className="text-3xl">{content}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm pt-3 border-t border-gray-800 group-hover:text-gray-300 transition-colors duration-300">
        Explore my portfolio to see these technologies in action.
      </p>
    </div>
  </div>
));

SkillsCard.displayName = "SkillsCard";

export default SkillsCard;
