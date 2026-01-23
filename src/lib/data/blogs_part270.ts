import { BlogPost } from "../blogs";

export const BLOGS_PART_270: BlogPost[] = [
    {
        slug: "heartbleed-bug-openssl",
        title: "The Heartbleed Bug: The Internet's Open Wound",
        description: "For two years, a tiny error in the code that protects your passwords allowed hackers to read the memory of servers at will. The missing bounds check.",
        category: "Tech",
        publishedAt: "2027-08-19",
        imageUrl: "/images/heartbleed.png",
        tags: ["Tech", "Security", "Coding"],
        content: `
## Introduction: The Heartbeat
OpenSSL is the library that puts the "S" in HTTPS. It protects your credit cards.
It has a feature called "Heartbeat."
You send the server a message ("Bird", 4 bytes). The server replies ("Bird", 4 bytes).
It confirms the connection is alive.

## 1. The Bug
But what if you lie?
What if you send ("Bird", 64,000 bytes)?
The server didn't check the length. It just trusted you.
It grabbed "Bird" from memory... plus the next 63,996 bytes of whatever was sitting in RAM next to it.
Passwords. Encryption Keys. Usernames.
It bled out the server's memory.

## 2. Consequences
This bug existed for 2 years (2012-2014) before being found.
It was a catastrophe. Everyone had to change their passwords.
It showed that the entire internet relies on volunteer code written by a few overworked guys.

> **One-Minute Summary**
>
> **Heartbleed** was a critical security bug in the OpenSSL cryptography library. It was a **Buffer Over-read** vulnerability that allowed attackers to read sensitive data (like private keys and passwords) from a server's memory by sending a malformed "Heartbeat" request. It highlighted the fragility of critical open-source infrastructure.
        `,
    },
    {
        slug: "y2k38-problem-unix-time",
        title: "The Next Y2K: The Year 2038 Problem",
        description: "On January 19, 2038, millions of computers will think it is 1901. Why we are running out of time (literally).",
        category: "Tech",
        publishedAt: "2027-08-20",
        imageUrl: "/images/y2k38.png",
        tags: ["Tech", "Future", "Coding"],
        content: `
## Introduction: Counting Seconds
Computers count time as the number of seconds since January 1, 1970 (Unix Epoch).
They store this number as a **32-bit signed integer**.
The maximum number you can store is 2,147,483,647.
That many seconds is about 68 years.

## 1. The Crash
At 03:14:07 UTC on January 19, 2038, the counter will max out.
It will roll over to -2,147,483,648.
The date will instantly jump to **December 13, 1901**.
Banks calculate interest based on time. Power grids schedule tasks. Satellites use GPS time.
If the date is wrong, the system crashes.

## 2. The Fix
We need to upgrade everything to **64-bit systems**.
Most modern PCs are already 64-bit (they can count for billions of years).
But embedded systems (routers, cars, factory controllers) are still 32-bit. They are the ticking time bombs.

> **One-Minute Summary**
>
> The **Year 2038 Problem** is a time formatting bug in computer systems that store time as a 32-bit signed integer (seconds since 1970). When the counter exceeds its maximum value on January 19, 2038, it will wrap around to a negative number, causing systems to interpret the date as 1901. It is the "Y2K" for the 64-bit transition.
        `,
    },
    {
        slug: "toyota-unintended-acceleration-spaghetti",
        title: "Killer Code: Toyota Unintended Acceleration",
        description: "Cars were accelerating out of control. Was it floor mats? Or was it spaghetti code? A deep dive into embedded software failure.",
        category: "Tech",
        publishedAt: "2027-08-21",
        imageUrl: "/images/toyota-code.png",
        tags: ["Tech", "Cars", "Safety"],
        content: `
## Introduction: The Panic
In the late 2000s, Toyotas started accelerating on their own. People died.
Toyota blamed "Sticky Pedals" and "Floor Mats."
But software experts looked at the code inside the Engine Control Unit (ECU).

## 1. Spaghetti Code
They found a mess.
The code had 11,000 global variables (a huge sin in programming).
It had "Recursion" that blew the stack.
There was no memory protection.
A single bit flip (Cosmic Ray) could turn off the safety tasks.
The "Watchdog" timer (which restarts the system if it freezes) was kicked by the freezing task itself.

## 2. The Verdict
The jury found that "Spaghetti Code" was likely responsible for at least one death.
It changed how we write safety-critical software. You can't just hack it together.

> **One-Minute Summary**
>
> The **Toyota Unintended Acceleration** crisis revealed severe deficiencies in automotive software standards. Expert analysis of the Engine Control Unit (ECU) source code discovered excessive complexity ("Spaghetti Code"), misuse of global variables, and failure of safety mechanisms like the **Watchdog Timer**, proving that bad code can be lethal.
        `,
    },
    {
        slug: "boeing-737-max-mcas-disaster",
        title: "The Plane That Fought Its Pilots: MCAS",
        description: "Boeing added a secret software patch to fix a hardware problem. It ended up crashing two planes and killing 346 people.",
        category: "Tech",
        publishedAt: "2027-08-22",
        imageUrl: "/images/boeing-mcas.png",
        tags: ["Tech", "Aviation", "Tragedy"],
        content: `
## Introduction: The Engines
Boeing wanted to put bigger, more efficient engines on the 737.
But the engines were so big they had to be moved forward.
This changed the aerodynamics. If the nose went up too high, the plane would stall.
Instead of redesigning the plane, they added a software patch: **MCAS**.

## 1. Single Point of Failure
MCAS (Maneuvering Characteristics Augmentation System) would automatically push the nose down if it thought the plane was stalling.
But it relied on **one single sensor** (Angle of Attack).
If that sensor broke (by a bird strike or balloon), MCAS thought the plane was stalling.
It pushed the nose down.
The pilots pulled up. MCAS pushed down harder.
The pilots didn't know MCAS existed (Boeing removed it from the manual to save on training costs).

## 2. Automation Bias
It is the darkest lesson in automation.
Never let software override a human without the human knowing why.
Never rely on a single sensor for a life-or-death decision.

> **One-Minute Summary**
>
> The **Boeing 737 MAX** crashes were caused by the **MCAS** system, a software feature designed to correct the plane's pitch. It was flawed because it relied on a **Single Point of Failure** (one sensor) and was undocumented in pilot manuals. When the sensor failed, the software repeatedly forced the plane into a dive, fighting the pilots until impact.
        `,
    },
    {
        slug: "pentium-fdiv-bug-intel",
        title: "The $475 Million Math Error: Pentium FDIV",
        description: "In 1994, a professor found that his Intel chip couldn't divide numbers correctly. Intel tried to hide it. It cost them a fortune.",
        category: "Tech",
        publishedAt: "2027-08-23",
        imageUrl: "/images/pentium-chip.png",
        tags: ["Tech", "History", "Math"],
        content: `
## Introduction: 4195835 / 3145727
Professor Thomas Nicely was calculating prime numbers.
He noticed the answers were wrong.
He traced it back to the chip itself: The Intel Pentium.

## 1. The Lookup Table
To make division fast, Intel used a "Lookup Table" (a cheat sheet of pre-calculated values).
Due to a copy-paste error, **5 entries** in the table were missing.
For most calculations, it didn't matter.
But for 1 in 9 billion calculation, the answer would be off by a tiny fraction.

## 2. The Recall
Intel said: "It's rare. Don't worry about it."
IBM stopped shipping computers with Intel chips.
Public trust collapsed.
Intel was forced to recall every single chip.
It cost them $475 million dollars because of 5 missing numbers.

> **One-Minute Summary**
>
> The **Pentium FDIV Bug** was a hardware flaw in the floating-point unit of early Intel Pentium processors. Caused by missing entries in a division lookup table, it resulted in slight precision errors in rare calculations. Intel's initial attempt to downplay the issue led to a public relations disaster and a massive total product recall.
        `,
    },
];
