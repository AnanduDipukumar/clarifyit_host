"use client";

import { X, Home, BookOpen, Info, Mail, Heart, PenTool } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={clsx(
                    "fixed top-0 bottom-0 left-0 z-50 w-64 bg-white dark:bg-slate-950 border-r dark:border-slate-800 transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:w-64 md:h-[calc(100vh-3.5rem)]",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-14 flex items-center justify-between border-b px-4 md:hidden">
                    <span className="font-bold">Menu</span>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
                        onClick={onClose}
                    >
                        <Home className="h-4 w-4" />
                        Home
                    </Link>
                    <Link
                        href="/favorites"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
                        onClick={onClose}
                    >
                        <Heart className="h-4 w-4" />
                        Favorites
                    </Link>
                    <Link
                        href="/submit"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
                        onClick={onClose}
                    >
                        <PenTool className="h-4 w-4" />
                        Contribute
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
                        onClick={onClose}
                    >
                        <Info className="h-4 w-4" />
                        About ClarifyIt
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
                        onClick={onClose}
                    >
                        <Mail className="h-4 w-4" />
                        Contact Us
                    </Link>
                </nav>
            </aside>
        </>
    );
}
