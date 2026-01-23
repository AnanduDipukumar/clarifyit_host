import { BlogPost } from "../blogs";

export const BLOGS_PART_176: BlogPost[] = [
    {
        slug: "ssd-flash-memory-floating-gate",
        title: "Trapping Lightning in a Bottle: How SSDs Work",
        description: "Hard drives used to spin. Now they are chips. How do we store Information in a rock that doesn't move?",
        category: "Tech",
        publishedAt: "2026-05-05",
        imageUrl: "/images/ssd-flash-cell.png",
        tags: ["Tech", "Hardware", "Deep Dive"],
        content: `
## Introduction: Spinning Rust vs. Flash
Old computers had Hard Disk Drives (HDD).
It was a magnetic platter spinning at 7200 RPM with a needle reading it (like a record player).
It was slow. If you dropped it, the needle scratched the disk.
New computers have **Solid State Drives (SSD)**.
No moving parts. Instant access.
How do they work?

## 1. The Floating Gate Transistor
Normal transistors are switches (On/Off). They lose their state when power is cut.
Flash Memory uses a special transistor with a **Floating Gate**.
This is an electrically isolated cage surrounded by glass (Insulator).
To write a "0", we blast high voltage at the gate.
Electrons use **Quantum Tunneling** to jump *through* the glass and get trapped in the cage.
When we turn the power off... the electrons are stuck. They can't get out.
They stay there for 10-20 years.
A trapped charge = 0. An empty cage = 1.

> **Mental Model: The Parking Lot**
> An HDD is a library where the librarian has to walk to the shelf to get a book.
> An SSD is a library where every book is teleported to the front desk instantly.

## 2. SLC vs TLC vs QLC
*   **SLC (Single Level Cell):** 1 bit per cell. (Empty or Full). Fast, durable. Expensive.
*   **TLC (Triple Level Cell):** 3 bits per cell. We measure *how many* electrons are in the cage. (0%, 12%, 25%... 100% full). This requires incredible precision.
*   **QLC (Quad Level Cell):** 4 bits (16 voltage levels). Cheap, but wears out faster.

## 3. Wear Leveling
Every time you force electrons through the glass, you damage the glass slightly.
Eventually, the glass breaks, and the cell leaks.
The SSD controller uses **Wear Leveling** to spread the writes evenly across the drive so one spot doesn't burn out.
This is why SSDs have a "TBW" (Terabytes Written) lifespan limit.

> **One-Minute Summary**
>
> **Solid State Drives (SSDs)** use **NAND Flash Memory** to store data. The core technology is the **Floating Gate Transistor**, which traps electrons inside an insulated chamber using quantum tunneling. Because there are no moving parts, data access is near-instant, but the insulation degrades over time with each write cycle, giving SSDs a finite lifespan.
        `,
    },
    {
        slug: "von-neumann-architecture-cpu-bottleneck",
        title: "The Von Neumann Bottleneck",
        description: "Every computer from your watch to a supercomputer uses the same architecture invented in 1945. It is brilliant. And it is holding us back.",
        category: "Tech",
        publishedAt: "2026-05-06",
        imageUrl: "/images/von-neumann-architecture.png",
        tags: ["Tech", "Computer Science", "Deep Dive"],
        content: `
## Introduction: The Design
Before John von Neumann, computers were "program-specific". To change the program, you had to physically rewire the machine.
Von Neumann had an idea:
**"Store the Program in the same memory as the Data."**
This is the **Stored-Program Concept**.
Memory holds both:
1.  \`x = 5\` (Data)
2.  \`ADD x to y\` (Instruction)

## 1. The Bottleneck
The CPU processes data crazy fast (GHz).
The Memory (RAM) is relatively slow.
The CPU has to fetch the Instruction ("ADD"), then fetch the Data ("5").
It has to use the *same bus* (wire) for both.
So the CPU spends 90% of its time **waiting** for data to arrive from RAM.
This is the **Von Neumann Bottleneck**.

> **Fact Box**
>
> **The Brain:** The human brain does *not* use Von Neumann architecture.
> In the brain, Memory and Processing are the *same thing* (The Synapse).
> There is no "Bus" to move data.
> This is why Neuromorphic Chips (AI chips) are trying to mimic biology to break the bottleneck.

## 2. The Fix: Caching
To fix this, we put tiny, super-fast memory right next to the CPU.
**L1, L2, L3 Cache**.
The CPU guesses what data you will need next and pre-loads it into the Cache so it doesn't have to talk to the slow RAM.
If it guesses right (Cache Hit), it's fast.
If it guesses wrong (Cache Miss), the computer freezes for a few nanoseconds.

## 3. Harvard Architecture
Some chips (like Microcontrollers in your washing machine) use **Harvard Architecture**.
They have separate wires for Data and Instructions.
They can read both at the same time.
But for general-purpose computers (PCs), Von Neumann won because it is cheaper and more flexible.

> **One-Minute Summary**
>
> The **Von Neumann Architecture** (1945) unifies data and instructions in the same memory. This makes computers flexible (software is just data), but creates a **Bottleneck** because the CPU processes faster than it can fetch data from memory. Modern CPUs mitigate this with complex **Cache** hierarchies, but the fundamental traffic jam remains.
        `,
    },
    {
        slug: "kernel-operating-system-core",
        title: "The Boss of the Machine: The Kernel",
        description: "You don't talk to the hardware. You talk to the Kernel. It is the dictator that controls every electron in your computer.",
        category: "Tech",
        publishedAt: "2026-05-07",
        imageUrl: "/images/kernel-architecture.png",
        tags: ["Tech", "OS", "Deep Dive"],
        content: `
## Introduction: The Middleman
When you write code like \`print("Hello")\`, your Python script doesn't know how to draw pixels on a screen.
It asks the **Operating System**.
Deep inside the OS is the core program: **The Kernel**.
(Linux, NT Kernel, XNU).
The Kernel has absolute power. **Ring 0**.

> **Mental Model: The Restaurant**
> **Hardware:** The Kitchen.
> **Software:** The Customer.
> **The Kernel:** The Waiter.
> The Customer cannot walk into the kitchen and cook. They must order through the Waiter. The Waiter manages the chaos.

## 1. What does it do?
The Kernel is a Traffic Cop.
*   **Memory Management:** Chrome wants 2GB of RAM. The Kernel says "Yes" or "No". It prevents Chrome from stealing RAM from Spotify.
*   **Process Scheduling:** You have 4 CPU cores but 100 programs running. The Kernel switches between them 1000 times a second so they *look* like they are running at the same time.
*   **Hardware Drivers:** The Kernel knows how to talk to your specific WiFi card.

## 2. User Space vs. Kernel Space
If your Browser crashes, your computer keeps running.
That's because the Browser lives in **User Space** (Ring 3).
If the *Kernel* crashes, your computer dies instantly.
**Blue Screen of Death (BSOD)**.
Kernel Panics happen when the boss makes a mistake.
To protect the system, the Kernel forbids User Space programs from touching hardware directly.

## 3. Monolithic vs Microkernel
*   **Monolithic (Linux/Windows):** The Kernel is huge. It contains all the drivers (Graphics, Sound, USB). Fast, but if a driver bugs out, the whole system crashes.
*   **Microkernel (Minix/Fuchsia):** The Kernel is tiny. Drivers run in User Space. Safer, but slower (more messages passing).

> **One-Minute Summary**
>
> The **Kernel** is the core component of an Operating System. It has complete control over the system's hardware (CPU, RAM, Devices). It acts as a bridge between applications (User Space) and the hardware, ensuring security, stability, and resource management. If the Kernel crashes, the system halts.
        `,
    },
    {
        slug: "computer-vision-ai-pixels",
        title: "How Computers 'See': Computer Vision",
        description: "To a computer, an image is just a spreadsheet of numbers. How do we teach it to recognize a cat?",
        category: "Tech",
        publishedAt: "2026-05-08",
        imageUrl: "/images/computer-vision-convolutions.png",
        tags: ["Tech", "AI", "Deep Dive"],
        content: `
## Introduction: The Grid
Take a photo of a dog.
Zoom in until you see pixels.
Each pixel is 3 numbers: Red (0-255), Green (0-255), Blue (0-255).
To a computer, an image is just a giant matrix of numbers.
\`[[255, 0, 0], [0, 255, 0]...]\`
It doesn't see "Dog". It sees distinct patterns of color.

## 1. Edge Detection (Convolutions)
Early AI looked for edges.
"If pixel A is very bright and pixel B is very dark, there is a line here."
This is a **Convolution**.
By sliding a filter (kernel) over the image, it builds a map of lines and curves.

## 2. Features
Once you have lines, you look for shapes.
"Two circles inside a larger circle" = "Face?"
"Triangle" = "Ear?"
This (Old AI) was brittle. If you rotated the cat upside down, the AI failed.

> **Fact Box**
>
> **Adversarial Attacks:** You can stick a specific sticker on a Stop Sign.
> To a human, it looks like a Stop Sign with a sticker.
> To a Computer Vision AI, the sticker hacks the math, and the AI sees a "Speed Limit 45" sign.
> This is a major security risk for autonomous vehicles.

## 3. Deep Learning (CNNs)
In 2012 (AlexNet), we switched to **Convolutional Neural Networks (CNNs)**.
We don't tell the AI what a cat looks like.
We give it 1 million photos of cats.
The AI figures out the features itself.
Layer 1 finds edges.
Layer 2 finds textures (fur).
Layer 3 finds shapes (ears).
Layer 4 finds concepts ("Cat").
It is arguably the most successful branch of AI (Self-Driving Cars, FaceID).

> **One-Minute Summary**
>
> **Computer Vision** allows machines to interpret images. It works by analyzing the matrix of pixel values. Modern systems use **Convolutional Neural Networks (CNNs)** to hierarchically detect features—starting from simple edges and building up to complex objects—enabling technologies like Facial Recognition and Medical Imaging.
        `,
    },
    {
        slug: "raid-storage-redundancy-data",
        title: "RAID: How to Never Lose Data",
        description: "Hard drives die. It's not a question of 'if', but 'when'. RAID is the technology that lets a drive die without losing a single file.",
        category: "Tech",
        publishedAt: "2026-05-09",
        imageUrl: "/images/raid-array.png",
        tags: ["Tech", "Data", "Deep Dive"],
        content: `
## Introduction: Redundant Array of Independent Disks
If you have important data on one drive, and it clicks... game over.
RAID groups multiple cheap drives together to create a Super-Drive.

## 1. RAID 0 (Speed)
*   **Striping.**
*   You have 2 drives.
*   File A is split in half. Part 1 goes to Drive 1. Part 2 goes to Drive 2.
*   **Pros:** Double the speed (read/write to both at once).
*   **Cons:** **Zero Safety.** If *one* drive fails, you lose *everything* (half a file is useless).
*   Use for: Gaming, Cache.

## 2. RAID 1 (Mirroring)
*   **Cloning.**
*   You have 2 drives.
*   File A is written to Drive 1 AND Drive 2.
*   **Pros:** **High Safety.** If Drive 1 dies, Drive 2 has a perfect copy.
*   **Cons:** Wasted space. You buy 2TB but only get 1TB of storage.
*   Use for: OS Drive, Critical Docs.

## 3. RAID 5 (Parity)
*   **The Magic Math.**
*   You have 3+ drives.
*   It writes data to Drive 1 and 2, and "Parity" to Drive 3.
*   Parity is a checksum (Drive 1 + Drive 2 = Drive 3).
*   If Drive 2 dies... the controller can calculate what *was* there using "Drive 3 - Drive 1".
*   You can lose 1 drive and lose no data.

> **Mental Model: The Equation**
> Imagine data is numbers: 5 and 3.
> RAID 5 stores: [5], [3], [8] (Sum).
> If the [3] drive explodes.
> The computer sees: [5], [?], [8].
> It knows $5 + ? = 8$. So the missing number must be 3.
> It reconstructs the data on the fly.

> **One-Minute Summary**
>
> **RAID** combines multiple hard drives to improve speed or protection. **RAID 0** splits data for speed (Striping) but increases risk. **RAID 1** clones data for safety (Mirroring). **RAID 5** uses math (Parity) to mathematically reconstruct missing data if a drive fails. It is the enterprise standard for keeping servers alive.
        `,
    },
];
