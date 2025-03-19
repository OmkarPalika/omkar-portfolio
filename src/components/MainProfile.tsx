// components/MainProfile.tsx
import Image from "next/image";
import { memo } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

function MainProfile() {
  return (
    <div className="bg-gradient-to-br from-[var(--color-brand-green)] via-green-800 to-green-950 rounded-3xl overflow-hidden shadow-2xl h-full relative group">
      <div className="h-full relative">
        <Image
          src="/images/profile.png"
          alt="Omkar Palika full profile"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 40vw, 33vw"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzBmNzYyYiIvPjwvc3ZnPg=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-10 md:pb-14 lg:pb-20 transform transition-transform duration-500 group-hover:translate-y-6 md:translate-y-8 lg:translate-y-12 lg:translate-x-[-60px] xl:translate-x-[-80px]">
          <div className="w-11/12 md:w-4/5 lg:w-4/6 lg:mb-2 px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg px-5 py-4 md:px-6 md:py-5 text-center transition-all duration-300 group-hover:bg-white/15">
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-script text-white my-3 md:my-4 lg:my-5 transition-all duration-300 group-hover:tracking-wider">
                Omkar Palika
              </h1>
              <div className="flex flex-col md:flex-row gap-3 lg:gap-5 w-full justify-center items-center">
                {[
                  { href: "#projects", label: "Projects", bg: "bg-[var(--color-brand-green)]", hoverBg: "hover:bg-green-700" },
                  { href: "#services", label: "Services", bg: "bg-black", hoverBg: "hover:bg-[var(--color-brand-green)]" },
                ].map(({ href, label, bg, hoverBg }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`w-fit md:w-1/2 ${bg} text-white px-5 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-full text-sm md:text-base ${hoverBg} transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-white/50`}
                    scroll={true}
                  >
                    <span>{label}</span>
                    <ChevronRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainProfile);
