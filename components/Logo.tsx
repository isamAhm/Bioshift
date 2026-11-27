import Image from "next/image";

export function Logo({ size = 30 }: { size?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="BioShift Logo"
            width={size}
            height={size}
            className="shrink-0 drop-shadow-sm"
            priority
        />
    );
}

export function Brand() {
    return (
        <a
            href="#top"
            className="flex items-center gap-3 font-serif text-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 group"
        >
            <Image
                src="/logo.png"
                alt="BioShift Logo"
                width={30}
                height={30}
                className="drop-shadow-sm transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105"
                priority
            />
            BioShift
        </a>
    );
}
