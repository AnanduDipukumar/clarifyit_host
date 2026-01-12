# ClarifyIt.in

> **Explained Simply.** A beginner-friendly educational platform explaining complex scientific concepts with analogies, diagrams, and "reinvented" math.

## 🎯 Objective
To create a high-quality educational blog that:
1.  **Simplifies Complexity**: Uses real-world analogies (Water for Voltage, Traffic for Resistance) to explain abstract physics/engineering topics.
2.  **Visualizes Concepts**: Uses custom diagrams for every major concept.
3.  **Teaches "Why"**: Derives formulas from scratch to build intuition rather than rote memorization.
4.  **Debunks Myths**: Directly addresses common misconceptions.

## 🛠️ How We Achieved It (Architecture)
The project is built as a highly optimized, static-first web application:

*   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) for server-side rendering and SEO.
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with a custom design system (Note boxes, Math cards).
*   **Content**: Markdown-based CMS. Blogs are written in TypeScript/Markdown with:
    *   **Math Support**: `KaTeX` for beautiful equation rendering (`$$ E=mc^2 $$`).
    *   **Typography**: `@tailwindcss/typography` for clean reading experience.
*   **Theming**: `next-themes` for robust Light/Dark mode toggling.
*   **Interactivity**:
    *   **Search & Filter**: Real-time filtering on the client side.
    *   **Engagement**: Like buttons and View counters (currently running in Demo Mode using LocalStorage).

## ⏳ What is Pending?
*   **Real Database Connection**: The app currently uses a "Mock Database" (saving data to your browser's LocalStorage) so you can test it immediately. To persist data across users, you need to connect it to Firebase (see instructions below).
*   **Contact/About Pages**: Placeholder links exist, but dedicated pages can be added.

---

## 🚀 How to Launch & Develop (From Another Laptop)

### Prerequisites
*   [Node.js](https://nodejs.org/) (Version 18 or higher) installed.
*   [Git](https://git-scm.com/) installed.

### Steps
1.  **Clone the Repository**
    ```bash
    git clone <your-private-repo-url>
    cd Clarifyit.in
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # This installs Next.js, React, Tailwind, and all other required tools.
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Adding New Content**
    *   See [`docs/blog_creation_guide.md`](docs/blog_creation_guide.md) for a detailed template and style guide.
    *   Simply add new blog objects to `src/lib/blogs.ts` and add images to `public/images/`.

---

## 📦 Deployment Instructions

The easiest way to deploy this Next.js app is **Vercel**.

1.  **Push to GitHub**: Make sure this code is in your GitHub repository.
2.  **Go to Vercel**: Sign up/Log in at [vercel.com](https://vercel.com).
3.  **Add New Project**: Click "Add New..." -> "Project".
4.  **Import Repository**: Select your `Clarifyit.in` repo.
5.  **Deploy**: Keep all default settings and click **Deploy**.

Vercel will automatically detect Next.js, build the site, and host it on a global CDN.

---

## 🔌 Connecting Real Firebase (Optional)
To move from "Demo Mode" to a real shared database:

1.  Create a project at [Firebase Console](https://console.firebase.google.com/).
2.  Add a Web App and copy the configuration keys.
3.  Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=xxx
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
    NEXT_PUBLIC_FIREBASE_APP_ID=xxx
    ```
4.  Restart the dev server (`npm run dev`). The app will auto-detect the keys and switch to Firebase.
