"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, notFound, useRouter } from "next/navigation";
import { getPlaylist, savePlaylist, toggleBlogInPlaylist, generateShareUrl, Playlist } from "@/lib/playlists";
import { allBlogs } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import { ArrowLeft, Share2, Trash2, Edit2, Link as LinkIcon, Check } from "lucide-react";

export default function PlaylistDetailsPage() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();

    const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editDesc, setEditDesc] = useState("");
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const p = getPlaylist(id);
        if (p) {
            setPlaylist(p);
            setEditTitle(p.title);
            setEditDesc(p.description);
        }
    }, [id]);

    if (!mounted) return null;
    if (!playlist) return notFound();

    // Resolve blogs
    const playlistBlogs = playlist.blogSlugs
        .map(slug => allBlogs.find(b => b.slug === slug))
        .filter(b => b !== undefined);

    const handleSave = () => {
        const updated = { ...playlist, title: editTitle, description: editDesc };
        savePlaylist(updated);
        setPlaylist(updated);
        setIsEditing(false);
    };

    const handleRemoveBlog = (slug: string) => {
        toggleBlogInPlaylist(playlist.id, slug);
        // Update local state immediately
        const updatedSlugs = playlist.blogSlugs.filter(s => s !== slug);
        setPlaylist({ ...playlist, blogSlugs: updatedSlugs });
    };

    const handleShare = () => {
        const url = generateShareUrl(playlist);
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        alert("Share link copied to clipboard! Anyone with this link can view your playlist.");
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <Link
                href="/playlists"
                className="inline-flex items-center text-sm text-neutral-500 hover:text-primary-600 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Custom Courses
            </Link>

            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 mb-10 shadow-sm">
                {!isEditing ? (
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                                Custom Course
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-heading">
                                {playlist.title}
                            </h1>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                {playlist.description || "No description provided."}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 text-neutral-500 hover:text-primary-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                                title="Edit Details"
                            >
                                <Edit2 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleShare}
                                className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                            >
                                {copied ? <Check className="w-4 h-4 mr-2" /> : <Share2 className="w-4 h-4 mr-2" />}
                                {copied ? "Copied Link" : "Share"}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Edit Mode
                    <div className="space-y-4 max-w-xl">
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full text-3xl font-bold bg-transparent border-b-2 border-primary-500 focus:outline-none p-1 text-neutral-900 dark:text-white"
                            placeholder="Course Title"
                        />
                        <textarea
                            value={editDesc}
                            onChange={(e) => setEditDesc(e.target.value)}
                            className="w-full bg-neutral-50 dark:bg-neutral-800 border-none rounded-lg p-3 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500"
                            placeholder="Add a description..."
                            rows={3}
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center">
                {playlistBlogs.length} Topics
            </h2>

            {/* Blog List (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlistBlogs.map((blog) => (
                    <div key={blog!.slug} className="relative group">
                        {/* Remove Button Overlay */}
                        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRemoveBlog(blog!.slug);
                                }}
                                className="p-2 bg-white dark:bg-neutral-900 text-red-500 shadow-md rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
                                title="Remove from Course"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        <BlogCard blog={blog!} />
                    </div>
                ))}
            </div>

            {playlistBlogs.length === 0 && (
                <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800">
                    <p className="text-neutral-500 mb-4">This course is empty.</p>
                    <Link href="/" className="inline-flex items-center text-primary-600 hover:underline">
                        Browse blogs to add some
                    </Link>
                </div>
            )}
        </div>
    );
}
