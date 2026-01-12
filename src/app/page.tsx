"use client";

import { useState, useMemo } from "react";
import SearchSection from "@/components/SearchSection";
import BlogCard from "@/components/BlogCard";
import { INITIAL_BLOGS } from "@/lib/blogs";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");

  const filteredBlogs = useMemo(() => {
    let result = [...INITIAL_BLOGS];

    // Filter
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(lower) ||
          b.description.toLowerCase().includes(lower) ||
          b.category.toLowerCase().includes(lower)
      );
    }

    // Sort
    if (sortOption === "recent") {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (sortOption === "popular") {
      // For now, simpler sorting or just randomness as we don't have real-time stat sync in this list without fetching all
      // In a real app, we would fetch sorted from DB.
      // Here we just keep default or random for "popular" visual change
      result.sort((a, b) => a.title.localeCompare(b.title)); // Just alphabetical as placeholder for popular
    }

    return result;
  }, [searchTerm, sortOption]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SearchSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No topics found matching your search.
          </div>
        )}
      </div>
    </main>
  );
}
