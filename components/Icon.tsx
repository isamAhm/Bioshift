import type { ReactNode } from "react";

export const ICON_PATHS = {
    dashboard: (
        <>
            <rect x="3" y="3" width="7" height="9" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="16" width="7" height="5" rx="1" />
        </>
    ),
    users: (
        <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </>
    ),
    calendar: (
        <>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </>
    ),
    device: (
        <>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </>
    ),
    settings: (
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </>
    ),
    info: (
        <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
        </>
    ),
    chart: (
        <>
            <path d="M3 3v18h18" />
            <path d="M8 17v-5M13 17V7M18 17v-8" />
        </>
    ),
    download: (
        <>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <path d="M7 10l5 5 5-5M12 15V3" />
        </>
    ),
    sync: (
        <>
            <path d="M21 12a9 9 0 0 0-15-6.7L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 15 6.7L21 16" />
            <path d="M16 16h5v5" />
        </>
    ),
    userx: (
        <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M17 8l5 5M22 8l-5 5" />
        </>
    ),
    usercheck: (
        <>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M16 11l2 2 4-4" />
        </>
    ),
    chevron: <path d="M6 15l6-6 6 6" />,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    search: (
        <>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
        </>
    ),
    fingerprint: (
        <>
            <path d="M5 11a7 7 0 0 1 14 0" />
            <path d="M8.5 13.5a3.5 3.5 0 0 1 7 0V17" />
            <path d="M12 11v8" />
        </>
    ),
    monitor: (
        <>
            <rect x="3" y="4" width="18" height="13" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </>
    ),
    bars: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    lock: (
        <>
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </>
    ),
    check: <path d="M5 12l5 5 9-10" />,
};

export function Icon({ name, size = 18, className = "" }: { name: string; size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {ICON_PATHS[name as keyof typeof ICON_PATHS]}
        </svg>
    );
}
