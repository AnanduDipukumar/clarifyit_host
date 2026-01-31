import { BlogPost } from "../blogs";

export const BLOGS_PART_328: BlogPost[] = [
    {
        slug: "monty-hall-problem-change-door",
        title: "Always Change The Door: Monty Hall",
        description: "3 Doors. 1 Car. 2 Goats. You pick Door 1. Monty opens Door 3 (Goat). Should you switch to Door 2? The math says YES.",
        category: "Math",
        publishedAt: "2028-04-18",
        imageUrl: "/images/monty-hall-goats.png",
        tags: ["Math", "Probability", "Paradox", "Ultimate Guide"],
        content: `
## Introduction: Marilyn vos Savant
1990. Parade Magazine.
Marilyn said: "Switching doubles your chances."
10,000 PhDs wrote her angry letters. "You are wrong! It's 50/50!"
She was right. They were wrong.

## 1. The Logic
*   **Door 1 (Your pick):** 1/3 Chance of Car.
*   **Doors 2+3 (Other):** 2/3 Chance of Car.
Monty opens Door 3 (Goat).
He essentially eliminates a wrong answer from the "Other" group.
The 2/3 chance now sits entirely on Door 2.
Door 1 is still 1/3.
Door 2 is now 2/3.
Switching doubles your odds.

## 2. Why it is hard
Our brains assume new information (opening a door) resets the odds to 50/50.
It doesn't.
Monty **knows** where the car is. He *must* reveal a goat.
This constraint leaks information.

## 3. The 100 Door Version
Imagine 100 doors. You pick door 1.
Monty opens 98 other doors, all showing goats, leaving only Door 77 closed.
Are you lucky enough to pick the 1/100 right door? Or is the car probably behind Door 77 (99/100 chance)?
You switch.

> **One-Minute Summary**
>
> The **Monty Hall Problem** is a counter-intuitive probability puzzle. Because the host (Monty) knows the location of the prize and is forced to reveal a "Goat" door, he essentially concentrates the remaining probability onto the unchosen door. Switching confers a 2/3 probability of winning, while staying remains at 1/3.
        `,
    },
    {
        slug: "benfords-law-fraud-detection-v2",
        title: "How to Catch Fraud with Math: Benford's Law",
        description: "Look at any list of real numbers (Tax returns, Populations, Rivers). The number 1 appears 30% of the time. The number 9 only 4%. If your data doesn't fit this curve, you are lying.",
        category: "Math",
        publishedAt: "2028-04-19",
        imageUrl: "/images/benfords-law-graph.png",
        tags: ["Math", "Crime", "Statistics", "Ultimate Guide"],
        content: `
## Introduction: The First Digit
Write down random numbers? No.
Real world data follows a pattern.
*   Leading Digit is 1: **30.1%**
*   Leading Digit is 2: **17.6%**
*   ...
*   Leading Digit is 9: **4.6%**
This is **Benford's Law**.

## 1. Why?
Growth is exponential.
To get from 100 to 200 (Lead digit 1), you need to double (100% growth).
To get from 900 to 1000 (Lead digit 9), you only need 11% growth.
You stay in "1-land" much longer than "9-land".
It applies to stock prices, city populations, even lengths of rivers.

## 2. Catching Crooks
When people fake tax returns, they pick numbers randomly.
"Um... expense is $932."
They assume all numbers are equal. They use too many 7s and 8s.
The IRS runs Benford's Law on your return.
If the curve is wrong... Audit.
It was used to detect the Enron fraud and Greek debt crisis.

> **One-Minute Summary**
>
> **Benford's Law** states that in many naturally occurring datasets, the leading digit is likely to be small. The number 1 appears about 30% of the time, while 9 appears less than 5%. Forensic accountants use this weird property to detect made-up figures in financial statements, as humans are bad at generating truly random naturalistic numbers.
        `,
    },
    {
        slug: "gamblers-fallacy-roulette",
        title: "Red Came Up 5 Times. Black is Due! (No it isn't)",
        description: "The most dangerous belief in Vegas. The universe implies no memory. The wheel does not care about the past.",
        category: "Math",
        publishedAt: "2028-04-20",
        imageUrl: "/images/roulette-wheel.png",
        tags: ["Math", "Psychology", "Gambling", "Ultimate Guide"],
        content: `
## Introduction: Monte Carlo 1913
The most famous night in gambling history.
The roulette ball landed on Black. Then Black again.
10 times. 15 times.
Gamblers rushed to bet on Red. "It HAS to switch!"
It hit Black **26 times in a row**.
Millions were lost betting on Red.

## 1. Independent Events
The coin has no memory.
The odds of Tails are always 50%.
Even if you flipped Heads 1000 times.
The **Gambler's Fallacy** is the belief that nature will "Correct" itself in the short run.

## 2. Law of Large Numbers
"But it has to average out to 50/50!"
Yes. Over **Infinity**.
In the short run, streaks happen.
The universe doesn't owe you a Tails.

## 3. Reverse Fallacy (Hot Hand)
In basketball, we think a player who hit 3 shots is "Hot".
Statistically, they usually aren't.
We see patterns in noise.
Casinos install screens showing the "Last 10 Numbers" just to trigger this fallacy in your brain.

> **One-Minute Summary**
>
> The **Gambler's Fallacy** is the erroneous belief that if a particular event occurs more frequently than normal during the past, it is less likely to happen in the future. In reality, independent events (like dice or roulette) have no memory. The odds reset every spin.
        `,
    },
    {
        slug: "birthday-problem-paradox",
        title: "The Birthday Paradox",
        description: "In a room of just 23 people, there is a 50% chance two share a birthday. In a room of 75, it's 99.9%. Your intuition is bad at exponents.",
        category: "Math",
        publishedAt: "2028-04-21",
        imageUrl: "/images/birthday-cake-math.png",
        tags: ["Math", "Probability", "Party Trick", "Ultimate Guide"],
        content: `
## Introduction: The Bet
You are at a party with 30 people.
Bet $10 that two people share a birthday.
People will take that bet. "30 days vs 365 days? No way."
You will win 70% of the time.

## 1. The Math (Pairs)
We aren't looking for *Your* birthday match.
We are looking for *Any* match.
*   Person 1 compares with 29 others.
*   Person 2 compares with 28 others.
In a room of 23 people, there are **253 pairs**.
The chance of *no one* matching drops very fast.

## 2. Collision Attack
This matters for Cryptography.
"Hash Collisions".
You don't need to guess the password.
You just need to find *another* input that produces the same Hash.
The Birthday Paradox proves that collisions happen much faster than we expect.
It is why we need long keys (256-bit).

> **One-Minute Summary**
>
> The **Birthday Paradox** is veridical (true but counter-intuitive). It arises because the number of possible *pairs* of people grows quadratically with the number of people ($N^2$). With just 23 people, the probability of a shared birthday exceeds 50%.
        `,
    },
    {
        slug: "st-petersburg-paradox-utility",
        title: "The Game You Shouldn't Play: St. Petersburg Paradox",
        description: "I flip a coin. If Heads, I pay $2. If Tails, I flip again for $4. Then $8. Then $16. How much would you pay to play? The math says 'Everything you own'.",
        category: "Economics",
        publishedAt: "2028-04-22",
        imageUrl: "/images/coin-flip-infinity.png",
        tags: ["Math", "Economics", "Risk", "Ultimate Guide"],
        content: `
## Introduction: Infinite Value
The pot doubles every flip.
*   50% chance of $2 = $1 value.
*   25% chance of $4 = $1 value.
*   12.5% chance of $8 = $1 value.
Total Expected Value = $1 + $1 + $1 ... = **Infinity**.
Mathematically, you should sell your house to play this game once.

## 1. Reality
But you wouldn't pay more than $20.
Why?
1.  **Marginal Utility:** The first billion dollars is awesome. The second billion is boring. "Infinite money" isn't infinitely useful to a human.
2.  **The Bank Goes Broke:** No casino has infinite money. If you flip heads 50 times, the casino owes you more money than exists in the universe.
They can't pay. So the value is capped.

## 2. Risk Aversion
Daniel Bernoulli solved this in 1738.
He invented **Utility Theory**.
We don't maximize "Dollars". We maximize "Utility" (Happiness).
The risk of losing your life savings weighs more than the tiny chance of winning billions.
This is the foundation of modern Economics and Insurance.

> **One-Minute Summary**
>
> The **St. Petersburg Paradox** describes a lottery game with an infinite expected dollar value, yet no rational person would pay a large sum to enter. It led to the development of **Expected Utility Theory**, distinguishing between objective wealth and subjective satisfaction (Utility).
        `,
    },
];
