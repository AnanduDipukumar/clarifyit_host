"use client";

import { Menu, Bell, Search, Clock, PenTool } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/95 dark:border-slate-800">
            <div className="flex h-14 items-center px-4 w-full md:px-6">
                <button
                    className="mr-4 md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                    onClick={onToggleSidebar}
                    aria-label="Toggle Menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <img src="/logo.png" alt="ClarifyIt Logo" className="h-8 w-8 object-contain" />
                    <span className="hidden font-bold sm:inline-block">ClarifyIt</span>
                </Link>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Placeholder for header search or page title if needed */}
                        <span className="text-sm text-muted-foreground hidden md:inline-block">Explained Simply</span>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Link href="/history" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md" aria-label="History" title="Browsing History">
                            <Clock className="h-5 w-5" />
                        </Link>
                        <Link href="/courses" className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-600 hover:text-primary transition-colors" title="Structured Courses">
                            <span>Courses</span>
                        </Link>
                        <Link href="/submit" className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors" title="Submit Article">
                            <PenTool className="h-4 w-4" />
                            <span>Contribute</span>
                        </Link>
                        <ThemeToggle />
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md" aria-label="Notifications">
                            <Bell className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
