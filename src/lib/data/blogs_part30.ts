import { BlogPost } from "../blogs";

export const BLOGS_PART_30: BlogPost[] = [
    {
        slug: "how-bitcoin-works-ledger",
        title: "The Public Ledger: How Bitcoin Works",
        description: "It isn't a coin. It is a history of transactions that everyone agrees on.",
        category: "Technology",
        publishedAt: "2024-05-01",
        imageUrl: "/images/blockchain-ledger.png",
        tags: ["Technology", "Crypto", "Finance"],
        content: `
## The Double Spend Problem
Digital files are copyable. (Ctrl+C).
If I email you a dollar.jpg, I still have the file.
I can send it to Alice too.
This is **Double Spending**.
Banks solve this by having a central database.

## Deep Dive: The Merkle Tree
How do you check if a transaction exists in a block with 4,000 others without downloading the whole thing?
You use a **Merkle Tree**.
It hashes pairs of transactions together ($Hash(A+B) = AB$), then hashes the results ($Hash(AB+CD) = ABCD$), until you reach a single **Root Hash**.
If one tiny byte changes in any transaction, the Root Hash changes completely (Avalanche Effect).
The Block Header only stores this Root Hash, keeping the chain lightweight (SPV Wallets).

### The Blockchain (Decentralized)
Bitcoin solves this by giving the database to **Everyone**.

### The Blockchain (Decentralized)
Bitcoin solves this by giving the database to **Everyone**.
1.  **The Sheet:** Imagine a Google Sheet that everyone can read but only append to.
2.  **The Block:** Every 10 minutes, we take all new transactions and seal them in a "Block."
3.  **The Chain:** We lock this block to the previous one using Math (Hashing).
If you try to edit a transaction from 2010 to say "I have a million dollars," the math doesn't add up. The chain breaks. Everyone ignores your fake version.
**Mining:** Computers burn electricity to do this math/locking. They are paid in Bitcoin.

> **One-Minute Summary**
> Bitcoin creates digital scarcity by maintaining a decentralized public ledger. Thousands of computers constantly verify the transaction history, ensuring that no one can spend the same "coin" twice without a central bank.
        `,
    },
    {
        slug: "how-rsa-encryption-works-primes",
        title: "The One-Way Function: How RSA Encryption Works",
        description: "How to send a secret message to someone you've never met.",
        category: "Technology",
        publishedAt: "2024-05-02",
        imageUrl: "/images/rsa-keys.png",
        tags: ["Technology", "Math", "Security"],
        content: `
## Symmetric Problems
Old codes (Enigma) required us both to have the same password.
But how do I tell you the password without a spy listening?

### Asymmetric Keys (Public/Private)
I have two keys.
1.  **Public Key (The Lock):** I give this to everyone. "Here, use this to lock your message."
2.  **Private Key (The Key):** I keep this secret. Only I can unlock it.
**The Math:** It is easy to multiply two primes ($17 * 23 = 391$). It is hard to factor them back ($391 = ?$).
*   Public Key is the big number (391).
*   Private Key is the factors (17, 23).
Computers can't crack the factors of a 2048-bit number. It would take a billion years.

## Deep Dive: Euler's Totient
The magic isn't just random multiplication. It uses **Modular Arithmetic** (Clock Math).
$m^{ed} \equiv m \pmod n$
*   $m$ is the message.
*   $n$ is the product of primes.
*   $e$ is the public exponent.
*   $d$ is the private trapdoor.
We can calculate $e$ easily. But to calculate $d$, you need to know $\phi(n)$, which you can *only* know if you know the prime factors.
This asymmetry is the foundation of the entire internet (HTTPS).

### Asymmetric Keys (Public/Private)
I have two keys.

> **One-Minute Summary**
> It relies on mathematical trapdoors. You publish a "lock" (based on the product of two giant primes) that anyone can use to encrypt a message, but only you possess the "key" (the primes themselves) to decrypt it.
        `,
    },
    {
        slug: "how-rfid-works-induction",
        title: "The Powered Echo: How RFID Works",
        description: "Your credit card has no battery. How does it talk to the reader?",
        category: "Technology",
        publishedAt: "2024-05-03",
        imageUrl: "/images/rfid-coil.png",
        tags: ["Technology", "Physics", "Electronics"],
        content: `
## Passive Tags
Peel open an RFID sticker (Amazon Go, Hotel Keys).
You see a microchip and a giant Copper Coil.
There is **No Battery**.

## Construction: The Energy Harvester
The tag is a vampire.
1.  **Antenna:** A copper loop tuned to 13.56 MHz.
2.  **Rectifier:** A diode bridge that turns the incoming AC radio wave into DC electricity.
3.  **Capacitor:** A tiny battery (store) that smooths out the power to run the logic chip.
4.  **Modulator:** A transistor that short-circuits the antenna ON/OFF to send data back.

### Inductive Coupling
1.  **The Reader:** The gate emits a strong Magnetic Field.
2.  **The Antenna:** When the tag enters the field, the coil "catches" the magnetism and turns it into Electricity (Induction).
3.  **Wake Up:** The chip wakes up using this stolen power.
4.  **Backscatter:** The chip modifies the coil's resistance. This creates a tiny ripple in the Reader's magnetic field.
    *   Load On = 0.
    *   Load Off = 1.
It "modulates" its reflection to whisper its ID number back to the reader.

> **One-Minute Summary**
> The reading device emits a magnetic field. The tag uses a coil antenna to harvest energy from this field to power its chip, then communicates by selectively interfering with the field (Backscatter) to send data.
        `,
    },
    {
        slug: "how-totp-works-hashing",
        title: "The Shared Secret: How 2FA Works",
        description: "That 6-digit code on your phone changing every 30 seconds. How does Google know what it is?",
        category: "Technology",
        publishedAt: "2024-05-04",
        imageUrl: "/images/totp-app.png",
        tags: ["Technology", "Security", "Math"],
        content: `
## No Internet Needed
You can use Google Authenticator in Airplane Mode. It still works.
Why? Because the app isn't talking to the server.
They are both doing the same math independently.

## Deep Dive: HMAC-SHA1
The algorithm is:
$Code = Truncate(HMAC(Key, Time))$
*   **HMAC (Hash-based Message Authentication Code):** You don't just paste the key and time together. You mix them cryptographically.
*   **Truncate:** The hash is a long chaotic string (e.g., \`a7f92...\`). We just take the last few bits and convert them to decimal (e.g., \`492031\`).
This ensures that even if you have 1,000 codes, you can never reverse-engineer the Key because hashing is one-way.

### The Seed
When you scan the QR code setup, you are sharing a **Secret Key** (Seed) with the server.
**The Algorithm:**
1.  Take the Current Time (Unix Time / 30 seconds).
2.  Combine it with the Secret Key.
3.  Mix them using a Hash Function (HMAC-SHA1).
4.  Take the last 6 digits.
Since Google knows the Time and the Key, and your phone knows the Time and the Key, you both get identical numbers.
**Drift:** If your phone's clock is wrong, the code fails.

> **One-Minute Summary**
> The server and your phone share a secret key. They both input this key + the current time into a hashing algorithm to generate the same temporary code. No communication between them is required.
        `,
    },
    {
        slug: "how-tor-works-onion",
        title: "The Onion Layers: How Tor Works",
        description: "The Dark Web isn't a place. It's a protocol. Encrypting the route.",
        category: "Technology",
        publishedAt: "2024-05-05",
        imageUrl: "/images/tor-onion-routing.png",
        tags: ["Technology", "Security", "Privacy"],
        content: `
## Traffic Analysis
If you use a VPN, the VPN knows who you are and where you are going.
Tor (The Onion Router) solves this by using **Three Nodes**.

### The Layers
1.  **Entry Node:** Knows who you are, but not where you are going.
2.  **Middle Node:** Knows nothing. Just passes encrypted data.
3.  **Exit Node:** Knows where you are going (Google.com), but not who you are.

## Deep Dive: The Hidden Service
Tor isn't just for browsing the web anonymously. It allows you to host a website (onion service) without revealing your IP.
1.  **Rendezvous Point:** The server picks a random Tor node.
2.  **Introduction Point:** The client picks another node.
3.  They meet in the middle.
Neither the client nor the server knows the other's IP. They communicate through the tunnel. This is how the Silk Road existed.

### Encryption
Your computer wraps the message in 3 layers of encryption.

### Encryption
Your computer wraps the message in 3 layers of encryption.
*   Layer 1 (Outer): Decrypted by Entry Node.
*   Layer 2 (Middle): Decrypted by Middle Node.
*   Layer 3 (Inner): Decrypted by Exit Node.
Like peeling an onion, each node only sees enough to pass it to the next guy. No single node knows the full path.

> **One-Minute Summary**
> Tor routes your traffic through three random volunteer computers. It encrypts the data in layers so that each node only knows the immediate predecessor and successor, making it impossible to trace the origin to the destination.
        `,
    }
];
