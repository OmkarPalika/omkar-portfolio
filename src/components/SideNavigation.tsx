// components/SideNavigation.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollHandler = useRef<(() => void) | null>(null);

  const navItems: NavItem[] = [
    { name: "Home", href: "#home", icon: "fa-solid fa-house" },
    { name: "Projects", href: "#projects", icon: "fa-regular fa-folder" },
    { name: "Services", href: "#services", icon: "fa-solid fa-share-nodes" },
    { name: "Experience", href: "#experience", icon: "fa-regular fa-comment" },
    { name: "Contact", href: "#contact", icon: "fa-solid fa-location-dot" },
  ];

  const updateActiveSection = () => {
    requestAnimationFrame(() => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    });
  };

  useEffect(() => {
    // Initial check on page load
    updateActiveSection();

    // Attach event listener
    scrollHandler.current = updateActiveSection;
    window.addEventListener("scroll", scrollHandler.current);

    return () => window.removeEventListener("scroll", scrollHandler.current!);
  },);

  return (
    <nav className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-black/50 backdrop-blur-md p-3 rounded-full shadow-lg">
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                aria-label={item.name}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-green-500 hover:bg-green-600 scale-110 shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <i className={`${item.icon} text-white text-lg`}></i>
              </Link>
              <span className="absolute right-full mr-4 bg-black bg-opacity-80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
