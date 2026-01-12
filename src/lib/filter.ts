import { BlogPost } from "./blogs";

export type MatchLogic = "AND" | "OR";
export type MatchType = "exact" | "prefix" | "suffix" | "substring";

export function filterBlogs(
    blogs: BlogPost[],
    searchTerm: string,
    selectedTags: string[],
    sortOption: string,
    matchLogic: MatchLogic = "AND",
    matchType: MatchType = "exact"
): BlogPost[] {
    let result = [...blogs];

    // 1. Filter by Search
    if (searchTerm) {
        const lower = searchTerm.toLowerCase();
        result = result.filter(
            (b) =>
                b.title.toLowerCase().includes(lower) ||
                b.description.toLowerCase().includes(lower) ||
                b.category.toLowerCase().includes(lower)
        );
    }

    // 2. Filter by Tags (Advanced)
    if (selectedTags && selectedTags.length > 0) {
        const normalize = (s: string) => s.toLowerCase().trim();
        const searchTags = selectedTags.map(normalize);

        result = result.filter((blog) => {
            const blogTags = (blog.tags || []).map(normalize);
            if (blogTags.length === 0) return false;

            // Helper to check if a SINGLE search tag matches ANY of the blog's tags based on MatchType
            const matchesRule = (searchTag: string) => {
                return blogTags.some((bTag) => {
                    switch (matchType) {
                        case "exact": return bTag === searchTag;
                        case "prefix": return bTag.startsWith(searchTag);
                        case "suffix": return bTag.endsWith(searchTag);
                        case "substring": return bTag.includes(searchTag);
                        default: return bTag === searchTag;
                    }
                });
            };

            if (matchLogic === "AND") {
                // Blog must satisfy EVERY search tag rule
                return searchTags.every(matchesRule);
            } else {
                // Blog must satisfy AT LEAST ONE search tag rule
                return searchTags.some(matchesRule);
            }
        });
    }

    // 3. Sort
    if (sortOption === "recent") {
        result.sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    } else if (sortOption === "popular") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
}
