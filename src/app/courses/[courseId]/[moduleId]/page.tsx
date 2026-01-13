"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getModule, getCourse } from "@/lib/courses";
import { INITIAL_BLOGS } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import { ArrowLeft, BookOpen, Search } from "lucide-react";

export default function ModuleTopicsPage() {
    const params = useParams();
    const courseId = params?.courseId as string;
    const moduleId = params?.moduleId as string;

    const course = getCourse(courseId);
    const moduleData = getModule(courseId, moduleId);

    const [searchQuery, setSearchQuery] = useState("");

    if (!course || !moduleData) {
        return notFound();
    }

    // Resolve slugs to actual blog objects
    const moduleBlogs = moduleData.blogSlugs
        .map((slug) => INITIAL_BLOGS.find((b) => b.slug === slug))
        .filter((b) => b !== undefined);

    // Filter based on local search
    const filteredBlogs = moduleBlogs.filter((blog) =>
        blog!.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog!.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Breadcrumb / Back Navigation */}
            <div className="flex items-center text-sm text-neutral-500 mb-6 space-x-2">
                <Link href="/courses" className="hover:text-primary-600 transition-colors">Courses</Link>
                <span>/</span>
                <Link href={`/courses/${courseId}`} className="hover:text-primary-600 transition-colors">
                    {course.code}
                </Link>
                <span>/</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium truncate max-w-[200px]">
                    {moduleData.name}
                </span>
            </div>

            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 font-heading">
                    {moduleData.name}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
                    {moduleData.description}
                </p>
            </div>

            {/* Topic Search */}
            <div className="flex justify-between items-center mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {moduleBlogs.length} Topics
                    </span>
                </div>
                <div className="relative w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm font-sans"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                    // Using the existing BlogCard. 
                    // We pass key props directly to it.
                    <div key={blog!.slug} className="h-full">
                        <BlogCard blog={blog!} />
                    </div>
                ))}
            </div>

            {filteredBlogs.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    <p>No topics found matching your search.</p>
                </div>
            )}
        </div>
    );
}
