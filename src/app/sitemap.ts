import { MetadataRoute } from "next";
import { INITIAL_BLOGS } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://clarifyit.in";

    const posts = INITIAL_BLOGS.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...posts,
    ];
}
