import { BlogPost } from "../blogs";

export const BLOGS_PART_41: BlogPost[] = [
    {
        slug: "how-grandfather-paradox-works-causality",
        title: "Killing Your Ancestor: The Grandfather Paradox",
        description: "If you kill your grandfather, you are never born. So you can't kill him.",
        category: "Philosophy",
        publishedAt: "2024-06-25",
        imageUrl: "/images/grandfather-paradox.png",
        tags: ["Philosophy", "Time", "Logic"],
        content: `
## The Loop
1.  You travel back in time.
2.  You kill your grandfather before he has kids.
3.  Therefore, your father is never born.
4.  Therefore, YOU are never born.
5.  Therefore, you cannot travel back in time to kill him.
6.  Therefore, he lives.
7.  Therefore, you are born.
8.  Go to step 1.

### Solutions
*   **Novikov Self-Consistency Principle:** The universe will physically prevent you from doing it (gun jams, you slip).
*   **Multiverse:** You don't kill *your* grandfather. You kill *a* grandfather in a parallel timeline. You can never return to your original timeline.

## Deep Dive: Closed Timelike Curves (CTCs)
General Relativity *technically* allows time travel.
If you rotate a black hole fast enough, space-time drags so much it loops back on itself.
This is a CTC.
But Stephen Hawking instituted the "Chronology Protection Conjecture."
He argued that vacuum fluctuations would build up on the "Horizon" of the time machine and destroy it before you could enter.
Nature protects itself from paradoxes.

> **One-Minute Summary**
> A logical contradiction arising from time travel: changing the past in a way that prevents the travel itself. It suggests that either time travel is impossible, or that timelines branch off into parallel universes to accommodate the change.
        `,
    },
    {
        slug: "how-ship-of-theseus-works-identity",
        title: "The Replaced Plank: Ship of Theseus",
        description: "If you replace every part of a car, is it the same car? Are you the same person?",
        category: "Philosophy",
        publishedAt: "2024-06-26",
        imageUrl: "/images/ship-of-theseus.png",
        tags: ["Philosophy", "Logic", "Identity"],
        content: `
## The Thought Experiment
Theseus has a ship.
Every year, he replaces one rotten plank.
After 10 years, **every single part** has been replaced.
Is it the same ship?
**The Twist:** If you took all the old rotten planks and built a ship out of them... which one is the *real* Ship of Theseus?
**You:** Your cells die and are replaced every 7 years. You are not made of the same matter as you were as a baby. Are you the same person?

## Deep Dive: The Teleporter Problem
Star Trek transporters scan you, destroy you, and rebuild you on the planet.
Is the person on the planet *you*?
Or did *you* die, and a clone took your place?
If the machine failed to destroy the original, there would be two of you.
Which one is the "Real" you?
Most philosophers argue that continuity of consciousness is an illusion. You die every time you go to sleep.

> **One-Minute Summary**
> A paradox questioning determining identity. If an object has all of its components replaced over time, does it remain the same object? It challenges our definition of "self" as either continuous history or physical material.
        `,
    },
    {
        slug: "how-fermi-paradox-works-aliens",
        title: "The Great Silence: The Fermi Paradox",
        description: "There are billions of stars. Where is everyone?",
        category: "Space",
        publishedAt: "2024-06-27",
        imageUrl: "/images/fermi-paradox.png",
        tags: ["Space", "Aliens", "Statistics"],
        content: `
## The Math
*   Milky Way has 400 Billion stars.
*   Even if 0.1% have life, that's millions of civilizations.
*   The universe is 13 billion years old.
*   Civilizations should have colonized the galaxy by now.
**But we see zero.** (The Great Silence).

### The Great Filter
There must be a hurdle that is impossible to cross.
*   **Behind Us:** Maybe life is incredibly rare (We won the lottery).
*   **Ahead of Us:** Maybe all advanced civilizations destroy themselves with nukes/AI before leaving their planet. (We are doomed).
*   **Dark Forest:** They are there, but they are hiding because there is a super-predator out there.

## Deep Dive: Von Neumann Probes
Why is the silence so deafening?
Because it only takes **one** civilization to fill the galaxy.
If you build a robot that can:
1.  Go to a star.
2.  Mine an asteroid.
3.  Build 2 copies of itself.
It grows exponentially ($2, 4, 8, 16...$).
Even at slow speeds, these probes would colonize every star in the Milky Way in just 10 million years.
The universe is 13,000 million years old.
Where are the probes?

> **One-Minute Summary**
> The contradiction between the high probability of extraterrestrial life and the complete lack of evidence for it. It suggests that a "Great Filter" destroys civilizations at a certain stage of development, or that we are the first to survive this far.
        `,
    },
    {
        slug: "how-twin-paradox-works-relativity",
        title: "Aging Slower: The Twin Paradox",
        description: "One twin flies to space. The other stays. When they meet, one is younger.",
        category: "Physics",
        publishedAt: "2024-06-28",
        imageUrl: "/images/twin-paradox.png",
        tags: ["Physics", "Time", "Space"],
        content: `
## Moving Clocks Run Slow
Special Relativity says time slows down when you move fast ($t' = t / \sqrt{1-v^2/c^2}$).
1.  Alice stays on Earth.
2.  Bob flies at 99% light speed to Alpha Centauri and back.
3.  Bob thinks only 1 year passed.
4.  Alice thinks 10 years passed.
**Bob is now 9 years younger than his twin.**
**The Paradox:** From Bob's perspective, Earth was moving away. Why isn't Alice younger?
**The Solution:** Bob **Accelerated** (turned around). Acceleration breaks the symmetry. Bob felt the G-force; Alice didn't. Therefore, Bob is the one whose time slowed.

## Deep Dive: Gravity vs Speed
It isn't just speed. **Gravity** slows time too.
*   **GPS Satellites:** They move fast (Time slows by 7 microseconds/day).
*   **Altitude:** They are far from Earth's gravity (Time speeds up by 45 microseconds/day).
*   **Net Result:** They run 38 microseconds *fast* every day.
If engineers didn't program Einstein's equations into the GPS satellites, Google Maps would be off by 10km within a day.

> **One-Minute Summary**
> A consequence of Special Relativity where an astronaut traveling at near-light speed ages slower than their twin on Earth. The symmetry is broken because the astronaut undergoes acceleration, changing their inertial frame of reference.
        `,
    },
    {
        slug: "how-banach-tarski-works-infinity",
        title: "Infinite Chocolate: The Banach-Tarski Paradox",
        description: "Math proves you can cut a ball into 5 pieces and reassemble them into TWO identical balls.",
        category: "Math",
        publishedAt: "2024-06-29",
        imageUrl: "/images/banach-tarski.png",
        tags: ["Math", "Infinity", "Logic"],
        content: `
## 1 = 2
It sounds like magic. It violates physics (Conservation of Mass).
But in **Math** (Set Theory), it is true.
It relies on **Infinity**.
A solid ball contains an infinite number of points.
If you rotate specific subsets of these points, you can map the infinity onto two spheres.
**The Catch:** The pieces you cut are so complex (non-measurable sets) that they look like a cloud of dust, not solid slices. You can't do this with real gold atoms because atoms are finite.

## Deep Dive: Axiom of Choice
This paradox broke math.
It relies on a controversial rule called the **Axiom of Choice**.
It basically says: "If you have an infinite number of bins, you can pick one item from each bin, even if you don't have a rule for how to pick it."
If you accept this rule, you get 1 = 2.
If you reject this rule, a lot of modern calculus falls apart.
Mathematicians decided to keep the rule and just accept that infinity is weird.

> **One-Minute Summary**
> A theorem in set-theoretic geometry which states that a solid ball can be decomposed into a finite number of disjoint parts, which can then be reassembled to form two identical copies of the original ball. It works only in mathematical theory, not physical reality.
        `,
    }
];
