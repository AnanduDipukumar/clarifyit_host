import { BlogPost } from "../blogs";

export const BLOGS_PART_194: BlogPost[] = [
    {
        slug: "monte-carlo-simulation-random",
        title: "Solving Problems with Randomness: Monte Carlo",
        description: "How do you calculate the odds of a poker hand or the path of a nuclear neutron? You roll the dice a million times. The method named after a casino.",
        category: "Math",
        publishedAt: "2026-08-03",
        imageUrl: "/images/monte-carlo.png",
        tags: ["Math", "Statistics", "Deep Dive"],
        content: `
## Introduction: Stanislaw Ulam's Solitaire
Ulam was sick in bed. He played Solitaire.
He wondered: "What are the odds of winning?"
The math was too hard (Combinatorics).
So he thought: "What if I just play 1,000 games and count how many I win?"
This is the **Monte Carlo Method**.
Instead of solving the equation precisely, you simulate it randomly until you get an approximate answer.

## 1. Calculating Pi
Draw a square. Draw a circle inside it.
Throw 1,000 darts at it randomly.
Count how many hit the circle vs the square.
The ratio will equal Pi / 4.
You just calculated Pi by throwing darts.
This is the power of **Large Numbers**.

## 2. World War II
Ulam worked on the Manhattan Project.
They needed to know how neutrons moved through Uranium.
The equations were impossible.
So they used the ENIAC computer to run Monte Carlo simulations.
Today, we use it for everything: Stock market predictions, Weather forecasting, and AI training (AlphaGo).

> **One-Minute Summary**
>
> **The Monte Carlo Method** is a broad class of computational algorithms that rely on repeated random sampling to obtain numerical results. It is essentially solving deterministic problems using randomness. By simulating a process millions of times, you can approximate probability distributions that are impossible to calculate analytically.
        `,
    },
    {
        slug: "birthday-paradox-probability",
        title: "The Birthday Paradox",
        description: "You are at a party with 23 people. What are the odds that two of them share a birthday? 50%. How is that possible?",
        category: "Math",
        publishedAt: "2026-08-04",
        imageUrl: "/images/birthday-cake.png",
        tags: ["Math", "Statistics", "Puzzle"],
        content: `
## Introduction: Intuition Fails
There are 365 days in a year.
23 is a small number.
Your brain thinks: "The odds must be low. Maybe 5%?"
But the math says **50.7%**.
If you have 75 people, the odds are **99.9%**.
Why is our intuition so bad?

## 1. The Pairs
The trick is: We aren't checking if anyone matches *You*.
We are checking if *anyone* matches *anyone*.
With 23 people, person 1 can match 22 people.
Person 2 can match 21 people.
Total pairs = (23 * 22) / 2 = **253 pairs**.
The chance of *not* matching is (364/365).
Do that 253 times... and the probability of a "No Match" drops below 50%.

## 2. Hash Collisions
This isn't just a party trick.
It is the biggest danger in Computer Science security.
**Hash Collisions** (Birthday Attacks).
Even if a password hash is long, a hacker only needs to find *any* two inputs that produce the same hash.
The Birthday Paradox proves that collisions happen much faster than you expect.

> **One-Minute Summary**
>
> **The Birthday Paradox** is the counter-intuitive probability that in a set of n randomly chosen people, some pair of them will have the same birthday. It demonstrates that humans are bad at estimating exponents. In a group of just 23 people, there is a greater than 50% chance of a shared birthday.
        `,
    },
    {
        slug: "simpsons-paradox-statistics",
        title: "When the Data Lies: Simpson's Paradox",
        description: "Drug A cures men better than Drug B. Drug A cures women better than Drug B. But Drug B cures 'People' better than Drug A. Wait, what?",
        category: "Math",
        publishedAt: "2026-08-05",
        imageUrl: "/images/simpsons-paradox.png",
        tags: ["Math", "data", "Deep Dive"],
        content: `
## Introduction: The Berkeley Case
1973. UC Berkeley was sued for sexism.
44% of men were admitted.
35% of women were admitted.
Clear bias, right?
Then they looked at the individual departments.
*   Engineering: Women accepted at higher rate than men.
*   English: Women accepted at higher rate than men.
In almost every department, women did *better*.
How can the Global Average be worse?

## 1. The Lurking Variable
The women were applying to **hard departments** (English) with low acceptance rates.
The men were applying to **easy departments** (Engineering) with high acceptance rates.
Even though women won in every category, the *weight* of the categories skewed the total.
This is **Simpson's Paradox**.
A trend appears in different groups of data but disappears (or reverses) when these groups are combined.

## 2. Trust No Chart
This happens in medicine constantly.
"Hospital A has a higher death rate than Hospital B. Avoid it!"
But Hospital A is a Trauma Center. They get the gunshot victims.
Hospital B treats twisted ankles.
If you don't control for severity, the data lies.
You cannot trust an average without knowing the distribution.

> **One-Minute Summary**
>
> **Simpson's Paradox** is a phenomenon in probability and statistics in which a trend appears in several different groups of data but disappears or reverses when these groups are combined. It highlights the danger of **Confounding Variables** and the importance of stratified analysis rather than aggregating data blindly.
        `,
    },
    {
        slug: "seven-bridges-konigsberg-graph",
        title: "The Seven Bridges of Konigsberg",
        description: "Can you cross all 7 bridges in the city without crossing any twice? Euler proved you couldn't, and invented Graph Theory.",
        category: "Math",
        publishedAt: "2026-08-06",
        imageUrl: "/images/seven-bridges.png",
        tags: ["Math", "History", "Graph Theory"],
        content: `
## Introduction: The City Walk
Konigsberg (Prussia) had a river with two islands and 7 bridges.
The citizens played a game: Try to walk across all 7 without repeating one.
Nobody could do it.
Leonhard Euler (The Mozart of Math) looked at it in 1736.
He realized the map didn't matter. The distance didn't matter.
Only the **Connections** mattered.

## 1. Nodes and Edges
He drew dots (Land) and lines (Bridges).
This was the first **Graph** in history.
Euler's Rule: To cross every edge exactly once (Eulerian Path), a node must have an **Even** number of connections (Enter, Exit).
You can have at most 2 "Odd" nodes (Start, End).
In Konigsberg, *all 4* land masses had an Odd number of bridges (5, 3, 3, 3).
Therefore, it is impossible.

## 2. Network Science
This trivial puzzle birthed **Topology** and **Graph Theory**.
It is how Google Maps finds the shortest route.
It is how the Internet routes packets.
It is how we map social networks.
Euler proved that sometimes, the Geometry (Shape) doesn't matter, only the Connectivity does.

> **One-Minute Summary**
>
> **The Seven Bridges of Königsberg** is a historically notable problem in mathematics. Its negative resolution by **Leonhard Euler** in 1736 laid the foundations of **Graph Theory** and prefigured the idea of topology. He proved that for a path to traverse every edge once, the number of vertices with an odd degree must be zero or two.
        `,
    },
    {
        slug: "hilberts-hotel-infinity",
        title: "The Hotel with Infinite Rooms: Hilbert's Paradox",
        description: "The hotel is full. A guest arrives. 'No problem,' says the manager. He moves everyone to room N+1. Infinity is not a number.",
        category: "Math",
        publishedAt: "2026-08-07",
        imageUrl: "/images/hilbert-hotel.png",
        tags: ["Math", "Philosophy", "Deep Dive"],
        content: `
## Introduction: Full but Empty
Imagine a hotel with infinite rooms (1, 2, 3...).
Every room has a guest.
A new guest arrives.
In a normal hotel, he is turned away.
In Hilbert's Hotel, the manager says: "Guest 1, move to Room 2. Guest 2, move to Room 3."
Room 1 is now empty. The new guest moves in.
The hotel was full, but we fitted one more.

## 1. The Infinite Bus
Now an Infinite Bus arrives with infinite guests.
Manager: "Guest 1 -> Room 2. Guest 2 -> Room 4. Guest N -> Room 2N."
All the current guests are now in the Even rooms.
All the Odd rooms (1, 3, 5...) are empty.
We just fitted infinite people into a full hotel.

## 2. Cardinality
David Hilbert created this to explain that **Infinity is not a number**. It is a size.
Georg Cantor proved there are different *sizes* of infinity.
**Countable Infinity** (Integers 1, 2, 3) is the size of the Hotel.
**Uncountable Infinity** (Real numbers 1.01, 1.02) is larger.
If a bus of "Real Numbers" arrived... they wouldn't fit. Even Hilbert's Hotel has limits.

> **One-Minute Summary**
>
> **Hilbert's Grand Hotel** is a thought experiment which illustrates counterintuitive properties of infinite sets. It shows that a fully occupied hotel with countably infinite rooms can still accommodate an additional guest (or even infinite guests) by shifting existing occupants. It demonstrates that **Infinity + 1 = Infinity**.
        `,
    },
];
