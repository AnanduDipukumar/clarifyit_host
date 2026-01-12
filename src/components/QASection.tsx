"use client";

import { useState, useEffect } from "react";
import { Send, User } from "lucide-react";
import { getQuestions, submitQuestion, Question } from "@/lib/db";

export default function QASection({ slug }: { slug: string }) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getQuestions(slug).then(setQuestions);
    }, [slug]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newQuestion.trim()) return;

        setLoading(true);
        const q = await submitQuestion(slug, newQuestion);
        setQuestions([q, ...questions]);
        setNewQuestion("");
        setLoading(false);
    };

    return (
        <div className="mt-12 space-y-8 border-t pt-8">
            <h2 className="text-2xl font-bold">Ask a Question</h2>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="What are you confused about?"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    disabled={loading}
                >
                    <Send className="h-4 w-4 mr-2" />
                    Ask
                </button>
            </form>

            {/* List */}
            <div className="space-y-4">
                {questions.length > 0 ? (
                    questions.map((q) => (
                        <div key={q.id} className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900">
                            <div className="shrink-0">
                                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">
                                    User • {new Date(q.createdAt).toLocaleDateString()}
                                </p>
                                <p className="text-sm">{q.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground py-8">
                        No questions yet. Be the first to ask!
                    </p>
                )}
            </div>
        </div>
    );
}
