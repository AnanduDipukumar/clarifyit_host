import { BlogPost } from "../blogs";

export const BLOGS_PART_145: BlogPost[] = [
    {
        slug: "transistor-moores-law",
        title: "The Switch That Runs the World: The Transistor",
        description: "The most manufactured object in history. It is a simple switch. On. Off. Put billions together and you get ChatGPT. But Moore's Law is dying.",
        category: "Tech",
        publishedAt: "2026-02-26",
        imageUrl: "/images/transistor.png",
        tags: ["Tech", "History", "Hardware", "Deep Dive"],
        content: `
## Introduction: The Vacuum Tube
Before 1947, if you wanted a computer, you used **Vacuum Tubes**.
They were big glass lightbulbs. They got hot. They burned out every few hours.
The ENIAC computer (1945) had 18,000 tubes and weighed 30 tons.
It took a whole team of engineers just to replace the dead bulbs.
We needed something better.
Something solid.

## 1. Bell Labs (The Invention)
1947. John Bardeen, Walter Brattain, and William Shockley.
They discovered that a slice of Germanium (later Silicon) could amplify electricity.
No moving parts. No glass. No heat.
The **Transistor** (Transfer Resistor).
It was a switch.
1 = Current flows.
0 = Current stopped.
They won the Nobel Prize. It is arguably the most important invention of the 20th Century.

## 2. Moore's Law (The Prophecy)
In 1965, Gordon Moore (Co-founder of Intel) noticed a trend.
**"The number of transistors on a chip doubles every 2 years."**
It sounded crazy. But it held true for 50 years.
*   **1971:** Intel 4004 -> 2,300 transistors.
*   **1993:** Pentium -> 3.1 Million.
*   **2023:** Apple M3 Max -> 92 Billion.
This exponential growth gave us smartphones, the Internet, and AI.

## 3. The Wall (Quantum Tunneling)
We are hitting the physical limit.
Modern transistors are **3 nanometers** wide.
(A DNA strand is 2.5 nm).
At this scale, electrons stop acting like particles and start acting like waves.
They "Tunnel" through the gate.
The switch can't turn off. It leaks.
**Moore's Law is dead.**
To go further, we need a paradigm shift.
*   **FinFET / GAA:** 3D transistors where the gate wraps around the channel.
*   **Optical Computing:** Using light (Photons) instead of electrons.
*   **Quantum Computing:** Using Qubits.

> **Mental Model: The City**
>
> A CPU is a city.
> The Transistors are the houses.
> The Wires are the roads.
> Moore's Law is like shrinking the houses so you can fit twice as many in the same city every 2 years.
> Eventually, the houses are the size of an atom. You can't shrink them anymore without breaking physics.

> **One-Minute Summary**
>
> The **Transistor** is the fundamental building block of modern electronics, replacing bulky vacuum tubes with tiny silicon switches. **Moore's Law** predicted the exponential doubling of transistor density, fueling the digital revolution. However, as we reach the atomic scale (3nm), **Quantum Tunneling** causes leakage, effectively ending Moore's Law and forcing us to look for alternative computing architectures like Quantum or Optical systems.

        `,
    },
    {
        slug: "internet-tcp-ip-vint-cerf",
        title: "The Network of Networks: How TCP/IP Works",
        description: "How does an email get from New York to Tokyo without getting lost? Packet Switching. The handshake protocol that connects the world.",
        category: "Tech",
        publishedAt: "2026-02-27",
        imageUrl: "/images/internet-map.png",
        tags: ["Tech", "History", "Deep Dive"],
        content: `
## Introduction: The Nuke Proof Network
In the 1960s (Cold War), the US military (DARPA) had a problem.
If the Soviets nuked a central comms hub, the whole network would die.
They needed a **Decentralized Network**.
One where messages could find their own way around the damage.
This became **ARPANET**. The grandfather of the Internet.

## 1. Packet Switching
Before this, phone lines used "Circuit Switching". You owned the whole wire for the call.
**Packet Switching** is different.
Imagine you want to mail a book.
You don't send the whole book.
You rip out every page. Put each page in a separate envelope. Number them (1/100, 2/100...).
You throw them in the mail.
Page 1 goes via London. Page 2 goes via Paris. Page 3 via space.
They arrive in Tokyo in random order.
The receiver puts them back together.
If Page 5 is missing? You just ask to resend Page 5. Not the whole book.
Efficiency.

## 2. TCP/IP (The Handshake)
Vint Cerf and Bob Kahn (1974).
They wrote the rules of the road.
*   **IP (Internet Protocol):** The Address. Every device has a number (192.168.1.1). It tells the packet *where* to go.
*   **TCP (Transmission Control Protocol):** The Reliability. It guarantees delivery.
    *   "Did you get Packet 1?"
    *   "Yes."
    *   "Did you get Packet 2?"
    *   "No."
    *   "Ok, resending Packet 2."
This protocol allowed *any* computer to talk to *any* other computer.

## 3. The Collapse of IPv4
They designed the address system to be 32-bits.
That gives **4.3 Billion** addresses.
Vint Cerf said: "It was an experiment. 4 billion seemed like enough."
We ran out in 2011.
Every phone, fridge, and toaster now needs an IP.
Solution: **IPv6** (128-bits).
$3.4 \times 10^{38}$ addresses.
Enough to give every atom on the surface of the Earth its own IP address.

> **Fact Box**
>
> **The Napkin:** The initial architecture of the internet was literally sketched on the back of a napkin / envelope in a hotel lobby.
> The simplicity ("Smart Edges, Dumb Core") is why it scaled. The network doesn't care what you send. It just moves packets.

> **One-Minute Summary**
>
> The Internet is built on **Packet Switching**, which breaks data into small chunks that travel independently across the network. **TCP/IP** is the universal language that governs this: IP provides the address, and TCP ensures reliable delivery and reassembly. Originally designed for military resilience, its decentralized nature allowed it to scale from 4 nodes to billions, though we ultimately exhausted the original address space (**IPv4**) and had to upgrade to **IPv6**.

        `,
    },
    {
        slug: "linux-open-source-torvalds",
        title: "The OS That Runs the World: The Story of Linux",
        description: "Windows is for desktops. Linux is for everything else. The Internet, Android, Stock Exchanges, Supercomputers. All built by volunteers.",
        category: "Tech",
        publishedAt: "2026-02-28",
        imageUrl: "/images/linux-penguin.png",
        tags: ["Tech", "History", "Coding", "Deep Dive"],
        content: `
## Introduction: The Student
1991. Helsinki.
Linus Torvalds, a 21-year-old student, wanted to run UNIX on his new PC (386).
UNIX cost $5,000.
So he decided to write his own Kernel from scratch.
He posted a message on Usenet:
*"I'm doing a (free) operating system (just a hobby, won't be big and professional like GNU)..."*
It became the biggest software project in history.

## 1. The Cathedral vs The Bazaar
Eric Raymond wrote a famous essay describing why Linux won.
*   **The Cathedral (Microsoft/Apple):** Code is written by a small group of holy priests (employees) in secret. No one else sees it.
*   **The Bazaar (Linux):** The code is open. Thousands of strangers scream, trade, and patch it in public.
"Given enough eyeballs, all bugs are shallow."
The Bazaar moved faster. It fixed bugs instantly. It adapted to everything.

## 2. World Domination
Microsoft fought it. Steve Ballmer called Linux "A Cancer".
They failed.
Today:
*   **The Web:** 96% of the top 1 Million servers run Linux. (AWS, Google, Facebook).
*   **Supercomputers:** The Top 500 most powerful computers in the world run Linux (100%).
*   **Mobile:** Android *is* Linux. (So 70% of phones).
*   **Mars:** The Ingenuity Helicopter on Mars runs Linux.
Windows won the Desktop. Linux won the World.

## 3. Git
Torvalds didn't just write Linux.
In 2005, he got annoyed with the version control system they were using.
So he took a weekend off and wrote **Git**.
Git is now the standard for *all* code management (GitHub, GitLab).
He revolutionized software development twice.

> **Fact Box**
>
> **Tux:** The logo of Linux is a fat penguin.
> Why? Because Linus was once bitten by a penguin at a zoo in Canberra, Australia.
> He claimed he contracted "Penguinitis", a disease that makes you stay awake at night thinking about penguins.
> It is the only corporate logo chosen because the founder got nibbled.

> **One-Minute Summary**
>
> **Linux** started as a hobby project by **Linus Torvalds** but grew to dominate the world's computing infrastructure through the power of **Open Source**. By allowing anyone to view and improve the code (**The Bazaar Model**), it became more robust and adaptable than proprietary systems like Windows. Today, it powers the Internet, Supercomputers, and Android phones, proving that collaboration often beats competition.

        `,
    },
    {
        slug: "deep-learning-neural-networks",
        title: "Thinking Like a Brain: Deep Learning Explained",
        description: "We stopped trying to program rules. We started building brains. Layers of artificial neurons that teach themselves. The AI revolution.",
        category: "Tech",
        publishedAt: "2026-03-01",
        imageUrl: "/images/neural-net.png",
        tags: ["Tech", "AI", "Future", "Deep Dive"],
        content: `
## Introduction: GOFAI
For 50 years, we did "Good Old Fashioned AI" (Symbolic AI).
We wrote rules.
\`IF (object has whiskers) AND (object has pointy ears) THEN (Class = Cat)\`
It failed.
Why? Because a cat can be curled up. Or hairless. Or seen from behind.
You can't write enough rules to describe the world.

## 1. The Neural Net
So we copied nature.
The Brain doesn't use rules. It uses **Neurons** connected by Synapses.
We built Artificial Neural Networks.
Layers of math.
*   **Input Layer:** The pixels of the image.
*   **Hidden Layers:** Millions of "Neurons" that just hold a number (Weight).
*   **Output Layer:** "Cat" or "Dog".
Initially, the weights are random. It is stupid.

## 2. Backpropagation (The Learning)
We show it a Cat.
It guesses: "Dog".
We tell it: "Wrong. It was a Cat."
We use calculus (**Gradient Descent**) to go *backwards* through the network.
We tweak the weights slightly.
"Hey Neuron #56, you voted for Dog. You were wrong. Lower your vote next time."
We do this **1 Trillion Times**.
Eventually, the network "Groks" the concept of a cat.
It finds patterns (Curves, Textures, Eyes) that no human could describe.

## 3. The Black Box Problem
Here is the scary part.
We don't know *how* it works.
We know the math of learning. But we don't know what the final network is thinking.
When AlphaGo played Move 37 against Lee Sedol... no human understood it.
It was "Alien Intuition".
We have summoned a demon that is smarter than us, and we can't read its mind.

> **Mental Model: The Governance of Training**
>
> Imagine training a dog.
> You don't explain English grammar to the dog.
> You say "Sit". If he sits, you give a treat (Positive Reinforcement). If he bites, you say "Bad" (Negative Reinforcement).
> Deep Learning is just doing this with Math on a massive scale.
> The "Treat" is minimizing the Error Function.

> **One-Minute Summary**
>
> **Deep Learning** is a subset of AI that mimics the human brain using multi-layered **Neural Networks**. Instead of being programmed with explicit rules, the system learns from data using a process called **Backpropagation** (adjusting internal weights based on errors). This approach has solved problems previously thought impossible (Image Recognition, Go, Translation), but has created a **Black Box** problem where we no longer understand the internal logic of our own machines.

        `,
    },
    {
        slug: "quantum-cryptography-alice-bob",
        title: "The End of Secrets: Quantum Cryptography",
        description: "Quantum Computers will break all our codes (RSA). But Quantum Physics gives us a new code that cannot be broken. The arms race.",
        category: "Tech",
        publishedAt: "2026-03-02",
        imageUrl: "/images/quantum-lock.png",
        tags: ["Tech", "Quantum", "Security", "Deep Dive"],
        content: `
## Introduction: Shor's Algorithm
The internet is secured by **RSA Encryption**.
It works because multiplying two prime numbers is easy (3 x 7 = 21).
But finding the factors of a huge number is hard (What numbers multiply to make 238,941...?).
In 1994, Peter Shor wrote an algorithm.
If you have a **Quantum Computer**, you can factor numbers instantly.
RSA is dead.
Every bank account, military secret, and email is open.

## 1. Harvest Now, Decrypt Later
Given that QCs don't exist yet (not big ones), are we safe?
No.
Intelligence Agencies (NSA/China) are doing **"Harvest Now, Decrypt Later"**.
They are recording all encrypted internet traffic today.
They store it in massive data centers (Utah).
In 10 or 15 years, when they build a Quantum Computer... they will unlock the archive.
Your secrets today are already compromised if they need to stay secret for 20 years.

## 2. The Solution: QKD
Quantum Key Distribution (BB84 Protocol).
We don't use math to hide the key. We use **Physics**.
Alice sends Bob a stream of Photons (Light particles).
She encodes the key in their polarization (Up, Down, Left, Right).
If Eve (The Spy) tries to look at the photons... **She changes them.**
**Heisenberg Uncertainty Principle.** You cannot measure a quantum system without disturbing it.
Alice and Bob check the error rate.
If errors > 0... Someone is listening. Drop the call.
If errors = 0... The line is secure. Guaranteed by the laws of the universe.

## 3. The Space Race
You can't send QKD signals very far (fiber optics absorb photons).
So we use Satellites.
China launched **Micius** (The Quantum Satellite).
It beamed an unhackable video call from Beijing to Vienna.
This is the new Nuclear Arms Race. The race for perfect secrecy.

> **Fact Box**
>
> **The One-Time Pad:** This is the only encryption that is mathematically proven to be unbreakable.
> You need a key that is as long as the message, and you only use it once.
> QKD is essentially a machine that generates infinite One-Time Pads.

> **One-Minute Summary**
>
> **Quantum Computers** pose an existential threat to modern encryption (**RSA**) via **Shor's Algorithm**. To counter this, scientists are developing **Quantum Cryptography (QKD)**. This method uses the **Observer Effect** of quantum mechanics: any attempt to intercept the key leaves a trace (errors), alerting the users. While math-based encryption can be broken by enough computing power, physics-based encryption is theoretically unbreakable.

        `,
    },
];
