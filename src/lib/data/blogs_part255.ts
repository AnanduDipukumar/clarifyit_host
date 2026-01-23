import { BlogPost } from "../blogs";

export const BLOGS_PART_255: BlogPost[] = [
    {
        slug: "cobol-banking-code",
        title: "The Code That Runs Money: COBOL",
        description: "It was invented in 1959. Nobody learns it anymore. But if it successfully stopped working tomorrow, the global economy would collapse.",
        category: "Tech",
        publishedAt: "2027-06-05",
        imageUrl: "/images/cobol-code.png",
        tags: ["Tech", "Coding", "Finance"],
        content: `
## Introduction: Common Business Oriented Language
**COBOL** was designed by Grace Hopper (Grandma COBOL).
It was meant to be readable by managers.
\`ADD TRANSACTION TO BALANCE.\`
It is verbose and ugly.
But it is accurate to the penny.

## 1. The Zinc Layer
95% of ATM swipes use COBOL.
80% of in-person transactions.
Major banks have millions of lines of COBOL written in the 70s.
It works perfectly.
But the people who wrote it are dying of old age.

## 2. The Crisis
During the pandemic, US unemployment systems (written in COBOL) crashed.
Governor Phil Murphy literally asked for "COBOL volunteers" on TV.
Banks are trying to migrate to Java/Cloud, but it's like changing the engine of a plane while flying it.

> **One-Minute Summary**
>
> **COBOL** is a legacy programming language that underpins the global financial system. Its stability and precision with decimal numbers make it ideal for banking. However, the dwindling number of developers who know the language poses a significant risk to the maintenance of critical infrastructure.
        `,
    },
    {
        slug: "y2k-bug-success",
        title: "The Crisis That Wasn't: Y2K",
        description: "People think Y2K was a hoax because nothing happened. In reality, it was the greatest success story in IT history.",
        category: "Tech",
        publishedAt: "2027-06-06",
        imageUrl: "/images/y2k-bug.png",
        tags: ["Tech", "History", "Coding"],
        content: `
## Introduction: Two Digits
To save memory in the 1960s, programmers stored years as 2 digits.
1975 = "75".
They assumed the code would be replaced before the year 2000.
They were wrong.
When "99" rolled over to "00", computers would think it was 1900.
Interest rates would go negative. Power plants would shut down safety protocols.

## 1. The Hoax?
On Jan 1, 2000... nothing happened.
The public laughed. "We bought all this canned food for nothing!"
They didn't see the army of programmers working 80-hour weeks for 3 years.
The US spent $100 Billion fixing the code.

## 2. The Next One: 2038
The Unix Epoch problem.
32-bit systems count seconds since 1970.
They run out of numbers on January 19, 2038.
Hopefully, we fix that one too.

> **One-Minute Summary**
>
> The **Y2K Bug** (Millennium Bug) was a formatting error where computer systems interpreted the year 2000 as 1900, threatening to crash critical infrastructure. It was not a hoax; the disaster was averted only through a massive global mobilization of software engineers who updated legacy code in the years leading up to the deadline.
        `,
    },
    {
        slug: "6502-processor-apple-nintendo",
        title: "The Chip That Saved Gaming: MOS 6502",
        description: "Intel chips cost $300. This one cost $25. It powered the Apple II, the Commodore 64, the NES, and the Terminator (T-800).",
        category: "Tech",
        publishedAt: "2027-06-07",
        imageUrl: "/images/chip-6502.png",
        tags: ["Tech", "History", "Gaming"],
        content: `
## Introduction: The Price War
In 1975, computers were for universities.
Processors (CPUs) cost hundreds of dollars.
Chuck Peddle left Motorola to build a cheap chip.
He hand-drew the layout. He removed instructions to save space.
He sold the **MOS 6502** in a jar at a trade show for $25.

## 1. The Revolution
Steve Wozniak saw it. He couldn't afford an Intel. He bought the 6502.
He built the **Apple I**.
The **Commodore 64** used it.
The **Nintendo Entertainment System (NES)** used a modified version.
The **Tamagotchi** uses it.
Bender from Futurama has a 6502 in his head.

## 2. RISC
It was accidentally a primitive RISC (Reduced Instruction Set Computer) chip.
Because it was simple, it was fast.
It created the Home Computer revolution.

> **One-Minute Summary**
>
> The **MOS Technology 6502** was an 8-bit microprocessor introduced in 1975. Its remarkably low price ($25 vs $179 for competitors) made personal computing affordable for the first time. It is the most influential chip in history, powering the Apple II, Commodore 64, NES, and Atari systems.
        `,
    },
    {
        slug: "ascii-unicode-tower-of-babel",
        title: "Why Computers Speak English: ASCII vs Unicode",
        description: "For decades, computers couldn't handle accents, Chinese, or Emojis. The history of character encoding.",
        category: "Tech",
        publishedAt: "2027-06-08",
        imageUrl: "/images/ascii-table.png",
        tags: ["Tech", "Coding", "Language"],
        content: `
## Introduction: 7 Bits
Computers only know numbers. 01000001 = ?
In 1963, we agreed that 65 = 'A'.
This standard was **ASCII**.
It used 7 bits (128 characters).
Enough for English.
Not enough for French (é), German (ß), or even the British Pound (£).

## 1. Mojibake
Countries made their own hacky extensions.
If you opened a Japanese text file on a US computer, it looked like garbage characters (**Mojibake**).
The internet was a Tower of Babel.

## 2. Unicode
In 1991, **Unicode** was born.
"One number for every character, no matter the platform."
It allocates space for over 1 Million characters.
Now we can type Chinese, Hieroglyphs, Klingon, and 💩.
**UTF-8** is the magic way we compress those numbers to save space.

> **One-Minute Summary**
>
> **ASCII** was the original character encoding standard, limited to 128 English characters. As computing went global, this wasn't enough. **Unicode** replaced it, providing a unique number (Code Point) for every character in every human language (and emojis), unifying global text display. **UTF-8** is the dominant method for encoding Unicode on the web.
        `,
    },
    {
        slug: "qwerty-dvorak-keyboard",
        title: "Why Your Keyboard is inefficient: QWERTY",
        description: "The keys aren't arranged to be fast. They are arranged to slow you down. The legacy of the typewriter.",
        category: "Tech",
        publishedAt: "2027-06-09",
        imageUrl: "/images/qwerty-keys.png",
        tags: ["Tech", "History", "Design"],
        content: `
## Introduction: The Jam
On early mechanical typewriters, if you typed two keys next to each other too fast, the metal arms would jam.
Christopher Sholes designed the **QWERTY** layout to separate common letter pairs (like 'T' and 'H').
He intentionally put them on opposite sides to slow typists down.

## 1. Path Dependence
Typewriters got better (didn't jam). Computers don't have arms.
But QWERTY stuck.
We learned it. We taught it in schools.
**Dvorak** and **Colemak** are faster, more ergonomic layouts.
Dvorak puts all the vowels on the home row (AOEUIDHTNS).
You can type 400% more words without moving your fingers off the home row.

## 2. Why don't we switch?
The cost of relearning is too high.
It is the classic example of **Path Dependence** (Lock-in).
The inferior standard won because it was first.

> **One-Minute Summary**
>
> The **QWERTY** keyboard layout was designed in the 1870s for mechanical typewriters to prevent key jamming by spacing out commonly used letter pairs. Despite being ergonomically inferior to modern alternatives like **Dvorak**, it remains the global standard due to **Network Effects** and muscle memory lock-in.
        `,
    },
];
