"use client";
import Image from "next/image";
import { memo } from "react";
import { socialLinks } from "@/data/iconData";

interface SocialLink {
  icon: string;
  href: string;
  label?: string;
}

const SocialIcon = memo(({ link }: { link: SocialLink }) => (
  <a
    href={link.href}
    aria-label={link.label}
    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {link.icon.includes("ri") ? (
      <i className={`${link.icon} text-lg text-black`}></i>
    ) : (
      <span className="text-black font-bold text-2xl mb-1.5 lg:mb-1">{link.icon}</span>
    )}
  </a>
));
SocialIcon.displayName = "SocialIcon";

export default function InfoCard() {
  return (
    <div className="group flex flex-col bg-[var(--color-card-bg)] rounded-3xl p-4 md:p-6 shadow-xl transition-all duration-300 hover:shadow-2xl w-full mx-auto h-full">
      <section className="flex flex-col space-y-4 h-full">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold hover:text-[var(--color-brand-green)] transition-colors duration-300">
              Omkar Palika
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Web Designer & Developer
            </p>
          </div>
          {/* Social Icons (Hidden on larger screens) */}
          <div className="flex gap-3 lg:hidden ">
            {socialLinks.map((link, i) => (
              <SocialIcon key={i} link={link} />
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-300 leading-relaxed">
          Based in Visakhapatnam, India, I bring over 2 years of experience in
          web development and design. My passion is creating intuitive,
          user-friendly websites that drive engagement and deliver results.
        </p>

        {/* Social Icons (Visible only on large screens) */}
        <div className="hidden lg:flex gap-4 justify-center">
          {socialLinks.map((link, i) => (
            <SocialIcon key={i} link={link} />
          ))}
        </div>

        {/* Profile Image & Contact Section */}
        <div className="bg-[var(--color-card-bg)] rounded-3xl shadow-lg flex-grow flex flex-col">
          <div className="bg-gradient-to-br from-[var(--color-brand-green)] to-green-950 rounded-2xl overflow-hidden lg:mb-4 md:mb-0 relative w-full">
            <div className="relative w-full aspect-square sm:hidden lg:block">
              <Image
                src="/images/profile.webp"
                alt="Omkar Palika"
                fill
                className="rounded-xl object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 350px"
                priority
              />
            </div>
          </div>

          {/* Contact Info */}
          <p className="text-sm text-gray-300 leading-relaxed mb-4 md:hidden lg:block text-center">
            I prefer direct communication. Send me an email for collaborations,
            questions, or project inquiries.
          </p>
          <button
            className="bg-[var(--color-brand-green)] text-white py-2 mt-3 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-full w-full min-h-[40px] md:min-h-[48px] hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            onClick={() =>
              (window.location.href = "mailto:palikaomkar@gmail.com")
            }
            aria-label="Send email to Omkar Palika"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
