// components/sections/ServicesSection.tsx
import SectionLayout from '../SectionLayout';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom website development using the latest technologies like Next.js, React, and modern backend solutions to create fast, responsive, and secure websites.',
      icon: 'fa-solid fa-code'
    },
    {
      id: 2,
      name: 'Web Design',
      description: 'Creating visually appealing and user-friendly interfaces with a focus on user experience, modern aesthetics, and brand identity to engage visitors effectively.',
      icon: 'fa-solid fa-paintbrush'
    },
    {
      id: 3,
      name: 'SEO (Web Pages)',
      description: 'Optimizing websites to rank higher in search engines, improving visibility, traffic, and conversion rates through technical SEO, content optimization, and analytics.',
      icon: 'fa-solid fa-magnifying-glass-chart'
    }
  ];

  return (
    <SectionLayout id="services" title="SERVICES I OFFER">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-card-bg rounded-3xl p-8 shadow-xl hover:bg-gradient-to-b hover:from-card-bg hover:to-black transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--color-brand-green)] rounded-2xl flex items-center justify-center mb-6">
              <i className={`${service.icon} text-white text-2xl`}></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}