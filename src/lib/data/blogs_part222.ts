import { BlogPost } from "../blogs";

export const BLOGS_PART_222: BlogPost[] = [
    {
        slug: "douglas-engelbart-mouse",
        title: "The Mother of All Demos: The Mouse",
        description: "In 1968, Douglas Engelbart showed the future. He demoed the Mouse, Windows, Video Calling, and Hypertext. 90 minutes that changed the world.",
        category: "Tech",
        publishedAt: "2026-12-21",
        imageUrl: "/images/douglas-engelbart.png",
        tags: ["Tech", "History", "UX"],
        content: `
## Introduction: 1968
Computers were punch cards. You typed commands.
Douglas Engelbart stood on stage in San Francisco.
He had a weird wooden block with wheels. A "Mouse".
He clicked on a screen. He cut and pasted text.
He video chatted with a colleague 30 miles away.
The audience was stunned.
It was like showing an iPhone to a caveman.

## 1. Augmenting Human Intellect
Engelbart didn't want to make computers "Smart" (AI).
He wanted to make humans smarter (**IA - Intelligence Augmentation**).
He saw the computer as a tool to navigate complex information.
Steve Jobs visited Xerox PARC 10 years later, saw the Mouse, and built the Macintosh.
But Engelbart was the prophet.

## 2. The Legacy
Everything we do today—Windows, Word, Zoom, Links—was in that demo.
He invented the modern world in one afternoon.

> **One-Minute Summary**
>
> **The Mother of All Demos** was a computer demonstration given by Douglas Engelbart on December 9, 1968. It introduced the computer mouse, video conferencing, teleconferencing, hypertext, word processing, hypermedia, object addressing and dynamic file linking, bootstrapping, and a collaborative real-time editor. It established the paradigm of the **Graphical User Interface (GUI)**.
        `,
    },
    {
        slug: "linux-open-source",
        title: "The Rebellion: Linux",
        description: "A student in Finland wrote a hobby OS. He gave it away for free. Now it runs the Internet, Supercomputers, and Mars Rovers. Windows lost.",
        category: "Tech",
        publishedAt: "2026-12-22",
        imageUrl: "/images/linux-penguin.png",
        tags: ["Tech", "Coding", "Open Source"],
        content: `
## Introduction: The Cathedral vs The Bazaar
Microsoft is a Cathedral. Closed. Perfect. Built by masters.
**Linux** is a Bazaar. Open. Chaotic. Built by everyone.
In 1991, Linus Torvalds posted code online and said: "Just a hobby, won't be big."
Thousands of hackers joined in.

## 1. Open Source
The code is free. Anyone can change it.
This makes it **Secure** (Thousands of eyes looking for bugs).
It makes it **Flexible** (You can strip it down to run on a toaster or a supercomputer).
Microsoft fought it ("Linux is a cancer").
Microsoft lost.
Today, Microsoft Azure runs on Linux. Android is Linux.
The world runs on free code.

## 2. Git
Linus also invented **Git**.
The tool that lets millions of coders work together without deleting each other's work.
He is essentially the father of modern software collaboration.

> **One-Minute Summary**
>
> **Linux** is a family of open-source Unix-like operating systems based on the Linux kernel, released by **Linus Torvalds** in 1991. Because it is free and open-source, it has become the dominant OS for servers, supercomputers, and embedded systems (including Android). It proved that community collaboration can outperform proprietary corporate software.
        `,
    },
    {
        slug: "cloud-computing-aws",
        title: "There Is No Cloud: It's Just Someone Else's Computer",
        description: "We used to keep files on our hard drives. Now they are in 'The Cloud'. What actually is the Cloud? Giant fridges in Virginia.",
        category: "Tech",
        publishedAt: "2026-12-23",
        imageUrl: "/images/server-farm.png",
        tags: ["Tech", "Internet", "Infrastructure"],
        content: `
## Introduction: Server Farms
The "Cloud" is a marketing term.
It's actually millions of servers in massive warehouses (Data Centers).
Amazon (AWS), Microsoft (Azure), and Google dominate.
When you watch Netflix, you are streaming from an AWS computer in Virginia.

## 1. Utility Computing
Jeff Bezos realized Amazon had excess computer power.
He rented it out.
It changed startups.
Before: You needed $1M to buy servers.
Now: You swipe a credit card and pay $10/month.
It democratized invention. Uber and Airbnb exist because of the Cloud.

## 2. Fragility
If AWS goes down (US-East-1), half the internet breaks.
Doorbells stop working. Roombas stop cleaning. Websites vanish.
We have centralized the decentralized web.

> **One-Minute Summary**
>
> **Cloud Computing** is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. It allows companies to rent infrastructure from providers like **AWS** or **Azure** instead of building their own data centers, converting fixed costs into variable costs.
        `,
    },
    {
        slug: "tcp-ip-protocol-internet",
        title: "The Handshake: TCP/IP",
        description: "How does an email get from New York to Tokyo without getting lost? Vint Cerf and Bob Kahn invented the language of the Internet.",
        category: "Tech",
        publishedAt: "2026-12-24",
        imageUrl: "/images/tcp-ip.png",
        tags: ["Tech", "Internet", "Protocols"],
        content: `
## Introduction: Packet Switching
The old phone network was "Circuit Switched". You owned the wire while talking.
The Internet is **Packet Switched**.
It chops your email into 1,000 tiny envelopes (Packets).
They all take different routes.
They reassemble at the destination.
If a nuke destroys one city, the packets go around.

## 1. TCP/IP
**IP (Internet Protocol):** The Address system. Every computer has an IP address (192.168.1.1).
**TCP (Transmission Control Protocol):** The Guarantee. "Did you get Packet 4? No? I'll send it again."
It ensures reliability.
Together, they allow any computer to talk to any other computer, regardless of brand.

## 2. Vint Cerf
They designed it in the 70s.
It was so robust that it scaled from 4 computers to 40 Billion devices without breaking.
It is the most successful engineering standard in history.

> **One-Minute Summary**
>
> **TCP/IP** (Transmission Control Protocol/Internet Protocol) is the suite of communication protocols used to interconnect network devices on the internet. **IP** handles addressing and routing, while **TCP** ensures reliable transmission of data packets. Together, they form the fundamental language that allows the global internet to function.
        `,
    },
    {
        slug: "encryption-rsa-privacy",
        title: "The Mathematical Lock: Public Key Encryption",
        description: "How can I send you a secret message without meeting you to agree on a password? The math that protects your credit card.",
        category: "Tech",
        publishedAt: "2026-12-25",
        imageUrl: "/images/encryption-keys.png",
        tags: ["Tech", "Math", "Security"],
        content: `
## Introduction: The Key Exchange Problem
Caesar used a cipher (Move letters by 3). But he had to tell his generals the key.
If the messenger was caught, the game was up.
How do you share a key securely over a public channel?
This stumped cryptographers for 2,000 years.

## 1. Public and Private Keys
Whitfield Diffie and Martin Hellman solved it.
You have two keys.
**Public Key:** You give this to everyone. "Use this to lock messages to me."
**Private Key:** You keep this secret. "Only this can unlock them."
It works because of **One-Way Math** (Multiplying primes is easy; factoring them is hard).
I can lock it with your public key, but even *I* can't unlock it. Only you can.

## 2. HTTPS
Every time you see the Padlock icon on your browser, you are using Public Key Encryption (RSA/ECC).
It allows you to send your Credit Card to Amazon without hackers reading it.
Without it, e-commerce is impossible.

> **One-Minute Summary**
>
> **Public-Key Cryptography** (Asymmetric Cryptography) is a cryptographic system that uses pairs of keys: **Public keys** (which may be disseminated widely) and **Private keys** (which are known only to the owner). It enables secure communication and digital signatures over insecure networks (like the Internet), forming the backbone of digital privacy and security.
        `,
    },
];
