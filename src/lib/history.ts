import { BlogPost } from "./blogs";

const HISTORY_KEY = "clarifyit_history";

export interface HistoryItem {
    slug: string;
    title: string;
    visitedAt: string;
}

export function addToHistory(blog: BlogPost) {
    if (typeof window === "undefined") return;

    const newItem: HistoryItem = {
        slug: blog.slug,
        title: blog.title,
        visitedAt: new Date().toISOString(),
    };

    try {
        const existing = localStorage.getItem(HISTORY_KEY);
        let history: HistoryItem[] = existing ? JSON.parse(existing) : [];

        // Remove duplicates (keep latest)
        history = history.filter((item) => item.slug !== blog.slug);

        // Add new item to start
        history.unshift(newItem);

        // Limit to last 50 items
        if (history.length > 50) {
            history = history.slice(0, 50);
        }

        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (error) {
        console.error("Failed to save history", error);
    }
}

export function getHistory(): HistoryItem[] {
    if (typeof window === "undefined") return [];
    try {
        const existing = localStorage.getItem(HISTORY_KEY);
        return existing ? JSON.parse(existing) : [];
    } catch (error) {
        console.error("Failed to read history", error);
        return [];
    }
}

export function clearHistory() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(HISTORY_KEY);
}
