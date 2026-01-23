import { BlogPost } from "../blogs";

export const BLOGS_PART_59: BlogPost[] = [
    {
        slug: "gutenberg-press-moveable-type",
        title: "The Internet of 1450: Gutenberg's Press",
        description: "Before him, there were 30,000 books in Europe. 50 years later, there were 12 million. The invention that broke the Church.",
        category: "Printing",
        publishedAt: "2024-12-25",
        imageUrl: "/images/gutenberg-press.png",
        tags: ["Printing", "History", "Tech", "Deep Dive"],
        content: `
## Introduction: The Monk
1440. A monk copies the bible by hand.
It takes 3 years.
The book costs as much as a vineyard.
Knowledge is for the Rich.
Johannes Gutenberg (a goldsmith) brings mass production to words.

## 1. The Matrix (Moveable Type)
Wood blocks wore out.
Gutenberg invented a hand caster.
He poured molten lead/tin/antimony alloy into a mold (Matrix).
**SNAP.** A perfect metal "A".
**SNAP.** A perfect metal "B".
He could cast 1000 letters an hour.
He arranged them in a frame. Ink. Press.
He printed 180 Bibles. They were perfect.

## 2. The Impact (Luther)
The Pope sold "Indulgences" (Get out of hell free cards).
Martin Luther wrote "95 Theses" saying this is a scam.
In 1400, the Church would have burned him.
In 1517, printers copied his Theses.
Within 2 weeks, they were all over Germany. Within a month, all over Europe.
You cannot burn 100,000 pamphlets.
The **Reformation** happened because information became faster than censorship.

## 3. Standardization
Before print, spelling was random ("King", "Kyng", "Cing").
Printers needed to pick one spelling to save money on casting letters.
This created "Standard English" and "Standard German".
It created the concept of a "Nation State" unified by a language.

### Fact Box
*   **Upper and Lower Case:** Printers stored the metal letters in wooden cases. The Capital letters were heavy and used less, so they were on the top shelf (**Upper Case**). The small letters were used often, so they were on the easy-to-reach bottom shelf (**Lower Case**).
        `,
    },
    {
        slug: "lithography-offset-printing",
        title: "Oil and Water Don't Mix: Lithography",
        description: "How do we print magazines at 100 mph? We don't use stamps. We use chemistry.",
        category: "Printing",
        publishedAt: "2024-12-26",
        imageUrl: "/images/offset-press.png",
        tags: ["Printing", "Chemistry", "Engineering", "Deep Dive"],
        content: `
## Introduction: The Stone
Alois Senefelder (1796) drew on a limestone with wax crayons.
He poured water on the stone. The water stuck to the stone, but rolled off the wax.
He rolled oily ink on the stone. The oil stuck to the wax (Oil loves Oil), but rolled off the wet stone (Oil hates Water).
**Lithography** (Stone Writing).
No carving required. Just chemistry.

## 1. Offset Printing (The Modern Way)
Today, we use aluminum plates.
1.  **Plate Cylinder:** holds the image (Hydrophobic) and non-image (Hydrophilic).
2.  **Blanket Cylinder:** Rubber. It picks up the ink from the plate.
3.  **Impression Cylinder:** Presses the paper against the rubber.
It is called "Offset" because the plate never touches the paper.
This saves wear on the delicate plate.
They run at 50,000 sheets per hour.

## 2. CMYK (Subtractive Color)
Light is RGB (Red Green Blue).
Paper is White (Reflects RGB).
To make Red on paper... you must subtract Green and Blue.
**Cyan** ink absorbs Red.
**Magenta** ink absorbs Green.
**Yellow** ink absorbs Blue.
**Black (K)** adds contrast (because mixing CMY creates a muddy brown).
**Halftones:**
Printers don't mix ink. They print tiny dots of C, M, Y, K next to each other.
Your eye blends them.
Look at a magazine with a magnifying glass. It's pointillism.

## 3. The Future (Digital)
Offset requires making plates ($$$). Great for 10,000 copies.
Digital (Inkjet/Laser) uses charge/nozzles.
No setup cost. great for 1 copy.
"Print on Demand".
Books are now printed *after* you buy them on Amazon. No warehouses.

### Fact Box
*   **The Rosette Pattern:** To prevent Moiré patterns (ugly grids), the screens for C, M, Y, and K are rotated at different angles (15, 45, 75, 90 degrees). If done perfectly, the dots form beautiful little flowers called Rosettes.
        `,
    },
    {
        slug: "3d-printing-sla-fdm",
        title: "Printing Matter: 3D Printing",
        description: "Star Trek Replicators are here. From FDM (Hot Glue Gun) to SLA (Laser Resin). We are printing rocket engines.",
        category: "Printing",
        publishedAt: "2024-12-27",
        imageUrl: "/images/3d-printer-nozzle.png",
        tags: ["Printing", "Tech", "Future", "Deep Dive"],
        content: `
## Introduction: Additive Manufacturing
Traditional manufacturing is **Subtractive** (Take a block of metal, mill away 90%). Wasteful.
3D Printing is **Additive** (Start with nothing, add material). 0% Waste.

## 1. FDM (Fused Deposition Modeling)
The kind you have at home (Prusa/Ender).
Role of filament (PLA plastic). Melt it at 200°C. Squirt it out.
Layer by Layer.
**Pros:** Cheap, Strong functionality.
**Cons:** Layer lines are visible. Rough surface.
**Infill:**
You don't print solid blocks. You print a honeycomb inside.
It is lighter and stronger than solid plastic.
Nature (Bone) uses the same structure.

## 2. SLA (Stereolithography)
A vat of liquid resin (Photopolymer).
A UV Laser shoots into the vat.
Wherever the laser hits, the liquid turns solid.
The build plate lifts up.
**Pros:** Stunning detail. Smooth as glass.
**Cons:** Toxic chemicals. Brittle parts.
Dentists use this to print teeth. Jewelers use it to print wax molds for casting rings.

## 3. SLM (Selective Laser Melting)
Metal powder (Titanium).
A high-power laser melts the dust into solid metal.
**SpaceX & Rocket Lab:**
They print rocket engines (Rutherford Engine).
Why?
You can print "Cooling Channels" *inside* the wall of the nozzle that are impossible to dill.
Complex geometry is free.
Cost: High.
Speed: Slow.

### Fact Box
*   **Bioprinting:** Scientists are modifying printers to squirt "Bio-Ink" (Stem Cells + Collagen). They are printing human ears and liver tissue. The goal: Print a replacement heart from your own cells. No rejection.
        `,
    },
    {
        slug: "banknote-printing-intaglio",
        title: "Printing Money: Intaglio and Security",
        description: "Why does money feel crisp? It's not the paper. It's the 50 tons of pressure used to emboss the ink.",
        category: "Printing",
        publishedAt: "2024-12-28",
        imageUrl: "/images/money-press.png",
        tags: ["Printing", "Security", "Economics", "Deep Dive"],
        content: `
## Introduction: Cotton not Paper
Money is not paper (wood pulp). Use linen/cotton rag. It survives the washing machine.
But the feel comes from the Print.

## 1. Intaglio (The Deep Cut)
The Queen's face is engraved into a steel plate.
Detailed grooves.
Ink fills the grooves.
The paper is pressed onto the plate with **Massive Force**.
The paper is pushed *into* the grooves to pick up the ink.
**Result:**
The ink sits *on top* of the paper. It is raised.
Run your fingernail over "The United States of America". You can feel the ridges.
Photocopiers are flat. They can't fake the texture.

## 2. The EURion Constellation
Look at a $20 bill. Look for tiny yellow circles (Omron Rings).
They form a specific constellation (Orion).
If you try to scan money on a Xerox machine...
The software recognizes the constellation.
It stops scanning. "Illegal Operation".
Even Photoshop has code to block you from editing images of money.

## 3. Polymer Notes (Canada/Australia)
Paper money is dirty and fragile.
Polymer (Plastic) notes last 5x longer.
They have transparent windows (Impossible to photocopy).
They are waterproof.
**The Smell:**
New user complaint: "They smell like maple syrup." (Canada). Probably psychological.
Old user complaint: "They melt in the tumble dryer."

### Fact Box
*   **Counterfeit Detection:** The "Pen Test" (Iodine pen) detects starch. Real money (Cotton) has no starch. Fake money (Wood paper) has starch -> turns black. But sophisticated fakers spray their paper with hairspray to block the iodine. The pen is not perfect.
        `,
    },
    {
        slug: "ascii-unicode-fonts-history",
        title: "From 0s and 1s to Emojis: The History of Fonts",
        description: "How computers learned to read. From ASCII (7-bit) to Unicode (Every language + Poop Emoji).",
        category: "Printing",
        publishedAt: "2024-12-29",
        imageUrl: "/images/ascii-table.png",
        tags: ["Printing", "Coding", "History", "Deep Dive"],
        content: `
## Introduction: ASCII
1960s. Computers needed a standard.
**ASCII (American Standard Code for Information Interchange).**
7 bits = 128 characters.
A-Z, 0-9, and some symbols ($ @).
It was enough for English.
It was useless for French (é), German (ß), or Chinese.
It was anglo-centric.

## 1. The Code Page Hell
In the 80s, every country made their own "Extended ASCII" (8-bit).
Code Page 437 (USA): 128-255 were box drawing characters (╔ ═ ╗).
Code Page 850 (Europe): 128-255 were Accented letters.
If you opened a French file on a US computer... the text turned into garbage symbols (Mojibake).

## 2. Unicode (One Ring to Rule Them All)
1991. "Let's list every character in human history."
Assign a unique number (Code Point) to each.
**U+0041** = 'A'.
**U+2603** = Snowman (☃).
**U+1F4A9** = Pile of Poo (💩).
UTF-8 is the encoding that squeezes these huge numbers into bytes efficiently.
It saved the internet.

## 3. Fonts (TrueType vs OpenType)
Vector Graphics.
Old fonts were bitmaps (pixels). They looked blocky when big.
**TrueType (Apple/Microsoft):** Mathematical curves (Bezier). Infinite scaling.
**Kerning:** The space between letters. 'AV' needs to overlap. 'LL' needs space. Good fonts have thousands of kerning pairs programmed in.
**Hinting:** Instructions on how to render curves on low-res screens so they remain readable.

### Fact Box
*   **Comic Sans:** Vincent Connare designed it for "Microsoft Bob" (a cartoon dog guide). It wasn't meant for business. People use it because it is highly readable for dyslexics (distinct letter shapes).
        `,
    },
];
