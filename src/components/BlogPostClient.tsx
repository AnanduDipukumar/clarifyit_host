"use client";

import { useEffect, useState, useMemo } from "react";
import { BlogPost, allBlogs } from "@/lib/blogs";
import { filterBlogs, MatchLogic, MatchType } from "@/lib/filter";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Eye, Share2, Heart, Bookmark } from "lucide-react";
import LikeButton from "@/components/LikeButton";
import FeedbackSection from "@/components/FeedbackSection";
import QASection from "@/components/QASection";
import { incrementView, getBlogStats } from "@/lib/db";
import { addToHistory } from "@/lib/history";
import { addToFavorites, removeFromFavorites, isFavorite } from "@/lib/favorites";
import "katex/dist/katex.min.css";

export default function BlogPostClient({ blog }: { blog: BlogPost }) {
    const [views, setViews] = useState(0);
    const [isFav, setIsFav] = useState(false);
    const searchParams = useSearchParams();

    // Reconstruct Context from Query Params
    const { prevBlog, nextBlog, contextParams } = useMemo(() => {
        const searchTerm = searchParams.get("q") || "";
        const tags = searchParams.get("tags")?.split(",") || [];
        const sortOption = searchParams.get("sort") || "recent";
        const matchLogic = (searchParams.get("logic") || "AND") as MatchLogic;
        const matchType = (searchParams.get("match") || "exact") as MatchType;

        // Re-run filter logic
        const filteredList = filterBlogs(allBlogs, searchTerm, tags, sortOption, matchLogic, matchType);

        const currentIndex = filteredList.findIndex(b => b.slug === blog.slug);
        const prev = currentIndex > 0 ? filteredList[currentIndex - 1] : null;
        const next = currentIndex !== -1 && currentIndex < filteredList.length - 1 ? filteredList[currentIndex + 1] : null;

        return {
            prevBlog: prev,
            nextBlog: next,
            contextParams: searchParams.toString() ? `?${searchParams.toString()}` : ""
        };
    }, [blog.slug, searchParams]);

    const [formattedDate, setFormattedDate] = useState<string>("");

    useEffect(() => {
        setFormattedDate(new Date(blog.publishedAt).toLocaleDateString());
    }, [blog.publishedAt]);

    useEffect(() => {
        incrementView(blog.slug);
        addToHistory(blog);
        getBlogStats(blog.slug).then(s => setViews(s.views + 1));

        setIsFav(isFavorite(blog.slug));
        const handleUpdate = () => setIsFav(isFavorite(blog.slug));
        window.addEventListener("favorites-updated", handleUpdate);
        return () => window.removeEventListener("favorites-updated", handleUpdate);
    }, [blog.slug]);

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: blog.title, text: blog.description, url });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
        }
    };

    const toggleFav = () => {
        if (isFav) {
            removeFromFavorites(blog.slug);
        } else {
            addToFavorites(blog);
        }
    };

    return (
        <article className="max-w-3xl mx-auto py-8 space-y-8">
            {/* Back Link */}
            <Link href={`/${contextParams}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to topics
            </Link>

            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                            {blog.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formattedDate}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {views} views
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"
                            title="Share"
                        >
                            <Share2 className="h-5 w-5" />
                        </button>
                        <button
                            onClick={toggleFav}
                            className={`p-2 rounded-full transition-colors ${isFav ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted"}`}
                            title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <Bookmark className={`h-5 w-5 ${isFav ? "fill-current" : ""}`} />
                        </button>
                    </div>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl">
                    {blog.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                    {blog.description}
                </p>
            </header>

            {/* Content */}
            <div className="prose dark:prose-invert prose-slate max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {blog.content}
                </ReactMarkdown>
            </div>

            {/* Contextual Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-8">
                {prevBlog ? (
                    <Link
                        href={`/blog/${prevBlog.slug}${contextParams}`}
                        className="flex flex-col p-4 rounded-lg border hover:bg-muted/50 transition-colors text-right md:text-left group"
                    >
                        <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1 group-hover:text-primary">
                            <ArrowLeft className="h-3 w-3" /> Previous
                        </span>
                        <span className="font-semibold text-sm line-clamp-1">{prevBlog.title}</span>
                    </Link>
                ) : <div />}

                {nextBlog ? (
                    <Link
                        href={`/blog/${nextBlog.slug}${contextParams}`}
                        className="flex flex-col p-4 rounded-lg border hover:bg-muted/50 transition-colors text-right group"
                    >
                        <span className="text-xs text-muted-foreground mb-1 flex items-center justify-end gap-1 group-hover:text-primary">
                            Next <ArrowRight className="h-3 w-3" />
                        </span>
                        <span className="font-semibold text-sm line-clamp-1">{nextBlog.title}</span>
                    </Link>
                ) : <div />}
            </div>

            {/* Interaction */}
            <div className="flex items-center justify-between border-t border-b py-8">
                <div>
                    <h3 className="font-semibold">Was this helpful?</h3>
                    <p className="text-sm text-muted-foreground">Give it a like!</p>
                </div>
                <LikeButton slug={blog.slug} />
            </div>

            {/* Feedback */}
            <FeedbackSection slug={blog.slug} />

            {/* Q&A */}
            <QASection slug={blog.slug} />
        </article>
    );
}
