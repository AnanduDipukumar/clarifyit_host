import { BlogPost } from "../blogs";

export const BLOGS_PART_10: BlogPost[] = [
    {
        slug: "how-differentials-work-spin-splitter",
        title: "The Spin Splitter: How Car Differentials Work",
        description: "How one engine turns two wheels at different speeds.",
        category: "Engineering",
        publishedAt: "2024-01-20",
        imageUrl: "/images/differential-gear.png",
        tags: ["Engineering", "Cars", "Mechanics"],
        content: `

## Construction: The 4 Parts
Before understanding the magic, we need to know the players:
1.  **Pinion Gear:** Connected to the engine (Driveshaft). It brings the power.
2.  **Ring Gear:** A giant gear that gets turned by the Pinion. It turns the power 90 degrees towards the wheels.
3.  **The Cage (Carrier):** Attached to the Ring Gear. It holds the Spider Gears.
4.  **Spider Gears:** The star of the show. These free-floating gears connect the Left Wheel to the Right Wheel.

## The Cornering Paradox
When a car turns a corner, the outside wheel travels a longer distance than the inside wheel.
If the wheels were locked together on a solid metal bar (Axle), one tire would have to skid.
You need a mechanism that lets wheels on the same axle spin at **different speeds** while still being powered by the same engine.

### The Spider Gear Logic
> **Mental Model: The Seesaw**
> 
> Imagine a seesaw balancing on a pivot.
> *   **Straight Line:** The pivot pushes forward. Both sides move forward equally. The Spider Gears do not spin on their own axis; they just lock the two side gears together.
> *   **Turning:** The resistance on the inner wheel holds it back. This forces the Spider Gear to rotate on its axis.
> *   **The Magic:** By rotating, it walks around the slow inner gear and *pushes* the outer gear forward faster.
> *   **Result:** Inner Wheel (50%) + Outer Wheel (150%) = Average Speed (100%).

### The One-Wheel Peel (Open Diff)
The flaw of a standard differential deals with friction.
It sends power to the path of **Least Resistance**.
*   **The Trap:** One wheel is on ice (Zero friction), the other on tarmac.
*   **The Mistake:** The differential feels zero resistance on the ice side. It thinks, "Oh, we must be turning really sharp!" It sends 100% of the RPM to the ice wheel.
*   **Result:** The ice wheel spins at 2x speed. The road wheel sits dead still. You are stuck.
*   **The Fix:** **Limited Slip Differentials (LSD)** use clutch packs or springs to "clamp" the spider gears, ensuring the road wheel gets at least 20% of the power.

---

## Edge Case: Driving in Circles
If you welded your differential shut (Locked Diff) and drove in tight circles:
1.  **The Sound:** You would hear loud chirping (tires skipping).
2.  **The Damage:** The outer wheel tries to drag the inner wheel. The steel axle twists like a towel until it snaps.

> **One-Minute Summary**
> A box of gears that splits engine power. It allows the outer wheel to "borrow" speed from the inner wheel during a turn, preventing tire scrub.
        `,
    },
    {
        slug: "how-carburetors-work-venturi",
        title: "The Air Straw: How Carburetors Work",
        description: "Before computers, engines used physics to measure fuel. The Venturi Effect.",
        category: "Engineering",
        publishedAt: "2024-01-21",
        imageUrl: "/images/carburetor-venturi.png",
        tags: ["Engineering", "Cars", "Physics"],
        content: `
## Construction: The 3 Variables
A carburetor isn't just a tube. It has three main organs:
1.  **The Float Bowl:** A mini fuel tank (like a toilet tank) that keeps a constant level of gas ready.
2.  **The Jet:** A calibrated brass screw with a tiny hole. It defines how much fuel flows.
3.  **The Throttle Plate (Butterfly):** A valve connected to your foot. It controls the **Air**, not the Fuel.
4.  **The Choke:** A second valve that strangles the air supply to create a super-rich mixture for cold starts.

## The Perfect Mix
An engine needs exactly 14.7 parts Air to 1 part Fuel.
Today, a computer uses sensors to spray fuel (Fuel Injection).
But for 100 years, we did it with a passive metal tube.

### The Venturi Effect
> **Mental Model: The Pinch**
> 
> Take a garden hose. Pinch the middle.
> 1.  **Speed:** The water speeds up at the pinch.
> 2.  **Pressure:** The pressure **drops** at the pinch (Bernoulli's Principle).
> 
> A carburetor is just a pinched air pipe.
> *   As the engine sucks air, it speeds up at the pinch (Venturi).
> *   This creates a vacuum.
> *   A tiny hole connects this vacuum to a bowl of gas.
> *   The vacuum **sucks** the gas out into the airstream, turning it into a mist.

### Smart Physics
The genius is that it is self-regulating.
*   **More Air (Pedal Down):** Faster wind = Stronger Vacuum = More Gas sucked in.
*   **Less Air (Idle):** Slower wind = Weaker Vacuum = Less Gas.
It automatically balances the ratio without a single microchip.

### Why We Stopped Using Them
Gravity and Cold.
1.  **G-Force:** If you turn hard, the gas sloshes to the side of the bowl. The straw sucks air. The engine dies.
2.  **Cold:** Cold gas doesn't mist well. It creates droplets. You needed a "Choke" valve to manually strangle the air supply to force a rich mixture.

> **One-Minute Summary**
> By pinching the air pipe, we create a low-pressure zone that sucks fuel out of a reservoir exactly in proportion to how fast the engine is breathing.
        `,
    },
    {
        slug: "how-mechanical-watches-work-escapement",
        title: "The Ticking Heart: How Mechanical Watches Work",
        description: "No battery. Just a spring fighting a brake, 5 times a second.",
        category: "Technology",
        publishedAt: "2024-01-22",
        imageUrl: "/images/watch-escapement.png",
        tags: ["Technology", "History", "Mechanics"],
        content: `
## Construction: The Energy Chain
A watch is a machine that stores energy and releases it precisely.
1.  **The Mainspring:** A coiled strip of metal (The Battery). You wind it tight.
2.  **The Gear Train:** A transmission that speeds up the movement (So the mainspring unwinds in 40 hours, not 40 seconds).
3.  **The Escapement:** The brake. It stops the gears from spinning, releasing them only in tiny pulses.
4.  **The Balance Wheel:** The pendulum. It rocks back and forth 5 times a second, controlling the Escapement.

## The Unwinding Problem
If you wind up a spring and let go, it uncoils instantly. *Zzzzip.*
To keep time, you need it to uncoil slowly, tick by tick.
You need an **Escapement**.

### The Swiss Lever
> **Mental Model: The Turnstile**
> 
> Imagine a crowd of people pushing against a turnstile. (The Main Spring force).
> A security guard (The Pallet Fork) locks the gate.
> A pendulum (The Balance Wheel) swings back and forth.
> *   **Swing Left:** The pendulum kicks the guard. The guard unlocks the gate.
> *   **Click:** The gate spins **one tooth** forward.
> *   **Lock:** The guard locks it again instantly.
> 
> This happens 28,000 times an hour. The "Tick Tock" sound is the tooth of the gear slamming into the pallet fork.

### The Ruby Jewel
Friction is the enemy. Metal rubbing on metal wears out.
So, watchmakers use **Rubies** (Corundum).
They are the 2nd hardest material after Diamond.
They are used as bearings for the gears. They are so smooth and hard that they last for 100 years without wearing down.
(Note: Modern rubies are synthetic, worth about $0.05 each. They don't add value, just durability).

> **One-Minute Summary**
> A mainspring tries to spin the gears. A rocking lever (Escapement) stops it, allowing it to advance only one tooth per swing of the balance wheel.
        `,
    },
    {
        slug: "how-vinyl-records-work-physical-wave",
        title: "The Wiggling Canyon: How Vinyl Records Work",
        description: "Sound is vibration. A record is a frozen drawing of that vibration.",
        category: "Music",
        publishedAt: "2024-01-23",
        imageUrl: "/images/vinyl-groove-microscope.png",
        tags: ["Music", "Physics", "Retro"],
        content: `
## It's Not Coded
A CD has 0s and 1s. A vinyl record has **Topology**.
If you look at the groove under a microscope, it looks like a jagged canyon.
Those jags are the actual sound wave drawn in plastic.

### The Needle (The Stylus)
1.  **The Ride:** The diamond tip rides in the V-shaped groove.
2.  **The Wiggle:** As the groove bumps left and right, the needle wiggles.
3.  **The Magic:** The needle is connected to a magnet inside a coil of wire.
4.  **The Signal:** Wiggling Magnet = Electricity (Induction).
5.  **The Speaker:** The electricity goes to the speaker, which wiggles exactly the same way.

### Stereo: The 45-Degree Trick
How do you get 2 channels (Left/Right) in 1 groove?
Mathematics.
*   **Left Channel:** Wiggles the inner wall (45 degrees tilt).
*   **Right Channel:** Wiggles the outer wall (-45 degrees tilt).
The needle can move Diagonally-Left and Diagonally-Right independently.
It reads both walls at the same time.

### Why Inside Tracks Sound Worse
The record spins at constant speed (33 RPM).
*   **Outer Edge:** Large circumference. The needle travels 20 inches per second. Lots of room for detail.
*   **Inner Edge:** Tiny circumference. The needle travels 8 inches per second. The information is cramped. High notes get distorted ("Inner Groove Distortion"). This is why bands put their loud ballads at the start of the side.

> **One-Minute Summary**
> The sound wave is carved physically into the plastic. A diamond needle traces the bumps, vibrating a magnet to recreate the electrical signal.
        `,
    },
    {
        slug: "how-guitar-pickups-work-flux",
        title: "The Magnetic Microphone: How Electric Guitars Work",
        description: "It doesn't hear the acoustic sound. It feels the steel string disturbing the force field.",
        category: "Music",
        publishedAt: "2024-01-24",
        imageUrl: "/images/guitar-pickup-field.png",
        tags: ["Music", "Physics", "Electronics"],
        content: `
## It Ignores Air
If you scream into an electric guitar pickup, nothing happens.
It is not a microphone. It is a **Transducer**.
It only detects **Moving Metal**.

### Lenz's Law
Inside the pickup are 6 magnets wrapped in 7,000 turns of copper wire.
This creates a stationary Magnetic Field.
1.  **The String:** The steel string hangs in this field.
2.  **The Pluck:** When the string vibrates, it disturbs the magnetic field. It pulls and pushes the invisible lines of flux.
3.  **The Induction:** A changing magnetic field creates electricity in the copper wire.
4.  **The Output:** This tiny voltage travels down the cable to the amp.

### Humbuckers vs Single Coils
*   **Single Coil:** Crisp, bright sound. Problem: It acts like an antenna. It picks up the 60Hz hum from your wall lights.
*   **Humbucker:** Uses two coils wound in **Reverse**.
    *   The Signal (String) is doubled.
    *   The Noise (Hum) occurs in both coils but out of phase. Positive + Negative = Zero.
    *   The Hum is "Bucked" (Cancelled).

### Why Nylon Strings Don't Work
You cannot put nylon strings on an electric guitar. Nylon is plastic (non-magnetic). The pickup won't see them. You need steel or nickel.

> **One-Minute Summary**
> A magnet creates a field around the string. The vibrating steel string shakes the field, which induces an electric current in a coil of wire.
        `,
    }
];
