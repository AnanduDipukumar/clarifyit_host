import Link from "next/link";
import { BlogPost } from "@/lib/blogs";
import { Eye, Heart, ArrowRight, Share2, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { getBlogStats, BlogPostStats } from "@/lib/db";
import { addToFavorites, removeFromFavorites, isFavorite } from "@/lib/favorites";

export default function BlogCard({ blog, queryString }: { blog: BlogPost; queryString?: string }) {
    const [stats, setStats] = useState<BlogPostStats>({ views: 0, likes: 0 });
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        getBlogStats(blog.slug).then(setStats);
        setIsFav(isFavorite(blog.slug));

        const handleUpdate = () => setIsFav(isFavorite(blog.slug));
        window.addEventListener("favorites-updated", handleUpdate);
        return () => window.removeEventListener("favorites-updated", handleUpdate);
    }, [blog.slug]);

    const handleShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/blog/${blog.slug}`;
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

    const toggleFav = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFav) {
            removeFromFavorites(blog.slug);
        } else {
            addToFavorites(blog);
        }
    };

    return (
        <div className="group relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6 flex flex-col items-start gap-4 h-full">
                {/* Header Row: Category + Actions */}
                <div className="flex w-full items-center justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                        {blog.category}
                    </span>
                    <div className="flex gap-2 relative z-20">
                        <button
                            onClick={handleShare}
                            className="p-1.5 text-muted-foreground hover:bg-muted rounded-full transition-colors"
                            title="Share"
                        >
                            <Share2 className="h-4 w-4" />
                        </button>
                        <button
                            onClick={toggleFav}
                            className={`p-1.5 rounded-full transition-colors ${isFav ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-muted"}`}
                            title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            <Bookmark className={`h-4 w-4 ${isFav ? "fill-current" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/blog/${blog.slug}${queryString || ""}`}>
                            <span className="absolute inset-0 z-10" />
                            {blog.title}
                        </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {blog.description}
                    </p>
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto pt-2">
                        {blog.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full border border-border/50">
                                {tag}
                            </span>
                        ))}
                        {blog.tags.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 text-muted-foreground">+{blog.tags.length - 3}</span>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className="flex w-full items-center justify-between pt-4 text-xs text-muted-foreground mt-2 border-t">
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

