"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES, searchCourses } from "@/lib/courses";
import { Search, BookOpen, Building2, GraduationCap } from "lucide-react";

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredCourses = searchQuery ? searchCourses(searchQuery) : COURSES;

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-4 font-heading text-neutral-900 dark:text-neutral-100">
                    Structured Learning Paths
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    Browse university-aligned courses to find systematic collections of our blogs.
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10 relative">
                <input
                    type="text"
                    placeholder="Search by University, Course Name, or Code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-sans"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        className="group block h-full"
                    >
                        <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-lg hover:border-primary-500/30 transition-all duration-300 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                    {course.code}
                                </span>
                                <BookOpen className="w-5 h-5 text-neutral-400 group-hover:text-primary-500 transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-heading">
                                {course.name}
                            </h3>

                            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                                <Building2 className="w-4 h-4 mr-2" />
                                {course.university}
                            </div>
                            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                                <GraduationCap className="w-4 h-4 mr-2" />
                                {course.year}
                            </div>

                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                {course.description}
                            </p>

                            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                                View {course.modules.length} Modules &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredCourses.length === 0 && (
                <div className="text-center py-20 text-neutral-500">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No courses found matching your search.</p>
                </div>
            )}
        </div>
    );
}
