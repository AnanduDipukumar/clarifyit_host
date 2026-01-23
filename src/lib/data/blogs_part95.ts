import { BlogPost } from "../blogs";

export const BLOGS_PART_95: BlogPost[] = [

    {
        slug: "epigenetics-dna-methylation",
        title: "Software over Hardware: Epigenetics",
        description: "Your DNA is not your destiny. Your grandmother's diet affects your health. How genes are turned on and off.",
        category: "Genetics",
        publishedAt: "2025-06-22",
        imageUrl: "/images/epigenetic-tags.png",
        tags: ["Genetics", "Biology", "Health", "Deep Dive"],
        content: `
## Introduction: The Piano
DNA is the sheet music (Hardware).
Epigenetics is the Pianist (Software).
You can have the gene for a disease... but if the pianist never plays that note... you don't get sick.
Genes can be **Silenced** or **Expressed**.

## 1. Methylation
How does the cell turn off a gene?
It attaches a chemical tag (Methyl Group) to the DNA strand.
This tag acts like a mute button.
It stops the RNA reader from reading that section.
**Triggers:**
Stress, Diet, Pollution, Trauma.
If you smoke, you methylate your lung protection genes.

## 2. The Dutch Hunger Winter (1944)
Nazis blocked food to the Netherlands.
Pregnant women starved.
Their babies were born small.
But 60 years later... those babies (now adults) had high rates of Obesity and Schizophrenia.
Why?
The famine changed their Epigenetic markers. "Prepare for a world with no food."
Their metabolism was programmed to hoard fat.
Trauma is heritable.

## 3. Reversing Age?
David Sinclair (Harvard) believes aging is just "Epigenetic Noise".
The pianist gets sloppy. Bad notes get played.
He "Reset" the epigenome of old mice using the **Yamanaka Factors** (Proteins that turn cells into stem cells).
The mice got young again. Grey fur turned black. Blindness reversed.
Can we reboot humans?

### Fact Box
*   **Queen Bees:** A worker bee and a queen bee have **Excatly** the same DNA. The only difference? The Queen eats Royal Jelly. The jelly changes the epigenetic expression, turning a sterile worker into a fertile queen. You are what you eat.
        `,
    },
    {
        slug: "dna-digital-storage-archiving",
        title: "Storing the Internet in a Teaspoon: DNA Storage",
        description: "Hard drives rot in 10 years. DNA lasts 100,000 years. We can encode Netflix into molecules.",
        category: "Genetics",
        publishedAt: "2025-06-23",
        imageUrl: "/images/dna-helix-data.png",
        tags: ["Genetics", "Tech", "Future", "Deep Dive"],
        content: `
## Introduction: Density
All the world's data (Zettabytes) would fit in a shoe box of DNA.
Density: 215 Petabytes per gram.
Binary (0, 1) -> Quaternary (A, C, T, G).
00 = A.
01 = C.
10 = T.
11 = G.

## 1. Writing (Synthesis)
We send a text file to a lab (Twist Bioscience).
They use a machine to chemically stitch nucleotides together.
"AGCTTAGC..."
They create a test tube of invisible dust.
That dust is the movie *The Matrix* (actually done in 2019).

## 2. Reading (Sequencing)
To read it back, put the dust in a sequencer (MinION).
It reads the A, C, T, Gs.
Convert back to 0s and 1s.
Play movie.
**The Problem:**
It is slow and expensive ($1000 per MB).
You can't "Seek". You have to sequence the whole strand to find one file.
It is for **Cold Storage** (Archives), not for streaming.

## 3. Longevity
A hard drive fails in 5 years.
Tape fails in 30 years.
DNA found in mammoth bones (1 Million years old) is still readable.
As long as humans exist, we will have machines to read DNA. It will never become obsolete (unlike Floppy Disks).
Microsoft is building a "DNA Glass" project to store the cloud.

### Fact Box
*   **Bio-Terror Risk:** If you order a DNA sequence online... the company screens it to make sure you aren't trying to print the Smallpox Virus. But can hackers obfuscate the code to bypass the filter?
        `,
    },


];
