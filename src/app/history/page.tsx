"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getHistory, clearHistory, HistoryItem } from "@/lib/history";
import { ArrowLeft, Clock, Trash2 } from "lucide-react";

export default function HistoryPage() {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        setHistory(getHistory());
        // Listen for storage events to update if cleared from another tab
        const handleStorage = () => setHistory(getHistory());
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    const handleClear = () => {
        clearHistory();
        setHistory([]);
    };

    return (
        <main className="container max-w-2xl mx-auto py-8 px-4 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Browsing History</h1>
                {history.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="flex items-center gap-2 text-sm text-destructive hover:bg-destructive/10 px-3 py-1.5 rounded-md transition-colors"
                    >
                        <Trash2 className="h-4 w-4" /> Clear History
                    </button>
                )}
            </div>

            {history.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl">
                    <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No history yet</p>
                    <p className="text-sm mb-4">Read some blogs to see them here.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" /> Browse Blogs
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/blog/${item.slug}`}
                            className="block p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all group"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h2>
                                    <span className="text-xs text-muted-foreground">
                                        Visited: {new Date(item.visitedAt).toLocaleString()}
                                    </span>
                                </div>
                                <ArrowLeft className="h-4 w-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
