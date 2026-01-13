# Future Roadmap: Migrating to User Accounts

**Current State**: V1.0 (Anonymous / No-Account Architecture)
**Future Goal**: V2.0 (User Accounts & Cloud Sync)

This document outlines the current architecture and the specific steps required to upgrade `Clarifyit.in` to a full user-account system without losing data.

---

## 🏗️ Current Architecture (V1.0)

| Feature | Where it lives | Persistence | Privacy |
| :--- | :--- | :--- | :--- |
| **Favorites** | `localStorage` (Browser) | Device-only | Private to device |
| **Playlists** | `localStorage` (Browser) | Device-only | Private to device |
| **History** | `localStorage` (Browser) | Device-only | Private to device |
| **Likes/Views** | Firebase Firestore | Global | Public (Anonymous) |
| **Submissions** | Firebase Firestore | Global | Public ID (No Auth check) |

---

## 🚀 Migration Plan (V2.0)

When you are ready to add "Login with Google", follow these phases.

### Phase 1: Enable Authentication
1.  **Firebase Console**: Go to **Build** -> **Authentication**.
2.  Enable **Google Sign-In**.
3.  **Code Changes**:
    *   Install `firebase/auth`.
    *   Create a `AuthContext.tsx` to listen for login state (`onAuthStateChanged`).
    *   Add a "Login" button in the Header.

### Phase 2: Data Synchronization (The Tricky Part)
Currently, users have data (favorites/playlists) on their device. When they log in, we must **upload** that data to the cloud.

**Implementation Logic**:
1.  **On First Login**:
    *   Check `localStorage` for `clarifyit_favorites` and `clarifyit_playlists`.
    *   Identify the user's new Cloud ID (`uid`).
    *   **Merge** local items into the Firestore path: `users/{uid}/favorites` and `users/{uid}/playlists`.
    *   Clear `localStorage` (or keep as cache).

### Phase 3: Database Schema Updates
You will need to create a new `users` collection.

**New Firestore Structure**:
```text
/users/{uid}
    /favorites  (Collection)
        - {blogSlug}: { addedAt: timestamp }
    /playlists  (Collection)
        - {playlistId}: { title: "Exam Prep", blogs: [...] }
    /profile    (Doc)
        - email: "user@gmail.com"
        - role: "user" (or "admin")
```

### Phase 4: Security Rules Update
Once Auth is live, you must lock down the database.

**New Rules**:
```javascript
match /posts/{slug} {
  allow read: if true; // Public
  allow write: if false; // Only Cloud Functions should update views/likes to prevent spam
}

match /users/{uid}/{document=**} {
  allow read, write: if request.auth != null && request.auth.uid == uid; // Only owner can touch their data
}

match /submissions/{id} {
  allow create: if request.auth != null; // Must be logged in to submit
}
```

---

## ⚠️ Potential Bottlenecks & Limits

### Vercel (Hobby Plan)
*   **Builds**: 6,000 minutes/month. (Approx. 3,000 deployments). **Correction**: You will never hit this unless you deploy every 10 minutes 24/7.
*   **Bandwidth**: 100 GB/month. (Enough for ~50,000 - 100,000 visitors/month depending on image sizes).
*   **Serverless Functions**: 10 seconds execution limit. (Fine for our app).

### Firebase (Spark Plan - Free)
*   **Reads**: 50,000 / day. (If you get viral, you might hit this).
*   **Writes**: 20,000 / day.
*   **Storage**: 1 GB total.

**Verdict**: The current setup handles roughly **1,000 - 2,000 daily active users** for free. If you grow beyond that, you will need to pay standard cloud rates (pay-as-you-go).
