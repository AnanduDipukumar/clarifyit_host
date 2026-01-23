import { BlogPost } from "../blogs";

export const BLOGS_PART_36: BlogPost[] = [
    {
        slug: "how-rogue-waves-work-interference",
        title: "The Wall of Water: How Rogue Waves Work",
        description: "Sailors called them myths. Satellites proved them real. Constructive Interference.",
        category: "Nature",
        publishedAt: "2024-05-31",
        imageUrl: "/images/rogue-wave-graph.png",
        tags: ["Nature", "Physics", "Ocean"],
        content: `
## The Linear Superposition
Waves pass through each other.
Usually, they cancel out (Destructive Interference).
But sometimes, by pure bad luck, they stack up.
*   Wave A (10m)
*   Wave B (10m)
*   Wave C (10m)
*   **Result:** A single 30m tower of water that appears out of nowhere, breaks the ship, and vanishes.
**Current Focusing:** If waves travel against a strong current (like off South Africa), the current compresses the waves, making them taller and sharper.

## Deep Dive: The Draupner Wave
For centuries, scientists said 30m waves were mathematically impossible (Gaussian distribution said once every 10,000 years).
Then on New Year's Day 1995, a laser sensor on the Draupner oil rig recorded a 25.6m wave in an 11m sea.
Physics broke.
We now use the **Non-Linear Schrödinger Equation** to model them.
It turns out waves can "steal" energy from their neighbors, feeding on them to become monsters.

> **One-Minute Summary**
> Rogue waves occur when multiple smaller waves overlap in exact synchronization (Constructive Interference) or when ocean currents compress wave energy. This creates a transient, massive wall of water that exceeds the statistical maximum of the sea state.
        `,
    },
    {
        slug: "how-the-bends-works-nitrogen",
        title: "Pop, Fizz, Death: How The Bends Works",
        description: "Why divers must ascend slowly. Your blood turning into soda.",
        category: "Health",
        publishedAt: "2024-06-01",
        imageUrl: "/images/decompression-sickness.png",
        tags: ["Health", "Physics", "Ocean"],
        content: `
## Henry's Law
"The amount of gas dissolved in a liquid is proportional to the pressure."
*   **Surface:** Pressure is low. Nitrogen stays gas.
*   **Deep:** Pressure is high. Nitrogen dissolves into your blood (like CO2 in a sealed soda bottle).
*   **Ascent:** Pressure drops.
    *   **Slow:** The Nitrogen gently turns back to gas in your lungs and you breathe it out.
    *   **Fast:** The Nitrogen bubbles occur *inside your veins* and joints.
It blocks blood flow. It hurts (The Bends). It causes strokes.
**Treatment:** Put the diver in a Hyperbaric Chamber (High Pressure) to squish the bubbles back into liquid, then decompress slowly.

## Deep Dive: Dalton's Law
Why nitrogen?
Air is 78% Nitrogen.
At sea level (1 ATM), your body is saturated with it.
At 30m deep (4 ATM), the partial pressure of Nitrogen quadruples.
Your blood absorbs 4x more gas.
It isn't toxic (like Oxygen toxicity at depth). It is inert. That's the problem. It doesn't get used up by your cells, so it just sits there, waiting to explode into bubbles on ascent.

> **One-Minute Summary**
> Under pressure, nitrogen gas dissolves into the bloodstream. If pressure is released too quickly, the gas comes out of solution violently, forming bubbles in the blood vessels that block circulation and damage tissue.
        `,
    },
    {
        slug: "how-sonar-works-sofar",
        title: "The Sound Tunnel: How Sonar Works",
        description: "Whales talk across oceans. Submarines hide in the shadow zone.",
        category: "Physics",
        publishedAt: "2024-06-02",
        imageUrl: "/images/sonar-sofar-channel.png",
        tags: ["Physics", "Ocean", "Sound"],
        content: `
## Active vs Passive
*   **Active Sonar:** "PING!" -> Listen for echo. (Gives away your position).
*   **Passive Sonar:** Just listening. (Sneaky).

### The SOFAR Channel
Sound speed depends on Temperature and Pressure.
*   Warm Water = Fast Sound.
*   High Pressure = Fast Sound.
There is a "Sweet Spot" at ~1,000 meters deep where sound is **Slowest**.
**Refraction:** Sound waves bend towards the slow zone.
This creates a **Waveguide**. Sound gets trapped in this channel and can travel for thousands of miles without hitting the surface or bottom.
Whales use this to sing to each other across the entire Pacific.

## Deep Dive: The Shadow Zone
Submarines hide in the Shadow Zone.
Because sound bends *up* towards the surface (in deep water) or *down* towards the bottom (in shallow water), there is a gap in the middle where sonar rays can't reach.
A submarine sitting in this cone of silence is effectively invisible to surface ships, even if they are pinging right at it.
It's an optical illusion for ears.

> **One-Minute Summary**
> Sound waves bend towards regions of slower speed. The ocean creates a natural "sound channel" at certain depths that traps sound waves, allowing them to travel massive distances with minimal energy loss.
        `,
    },
    {
        slug: "how-bioluminescence-works-luciferin",
        title: "Cold Light: How Bioluminescence Works",
        description: "Fireflies and Anglerfish. Making light without heat.",
        category: "Nature",
        publishedAt: "2024-06-03",
        imageUrl: "/images/biolum-chemical.png",
        tags: ["Nature", "Chemistry", "Biology"],
        content: `
## Incandescence vs Luminescence
*   **My Lightbulb:** 90% Heat, 10% Light. (Wasteful).
*   **A Firefly:** 0% Heat, 100% Light. (Perfect).

### The Chemistry
It requires two parts:
1.  **Luciferin (The Fuel):** A light-emitting molecule.
2.  **Luciferase (The Spark):** An enzyme.
When mixed with Oxygen, the Luciferase catalyzes the oxidation of Luciferin.
The electrons get excited and drop down, releasing a Photon.
**Uses:**
*   **Camouflage:** Counter-illumination (matching the moonlight from above so predators below don't see a shadow).
*   **Hunting:** The Anglerfish lure.
*   **Mating:** Firefly blink codes.

## Deep Dive: Quorum Sensing
Some bacteria glow, but only when they are together.
A single bacterium is dark.
It releases a chemical signal.
When the concentration of signal hits a threshold (meaning "We have a crowd!"), they ALL turn on their lights simultaneously.
The Bobtail Squid uses this. It houses these bacteria in a special organ to cloak itself at night.

> **One-Minute Summary**
> Animals use an enzyme (Luciferase) to oxidize a specific molecule (Luciferin). This chemical reaction releases energy in the form of cold light, with almost zero thermal waste.
        `,
    },
    {
        slug: "how-tsunamis-work-wavelength",
        title: "The Silent Bump: How Tsunamis Work",
        description: "It isn't a surfing wave. It is the whole ocean moving.",
        category: "Nature",
        publishedAt: "2024-06-04",
        imageUrl: "/images/tsunami-diagram.png",
        tags: ["Nature", "Physics", "Disaster"],
        content: `
## Length Matters
*   **Wind Wave:** Wavelength = 100 meters. Speed = 40 mph.
*   **Tsunami:** Wavelength = **100 Miles**. Speed = **500 mph** (Jetliner).
In the deep ocean, a Tsunami is only 1 foot tall. Ships don't even notice it.

### The Shoaling Amplification
As the wave approaches land, the water gets shallow.
1.  **Friction:** The front of the wave hits the bottom and slows down.
2.  **Compression:** The back of the wave (still in deep water) is still moving at 500 mph.
3.  **Pile Up:** The back catches the front. The 100-mile long wave gets squeezed into a 1-mile space.
4.  **Height:** The energy has nowhere to go but UP. The 1 foot wave becomes a 100-foot wall.
It doesn't break like a surf wave. It just keeps pouring inland for 20 minutes like a rising tide that never stops.

## Deep Dive: Energy Conservation
Energy Flux = Height² × Speed.
In deep water: Speed is High, Height is Low.
In shallow water: Speed Drops.
Conservation of Energy dictates that if Speed drops, Height *must* rise to compensate.
This math is why a seemingly harmless 50cm swell in the ocean transforms into a city-destroying 30m flood.

> **One-Minute Summary**
> A tsunami is a shockwave with a massive wavelength. In deep water, it is fast and low. When it hits shallow water, the wave slows down and compresses, forcing the immense volume of water upwards into a destructive surge.
        `,
    }
];
