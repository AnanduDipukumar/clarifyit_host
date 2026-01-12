
export interface BlogSubmission {
    id: string;
    title: string;
    author: string;
    description: string;
    content: string;
    tags: string[];
    category: string;
    submittedAt: string;
    status: "pending" | "approved" | "rejected";
}

const SUBMISSIONS_KEY = "clarifyit_submissions";

export function submitBlog(data: Omit<BlogSubmission, "id" | "submittedAt" | "status">) {
    if (typeof window === "undefined") return;

    const newSubmission: BlogSubmission = {
        ...data,
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
        status: "pending",
    };

    try {
        const existing = localStorage.getItem(SUBMISSIONS_KEY);
        const submissions: BlogSubmission[] = existing ? JSON.parse(existing) : [];

        submissions.push(newSubmission);
        localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));

        return true;
    } catch (error) {
        console.error("Failed to submit blog", error);
        return false;
    }
}
