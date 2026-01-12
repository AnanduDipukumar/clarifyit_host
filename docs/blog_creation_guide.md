# ClarifyIt Blog Creation Guide

This document serves as the **Single Source of Truth** for creating new blog posts for ClarifyIt. Follow these guidelines to ensure consistency in tone, visual style, and technical structure.

## 1. Philosophy & Tone
*   **Target Audience**: High school students and curious beginners.
*   **Goal**: "Click" moments. The reader should feel smart after reading.
*   **Tone**: Conversational, enthusiastic, and "fresh". Avoid robotic or dry academic language.
    *   *Bad*: "Voltage is the potential difference between two points."
    *   *Good*: "Imagine Voltage as the pressure inside a water pipe pushing the water forward."
*   **The "Reinvent" Rule**: When introducing a formula, do not just state it. Derive it logically from real-world intuition so the reader feels they could have invented it themselves.

## 2. Visual Formatting (Markdown Features)
We use special CSS styling triggered by standard Markdown elements. Use them as follows:

### A. Colored "Note" Boxes
Use the Blockquote syntax (`>`) to create a highlighted box with a blue border. Use this for:
*   Key Concepts / Definitions
*   "Aha!" moments
*   Common Misconceptions (Myths vs Facts)

**Markdown:**
```markdown
> **Key Concept:** Voltage is the pressure, Current is the flow.
```

### B. Math Equations
Use LaTeX syntax wrapped in double dollar signs `$$` for centered, styled equation cards.
**Markdown:**
```markdown
$$ V = I \times R $$
```
*Note: Ensure you escape backslashes if writing inside a JavaScript string (e.g., `\\times`).*

### C. Images
Images should be placed **immediately after the analogy** they illustrate.
**Markdown:**
```markdown
![Description of Diagram](/images/your-image-name.png)
```

## 3. Standard Article Structure
Every article must follow this flow:
1.  **The Hook**: A real-world problem or confusing scenario.
2.  **The Analogy**: A non-technical comparison (Water, Traffic, etc.).
3.  **The Visual**: A diagram illustrating the analogy.
4.  **Reinventing the Math**: Deriving the formula from the analogy.
5.  **Common Misconceptions**: A specific section debunking myths.
6.  **Summary**: Bullet points of the key takeaways.

## 4. Technical Steps (Adding a Blog)

### Step 1: Generate the Diagram
*   **Tool**: AI Image Generator (or custom design).
*   **Style**: Clean, 2D vector art, schematic-like, white background (or transparent), educational.
*   **Location**: Save to `public/images/`.

### Step 2: Add Code to `src/lib/blogs.ts`
Add a new object to the `INITIAL_BLOGS` array.

#### **Copy-Paste Template:**

```typescript
  {
    slug: "your-topic-slug", // URL-friendly (e.g., "what-is-gravity")
    title: "Your Catchy Title",
    description: "A one-sentence hook for the card preview.",
    category: "Physics", // or Math, Chemistry, Engineering
    publishedAt: "2023-10-26", // YYYY-MM-DD
    imageUrl: "/images/your-image.png",
    content: \`
## The Hook
Start with a question or a relatable problem. Why does this concept exist?

> **Core Idea:** A one-sentence summary of the answer in a highlighted box.

### The Analogy (The "Aha!" Moment)
Explain the concept using something everyone knows (Cars, Water, Money, etc.).

![Descriptive Alt Text](/images/your-image.png)

### Reinventing the Math
Don't just give the formula. Build it.

1.  If variable A goes up, result B goes up.
2.  Therefore:
$$ B \\propto A $$

### Common Misconceptions

> **Myth:** "State the common wrong belief here."
>
> **Fact:** Correct it simply. Explain *why* people get it wrong.

### Summary
*   **Point 1**: Simple takeaway.
*   **Point 2**: Another takeaway.
    \`,
  },
```

## 5. Checklist for Reviewer
- [ ] Is the tone conversational?
- [ ] Is there a "Note" box (`>`)?
- [ ] Is the math derived, not just stated?
- [ ] Is there a "Misconceptions" section?
- [ ] Does the code build? (Check for unescaped backticks \` inside the content string).
