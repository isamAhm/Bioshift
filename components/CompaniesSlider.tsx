"use client";

import Image from "next/image";

export function CompaniesSlider() {
  // Multiple company logos for the slider
  const companies = [
    "/image.png",
    "/garad-logo.png",
    "/image.png",
    "/garad-logo.png",
    "/image.png",
    "/garad-logo.png",
    "/image.png",
    "/garad-logo.png",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-dark to-navy border-t border-navy-light overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-3">
          Trusted by Leading Organizations
        </h2>
        <p className="text-center text-[#B4C3D2] text-lg">
          Companies across industries rely on BioShift for accurate workforce management
        </p>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Gradient overlays for smooth edge effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - duplicated for seamless loop */}
        <div className="flex animate-scroll">
          {/* First set */}
          {companies.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="relative w-64 h-32 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="relative w-64 h-32 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105">
                <Image
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
