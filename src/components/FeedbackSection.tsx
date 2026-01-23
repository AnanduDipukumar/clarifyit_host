"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CheckCircle2, Loader2, MessageSquarePlus } from "lucide-react";

type Rating = "Over" | "Less" | "Just Right";
type Quality = "Good" | "Poor" | "Excellent" | "Awful";

export default function FeedbackSection({ slug }: { slug: string }) {
    const [size, setSize] = useState<Rating | null>(null);
    const [quality, setQuality] = useState<Quality | null>(null);
    const [math, setMath] = useState<Rating | null>(null);
    const [text, setText] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!size || !quality || !math) return;

        setStatus("submitting");

        try {
            if (db) {
                await addDoc(collection(db, "blog_feedback"), {
                    slug,
                    size,
                    quality,
                    math,
                    text,
                    createdAt: serverTimestamp(),
                });
                setStatus("success");
            } else {
                // Mock success for development without Firebase env vars
                console.warn("Firebase not configured, feedback not saved.");
                await new Promise(resolve => setTimeout(resolve, 1000));
                setStatus("success");
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="p-6 rounded-xl bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 text-center animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg">Thank you for your feedback!</h3>
                    <p className="text-muted-foreground">Your input helps us improve.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="py-8 border-t">
            <div className="flex items-center gap-2 mb-6">
                <MessageSquarePlus className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Help us improve</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Size Rating */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground block">Length</label>
                        <div className="flex flex-wrap gap-2">
                            {(["Less", "Just Right", "Over"] as Rating[]).map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => setSize(option)}
                                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${size === option
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "hover:bg-secondary hover:border-secondary-foreground/20"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quality Rating */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground block">Quality</label>
                        <div className="flex flex-wrap gap-2">
                            {(["Awful", "Poor", "Good", "Excellent"] as Quality[]).map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => setQuality(option)}
                                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${quality === option
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "hover:bg-secondary hover:border-secondary-foreground/20"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Math Rating */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-muted-foreground block">Math Content</label>
                        <div className="flex flex-wrap gap-2">
                            {(["Less", "Just Right", "Over"] as Rating[]).map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => setMath(option)}
                                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${math === option
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "hover:bg-secondary hover:border-secondary-foreground/20"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <label htmlFor="feedback-text" className="text-sm font-medium text-muted-foreground block">
                        Any specific suggestions?
                    </label>
                    <textarea
                        id="feedback-text"
                        rows={3}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="How can we make this article better?"
                        className="w-full rounded-lg border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                </div>

                <button
                    type="submit"
                    disabled={!size || !quality || !math || status === "submitting"}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto min-w-[120px]"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Submit Feedback"
                    )}
                </button>

                {status === "error" && (
                    <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}
            </form>
        </section>
    );
}
