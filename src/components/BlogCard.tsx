"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/blogs";
import { Eye, Heart, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getBlogStats, BlogPostStats } from "@/lib/db";

export default function BlogCard({ blog }: { blog: BlogPost }) {
    const [stats, setStats] = useState<BlogPostStats>({ views: 0, likes: 0 });

    useEffect(() => {
        getBlogStats(blog.slug).then(setStats);
    }, [blog.slug]);

    return (
        <div className="group relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-start gap-4 h-full">
                {/* Category Badge */}
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                    {blog.category}
                </span>

                {/* Title & Desc */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/blog/${blog.slug}`}>
                            <span className="absolute inset-0" />
                            {blog.title}
                        </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {blog.description}
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-auto flex w-full items-center justify-between pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {stats.likes}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more <ArrowRight className="h-3 w-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
