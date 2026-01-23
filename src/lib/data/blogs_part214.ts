import { BlogPost } from "../blogs";

export const BLOGS_PART_214: BlogPost[] = [
    {
        slug: "python-language-glue",
        title: "The Glue of the Internet: Python",
        description: "It is slow. It consumes memory. But it runs AI, NASA, and Google. Why did a language named after Monty Python take over the world?",
        category: "Tech",
        publishedAt: "2026-11-11",
        imageUrl: "/images/python-logo.png",
        tags: ["Tech", "Coding", "Python"],
        content: `
## Introduction: Executable Pseudocode
In the 90s, code was hard (C++). You had to manage memory manually.
Guido van Rossum wanted a language that read like English.
\`print("Hello World")\`
No semi-colons. No braces. Just indentation.
Programmers laughed. "It's too slow."

## 1. The Speed Trade-off
Python *is* slow. It is 100x slower than C.
But computers got 1000x faster.
Suddenly, *Developer Time* became more expensive than *Compute Time*.
If Python lets you write an app in a day (vs a week in C), who cares if it runs 0.1 seconds slower?

## 2. The AI Boom
When AI exploded (TensorFlow, PyTorch), scientists needed a language.
They weren't software engineers. They were mathematicians.
They chose Python because it was easy.
Now, the heavy lifting is done by C++ running underneath, but Python is the steering wheel.
It is the lingua franca of Data Science.

> **One-Minute Summary**
>
> **Python** is a high-level, interpreted programming language known for its readability and massive ecosystem. While technically slower than compiled languages like C++, its ease of use has made it the dominant language for **Artificial Intelligence**, Data Science, and Web Development. It prioritizes developer productivity over raw execution speed.
        `,
    },
    {
        slug: "cpp-speed-power",
        title: "With Great Power: C++",
        description: "The language of engines. Video games, Windows, Chrome, and Mars Rovers run on C++. It gives you control, but it lets you shoot yourself in the foot.",
        category: "Tech",
        publishedAt: "2026-11-12",
        imageUrl: "/images/cpp-logo.png",
        tags: ["Tech", "Coding", "Performance"],
        content: `
## Introduction: Close to the Metal
Computers only understand 1s and 0s.
**C++** is one step above that.
It lets you control exactly which byte of RAM is used.
This makes it **Fast**.
If you need to render 60 frames per second in Call of Duty, you use C++.

## 1. Manual Transmission
Python is an automatic car. C++ is a stick shift.
You have to allocate memory (**malloc**) and delete it (**free**).
If you forget to delete it -> **Memory Leak** (Computer crashes).
If you try to access deleted memory -> **Segfault** (Computer crashes).
It demands perfection.
"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off." - Bjarne Stroustrup.

## 2. Legacy
It is 40 years old.
It is ugly. The syntax is a horror.
But it runs the world's infrastructure. It isn't going anywhere.

> **One-Minute Summary**
>
> **C++** is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It provides facilities for low-level memory manipulation. It is the industry standard for system software, game engines, and high-performance applications where speed and resource management are critical.
        `,
    },
    {
        slug: "rust-safety-speed",
        title: "The C++ Killer: Rust",
        description: "For 30 years, we had to choose: Safe (Java) or Fast (C++). Rust says: Why not both?",
        category: "Tech",
        publishedAt: "2026-11-13",
        imageUrl: "/images/rust-logo.png",
        tags: ["Tech", "Coding", "Future"],
        content: `
## Introduction: The Borrow Checker
Most bugs are memory errors (Null Pointers, Buffer Overflows).
**Rust** solves this with a strict rule: **Ownership**.
Every piece of data has *one* owner.
You can lend it (borrow), but the compiler checks exactly when you give it back.
If you make a mistake, the code *won't compile*.
It yells at you.

## 1. Safe Systems
Microsoft and Google say 70% of their security bugs are memory issues.
Rust eliminates that 70% *at compile time*.
It runs as fast as C++ (no Garbage Collector).
But it is safe.
The Linux Kernel is now accepting Rust code. This is a huge deal.

## 2. The Learning Curve
The downside? It is hard.
Fighting the "Borrow Checker" is frustrating for beginners.
But once it compiles, it usually works.
It is the future of systems programming.

> **One-Minute Summary**
>
> **Rust** is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. It enforces memory safety—that is, that all memory references point to valid memory—without requiring a garbage collector. It is widely viewed as the modern successor to C and C++.
        `,
    },
    {
        slug: "javascript-web-language",
        title: "The Only Language That Matters: JavaScript",
        description: "It was written in 10 days. It was supposed to be a toy. Now it runs every website on Earth.",
        category: "Tech",
        publishedAt: "2026-11-14",
        imageUrl: "/images/javascript-logo.png",
        tags: ["Tech", "Coding", "Web"],
        content: `
## Introduction: 10 Days in May
In 1995, Brendan Eich had to put a scripting language in Netscape Navigator.
He wrote the prototype in 10 days.
It was messy. It had weird bugs (**NaN === NaN is false**).
But it shipped.
And once it was in the browser, it couldn't be removed.

## 1. The Monopoly
JavaScript is the *only* language that runs natively in a web browser.
If you want a website to have buttons that work, you use JS.
Then **Node.js** happened.
Ryan Dahl ripped the JS engine out of Chrome and put it on the Server.
Now you can write JS on the front-end (React) and the back-end (Express).
"Write Once, Run Everywhere."

## 2. Atwood's Law
"Any application that can be written in JavaScript, will eventually be written in JavaScript."
It runs SpaceX dashboards. It runs VS Code (what I'm writing this in).
It is the cockroach of languages: Ugly, resilient, and everywhere.

> **One-Minute Summary**
>
> **JavaScript (JS)** is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use it client-side for web page behavior. Despite its quirks and hasty origins, its universality has made it the most popular programming language in the world.
        `,
    },
    {
        slug: "assembly-machine-code",
        title: "Speaking to the God in the Silicon: Assembly",
        description: "No loops. No variables. Just moving bytes from Register A to Register B. The language close to the metal.",
        category: "Tech",
        publishedAt: "2026-11-15",
        imageUrl: "/images/assembly-code.png",
        tags: ["Tech", "Coding", "Hard"],
        content: `
## Introduction: OpCodes
High-level code (Python) is for humans.
Machine code (Binary) is for CPUs.
**Assembly** is the translation layer.
\`MOV EAX, 1\` (Move the number 1 into the Accumulator).
\`ADD EAX, 2\` (Add 2).
It is tedious.
To write "Hello World" takes 20 lines of code.

## 1. Why use it?
Nobody writes apps in Assembly.
But Reverse Engineers use it.
When you crack a game or analyze a virus, you don't have the source code. You only have the binary.
You turn the binary back into Assembly to see what it's doing.
It is also used for ultra-optimization (embedded systems, bootloaders).

## 2. Abstraction
Assembly reminds us that "Variables" and "Functions" don't exist.
Computers are just calculators pushing numbers into slots.
Everything else is an illusion created by the compiler.

> **One-Minute Summary**
>
> **Assembly Language** is any low-level programming language in which there is a very strong correspondence between the instructions in the language and the architecture's machine code instructions. It is readable by humans (barely) but translates 1:1 into CPU operations. It offers total control but requires managing every single processor register manually.
        `,
    },
];
