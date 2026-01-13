# ClarifyIt.in - Handover Documentation

> **Status**: Deployment Ready (V1.0)
> **Goal**: A beginner-friendly educational blog simplifying science and engineering.

## 🌟 Overview
ClarifyIt is a Next.js 16 web application designed to teach complex topics using analogies, diagrams, and intuition. It is built to be fast, responsive, and interactive. 

It uses a **Hybrid Architecture**:
*   **Personal Data**: Stored in User's Browser (LocalStorage).
*   **Global Data** (Likes, Views, Submissions): Stored in **Firebase Firestore** (Public Write).

## 🚀 Deployment Guide (Vercel)

This project is optimized for deployment on **Vercel**.

### 1. Prerequisites
You need a **Firebase Project** for the backend features to work.
1.  Go to [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project (e.g., `clarifyit-prod`).
3.  Enable **Firestore Database**.
4.  Go to **Project Settings** -> **General** -> **Your apps** -> **Add Web App**.
5.  Copy the configuration values.

### 2. Environment Variables
Add the following variables to your Vercel Project Settings:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Firebase Security Rules (Anonymous Access)
Since we don't force users to create accounts, we must allow "Public Write" access for specific actions.
Go to **Firestore Database** -> **Rules** and paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Allow anyone to read/write global stats (Likes/Views)
    match /posts/{slug} {
      allow read, write: if true;
    }
    
    // Allow anyone to submit a blog (Admin review needed)
    match /submissions/{id} {
        allow create: if true; 
        allow read: if false; // Only Admin can read (via Console)
    }
  }
}
```

## ✨ Key Features Implemented
1.  **Content Engine**:
    *   **Courses**: Hierarchical learning paths (`/courses` -> Modules -> Topics).
    *   **Custom Playlists**: Users can drag-and-drop blogs into their own "Custom Courses".
    *   **Markdown Support**: Blogs are written in Markdown with support for Graphs, LaTeX Math (`$$ E=mc^2 $$`), and Syntax Highlighting.
2.  **User Experience (UX)**:
    *   **Smart Filtering**: Filter by "AND/OR" logic, Case-insensitive matching.
    *   **Persistence**: Filter settings and playlists saved in `localStorage`.
    *   **Sharing**: Share Playlists via URL (No account needed).
3.  **Community**:
    *   **Submission System**: Users can draft blogs (`/submit`). These are sent to Firestore.

## 📂 Project Structure (For the Next AI)

### `src/app`
*   `page.tsx`: **Home Page**.
*   `courses/`: **Course Logic**.
*   `playlists/`: **Custom Playlist Logic**.
*   `blog/[slug]/page.tsx`: **Blog Post**.

### `src/lib` (CRITICAL)
*   **`blogs.ts`**: **THE CONTENT SOURCE**. Exporting `INITIAL_BLOGS`.
*   **`courses.ts`**: Structure for University Courses.
*   **`playlists.ts`**: Logic for local playlists & URL sharing.
*   **`firebase.ts`**: Config.
*   **`db.ts`**: Unified DB layer. Checks if Firebase is active; else falls back to Mock.
*   **`submissions.ts`**: Handles blog submissions (Local vs Cloud).

## 🤖 Instructions for the Next AI
**Welcome, Colleague!** Here is the state of the project:

1.  **Adding Content**:
    *   Add objects to `INITIAL_BLOGS` in `src/lib/blogs.ts`.
    *   Images go in `public/images/`.

2.  **Backend Integration**:
    *   The project is now **Firebase Ready**.
    *   `src/lib/db.ts` automatically detects if env variables are present.

3.  **Submission Workflow**:
    *   Submissions now go to the `submissions` collection in Firestore.
    *   **Next Step**: Create an "Admin Dashboard" (protected route) to verify these.

4.  **Styling**:
    *   Standard `Tailwind CSS`.

## 🛠️ Running Locally
```bash
npm install
npm run dev
```

Good luck! The foundation is solid.
