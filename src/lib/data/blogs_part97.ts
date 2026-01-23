import { BlogPost } from "../blogs";

export const BLOGS_PART_97: BlogPost[] = [
    {
        slug: "prisoners-dilemma-iterated-tit-for-tat",
        title: "Nice Guys Finish First: The Iterated Prisoner's Dilemma",
        description: "In a one-off game, you should betray your friend. In a long game, you should cooperate. How math proves kindness is the best survival strategy.",
        category: "Game Theory",
        publishedAt: "2025-07-01",
        imageUrl: "/images/prisoners-dilemma.png",
        tags: ["Game Theory", "Math", "Sociology", "Deep Dive"],
        content: `
## Introduction: The Snitch
Two criminals (Alice and Bob) are arrested.
Interrogated separately.
*   If Both stay Silent: 1 year jail each. (Global Optimum).
*   If Alice Talks (Betrays) and Bob stays Silent: Alice goes free, Bob gets 10 years.
*   If Both Talk: 5 years jail each (Nash Equilibrium).
**The Logic:**
Alice thinks: "If Bob stays silent, I should Talk (0 years vs 1). If Bob talks, I should Talk (5 years vs 10)."
No matter what Bob does, Alice should Talk.
Bob thinks the same.
Result: Both Talk. Both get 5 years.
Rationality leads to a bad outcome.

## 1. The Tournament (Robert Axelrod)
What if you play the game 100 times in a row?
In 1980, Robert Axelrod held a computer code contest.
People submitted algorithms.
"Always Defect" (Mean). "Always Cooperate" (Saint). "Random".
**The Winner:**
**Tit-for-Tat.** (Written by Anatol Rapoport).
4 lines of code.
Rule 1: Be Nice (Start by Cooperating).
Rule 2: Copy the opponent's last move.
If they hit you, you hit back instantly. If they apologize, you forgive instantly.

## 2. Why it Won
It is **Nice** (never strikes first -> no unnecessary war).
It is **Provocable** (punishes bad behavior -> no exploitation).
It is **Forgiving** (stops the cycle of revenge).
It beats "Always Defect" because it cooperates with other Nice programs to gain mutual points.

## 3. Biology (Vampire Bats)
Vampire bats share blood.
If a bat fails to find blood one night, another bat regurgitates some for it.
But they remember.
If Bat A refuses to share with Bat B... next week, Bat B refuses to share with Bat A.
Nature evolved Tit-for-Tat.
Altruism isn't just moral; it's mathematically optimal.

### Fact Box
*   **WWI Truce:** In the trenches, soldiers stopped shooting at dinner time. "Live and Let Live". If a sniper broke the truce, the other side shelled them heavily (Retaliation). The Generals hated this cooperation and rotated troops to break the bonds.
        `,
    },
    {
        slug: "nash-equilibrium-traffic",
        title: "Why We Don't Swerve: Nash Equilibrium",
        description: "John Nash (A Beautiful Mind) discovered a state where nobody regrets their decision. It explains traffic, cold wars, and biological evolution.",
        category: "Game Theory",
        publishedAt: "2025-07-02",
        imageUrl: "/images/nash-equilibrium.png",
        tags: ["Game Theory", "Math", "Nobel Prize", "Deep Dive"],
        content: `
## Introduction: The Bar Scene
The movie *A Beautiful Mind* explains it wrong (Go for the blonde? No.).
**Definition:**
A Nash Equilibrium is a situation where *no player can improve their result by changing their strategy alone*.
They are stuck.

## 1. Driving on the Right
Everyone drives on the Right side of the road.
If I decide to switch to the Left alone... I die.
So I stay Right.
Everyone else thinks the same.
Result: Stable Equilibrium.
Driving on the Left (UK) is *also* a Nash Equilibrium.
But mixing them is chaos.

## 2. The Dress Code
You are going to a party. Formal or Casual?
If you wear a Suit and everyone is in T-shirts... you feel awkward.
If you wear a T-shirt and everyone is in Suits... you feel awkward.
Everyone tries to guess the group average.
We usually end up in a mediocre middle ground (Business Casual) that nobody really likes, but nobody wants to deviate from.

## 3. Evolution Stable Strategy (ESS)
John Maynard Smith applied Nash to Biology.
**Hawk vs Dove.**
Hawk fights for food. Dove shares.
If everyone is a Dove, a single Hawk wins everything (Invades the system).
If everyone is a Hawk, they kill each other (Negative payoff).
The population settles at a stable ratio (e.g., 70% Hawk, 30% Dove).
Any mutation that deviates from this ratio gets punished by natural selection.

### Fact Box
*   **Braess's Paradox:** Sometimes, *adding* a road makes traffic worse. Why? Because the new road changes the Nash Equilibrium. Selfish drivers rush to the new shortcut, clog it, and ruin the flow for everyone. Closing a road can actually speed up traffic.
        `,
    },
    {
        slug: "tragedy-of-the-commons-overfishing",
        title: "Cowboys and Climate Change: Tragedy of the Commons",
        description: "If a pasture is open to everyone, it will be destroyed. Why individual greed leads to collective ruin.",
        category: "Game Theory",
        publishedAt: "2025-07-03",
        imageUrl: "/images/tragedy-commons.png",
        tags: ["Game Theory", "Economics", "Environment", "Deep Dive"],
        content: `
## Introduction: The Pasture
1833. William Forster Lloyd.
A village has a common field.
Every herdsman wants to add +1 cow.
Benefit: He gets 100% of the milk/meat from the extra cow.
Cost: The grass is eaten (-1). The damage is shared by *all* 100 villagers. (Cost to me: -0.01).
Result: +1 vs -0.01.
Rational decision: Add the cow.
Everyone does this.
The field turns to mud. The cows die.

## 1. Ocean Overfishing
The Ocean is a Common.
If China catches all the Tuna... Japan gets none.
So Japan tries to catch them *before* China does.
It is a "Race to the Bottom".
We have wiped out 90% of large predatory fish.

## 2. Elinor Ostrom (The Solution)
Hardin said the only solution is **Privatization** (Fences) or **Government Tyranny** (Laws).
Elinor Ostrom (Nobel Prize) disagreed.
She studied Swiss farmers and Japanese fishermen.
They solved it without laws.
**Social Norms.**
If you take too much fish, the village shuns you. You lose reputation.
Local communities can manage commons *if* they communicate and trust each other.
Global Commons (Atmosphere/CO2) are harder because 8 Billion people can't talk in a village hall.

## 3. Space Junk
Low Earth Orbit is a Common.
Elon Musk launches 40,000 satellites.
It costs him nothing to use the orbit.
But the risk of collision (Kessler Syndrome) is shared by everyone.
There is no "Space Police" to stop him.

### Fact Box
*   **The Easter Island:** The Rapa Nui people cut down every tree on their island to roll giant statues (Moai). Once the trees were gone, they couldn't build canoes to fish. They starved and resorted to cannibalism. A perfect tragedy of a closed system.
        `,
    },
    {
        slug: "chicken-game-brinkmanship-cuban-missile",
        title: "Swerve or Die: The Game of Chicken",
        description: "Two cars drive head-on. Who swerves first? The logic of nuclear deterrence and why acting crazy is a winning strategy.",
        category: "Game Theory",
        publishedAt: "2025-07-04",
        imageUrl: "/images/chicken-game.png",
        tags: ["Game Theory", "War", "Politics", "Deep Dive"],
        content: `
## Introduction: James Dean
In *Rebel Without a Cause*, they drive toward a cliff.
First to jump out is a "Chicken" (Coward). -10 points.
If neither jumps... Death. -1000 points.
If you jump and he doesn't... You lose (-10), he wins (+10).

## 1. Commitment Strategy
How to win?
Take the steering wheel... and throw it out the window.
Now your opponent *knows* you can't swerve.
He *must* swerve to save his life.
By removing your own options, you force his hand.
**Example:** Burning the ships (Cortés). Soldiers fight harder because they can't retreat.

## 2. Madman Theory (Nixon)
Nixon wanted the Viet Cong to think he was crazy.
"I can't control Nixon! He has his finger on the nuke button!" (Kissinger told diplomats).
If the enemy thinks you are irrational and willing to die... they will yield.
Putin uses this today. "I might use tactical nukes."
Is he bluffing? Or is he crazy? The uncertainty is the weapon.

## 3. Cuban Missile Crisis (1962)
JFK vs Khrushchev.
US Ships blockaded Cuba.
Soviet Ships approached.
If US sinks them -> WW3.
If Soviet crosses line -> WW3.
They stared at each other.
"We're eyeball to eyeball, and I think the other fellow just blinked."
Khrushchev turned the ships around.
Why? Because JFK had "thrown the wheel out" by putting the blockade on TV. He couldn't back down without political suicide.

### Fact Box
*   **The Doomsday Machine:** In *Dr. Strangelove*, the Russians build a machine that automatically nukes the world if attacked. It cannot be turned off. It is the ultimate Commitment Device. The only problem? They forgot to tell the Americans about it.
        `,
    },
    {
        slug: "pareto-efficiency-80-20-rule",
        title: "The Good Deal: Pareto Efficiency",
        description: "Vilfredo Pareto noticed 20% of Italians owned 80% of the land. His principle defines when an economy is 'Efficient'.",
        category: "Game Theory",
        publishedAt: "2025-07-05",
        imageUrl: "/images/pareto-chart.png",
        tags: ["Game Theory", "Economics", "Math", "Deep Dive"],
        content: `
## Introduction: The Peas
Pareto also noticed 20% of the pods in his garden contained 80% of the peas.
**The 80/20 Rule.**
20% of customers = 80% of profit.
20% of bugs = 80% of crashes.

## 1. Pareto Efficiency
A state is **Pareto Efficient** if:
"You cannot make anyone better off without making someone else worse off."
**Example:**
I have an Apple. You have a Banana.
I like Bananas. You like Apples.
Current state: Not Efficient.
Trade: I give Apple -> You give Banana.
Result: We are BOTH happier.
This is a **Pareto Improvement**.
Once we have the fruit we want... no more trades can help us without hurting one of us. That is the Efficient Frontier.

## 2. Efficiency vs Fairness
A Dictator owning 100% of the wealth is **Pareto Efficient**.
Why?
Because to give $1 to a poor person, you must take $1 from the Dictator (making him worse off).
Pareto Efficiency does *not* mean Moral Justice.
It just means "No waste".
Capitalism is great at Pareto Efficiency. It is bad at Equity.

## 3. Deadweight Loss
Taxes create inefficiency.
I want to buy a coffee for $3.
Cost to make: $2.
Profit: $1. Trade happens.
**Tax:** Gov adds $1.50 tax. Price is $3.50.
I walk away.
The trade *doesn't happen*.
The Cafe loses profit. I lose coffee. Gov gets $0 tax.
Everyone loses. This is **Deadweight Loss**.

### Fact Box
*   **Zero Sum Game:** Poker is Zero Sum. If I win $100, you lose $100.
*   **Positive Sum Game:** Trade is Positive Sum (Pareto). We both win. Civilization is based on turning Zero Sum games (War) into Positive Sum games (Trade).
        `,
    },
];
