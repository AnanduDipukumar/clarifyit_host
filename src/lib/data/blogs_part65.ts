import { BlogPost } from "../blogs";

export const BLOGS_PART_65: BlogPost[] = [
    {
        slug: "tcp-ip-handshake-packet",
        title: "The Polite Protocol: TCP/IP",
        description: "The internet works because computers are polite. 'SYN, SYN-ACK, ACK'. How packets find their way across the world.",
        category: "Networks",
        publishedAt: "2025-01-24",
        imageUrl: "/images/tcp-handshake.png",
        tags: ["Networks", "Coding", "Tech", "Deep Dive"],
        content: `
## Introduction: Best Effort
The Post Office doesn't guarantee your letter will arrive.
The Internet (IP) doesn't either.
It is a "Best Effort" network. Packets get lost. Dropped. Arrive out of order.
**TCP (Transmission Control Protocol)** is the layer that fixes the mess.

## 1. The 3-Way Handshake
Before sending data, Alice calls Bob.
1.  **SYN:** "Hello? Can I speak to Bob?" (Synchronize).
2.  **SYN-ACK:** "I am Bob. I hear you." (Synchronize-Acknowledge).
3.  **ACK:** "Great. Here is the data." (Acknowledge).
If step 2 is missing... Alice resends.
This ensures the connection is alive.
**UDP (User Datagram Protocol):**
UDP is rude. It just screams the data. NO handshake.
Used for Video Games and Streaming.
If you lose a pixel, who cares? You don't want to pause the game to ask for it back.

## 2. Windowing (Flow Control)
Alice is fast (Fiber). Bob is slow (Dial-up).
If Alice sends too fast, Bob chokes (Buffer Overflow).
TCP allows Bob to say: **"Window Size = 1000"**.
"Send me 1000 bytes, then STOP and wait for me to say OK."
It throttles the speed to the slowest link in the chain.

## 3. The OSI Model
TCP/IP is a stack.
*   Layer 7: Application (HTTP - Webpage).
*   Layer 4: Transport (TCP - Reliability).
*   Layer 3: Network (IP - Addressing).
*   Layer 2: Data Link (Ethernet - Cables).
*   Layer 1: Physical (Light/Electricity).
When you click a link, the request goes down the elevator from 7 to 1, crosses the world, and goes up 1 to 7 on the server.

### Fact Box
*   **The TTL (Time To Live):** Every packet has a self-destruct timer (usually 64 hops). If it gets lost in a loop.... 64, 63, 62... 0. It dies. This prevents the internet from getting clogged with zombie packets forever.
        `,
    },
    {
        slug: "submarine-cables-internet-backbone",
        title: "The Glass Thread: Submarine Cables",
        description: "99% of internet traffic goes underwater. Sharks bite them. Spies tap them. The fragile backbone of the cloud.",
        category: "Networks",
        publishedAt: "2025-01-25",
        imageUrl: "/images/submarine-cable-map.png",
        tags: ["Networks", "Infra", "Maps", "Deep Dive"],
        content: `
## Introduction: Satellites are too slow
Starlink is great.
But High Frequency Trading needs milliseconds.
Light in glass (Fiber) is faster than Radio to Space and back.
The world is wired.

## 1. The Anatomy
The fiber is hair-thin.
The cladding is thick.
*   Polyethylene (Waterproof).
*   Mylar (Insulation).
*   Steel Wires (Strength).
*   Aluminum (Power).
*   Copper (Power).
Why power? To run the **Repeaters**.
Every 50km, the light gets dim. A repeater amplifies it.
The cable carries 10,000 Volts to feed them.

## 2. The Shark Threat (Myth)
In the 80s, sharks bit the cables. (They sensed the electromagnetic field).
We added shielding. Sharks stopped biting.
**The Real Threat:**
Fishing Trawlers.
Ships dragging anchors.
They cut cables constantly.
We have a fleet of "Cable Ships" on standby 24/7 to pull up the broken ends and splice them.

## 3. Geopolitics
Russia has submarines (Losharik) designed to cut cables in a war.
If they cut the Atlantic cables... US Banks lose contact with London.
Economic collapse in seconds.
It is the modern version of cutting telegraph lines.
It is why Google and Facebook are building their *own* private cables (Marea, Dunant) to bypass the telcos.

### Fact Box
*   **The Latency War:** A straight line is faster. A cable was laid through the Arctic (Arctic Connect) to shave 20ms off the London-Tokyo route. 20ms is worth Billions in the stock market.
        `,
    },
    {
        slug: "bgp-hijacking-routing-protocol",
        title: "Breaking the Map: BGP Hijacking",
        description: "BGP is the GPS of the internet. It relies on trust. If you lie, you can steal the world's traffic. How China Telecom 'accidentally' routed US military traffic through Beijing.",
        category: "Networks",
        publishedAt: "2025-01-26",
        imageUrl: "/images/bgp-route.png",
        tags: ["Networks", "Security", "Hacking", "Deep Dive"],
        content: `
## Introduction: Border Gateway Protocol
The Internet is a "Network of Networks".
ISP A needs to talk to ISP B.
BGP says: "To get to YouTube (IP 8.8.8.8), go through me. I represent YouTube."
It relies on the honor system.

## 1. The Hijack
2008. Pakistan ordered YouTube blocked.
Pakistan Telecom configured BGP: "All traffic to YouTube -> Blackhole (Null)."
**Mistake:** They accidentally advertised this rule to the *Global* Internet.
Suddenly, every computer in the world (including in the US) thought Pakistan was the best path to YouTube.
Result: YouTube went offline globally for 2 hours.
All traffic was funneled to Pakistan and died.

## 2. Malicious Hijacks
2019. China Telecom "accidentally" advertised routes for European Mobile traffic.
For 2 hours, calls from Paris to Madrid went via Beijing.
Did they record them? Probably.
It is a Man-in-the-Middle attack at the nation-state level.
Because BGP was written in the 80s (Napkin protocol), it has no built-in security.

## 3. RPKI (The Fix)
Resource Public Key Infrastructure.
A digital signature for routes.
"I am YouTube, and I certify that ONLY Verizon and AT&T are allowed to advertise my route."
If China tries to advertise it... the signature fails.
Adoption is slow (60%). But it is happening.

### Fact Box
*   **The 7 Keys:** The DNS Root Zone (the phonebook of the internet) is secured by 7 physical keys held by 7 people around the world. Every 3 months, they meet in a secure bunker for a "Key Signing Ceremony" to update the master password.
        `,
    },
    {
        slug: "tor-onion-routing-privacy",
        title: "Layers of Secrecy: How Tor Works",
        description: "The US Navy built it. Criminals use it. Identifying the user is mathematically impossible... unless you own the nodes.",
        category: "Networks",
        publishedAt: "2025-01-27",
        imageUrl: "/images/tor-onion.png",
        tags: ["Networks", "Privacy", "Crypto", "Deep Dive"],
        content: `
## Introduction: Traffic Analysis
If I encrypt my message... the spy can't read it.
But they can see *who* sent it and *who* received it. (Traffic Analysis).
"Bob talked to Al-Qaeda."
Tor (The Onion Router) hides the "Who".

## 1. The Onion
You don't send the packet to the destination.
You wrap it in 3 layers of encryption.
1.  **Entry Node:** Peels layer 1. Sees You. Does not see Destination.
2.  **Middle Node:** Peels layer 2. Sees Entry. Sees Exit. (Knows nothing about data).
3.  **Exit Node:** Peels layer 3. Sees Destination. Does not see You.
No single node knows the full path.

## 2. The Risks (Exit Nodes)
The Exit Node sees the final request (unencrypted HTTP).
If you login to Gmail over Tor... the Exit Node can steal your password.
Unless you use HTTPS (End-to-End).
Also: Anyone can run an Exit Node. Even the NSA.
If the NSA owns enough nodes... they can use statistical timing analysis to de-anonymize you.

## 3. Onion Services (.onion)
Dark Web sites don't use DNS.
They use Public Key hashes as URLs.
\`facebookcorewwwi.onion\`
The site hides its location inside the Tor network.
You connect to it via a "Rendezvous Point" in the middle.
Neither you nor the server know each other's IP.
Perfect privacy.

### Fact Box
*   **Bridge Nodes:** Countries block the Tor IP list. So Tor uses "Bridges" (Secret unlisted nodes). You have to email a bot to get a Bridge IP. It is a game of whack-a-mole.
        `,
    },
    {
        slug: "5g-millimeter-wave-beamforming",
        title: "The Speed of Light: How 5G Works",
        description: "It's not just 4G but faster. It uses a new part of the spectrum (Millimeter Wave) that behaves like a laser.",
        category: "Networks",
        publishedAt: "2025-01-28",
        imageUrl: "/images/5g-tower.png",
        tags: ["Networks", "Physics", "Tech", "Deep Dive"],
        content: `
## Introduction: The Spectrum Crunch
2.4 GHz (WiFi) is crowded.
4G (700 MHz) is crowded.
We ran out of radio waves.
So we moved up.
**Millimeter Wave (mmWave):** 24 GHz - 100 GHz.
Huge bandwidth. Incredible speed (10 Gbps).

## 1. The Problem (Absorption)
High frequency waves are fragile.
Rain absorbs them.
Leaves absorb them.
Your hand absorbs them.
If you turn your back to the tower... you lose signal.
5G requires a tower on every lamppost, not every hill.

## 2. Beamforming (Phased Array)
Old towers broadcast in a circle (Omni). Wasteful.
5G towers use **Phased Arrays**.
Hundreds of tiny antennas.
They fire a focused beam *directly at your phone*.
As you walk, the beam tracks you.
It bounces the beam off buildings to reach you around corners.
It is "Smart Radio".

## 3. IOT (Internet of Things)
5G isn't for phones. It's for cars.
Latency: 1ms.
A self-driving car can talk to the traffic light ("I am coming, turn green") instanty.
A surgeon can control a robot arm remotely without lag.
It is the nervous system of the smart city.

### Fact Box
*   **The Covid Conspiracy:** mmWave (60 GHz) is absorbed by Oxygen molecules. Conspiracy theorists claimed it "sucked the oxygen out of your lungs" (Covid). Total nonsense. It is non-ionizing radiation. It can't break DNA. It creates heat (like the sun), but at such low power it is harmless.
        `,
    },
];
