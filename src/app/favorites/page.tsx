"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFavorites, removeFromFavorites, FavoritesItem } from "@/lib/favorites";
import { ArrowLeft, Heart, Trash2, Calendar, Tag } from "lucide-react";

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState<FavoritesItem[]>([]);

    const loadFavorites = () => {
        setFavorites(getFavorites());
    };

    useEffect(() => {
        loadFavorites();
        // Listen for custom event
        const handleUpdate = () => loadFavorites();
        window.addEventListener("favorites-updated", handleUpdate);
        window.addEventListener("storage", handleUpdate);

        return () => {
            window.removeEventListener("favorites-updated", handleUpdate);
            window.removeEventListener("storage", handleUpdate);
        };
    }, []);

    const handleRemove = (e: React.MouseEvent, slug: string) => {
        e.preventDefault(); // Prevent link navigation
        removeFromFavorites(slug);
    };

    return (
        <main className="container max-w-4xl mx-auto py-8 px-4 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Your Favorites</h1>
            </div>

            {favorites.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl">
                    <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No favorites yet</p>
                    <p className="text-sm mb-4">Save blogs you love to read them later.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" /> Browse Blogs
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favorites.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/blog/${item.slug}`}
                            className="block p-4 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all group relative"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                    {item.category}
                                </span>
                                <button
                                    onClick={(e) => handleRemove(e, item.slug)}
                                    className="text-muted-foreground hover:text-destructive transition-colors p-1"
                                    title="Remove from favorites"
                                >
                                    <Heart className="h-4 w-4 fill-current text-primary" />
                                </button>
                            </div>

                            <h2 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                {item.title}
                            </h2>

                            <div className="flex items-center text-xs text-muted-foreground gap-2">
                                <Calendar className="h-3 w-3" />
                                {new Date(item.publishedAt).toLocaleDateString()}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
