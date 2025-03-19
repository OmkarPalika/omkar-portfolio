// components/sections/Ed-ExSection.tsx
import SectionLayout from "../SectionLayout";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  meta: string;
  description: string;
}

interface Items {
  education: TimelineItem[];
  experience: TimelineItem[];
}

export default function ExperienceSection() {
  const items: Items = {
    education: [
      {
        id: 1,
        title: "Anil Neerukonda Institute of Technology and Sciences [ANITS]",
        subtitle: "Bachelor in Computer Science and Engineering",
        date: "2022 - 2026",
        meta: "Visakhapatnam, India • CGPA: 7.67/10",
        description: "Focus on artificial intelligence, machine learning, and web technologies. Active member of coding clubs, technical and non-technical societies.",
      },
      {
        id: 2, 
        title: "Tirumala Junior College",
        subtitle: "AP Board [XII, MPC]",
        date: "2020 - 2022",
        meta: "Visakhapatnam, India • CGPA: 9.25/10", 
        description: "Completed intermediate education with Mathematics, Physics and Chemistry specialization. Maintained excellent academic performance.",
      }
    ],
    experience: [
      {
        id: 1,
        title: "Fulcrum Global Technologies Pvt. Ltd.",
        subtitle: "Java Backend Development",
        date: "05/24 - 07/24",
        meta: "Hyderabad, India",
        description: "Developed backend services using Java. Worked on database design, API development, and integration with frontend applications. Enhanced optimisation using modern techniques.",
      },
      {
        id: 2,
        title: "Oasis Infobyte",
        subtitle: "Web Development", 
        date: "04/24 - 05/24",
        meta: "Virtual",
        description: "Designed user interfaces for various web applications, focusing on user experience and accessibility.",
      }
    ]
  };

  const TimelineItem = ({ item, isLast }: { item: TimelineItem, isLast: boolean }) => (
    <div className={`relative pl-6 sm:pl-8 pb-8 sm:pb-12 ${!isLast && "border-l border-gray-700"}`}>
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--color-brand-green)]" />
      <div className="bg-card-bg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 w-full gap-2 sm:gap-4">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white break-words">{item.title}</h3>
              <span className="bg-gray-800 text-gray-300 text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full whitespace-nowrap">{item.date}</span>
            </div>
            <p className="text-[var(--color-brand-green)] text-sm sm:text-base mt-1">{item.subtitle}</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">{item.meta}</p>
          </div>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
      </div>
    </div>
  );

  const Section = ({ title, items }: { title: string, items: TimelineItem[] }) => (
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">{title}</h2>
      {items.map((item, i) => (
        <TimelineItem key={item.id} item={item} isLast={i === items.length - 1} />
      ))}
    </div>
  );

  return (
    <SectionLayout id="experience" title="EDUCATION & EXPERIENCE">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section title="Education" items={items.education} />
        <Section title="Experience" items={items.experience} />
      </div>
    </SectionLayout>
  );
}
