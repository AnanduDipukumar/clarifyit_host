import { BlogPost } from "../blogs";

export const BLOGS_PART_37: BlogPost[] = [
    {
        slug: "how-survivorship-bias-works-planes",
        title: "The Bullet Holes: Survivorship Bias",
        description: "Why you should armor the parts of the plane that don't have bullet holes.",
        category: "Psychology",
        publishedAt: "2024-06-05",
        imageUrl: "/images/survivorship-bias-plane.png",
        tags: ["Psychology", "History", "Math"],
        content: `
## Abraham Wald
In WW2, the Navy looked at returning planes.
They saw bullet holes in the wings and tail.
They concluded: "Armor the wings and tail."
Abraham Wald (Mathematician) said: "**No. Armor the engine.**"
Why?
*   The planes with holes in the wings *survived*.
*   The planes with holes in the engine *crashed*. You aren't seeing them.
**Lesson:** Don't look at the successful people to find the recipe for success. Look at the failures to see what killed them.

## Deep Dive: The Missing Nulls
Data Science is obsessed with "Null Values."
In Survivorship Bias, the data isn't just missing; it is *systematically* excluded.
*   **Startups:** We see Bill Gates (dropout). We don't see the 1,000 dropouts who failed.
*   **Music:** We say "Music from the 80s was better." No, it wasn't. We only remember the Hits. The garbage was forgotten.
The bias occurs when the "Selection Process" destroys the evidence of failure.

> **One-Minute Summary**
> Survivorship bias is the logical error of focusing on things that made it past a selection process (survivors) and overlooking those that did not. This leads to false conclusions because the "failures" (which often hold the critical data) are invisible.
        `,
    },
    {
        slug: "how-dunning-kruger-works-confidence",
        title: "Mount Stupid: The Dunning-Kruger Effect",
        description: "Why incompetent people think they are experts. The graph of Confidence vs Knowledge.",
        category: "Psychology",
        publishedAt: "2024-06-06",
        imageUrl: "/images/dunning-kruger-graph.png",
        tags: ["Psychology", "Science", "Education"],
        content: `
## The Lemon Juice Bank Robber
In 1995, McArthur Wheeler robbed two banks with no mask.
He put lemon juice on his face.
He believed lemon juice = invisible ink, so logic dictated his face would be invisible to cameras.
He was shocked when arrested. "But I wore the juice!"
This inspired Dunning and Kruger.

### The Graph
1.  **Peak of Mount Stupid:** You know a little bit, so you think you know everything. (High Confidence).
2.  **Valley of Despair:** You learn more and realize how hard it actually is. (Low Confidence).
3.  **Slope of Enlightenment:** You slowly gain true expertise. (Moderate Confidence).
**True Experts:** They are often unsure because they know how much they *don't* know.

## Deep Dive: Metacognition
It isn't just arrogance. It is a "Double Burden."
Incompetence deprives you of the ability to:
1.  Do the task correctly.
2.  *Recognize* that you are doing it incorrectly.
To know that you are bad at grammar, you need to know the rules of grammar.
So, if you don't know grammar, you can't possibly know that you are bad at it. You think you are Shakespeare.

> **One-Minute Summary**
> A cognitive bias where people with low ability at a task overestimate their ability. It occurs because they lack the very expertise needed to recognize their own incompetence.
        `,
    },
    {
        slug: "how-anchoring-bias-works-price",
        title: "The First Number: Anchoring Bias",
        description: "Why menus have a $100 steak. It makes the $40 chicken look cheap.",
        category: "Psychology",
        publishedAt: "2024-06-07",
        imageUrl: "/images/anchoring-price-tag.png",
        tags: ["Psychology", "Business", "Economics"],
        content: `
## The Anchor
Your brain needs a reference point.
*   Question: "Is the population of Turkey greater than 100 million?"
    *   Your Guess: 80 million?
*   Question: "Is the population of Turkey greater than 10 million?"
    *   Your Guess: 20 million?
The first number you hear (The Anchor) magnetically pulls your estimate towards it, even if you know the number is irrelevant.
**Sales:** Retailers mark a watch as "$500" then cross it out and write "$200."
If they just wrote "$200," you might think it's expensive.
But compared to the $500 anchor, it feels like a steal.

## Deep Dive: Arbitrary Coherence
Dan Ariely did an experiment.
1.  Write down the last 2 digits of your Social Security Number (e.g., 89).
2.  "Would you pay $89 for this wine?" (No).
3.  "How much would you pay?"
People with high SSN digits (80-99) bid **3x more** than people with low digits (00-20).
The brain grabbed the random number (89) and used it as an Anchor for the price, even though SSNs have nothing to do with wine.

> **One-Minute Summary**
> A limited capacity for absolute judgment requires the brain to rely on relative comparisons. The first piece of information offered (the "anchor") sets a baseline, heavily influencing all subsequent decisions and estimates.
        `,
    },
    {
        slug: "how-sunk-cost-fallacy-works-investment",
        title: "Throwing Good Money After Bad: Sunk Cost",
        description: "Why you finish a terrible movie. Why you fix a broken car.",
        category: "Psychology",
        publishedAt: "2024-06-08",
        imageUrl: "/images/sunk-cost-money.png",
        tags: ["Psychology", "Economics", "Life"],
        content: `
## Past vs Future
Rational Decision: Look at Future Cost vs Future Benefit.
Irrational Decision: Look at Past Cost.
**Example:**
You spend $20 on a movie ticket.
10 minutes in, the movie is garbage.
*   **Rational:** Leave. Save 2 hours of your life.
*   **Irrational:** Stay. "I paid $20, I have to get my money's worth."
**Reality:** The $20 is gone. It is Sunk. Watching the movie costs you an *additional* 2 hours. You are paying twice.

## Deep Dive: Prospect Theory
Daniel Kahneman won a Nobel Prize for this.
Humans are **Loss Averse**, but when we are *already* losing, we become **Risk Seeking**.
"I already lost $1,000 at the casino. If I bet another $1,000, I might win it back."
Because the pain of the initial loss is so great, we make desperate, irrational bets to erase the loss, usually digging a deeper hole.

> **One-Minute Summary**
> The Sunk Cost Fallacy is the emotional tendency to continue an endeavor because we have already invested resources (time, money) in it, rather than evaluating whether the future costs outweigh the future benefits.
        `,
    },
    {
        slug: "how-confirmation-bias-works-echo",
        title: "The Filter Bubble: Confirmation Bias",
        description: "You don't Google things to find the truth. You Google to prove you are right.",
        category: "Psychology",
        publishedAt: "2024-06-09",
        imageUrl: "/images/confirmation-bias-search.png",
        tags: ["Psychology", "Internet", "Politics"],
        content: `
## The search query
*   Liberal googles: "Why tax cuts hurt the economy."
*   Conservative googles: "Why tax cuts help the economy."
Both find 1,000 articles proving them right.
Both think the other side is an idiot.
**The Brain:** We get a dopamine hit when we see information that agrees with us. We feel pain (Cognitive Dissonance) when we see information that disagrees.
So we subconsciously filter out the pain and seek the pleasure.
**Algorithms:** Facebook knows this. It shows you what you agree with to keep you scrolling. This creates an Echo Chamber.

## Deep Dive: The Backfire Effect
It gets worse.
When you show a conspiracy theorist facts that disprove their theory, they don't change their mind.
They dig in deeper.
Why? Because beliefs are tied to **Identity**.
"I am a smart person who knows the truth."
Attacking the belief attacks the Ego. The brain protects the Ego by rejecting the facts as "Fake News."
Debating often strengthens the bias you are trying to destroy.

> **One-Minute Summary**
> The human tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs. This leads to statistical errors and polarization, as contradictory evidence is ignored or dismissed.
        `,
    }
];
