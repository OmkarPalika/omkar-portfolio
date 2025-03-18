// components/sections/ExperienceSection.tsx
import SectionLayout from '../SectionLayout';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'Adobe',
      profession: 'Website Development',
      date: '08/24 - Present',
      description: 'Working with the marketing team to develop and maintain the company website, implementing new features and ensuring optimal performance.'
    },
    {
      id: 2,
      company: 'Google',
      profession: 'Web Product Designer',
      date: '02/22 - 01/23',
      description: 'Designed user interfaces for various web applications, focusing on user experience and accessibility. Collaborated with development teams to implement designs.'
    },
    {
      id: 3,
      company: 'Figma',
      profession: 'Web Designer',
      date: '05/23 - 11/23',
      description: 'Created design systems and UI components for web applications. Worked closely with product managers to translate business requirements into visual designs.'
    }
  ];

  return (
    <SectionLayout id="experience" title="EXPERIENCE OR WORK">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`relative pl-8 pb-12 ${index === experiences.length - 1 ? '' : 'border-l border-gray-700'}`}>
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-brand-green)]"></div>
            <div className="bg-card-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-[var(--color-brand-green)]">{exp.profession}</p>
                </div>
                <span className="bg-gray-800 text-gray-300 text-sm py-1 px-3 rounded-full">{exp.date}</span>
              </div>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}