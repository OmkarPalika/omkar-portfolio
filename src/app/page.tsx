// app/page.tsx
"use client"; // Ensure this file runs only on the client

import dynamic from "next/dynamic";
import { useEffect, useState, Suspense } from "react";
import ProfileCard from "@/components/ProfileCard";
import SkillsCard from "@/components/SkillsCard";
import MainProfile from "@/components/MainProfile";
import InfoCard from "@/components/InfoCard";
import SideNavigation from "@/components/SideNavigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Dynamically imported sections (avoids SSR hydration issues)
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

// Loading fallback component
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
  // Fix for hydration mismatches
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <SectionLoading />; // Prevents server-client mismatch

  return (
    <main className="relative">
      {/* Home Section */}
      <section
        id="home"
        className="pt-5 md:pt-8 lg:pt-10 pb-10 md:pb-16 lg:pb-20 min-h-screen w-full"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large screens: 3-column layout */}
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

          {/* Medium screens: 2-column layout */}
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

          {/* Small screens: single column layout */}
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
        <section
          id="projects"
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8"
        >
          <ProjectsSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section
          id="services"
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        >
          <ServicesSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section
          id="experience"
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8"
        >
          <ExperienceSection />
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <section
          id="contact"
          className="min-h-screen w-full px-4 sm:px-6 lg:px-8"
        >
          <ContactSection />
        </section>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Side Navigation (Hidden on mobile & tablet) */}
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
