"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DashboardWindow } from "@/components/DashboardWindow";
import { DemoModal } from "@/components/DemoModal";
import { CompaniesSlider } from "@/components/CompaniesSlider";
import { Icon } from "@/components/Icon";
import content from "./content.json";

const CONTACT_EMAIL_1 = "isam.ahmedh8@gmail.com";
const CONTACT_EMAIL_2 = "henok3095@gmail.com"; // Replace with actual second email

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onRequestDemo={openModal} />
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Main Content with top padding for fixed navbar */}
      <div className="pt-28" id="top">
        <div className="max-w-[1200px] mx-auto px-8">
          <HeroSection onRequestDemo={openModal} />
        </div>
        {/* Dashboard - hidden on mobile, visible on tablet and above */}
        <div className="hidden md:block max-w-[1200px] mx-auto px-0 md:px-8">
          <DashboardWindow />
        </div>
      </div>
      {/* Companies Slider Section */}
      <CompaniesSlider />

      {/* Comparison Section */}
      <section className="py-30 border-t border-line relative animate-fadeIn">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-30 h-1 bg-gradient-to-r from-amber to-amber-light rounded opacity-30" />
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-[800px] mb-5 text-navy">
            Manual attendance costs more than it looks
          </h2>
          <p className="text-mut text-lg max-w-[640px] mb-16 leading-relaxed">
            Paper and spreadsheets leave gaps in accuracy, visibility and compliance. BioShift closes them.
          </p>
          <div className="grid grid-cols-2 gap-4 gap-x-14 pb-5 text-sm text-mut font-bold uppercase tracking-wide">
            <span>Manual and paper-based</span>
            <span>With BioShift</span>
          </div>
          {content.compare.map((c) => (
            <div
              key={c.before}
              className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-x-14 py-8 border-t border-line items-start transition-all duration-300 hover:pl-5 hover:border-l-[3px] hover:border-amber hover:border-t-transparent"
            >
              <p className="m-0 leading-relaxed">{c.before}</p>
              <p className="m-0 font-semibold text-navy leading-relaxed">{c.after}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-30 border-t border-line relative animate-fadeIn" id="features">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-30 h-1 bg-gradient-to-r from-amber to-amber-light rounded opacity-30" />
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-[800px] mb-5 text-navy">
            Everything attendance needs, in one place
          </h2>
          <p className="text-mut text-lg max-w-[640px] mb-16 leading-relaxed">
            From the terminal at the door to the report on payroll's desk.
          </p>
          {content.features.map((f) => (
            <div
              key={f.title}
              className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-x-14 py-8 border-t border-line items-start transition-all duration-300 hover:pl-5 hover:border-l-[3px] hover:border-amber hover:border-t-transparent"
            >
              <h3 className="flex items-center gap-4 text-2xl font-serif mb-3 text-navy">
                <span className="p-2 bg-navy/6 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-amber group-hover:to-amber-light group-hover:text-white group-hover:scale-110">
                  <Icon name={f.icon} />
                </span>
                {f.title}
              </h3>
              <p className="m-0 text-mut leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reliability Section */}
      <section
        className="py-30 bg-gradient-to-br from-navy-dark to-navy text-[#E8EEF4] relative overflow-hidden animate-fadeIn"
        id="reliability"
      >
        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(245,179,1,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-5 text-white">Built to keep working</h2>
              <p className="text-[#B4C3D2] text-lg mb-0 leading-relaxed">
                Attendance events are not lost to a network drop, and every action leaves a record.
              </p>
              <p className="text-[#B4C3D2] mt-4">
                Supported terminals: ZKTeco XFace Pro for facial recognition, and ZKTeco U270 for fingerprint and card.
              </p>
            </div>
            <div>
              {content.reliability.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 py-6 border-t border-white/12 transition-all duration-300 hover:pl-4 hover:border-l-[3px] hover:border-amber hover:border-t-transparent"
                >
                  <span className="p-2.5 bg-amber/15 text-amber rounded-xl mt-1">
                    <Icon name="check" />
                  </span>
                  <div>
                    <h3 className="text-xl font-serif mb-1.5 text-white">{r.title}</h3>
                    <p className="m-0 text-[#B4C3D2]">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rollout Section */}
      <section className="py-30 border-t border-line relative animate-fadeIn" id="rollout">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-30 h-1 bg-gradient-to-r from-amber to-amber-light rounded opacity-30" />
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-[800px] mb-5 text-navy">
            A rollout in three phases
          </h2>
          <p className="text-mut text-lg max-w-[640px] mb-16 leading-relaxed">
            Run alongside your current process first, then switch over once the numbers match.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
            {content.phases.map((p) => (
              <div
                key={p.title}
                className="border-t-4 border-navy p-7 px-6 rounded-xl bg-gradient-to-br from-[#FAFBFC] to-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-amber"
              >
                <small className="block font-bold text-amber mb-3 text-[13px] uppercase tracking-widest">
                  {p.weeks}
                </small>
                <h3 className="text-3xl font-serif mb-3 text-navy">{p.title}</h3>
                <p className="m-0 text-mut leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-30 bg-gradient-to-br from-slate to-[#E8EEF4] animate-fadeIn" id="contact">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-wrap items-center justify-between gap-10 py-14 px-12 bg-white rounded-2xl shadow-lg">
            <div>
              <h2 className="text-4xl font-serif mb-4 text-navy">See BioShift on your site</h2>
              <p className="m-0 text-mut text-lg max-w-[580px] leading-relaxed">
                Tell us about your workforce and locations, and we will walk you through a live demo.
              </p>
            </div>
            <button
              onClick={openModal}
              className="inline-block px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 relative overflow-hidden group cursor-pointer border-none"
            >
              <span className="relative z-10">Request a demo</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="max-w-[1200px] mx-auto px-8 flex flex-wrap justify-between gap-4 py-12 text-sm text-mut border-t border-line">
        <span>© 2026 BioShift. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL_1}`}
            className="hover:text-amber transition-colors duration-200"
          >
            {CONTACT_EMAIL_1}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL_2}`}
            className="hover:text-amber transition-colors duration-200"
          >
            {CONTACT_EMAIL_2}
          </a>
        </div>
      </footer>
    </>
  );
}
