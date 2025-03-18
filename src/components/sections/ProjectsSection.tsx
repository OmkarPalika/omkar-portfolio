// components/sections/ProjectsSection.tsx
import Image from 'next/image';
import SectionLayout from '../SectionLayout';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: 'Coffee Website',
      description: 'A modern e-commerce platform for a premium coffee brand with online ordering.',
      image: '/images/projects/coffee.png'
    },
    {
      id: 2,
      name: 'Food Product Design',
      description: 'Branding and website design for an organic food delivery service.',
      image: '/images/projects/food.png'
    },
    {
      id: 3,
      name: 'Restaurant Landing Page',
      description: 'Responsive landing page for a high-end restaurant with reservation system.',
      image: '/images/projects/restaurant.png'
    },
    {
      id: 4,
      name: 'Barbershop Website',
      description: 'Complete digital presence for a modern barbershop with appointment booking.',
      image: '/images/projects/barbershop.png'
    },
    {
      id: 5,
      name: 'Construction Landing Page',
      description: 'Lead generation landing page for a construction company with quote calculator.',
      image: '/images/projects/construction.png'
    }
  ];

  return (
    <SectionLayout id="projects" title="RECENT PROJECTS">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-card-bg rounded-3xl overflow-hidden shadow-xl transition-all hover:transform hover:scale-[1.02]">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
              <Image 
                src={project.image} 
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-6">{project.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--color-brand-green)] hover:text-white transition-colors">
                <span>Visit Project</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}