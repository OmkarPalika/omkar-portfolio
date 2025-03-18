// components/Footer.tsx
"use client"; // Ensure it runs only on the client side

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear()); // Ensures it only runs on the client
  }, []);

  const socialLinks = [
    {
      href: "https://www.instagram.com/omkarpalika",
      iconClass: "fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/omkar-palika/",
      iconClass: "fa-linkedin",
      label: "Linkedin",
    },
    {
      href: "https://github.com/OmkarPalika",
      iconClass: "fa-github",
      label: "Github",
    },
    {
      href: "https://leetcode.com/palikaomkar/",
      icon: <SiLeetcode className="text-white" />,
      label: "Leetcode",
    },
    {
      href: "https://www.hackerrank.com/palikaomkar_22_1",
      iconClass: "fa-hackerrank",
      label: "HackerRank",
    },
    {
      href: "https://g.dev/omkar-palika",
      iconClass: "fa-google",
      label: "Google Dev",
    },
    {
      href: "https://learn.microsoft.com/en-us/users/omkarpalika-4758/",
      iconClass: "fa-microsoft",
      label: "Microsoft Learn",
    },
  ];

  return (
    <footer className="bg-[var(--color-card-bg)] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Logo */}
          <div className="md:col-span-1">
            <Link 
              href="#home"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <div className="w-5 h-5 bg-[var(--color-brand-green)] rounded-full animate-pulse"></div>
              <span className="text-xl font-light font-script text-white">
                Omkar Palika
              </span>
            </Link>
            <p className="text-gray-400 mt-4">
              Thanks for visiting! I am delighted for your interest in my portfolio&nbsp;
              <i className="ri-heart-fill text-red-500 animate-bounce"></i>
            </p>
          </div>

          <div className="md:col-span-1"></div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Profiles</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--color-brand-green)] hover:scale-110 transition-all duration-300"
                >
                  {link.iconClass ? (
                    <i className={`fa-brands ${link.iconClass} text-white`}></i>
                  ) : (
                    link.icon
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          {/* Prevent hydration error by rendering year only on client */}
          <p>&#169; {year ?? "Loading..."} All Rights Reserved By Omkar Palika</p>
        </div>
      </div>
    </footer>
  );
}
