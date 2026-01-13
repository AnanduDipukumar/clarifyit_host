"use client";

import React, { useEffect, useState } from "react";
import { getPlaylists, createNewPlaylist, toggleBlogInPlaylist, Playlist } from "@/lib/playlists";
import { Plus, X, ListMusic, CheckCircle } from "lucide-react";

interface PlaylistSelectorProps {
    blogSlug: string;
    onClose: () => void;
}

export default function PlaylistSelector({ blogSlug, onClose }: PlaylistSelectorProps) {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        setPlaylists(getPlaylists());
    }, []);

    const handleCreate = () => {
        const title = prompt("New Course Name:");
        if (title) {
            const newP = createNewPlaylist(title);
            toggleBlogInPlaylist(newP.id, blogSlug);
            onClose();
            alert(`Added to ${title}!`);
        }
    };

    const handleToggle = (playlist: Playlist) => {
        toggleBlogInPlaylist(playlist.id, blogSlug);
        onClose();
        alert(`Updated ${playlist.title}!`);
    };

    return (
        <div className="absolute inset-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm p-6 flex flex-col rounded-2xl animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-neutral-900 dark:text-white">Add to Course</h3>
                <button onClick={onClose} className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {playlists.map(p => {
                    const isAdded = p.blogSlugs.includes(blogSlug);
                    return (
                        <button
                            key={p.id}
                            onClick={() => handleToggle(p)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${isAdded
                                    ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                                    : "hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                                }`}
                        >
                            <span className="truncate">{p.title}</span>
                            {isAdded && <CheckCircle className="w-4 h-4 ml-2" />}
                        </button>
                    )
                })}
            </div>

            <button
                onClick={handleCreate}
                className="mt-4 w-full py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 text-sm font-medium rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center"
            >
                <Plus className="w-4 h-4 mr-2" /> New Course
            </button>
        </div>
    );
}
