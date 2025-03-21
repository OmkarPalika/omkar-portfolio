// components/ScrollToTop.tsx
"use client";
import { useEffect, useState } from "react";
import { arrowIcon } from "@/data/iconData";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300 z-50 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <i className={`${arrowIcon} text-2xl text-white"`} />
    </button>
  );
}
