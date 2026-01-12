"use client";

import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc, increment, collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";

// Types
export interface BlogPostStats {
    views: number;
    likes: number;
}

export interface Question {
    id: string;
    text: string;
    createdAt: number;
    blogSlug: string;
}

// Mock DB Helper (LocalStorage)
const STORAGE_KEY_PREFIX = "clarifyit_";

const getMockStats = (slug: string): BlogPostStats => {
    if (typeof window === "undefined") return { views: 0, likes: 0 };
    const data = localStorage.getItem(`${STORAGE_KEY_PREFIX}stats_${slug}`);
    return data ? JSON.parse(data) : { views: 0, likes: 0 };
};

const setMockStats = (slug: string, stats: BlogPostStats) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}stats_${slug}`, JSON.stringify(stats));
    }
};

const getMockQuestions = (slug: string): Question[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(`${STORAGE_KEY_PREFIX}questions_${slug}`);
    return data ? JSON.parse(data) : [];
};

const addMockQuestion = (slug: string, text: string): Question => {
    const questions = getMockQuestions(slug);
    const newQ: Question = {
        id: Date.now().toString(),
        text,
        createdAt: Date.now(),
        blogSlug: slug,
    };
    questions.unshift(newQ); // Newest first
    if (typeof window !== "undefined") {
        localStorage.setItem(`${STORAGE_KEY_PREFIX}questions_${slug}`, JSON.stringify(questions));
    }
    return newQ;
};

// --- Public API ---

export async function getBlogStats(slug: string): Promise<BlogPostStats> {
    // Try Firebase
    if (db) {
        try {
            const ref = doc(db, "posts", slug);
            const snap = await getDoc(ref);
            if (snap.exists()) {
                return snap.data() as BlogPostStats;
            } else {
                // Initialize if not exists
                await setDoc(ref, { views: 0, likes: 0 });
                return { views: 0, likes: 0 };
            }
        } catch (e) {
            console.warn("Firebase fetch failed, using mock", e);
        }
    }
    // Fallback
    return getMockStats(slug);
}

export async function incrementView(slug: string): Promise<void> {
    if (db) {
        try {
            const ref = doc(db, "posts", slug);
            await updateDoc(ref, { views: increment(1) });
            return;
        } catch (e) {
            // Ignore error
        }
    }
    const stats = getMockStats(slug);
    stats.views++;
    setMockStats(slug, stats);
}

export async function incrementLike(slug: string): Promise<number> {
    if (db) {
        try {
            const ref = doc(db, "posts", slug);
            await updateDoc(ref, { likes: increment(1) });
            // Return new count? No easy way without refetch, but we can assume +1
            return -1; // optimized update in UI
        } catch (e) {
            // Ignore
        }
    }
    const stats = getMockStats(slug);
    stats.likes++;
    setMockStats(slug, stats);
    return stats.likes;
}

export async function getQuestions(slug: string): Promise<Question[]> {
    if (db) {
        try {
            const qRef = collection(db, "posts", slug, "questions");
            const q = query(qRef, orderBy("createdAt", "desc"), limit(50));
            const snap = await getDocs(q);
            return snap.docs.map(d => ({ id: d.id, ...d.data() } as Question));
        } catch (e) {
            console.warn("Firebase questions failed", e);
        }
    }
    return getMockQuestions(slug);
}

export async function submitQuestion(slug: string, text: string): Promise<Question> {
    if (db) {
        try {
            const qRef = collection(db, "posts", slug, "questions");
            const newDoc = { text, createdAt: Date.now(), blogSlug: slug };
            const res = await addDoc(qRef, newDoc);
            return { id: res.id, ...newDoc };
        } catch (e) {
            console.warn("Firebase submit failed", e);
        }
    }
    return addMockQuestion(slug, text);
}
