import { BlogPost } from "../blogs";

export const BLOGS_PART_103: BlogPost[] = [
    {
        slug: "dunbars-number-friends-150",
        title: "The Village Limit: Dunbar's Number",
        description: "You have 5000 Facebook friends. You only know 150 of them. Why your brain size limits your social circle.",
        category: "Sociology",
        publishedAt: "2025-07-31",
        imageUrl: "/images/dunbar-circles.png",
        tags: ["Sociology", "Psychology", "Deep Dive"],
        content: `
## Introduction: Grooming
Monkeys groom each other. It bonds them.
But grooming takes time.
If you have 100 friends, you spend all day picking fleas.
Humans invented language ("Gossip") to groom multiple people at once.
"Did you hear about Bob?"
But there is still a limit.

## 1. The Theory (150)
Robin Dunbar correlated Neocortex size with Group size.
For humans, the number is **150**.
This is the number of people you can maintain a *stable social relationship* with.
You know who they are, and how they relate to everyone else.
Above 150, it becomes a blur of faces.

## 2. The Layers
*   **5:** Loved ones (Support).
*   **15:** Good friends (Weekly contact).
*   **50:** Friends (Monthly contact).
*   **150:** Clan (Annual contact - Wedding guests).
*   **1500:** Recognizable faces (Acquaintances).
Social media tricks us into thinking we have 1000 "Friends".
But in a crisis, you still only have 5.

## 3. Military Units
Armies know this.
A **Company** is usually ~150 soldiers.
Why? Because a Captain can know 150 names and personalities.
If the group is bigger, you need bureaucracy (Rules + Rank) instead of trust.
Gore-Tex (the company) splits its factories when they reach 150 employees. They build a new parking lot to force a split. It keeps the culture "Small Village".

### Fact Box
*   **Christmas Cards:** Dunbar tested his theory by looking at Christmas card lists in the UK. Average number sent: 153. It is hard-coded into our biology.
        `,
    },
    {
        slug: "six-degrees-separation-small-world",
        title: "Six Degrees of Kevin Bacon",
        description: "I know a guy who knows a guy who knows the President. The math of Small World Networks.",
        category: "Sociology",
        publishedAt: "2025-08-01",
        imageUrl: "/images/six-degrees.png",
        tags: ["Sociology", "Math", "Deep Dive"],
        content: `
## Introduction: The Packet
1967. Stanley Milgram sent packages to random people in Kansas.
Goal: Get this package to a stockbroker in Boston.
Rule: You can only mail it to someone you know on a first-name basis.
Result: It took an average of **6 jumps**.
Result: "The Small World Problem".

## 1. Hubs and Connectors
How is this possible?
We live in clusters (Cliques).
But some people are **Connectors**.
They bridge the clusters.
Your friend who knows *everyone* (The Party Promoter, The Salesman).
These Super-Nodes shorten the path for everyone else.

## 2. The Internet
The web is a Small World Network.
Any page is usually 19 clicks away from any other page.
Google (The Ultimate Hub) connects everything.
Virality depends on Connectors sharing your content.
A meme goes viral not because 1000 people share it, but because 1 **Influencer** (Hub) shares it.

## 3. Disease Spread
This is bad news for pandemics.
In a caveman world, a virus stayed in the village.
In a Small World, a virus jumps from Wuhan to New York in 11 hours (via a flight Hub).
The same math that connects friends... connects super-spreaders.

### Fact Box
*   **Erdős Number:** Mathematicians have an "Erdős Number". If you co-wrote a paper with Paul Erdős, you are a 1. If you wrote with a 1, you are a 2. Most scientists are <5. It shows that Science is a small village.
        `,
    },


    {
        slug: "panopticon-surveillance-foucault",
        title: "The Perfect Prison: Panopticon",
        description: "Bentham designed a prison where the guard can see everyone, but no one can see the guard. The realization that we are living in it.",
        category: "Sociology",
        publishedAt: "2025-08-04",
        imageUrl: "/images/panopticon.png",
        tags: ["Sociology", "Philosophy", "Surveillance", "Deep Dive"],
        content: `
## Introduction: Jeremy Bentham (1791)
Design: A circular prison.
Cells on the outside.
Tower in the center.
The Tower has blinds. The Guard can see out. Prisoners cannot see in.
You never know if the Guard is watching.
So you must *assume* he is watching.
You police yourself.
Efficient Control.

## 1. Foucault's Discipline
Michel Foucault (Philosopher) said: "Society is a Panopticon."
Schools, Hospitals, Factories.
We internalize the Gaze.
We follow rules not because we will be punished, but because we might be seen.
It creates "Docile Bodies".
The soul becomes the prison of the body.

## 2. The Digital Panopticon
China's Social Credit System.
NSA Data Collection.
Google Tracking.
We carry the Panopticon in our pocket (Smartphone).
We know everything is recorded.
Does this change our behavior?
Yes. We self-censor. We conform.
The "Chilling Effect".

## 3. Inverse Panopticon (Sousveillance)
Today, everyone has a camera.
We watch the police (Rodney King, George Floyd).
The Guard is now watched by the Prisoners.
Is this freedom? Or just **More Surveillance**?
Now we watch each other. Cancel Culture is a distributed Panopticon where everyone is a volunteer guard.

### Fact Box
*   **Bentham's Body:** Jeremy Bentham died in 1832. He requested his body be preserved (Auto-Icon). He sits in a glass box at University College London. He is still watching the students. The ultimate Panopticon.
        `,
    },
];
