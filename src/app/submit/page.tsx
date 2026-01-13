"use client";

import { useState } from "react";
import { ArrowLeft, Send, Plus, X, Tag as TagIcon, BookOpen } from "lucide-react";
import Link from "next/link";
import { submitBlog } from "@/lib/submissions";

export default function SubmitPage() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        description: "",
        content: "",
    });
    const [tagInput, setTagInput] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleAddTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const success = await submitBlog({
            ...formData,
            tags
        });

        if (success) {
            setIsSuccess(true);
            setFormData({ title: "", author: "", category: "", description: "", content: "" });
            setTags([]);
        }

        setIsSubmitting(false);
    };

    if (isSuccess) {
        return (
            <main className="container max-w-2xl mx-auto py-16 px-4 text-center min-h-screen flex flex-col items-center justify-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6 text-primary animate-in zoom-in">
                    <Send className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Submission Received!</h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                    Thank you for contributing to the community. Your article <strong>"{formData.title}"</strong> has been sent for approval.
                    Once reviewed by our team, it will be visible to everyone.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2 rounded-md border hover:bg-muted transition-colors"
                    >
                        Submit Another
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container max-w-3xl mx-auto py-8 px-4 min-h-screen">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>

            <div className="text-center mb-10 space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight">Share Your Knowledge</h1>
                <p className="text-xl text-muted-foreground">
                    Help others learn by explaining concepts simply. Your contribution makes a difference!
                </p>
            </div>

            <div className="bg-card border rounded-xl shadow-sm p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Title & Author */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Article Title</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g., Understanding Quantum Entanglement"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Author Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Your Name"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <select
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">Select a category...</option>
                            <option value="Physics">Physics</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Biology">Biology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Short Description</label>
                        <textarea
                            required
                            rows={2}
                            placeholder="A brief summary of what this article explains..."
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium">Content (Markdown Supported)</label>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <BookOpen className="h-3 w-3" /> Supports Markdown
                            </span>
                        </div>
                        <textarea
                            required
                            rows={12}
                            placeholder="# Introduction\n\nStart writing your amazing article here..."
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-mono"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tags</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Add a tag..."
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                            />
                            <button
                                type="button"
                                onClick={handleAddTag}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                        <TagIcon className="h-3 w-3" />
                                        {tag}
                                        <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-destructive ml-1">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Submit for Approval"}
                    </button>
                </form>
            </div>
        </main>
    );
}
