// components/sections/ExperienceSection.tsx
import SectionLayout from "../SectionLayout";

export default function ExperienceSection() {
  const education = [
    {
      id: 1,
      school: "Anil Neerukonda Institute of Technology and Sciences [ANITS]",
      degree: "Bachelor in Computer Science and Engineering", 
      date: "2022 - 2026",
      cgpa: "7.67/10",
      location: "Visakhapatnam, India",
      description:
        "Focus on artificial intelligence, machine learning, and web technologies. Active member of coding clubs, technical and non-technical societies.",
    },
    {
      id: 2,
      school: "Tirumala Junior College",
      degree: "AP Board [XII, MPC]",
      date: "2020 - 2022", 
      cgpa: "9.25/10",
      location: "Visakhapatnam, India",
      description:
        "Completed intermediate education with Mathematics, Physics and Chemistry specialization. Maintained excellent academic performance.",
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "Fulcrum Global Technologies Pvt. Ltd.",
      profession: "Java Backend Development",
      date: "05/24 - 07/24", 
      location: "Hyderabad, India",
      description:
        "Developed backend services using Java. Worked on database design, API development, and integration with frontend applications. Enhanced optimisation using modern techniques.",
    },
    {
      id: 2,
      company: "Oasis Infobyte", 
      profession: "Web Development",
      date: "04/24 - 05/24",
      location: "Virtual",
      description:
        "Designed user interfaces for various web applications, focusing on user experience and accessibility.",
    },
  ];

  return (
    <SectionLayout id="experience" title="EDUCATION & EXPERIENCE">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Education</h2>
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative pl-6 sm:pl-8 pb-8 sm:pb-12 ${
                index === education.length - 1 ? "" : "border-l border-gray-700"
              }`}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--color-brand-green)]"></div>
              <div className="bg-card-bg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 w-full">
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
                        {edu.school}
                      </h3>
                      <span className="bg-gray-800 text-gray-300 text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full whitespace-nowrap">
                        {edu.date}
                      </span>
                    </div>
                    <p className="text-[var(--color-brand-green)] text-sm sm:text-base mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      {edu.location} • CGPA: {edu.cgpa}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Experience</h2>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative pl-6 sm:pl-8 pb-8 sm:pb-12 ${
                index === experiences.length - 1 ? "" : "border-l border-gray-700"
              }`}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--color-brand-green)]"></div>
              <div className="bg-card-bg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-[var(--color-brand-green)] text-sm sm:text-base mt-1">
                      {exp.profession}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{exp.location}</p>
                  </div>
                  <span className="bg-gray-800 text-gray-300 text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
