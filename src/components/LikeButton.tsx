"use client";

import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { getBlogStats, incrementLike } from "@/lib/db";
import clsx from "clsx";

export default function LikeButton({ slug }: { slug: string }) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        getBlogStats(slug).then(stats => {
            setLikes(stats.likes);
        });
        // Check local storage for "has liked this post" to prevent spam (simple check)
        const hasLiked = localStorage.getItem(`clarifyit_liked_${slug}`);
        if (hasLiked) setLiked(true);
    }, [slug]);

    const handleLike = async () => {
        if (liked) return;

        // Optimistic update
        setLikes(prev => prev + 1);
        setLiked(true);
        localStorage.setItem(`clarifyit_liked_${slug}`, "true");

        await incrementLike(slug);
    };

    return (
        <button
            onClick={handleLike}
            disabled={liked}
            className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                liked
                    ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 cursor-default"
                    : "bg-slate-100 hovering:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
            )}
        >
            <Heart className={clsx("h-5 w-5", liked && "fill-current")} />
            <span className="font-semibold">{likes}</span>
            <span className="text-xs opacity-70">Likes</span>
        </button>
    );
}
