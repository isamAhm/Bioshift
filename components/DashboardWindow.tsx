"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

/* ---------- Sample data ---------- */
const NAV = [
    { label: "Dashboard", icon: "dashboard" },
    { label: "Employees", icon: "users" },
    { label: "Shifts", icon: "clock" },
    { label: "Calendar", icon: "calendar" },
    { label: "Devices", icon: "device" },
    { label: "Settings", icon: "settings" },
    { label: "About", icon: "info" },
];

const WEEK = [
    { day: "Mon", value: 188 },
    { day: "Tue", value: 194 },
    { day: "Wed", value: 190 },
    { day: "Thu", value: 201 },
    { day: "Fri", value: 196 },
    { day: "Sat", value: 142 },
    { day: "Sun", value: 64 },
];

const ABSENT = [
    { name: "Mekdes Alemu", dept: "Assembly", reason: "Sick leave" },
    { name: "Dawit Haile", dept: "Warehouse", reason: "No check-in" },
    { name: "Selam Tesfaye", dept: "Finance", reason: "Annual leave" },
    { name: "Yared Bekele", dept: "Assembly", reason: "No check-in" },
    { name: "Hana Girma", dept: "IT", reason: "Sick leave" },
    { name: "Biruk Tadesse", dept: "Warehouse", reason: "Annual leave" },
];

const RECORDS = [
    {
        id: 1,
        name: "Abel Kebede",
        shift: "Morning",
        in: "07:52",
        out: "—",
        hours: "In progress",
        status: "On time",
        method: "Fingerprint",
        device: "Main entrance",
    },
    {
        id: 2,
        name: "Rahel Mulugeta",
        shift: "Morning",
        in: "07:58",
        out: "—",
        hours: "In progress",
        status: "On time",
        method: "Fingerprint",
        device: "Main entrance",
    },
    // {
    //     id: 3,
    //     name: "Samuel Worku",
    //     shift: "Morning",
    //     in: "08:03",
    //     out: "—",
    //     hours: "In progress",
    //     status: "On time",
    //     method: "Face",
    //     device: "Warehouse gate",
    // },
    // {
    //     id: 4,
    //     name: "Liya Assefa",
    //     shift: "Morning",
    //     in: "08:14",
    //     out: "—",
    //     hours: "In progress",
    //     status: "Late",
    //     method: "RFID card",
    //     device: "Assembly line",
    // },
    // {
    //     id: 5,
    //     name: "Tewodros Negash",
    //     shift: "Morning",
    //     in: "08:21",
    //     out: "—",
    //     hours: "In progress",
    //     status: "On time",
    //     method: "Card and fingerprint",
    //     device: "Server room",
    // },
    // {
    //     id: 6,
    //     name: "Marta Desta",
    //     shift: "Night",
    //     in: "20:01",
    //     out: "06:04",
    //     hours: "10h 03m",
    //     status: "On time",
    //     method: "Face",
    //     device: "Main entrance",
    // },
    // {
    //     id: 7,
    //     name: "Kidus Tilahun",
    //     shift: "Night",
    //     in: "20:19",
    //     out: "06:00",
    //     hours: "9h 41m",
    //     status: "Late",
    //     method: "RFID card",
    //     device: "Warehouse gate",
    // },
];

const STATUS_STYLE = {
    "On time": "bg-emerald-50 text-emerald-700",
    Late: "bg-amber-100 text-amber-800",
};

/* macOS traffic-light button - decorative only */
function Light({
    color,
    label,
    children,
}: {
    color: string;
    label: string;
    children: ReactNode;
}) {
    return (
        <div
            aria-label={label}
            className="w-3 h-3 rounded-full flex items-center justify-center transition-[filter] group/light"
            style={{ background: color }}
        >
            <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                stroke="rgba(0,0,0,.55)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover/light:opacity-100 transition-opacity"
                aria-hidden="true"
            >
                {children}
            </svg>
        </div>
    );
}

export function DashboardWindow() {
    const [grown, setGrown] = useState(false);
    const [showAbsent, setShowAbsent] = useState(true);
    const [query, setQuery] = useState("");
    const [method, setMethod] = useState("All types");
    const [now, setNow] = useState<Date | null>(null);
    const [mounted, setMounted] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const [exporting, setExporting] = useState(false);
    const [hoveredStat, setHoveredStat] = useState<number | null>(null);

    // Bars grow once on load
    useEffect(() => {
        const t = requestAnimationFrame(() => {
            setGrown(true);
            setMounted(true);
        });
        setNow(new Date());
        const id = setInterval(() => setNow(new Date()), 30000);
        return () => {
            cancelAnimationFrame(t);
            clearInterval(id);
        };
    }, []);

    const handleSync = () => {
        setSyncing(true);
        setTimeout(() => setSyncing(false), 2000);
    };

    const handleExport = () => {
        setExporting(true);
        setTimeout(() => setExporting(false), 1500);
    };

    const time = now ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : "08:30 AM";
    const date = now
        ? now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })
        : "Mon, Jan 1, 2026";

    const methods = ["All types", ...Array.from(new Set(RECORDS.map((r) => r.method)))];
    const rows = RECORDS.filter(
        (r) => r.name.toLowerCase().includes(query.toLowerCase()) && (method === "All types" || r.method === method)
    );
    const max = Math.max(...WEEK.map((w) => w.value));

    const stats = [
        { label: "Total employees", value: 202, icon: "users", color: "text-blue-600" },
        { label: "Present today", value: 196, icon: "usercheck", color: "text-emerald-600", note: "12 arrived late" },
        { label: "Absent", value: ABSENT.length, icon: "userx", color: "text-red-500", toggle: true },
    ];

    return (
        <section className="pb-0 md:pb-20">
            {/* Scaling wrapper - scales down on mobile */}
            <div className="dashboard-scale-wrapper">
                <div className="border border-slate-200 bg-white overflow-hidden transition-all duration-300 rounded-2xl md:rounded-2xl rounded-none shadow-lg">
                    {/* Window chrome - decorative only */}
                    <div className="sticky top-0 z-10 flex items-center gap-2 px-5 py-3 bg-slate-50 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                            <Light color="#FF5F57" label="Close">
                                <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" />
                            </Light>
                            <Light color="#FEBC2E" label="Minimize">
                                <path d="M1.2 4h5.6" />
                            </Light>
                            <Light color="#28C840" label="Maximize">
                                <path d="M1.5 6.5V3M1.5 6.5H5M6.5 1.5V5M6.5 1.5H3" />
                            </Light>
                        </div>
                        <span className="flex-1 text-center text-[13px] text-slate-500 font-medium">
                            BioShift dashboard, sample data
                        </span>
                        <b className="relative pl-4 pr-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-semibold">
                            <span className="absolute left-2 top-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full -translate-y-1/2 animate-pulse" />
                            <span className="ml-1.5">Live</span>
                        </b>
                    </div>

                    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[210px_1fr] bg-[#F8FAFC]">
                        {/* Sidebar */}
                        <aside className="flex flex-col bg-white border-r border-slate-200">
                            <div className="flex items-center justify-center md:justify-start gap-3 px-3 md:px-5 py-4 border-b border-slate-200">
                                <Logo size={30} />
                                <span className="hidden md:inline font-serif text-xl font-semibold text-[#0B2239]">BioShift</span>
                            </div>
                            <nav className="flex flex-col gap-1 p-2 md:p-3">
                                {NAV.map((n, i) => (
                                    <button
                                        key={n.label}
                                        type="button"
                                        title={n.label}
                                        className={`flex items-center justify-center md:justify-start gap-3 px-2 md:px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200 group/nav ${i === 0
                                            ? "bg-blue-50 text-blue-600 font-medium border border-blue-100 shadow-sm"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 hover:shadow-sm hover:-translate-y-0.5 border border-transparent"
                                            }`}
                                    >
                                        <span className={`transition-transform duration-200 ${i !== 0 ? "group-hover/nav:scale-110 group-hover/nav:rotate-6" : ""}`}>
                                            <Icon name={n.icon} size={18} />
                                        </span>
                                        <span className="hidden md:inline flex-1">{n.label}</span>
                                        {i === 0 && <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                                    </button>
                                ))}
                            </nav>
                            <div className="mt-auto flex flex-col items-center gap-2 py-6 border-t border-slate-200">
                                <Logo size={48} />
                                <span className="hidden md:inline font-serif text-sm font-semibold text-[#0B2239]">BioShift</span>
                            </div>
                        </aside>

                        {/* Main */}
                        <div className="min-w-0 flex flex-col">
                            {/* Top bar */}
                            <header className="flex items-center gap-3 px-5 md:px-6 py-3 bg-white border-b border-slate-200">
                                <Logo size={28} />
                                <span className="font-semibold text-slate-800 text-[15px] flex-1 truncate">BioShift Dashboard</span>
                                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
                                    <Icon name="clock" size={15} className="text-blue-500" />
                                    <div className="leading-tight">
                                        <div className="text-[13px] font-medium text-slate-800 tabular-nums">{time}</div>
                                        <div className="text-[11px] text-slate-500">{date}</div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleSync}
                                    disabled={syncing}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                >
                                    <Icon name="sync" size={15} className={syncing ? "animate-spin" : ""} />
                                    {syncing ? "Syncing..." : "Sync logs"}
                                </button>
                            </header>

                            <div className="p-5 md:p-6 flex flex-col gap-6">
                                {/* Heading */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="flex items-center gap-2.5 text-2xl font-bold text-slate-800">
                                            <Icon name="chart" size={24} className="text-blue-500" />
                                            Attendance dashboard
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-600">
                                            Monitor employee attendance and manage workforce efficiently
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleExport}
                                        disabled={exporting}
                                        className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                    >
                                        <Icon name="download" size={15} className={exporting ? "animate-bounce" : ""} />
                                        {exporting ? "Exporting..." : "Export to Excel"}
                                    </button>
                                </div>

                                {/* Stat cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {stats.map((s, idx) => {
                                        const Tag = s.toggle ? "button" : "div";
                                        return (
                                            <Tag
                                                key={s.label}
                                                {...(s.toggle
                                                    ? {
                                                        type: "button",
                                                        onClick: () => setShowAbsent((v) => !v),
                                                        "aria-expanded": showAbsent,
                                                    }
                                                    : {})}
                                                onMouseEnter={() => setHoveredStat(idx)}
                                                onMouseLeave={() => setHoveredStat(null)}
                                                className={`relative text-left p-5 rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 ${s.toggle ? "cursor-pointer" : ""
                                                    } ${hoveredStat === idx ? "shadow-lg -translate-y-1 scale-105 border-blue-300" : ""
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`transition-transform duration-300 ${hoveredStat === idx ? "scale-110 rotate-6" : ""}`}>
                                                        <Icon name={s.icon} size={20} className={s.color} />
                                                    </div>
                                                    <span className="font-semibold text-slate-800">{s.label}</span>
                                                    {s.toggle && (
                                                        <Icon
                                                            name="chevron"
                                                            size={15}
                                                            className={`ml-auto text-slate-400 transition-transform duration-300 ${showAbsent ? "" : "rotate-180"
                                                                }`}
                                                        />
                                                    )}
                                                </div>
                                                <div className={`mt-4 text-3xl font-bold text-blue-600 tabular-nums transition-all duration-300 ${hoveredStat === idx ? "scale-110" : ""
                                                    }`}>
                                                    {s.value}
                                                </div>
                                                <div className="mt-1 h-4 text-xs text-slate-500">
                                                    {s.note || (s.toggle ? "Click to toggle absent list" : "")}
                                                </div>
                                                {/* Animated border on hover */}
                                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 transition-opacity duration-300 ${hoveredStat === idx ? "opacity-20" : ""
                                                    }`} style={{ zIndex: -1 }} />
                                            </Tag>
                                        );
                                    })}
                                </div>

                                {/* Absent panel */}
                                {showAbsent && (
                                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-200">
                                            <Icon name="userx" size={16} className="text-red-500" />
                                            <span className="font-semibold text-sm text-slate-800">Absent employees today</span>
                                            <span className="px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[11px] font-semibold">
                                                {ABSENT.length}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setShowAbsent(false)}
                                                className="ml-auto text-slate-400 hover:text-slate-700"
                                                aria-label="Close absent list"
                                            >
                                                <Icon name="close" size={16} />
                                            </button>
                                        </div>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
                                            {ABSENT.map((a) => (
                                                <li key={a.name} className="flex items-center gap-3 px-5 py-3 bg-white transition-all duration-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer group/absent">
                                                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center transition-all duration-300 group-hover/absent:bg-blue-100 group-hover/absent:text-blue-600 group-hover/absent:scale-110">
                                                        {a.name
                                                            .split(" ")
                                                            .map((p) => p[0])
                                                            .join("")}
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="text-sm font-medium text-slate-800 truncate group-hover/absent:text-blue-600 transition-colors duration-200">{a.name}</div>
                                                        <div className="text-xs text-slate-500 group-hover/absent:text-slate-700 transition-colors duration-200">{a.dept}</div>
                                                    </div>
                                                    <span
                                                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap transition-all duration-300 ${a.reason === "No check-in" ? "bg-red-50 text-red-600 group-hover/absent:bg-red-100" : "bg-slate-100 text-slate-600 group-hover/absent:bg-slate-200"
                                                            }`}
                                                    >
                                                        {a.reason}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Weekly bars */}
                                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-baseline justify-between mb-4">
                                        <p className="font-semibold text-sm text-slate-800">Check-ins this week</p>
                                        <p className="text-xs text-slate-500">{WEEK.reduce((a, w) => a + w.value, 0).toLocaleString()} total</p>
                                    </div>
                                    <div className="flex items-end gap-3 h-[150px]">
                                        {WEEK.map((w, i) => (
                                            <div key={w.day} className="flex-1 h-full flex flex-col justify-end items-center gap-1.5 group/bar">
                                                <span className="text-xs font-medium text-slate-600 tabular-nums opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200">
                                                    {w.value}
                                                </span>
                                                <div
                                                    className="w-full rounded-t-md bg-gradient-to-b from-[#4A90E2] to-[#2E5C99] origin-bottom transition-all duration-700 ease-out cursor-pointer hover:from-[#5BA3FF] hover:to-[#3D72C4] hover:scale-y-105 hover:shadow-lg relative overflow-hidden group-hover/bar:shadow-[0_-4px_12px_rgba(74,144,226,0.4)]"
                                                    style={{
                                                        height: grown ? `${(w.value / max) * 100}%` : "0%",
                                                        maxHeight: "calc(100% - 38px)",
                                                        transitionDelay: `${i * 70}ms`,
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <span className="text-xs text-slate-500 group-hover/bar:text-slate-800 group-hover/bar:font-semibold transition-all duration-200">
                                                    {w.day}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Filters */}
                                <div className="flex flex-wrap gap-3">
                                    <label className="relative group/search">
                                        <Icon name="search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within/search:text-blue-500" />
                                        <input
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Search name..."
                                            className="w-56 pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                                        />
                                    </label>
                                    <select
                                        value={method}
                                        onChange={(e) => setMethod(e.target.value)}
                                        className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 hover:border-slate-300 hover:shadow-sm cursor-pointer"
                                    >
                                        {methods.map((m) => (
                                            <option key={m}>{m}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Records table */}
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm min-w-[760px]">
                                            <thead>
                                                <tr className="bg-slate-50 text-left text-slate-700">
                                                    {["#", "Employee", "Shift", "In time", "Out time", "Hours", "Status", "Method", "Device"].map(
                                                        (h) => (
                                                            <th key={h} className="px-3 py-2.5 font-semibold first:rounded-tl-lg last:rounded-tr-lg">
                                                                {h}
                                                            </th>
                                                        )
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rows.length === 0 ? (
                                                    <tr>
                                                        <td colSpan={9} className="px-3 py-10 text-center text-slate-500">
                                                            No records match your filters.
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    rows.map((r) => (
                                                        <tr key={r.id} className="border-t border-slate-100 hover:bg-blue-50/40 transition-all duration-200 hover:shadow-sm cursor-pointer group/row">
                                                            <td className="px-3 py-3 text-slate-500 tabular-nums group-hover/row:text-blue-600 transition-colors">{r.id}</td>
                                                            <td className="px-3 py-3 font-medium text-slate-800 group-hover/row:text-blue-600 transition-colors">{r.name}</td>
                                                            <td className="px-3 py-3 text-slate-600 group-hover/row:text-slate-800 transition-colors">{r.shift}</td>
                                                            <td className="px-3 py-3 font-mono tabular-nums text-slate-800 group-hover/row:font-semibold transition-all">{r.in}</td>
                                                            <td className="px-3 py-3 font-mono tabular-nums text-slate-500 group-hover/row:text-slate-700 transition-colors">{r.out}</td>
                                                            <td className="px-3 py-3 text-slate-600 whitespace-nowrap group-hover/row:text-slate-800 transition-colors">{r.hours}</td>
                                                            <td className="px-3 py-3">
                                                                <span
                                                                    className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 group-hover/row:scale-105 group-hover/row:shadow-sm ${STATUS_STYLE[r.status as keyof typeof STATUS_STYLE]
                                                                        }`}
                                                                >
                                                                    {r.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-3 py-3 text-slate-600 whitespace-nowrap group-hover/row:text-slate-800 group-hover/row:font-medium transition-all">{r.method}</td>
                                                            <td className="px-3 py-3 text-slate-600 whitespace-nowrap group-hover/row:text-slate-800 transition-colors">{r.device}</td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
