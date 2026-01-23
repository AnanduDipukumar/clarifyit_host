import { BlogPost } from "../blogs";

export const BLOGS_PART_51: BlogPost[] = [

    {
        slug: "how-enigma-works-encryption",
        title: "The Impossible Puzzle: How the Enigma Machine Worked",
        description: "The Germans thought it was unbreakable. It had 158 quintillion possibilities. The fatal flaw that saved the world.",
        category: "Technology",
        publishedAt: "2024-08-15",
        imageUrl: "/images/enigma-machine.png",
        tags: ["Technology", "History", "Crypto"],
        content: `
## The Machine That Creates Chaos
The Enigma looks like a typewriter.
But when you press "A", a light bulb lights up "G".
If you press "A" again, it lights up "X".
If you press "A" again, it lights up "P".
**The Polyalphabetic Shift:**
The code changes *after every single keystroke*.
Even if you type "HEIL HITLER", it comes out as "XJLP QWMVZ".
To decode it, you need a machine with the exact same settings.

## The Mechanics
1.  **The Rotors (The Scramblers):**
    Three plastic wheels inside. Each has 26 wires mixed up differently (A -> F, B -> P).
    Every time you type a letter, the first rotor clicks forward one step.
    When it does a full turn, it kicks the second rotor. Then the third. (Like a car odometer).
2.  **The Plugboard (The Steckerbrett):**
    On the front, there are plugs. Soldiers would swap letters manually.
    "Swap A with J". "Swap K with M".
    This added **100 trillion** combinations.
    Total Combinations: **158 Quintillion**.
    If 1,000 people checked one setting every second, it would take longer than the age of the universe to check them all.

## The Fatal Flaw: The Reflector
The Germans added a "Reflector" (Umkehrwalze) at the end of the circuit.
It bounced the signal back through the rotors for a second pass.
**Goal:** It made the machine "Self-Reciprocal".
It meant that if A -> G, then G -> A.
This meant the *same machine* could be used for Encryption and Decryption without changing modes.
**The Mistake:**
Because it "reflected", **A Letter Could Never Be Itself.**
Type "A". You might get B-Z. But you will *never* get A.
**Alan Turing** used this.
If he looked at a code "XJLP", he knew "X" was NOT "W" (Weather report start "Wetter").
This one rule allowed him to eliminate 90% of the possibilities instantly.

### Q&A
1.  **How did we get a machine?**
    The Polish mathematicians (Rejewski) stole the blueprints and built a replica *before* the war started. They gave it to the British (Bletchley Park) in 1939. Without the Polish head start, Turing would have failed.
2.  **Did it shorten the war?**
    Historians estimate it shortened WWII by **2 years** and saved **14 million lives**.
    We knew where the U-Boats were. We routed our convoys around them. The Nazis thought it was "Bad Luck". They never suspected the math was broken.
        `,
    },
    {
        slug: "mouse-englebart-demo",
        title: "The Mother of All Demos: Invention of the Mouse",
        description: "In 1968, Doug Engelbart showed the future. Teleconferencing, Google Docs, and the Mouse. It took 20 years for the world to catch up.",
        category: "Technology",
        publishedAt: "2024-08-16",
        imageUrl: "/images/first-mouse.png",
        tags: ["Technology", "History", "Computer"],
        content: `
## The Wooden Box
December 9, 1968. San Francisco.
Doug Engelbart walks on stage. Use a wooden box with two wheels.
He called it an "X-Y Position Indicator for a Display System".
Someone nicknamed it a "Mouse" because the wire looked like a tail.
In 90 minutes, he demoed:
*   The Mouse.
*   Hyperlinks (Clicking text).
*   Video Conferencing (Skype).
*   Real-time Doc Editing (Google Docs).
The audience gave him a standing ovation.
But he was too early. The computer cost $100,000. Nobody bought it.

## The Xerox PARC Theft
Xerox (the copier company) hired Engelbart's team. They built the **Xerox Alto**.
It had windows, icons, and a mouse.
But Xerox management were copier salesmen. They didn't "get" it. They locked it in the basement.
**Enter Steve Jobs (1979).**
He toured Xerox PARC. He saw the mouse.
He went insane. *"Why aren't you selling this?? This is the future!"*
He went back to Apple and ordered his team to build the **Lisa** and the **Macintosh**.
He famously said: *"Good artists copy. Great artists steal."*
Xerox fumbled the bag on the biggest invention of the century.

## Ball vs Optical
*   **1990s:** The Heavy Rubber Ball.
    It rolled on the desk. It turned two internal rollers (X and Y).
    *Problem:* It picked up lint and cheese dust. You had to open it and scrape the "gunk" off the rollers every month.
*   **2000s:** The Optical Mouse.
    It takes 1,000 photos per second of the desk surface.
    It analyzes the texture shift between photos.
    *Problem:* It fails on glass (Glass has no texture).
*   **Current:** Darkfield Laser. Can track on glass by seeing microscopic dust.

### Q&A
1.  **Who invented QWERTY?**
    Christopher Sholes (1873).
    A typewriter would jam if you pressed two neighboring keys fast.
    So he moved common pairs (like S and T) far apart.
    **QWERTY was designed to slow you down.**
    We still use it on iPhones today purely out of muscle memory habit.
        `,
    },
    {
        slug: "email-at-symbol-history",
        title: "Who Put the @ in Email?",
        description: "Ray Tomlinson needed a separator. He looked down at his keyboard. The accidental choice that defined our identity.",
        category: "Technology",
        publishedAt: "2024-08-17",
        imageUrl: "/images/email-at-sign.png",
        tags: ["Technology", "Internet", "History"],
        content: `
## The Host Problem
In 1971, you could send a message to another user... if they were on the *same* mainframe computer.
\`LOGIN: TOM\` -> \`SEND BILL: HELLO\`.
Ray Tomlinson (BBN Technologies) wanted to send a message from Computer A to Computer B.
He needed a format: \`User [SEPARATOR] Host\`.
He looked at the Teletype keyboard (Model 33).
He needed a symbol that would *never* be in someone's name.
*   Letters? No.
*   Comma? No.
*   Backslash? Used by code.
*   **@ Symbol:** "Shift-P". It meant "At the rate of" (e.g., 10 apples @ $1).
It made sense grammatically. "Tom **AT** BBN-Computer".
He sent the first email. He forgot what it said. (Probably "QWERTYIOP").

## SPAM (Monty Python)
Why do we call junk mail "Spam"?
It comes from a 1970 **Monty Python** sketch.
Two Vikings are in a café. The menu is: "Egg and Spam, Bacon and Spam, Spam Spam Spam and Spam."
They start singing a song: *"Spam, Spam, Spam, Spam!"* drowning out all other conversation.
In the 1980s, chat rooms (MUDs) would get flooded by trolls typing the word "SPAM" 1,000 times to scroll the text off the screen.
The term stuck for any unwanted repetitive noise.

## The First Spam (Gary Thuerk)
1978. Gary Thuerk was a marketer for DEC computers.
He had a new model to sell.
He scraped the directory of ARPANET (Pre-Internet). 400 users.
He sent a mass blast.
**The Reaction:**
People were furious. It was a violation of the unspoken "Gentlemen's Agreement" of the network.
The heavyweights of the internet threatened to ban his company.
He generated $13 million in sales.
Spam was born.

### Q&A
1.  **CC vs BCC?**
    **Carbon Copy:** From the typewriter era. You put a sheet of carbon paper behind the original to make a physical copy.
    **Blind Carbon Copy:** You type the letter, pull it out, type the name on the copy, send it. The recipient doesn't know who else got it.
    It is archaic office lingo living in digital form.
        `,
    },

    {
        slug: "floppy-disk-save-icon",
        title: "The Save Icon: History of the Floppy Disk",
        description: "Kids think it's just 'The Save Button'. It was the magnetic briefcase of the 80s.",
        category: "Technology",
        publishedAt: "2024-08-19",
        imageUrl: "/images/floppy-disk.png",
        tags: ["Technology", "History", "Retro"],
        content: `
## Why was it Floppy?
The first ones (8-inch, 1971) were literally floppy plastic sheets.
If you waved them, they wobbled.
**The Mechanism:**
Inside the plastic square is a circle of magnetic tape (like a cassette).
When you insert it, a motor spins the cookie.
A read head touches the surface (Contact Recording).
**The Evolution:**
1.  **8-inch:** (Nuclear launch codes). 80 Kilobytes.
2.  **5.25 inch:** (Apple II). The "Floppy" used in schools. You had to cut a notch in the side with scissors to make it writable.
3.  **3.5 inch:** (Windows 95). Hard plastic shell. Not floppy. 1.44 MB.

## The Click of Death
A 1.44 MB disk held... nothing.
Maybe one MP3 song (low quality).
If you wanted to install Windows 95, you needed a stack of **13 Disks**.
*"Please insert Disk 11..."* (Grind, Grind, Grind). *"Read Error."*
Scream. Start over.
The reliability was terrible. Magnetic fields (magnets on your fridge) erased them. Dust scratched them.

## The Save Icon Legacy
By 2000, CDs and USB drives killed the floppy.
Apple killed it first (iMac G3, 1998). People were outraged. "How will I move files??" (Steve Jobs: "Use the internet").
But the **Icon** remained.
A 10-year-old today presses the "Little Blue TV" to save their Word doc.
They have no idea it represents a physical object.
It has become a hieroglyph. Like the "Phone Handset" icon (which looks like a banana, not a modern smartphone).

### Q&A
1.  **Are they still used?**
    Yes.
    **Boeing 747-400s** (released 1988) still update their navigation database every month using 3.5" floppies.
    **US Nuclear Machinery** used 8-inch floppies until 2019.
    Why? "If it ain't broke, don't fix it." You can't hack a floppy disk over WiFi.
        `,
    },
];
