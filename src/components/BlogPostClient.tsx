"use client";

import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import { ArrowLeft, Clock, Eye } from "lucide-react";
import LikeButton from "@/components/LikeButton";
import QASection from "@/components/QASection";
import { incrementView, getBlogStats } from "@/lib/db";
import "katex/dist/katex.min.css"; // Import KaTeX CSS

export default function BlogPostClient({ blog }: { blog: BlogPost }) {
    const [views, setViews] = useState(0);

    useEffect(() => {
        incrementView(blog.slug);
        getBlogStats(blog.slug).then(s => setViews(s.views + 1));
    }, [blog.slug]);

    return (
        <article className="max-w-3xl mx-auto py-8 space-y-8">
            {/* Back Link */}
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to topics
            </Link>

            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                        {blog.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {views} views
                    </span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl">
                    {blog.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                    {blog.description}
                </p>
            </header>

            {/* Banner Image */}
            {/* Banner Image Removed: Handled by Markdown Content */}

            {/* Content */}
            <div className="prose dark:prose-invert prose-slate max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {blog.content}
                </ReactMarkdown>
            </div>

            {/* Interaction */}
            <div className="flex items-center justify-between border-t border-b py-8">
                <div>
                    <h3 className="font-semibold">Was this helpful?</h3>
                    <p className="text-sm text-muted-foreground">Give it a like!</p>
                </div>
                <LikeButton slug={blog.slug} />
            </div>

            {/* Q&A */}
            <QASection slug={blog.slug} />
        </article>
    );
}
