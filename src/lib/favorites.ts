import { BlogPost } from "./blogs";

const FAVORITES_KEY = "clarifyit_favorites";

export interface FavoritesItem {
    slug: string;
    title: string;
    category: string;
    publishedAt: string;
}

export function addToFavorites(blog: BlogPost) {
    if (typeof window === "undefined") return;

    const newItem: FavoritesItem = {
        slug: blog.slug,
        title: blog.title,
        category: blog.category,
        publishedAt: blog.publishedAt,
    };

    try {
        const existing = localStorage.getItem(FAVORITES_KEY);
        let favorites: FavoritesItem[] = existing ? JSON.parse(existing) : [];

        // Avoid duplicates
        if (!favorites.some((item) => item.slug === blog.slug)) {
            favorites.unshift(newItem);
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
            // Dispatch event for UI updates
            window.dispatchEvent(new Event("favorites-updated"));
        }
    } catch (error) {
        console.error("Failed to save favorite", error);
    }
}

export function removeFromFavorites(slug: string) {
    if (typeof window === "undefined") return;

    try {
        const existing = localStorage.getItem(FAVORITES_KEY);
        let favorites: FavoritesItem[] = existing ? JSON.parse(existing) : [];

        const newFavorites = favorites.filter((item) => item.slug !== slug);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        // Dispatch event for UI updates
        window.dispatchEvent(new Event("favorites-updated"));
    } catch (error) {
        console.error("Failed to remove favorite", error);
    }
}

export function getFavorites(): FavoritesItem[] {
    if (typeof window === "undefined") return [];
    try {
        const existing = localStorage.getItem(FAVORITES_KEY);
        return existing ? JSON.parse(existing) : [];
    } catch (error) {
        console.error("Failed to read favorites", error);
        return [];
    }
}

export function isFavorite(slug: string): boolean {
    if (typeof window === "undefined") return false;
    try {
        const existing = localStorage.getItem(FAVORITES_KEY);
        if (!existing) return false;
        const favorites: FavoritesItem[] = JSON.parse(existing);
        return favorites.some((item) => item.slug === slug);
    } catch (error) {
        return false;
    }
}
