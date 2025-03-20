// components/Footer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { footerSocialLinks as socialLinks } from "@/data/iconData";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[var(--color-card-bg)] py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Go to homepage">
              <div className="w-5 h-5 bg-[var(--color-brand-green)] rounded-full animate-pulse" />
              <span className="text-xl font-light font-script text-white">Omkar Palika</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Thanks for visiting! I am delighted for your interest in my portfolio&nbsp;
              <i className="ri-heart-fill text-red-500 animate-bounce" />
            </p>
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Profiles</h3>
            <div className="flex gap-4">
                {socialLinks.map(({ href, iconClass, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--color-brand-green)] hover:scale-110 transition-all duration-300"
                >
                  {iconClass ? (
                    <i className={`${iconClass} text-white`} />
                  ) : href.includes('hackerrank') ? (
                    <SiHackerrank className="text-white" />
                  ) : href.includes('leetcode') ? (
                    <SiLeetcode className="text-white" />
                  ) : null}
                </a>
                ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&#169; {year ?? "Loading..."} All Rights Reserved By Omkar Palika</p>
        </div>
      </div>
    </footer>
  );
}
