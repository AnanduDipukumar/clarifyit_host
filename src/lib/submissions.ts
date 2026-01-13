
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface BlogSubmission {
    id: string;
    title: string;
    author: string;
    category: string;
    description: string;
    content: string;
    tags: string[];
    status: "pending" | "approved" | "rejected";
    submittedAt: string;
}

const STORAGE_KEY = "clarifyit_submissions"; // Legacy fallback

// --- Public API ---

export async function submitBlog(data: Omit<BlogSubmission, "id" | "status" | "submittedAt">): Promise<BlogSubmission> {
    const submissionData = {
        ...data,
        status: "pending",
        submittedAt: new Date().toISOString()
    };

    // Try Firebase
    if (db) {
        try {
            const ref = collection(db, "submissions");
            // Add server timestamp for better sorting in console
            const docRef = await addDoc(ref, {
                ...submissionData,
                serverTimestamp: serverTimestamp()
            });
            return { id: docRef.id, ...submissionData } as BlogSubmission;
        } catch (e) {
            console.warn("Firebase submission failed, using local storage", e);
        }
    }

    // Fallback: LocalStorage (Mock)
    // Note: In a real "No Account" deployment, LocalStorage only saves on the USER's device.
    // So the admin won't see it. But it's good for testing.
    const newSubmission = {
        id: Date.now().toString(),
        ...submissionData
    } as BlogSubmission;

    if (typeof window !== "undefined") {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        existing.push(newSubmission);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
    return newSubmission;
}

export function getLocalSubmissions(): BlogSubmission[] {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}
