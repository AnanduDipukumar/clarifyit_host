"use client";

import { useState, useMemo, useEffect } from "react";
import SearchSection from "@/components/SearchSection";
import BlogCard from "@/components/BlogCard";
import OnboardingGuide from "@/components/OnboardingGuide";
import { INITIAL_BLOGS } from "@/lib/blogs";
import { filterBlogs, MatchLogic, MatchType } from "@/lib/filter";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("recent");
  // Default matchType is now 'substring' as per request
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [matchLogic, setMatchLogic] = useState<MatchLogic>("AND");
  const [matchType, setMatchType] = useState<MatchType>("substring");

  // Load Settings from LocalStorage on Mount
  useEffect(() => {
    const savedTags = localStorage.getItem("clarifyit_selectedTags");
    const savedLogic = localStorage.getItem("clarifyit_matchLogic");
    const savedType = localStorage.getItem("clarifyit_matchType");

    if (savedTags) setSelectedTags(JSON.parse(savedTags));
    if (savedLogic) setMatchLogic(savedLogic as MatchLogic);
    if (savedType) setMatchType(savedType as MatchType);
  }, []);

  // Save Settings to LocalStorage when they change
  useEffect(() => {
    localStorage.setItem("clarifyit_selectedTags", JSON.stringify(selectedTags));
  }, [selectedTags]);

  useEffect(() => {
    localStorage.setItem("clarifyit_matchLogic", matchLogic);
  }, [matchLogic]);

  useEffect(() => {
    localStorage.setItem("clarifyit_matchType", matchType);
  }, [matchType]);

  // Extract all unique tags
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    INITIAL_BLOGS.forEach(blog => {
      blog.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredBlogs = useMemo(() => {
    return filterBlogs(INITIAL_BLOGS, searchTerm, selectedTags, sortOption, matchLogic, matchType);
  }, [searchTerm, sortOption, selectedTags, matchLogic, matchType]);

  // Construct Query String for Navigation Context
  const contextQueryString = useMemo(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("q", searchTerm);
    if (sortOption && sortOption !== "recent") params.set("sort", sortOption);
    if (selectedTags.length > 0) params.set("tags", selectedTags.join(","));
    if (matchLogic !== "AND") params.set("logic", matchLogic);
    if (matchType !== "exact") params.set("match", matchType);

    const str = params.toString();
    return str ? `?${str}` : "";
  }, [searchTerm, sortOption, selectedTags, matchLogic, matchType]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <OnboardingGuide />

      <SearchSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
        selectedTags={selectedTags}
        onAddTag={(tag) => setSelectedTags(prev => [...new Set([...prev, tag])])}
        onRemoveTag={(tag) => setSelectedTags(prev => prev.filter(t => t !== tag))}
        matchLogic={matchLogic}
        onMatchLogicChange={setMatchLogic}
        matchType={matchType}
        onMatchTypeChange={setMatchType}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} queryString={contextQueryString} />
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
