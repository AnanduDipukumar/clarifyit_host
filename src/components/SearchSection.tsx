"use client";

import { Search, ListFilter, Plus, X, Tag, Settings2 } from "lucide-react";
import { useState } from "react";

interface SearchSectionProps {
    searchTerm: string;
    onSearchChange: (val: string) => void;
    sortOption: string;
    onSortChange: (val: string) => void;
    selectedTags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tag: string) => void;
    // Advanced Props
    matchLogic: "AND" | "OR";
    onMatchLogicChange: (logic: "AND" | "OR") => void;
    matchType: "exact" | "prefix" | "suffix" | "substring";
    onMatchTypeChange: (type: "exact" | "prefix" | "suffix" | "substring") => void;
}

export default function SearchSection({
    searchTerm,
    onSearchChange,
    sortOption,
    onSortChange,
    selectedTags,
    onAddTag,
    onRemoveTag,
    matchLogic,
    onMatchLogicChange,
    matchType,
    onMatchTypeChange,
}: SearchSectionProps) {
    const [inputText, setInputText] = useState(searchTerm);
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSearch = () => {
        onSearchChange(inputText);
    };

    const handleAddTag = () => {
        if (inputText.trim()) {
            onAddTag(inputText.trim());
            setInputText(""); // Clear input after adding tag
            onSearchChange(""); // optional: clear search if converting to tag
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="w-full space-y-4 py-8">
            <div className="text-center space-y-2 mb-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What do you want to understand today?
                </h1>
                <p className="text-muted-foreground md:text-xl">
                    Simple explanations for complex topics.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 max-w-4xl mx-auto px-4">

                {/* Row 1 Mobile: Input -> Add Tag -> Search Button */}
                <div className="flex gap-2 w-full md:contents">
                    <div className="relative flex-1 min-w-0">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search topics or type a tag..."
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <button
                        onClick={handleAddTag}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:w-auto md:px-4 shrink-0"
                        title="Add as Tag"
                    >
                        <Plus className="h-4 w-4 md:mr-2" /> <span className="hidden md:inline">Tag</span>
                    </button>

                    <button
                        onClick={handleSearch}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 shrink-0"
                    >
                        Search
                    </button>
                </div>

                {/* Row 2 Mobile: Sort -> Advanced (Reduced Height on Mobile) */}
                <div className="flex gap-2 w-full md:w-auto md:contents">
                    <div className="flex items-center h-9 md:h-10 rounded-md border border-input bg-background px-2 gap-2 flex-1 md:flex-none md:w-auto">
                        <ListFilter className="h-4 w-4 text-muted-foreground" />
                        <select
                            className="h-full bg-transparent text-sm focus:outline-none w-full md:w-auto"
                            value={sortOption}
                            onChange={(e) => onSortChange(e.target.value)}
                        >
                            <option value="recent">Recent</option>
                            <option value="popular">Popular</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input h-9 md:h-10 px-3 shrink-0 ${showAdvanced ? "bg-accent text-accent-foreground" : "bg-background hover:bg-accent hover:text-accent-foreground"}`}
                        title="Advanced Filters"
                    >
                        <Settings2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Compact Secondary Row: Tags & Advanced Panel */}
            <div className="space-y-3 max-w-4xl mx-auto px-4">

                {/* Advanced Controls (Collapsible) */}
                {showAdvanced && (
                    <div className="animate-in slide-in-from-top-2 p-3 bg-muted/30 border rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">

                        {/* Tag Logic Title */}
                        <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
                            <h4 className="font-semibold text-sm mb-1">Tag Logic Configuration</h4>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-3">
                            <span className="font-medium text-muted-foreground">Logic:</span>
                            <div className="flex rounded-md border bg-background p-0.5">
                                <button
                                    onClick={() => onMatchLogicChange("AND")}
                                    className={`px-3 py-1 text-xs rounded-sm transition-all ${matchLogic === "AND" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    ALL (AND)
                                </button>
                                <button
                                    onClick={() => onMatchLogicChange("OR")}
                                    className={`px-3 py-1 text-xs rounded-sm transition-all ${matchLogic === "OR" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    ANY (OR)
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-start gap-3">
                            <span className="font-medium text-muted-foreground">Match Rule:</span>
                            <select
                                value={matchType}
                                onChange={(e) => onMatchTypeChange(e.target.value as any)}
                                className="h-7 text-xs rounded-md border bg-background px-2"
                            >
                                <option value="exact">Exact</option>
                                <option value="prefix">Starts With</option>
                                <option value="suffix">Ends With</option>
                                <option value="substring">Contains</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Active Tags (Compact Inline) */}
                {selectedTags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 text-sm justify-center md:justify-start">
                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mr-1">Active Filters:</span>
                        {selectedTags.map(tag => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full border">
                                {tag}
                                <button onClick={() => onRemoveTag(tag)} className="hover:text-destructive transition-colors ml-1">
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        ))}
                        <button
                            onClick={() => selectedTags.forEach(t => onRemoveTag(t))}
                            className="text-xs text-muted-foreground hover:text-destructive underline underline-offset-4 ml-auto sm:ml-2"
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
