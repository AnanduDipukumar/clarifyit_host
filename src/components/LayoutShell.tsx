"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative flex min-h-screen flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
            <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1">
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <main className="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
