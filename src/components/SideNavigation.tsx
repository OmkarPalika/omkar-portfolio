// components/SideNavigation.tsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { navIcons as navItems } from "@/data/iconData";

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }
    return true;
  });
  const scrollHandler = useRef<(() => void) | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkTheme) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const updateActiveSection = () => {
      requestAnimationFrame(() => {
        const currentSection = navItems
          .map(item => item.href.slice(1))
          .find(section => {
            const el = document.getElementById(section);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      });
    };

    updateActiveSection();
    scrollHandler.current = updateActiveSection;
    window.addEventListener("scroll", updateActiveSection);
    return () => {
      if (scrollHandler.current) {
        window.removeEventListener("scroll", scrollHandler.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-black/50 backdrop-blur-md p-3 rounded-full shadow-lg">
        <ul className="flex flex-col gap-6">
          {navItems.map(({ name, href, icon }) => (
            <li key={name} className="relative group">
              <Link
                href={href}
                aria-label={name}
                aria-current={activeSection === href.slice(1) ? "page" : undefined}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
                  activeSection === href.slice(1)
                    ? "bg-green-500 hover:bg-green-600 scale-110 shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <i className={`${icon} text-white text-lg`} />
              </Link>
              <span className="absolute right-full bottom-3 mr-4 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {name}
              </span>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            >
              <i
                className={`${
                  isDarkTheme ? "ri-sun-line" : "ri-moon-line"
                } text-lg`}
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
