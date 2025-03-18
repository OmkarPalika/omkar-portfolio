// app/page.tsx
import { Suspense, lazy } from 'react';
import ProfileCard from "@/components/ProfileCard";
import SkillsCard from "@/components/SkillsCard";
import MainProfile from "@/components/MainProfile";
import InfoCard from "@/components/InfoCard";
import SideNavigation from "@/components/SideNavigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-loaded components for better initial load performance
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Loading fallbacks
const SectionLoading = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full max-w-4xl h-96"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative">
      {/* Home Section - Optimized spacing */}
      <section
        id="home"
        className="pt-5 md:pt-8 lg:pt-10 pb-10 md:pb-16 lg:pb-20 min-h-screen w-full"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* For large screens: 3-column layout */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 h-full">
            <div className="flex flex-col gap-6 justify-between h-full">
              <ProfileCard />
              <SkillsCard />
            </div>
            <div className="h-full">
              <MainProfile />
            </div>
            <div className="h-full">
              <InfoCard />
            </div>
          </div>

          {/* For medium screens: 2-column layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:hidden">
            <div className="col-start-1 row-start-1">
              <MainProfile />
            </div>
            <div className="col-start-2 row-start-1">
              <ProfileCard />
            </div>
            <div className="col-span-1 pt-6">
              <InfoCard />
            </div>
            <div className="col-span-1 pt-6">
              <SkillsCard />
            </div>
          </div>

          {/* For small screens: single column layout */}
          <div className="grid grid-cols-1 gap-6 md:hidden w-full">
            <MainProfile />
            <ProfileCard />
            <InfoCard />
            <SkillsCard />
          </div>
        </div>
      </section>

      {/* Other Sections - Lazy loaded with suspense boundaries */}
      <Suspense fallback={<SectionLoading />}>
        <section id="projects" className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
          <ProjectsSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section id="services" className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <ServicesSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section id="experience" className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
          <ExperienceSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section id="contact" className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
          <ContactSection />
        </section>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Side Navigation - Hidden on mobile and tablet */}
      <div className="hidden lg:block fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <SideNavigation />
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <ScrollToTop />
      </div>
    </main>
  );
}
