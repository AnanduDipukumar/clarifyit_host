"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { parseShareData, createNewPlaylist, Playlist } from "@/lib/playlists";
import { INITIAL_BLOGS } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import { Copy, ArrowLeft, DownloadCloud } from "lucide-react";

function SharedPlaylistContent() {
    const searchParams = useSearchParams();
    const data = searchParams.get("data");
    const router = useRouter();

    const [playlist, setPlaylist] = useState<Partial<Playlist> | null>(null);

    useEffect(() => {
        if (data) {
            const parsed = parseShareData(data);
            if (parsed) {
                setPlaylist(parsed);
            }
        }
    }, [data]);

    if (!data || !playlist) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Invalid Link</h1>
                <p className="text-neutral-500">This shared link appears to be broken or invalid.</p>
            </div>
        );
    }

    const blogs = (playlist.blogSlugs || [])
        .map(slug => INITIAL_BLOGS.find(b => b.slug === slug))
        .filter(b => b !== undefined);

    const handleSaveCopy = () => {
        const newPlaylist = createNewPlaylist(`Copy of ${playlist.title}`, playlist.description);
        // Add all slugs
        newPlaylist.blogSlugs = playlist.blogSlugs || [];
        // We need to save manually because createNewPlaylist only inits
        // Importing savePlaylist directly creates a circular dep in my mind but its fine here
        // Logic: createNewPlaylist saves it to localStorage. We just need to update it.

        // Let's actually use a cleaner way.
        // We need to update the newly created playlist with the slugs.
        const storageKey = "clarifyit_playlists";
        const savedPlaylists = JSON.parse(localStorage.getItem(storageKey) || "[]");
        const index = savedPlaylists.findIndex((p: any) => p.id === newPlaylist.id);
        if (index >= 0) {
            savedPlaylists[index].blogSlugs = playlist.blogSlugs || [];
            localStorage.setItem(storageKey, JSON.stringify(savedPlaylists));
            window.dispatchEvent(new Event("playlists-updated"));
        }

        router.push(`/playlists/${newPlaylist.id}`);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="bg-gradient-to-br from-indigo-50 to-primary-50 dark:from-indigo-950/30 dark:to-primary-950/30 border border-primary-100 dark:border-primary-900/50 rounded-3xl p-8 mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                            Shared Course
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-heading">
                            {playlist.title}
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                            {playlist.description}
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={handleSaveCopy}
                            className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-transform active:scale-95 shadow-lg shadow-primary-500/20"
                        >
                            <DownloadCloud className="w-5 h-5 mr-2" />
                            Save This Course
                        </button>
                        <p className="text-xs text-center mt-2 text-neutral-500 dark:text-neutral-400">
                            Save to your library to edit
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog!.slug} className="h-full">
                        <BlogCard blog={blog!} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function SharedPlaylistPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading shared course...</div>}>
            <SharedPlaylistContent />
        </Suspense>
    );
}
