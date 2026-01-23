import { BlogPost } from "../blogs";

export const BLOGS_PART_189: BlogPost[] = [
    {
        slug: "double-jeopardy-law",
        title: "You Can't Be Tried Twice: Double Jeopardy",
        description: "If the government fails to convict you, you walk free forever. Even if you confess the next day. Why?",
        category: "Law",
        publishedAt: "2026-07-09",
        imageUrl: "/images/double-jeopardy.png",
        tags: ["Law", "Rights", "Deep Dive"],
        content: `
## Introduction: The Infinite Trial
Imagine a prosecutor hates you.
He charges you with theft. You win (Acquitted).
He charges you again next week. You win.
He charges you again.
Eventually, you run out of money. You get a bad lawyer. You lose.
**Double Jeopardy** (5th Amendment) stops this.
Once you are acquitted, the game is over. The state cannot play "Best of 3".

## 1. The Loophole: Dual Sovereignty
The catch: The State and the Feds are different "Soverigns".
If you rob a bank:
*   Texas can try you. (Acquitted).
*   The USA (Federal) can try you again for the same crime.
This happens in Civil Rights cases (e.g., if a racist jury frees a murderer, the Feds can step in and charge him with "Violating Civil Rights").

## 2. Mel Ignatow
In 1988, Mel Ignatow was tried for murder.
The jury acquitted him.
A year later, a contractor found photos of Mel torturing the victim *hidden under the floorboards*.
Absolute proof.
But he was Acquitted.
He could not be retried for murder.
He walked free (though they got him on Perjury later).
Law prefers **Finality** over **Perfect Justice**.

> **One-Minute Summary**
>
> **Double Jeopardy** is a procedural defense that prevents an accused person from being tried again on the same (or similar) charges following an acquittal or conviction. It exists to prevent the government from using its superior resources to harass a citizen with endless prosecutions until they get a conviction.
        `,
    },
    {
        slug: "habeas-corpus-freedom",
        title: "Show Me the Body: Habeas Corpus",
        description: "The King can't just throw you in a dungeon and forget you. He has to explain *why*. The most important 2 words in law?",
        category: "Law",
        publishedAt: "2026-07-10",
        imageUrl: "/images/habeas-corpus.png",
        tags: ["Law", "History", "Rights"],
        content: `
## Introduction: The Great Writ
Latin for **"That You Have the Body"**.
It is a court order demanding that a prisoner be brought before a judge.
The Jailer must prove he has a legal reason to hold you.
If he can't, you go free.
Without this, we live in a Police State where people "Disappear".

## 1. Suspension
Lincoln suspended Habeas Corpus during the Civil War (to arrest Confederate spies).
Bush suspended it for Guantanamo Bay detainees (Enemy Combatants).
It is the first right to die during a crisis.
Why?
Because Habeas Corpus is slow. War is fast.
The tension between Liberty and Security is eternal.

> **Mental Model: The Check**
> Habeas Corpus is the Judicial Branch checking the Executive Branch.
> The President (Police/Army) has the Gun.
> The Judge has the Writ.
> In a dictatorship, the Judge is scared of the Gun.
> In a Democracy, the Gun obeys the Writ.

> **One-Minute Summary**
>
> **Habeas Corpus** is a legal action protecting individuals from unlawful detention. It allows a prisoner to command the jailer to bring them to court and justify their imprisonment. Originated in the Magna Carta, it is considered the fundamental instrument for safeguarding individual freedom against arbitrary state action.
        `,
    },
    {
        slug: "qualified-immunity-police",
        title: "Why Cops Rarely Get Sued: Qualified Immunity",
        description: "You can sue a doctor for a mistake. You can sue a driver. But suing a government official is almost impossible. The doctrine of Qualified Immunity.",
        category: "Law",
        publishedAt: "2026-07-11",
        imageUrl: "/images/qualified-immunity.png",
        tags: ["Law", "Politics", "Deep Dive"],
        content: `
## Introduction: The Shield
A cop shoots a dog for no reason.
You sue him.
The Judge says: "Title 42, Section 1983 says you can sue for Civil Rights violations."
"BUT... the Supreme Court invented a shield called **Qualified Immunity**."
To win, you must prove the cop violated a **"Clearly Established Statutory or Constitutional Right."**

## 1. The Trick
"Clearly Established" means you have to find a *previous case* with the *exact same facts*.
*   **Case A:** Cop tased a pregnant woman in a car. (Illegal).
*   **Case B:** Cop tased a pregnant woman in a *truck*.
Judge: "Well, there is no prior case about tasing a woman in a *truck*... so the right wasn't 'Clearly Established'. Case dismissed."
It creates a Catch-22. You can't establish the right because cases get dismissed before they set a precedent.

## 2. Why it exists
The logic: Police make split-second decisions.
If they were afraid of being sued for every mistake, they would hesitate. They wouldn't do their job.
Critics say: It breeds impunity. "Bad Apples" don't pay for their mistakes; taxpayers do.

> **One-Minute Summary**
>
> **Qualified Immunity** is a legal doctrine in US federal law that shields government officials from being held personally liable for constitutional violations—like the use of excessive force—unless the violation was of a "clearly established" right. In practice, it makes it incredibly difficult to sue police officers for misconduct.
        `,
    },
    {
        slug: "adverse-possession-squatters",
        title: "Squatters Rights: Adverse Possession",
        description: "If you occupy a house for 10 years, it becomes yours. Why does the law reward theft?",
        category: "Law",
        publishedAt: "2026-07-12",
        imageUrl: "/images/squatter-house.png",
        tags: ["Law", "Property", "Philosophy"],
        content: `
## Introduction: Use it or Lose it
You own a field. You ignore it for 20 years.
A neighbor builds a shed on it. He plants corn.
20 years later, you notice. "Get off my land!"
Judge: "No. It is his land now."
This is **Adverse Possession**.

## 1. The Logic of Land
Land is a finite resource.
Society hates "Wasted Land".
If you are a lazy owner (Absentee Lord) and someone else is putting the land to productive use (The Squatter), the law favors the active user.
To win, the squatter must be:
*   **Hostile:** Not have permission.
*   **Open:** Not hiding. Everyone sees him.
*   **Continuous:** Stay there for the statutory period (7-20 years).

## 2. The Border Correcting Function
Usually, this isn't about stealing houses.
It's about fences.
If I accidentally build my fence 1 foot onto your property, and we both treat that fence as the border for 20 years...
The law eventually says: "Okay, let's just make the fence the legal border."
It prevents 100-year-old surveying errors from ruining modern lives.

> **One-Minute Summary**
>
> **Adverse Possession** is a legal principle where a person who does not have legal title to a piece of property—usually land—acquires ownership based on continuous possession or occupation of the land without the permission of its legal owner. It prioritizes the **Productive Use** of land over idle ownership.
        `,
    },
    {
        slug: "insanity-defense-mnaghten",
        title: "Not Guilty by Reason of Insanity",
        description: "John Hinckley Jr. shot the President to impress Jodie Foster. He went to a hospital, not prison. The history of the Insanity Defense.",
        category: "Law",
        publishedAt: "2026-07-13",
        imageUrl: "/images/insanity-defense.png",
        tags: ["Law", "Psychology", "Crime"],
        content: `
## Introduction: Mens Rea
To be a criminal, you need two things:
1.  **Actus Reus:** The Guilty Act (You shot the guy).
2.  **Mens Rea:** The Guilty Mind (You *intended* to shoot the guy).
If you are sleepwalking and kill someone, you have no *Mens Rea*. You are innocent.
The Insanity Defense argues that mental illness removes *Mens Rea*.

## 1. The M'Naghten Rule
1843. Daniel M'Naghten tried to kill the British PM. He was paranoid.
The court created the rule:
You are insane if **You didn't know the nature of the act** OR **You didn't know it was wrong.**
If you think you are squeezing a lemon, but you are strangling an uncle -> Insane.
If you know you are strangling an uncle, but God told you to -> Insane.

## 2. It is rare
TV makes it look common.
In reality, the Insanity Defense is used in <1% of cases.
And it fails 75% of the time.
And if you win... you don't go home.
You go to a Maximum Security Psychiatric Ward for the "Indefinite Duration".
Often, you stay locked up longer than if you had just gone to prison.

> **One-Minute Summary**
>
> The **Insanity Defense** is an affirmative defense arguing that the defendant is not responsible for their actions due to a psychiatric disease. It hinges on the concept of **Mens Rea** (Intent). Society does not punish those who cannot distinguish right from wrong, as punishment serves no deterrent purpose for the irrational.
        `,
    },
];
