# Blog Creation Guide

## Core Philosophy
We do not just explain *what* something is. We explain *why it matters*, *how it works* (using a mental model), and *where it breaks*. The goal is "Brain-Fullness": the user should feel satisfied and smarter, with no lingering doubts.

## A. Structural Diversity (Preventing AI Fatigue)
*   **Vary Narrative Structure:** No two consecutive articles should have the same intro style, same analogy placement, or same section order.
*   **Avoid Formulaic Patterns:** Do not always start with "Have you ever wondered...". Use anecdotes, cold hard facts, or surprising paradoxes.

## B. Mandatory Sections
Each article **MUST** include at least **3 of these 5** sections:
1.  **Mental Model:** A concrete analogy (e.g., "JPEG is a photocopier, PNG is a teleporter").
2.  **Common Misconception:** What 90% of people get wrong.
3.  **Why This Is Counterintuitive:** Why the obvious answer is wrong.
4.  **Where This Breaks Down:** Edge cases where the technology fails or the analogy stops working.
5.  **One-Minute Summary:** A distinct, high-value takeaway (not just a conclusion).

## C. Visual-First Thinking
*   **Descriptive Prompts:** Even if images are placeholders, describe the diagram in such detail that a human artist could draw it perfectly from the text alone.
*   **Visual Analogies:** The text itself should conjure images (e.g., "The electron avalanche is like a room full of mousetraps").

## D. SEO & Content Depth
*   **Titles:** Human-curious, click-worthy but honest (e.g., "The Radioactive Guard" vs "How Smoke Detectors Work").
*   **Subtitles:** Search-friendly.
*   **FAQ Schema:** Anticipate user questions.
*   **Quotable Summary:** A short, punchy sentence optimized for AI citations/snippets.
*   **Go Deep:** Don't stop at the surface. Explain the *mechanism*. Close loopholes. Even experts should learn a nuance (e.g., "Why does the zipper fix itself if you squeeze the slider?").

## E. Formatting & Technical
*   **No Raw HTML:** Use standard Markdown.
    *   *Bad:* `<div className="...">`
    *   *Good:* `> **Mental Model Summary**` (Blockquotes)
*   **Length:** Content must be substantial. "Too short" is a failure. Aim for comprehensive coverage.

## Checklist
- [ ] **Topic Selection**: Choose a topic that is technically interesting but common enough to be relatable.
- [ ] **Mental Model**: Identify a core analogy.
- [ ] **Drafting**: Write the content in a conversational, "friendly engineer" tone.
- [ ] **Review**: Ensure it meets the quality standards (accuracy, clarity, engagement).

## Format
Each blog post should be a TypeScript object in `src/lib/blogs.ts` with the following structure:
- `slug`: URL-friendly string.
- `title`: Catchy title with the mental model in parentheses.
- `description`: 2-sentence hook + the analogy.
- `category`: Broad tag (technology, science, etc.).
- `publishedAt`: Future date.
- `imageUrl`: Placeholder path + COMMENT with detailed image generation prompt.
- `tags`: Array of related keywords.
- `content`: Markdown string. Use `> **Mental Model**` for callouts.
