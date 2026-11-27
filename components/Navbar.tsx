"use client";

import { useState } from "react";
import { Brand } from "./Logo";

interface NavbarProps {
    onRequestDemo: () => void;
}

export function Navbar({ onRequestDemo }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
            <div className="max-w-[1200px] mx-auto px-8">
                <header className="flex items-center justify-between gap-5 py-7">
                    <Brand />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium" aria-label="Main">
                        <a
                            href="#features"
                            className="relative transition-colors duration-300 hover:text-navy after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Features
                        </a>
                        <a
                            href="#reliability"
                            className="relative transition-colors duration-300 hover:text-navy after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Reliability
                        </a>
                        <a
                            href="#rollout"
                            className="relative transition-colors duration-300 hover:text-navy after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Rollout
                        </a>
                        <button
                            onClick={onRequestDemo}
                            className="inline-block px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 relative overflow-hidden group cursor-pointer border-none"
                        >
                            <span className="relative z-10">Request a demo</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 w-full bg-navy transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </header>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="flex flex-col gap-1 pb-6" aria-label="Mobile navigation">
                        <a
                            href="#features"
                            onClick={closeMenu}
                            className="px-4 py-3 rounded-lg text-[15px] font-medium hover:bg-slate-50 transition-colors duration-200"
                        >
                            Features
                        </a>
                        <a
                            href="#reliability"
                            onClick={closeMenu}
                            className="px-4 py-3 rounded-lg text-[15px] font-medium hover:bg-slate-50 transition-colors duration-200"
                        >
                            Reliability
                        </a>
                        <a
                            href="#rollout"
                            onClick={closeMenu}
                            className="px-4 py-3 rounded-lg text-[15px] font-medium hover:bg-slate-50 transition-colors duration-200"
                        >
                            Rollout
                        </a>
                        <button
                            onClick={() => {
                                closeMenu();
                                onRequestDemo();
                            }}
                            className="mt-2 px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 relative overflow-hidden group text-center"
                        >
                            <span className="relative z-10">Request a demo</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}
