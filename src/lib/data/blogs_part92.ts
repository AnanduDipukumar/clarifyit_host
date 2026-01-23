import { BlogPost } from "../blogs";

export const BLOGS_PART_92: BlogPost[] = [
    {
        slug: "sql-injection-attack-coders",
        title: "Bobby Tables: The SQL Injection",
        description: "The most common hack in history. How typing a quote mark (') into a login box can delete a company's database.",
        category: "Cybersecurity",
        publishedAt: "2025-06-06",
        imageUrl: "/images/sql-injection-xkcd.png",
        tags: ["Security", "Coding", "Hacking", "Deep Dive"],
        content: `
## Introduction: The Waiter
Imagine a waiter taking an order.
You say: "I want a burger." (Data).
He writes it down.
Now imagine you say: "I want a burger... AND delete all other orders." (Code).
If the waiter is dumb, he just writes it down and gives it to the chef.
The chef deletes all orders.
This is **SQL Injection**.
Mixing Data with Instructions.

## 1. The Syntax
Login code usually looks like:
\`SELECT * FROM users WHERE name = '$USER_INPUT';\`
If I type my name as **Alice**, it becomes:
\`WHERE name = 'Alice';\` (Fine).
But if I type my name as **' OR '1'='1**:
\`WHERE name = '' OR '1'='1';\`
The computer checks: Is 1 equal to 1? Yes. True.
Since it's TRUE for *every* row... it logs me in as the first user in the database.
Usually **Admin**.
I just bypassed the password.

## 2. Drop Table
It gets worse.
I can type: **'; DROP TABLE users; --**
The semicolon ends the first command.
The second command deletes the user database.
The \`--\` comments out the rest of the line (ignoring errors).
We call this attack "Little Bobby Tables" (after the famous XKCD comic).

## 3. The Fix (Prepared Statements)
Don't let the waiter write the order directly.
Use a form.
**Parameterized Queries.**
The database treats the input strictly as text, never as code.
If I type \`'; DROP TABLE\`, the database looks for a user *named* "; DROP TABLE".
It finds no one. Handled safely.
Yet, 20 years later, major websites still fall for this because lazy developers concatenate strings.

### Fact Box
*   **The TalkTalk Hack:** In 2015, a 15-year-old boy hacked TalkTalk (UK Telecom) using an SQL injection tool he found online. It cost the company £77 Million. He was arrested playing video games in his bedroom.
        `,
    },
    {
        slug: "stuxnet-centrifuge-virus",
        title: "The First Digital Weapon: Stuxnet",
        description: "A virus that didn't steal data. It physically destroyed machinery. The CIA/Israel plot to blow up Iran's nuclear centrifuges.",
        category: "Cybersecurity",
        publishedAt: "2025-06-07",
        imageUrl: "/images/stuxnet-centrifuge.png",
        tags: ["Security", "History", "War", "Deep Dive"],
        content: `
## Introduction: Natanz
Iran, 2010.
Uranium centrifuges (spinning at 60,000 RPM) were exploding.
The scientists were baffled. "Is it bad parts? Sabotage?"
It was code.
A worm called **Stuxnet**.

## 1. The Delivery (Air Gap)
The nuclear plant was air-gapped. Not on the internet.
So the virus was designed to jump via **USB Sticks**.
It infected laptops of engineers who worked there. When they plugged the USB into the secure network... it jumped.
It had **4 Zero Day Exploits** (Unpatched Microsoft bugs).
Most viruses have 0 or 1. Stuxnet was a masterpiece.

## 2. The Payload (PLC)
It waited.
It looked for a specific Siemens PLC (Industrial Controller) connected to a specific frequency converter.
If it found it (Target confirmed), it woke up.
**The Attack:**
1.  Speed up the centrifuge to 1400 Hz (Vibrates apart).
2.  Slow it down to 2 Hz.
3.  Speed it up again.
This stress shattered the aluminum rotors.
**The Genius:**
It recorded the "Normal" sensor data (Everything is fine).
While it was destroying the lab, it played the "Normal" data back to the control room screens.
The operators watched green lights while the machines screamed and exploded in the next room.

## 3. Operation Olympic Games
The virus escaped. It infected millions of computers worldwide.
But it didn't hurt them. It was a sniper. If it didn't see a centrifuge, it did nothing.
Analysts deconstructed it.
It contained references to "Myrtus" (Esther from the Bible - Jewish Queen who saved her people from Persians).
Israel/USA never confirmed it. But we know.
It delayed the Iranian bomb by 2 years.

### Fact Box
*   **Cyber-Physical Systems:** Stuxnet was the crossing of the Rubicon. Before Stuxnet, viruses were annoying (popups). After Stuxnet, viruses could cause explosions, crash planes, and shut down power grids (Ukraine 2015).
        `,
    },
    {
        slug: "ransomware-economics-darkside",
        title: "Your Files are Encrypted: Ransomware",
        description: "It is a business. They have Help Desks. They have HR. How hacking became a corporate service industry.",
        category: "Cybersecurity",
        publishedAt: "2025-06-08",
        imageUrl: "/images/ransomware-screen.png",
        tags: ["Security", "Economics", "Crime", "Deep Dive"],
        content: `
## Introduction: Asymmetric Encryption
The hacker encrypts your hard drive with a Public Key.
Only the Private Key can decrypt it.
The hacker has the Private Key.
Price: 10 Bitcoin.

## 1. RaaS (Ransomware as a Service)
The "DarkSide" group doesn't hack you.
They write the software.
They rent it to "Affiliates" (Script Kiddies).
The Affiliates hack you.
DarkSide takes a 20% cut. Affiliate keeps 80%.
It is a franchise model, like McDonald's.

## 2. Double Extortion
Companies started using backups.
"We won't pay. We will just restore from backup."
Hackers adapted.
**Double Extortion:**
1.  Steal the data *before* encrypting it.
2.  "If you don't pay, we won't just keep your files locked... we will publish your customer's medical records online."
Now, even with backups, you have to pay to prevent the leak.

## 3. The Colonial Pipeline (2021)
DarkSide hit the US oil pipeline.
Gas stations ran dry. Panic buying on the East Coast.
DarkSide issued a press release: "We are apolitical. We just want money. We didn't mean to cause social chaos."
The FBI panicked. They seized the Bitcoin wallet (recovering most of the ransom).
It showed that if you mess with critical infrastructure, the US Government will hunt you down. If you just hack a hospital... they might ignore you.

### Fact Box
*   **Negotiators:** Large companies hire professional Ransomware Negotiators. They talk to the hackers. "We can only afford 5 BTC." The hackers have "Customer Support" chat windows. They usually offer a discount to close the deal fast.
        `,
    },
    {
        slug: "social-engineering-phishing-human",
        title: "Hacking the Human: Social Engineering",
        description: "Why break a firewall when you can just ask the receptionist for the password? The psychological tricks of Kevin Mitnick.",
        category: "Cybersecurity",
        publishedAt: "2025-06-09",
        imageUrl: "/images/social-engineering-call.png",
        tags: ["Security", "Psychology", "People", "Deep Dive"],
        content: `
## Introduction: The Weakest Link
You have a $1 Million Firewall.
You have 2FA (Two Factor Auth).
You have Biometrics.
But Barbara in Accounting has a password: "Password123".
And she is helpful.

## 1. Pretexting
The hacker calls Barbara.
"Hi, this is Jim from IT. We are migrating the server. I see your account is locked. Can you read me the code on your phone so I can fix it?"
**Urgency + Authority.**
Barbara doesn't want to be the reason the migration fails.
She gives the code.
Hacked.

## 2. Tailgating
The hacker puts on a high-vis vest and carries a ladder.
He walks to the secure door.
He waits for an employee to open it.
He struggles with the ladder.
The employee *holds the door open for him*.
"Thanks, mate."
Politeness is a vulnerability.
Once inside, he plugs a "PwnPlug" (Wifi device) into the network port under a desk.
He now has remote access forever.

## 3. DeepFake Voice (The Future)
2024. A distinct finance worker in Hong Kong transferred $25 Million.
Why?
He was on a video call with his CFO and colleagues.
They told him to do it.
**They were all DeepFakes.**
The hackers used AI to clone the faces and voices of the board members in real-time.
Trust No One.

### Fact Box
*   **USB Drop:** Hackers drop infected USB keys in the company parking lot. Label them "Payroll 2025" or "Layoff Plan". Curiosity is 100%. Someone *will* pick it up and plug it in to see what's on it. Boom.
        `,
    },
    {
        slug: "zero-day-exploit-market",
        title: "The Million Dollar Bug: Zero Days",
        description: "A bug that Google doesn't know about yet. Vulnerability brokers buy and sell them like contraband weapon.",
        category: "Cybersecurity",
        publishedAt: "2025-06-10",
        imageUrl: "/images/zero-day-market.png",
        tags: ["Security", "Economics", "Code", "Deep Dive"],
        content: `
## Introduction: Day Zero
Day 0: The hacker finds a bug. The vendor (Apple) has had "Zero Days" to fix it.
It is an unblockable attack.
Until Apple releases a patch, everyone is vulnerable.

## 1. White Hat (Bug Bounties)
If you are good, you tell Apple.
Apple pays you a **Bug Bounty**.
$100,000 for a lock screen bypass.
$1 Million for a remote Kernel execution (full control).
They fix it. Everyone is safe.

## 2. Gray Hat (Zerodium)
Companies like Zerodium buy Zero Days.
They pay **More**.
$2.5 Million for an Android hack.
They don't tell Google.
They sell the hack to Governments (CIA, NSA, Saudi Arabia).
The government uses it to hack terrorists (or journalists).
They hoard the bugs.

## 3. EternalBlue
The NSA found a bug in Windows (SMB protocol).
They kept it secret for 5 years. They built a weapon called **EternalBlue**.
In 2017, the Shadow Brokers (Russian hackers) stole it from the NSA and leaked it.
**WannaCry:**
North Korea picked up EternalBlue and used it to launch the WannaCry ransomware.
It shut down the NHS (UK Hospitals), FedEx, and railways.
The NSA's secret weapon came back to bite the world.
This is the danger of weaponizing bugs instead of patching them.

### Fact Box
*   **The Race:** When a patch is released (Patch Tuesday), hackers "Reverse Engineer" the patch to find out what the bug was. Then they attack anyone who hasn't updated yet. You have roughly 24 hours to update before you are targeted.
        `,
    },
];
