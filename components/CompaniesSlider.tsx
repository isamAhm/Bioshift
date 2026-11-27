"use client";

import Image from "next/image";

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

// Fades the left/right edges into whatever background is behind the slider
const edgeFade =
  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {companies.map((logo, index) => (
        <div
          key={index}
          className="flex shrink-0 items-center justify-center px-5 md:px-8"
        >
          <div className="relative h-16 w-36 opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100 md:h-32 md:w-64">
            <Image
              src={logo}
              alt={hidden ? "" : `Company logo ${index + 1}`}
              fill
              sizes="(min-width: 768px) 256px, 144px"
              loading="eager"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompaniesSlider() {
  return (
    <section className="overflow-hidden border-t border-navy-light bg-gradient-to-br from-navy-dark to-navy py-20">
      <div className="mx-auto mb-12 max-w-[1200px] px-8">
        <h2 className="mb-3 text-center font-serif text-3xl text-white md:text-4xl">
          Trusted by Leading Organizations
        </h2>
        <p className="text-center text-lg text-[#B4C3D2]">
          Companies across industries rely on BioShift for accurate workforce
          management
        </p>
      </div>

      {/* Mask fades the edges to transparent, so it matches any background */}
      <div
        className="marquee-wrapper overflow-hidden"
        style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
      >
        {/* w-max makes the track exactly as wide as its content,
            so translateX(-50%) lands precisely on the duplicate set */}
        <div className="marquee-track flex w-max">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}