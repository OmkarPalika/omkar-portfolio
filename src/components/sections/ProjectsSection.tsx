// components/sections/ProjectsSection.tsx
import Image from "next/image";
import SectionLayout from "../SectionLayout";
import {
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiElectron,
  SiNodedotjs,
  SiTensorflow,
  SiTailwindcss,
  SiPytorch,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { JSX } from "react";
import { isValidUrl } from "@/utils/urlValidator";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: JSX.Element[];
  projectLink: string;
  textColor: string[];
}

const PythonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
    key="python-svg"
  >
    <path
      fill="#0277BD"
      d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
    />
    <path
      fill="#FFC107"
      d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
    />
  </svg>
);

const DartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 48 48"
    key="dart"
  >
    <path
      fill="#1565c0"
      d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"
    />
    <path
      fill="#42a5f5"
      d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"
    />
    <path
      fill="#1565c0"
      d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"
    />
    <polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43" />
  </svg>
);

const projects: Project[] = [
  {
    id: 1,
    name: "AI-Hub",
    description:
      "A cutting-edge discussions platform enabling seamless interactions between Large Language Models (LLMs) and users, fostering collaborative learning and knowledge sharing in an AI-powered environment.",
    image: "/images/projects/ai-hub.jpg",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="typescript" />,
      <PythonIcon key="python" />,
    ],
    projectLink: "https://www.linkedin.com/in/omkar-palika",
    textColor: ["text-white", "text-blue-600", "text-yellow-400"],
  },
  {
    id: 2,
    name: "Ayur - An AI Vaidya",
    description:
      "An AI-powered assistant that provides personalized Ayurvedic health recommendations and guidance based on traditional principles, helping users achieve holistic wellbeing through customized suggestions.",
    image: "/images/projects/ayur.jpg",
    tech: [
      <RiFlutterFill key="flutter" />,
      <DartIcon key="dart" />,
      <PythonIcon key="python-svg" />,
    ],
    projectLink: "https://www.linkedin.com/in/omkar-palika",
    textColor: ["text-blue-400", "text-blue-500", "text-yellow-400"],
  },
  {
    id: 3,
    name: "NeuroCode",
    description:
      "An innovative Integrated Development Environment (IDE) specifically designed for developers with disabilities, featuring voice commands, screen reader optimization, and customizable accessibility features.",
    image: "/images/projects/neurocode.jpg",
    tech: [
      <SiJavascript key="javascript" />,
      <SiElectron key="electron" />,
      <SiNodedotjs key="node" />,
    ],
    projectLink: "https://www.linkedin.com/in/omkar-palika",
    textColor: ["text-yellow-400", "text-blue-400", "text-green-600"],
  },
  {
    id: 4,
    name: "JARSI - Virtual Assistant",
    description:
      "A sophisticated virtual assistant powered by Reinforcement Learning (RL) that autonomously evolves its codebase through continuous learning, that set it apart from traditional static assistants",
    image: "/images/projects/jarsi.jpg",
    tech: [
      <PythonIcon key="python-svg" />,
      <SiTensorflow key="tensorflow" />,
      <SiPytorch key="pytorch" />,
    ],
    projectLink: "https://www.linkedin.com/in/omkar-palika",
    textColor: ["text-yellow-400", "text-red-500", "text-orange-500"],
  },
  {
    id: 5,
    name: "Portfolio",
    description:
      "A modern and responsive personal portfolio website built with Next.js and TypeScript. Optimized for performance with Next.js Image component and CSS animations.",
    image: "/images/projects/portfolio.png",
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
    ],
    projectLink: "https://www.linkedin.com/in/omkar-palika",
    textColor: ["text-white", "text-blue-600", "text-cyan-400"],
  },
];

export default function ProjectsSection() {
  return (
    <SectionLayout id="projects" title="RECENT PROJECTS">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(
          ({ id, name, description, image, tech, projectLink, textColor }) => (
            <div
              key={id}
              className="bg-card-bg rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-all duration-700 ease-in-out group-hover:opacity-75 scale-105 group-hover:scale-100" />
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority={id === 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading={id === 1 ? "eager" : "lazy"}
                  className="object-cover object-center transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {name}
                </h3>
                <p className="text-gray-300 text-sm mb-6">{description}</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${textColor[i]} translate-y-4 transition-all duration-400 ease-out hover:translate-y-0`}
                    >
                      {t}
                    </span>
                  ))}
                  <div className="flex-grow"></div>
                  <a
                    href={isValidUrl(projectLink) ? projectLink : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="translate-y-4 text-green-600 hover:text-green-700 transition-all duration-300 ease-in-out"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </SectionLayout>
  );
}
