# ClarifyIt.in - Handover Documentation

> **Status**: Feature Complete (Demo/Local Mode)
> **Goal**: A beginner-friendly educational blog simplifying science and engineering.

## 🌟 Overview
ClarifyIt is a Next.js 16 web application designed to teach complex topics using analogies, diagrams, and intuition. It is built to be fast, responsive, and interactive.

## ✨ Key Features Implemented
1.  **Content Engine**:
    *   **Markdown Support**: Blogs are written in Markdown with support for Graphs, LaTeX Math (`$$ E=mc^2 $$`), and Syntax Highlighting.
    *   **Tags & Categories**: Deep categorization system.
    *   **Search**: Real-time fuzzy search by Title, Description, and Tags.
2.  **User Experience (UX)**:
    *   **Smart Filtering**: Filter by "AND/OR" logic, Case-insensitive matching, and text matching modes (substring, prefix, etc.).
    *   **Persistence**: Filter settings, sort preferences, and active tags are saved in `localStorage`.
    *   **Contextual Navigation**: "Next" and "Previous" buttons on blog posts respect the user's current search filters.
3.  **Personalization (Local Storage)**:
    *   **Favorites**: Users can bookmark blogs (Click Heart icon). Saved to `localStorage`.
    *   **History**: Tracks visited pages. Viewable at `/history`.
    *   **View Counts**: Simulated view incrementing (stored locally).
4.  **Community**:
    *   **Submission System**: A "Contribute" page (`/submit`) allowing users to draft blogs. Currently mocks a submission by saving to `localStorage`.

## 📂 Project Structure (For the Next AI)

### `src/app`
*   `page.tsx`: **Home Page**. Handles the main search grid, filter logic state, and maps `BlogCard` components.
*   `blog/[slug]/page.tsx`: **Blog Post**. Dynamic route. Uses `ReactMarkdown` to render content. Includes `BlogPostClient` for interactive features (Views, History, Favorites).
*   `favorites/page.tsx`: Displays saved blogs.
*   `history/page.tsx`: Displays visited blogs.
*   `submit/page.tsx`: Form for user submissions.

### `src/components`
*   `SearchSection.tsx`: The complex search bar. Contains the "Advanced Filters" toggle, Tag inputs, and Sort controls. Handles logic for `matchMode` and `matchLogic`.
*   `BlogCard.tsx`: The grid item. Handles "Share" and "Favorite" actions internally to prevent click conflicts.
*   `Sidebar.tsx`: Mobile and Desktop navigation.
*   `OnboardingGuide.tsx`: The "Welcome" modal.

### `src/lib` (CRITICAL)
*   **`blogs.ts`**: **THE CONTENT SOURCE**. This file exports `INITIAL_BLOGS`, a hardcoded array of all blog posts. **To add new blogs, append objects here.**
*   `db.ts`: A mock database layer. It checks for `localStorage` data first. If missing, it falls back to defaults. Designed to be easily swapped for Firebase.
*   `filter.ts`: Centralized logic for filtering blogs.
*   `favorites.ts`, `history.ts`, `submissions.ts`: Utilities handling specific `localStorage` keys (`clarifyit_favorites`, etc.).

## 🤖 Instructions for the Next AI
**Welcome, Colleague!** Here is the state of the project:

1.  **Adding Content**:
    *   Do NOT create new MDX files. We are using a simpler approach.
    *   Open `src/lib/blogs.ts`.
    *   Add a new object to the `INITIAL_BLOGS` array.
    *   Follow the existing schema: `slug`, `title`, `content` (Markdown string), `tags`, `category`.
    *   Images go in `public/images/` and are referenced as `/images/filename.png`.

2.  **Backend Integration**:
    *   Currently, `src/lib/db.ts` acts as a facade.
    *   To make this "Real", you need to replace the `localStorage` calls in `db.ts`, `favorites.ts`, etc., with actual API calls (Firebase/Supabase).
    *   The UI components (`LikeButton`, `ViewCounter`) are already async-ready.

3.  **Submission Workflow**:
    *   Currently, submissions in `/submit` just vanish into `localStorage`.
    *   **Next Step**: Create an "Admin Dashboard" page that reads these pending submissions and allows moving them into the real database.

4.  **Styling**:
    *   We use `Tailwind CSS`.
    *   Global styles are in `src/app/globals.css`.
    *   Dark mode is handled by `next-themes` (class strategy).

## 🚀 Running Locally
```bash
npm install
npm run dev
```

Good luck! The foundation is solid.
