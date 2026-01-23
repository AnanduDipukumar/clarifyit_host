import { BlogPost } from "../blogs";

export const BLOGS_PART_35: BlogPost[] = [
    {
        slug: "how-cherenkov-radiation-works-blue-glow",
        title: "The Sonic Boom of Light: Cherenkov Radiation",
        description: "Why nuclear reactors glow blue. The speed of light is not always the limit.",
        category: "Physics",
        publishedAt: "2024-05-26",
        imageUrl: "/images/cherenkov-glow.png",
        tags: ["Physics", "Nuclear", "Light"],
        content: `
## Faster than Light?
Einstein said nothing can travel faster than $c$ (Speed of light in a **Vacuum**).
But in **Water**, light slows down to 0.75c.
Electrons from a nuclear reactor can travel at 0.99c.
So, the electron is moving *faster than light* (in that medium).

## Deep Dive: Phase Velocity
Light in a vacuum is the universal speed limit ($c$).
But in water, light interacts with the atoms, slowing down.
Think of it like running through a crowd vs running on an empty track.
The electron, however, ignores the crowd. It punches through at full speed.
Because it outruns its own electromagnetic field, the waves pile up in front of it (constructive interference), creating the glow.

### The Shockwave
When a jet flies faster than sound, it creates a Sonic Boom (Shockwave).
When an electron flies faster than light, it creates a **Photonic Boom**.
Instead of sound, it emits a cone of blue light.
This is **Cherenkov Radiation**.
It is the optical equivalent of a "Bang."

> **One-Minute Summary**
> When a charged particle moves through a medium (like water) faster than the phase velocity of light in that same medium, it emits a shockwave of visible blue light, similar to how a supersonic jet creates a sonic boom.
        `,
    },
    {
        slug: "how-criticality-works-demon-core",
        title: "The Demon Core: How Criticality Works",
        description: "Tickling the dragon's tail. The difference between a reactor and a bomb.",
        category: "Physics",
        publishedAt: "2024-05-27",
        imageUrl: "/images/demon-core.png",
        tags: ["Physics", "Nuclear", "History"],
        content: `
## Neutron Multiplication Factor (k)
Uranium splits when hit by a neutron. It releases energy + 2 more neutrons.
*   **Sub-critical (k < 1):** The chain reaction dies out. (Safe).
*   **Critical (k = 1):** Each split causes exactly one more split. (Steady power - Reactor).
*   **Super-critical (k > 1):** Each split causes 2, 4, 8, 16... (Explosion - Bomb).

## Deep Dive: Delayed Neutrons
If all neutrons were released instantly ("Prompt Neutrons"), every reactor would explode in milliseconds.
Luckily, 0.65% of neutrons are "Delayed."
They come from the decay of fission products seconds *after* the split.
This 0.65% buffer gives the control system (and humans) humans a few seconds of reaction time to move the control rods.
Slotin didn't have control rods. He was the control rod.

### The Blue Flash
Louis Slotin was testing a Plutonium core in 1946 using a screwdriver to hold two beryllium reflectors apart.
The screwdriver slipped. The reflector closed.
The neutrons bounced back into the core.
**Criticality Reached.**
A blue flash filled the room.
Slotin pulled it apart with his bare hands, saving everyone else, but he died 9 days later from acute radiation syndrome.

> **One-Minute Summary**
> Criticality is the point where a nuclear chain reaction becomes self-sustaining. Reactors maintain a precise 1:1 ratio of neutron generation, while bombs allow the ratio to run away exponentially.
        `,
    },
    {
        slug: "how-half-life-works-decay",
        title: "The Coin Flip: How Half-Life Works",
        description: "We can't predict when one atom will die. We can predict when a billion will.",
        category: "Physics",
        publishedAt: "2024-05-28",
        imageUrl: "/images/half-life-graph.png",
        tags: ["Physics", "Math", "Nuclear"],
        content: `
## Probability, not Clockwork
Radioactive decay is random.
An atom of Uranium-235 might decay in 1 second or 1 billion years.
But if you have a **Trillion** atoms, statistics take over.
**Half-Life:** The time it takes for 50% of the sample to decay.
*   Start: 100%
*   1 Half-Life: 50%
*   2 Half-Lives: 25%
*   3 Half-Lives: 12.5%
It never truly reaches zero (Zeno's Paradox), but eventually, it becomes undetectable.
**Carbon Dating:** We know the half-life of Carbon-14 (5,730 years). By measuring how much is left in a bone, we know when the animal died.

## Deep Dive: The Formula
The math is elegant:
$N(t) = N_0(1/2)^{t/t_{1/2}}$
*   $N(t)$: Amount left.
*   $N_0$: Starting amount.
*   $t_{1/2}$: Half-life.
This equation governs everything from coffee cooling down (Newton's Law of Cooling) to the discharge of a capacitor in your camera flash.

> **One-Minute Summary**
> Half-life is a statistical measure. While individual atomic decay is random, large groups of atoms follow a predictable exponential decay curve, halving their quantity over a fixed period of time.
        `,
    },
    {
        slug: "how-fusion-works-stars",
        title: "The Binding Curve: Fusion vs Fission",
        description: "Why splitting atoms releases energy, but mashing them together also releases energy. Iron is the ash.",
        category: "Physics",
        publishedAt: "2024-05-29",
        imageUrl: "/images/binding-energy-curve.png",
        tags: ["Physics", "Energy", "Space"],
        content: `
## The Peak of Stability (Iron)
Iron-56 is the most stable element in the universe.
Everything wants to be Iron.
1.  **Light Elements (Hydrogen):** They want to get bigger (Fusion). When you mash them into Helium, they release energy to settle down.
2.  **Heavy Elements (Uranium):** They want to get smaller (Fission). When you split them, they release energy to settle down.
3.  **Iron:** You can't fuse it or split it to get energy. It is the end of the road.
**Stars:** Stars burn Hydrogen -> Helium -> ... -> Iron. Once they hit Iron, the fire goes out. Gravity wins. The star collapses and explodes (Supernova).

## Deep Dive: Mass Defect
Where does the energy come from?
It comes from missing mass.
If you weigh a Helium atom, it weighs *less* than the 4 protons/neutrons that make it.
The missing mass didn't vanish. It turned into pure energy according to Einstein's $E=mc^2$.
Because $c$ (Speed of Light) is a huge number ($3 \times 10^8$), a tiny speck of missing mass creates a nuclear explosion.

> **One-Minute Summary**
> Energy is released when atoms move towards a more stable configuration. For light atoms, this means fusing together. For heavy atoms, this means splitting apart. Iron is the equilibrium point where energy production stops.
        `,
    },
    {
        slug: "how-bananas-radiation-works-potassium",
        title: "The Antimatter Fruit: Bananas and Radiation",
        description: "Yes, bananas are radioactive. They emit antimatter. Why you shouldn't worry.",
        category: "Physics",
        publishedAt: "2024-05-30",
        imageUrl: "/images/banana-radiation.png",
        tags: ["Physics", "Food", "Health"],
        content: `
## Potassium-40
Bananas are rich in Potassium (K).
0.012% of all Potassium is the radioactive isotope **K-40**.
It decays by releasing a Beta particle (Electron) or... very rarely... a **Positron (Antimatter)**.
Yes. Your fruit bowl is an antimatter generator.
It lasts for nanoseconds before annihilating with an electron.

## Deep Dive: Homeostasis
"If I eat 100 bananas, will I glow?"
No.
Your body carefully regulates Potassium levels.
If you eat excess Potassium, your kidneys flush it out in your urine within hours.
You cannot bio-accumulate standard radioactive isotopes like you can with heavy metals (Lead/Mercury).
The radiation dose is transient.

### BED (Banana Equivalent Dose)
Scientists use the "Banana Equivalent Dose" as a unit to explain radiation to the public.
*   Eating 1 Banana = 0.1 microsieverts.
*   Chest X-Ray = 200 Bananas.
*   Flight from NY to LA = 400 Bananas.
*   Lethal Dose = 35,000,000 Bananas.
(You would die from looking like a Minion before you died of radiation).

> **One-Minute Summary**
> Nature is naturally radioactive. Common foods like bananas contain unstable isotopes (Potassium-40) that emit measurable radiation, but the dose is so microscopically small that our bodies handle it effortlessly.
        `,
    }
];
