import Image from "next/image";
import { memo } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function ProfileCard() {
  return (
    <div className="bg-[var(--color-card-bg)] rounded-3xl p-6 shadow-xl md:h-full lg:h-fit transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center gap-4 justify-center">
        <div className="w-8 h-8 bg-[var(--color-brand-green)] rounded-full animate-pulse"></div>
        <span className="text-xl font-light font-script tracking-wide">
          Omkar Palika
        </span>
      </div>

      {/* Profile Image with optimized loading */}
      <div className="mt-4 bg-gradient-to-br from-[var(--color-brand-green)] to-green-950 rounded-2xl overflow-hidden mb-6 shadow-lg">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/profile.png"
            alt="Omkar Palika profile photo"
            fill
            className="rounded-xl object-contain object-center transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBmNzYyYiIvPjwvc3ZnPg=="
          />
        </div>
      </div>

      {/* Tagline with improved typography */}
      <div className="mt-4">
        <p className="text-sm text-gray-300 leading-relaxed font-light">
          Passionate about crafting memorable digital experiences with elegant
          design and powerful functionality.
        </p>
      </div>

      {/* Download Button with improved interaction */}
      <div className="mt-4">
        <button
          className="group bg-black border border-gray-700 text-white py-3 px-6 rounded-full w-full transition-all duration-300 hover:bg-[var(--color-brand-green)] hover:border-transparent flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:ring-opacity-50"
          aria-label="Download CV"
        >
          <span>Download CV</span>
          <ArrowDownTrayIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

export default memo(ProfileCard);
