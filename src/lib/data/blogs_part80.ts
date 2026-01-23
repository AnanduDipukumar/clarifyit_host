import { BlogPost } from "../blogs";

export const BLOGS_PART_80: BlogPost[] = [
    {
        slug: "prisoners-dilemma-nash-equilibrium",
        title: "The Logic of Betrayal: Prisoner's Dilemma",
        description: "Two bank robbers are arrested. If they both stay silent, they walk free. But math proves they will betray each other. John Nash and the Cold War.",
        category: "Game Theory",
        publishedAt: "2025-04-05",
        imageUrl: "/images/prisoners-dilemma.png",
        tags: ["Game Theory", "Math", "Psychology", "Deep Dive"],
        content: `
## Introduction: The Setup
You and your partner are in separate interrogation rooms. The police have no evidence for the heist, only for a minor gun charge.
**The Offer:**
1.  **If you both stay silent (Cooperate):** You both get 1 year. (Best outcome for group).
2.  **If you betray him (Defect) and he stays silent:** You go free. He gets 20 years. (Best outcome for you).
3.  **If you both Defect:** You both get 5 years.
**The Paradox:**
You think: "If he stays silent, I should defects (Free vs 1 year). If he defects, I should defect (5 years vs 20 years)."
No matter what he does, **Defecting** is the rational choice.
He thinks the same.
So you both Defect. You both get 5 years.
Instead of the 1 year you could have had.
Rational self-interest leads to a worse collective outcome.

## 1. Nash Equilibrium
John Nash (A Beautiful Mind) proved that in any game, there is a point where no player can improve their payoff by changing their strategy alone.
In Prisoner's Dilemma, "Both Defect" is the Nash Equilibrium.
Once you are there, you are stuck.
**Real World:**
*   **Arm Races:** US vs USSR. We would both be richer if we didn't build 50,000 nukes. But if I stop and you don't... I lose. So we both build them.
*   **Climate Change:** Every country benefits if we *all* cut CO2. But if I cut and you don't, I lose money and you get rich. So we both pollute.

## 2. Iterated Prisoner's Dilemma (Robert Axelrod)
What if we play the game 100 times?
In 1980, Axelrod held a tournament.
The winner was a simple code called **Tit-for-Tat**.
Rule:
1.  Start by Cooperating (Nice).
2.  Then copy whatever the opponent did last turn.
If you hit me, I hit you back (Retaliation).
If you apologize, I forgive you (Forgiveness).
This strategy beat the "Always Defect" and "Always Cooperate" bots.
It proved that **Cooperation** can evolve in a selfish world through reciprocity.

## 3. The Tragedy of the Commons
A village has a shared pasture.
If everyone grazes 1 cow, the grass grows back.
If I graze 2 cows, I get double milk. The grass dies a little.
My gain is +1. The cost is shared by everyone (-0.1).
Rational choice: Graze more.
Result: The field turns to desert. Everyone starves.
Solution: **Regulation** (Government) or **Privatization** (Property Rights).

### Fact Box
*   **Golden Balls:** A British TV game show played Prisoner's Dilemma for £100,000. One contestant famously told the other: "I am going to Steal (Defect). Trust me. If you Split (Cooperate), I will give you half afterwards." This confused the opponent into Splitting, and then he Split too. He hacked the Nash Equilibrium by removing the choice.
        `,
    },
    {
        slug: "chicken-game-nuclear-war",
        title: "Swerve or Die: The Game of Chicken",
        description: "Two cars drive at each other. The first to swerve is the Chicken. The best way to win is to throw your steering wheel out the window.",
        category: "Game Theory",
        publishedAt: "2025-04-06",
        imageUrl: "/images/chicken-game.png",
        tags: ["Game Theory", "War", "Politics", "Deep Dive"],
        content: `
## Introduction: James Dean
In *Rebel Without a Cause*, they drive toward a cliff.
Unlike Prisoner's Dilemma (where Mutual Defection is 5 years), Mutual Defection here is **Death**.
If neither swerves -> Crash.

## 1. The Strategy of Irrationality
How do you win?
You have to convince the other guy you are **Crazy**.
If he thinks you are suicidal, he *must* swerve to save himself.
**Commitment Device:**
If you rip your steering wheel off and wave it out the window...
You signal: "I physically cannot swerve."
The opponent sees this. He has no choice but to swerve. You win.
**MAD (Mutually Assured Destruction):**
The US and USSR built "Doomsday Machines" (automated retaliation).
"If you nuke us, the computer automatically nukes you back. We can't stop it."
This ensures safety... theoretically.

## 2. Brinkmanship
Thomas Schelling (Nobel Prize).
The art of pushing to the very edge of disaster without falling over.
**Cuban Missile Crisis:**
JFK and Khrushchev played Chicken.
JFK set up a blockade (The Steering Wheel removal). "If you cross this line, we shoot."
Khrushchev swerved (turned the ships around).
But it was close. One Soviet sub captain almost fired a nuke.
Brinkmanship relies on the other guy being rational. If he isn't... Boom.

## 3. Zero-Sum vs Non-Zero-Sum
**Zero-Sum:** Poker. If I win $100, you lose $100. Total = 0. Pure conflict.
**Non-Zero-Sum:** Trade. I sell you apples for shoes. We both eat and walk. Total > 0. Cooperation possible.
Diplomacy is about trying to turn Zero-Sum games into Non-Zero-Sum games (e.g., integrating economies so war becomes unprofitable).

### Fact Box
*   **Dr. Strangelove:** The movie satirized this. The Doomsday Machine is only a deterrent *if you tell people about it*. The Soviets built it but forgot to announce it. Useleess.
        `,
    },
    {
        slug: "pareto-efficiency-wealth",
        title: "The 80/20 Rule: Pareto Efficiency",
        description: "Why 20% of the peapods produce 80% of the peas. Why 20% of people own 80% of land. A universal law of distribution.",
        category: "Game Theory",
        publishedAt: "2025-04-07",
        imageUrl: "/images/pareto-curve.png",
        tags: ["Game Theory", "Economics", "Stats", "Deep Dive"],
        content: `
## Introduction: The Garden
Vilfredo Pareto (1906) was gardening.
He noticed 20% of his pods had 80% of the peas.
He looked at Italy's land ownership. 20% of people owned 80% of land.
He looked at everything.
**The Power Law:**
Inputs and Outputs are rarely 1:1. They are non-linear.
*   20% of criminals commit 80% of crimes.
*   20% of bugs cause 80% of software crashes.
*   20% of customers provide 80% of revenue.

## 1. Pareto Efficiency (The Optimality)
In economics, a state is **Pareto Efficient** if:
"You cannot make anyone better off without making someone else worse off."
Imagine a pizza.
If I eat the whole pizza and you get none... it IS Pareto Efficient.
Why? Because to give you a slice, I have to lose a slice.
**Efficiency vs Equity:**
Efficiency considers *waste*, not *fairness*.
If I throw the pizza in the trash, that is Pareto Inefficient (wasted utility).
If I eat it all, it is Efficient (no waste), but Unfair.
Economics creates Efficient markets. Politics creates Fair outcomes (Taxation).

## 2. The Matthew Effect
"To those who have, more will be given."
Why does the 1% get richer?
**Accumulative Advantage.**
If you have $10M, you can invest in high-risk Hedge Funds (20% return).
If you have $10, you put it in a Savings Account (0.1% return).
The rich get better opportunities.
This leads to a Power Law distribution ($y = x^{-a}$).
Massive inequality is the *natural state* of a free dynamic system.
It takes energy (Revolution/Tax) to redistribute it.

### Fact Box
*   **Language:** The most common word ("the") is used 2x more than the second ("of") and 3x more than the third. Zipf's Law. It's the same math as wealth distribution.
        `,
    },
    {
        slug: "auction-theory-winners-curse",
        title: "The Winner's Curse: Auction Theory",
        description: "Winning an auction usually means you overpaid. How Google and Facebook sell ads in milliseconds using Vickrey Auctions.",
        category: "Game Theory",
        publishedAt: "2025-04-08",
        imageUrl: "/images/auction-gavel.png",
        tags: ["Game Theory", "Economics", "Business", "Deep Dive"],
        content: `
## Introduction: The Jar of Coins
Fill a jar with coins. Ask 100 people to guess the value.
Average guess: Accurate.
Winning bid: Way too high.
If the real value is $50, someone will guess $80.
If they bid $80, they "Win" the jar... but lose $30.
This is the **Winner's Curse**.
In oil field auctions, the winner is usually the company that most overestimated the amount of oil. They go bankrupt first.

## 1. Second-Price Auction (Vickrey)
How to fix this?
In a standard (English) auction, you shout prices.
In a **Sealed Bid Second-Price Auction**:
Everyone writes down their max bid.
The highest bidder wins.
**BUT:** They only pay the price of the *Second Highest* bid.
Example:
Alice bids $10. Bob bids $8.
Alice wins, but pays $8.01.
**Why?**
It effectively forces you to bid your **True Value**.
If you bid lower, you lose. If you bid higher, you risk overpaying.
There is no incentive to lie (bluff).
eBay uses this (Proxy Bidding).

## 2. Ad Auctions (Google)
Every time you search "Insurance", an auction happens in 100 milliseconds.
Geico, State Farm, Allstate bid for the top slot.
They use a generalized Second-Price Auction (GSP).
They pay just enough to beat the guy below them.
This generates Google's $200 Billion revenue. It is the most profitable game theory engine in history.

### Fact Box
*   **Spectrum Auctions:** Governments sell radio frequencies (5G) to Telcos. They hire game theorists to design the rules to maximize revenue. In 2000, the UK 3G auction raised £22 Billion (5x estimate) because the rules trapped the companies in a bidding war they couldn't escape.
        `,
    },
    {
        slug: "mechanism-design-kidney-exchange",
        title: "Market without Money: Kidney Exchanges",
        description: "You need a kidney. Your wife wants to donate but she's the wrong blood type. Alvin Roth used game theory to build a swap chain that saves thousands.",
        category: "Game Theory",
        publishedAt: "2025-04-09",
        imageUrl: "/images/kidney-swap.png",
        tags: ["Game Theory", "Medicine", "Nobel Prize", "Deep Dive"],
        content: `
## Introduction: The Repugnancy
Buying kidneys is illegal. (Repugnant Market).
So we have a shortage. People die waiting.
Alvin Roth (Nobel 2012) asked: "How can we clear the market without money?"

## 1. The Pairwise Exchange
You (Type A) need a kidney.
Wife (Type B) wants to donate to you, but can't (Incompatible).
Bob (Type B) needs a kidney.
Husband (Type A) wants to donate to Bob, but can't.
**The Swap:**
Your Wife gives to Bob.
Bob's Husband gives to You.
Everyone lives. No money changes hands.
It is a **Barter**.

## 2. The Chain (Dominoes)
What if we have an Altruistic Donor (Good Samaritan) who just gives to anyone?
He gives to Patient A.
Patient A's incompatible donor gives to Patient B.
Patient B's donor gives to Patient C...
This chain can go on for 30 people.
**The Problem:**
It has to happen *simultaneously*.
If Donor A gives, and then Donor B backs out ("reneges"), Patient A got a kidney and Patient B is screwed.
So 60 people go into surgery at the exact same time across 10 hospitals. It is a logistical miracle.

## 3. The Deferred Acceptance Algorithm (Stable Marriage)
Roth also fixed Medical Residencies.
Thousands of Med Students need jobs at Hospitals.
Hospitals need Students.
Old system: Hospitals made exploding offers ("Accept in 1 minute or it's gone"). Chaos.
New system (The Match):
Students rank hospitals. Hospitals rank students.
The algorithm runs.
It guarantees a **Stable Match**: No student and hospital would prefer each other over their assigned match.
Result: 95% satisfaction.
Game theory saves lives.

### Fact Box
*   **Dating Apps:** Tinder uses similar algorithms (Elo score / Gale-Shapley) to show you people of similar "Desirability" rank to maximize matching. You are being played by an economist.
        `,
    },
];
