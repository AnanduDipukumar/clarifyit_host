import { BlogPost } from "../blogs";

export const BLOGS_PART_18: BlogPost[] = [
    {
        slug: "sram-vs-dram-capacitor-leak",
        title: "The Leaky Bucket: SRAM vs DRAM",
        description: "Why your computer needs two types of memory. One is fast/expensive, the other is cheap/forgetful.",
        category: "Computing",
        publishedAt: "2024-03-02",
        imageUrl: "/images/ram-microstructure.png",
        tags: ["Computing", "Electronics", "Physics"],
        content: `
## The Storage Tradespace
We want memory to be Fast, Cheap, and Dense.
Physics says: Pick two.

## Construction: The Silicon Cell
A RAM chip is a city of distinct neighborhoods:
1.  **DRAM Cell:** 1 Capacitor + 1 Transistor.
2.  **SRAM Cell:** 6 Transistors wired in a loop.
3.  **Address Lines:** The streets responsible for finding the house (cell).

### DRAM (Dynamic RAM) - The Main Memory
This is the 16GB stick in your laptop.
*   **Mechanism:** It stores a bit (1 or 0) in a tiny **Capacitor** (Bucket).
    *   Full Bucket = 1.
    *   Empty Bucket = 0.
*   **The Problem:** Capacitors leak. The electrons drain out in milliseconds.
*   **The Fix:** You have to "Refresh" it (read and refill the bucket) thousands of times a second. That's why it is called **Dynamic**.
*   **Pros:** Tiny. Cheap. (1 transistor per bit).

### SRAM (Static RAM) - The CPU Cache
This is the L1/L2 Cache inside your processor.
*   **Mechanism:** It uses a **Flip-Flop circuit** (6 Transistors).
    *   It's a latch. It locks in the state "1" or "0".
*   **The Pro:** It never leaks. It doesn't need refreshing. It is blazing fast.
*   **The Con:** It is HUGE (6 transistors vs 1). It is expensive. You can only fit a few MBs on a chip.

> **One-Minute Summary**
> DRAM stores data in leaky buckets (capacitors) that need constant refilling. SRAM stores data in latching switches (transistors) that hold state forever as long as power is on.
        `,
    },
    {
        slug: "how-optical-mice-work-camera",
        title: "The High-Speed Camera: How Optical Mice Work",
        description: "The mouse doesn't know it's moving. It is taking 1,500 photos a second.",
        category: "Computing",
        publishedAt: "2024-03-03",
        imageUrl: "/images/optical-mouse-sensor.png",
        tags: ["Computing", "Optics", "Imaging"],
        content: `
## The Trackball (Dead Tech)
Remember the heavy rubber ball?
It rolled against rollers encoded with holes. Dust killed it.

## Construction: The Digital Eye
Modern mice contain a complete imaging system:
1.  **Light Source:** LED (Red) or Laser (Invisible).
2.  **Lens/Prism:** Focuses the light onto the desk at a sharp angle.
3.  **CMOS Sensor:** A tiny 18x18 pixel camera.
4.  **DSP Chip:** The brain that compares the photos.

## The Optical Engine
Lift up your mouse. You see a light (Red LED or Invisible Laser).
There is also a tiny camera sensor (CMOS).
1.  **Flash:** The LED lights up the surface texture (the microscopic bumps on your desk).
2.  **Snap:** The camera takes a photo.
3.  **Move:** You slide the mouse.
4.  **Snap:** It takes another photo.
5.  **Compare:** The DSP (Digital Signal Processor) looks for common patterns. "Hey, that bump moved 5 pixels to the Left."
6.  **Calculate:** Therefore, the mouse must have moved Right.
It does this 1,500 to 6,000 times per second.

### Why Glass Breakdown
Standard optical mice assume the surface has *texture*.
Glass is smooth/transparent. The camera sees nothing (or sees the reflection of the inside of the mouse).
**Laser Mice** or "Darkfield" tech use coherent light to see the microscopic imperfections even on glass.

> **One-Minute Summary**
> The mouse is a low-resolution, high-speed camera. It tracks movement by analyzing the shift in texture patterns between consecutive frames of the surface below it.
        `,
    },
    {
        slug: "how-keyboards-work-matrix",
        title: "The Matrix Scan: How Keyboards Work",
        description: "It doesn't have 104 wires. It has a grid. The problem of Ghosting.",
        category: "Computing",
        publishedAt: "2024-03-04",
        imageUrl: "/images/keyboard-matrix.png",
        tags: ["Computing", "Electronics", "Inputs"],
        content: `
## Construction: The Mechanical Switch
A good switch (Cherry MX) has four parts:
1.  **Measurement Stem:** The plastic + sign you press.
2.  **Coil Spring:** Provides the resistance.
3.  **Contact Leaf:** Gold-plated metal that touches to close the circuit.
4.  **Housing:** Holds it all together.

## The Wiring Problem
A keyboard has 104 keys.
If you ran a wire for each key + a ground wire, your cable would be as thick as your arm.
We need a **Matrix**.
*   **Rows:** 6 wires.
*   **Columns:** 18 wires.
*   Total Wires = 24. (Much better).

### The Scan
The Controller puts voltage on Row 1.
It listens to all Columns.
If you press 'Q' (Row 1, Col 1), the controller senses voltage on Col 1.
Then it turns off Row 1, scans Row 2.
It does this thousands of times a second.

### Ghosting
What if you press 'Q', 'W', and 'A' at the same time?
*   Q connects Row 1 + Col 1.
*   W connects Row 1 + Col 2.
*   A connects Row 2 + Col 1.
The controller gets confused. Electricity can flow backwards through the grid and make it look like 'S' (Row 2, Col 2) was also pressed.
This is a **Ghost Key**.
**Diodes:** Good keyboards (Mechanical) put a Diode (One-way valve) on every switch to prevent this back-flow. This is "N-Key Rollover."

> **One-Minute Summary**
> Instead of individual wires, keys are arranged in a grid of rows and columns. The processor scans the grid row-by-row to detect which intersections are bridged by a keypress.
        `,
    },
    {
        slug: "how-sla-printers-work-photopolymer",
        title: "Cooking with Light: How Resin Printers (SLA) Work",
        description: "Printing upside down with lasers. The pursuit of infinite resolution.",
        category: "Computing",
        publishedAt: "2024-03-05",
        imageUrl: "/images/sla-printer-laser.png",
        tags: ["Computing", "Manufacturing", "Chemistry"],
        content: `
## FDM vs SLA
*   **FDM (Plastic Wire):** Melt plastic, squirt it out (Hot Glue Gun). visible layer lines.
*   **SLA (Liquid Resin):** Use light to turn liquid into solid. Perfection.

## Construction: The Tower
An SLA printer is a vertical robot:
1.  **The Vat:** A tank with a clear FEP film bottom.
2.  **Build Plate:** The metal platform that moves up.
3.  **Z-Axis Lead Screw:** The motor that lifts the plate.
4.  **UV Source:** An LED array or Laser under the tank.

### Photopolymerization
The "Ink" is a UV-Sensitive Resin.
It is liquid in the bottle.
When UV light hits it, the photo-initiators trigger a chain reaction that locks the monomers into rigid polymer chains. It hardens instantly.

### The Upside Down Peel
Most SLA printers work upside down.
1.  **The Vat:** A tank of liquid resin with a clear plastic bottom (FEP film).
2.  **The Build Plate:** Lowers into the goo, leaving a 0.05mm gap.
3.  **The LCD:** A screen underneath the tank displays the "slice" of the model in UV light.
4.  **The Cure:** The liquid trapped in the gap hardens.
5.  **The Peel:** This is the violent part. The cured plastic is stuck to the build plate AND the FEP film. The machine pulls up. *Pop.* It peels off the film but stays on the plate.
6.  **Next Layer:** Repeat.

> **One-Minute Summary**
> We use an LCD screen or Laser to project UV light into a vat of liquid resin. The light selectively cures the resin layer-by-layer, pulling the solid object out of the liquid bath.
        `,
    },
    {
        slug: "how-wifi-works-radio-bounce",
        title: "The Radio Bounce: How Wi-Fi Works",
        description: "It's just a walkie-talkie that speaks really fast. 2.4GHz vs 5GHz.",
        category: "Computing",
        publishedAt: "2024-03-06",
        imageUrl: "/images/wifi-waves.png",
        tags: ["Computing", "Radio", "Waves"],
        content: `
## Construction: The Packet
Wi-Fi doesn't send a continuous stream. It sends envelopes:
1.  **Header:** To: Computer A, From: Router.
2.  **Payload:** The actual data (Netflix movie chunk).
3.  **Trailer (CRC):** A math problem to prove the data didn't break.

## The Microwave Frequency
Wi-Fi runs at 2.4 GHz.
Guess what else runs at 2.4 GHz?
**Microwave Ovens.**
Why? Because 2.4 GHz is the resonant frequency of water. It is great for heating food.
This is why your Wi-Fi slows down when you make popcorn. The oven leaks noise "shouting" over your router's whisper.

### CSMA/CA (Polite Conversation)
Ethernet (Cables) can talk whenever. Wi-Fi is a shared room.
If everyone talks at once, data corrupts.
Wi-Fi uses **CSMA/CA** (Carrier Sense Multiple Access / Collision Avoidance).
1.  **Listen:** Is anyone unrelated talking?
2.  **Wait:** If yes, wait a random amount of time (Backoff).
3.  **Talk:** Send the packet.
4.  **Confirm:** Did you get it? (ACK).
Basically, your devices are constantly raising their hands politely.

### 5GHz and Walls
*   **2.4 GHz:** Long waves. Goes through walls easily. Slow.
*   **5 GHz:** Short waves. Bounces off walls. Fast.
If you are in the same room, use 5GHz. If you are in the garden, stick to 2.4GHz.

> **One-Minute Summary**
> Wi-Fi is a half-duplex radio protocol. It chops data into packets and blasts them over microwave frequencies, using complex "politeness" algorithms to ensure multiple devices can share the same airwaves without shouting over each other.
        `,
    }
];
