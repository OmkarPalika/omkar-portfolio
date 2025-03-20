// components/sections/ServicesSection.tsx
import SectionLayout from "../SectionLayout";
import React, { ReactNode } from 'react';
import { SiPython } from "react-icons/si";

interface ServiceCardProps {
  id: number;
  name: ReactNode;
  description: string;
  icon: string | React.ComponentType | React.ReactNode;
}

export default function ServicesSection() {
  
  const services = [
    {
      id: 1,
      name: "Python Project Development",
      description: "Custom Python development for automation, data analysis, machine learning and backend services using modern frameworks and best practices.",
      icon: <SiPython className="text-white text-3xl" />
    },
    {
      id: 2, 
      name: "SEO Web Development",
      description: "Building SEO-optimized websites with technical best practices, content optimization, and analytics integration to improve search rankings and visibility.",
      icon: "ri-seo-line"
    },
    {
      id: 3,
      name: "Application Development", 
      description: "Full-stack application development using modern technologies to create scalable, secure and feature-rich web and mobile applications.",
      icon: "ri-smartphone-line"
    },
    {
      id: 4,
      name: <>Mentorship (@<a href="https://unstop.com/mentor/omkarpalika?ref=AsfSjJT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group-hover:text-[var(--color-brand-green)] transition-all duration-300 group-hover:translate-x-[-2px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-50" aria-label="View Mentorship Profile on Unstop">&nbsp;Unstop<i className="ri-arrow-right-up-line text-white text-sm opacity-60 group-hover:opacity-100 transition-all duration-300 ease-in-out" aria-hidden="true"/></a>)</>,
      description: "Providing guidance and support to aspiring developers through personalized mentoring sessions, helping them navigate their tech career journey and skill development.",
      icon: "ri-shake-hands-line"
    },
    {
      id: 5,
      name: "Research Contributor",
      description: "Contributing to academic and industry research projects in engineering tech departments, with a focus on emerging technologies and innovative solutions.",
      icon: "ri-file-list-3-line"
    },
    {
      id: 6,
      name: "AI/ML Development",
      description: "Developing sophisticated artificial intelligence and machine learning solutions, including model development, training, and deployment for various business applications.",
      icon: "ri-sparkling-2-line"
    }
  ];

  const ServiceCard = ({name, description, icon}: ServiceCardProps) => (
    <div className="group bg-card-bg rounded-3xl p-8 shadow-xl hover:bg-gradient-to-b hover:from-card-bg hover:to-black transition-all duration-300">
      <div className="w-12 h-12 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center ml-4 mb-6 relative">
        {typeof icon === 'string' ? (
          <i className={`${icon} text-white text-4xl absolute mr-8 mt-10`}/>
        ) : (
          <div className="absolute mr-8 mt-10">
            {typeof icon === 'function' ? React.createElement(icon) : icon}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );

  return (
    <SectionLayout id="services" title="SERVICES I OFFER">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => <ServiceCard key={service.id} {...service}/>)}
      </div>
    </SectionLayout>
  );
}
