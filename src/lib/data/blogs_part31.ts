import { BlogPost } from "../blogs";

export const BLOGS_PART_31: BlogPost[] = [
    {
        slug: "how-google-maps-works-dijkstra",
        title: "The Graph Problem: How Google Maps Works",
        description: "It doesn't scan every road. It uses Dijkstra's Algorithm.",
        category: "Computing",
        publishedAt: "2024-05-06",
        imageUrl: "/images/dijkstra-graph.png",
        tags: ["Computing", "Math", "Algorithms"],
        content: `
## Turn the World into a Graph
To a computer, a city is not streets. It is Nodes (Intersections) and Edges (Roads).
Each Edge has a **Weight** (Cost).
*   Distance (Length).
*   Speed Limit.
*   Traffic (Real-time data).
*   Tolls.

### Dijkstra's Algorithm (Priority Queue)
Imagine pouring water on the starting node.
The water spreads to the nearest neighbors first.
It keeps spreading, calculating the total cost to reach each node.
It finds the shortest path to *every* node until it hits the destination.
**A* (A-Star) Search:**
Dijkstra explores in a circle. A* is smarter. It explores *towards* the destination (using a Heuristic). It says, "Don't look North if the goal is South."

## Deep Dive: Contraction Hierarchies
Maps are too big for live calculation.
Google pre-calculates the "Hierarchy":
1.  **Highway:** High speed, few exits. (Priority 1).
2.  **Local Road:** Low speed, many lights. (Priority 5).
The algorithm ignores 99% of local roads. It races to get you onto the Highway network as fast as possible, travels the highway, and only looks at local roads again when you are near the destination.
This shrinks a graph of 50 million nodes down to a few thousand.

### Dijkstra's Algorithm (Priority Queue)
Imagine pouring water on the starting node.

> **One-Minute Summary**
> By converting the world into a mathematical graph of nodes and weighted edges, the software uses pathfinding algorithms (like A*) to prioritize roads that lead geographically towards the destination while minimizing total travel cost.
        `,
    },
    {
        slug: "how-spotify-shuffle-works-fisher-yates",
        title: "The Randomness Paradox: How Shuffle Works",
        description: "True randomness feels fake. Why Spotify had to make shuffle 'less random' to feel more random.",
        category: "Computing",
        publishedAt: "2024-05-07",
        imageUrl: "/images/shuffle-algorithm.png",
        tags: ["Computing", "Music", "Psychology"],
        content: `
## The Gambler's Fallacy
If you flip a coin and get Heads 5 times, you expect Tails next.
But random chance doesn't care. It can give you Heads again.
**Original Shuffle:** It was truly random.
**User Complaint:** "Why did I play 3 songs by the same artist in a row? This isn't random!"

### The Fisher-Yates Shuffle
To fix this, Spotify (and Apple) stopped using pure random selection.
They use a **Balanced Shuffle**.
1.  Take all songs by Artist A. Spread them out.
2.  Take all songs by Artist B. Fill the gaps.
3.  Ensure no two similar artists touch.
They engineered a pattern that *feels* unstructured to the human brain, even though it is highly structured.

## Deep Dive: Dithering
This is the same concept as "Dithering" in image processing.
If you randomly scatter black pixels on a white page, they clump together (Noise).
If you use **Blue Noise** (evenly spaced randomness), it looks smooth to the eye.
Spotify treats songs like pixels. It spaces out the "Artist A" pixels so the texture of the playlist feels smooth and varied, avoiding the "clumping" artifact of true randomness.

### The Fisher-Yates Shuffle
To fix this, Spotify (and Apple) stopped using pure random selection.

> **One-Minute Summary**
> Humans are bad at detecting randomness; we see patterns where none exist. To prevent "clumping" of songs by the same artist (which happens in true randomness), streaming services use algorithms that deliberately space out similar tracks.
        `,
    },
    {
        slug: "how-jpeg-works-dct",
        title: "Throwing Away Color: How JPEG Compression Works",
        description: "Your eye is bad at color but good at brightness. How to shrink a photo by 90%.",
        category: "Computing",
        publishedAt: "2024-05-08",
        imageUrl: "/images/jpeg-dct.png",
        tags: ["Computing", "Math", "Photography"],
        content: `
## Chroma Subsampling (YCbCr)
Your eye has 120 million Rods (Brightness) but only 6 million Cones (Color).
You notice blurry edges, but you don't notice blurry colors.
**Step 1:** Convert RGB to YCbCr (Luma + Chroma).
**Step 2:** Keep the Luma (Resolution) perfect. Delete 75% of the Color data.
Nobody notices.

### Discrete Cosine Transform (DCT)
This is the math magic.
It takes a block of 8x8 pixels.
It converts them into **Waves**.
*   Low Frequency Waves (Basic Gradients).
*   High Frequency Waves (Sharp Noise).
**Quantization:** It deletes the High Frequency waves (divides them by a large number and rounds to zero).
It turns out, detailed noise is irrelevant to the image.
You save space by storing only the "broad strokes" of the image.

## Deep Dive: Huffman Coding (Run Length Encoding)
After deleting the data, we compress what's left.
We don't write: \`0, 0, 0, 0, 0\`.
We write: \`5x0\`.
We prioritize frequent data.
*   Common signals are given short binary codes (e.g., \`10\`).
*   Rare signals are given long binary codes (e.g., \`1100101\`).
This is the final step that squeezes the file size down to 1/10th of the original.
This is the math magic.

> **One-Minute Summary**
> JPEG exploits the human eye's weakness. It separates brightness from color, discarding most of the color resolution. Then, it uses wave mathematics to delete the fine-grain texture details that you normally wouldn't perceive anyway.
        `,
    },
    {
        slug: "how-qr-codes-work-reed-solomon",
        title: "The Self-Repairing Barcode: How QR Codes Work",
        description: "You can rip off 30% of the code and it still scans.",
        category: "Technology",
        publishedAt: "2024-05-09",
        imageUrl: "/images/qr-code-error.png",
        tags: ["Technology", "Math", "Data"],
        content: `
## Positioning Markers
The three big squares in the corners tell the scanner:
1.  Here is the code.
2.  It is rotated 45 degrees.
3.  It is this big.

### Reed-Solomon Error Correction
This is the same math used on CDs and Voyager Space Probes.
It adds **Redundant Data**.
*   **Low Correction (L):** 7% redundancy. (Clean code).
*   **High Correction (H):** 30% redundancy. (You can put a logo in the middle or tear off a corner).
The scanner uses polynomial math to reconstruct the missing data from the remaining fragments.

## Deep Dive: Galois Fields
The math behind Reed-Solomon is hardcore.
It uses **Finite Field Arithmetic** ($GF(2^8)$).
In normal math, $5 + 5 = 10$.
In Galois Fields, numbers wrap around (like a clock) and certain operations are redefined.
This weird arithmetic allows us to generate "Parity Bytes" that mathematically describe the curve of the data.
If data points are missing, we can just extrapolate the curve to find where they *should* have been.

### Reed-Solomon Error Correction
This is the same math used on CDs and Voyager Space Probes.
This is why branded QR codes with pictures in the middle work. The picture is just "damage" to the code, but the error correction fixes it.

> **One-Minute Summary**
> A QR code contains the data plus a heavy layer of mathematical redundancy. This allows the scanner to solve an algebraic equation to fill in the blanks if parts of the code are dirty, damaged, or covered by a logo.
        `,
    },
    {
        slug: "how-netflix-recs-work-collaborative",
        title: "Finding Your Twin: How Netflix Recommendations Work",
        description: "It doesn't watch the movie. It watches you.",
        category: "Computing",
        publishedAt: "2024-05-10",
        imageUrl: "/images/collaborative-filtering.png",
        tags: ["Computing", "AI", "Data"],
        content: `
## Content vs Collaborative
*   **Content Filtering:** "You liked Batman. Here is Superman." (Because they are both 'Superhero' genre).
    *   Problem: It is shallow.
*   **Collaborative Filtering:** "You liked Batman. Who else liked Batman?"
    *   Step 1: Find 1,000 users who have the exact same watch history as you. (Your Twins).
    *   Step 2: See what *they* watched that you haven't.
    *   Step 3: Recommend that.

### The Matrix Factorization
Netflix builds a giant grid.
*   Rows: 200 Million Users.
*   Columns: 50,000 Movies.
Most of the grid is empty.
They use Linear Algebra (SVD) to fill in the blanks.
"Based on the pattern, User A *would* rate movie X 4 stars."
It predicts your rating before you watch it.

## Deep Dive: Dimensionality Reduction (SVD)
The grid is too big to compute directly.
They compress it using **Singular Value Decomposition (SVD)**.
It boils users down to "Latent Factors" (Hidden Categories).
*   User A: 0.9 Action, 0.1 Romance.
*   Movie X: 0.8 Action, 0.2 Comedy.
By multiplying the User Vector by the Movie Vector, you get the Match Score.
The AI doesn't know what "Action" is. It just found a mathematical pattern that groups explosions together.

### The Matrix Factorization
Netflix builds a giant grid.

> **One-Minute Summary**
> The algorithm ignores the content of the movie. Instead, it analyzes the behavior of millions of users to identify "taste clusters." It suggests movies liked by other people who statistically share your exact viewing habits.
        `,
    }
];
