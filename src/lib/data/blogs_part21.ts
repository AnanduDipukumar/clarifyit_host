import { BlogPost } from "../blogs";

export const BLOGS_PART_21: BlogPost[] = [
    {
        slug: "how-stealth-bombers-work-radar-deflection",
        title: "The Invisible Plane: How Stealth Works",
        description: "It looks weird for a reason. Radar is a flashlight. The plane is a mirror.",
        category: "Military",
        publishedAt: "2024-03-17",
        imageUrl: "/images/stealth-bomber-reflection.png",
        tags: ["Military", "Physics", "Aviation"],
        content: `
## Radar 101
Radar sends out a radio ping. If it hits metal, it bounces back.
The time it takes to return tells us the distance.
To be invisible, you must ensure the ping **never returns**.

## Construction: The Shape
A stealth plane must be built like a diamond:
1.  **Facets:** Flat surfaces to bounce radar *away* from the sender.
2.  **Sawtooth Edges:** Even the landing gear doors have zigzag edges to scramble waves.
3.  **S-Ducts:** The air intakes curve like a snake so radar can't see the engine fan blades (which are extremely reflective).

### Deflection (The Mirror Trick)
The B-2 Spirit has no vertical tail. It has no curves. It is made of flat facets.
When a radar wave hits it, it bounces off at an angle.
*   **Result:** The wave goes into the sky or the ground. It does **not** go back to the radar station.
*   To the radar operator, the sky looks empty.

### Absorption (RAM)
The skin is coated in **Radar Absorbent Material (RAM)**.
It contains iron balls suspended in rubber.
When the radio wave hits the iron, it induces a tiny magnetic field. This converts the radio energy into **Heat**.
The plane literally eats the radar signal.

> **One-Minute Summary**
> Stealth is not invisibility. It relies on deflecting radar waves away from the source (using geometry) and absorbing the remaining energy (using special paint) so that no echo returns to the sender.
        `,
    },
    {
        slug: "how-submarines-work-buoyancy",
        title: "The Steel Bubble: How Submarines Work",
        description: "How to sink on purpose. Archimedes Principle and the Ballast Tank.",
        category: "Military",
        publishedAt: "2024-03-18",
        imageUrl: "/images/submarine-ballast.png",
        tags: ["Military", "Physics", "Fluids"],
        content: `
## Neutral Buoyancy
A ship floats because it weighs less than the water it pushes away.
A rock sinks because it weighs more.
A submarine needs to weigh **exactly the same**.

## Construction: The Two Cans
A sub is a Russian Nesting Doll:
1.  **Pressure Hull:** The inner steel tube that holds the air/crew. Extremely strong.
2.  **Light Hull:** The outer aerodynamic shell. Thin.
3.  **Between Them:** The water tanks (Ballast) lie here.

### The Ballast Tanks
The submarine has a double hull. The space between the walls is the Ballast Tank.
1.  **Dive:** Open the vents at the top. Air escapes (hiss). Water rushes in the bottom. The sub gets heavier. It sinks.
2.  **Cruise:** Adjust water level until weight = buoyancy. You hover.
3.  **Surface:** Close the vents. Blast high-pressure compressed air into the tanks. The water is forced out the bottom holes. The sub gets lighter. It pops up like a cork.

### The Crush Depth
The hull is a perfect circle (Strongest shape).
At 1,000 feet down, the pressure is 440 psi. (Like stacking 300 cars on the roof).
If you go too deep, the steel yields. The hull snaps instantly. It implodes in 0.03 seconds. The crew is dead before their brains can register pain.

> **One-Minute Summary**
> A submarine changes its density by flooding or emptying tanks of water. By matching the density of seawater perfectly, it can hover at any depth without sinking or rising.
        `,
    },
    {
        slug: "how-torpedoes-work-supercavitation",
        title: "The Underwater Missile: How Torpedoes Work",
        description: "Water is thick. How does the Shkval torpedo go 230 mph?",
        category: "Military",
        publishedAt: "2024-03-19",
        imageUrl: "/images/supercavitation-bubble.png",
        tags: ["Military", "Physics", "Fluids"],
        content: `
## The Drag Wall
Moving through water is 1,000x harder than moving through air.
Normal propellers max out at 50-60 mph.
To go faster, you need to remove the water.

## Construction: The Rocket Tube
It looks like a torpedo, behaves like a missile:
1.  **Nose Cone:** Flat, with gas vents.
2.  **Gas Generator:** A solid-fuel rocket that pumps exhaust forward.
3.  **Main Engine:** A standard rocket motor for thrust.

### Supercavitation
The Russian VA-111 Shkval uses a rocket engine.
But the trick is the nose.
1.  **The Gas Generator:** The nose vents hot gas forward.
2.  **The Bubble:** The gas wraps around the entire torpedo.
3.  **The Result:** The torpedo is not touching water. It is flying inside a gas bubble *underwater*.
Since gas has low friction, it can hit 230 mph.
**Steering:** You can't use fins (no water to grab). You have to use metal fingers that poke through the bubble to tap the water wall.

> **One-Minute Summary**
> By ejecting gas from the nose, the torpedo creates a bubble of steam that envelops the entire hull. This reduces drag to almost zero, allowing rocket speeds underwater.
        `,
    },
    {
        slug: "how-silencers-work-expansion",
        title: "The Gun Muffler: How Silencers Work",
        description: "It doesn't go 'Pfft'. It goes 'BANG' (but quieter). The physics of gas cooling.",
        category: "Military",
        publishedAt: "2024-03-20",
        imageUrl: "/images/silencer-baffles.png",
        tags: ["Military", "Physics", "Sound"],
        content: `
## The Uncorking Pop
A gunshot noise comes from two things:
1.  **The Sonic Boom:** The bullet breaking the sound barrier (Crack). You can't silence this (unless you use slow bullets).
2.  **The Gas Expansion:** High pressure gas (3,000 psi) suddenly hitting low pressure air (14 psi). It is like popping a balloon.

## Construction: The Can
Inside the metal tube:
1.  **Mount:** Threads onto the barrel.
2.  **Blast Chamber:** The first open space to catch the initial explosion.
3.  **Baffles:** Funnel-shaped washers that strip the speed off the gas.
4.  **Wipe (Optional):** A rubber seal at the end that the bullet shoots through (makes it quieter but only lasts 10 shots).

### The Baffles
A silencer (Suppressor) is a tube full of metal washes called **Baffles**.
They create chambers.
1.  **Trapping:** The gas exits the barrel and gets trapped in the first chamber.
2.  **Cooling:** It swirls around (Turbulence). It cools down. Pressure drops.
3.  **Leaking:** It leaks slowly into the second chamber. Repeat.
By the time the gas leaves the front of the silencer, it is low pressure.
Instead of a BANG, you get a HISS.
(It is still loud - simple hearing protection level, not whisper level).

> **One-Minute Summary**
> A silencer gives the high-pressure gas a place to expand and cool down before it hits the open air. By slowing the release of the gas, it reduces the peak pressure wave of the explosion.
        `,
    },
    {
        slug: "how-railguns-work-lorentz",
        title: "The Magnetic Cannon: How Railguns Work",
        description: "No gunpowder. Just two metal rails and a lightning bolt.",
        category: "Military",
        publishedAt: "2024-03-21",
        imageUrl: "/images/railgun-schematic.png",
        tags: ["Military", "Physics", "Electromagnetism"],
        content: `
## Construction: The Capacitor Bank
The gun is simple. The power source is the nightmare.
1.  **Pulse Forming Network:** Millions of capacitors filling a room.
2.  **The Rails:** Thick Copper/Silver bars (which often melt after one shot).
3.  **The Armature:** The aluminum carrier that holds the projectile.

## The Lorentz Force
If you run electricity through a wire, it creates a magnetic field.
If you put *another* current in that field, it gets pushed.
**The Setup:**
1.  **Rail 1:** Positive.
2.  **Rail 2:** Negative.
3.  **The Armature:** A metal sled that connects the two rails.
We dump 1 Million Amps into the rails.
The current flows: Up Rail 1 -> Across Armature -> Down Rail 2.
This creates a massive magnetic field that exerts a force **Forward** on the Armature.
**Speed:** Mach 7 (5,000 mph).
It hits so hard the projectile turns into plasma on impact. No explosives needed. Kinetic Energy is the weapon.

> **One-Minute Summary**
> By running massive current down two parallel rails, we create a magnetic loops. The Lorentz Force ejects the sliding armature at hypersonic speeds using pure electromagnetic repulsion.
        `,
    }
];
