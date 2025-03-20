// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, Suspense } from "react";

// Dynamic imports
const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
});
const SkillsCard = dynamic(() => import("@/components/SkillsCard"), {
  ssr: false,
});
const MainProfile = dynamic(() => import("@/components/MainProfile"), {
  ssr: false,
});
const InfoCard = dynamic(() => import("@/components/InfoCard"), { ssr: false });
const SideNavigation = dynamic(() => import("@/components/SideNavigation"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  { ssr: false }
);
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  { ssr: false }
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/Ed-ExSection"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: false }
);

const SectionLoading = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
    <i className="ri-loader-2-line animate-spin text-3xl text-primary mb-4"></i>
    <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
      Loading content...
    </p>
    <div className="mt-2 w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className="w-full h-full bg-primary animate-loading-bar"></div>
    </div>
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <SectionLoading />;

  const renderHomeSection = () => (
    <section
      id="home"
      className="pt-5 md:pt-8 lg:pt-10 pb-10 md:pb-16 lg:pb-20 min-h-screen w-full"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large screens */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 h-full">
          <div className="flex flex-col gap-6 justify-between h-full">
            <ProfileCard />
            <SkillsCard />
          </div>
          <MainProfile />
          <InfoCard />
        </div>

        {/* Medium screens */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
          <MainProfile />
          <ProfileCard />
          <InfoCard />
          <SkillsCard />
        </div>

        {/* Small screens */}
        <div className="grid grid-cols-1 gap-6 md:hidden w-full">
          <MainProfile />
          <ProfileCard />
          <InfoCard />
          <SkillsCard />
        </div>
      </div>
    </section>
  );

  const renderSection = (
    id: string,
    Component: React.ComponentType,
    className?: string
  ) => (
    <section
      id={id}
      className={`container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        className || ""
      }`}
    >
      <Suspense fallback={<SectionLoading />}>
        <Component />
      </Suspense>
    </section>
  );

  return (
    <main className="relative">
      {renderHomeSection()}
      {renderSection("projects", ProjectsSection)}
      {renderSection(
        "services",
        ServicesSection,
        "mt-8 sm:mt-12 md:mt-16 lg:mt-20"
      )}
      {renderSection("experience", ExperienceSection)}
      {renderSection("contact", ContactSection)}

      <Footer />

      <div className="hidden lg:block fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <SideNavigation />
      </div>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <ScrollToTop />
      </div>
    </main>
  );
}
