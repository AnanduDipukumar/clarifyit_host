"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getPlaylists, createNewPlaylist, Playlist, deletePlaylist } from "@/lib/playlists";
import { Plus, ListMusic, Trash2, ExternalLink, Share2, MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlaylistsPage() {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const router = useRouter();

    // Load playlists on mount and on storage updates
    useEffect(() => {
        setPlaylists(getPlaylists());

        const handleStorageChange = () => {
            setPlaylists(getPlaylists());
        };

        window.addEventListener("playlists-updated", handleStorageChange);
        return () => window.removeEventListener("playlists-updated", handleStorageChange);
    }, []);

    const handleCreate = () => {
        const title = prompt("Enter playlist title:");
        if (!title) return;
        const newPlaylist = createNewPlaylist(title);
        router.push(`/playlists/${newPlaylist.id}`);
    };

    const handleDelete = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        if (confirm("Are you sure you want to delete this playlist?")) {
            deletePlaylist(id);
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold mb-2 font-heading text-neutral-900 dark:text-neutral-100">
                        My Custom Courses
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Curate your own learning paths and share them with colleagues.
                    </p>
                </div>
                <button
                    onClick={handleCreate}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlists.map((playlist) => (
                    <Link
                        key={playlist.id}
                        href={`/playlists/${playlist.id}`}
                        className="group block h-full"
                    >
                        <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-lg hover:border-primary-500/30 transition-all duration-300 relative">

                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => handleDelete(e, playlist.id)}
                                    className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                                    title="Delete Playlist"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                                    <ListMusic className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-heading truncate pr-8">
                                {playlist.title}
                            </h3>

                            <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-2 min-h-[40px]">
                                {playlist.description || "No description provided."}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                <span className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                                    {playlist.blogSlugs.length} Items
                                </span>
                                <span className="text-xs text-neutral-400">
                                    Created {new Date(playlist.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {playlists.length === 0 && (
                <div className="text-center py-24 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl border border-dashed border-neutral-200 dark:border-neutral-800">
                    <ListMusic className="w-16 h-16 mx-auto mb-4 text-neutral-300 dark:text-neutral-700" />
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">No custom courses yet</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-6">Create your first playlist to start organizing blogs.</p>
                    <button
                        onClick={handleCreate}
                        className="inline-flex items-center px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-xl font-medium transition-colors"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Create First Playlist
                    </button>
                </div>
            )}
        </div>
    );
}
