"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getCourse } from "@/lib/courses";
import { ArrowLeft, Book, Layers, Search, ChevronRight } from "lucide-react";

export default function CourseModulesPage() {
    const params = useParams();
    const courseId = params?.courseId as string;
    const course = getCourse(courseId);

    const [searchQuery, setSearchQuery] = useState("");

    if (!course) {
        return notFound();
    }

    const filteredModules = course.modules.filter((module) =>
        module.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <Link
                href="/courses"
                className="inline-flex items-center text-sm text-neutral-500 hover:text-primary-600 mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Courses
            </Link>

            <div className="bg-primary-50 dark:bg-primary-950/30 rounded-3xl p-8 mb-10 border border-primary-100 dark:border-primary-900/50">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                    {course.code} • {course.year}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2 font-heading">
                    {course.name}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium mb-4">
                    {course.university}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl">
                    {course.description}
                </p>
            </div>

            {/* Module Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-primary-500" />
                    Course Modules
                </h2>
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Search modules..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-sans"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                </div>
            </div>

            {/* Module List */}
            <div className="space-y-4">
                {filteredModules.map((module, index) => (
                    <Link
                        key={module.id}
                        href={`/courses/${course.id}/${module.id}`}
                        className="group block"
                    >
                        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-primary-500/50 hover:shadow-md transition-all duration-200 flex items-center justify-between">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-lg font-bold text-neutral-500 group-hover:text-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {module.name}
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                                        {module.description}
                                    </p>
                                    <div className="mt-2 inline-flex items-center text-xs font-medium text-neutral-500">
                                        <Book className="w-3 h-3 mr-1" />
                                        {module.blogSlugs.length} Topics
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                View Topics <ChevronRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}

                {filteredModules.length === 0 && (
                    <div className="text-center py-12 text-neutral-500 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800">
                        <Layers className="w-10 h-10 mx-auto mb-3 opacity-50" />
                        <p>No modules found matching "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}
