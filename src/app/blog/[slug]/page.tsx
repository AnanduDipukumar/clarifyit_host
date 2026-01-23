import { allBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import type { Metadata } from "next";
import { Suspense } from "react";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = allBlogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found",
        };
    }

    return {
        title: `${blog.title} | ClarifyIt`,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: 'article',
            publishedTime: blog.publishedAt,
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const blog = allBlogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-muted rounded-lg m-4" />}>
            <BlogPostClient blog={blog} />
        </Suspense>
    );
}

// Generate static params for all blogs at build time
export async function generateStaticParams() {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}
