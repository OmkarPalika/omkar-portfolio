// components/ProfileCard.tsx
"use client";
import Image from "next/image";
import { memo, useState } from "react";
import { TbFileSymlink } from "react-icons/tb"

const ProfileCard = memo(() => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    window.open('/PDF/Omkar Palika_Resume.pdf', '_blank');
    setIsLoading(false);
  };
  
  return (
    <div className="bg-[var(--color-card-bg)] rounded-3xl p-6 shadow-xl md:h-full lg:h-fit transition-all duration-300 hover:shadow-2xl group">
      {/* Profile Header */}
      <div className="flex items-center gap-4 justify-center">
        <div className="w-8 h-8 bg-[var(--color-brand-green)] rounded-full animate-pulse" />
        <span className="text-xl font-light font-script tracking-wide">
          Omkar Palika
        </span>
      </div>
      {/* Profile Image */}
      <div className="mt-4 bg-gradient-to-br from-[var(--color-brand-green)] to-green-950 rounded-2xl overflow-hidden mb-6 shadow-lg">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/profile.webp"
            alt="Omkar Palika profile photo"
            fill
            className="rounded-xl object-contain transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBo..."
          />
        </div>
      </div>
      {/* Description */}
      <p className="mt-4 text-sm text-gray-300 leading-relaxed font-light">
        Passionate about crafting memorable digital experiences with elegant
        design and powerful functionality.
      </p>
      {/* View Resume Button */}
      <button
        className="mt-4 group bg-black border border-gray-700 text-white py-3 px-6 rounded-full w-full transition-all duration-300 hover:bg-[var(--color-brand-green)] hover:border-transparent flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-50"
        aria-label="View Resume"
        onClick={handleClick}
        disabled={isLoading}
      >
        <span>{isLoading ? 'Loading...' : 'View Resume'}</span>
        <TbFileSymlink className="w-5 h-5 transition-transform duration-700 group-hover:translate-x-1" />
      </button>
    </div>
  );
});

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;
