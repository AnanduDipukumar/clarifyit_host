"use client";

import { useState, useEffect } from "react";
import { HelpCircle, X } from "lucide-react";

export default function OnboardingGuide() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSeen, setHasSeen] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("clarifyit_onboarding_seen");
        if (!seen) {
            setIsOpen(true);
        } else {
            setHasSeen(true);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setHasSeen(true);
        localStorage.setItem("clarifyit_onboarding_seen", "true");
    };

    if (!isOpen && hasSeen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50 animate-in fade-in zoom-in duration-300"
                aria-label="Help"
            >
                <HelpCircle className="h-6 w-6" />
            </button>
        );
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg p-6 m-4 bg-card border rounded-xl shadow-2xl animate-in zoom-in-95 duration-300">
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="space-y-4 text-left">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tight">Welcome to ClarifyIt! 🚀</h2>
                        <p className="text-muted-foreground">
                            Think of each blog post here as a <strong>Capsule</strong> of knowledge.
                        </p>
                    </div>

                    <div className="space-y-3 text-sm">
                        <div className="p-3 bg-secondary/50 rounded-lg">
                            <h3 className="font-semibold mb-1">🔍 Smart Filtering</h3>
                            <p>
                                Use the search bar to find exact topics. Add <strong>Tags</strong> to create custom study playlists.
                            </p>
                        </div>

                        <div className="p-3 bg-secondary/50 rounded-lg">
                            <h3 className="font-semibold mb-1">⚡ Contextual Navigation</h3>
                            <p>
                                The <strong>Next / Previous</strong> buttons at the bottom of each post adapt to your filters. If you search for "Physics", they will guide you through a Physics-only journey.
                            </p>
                        </div>

                        <div className="p-3 bg-secondary/50 rounded-lg">
                            <h3 className="font-semibold mb-1">🛠️ Advanced Tools</h3>
                            <p>
                                Click the settings icon in the search bar to enable <strong>Match Any</strong> logic or fuzzy matching for specific tag searches.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleClose}
                        className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Got it, let's learn!
                    </button>
                </div>
            </div>
        </div>
    );
}
