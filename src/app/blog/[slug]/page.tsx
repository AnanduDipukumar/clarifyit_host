import { INITIAL_BLOGS } from "@/lib/blogs";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = INITIAL_BLOGS.find((b) => b.slug === slug);

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
    const blog = INITIAL_BLOGS.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return <BlogPostClient blog={blog} />;
}

// Generate static params for all blogs at build time
export async function generateStaticParams() {
    return INITIAL_BLOGS.map((blog) => ({
        slug: blog.slug,
    }));
}
