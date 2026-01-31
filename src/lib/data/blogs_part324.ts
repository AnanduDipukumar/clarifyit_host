import { BlogPost } from "../blogs";

export const BLOGS_PART_324: BlogPost[] = [
    {
        slug: "undersea-cables-internet-backbone",
        title: "The Internet is a Tube: Undersea Cables",
        description: "99% of internet traffic travels through thin fiber optic cables on the ocean floor. Sharks bite them. Ships break them. Spies tap them.",
        category: "Technology",
        publishedAt: "2028-03-29",
        imageUrl: "/images/undersea-cable-map.png",
        tags: ["Tech", "Infrastructure", "Internet", "Ultimate Guide"],
        content: `
## Introduction: Not Satellites
Most people think the internet is in the sky (Satellites).
Wrong. Satellites are slow (High Latency).
The internet is in the mud.
There are ~500 cables stretching across the Atlantic/Pacific.
They are the width of a garden hose.

## 1. How they work
**Fiber Optics:** Light is shot down a glass thread.
The glass is so pure that if the ocean was made of it, you could see the bottom.
Every 50 miles, there is a "Repeater" (a signal booster) powered by copper wires carrying 10,000 volts from shore.

## 2. Threats
*   **Sharks:** For some reason, sharks love to chew them. (Maybe they sense the electromagnetic field). Google now wraps cables in Kevlar.
*   **Anchors:** A ship drops anchor in the wrong spot -> Internet goes down for a whole country (happened to Tonga).
*   **Spies:** In the Cold War, the US submarine *Jimmy Carter* tapped Russian cables. Russia is suspected of mapping them today.

## 3. Capacity
A single cable (like MAREA) can transmit **200 Terabits per second**.
That is enough to stream every movie on Netflix simultaneously in 4K.
The future is not just "The Cloud". It is "The Ocean".

> **One-Minute Summary**
>
> The physical Internet consists of hundreds of **Undersea Fiber Optic Cables** laid on the ocean floor. They carry 99% of international data traffic. Despite their importance, they are surprisingly fragile (vulnerable to ship anchors and shark bites) and are critical targets for geopolitical espionage.
        `,
    },
    {
        slug: "dns-domain-name-system",
        title: "The Phonebook of the Internet: DNS",
        description: "Computers don't speak English. They speak IP Addresses. DNS translates 'google.com' into '142.250.190.46'. If it breaks, the web vanishes.",
        category: "Technology",
        publishedAt: "2028-03-30",
        imageUrl: "/images/dns-lookup.png",
        tags: ["Tech", "Coding", "Internet", "Ultimate Guide"],
        content: `
## Introduction: Memorizing Numbers
Imagine if you had to remember "172.217.16.206" to watch YouTube.
The **Domain Name System (DNS)** prevents this.
It maps human names to machine numbers.

## 1. The Hierarchy
1.  **You:** Type "google.com".
2.  **Resolver (ISP):** "I don't know where that is. Let me ask the Root."
3.  **Root Server:** "I don't know. But I know who handles '.com'. Go ask the TLD Server."
4.  **TLD Server:** "I know where 'google.com' is. Go ask the Authoritative Server."
5.  **Authoritative Server:** "Here is the IP."
This conversation happens in 0.05 seconds.

## 2. The 7 Keys to the Internet
The "Root Zone" is secured by **DNSSEC**.
7 people around the world hold physical keys to a safety deposit box.
Inside are smart cards that can "Restart" the geometry of the internet trust chain if it gets hacked.
It sounds like a movie plot. It is real.

## 3. DNS Attacks
ddoS attacks often target DNS servers (like Dyn in 2016).
If DNS goes down, Twitter, Amazon, and Netflix go down.
The servers are fine. But no one can find the address.
"The lights are on but the GPS is broken."

> **One-Minute Summary**
>
> **DNS (Domain Name System)** is the decentralized directory of the internet. It translates human-readable domain names (like google.com) into machine-readable IP addresses. It functions through a hierarchical query system. The security of the "Root Zone" is protected by a ceremonial key ceremony involving seven keyholders from around the world.
        `,
    },
    {
        slug: "tor-onion-routing-dark-web",
        title: "The Onion Router: How Tor Works",
        description: "The Dark Web isn't just for criminals. It was built by the US Navy to protect spies. It wraps your data in layers of encryption like an onion.",
        category: "Technology",
        publishedAt: "2028-03-31",
        imageUrl: "/images/tor-onion.png",
        tags: ["Tech", "Privacy", "Security", "Ultimate Guide"],
        content: `
## Introduction: Traffic Analysis
If you send a letter, the postman sees the "To" and "From" address.
Even if the letter is encrypted, the *metadata* reveals who you are talking to.
**Tor** hides the metadata.

## 1. The Onion
You don't send data directly to the server.
You send it through 3 random volunteers (Nodes).
1.  **Entry Guard:** Knows who you are, but not what you are saying.
2.  **Middle Relay:** Knows nothing. Just passes the parcel.
3.  **Exit Node:** Knows what you are saying, but not who you are.
Your data is encrypted 3 times.
Each node peels off one layer (like an **Onion**).
No single node knows the full path.

## 2. The Problem: Exit Nodes
The Exit Node unencrypts the final layer to send it to the regular internet (Google).
If the Exit Node is run by a hacker (or the NSA), they can see your traffic *if* you aren't using HTTPS.
Tor is not magic. It has weaknesses.

## 3. Who uses it?
Yes, drug dealers (Silk Road).
But also:
*   Journalists in dictatorships.
*   Whistleblowers (Edward Snowden).
*   The Police (to investigate criminals anonymously).
It is a dual-use technology. Freedom and Crime use the same roads.

> **One-Minute Summary**
>
> **Tor (The Onion Router)** protects anonymity by bouncing internet traffic through a distributed network of volunteer relays. It wraps data in multiple layers of encryption, peeling them off one by one at each hop. Originally designed by the US Navy, it prevents traffic analysis and enables the existence of the "Dark Web" (.onion sites).
        `,
    },
    {
        slug: "how-wifi-works-radio",
        title: "Invisible Light: How Wi-Fi Works",
        description: "Wi-Fi is just a radio. It flashes invisible light at 2.4 billion times per second. Why does the microwave kill your signal?",
        category: "Technology",
        publishedAt: "2028-04-01",
        imageUrl: "/images/wifi-waves.png",
        tags: ["Tech", "Physics", "Everyday", "Ultimate Guide"],
        content: `
## Introduction: Hedy Lamarr
The movie star Hedy Lamarr invented "Frequency Hopping" in WWII to stop Nazis from jamming torpedoes.
This technology is the grandfather of Wi-Fi.

## 1. The Frequencies (2.4GHz vs 5GHz)
Wi-Fi uses Radio Waves (Microwaves).
*   **2.4GHz:** Goes through walls better (Longer wave). But it is crowded (Bluetooth, Baby Monitors).
*   **5GHz:** Faster (More data). But stopped by walls.
Why 2.4GHz?
Because the FCC declared it a "Junk Band" for microwave ovens.
Your microwave oven resonates water molecules at 2.45GHz.
If your microwave leaks shield radiation... your Netflix stops.

## 2. Modulation (CSMA/CA)
Wi-Fi is polite.
Before speaking, your phone listens. "Is anyone else talking?"
If yes, it waits a random amount of time.
If no, it shouts a packet of data.
It's like a walkie-talkie conversation at high speed.
"Over." "Roger." "Over."

## 3. The Future (Li-Fi)
Using light bulbs (LEDs) to flash data.
It is faster than radio.
But you can't block the light.
It might replace Wi-Fi in high-security buildings.

> **One-Minute Summary**
>
> **Wi-Fi** transmits data using radio waves in the 2.4GHz and 5GHz spectrums. It relies on **Frequency Hopping** (invented by actress Hedy Lamarr) to avoid interference. The 2.4GHz band was originally an unlicensed "garbage band" reserved for microwave ovens, which is why kitchen appliances often interfere with the signal.
        `,
    },
    {
        slug: "404-error-myth",
        title: "The Legend of Room 404",
        description: "Why is 'Page Not Found' always Error 404? Was it a room at CERN? No. It is just boring taxonomy.",
        category: "Technology",
        publishedAt: "2028-04-02",
        imageUrl: "/images/404-error.png",
        tags: ["Tech", "History", "Coding", "Ultimate Guide"],
        content: `
## Introduction: The Myth
The story goes: At CERN (where the Web was born), the database was in **Room 404**.
When scientists couldn't find a file, they yelled: "Go check Room 404!"
It's a great story.
It is completely false. CERN didn't have a Room 404.

## 1. HTTP Status Codes
Tim Berners-Lee needed a system.
*   **2xx:** Success (200 OK).
*   **3xx:** Redirection (301 Moved).
*   **4xx:** Client Error (You messed up).
*   **5xx:** Server Error (I messed up).

## 2. Why 404?
*   **4:** Client Error category.
*   **0:** Syntax Error category.
*   **4:** "Not Found" specific error.
It was just the 4th error in the 0th category.
(403 is Forbidden. 418 is "I'm a Teapot" - an April Fools joke that became a standard).

## 3. Cultural icon
404 is the most famous number on the web.
It represents "Lost".
Modern websites use it for branding (Funny jokes, lost maps).
It turns a frustrating moment into a brand opportunity.

> **One-Minute Summary**
>
> The **404 Error** ("Page Not Found") is an HTTP status code indicating that the server cannot find the requested resource. The popular legend that it was named after "Room 404" at CERN is a myth. It strictly follows the W3C numbering convention: 4 (Client Error) - 0 (General) - 4 (Not Found).
        `,
    },
];
