interface HeroSectionProps {
    onRequestDemo: () => void;
}

export function HeroSection({ onRequestDemo }: HeroSectionProps) {
    return (
        <section className="flex flex-col items-center text-center py-20 pb-15 animate-fadeInScale">
            <div className="max-w-[800px] space-y-6">
                <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.08] tracking-[-0.02em] bg-gradient-to-br from-navy to-navy-light bg-clip-text text-transparent mb-7 animate-fadeIn"
                    style={{ animationDelay: "0.1s", animationFillMode: "both" }}
                >
                    Attendance you can verify, from the door to payroll.
                </h1>
                <p
                    className="text-xl text-mut max-w-[640px] mx-auto leading-[1.75] animate-fadeIn"
                    style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                >
                    BioShift connects ZKTeco fingerprint, face and card terminals to a real-time dashboard, so attendance,
                    shifts and leave stay accurate and auditable at every site.
                </p>
                <div
                    className="flex flex-wrap justify-center gap-4 animate-fadeIn"
                    style={{ animationDelay: "0.3s", animationFillMode: "both" }}
                >
                    <button
                        onClick={onRequestDemo}
                        className="inline-block px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-gradient-to-br from-navy to-navy-light text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 relative overflow-hidden group cursor-pointer border-none"
                    >
                        <span className="relative z-10">Request a demo</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:w-[300px] group-hover:h-[300px]" />
                    </button>
                    <a
                        href="#rollout"
                        className="inline-block px-7 py-3.5 rounded-lg font-semibold text-[15px] bg-white border-2 border-line transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate hover:border-navy hover:shadow-sm active:translate-y-0"
                    >
                        See the rollout
                    </a>
                </div>
                <p
                    className="flex items-center justify-center gap-2 mt-8 text-sm text-mut animate-fadeIn"
                    style={{ animationDelay: "0.4s", animationFillMode: "both" }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-soft" />
                    Works with ZKTeco XFace Pro and U270 terminals.
                </p>
            </div>
        </section>
    );
}
