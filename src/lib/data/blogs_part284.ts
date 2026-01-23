import { BlogPost } from "../blogs";

export const BLOGS_PART_284: BlogPost[] = [
    {
        slug: "morris-worm-first-internet-virus",
        title: "The First Internet Worm: The Morris Worm",
        description: "In 1988, a grad student named Robert Morris wanted to count how big the internet was. He accidentally broke it.",
        category: "Tech",
        publishedAt: "2027-10-28",
        imageUrl: "/images/morris-worm.png",
        tags: ["Tech", "History", "Security"],
        content: `
## Introduction: The Accident
Robert Tappan Morris (Cornell University) wrote a program to map the size of the internet.
To do this, the program copied itself to other computers.
But Morris made a mistake in the code.
He told the worm: "If a computer is already infected, copy yourself anyway (1 in 7 times)."
This created a loop.
The worm copied itself thousands of times on the *same machine*.

## 1. The Crash
The worm consumed all the CPU power.
Computers froze.
It spread to 6,000 machines (10% of the entire internet at the time).
NASA, the Pentagon, and MIT were taken offline.
Scientists had to physically unplug cables to stop it.

## 2. The First Conviction
Morris became the first person convicted under the **Computer Fraud and Abuse Act**.
He was sentenced to probation and a fine.
Ironically, he is now a tenured professor at MIT and a co-founder of **Y Combinator**.
The worm woke the world up to the vulnerability of connected systems.

> **One-Minute Summary**
>
> The **Morris Worm** (1988) was the first reputable worm to spread via the internet. Written by Robert Morris, it was intended to gauge the size of the internet but, due to a coding error, replicated uncontrollably, crashing 10% of all connected computers. It led to the creation of the CERT (Computer Emergency Response Team) and the first felony conviction for cybercrime.
        `,
    },
    {
        slug: "conficker-worm-cyber-mystery",
        title: "The Ghost in the Machine: Conficker",
        description: "In 2008, a worm infected 15 million computers, including the French Navy and UK Parliament. It built a massive botnet. And then... it did nothing.",
        category: "Tech",
        publishedAt: "2027-10-29",
        imageUrl: "/images/conficker-worm.png",
        tags: ["Tech", "Security", "Mystery"],
        content: `
## Introduction: The Infection
**Conficker** (or Downadup) appeared in November 2008.
It used a flaw in Windows (MS08-067) to spread automatically.
But it was smart.
It disabled Windows Updates. It blocked antivirus websites.
It even patched the vulnerability *after* it entered, so no *other* virus could infect the machine.
It wanted the computer all to itself.

## 1. The Countdown
Researchers found a date in the code: **April 1, 2009**.
On that day, the worm was programmed to wake up and contact a command server.
The media went crazy. Was it a cyber weapon? Would it shut down the internet?
The world waited.
April 1 came.
Nothing happened.

## 2. The Purpose
The worm updated itself, but never launched a massive attack.
It seems the creators (likely cybercriminals, not a government) got scared by the attention.
They used the massive botnet for simple spam and fake antivirus scams, wasting the most powerful cyber-weapon ever built.

> **One-Minute Summary**
>
> **Conficker** was a computer worm that infected millions of computers in 2008, creating a massive botnet. It was notable for its advanced defensive mechanisms (blocking security sites, patching its own entry routes). despite widely publicized fears of a "doomsday" payload on April 1, 2009, the botnet was ultimately used for mundane cybercrime (spam/scamware) rather than cyberwarfare.
        `,
    },
    {
        slug: "solarwinds-hack-supply-chain",
        title: "The Hack That Hit Everyone: SolarWinds",
        description: "How do you hack the Pentagon? You don't. You hack the software company that the Pentagon trusts to monitor its servers.",
        category: "Tech",
        publishedAt: "2027-10-30",
        imageUrl: "/images/solarwinds-hack.png",
        tags: ["Tech", "Security", "Politics"],
        content: `
## Introduction: Orion
**SolarWinds** is a company that makes IT monitoring software called **Orion**.
It is used by 33,000 customers, including most Fortune 500 companies and the US Government.
In 2020, hackers (allegedly Russian Intelligence/SVR) didn't attack the customers.
They attacked SolarWinds.

## 1. The Poisoned Update
They injected malicious code (Sunburst) into the **Build System** of Orion.
When SolarWinds sent out a legitimate, digitally signed software update, they unknowingly sent the virus to all their clients.
Because the update was "Signed," antivirus software trusted it.
It was the perfect Trojan Horse.

## 2. The Impact
The hackers gained access to the emails and files of:
*   The US Treasury.
*   The Department of Homeland Security.
*   Microsoft.
*   Intel.
They were undetected for **9 months**.
It was only discovered because a security firm (FireEye) noticed their *own* tools were stolen.

> **One-Minute Summary**
>
> The **SolarWinds Hack** (2020) was a massive supply chain cyberattack. Hackers compromised the build system of the SolarWinds Orion monitoring software, hiding malicious code in legitimate updates. This allowed them to infiltrate thousands of government and corporate networks, including top US agencies, bypassing traditional defenses by riding on trusted software relationships.
        `,
    },
    {
        slug: "zeus-banking-trojan-malware",
        title: "The King of Banking Trojans: Zeus",
        description: "It didn't want to crash your computer. It wanted to watch you log in. Zeus stole hundreds of millions of dollars by hiding inside your web browser.",
        category: "Tech",
        publishedAt: "2027-10-31",
        imageUrl: "/images/zeus-malware.png",
        tags: ["Tech", "Crime", "Security"],
        content: `
## Introduction: Man-in-the-Browser
**Zeus** (first identified in 2007) was a Trojan Horse designed for theft.
It waited silently on infected computers.
When the user navigated to a banking website (like Bank of America), Zeus woke up.
It performed a **Man-in-the-Browser** attack.
It could modify the webpage you were looking at.
It would add extra fields asking for your PIN, Social Security Number, or Mother's Maiden Name.
The user thought the bank was asking. It was Zeus.

## 1. The Money Laundering
Once it had the credentials, it emptied the account.
But you can't just transfer $10,000 to Russia without raising flags.
So Zeus used a network of **Money Mules**.
It recruited people (often via "Work From Home" scams) to receive the money in their local accounts, withdraw it as cash, and Western Union it to the hackers (keeping a 10% fee).

## 2. The Retirement
In 2011, the creator of Zeus (known as Slavik) announced his retirement.
He leaked the source code of Zeus online.
This led to thousands of variants being created by script kiddies, making banking malware a permanent plague.

> **One-Minute Summary**
>
> **Zeus** was a sophisticated Trojan malware that targeted Windows computers to steal banking information. It used keystroke logging and **Man-in-the-Browser** form grabbing to capture login credentials. At its peak, it infected millions of machines and was responsible for hundreds of millions of dollars in theft worldwide.
        `,
    },
    {
        slug: "mirai-botnet-iot-attack",
        title: "When Toasters Attack: The Mirai Botnet",
        description: "In 2016, half the internet went down. The attack came from millions of hacked security cameras and baby monitors. It was created by Minecraft players.",
        category: "Tech",
        publishedAt: "2027-11-01",
        imageUrl: "/images/mirai-botnet.png",
        tags: ["Tech", "Security", "IoT"],
        content: `
## Introduction: The Internet of Things
**Mirai** (Japanese for "Future") was a malware that didn't target computers.
It targeted the **Internet of Things (IoT)**: smart cameras, routers, and DVRs.
These devices are insecure. Nobody changes the default password.
Mirai just scanned the internet trying "admin/admin" and "root/12345."
It infected 600,000 devices.

## 1. The Attack
On October 21, 2016, the Mirai botnet launched a massive DDoS attack against **Dyn** (a major DNS provider).
Because Dyn provides the address book for the web, major sites went offline:
*   Twitter
*   Netflix
*   Reddit
*   CNN
The attack traffic was **1.2 Terabits per second**.

## 2. Minecraft?
Everyone thought it was Russia or China.
It was actually three college students (Paras Jha, Josiah White, Dalton Norman).
They originally built it to DDoS **Minecraft servers** to eliminate competition for their own servers.
They accidentally built a weapon capable of nuking the internet.
They released the source code online to hide their tracks, which only made it worse.

> **One-Minute Summary**
>
> The **Mirai Botnet** (2016) was a malware strain that infected insecure IoT devices (cameras, routers) by exploiting default passwords. It pooled these weak devices into a massive botnet that launched record-breaking **DDoS attacks** (up to 1.2 Tbps), famously taking down major swaths of the internet by attacking the DNS provider Dyn. It revealed the critical security fragility of the growing Internet of Things.
        `,
    },
];

