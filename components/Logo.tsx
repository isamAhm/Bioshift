export function Logo({ size = 30 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            aria-hidden="true"
            className="shrink-0 drop-shadow-sm"
        >
            <rect width="30" height="30" rx="7" fill="#0B2239" />
            <path d="M8 17a7 7 0 0 1 14 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="15" cy="19" r="2.2" fill="#F5B301" />
        </svg>
    );
}

export function Brand() {
    return (
        <a
            href="#top"
            className="flex items-center gap-3 font-serif text-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 group"
        >
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                aria-hidden="true"
                className="drop-shadow-sm transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105"
            >
                <rect width="30" height="30" rx="7" fill="#0B2239" />
                <path
                    d="M8 17a7 7 0 0 1 14 0"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                />
                <circle cx="15" cy="19" r="2.2" fill="#F5B301" />
            </svg>
            BioShift
        </a>
    );
}
