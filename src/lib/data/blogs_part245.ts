import { BlogPost } from "../blogs";

export const BLOGS_PART_245: BlogPost[] = [
    {
        slug: "turing-machine-computer-theory",
        title: "The Infinite Tape: The Turing Machine",
        description: "Before computers existed, Alan Turing completely invented the theory of how they work. It's just a head reading a tape.",
        category: "Tech",
        publishedAt: "2027-04-15",
        imageUrl: "/images/turing-machine.png",
        tags: ["Tech", "Math", "History"],
        content: `
## Introduction: The Universal Machine
In 1936, "Computer" meant a person who did math.
Alan Turing imagined a machine.
It wasn't made of metal. It was a thought experiment.
Imagine a long strip of paper (**Tape**) with symbols (0 and 1).
A **Head** reads the symbol, changes it, and moves left or right.

## 1. Everything is a Turing Machine
Turing proved that this simple machine can compute *anything* that is computable.
Your iPhone, a Supercomputer, and your brain... are all just Turing Machines.
They are faster, but they can't solve problems the tape machine can't.

## 2. The Halting Problem
He also proved there are things computers *cannot* do.
You can't write a program that checks if another program will freeze (The Halting Problem).
Computers are not omnipotent.

> **One-Minute Summary**
>
> A **Turing Machine** is a mathematical model of computation describing an abstract machine that manipulates symbols on a strip of tape according to a table of rules. It is the theoretical basis for all modern computers. If a problem can be solved by an algorithm, a Turing Machine can solve it.
        `,
    },
    {
        slug: "babbage-difference-engine-steampunk",
        title: "The Computer Made of Gears: The Difference Engine",
        description: "In the 1800s, Charles Babbage tried to build a computer out of brass and steam. He failed, but he was right.",
        category: "Tech",
        publishedAt: "2027-04-16",
        imageUrl: "/images/difference-engine.png",
        tags: ["Tech", "History", "Steampunk"],
        content: `
## Introduction: Human Error
Navigation tables (used by sailors) were full of errors because humans calculated them.
Ships sank because of bad math.
Charles Babbage wanted to remove the human error.
"I wish to God these calculations had been executed by steam."

## 1. The Analytical Engine
He designed the **Analytical Engine**.
It had a CPU ("The Mill").
It had RAM ("The Store").
It used Punch Cards (borrowed from Jacquard Looms).
It was a general-purpose computer.
**Ada Lovelace** wrote the first program for it (calculating Bernoulli numbers). She is the first programmer.

## 2. Impossible Engineering
He never finished it.
Victorian engineering wasn't precise enough to make the thousands of gears fit perfectly.
But in 1991, the Science Museum built one from his drawings.
It worked perfectly.

> **One-Minute Summary**
>
> The **Difference Engine** and the **Analytical Engine** were mechanical computers designed by **Charles Babbage** in the 19th century. While the Difference Engine was a calculator, the Analytical Engine was the first design for a Turing-complete General Purpose Computer. It featured a memory, a processor, and input via punch cards.
        `,
    },
    {
        slug: "transatlantic-cable-internet",
        title: "The Victorian Internet: The Transatlantic Cable",
        description: "It took weeks to send a message from London to New York. Then, in 1858, a copper wire dropped in the ocean changed the world.",
        category: "Tech",
        publishedAt: "2027-04-17",
        imageUrl: "/images/transatlantic-cable.png",
        tags: ["Tech", "History", "Communication"],
        content: `
## Introduction: The Silence
Before 1858, the fastest information traveled was the speed of a ship (10 days).
Cyrus Field wanted to lay a telegraph cable across the Atlantic Ocean.
2,000 miles of deep sea.

## 1. The Failures
The cable snapped. Storms hit.
Finally, in 1858, they connected Ireland to Newfoundland.
Queen Victoria sent a message to President Buchanan.
It took 17 hours to send 98 words.
(The signal was weak).
The operator tried to boost the voltage... and fried the cable. It died after 3 weeks.

## 2. Success
They tried again in 1866 with the *SS Great Eastern* (largest ship in the world).
It worked.
Communication went from 10 days to minutes.
It was the birth of the Global Village.
Today, 99% of Internet traffic still travels through undersea cables, not satellites.

> **One-Minute Summary**
>
> The **Transatlantic Telegraph Cable** was the first instant communication link between Europe and America. Completed in 1866 after multiple failures, it reduced communication time from weeks to minutes, effectively beginning the era of global telecommunications.
        `,
    },
    {
        slug: "open-source-linux-vs-windows",
        title: "The Cathedral and the Bazaar: Open Source",
        description: "Microsoft built a Cathedral (Closed, Perfect). Linus Torvalds built a Bazaar (Open, Chaotic). Why the messy Bazaar won.",
        category: "Tech",
        publishedAt: "2027-04-18",
        imageUrl: "/images/open-source.png",
        tags: ["Tech", "Code", "Linux"],
        content: `
## Introduction: Free as in Speech
In the 90s, software was a product. You bought Windows. You couldn't see the code.
**Open Source** (Linux) said: "Here is the code. Fix it yourself."

## 1. Linus's Law
"Given enough eyeballs, all bugs are shallow."
If 1,000 strangers look at the code, they will find the bugs faster than 100 paid employees.
Microsoft fought it hard ("Linux is a cancer").
But the internet (Apache Servers) ran on Open Source.

## 2. The Victory
Today, Open Source won.
Android is Linux. The Cloud is Linux.
Even Microsoft now loves Linux (Azure).
It turns out that collaboration beats secrecy.

> **One-Minute Summary**
>
> **Open Source Software** is source code that is released with a license in which the copyright holder grants users the rights to study, change, and distribute the software. The success of **Linux** demonstrated that decentralized, collaborative development (The Bazaar) can produce more stable and secure software than centralized corporate development (The Cathedral).
        `,
    },
    {
        slug: "arpanet-internet-origins",
        title: "Surviving the Nuke: ARPANET",
        description: "The Internet wasn't built for porn or cats. It was built to survive a nuclear war. The story of Packet Switching.",
        category: "Tech",
        publishedAt: "2027-04-19",
        imageUrl: "/images/arpanet-map.png",
        tags: ["Tech", "History", "Military"],
        content: `
## Introduction: The Central Problem
In the 1960s, phone networks were centralized.
All calls went through a switchboard.
If the Soviets nuked the switchboard, the whole network died.
The US Military (DARPA) needed a network with no center.

## 1. Packet Switching
Paul Baran invented a crazy idea.
Don't send the whole message at once.
Chop it into tiny "Packets".
Throw them into the web.
Packet A goes via Chicago. Packet B goes via Texas.
If Chicago gets nuked, Packet B still arrives.
The computer at the end reassembles them.

## 2. LO
In 1969, the first message was sent from UCLA to Stanford.
They tried to type "LOGIN".
The system crashed after "LO".
"Lo and Behold."
The internet was born.

> **One-Minute Summary**
>
> **ARPANET** (Advanced Research Projects Agency Network) was the precursor to the modern Internet. It established the fundamental technology of **Packet Switching** (breaking data into chunks that take different paths), designed to create a communications network that could withstand a nuclear attack by having no single point of failure.
        `,
    },
];
