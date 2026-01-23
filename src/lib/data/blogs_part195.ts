import { BlogPost } from "../blogs";

export const BLOGS_PART_195: BlogPost[] = [
    {
        slug: "sorting-algorithms-bubble-vs-merge",
        title: "The Art of Ordering: Sorting Algorithms",
        description: "How does your computer sort a million files instantly? Why Bubble Sort is for idiots and Merge Sort is for geniuses.",
        category: "Computer Science",
        publishedAt: "2026-08-08",
        imageUrl: "/images/sorting-algo.png",
        tags: ["CS", "Algorithms", "Math"],
        content: `
## Introduction: The Deck of Cards
Imagine sorting a deck of 52 cards.
**Bubble Sort:** Compare card 1 and 2. Swap if wrong. Compare 2 and 3. Do this 3,000 times. It takes forever.
**Merge Sort:** Divide the deck in half. Sort the halves. Merge them.
This is **Divide and Conquer**.

## 1. Complexity
If you double the number of cards:
*   Bubble Sort takes **4x** longer (N^2).
*   Merge Sort takes **2x** longer (N log N).
For 52 cards, nobody cares.
For Google (sorting 50 Billion webpages), Bubble Sort would take longer than the age of the universe.
Merge Sort takes a few minutes.

## 2. Bogo Sort
The worst algorithm is **Bogo Sort**.
1. Throw the deck in the air.
2. Check if it landed sorted.
3. If not, repeat.
It is theoretically possible to finish, but statistically impossible.
It is a joke algorithm used to teach probability.

> **One-Minute Summary**
>
> **Sorting Algorithms** are the backbone of computer science. While intuitive methods like **Bubble Sort** are easy to write, they are exponentially slow ($O(n^2)$). Efficient methods like **Merge Sort** and **Quicksort** use a divide-and-conquer approach ($O(n \log n)$) to handle massive datasets, making search engines and databases possible.
        `,
    },
    {
        slug: "big-o-notation-scalability",
        title: "How Fast is Your Code? Big O Notation",
        description: "Programmers don't measure speed in seconds. They measure it in Growth. Why O(n) is okay, but O(n!) is a disaster.",
        category: "Computer Science",
        publishedAt: "2026-08-09",
        imageUrl: "/images/big-o-chart.png",
        tags: ["CS", "Algorithms", "Math"],
        content: `
## Introduction: The worst case
You write a script to find a name in a list.
It works fast on your laptop (10 names).
You put it on the server (1 million names). It crashes.
You ignored **Time Complexity**.
**Big O Notation** describes how the runtime grows as the input grows.

## 1. The Hierarchy
*   **O(1) - Constant:** Takes 1 second, no matter how much data (Hash Map lookup). The Holy Grail.
*   **O(n) - Linear:** 10 items = 10 seconds. 100 items = 100 seconds. (Reading a book).
*   **O(n^2) - Quadratic:** 10 items = 100 seconds. (Nested Loops). Bad for big data.
*   **O(2^n) - Exponential:** The Traveling Salesman. The heat death of the universe arrives before the answer.

## 2. Premature Optimization
Donald Knuth said: "Premature optimization is the root of all evil."
Don't worry about Big O for small scripts.
But if you are building the next Facebook, an O(n^2) algorithm in your feed ranking will bankrupt the company in server costs.

> **One-Minute Summary**
>
> **Big O Notation** is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size grows. It identifies the **Scalability** of code.
        `,
    },
    {
        slug: "hashing-functions-security",
        title: "Digital Fingerprints: How Hashing Works",
        description: "How does a website know your password without saving your password? The magic of one-way math.",
        category: "Computer Science",
        publishedAt: "2026-08-10",
        imageUrl: "/images/hashing-lock.png",
        tags: ["CS", "Security", "Crypto"],
        content: `
## Introduction: The Grinder
Imange a meat grinder.
You put in a Cow -> You get Ground Beef.
You put in a Chicken -> You get Ground Chicken.
But you cannot put Ground Beef back in and get a Cow.
It is **One-Way**.
A **Hash Function** (SHA-256) is a mathematical meat grinder.
Input: "Hello" -> Output: "2cf24d..."
Input: "Hello!" -> Output: "948ba..." (Completely different).

## 1. Passwords
Facebook never saves your password "Hunter2".
They hash it -> "Xy7z...". They save the hash.
When you log in, they hash your input and compare it to the saved hash.
If hackers steal the database, they only see "Xy7z...".
They can't reverse it to find "Hunter2". (Unless they use Rainbow Tables).

## 2. Integrity
Hashes also prove file integrity.
If you download a 50GB game, how do you know a single bit didn't flip?
You check the Hash.
If one bit changes, the Hash changes completely (Avalanche Effect).
It is the seal on the digital envelope.

> **One-Minute Summary**
>
> A **Hash Function** is any function that can be used to map data of arbitrary size to fixed-size values. Ideally, it is deterministic, quick to compute, but **Impossible to Reverse**. It is used for password storage, data retrieval (Hash Tables), and ensuring file integrity/signatures in cryptography.
        `,
    },
    {
        slug: "rsa-encryption-alice-bob",
        title: "The Key You Can Share: RSA Encryption",
        description: "Before 1977, if you wanted to send a secret message, you had to meet in person to share the key. RSA changed everything.",
        category: "Computer Science",
        publishedAt: "2026-08-11",
        imageUrl: "/images/rsa-keys.png",
        tags: ["CS", "Security", "Math"],
        content: `
## Introduction: The Briefcase Problem
Alice wants to send a locked briefcase to Bob.
But Bob doesn't have the key.
If she mails the key, Eve (the spy) will copy it.
How do they talk?
Whitefield Diffie and Martin Hellman figured it out: **Two Keys**.

## 1. Public and Private
You generate a keypair.
*   **Public Key:** You put this on your website. "Anyone who wants to talk to me, use this to lock the message."
*   **Private Key:** You keep this under your pillow. Only this can unlock the message.
Alice locks the box with Bob's Public Key.
Now, even Alice can't open it. Only Bob can.
They never had to meet to exchange a secret.

## 2. Prime Numbers
RSA relies on the fact that multiplying two primes is easy, but factoring them is hard.
17 * 23 = 391 (Easy).
What numbers multiply to make 391? (Hard).
If the numbers have 300 digits, it takes a supercomputer millions of years.
That math is the only thing protecting your Bank Account.

> **One-Minute Summary**
>
> **RSA** (Rivest–Shamir–Adleman) is a public-key cryptosystem. It uses **Asymmetric Encryption**: a public key for encryption and a private key for decryption. Its security relies on the practical difficulty of **Server-side Factoring** of the product of two large prime numbers. It creates a secure channel over an insecure network.
        `,
    },
    {
        slug: "cap-theorem-distributed",
        title: "You Can't Have It All: The CAP Theorem",
        description: "In a distributed system (like Cloud Computing), you have to choose 2 out of 3: Consistency, Availability, Partition Tolerance.",
        category: "Computer Science",
        publishedAt: "2026-08-12",
        imageUrl: "/images/cap-theorem.png",
        tags: ["CS", "Cloud", "Systems"],
        content: `
## Introduction: The Network Split
Imagine a bank with two ATMs (New York and London).
The internet cable between them is cut (**Partition**).
A customer tries to withdraw $100 in NY.
The NY ATM has to make a choice.

## 1. The Choice (CP vs AP)
*   **Availability (AP):** "I will give him the money." But if the London ATM also gives him money, the balance is wrong (**Inconsistent**).
*   **Consistency (CP):** "I cannot talk to London, so I will freeze." The balance is safe, but the ATM is broken (**Unavailable**).
You cannot guarantee both when the network is down.

## 2. NoSQL
This drives database design.
*   **SQL (Banks):** Choose Consistency. If the network breaks, the transaction fails. Losing money is unacceptable.
*   **Instagram/Twitter:** Choose Availability. If you like a photo, and your friend doesn't see the like for 5 minutes (Eventually Consistent), nobody dies.
They prioritize "Always Up" over "Always Perfect".

> **One-Minute Summary**
>
> **The CAP Theorem** states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: **Consistency** (every read receives the most recent write), **Availability** (every request receives a response), and **Partition Tolerance** (the system continues to operate despite network failures).
        `,
    },
];
