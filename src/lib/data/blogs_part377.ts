import { BlogPost } from "../blogs";

export const BLOGS_PART_377: BlogPost[] = [
    {
        slug: "monty-hall-problem-explained",
        title: "The Monty Hall Problem: The Math Problem That Broke The Internet",
        description: "In 1990, a magazine columnist solved a simple game show puzzle. 10,000 PhDs wrote her angry letters saying she was wrong. She wasn't.",
        category: "Science",
        publishedAt: "2028-12-17",
        imageUrl: "/images/monty-hall-doors.png",
        tags: ["Science", "Math", "Logic", "Ultimate Guide"],
        content: `
## The Scenario

Game Show: *Let's Make a Deal*.
Host: **Monty Hall**.
**3 Doors.**
Behind one door: A Car (Ferrari).
Behind two doors: Goats.
Phase 1: You pick Door 1.
Phase 2: Monty (who knows what is where) opens Door 3. It reveals a Goat.
Phase 3: Monty asks: **"Do you want to switch to Door 2?"**
**Question: Should you Switch, Stay, or does it not matter?**

---

## 1. The Controversy

**Marilyn vos Savant** (Guinness Record for highest IQ) wrote in *Parade* magazine:
**"Yes. You should switch. It doubles your chances."**
The backlash was insane.
University Professors wrote to her:
*"You are the goat!"*
*"As a professional mathematician, I can tell you it is 50/50. There are two doors left. One car. 50%."*

---

## 2. The Solution

Marilyn was right. The PhDs were wrong.
**Stay Case:** You win ONLY if you picked the car initially. (1/3 Chance).
**Switch Case:** You win if you picked a Goat initially. (2/3 Chance).
Because Monty *must* remove a goat, switching effectively swaps your single door for *both* the other doors.
If you switch, you get the 2/3 probability of the other two doors combined.

---

## 3. Conclusion

It reveals a flaw in the human brain. We are terrible at **Conditional Probability**.
We ignore the fact that Monty *knows* the answer. His choice adds information.

---

## 4. FAQ

**Q: What if Monty opens a door randomly?**
**A:** Then it IS 50/50. The paradox relies on Monty *intentionally* revealing a goat.

**Q: Did the professors apologize?**
**A:** Some "ate crow" publicly. Others stayed silent.
        `,
    },
    {
        slug: "banach-tarski-paradox",
        title: "Banach-Tarski: How To Turn One Apple Into Two",
        description: "It sounds like magic. Math proves that you can cut a ball into 5 pieces and reassemble them into TWO identical balls. Physics says 'No'.",
        category: "Science",
        publishedAt: "2028-12-18",
        imageUrl: "/images/banach-tarski.png",
        tags: ["Science", "Math", "Physics", "Ultimate Guide"],
        content: `
## The Theorem

1924. Stefan Banach and Alfred Tarski.
They proved:
You can take a solid sphere.
Decompose it into a finite number of disjoint sets (pieces).
Move them (rotate/translate).
Reassemble them.
Result: Two solid spheres, each identical in volume to the original.
**Creation of Matter?**

---

## 1. The Trick (Infinity)

The "Pieces" are not slices like an orange.
They are **Point Sets**.
They are infinitely complex scatters of points.
The paradox relies on the **Axiom of Choice**.
Because a ball contains infinite points, "Infinity times 2" is still Infinity.
You are essentially mapping the points to double the volume.

---

## 2. Reality Check

Why can't I do this with gold?
Because Gold is made of Atoms.
Atoms are finite.
The "Pieces" required for Banach-Tarski are non-measurable. They are smaller than atoms.
So, Physics is safe. Conservation of Mass holds.
But in the abstract world of Math? Anything goes.

---

## 3. Conclusion

It is the most famous counter-intuitive result in Set Theory.
It forces us to ask: Is Math discovered (Real) or invented (Fiction)?
If Banach-Tarski is true, maybe Math is just a game we made up.

---

## 4. FAQ

**Q: Can you visualize it?**
**A:** No. Steps involved non-measurable sets which are impossible to draw.

**Q: What is the Axiom of Choice?**
**A:** A rule in logic that says you can pick one item from every set in an infinite collection of sets. It is controversial.
        `,
    },
    {
        slug: "gabriels-horn-paradox",
        title: "Gabriel's Horn: The Paint Paradox",
        description: "Imagine a trumpet that is infinitely long. You can fill it with a cup of paint. But you can never paint the outside. How is that possible?",
        category: "Science",
        publishedAt: "2028-12-19",
        imageUrl: "/images/gabriels-horn.png",
        tags: ["Science", "Math", "Calculus", "Ultimate Guide"],
        content: `
## The Shape

Take the graph of **y = 1/x**.
Start at x=1 and go to Infinity.
Rotate it around the x-axis.
You get a horn (Torricelli's Trumpet).

---

## 1. The Math

Using Calculus (Integrals):
**Volume:** Integral of Pi*(1/x)^2 dx. Result = **Pi**. (Finite).
**Surface Area:** Integral of 2*Pi*(1/x) dx. Result = **Infinity**.

**The Paradox:**
1.  Since the Volume is Pi, I can pour 3.14 units of paint into it, and it will be full.
2.  Since the Surface Area is Infinite, if I try to paint the surface, I will need infinite paint.
**So... if I fill it, isn't the inside surface painted?**
Yes.
So I painted an infinite surface with finite paint?

---

## 2. The Solution

Physical paint has thickness.
As the horn gets thinner (towards infinity), it becomes thinner than a paint molecule.
So "real" paint can't enter the end of the horn.
But mathematically (0 thickness paint), the paradox holds.
It shows that "Area" and "Volume" scale differently at infinity.

---

## 3. Conclusion

This broke the brains of 17th Century thinkers (Hobbes).
They thought it disproved Geometry.
Actually, it just proved Calculus keeps score differently.

---

## 4. FAQ

**Q: Does it exist?**
**A:** Only in your mind.

**Q: Who is Gabriel?**
**A:** The Archangel. The horn represents the trumpet blown at Judgment Day.
        `,
    },
    {
        slug: "moving-sofa-problem",
        title: "The Moving Sofa Problem: Unsolved Geometry",
        description: "Moving day. You have a hallway with a 90-degree corner. What is the largest possible sofa area that can fit around the turn?",
        category: "Science",
        publishedAt: "2028-12-20",
        imageUrl: "/images/moving-sofa.png",
        tags: ["Science", "Math", "Funny", "Ultimate Guide"],
        content: `
## The Setup

Corridor width = 1.
Corner = 90 degrees.
You can twist and turn the shape.
What is the max area (A)?

---

## 1. The Contenders

1.  **Unit Square:** Area = 1. (Easy).
2.  **Semicircle:** Radius 1. Area = Pi/2 (~1.57). (Better).
3.  **Hammersley's Sofa (1968):** A phone-handset shape (semicircle with a rectangular hole). Area = 2.2074.
4.  **Gerver's Sofa (1992):** A slightly smoothed version. Area = **2.2195**.

---

## 2. The Mystery

Is Gerver's Sofa the winner?
**We don't know.**
Nobody has proved it is the maximum.
Nobody has found a bigger one.
It is an "Open Problem" in mathematics.
Imagine: We can calculate the mass of a black hole, but we can't calculate the optimal couch.

---

## 3. Conclusion

It highlights the complexity of variations.
There are infinite possible shapes. Testing them all requires new math we haven't invented yet.

---

## 4. FAQ

**Q: Does 3D matter?**
**A:** Yes. In 3D (pivoting up), you can fit bigger things. (Pivot Pivot!). But the math problem is strictly 2D.

**Q: Why do we care?**
**A:** Robot motion planning. (Roomba navigation).
        `,
    },
    {
        slug: "millennium-prize-problems",
        title: "The Man Who Turned Down $1 Million",
        description: "The Clay Mathematics Institute offers $1,000,000 for solving 7 problems. Grigori Perelman solved one, then quit math and moved in with his mom.",
        category: "Science",
        publishedAt: "2028-12-21",
        imageUrl: "/images/perelman-poincare.png",
        tags: ["Science", "Math", "Money", "Ultimate Guide"],
        content: `
## The Rewards

Year: 2000.
The Clay Institute listed 7 "Millennium Prize Problems".
(e.g., P vs NP, Riemann Hypothesis, Navier-Stokes).
Reward: **$1 Million Each**.

---

## 1. The Poincaré Conjecture

The Problem: "Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere."
In English: If you wrap a rubber band around an apple, you can shrink it to a point. If you wrap it around a donut, you can't. Can we prove the Universe is an apple, not a donut?
It stumped wizards for 100 years.

---

## 2. Grigori Perelman

2002. A Russian mathematician posted a proof on the internet (arXiv).
He didn't publish in a journal. He just emailed a link to friends.
It took the world 4 years to verify it.
**It was correct.**
He won the **Fields Medal** (The Nobel of Math). He declined it. ("I don't want to be a mascot").
He won the **$1 Million**. He declined it.
Quote: *"I know how to control the universe. Why would I run to get a million?"*

---

## 3. Where is he now?

He quit mathematics.
He lives in a mood, small apartment in St. Petersburg with his elderly mother.
He plays ping-pong and refuses interviews.
He is the ultimate pure genius.

---

## 4. FAQ

**Q: Are the others solved?**
**A:** No. 6 remain unsolved.

**Q: What is Navier-Stokes?**
**A:** Understanding fluid turbulence. If you solve it, we can predict weather perfectly.
        `,
    }
];
