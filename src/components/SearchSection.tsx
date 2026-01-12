"use client";

import { Search, ListFilter } from "lucide-react";

interface SearchSectionProps {
    searchTerm: string;
    onSearchChange: (val: string) => void;
    sortOption: string;
    onSortChange: (val: string) => void;
}

export default function SearchSection({ searchTerm, onSearchChange, sortOption, onSortChange }: SearchSectionProps) {
    return (
        <div className="w-full space-y-6 py-8 md:py-12">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What do you want to understand today?
                </h1>
                <p className="text-muted-foreground md:text-xl">
                    Simple explanations for complex topics.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search topics..."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <ListFilter className="h-4 w-4 text-muted-foreground md:hidden" />
                    <select
                        className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={sortOption}
                        onChange={(e) => onSortChange(e.target.value)}
                    >
                        <option value="recent">Recent</option>
                        <option value="popular">Popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
