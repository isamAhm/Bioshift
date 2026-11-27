import { Brand } from "./Logo";

interface NavbarProps {
    onRequestDemo: () => void;
}

export function Navbar({ onRequestDemo }: NavbarProps) {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
            <div className="max-w-[1200px] mx-auto px-8">
                <header className="flex flex-wrap items-center justify-between gap-5 py-7">
                    <Brand />
                    <nav className="flex flex-wrap items-center gap-8 text-[15px] font-medium" aria-label="Main">
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
                </header>
            </div>
        </div>
    );
}
