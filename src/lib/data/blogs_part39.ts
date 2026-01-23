import { BlogPost } from "../blogs";

export const BLOGS_PART_39: BlogPost[] = [
    {
        slug: "how-zippers-work-wedges",
        title: "The Interlocking Teeth: How Zippers Work",
        description: "It is a machine made of wedges. How to join two fabrics with zero gaps.",
        category: "Engineering",
        publishedAt: "2024-06-15",
        imageUrl: "/images/zipper-macro.png",
        tags: ["Engineering", "Design", "History"],
        content: `
## The Slide Fastener
A zipper is just a collection of **Wedges**.
1.  **The Slider:** Inside the Y-shape, there are wedges.
2.  **Closing:** As you pull up, the wedge forces the teeth together at a specific angle.
3.  **The Hook:** Each tooth has a bump on top and a dimple on the bottom. The pressure forces the bump into the dimple of the tooth above it.
4.  **Opening:** The wedge inside the slider pushes them apart, popping the hooks out.
**YKK:** Why does every zipper say YKK? It stands for Yoshida Kogyo Kabushikigaisha. They make 90% of the world's zippers because they own every step of the supply chain, from the brass to the dye.

## Construction: The Scoop
The teeth aren't just bumps. They are complex shapes called "Scoops."
Each scoop is stamped from brass or molded from polyacetal.
It has a distinct male Head and female Pocket.
The tolerance is less than 0.1mm.
If the tolerance is off, the zipper splits (The "Exploding Pants" failure).

> **One-Minute Summary**
> A zipper slider is a set of inclined planes (wedges) that force interlocking teeth together at a precise angle. Each tooth has a matching hook and hollow that snap together under pressure, creating a continuous, strong seal.
        `,
    },
    {
        slug: "how-ballpoint-pens-work-ink",
        title: "Non-Newtonian Ink: How Ballpoint Pens Work",
        description: "Why ink doesn't leak in your pocket but flows when you write.",
        category: "Engineering",
        publishedAt: "2024-06-16",
        imageUrl: "/images/ballpoint-pen-tip.png",
        tags: ["Engineering", "Chemistry", "Design"],
        content: `
## The Fountain Pen Problem
Old pens used water-based ink.
*   Advantage: Smooth flow.
*   Disadvantage: Leaks everywhere. Slow drying.

### The Biro Solution
László Bíró invented a **Thick Ink** (Oil-based).
It was virtually solid. It wouldn't flow.
**The Ball:** He put a tiny steel ball in a socket at the tip.
1.  **Friction:** As you drag the pen, the paper grabs the ball and spins it.
2.  **Shear Thinning:** The rolling action "shears" the thick ink. This physical stress turns the solid gel into a liquid instantaneously (Thixotropy).
3.  **Transfer:** The wet ball rolls onto the paper, depositing the ink.
4.  **Reset:** The moment the rolling stops, the ink turns back into a solid gel. No leaks.

## Deep Dive: Thixotropy
This is the same physics as **Ketchup**.
*   **Rest:** High Viscosity (Solid).
*   **Motion:** Low Viscosity (Liquid).
If you shake a ketchup bottle, it flows.
If you drag a pen, it flows.
Biro had to invent a Tungsten Carbide ball (harder than steel) because the friction required to liquefy the ink would grind a brass ball flat in days.

> **One-Minute Summary**
> The secret is the ink's "shear-thinning" property. It is thick and paste-like at rest (preventing leaks), but becomes liquid when subjected to the friction of the rolling ball mechanism, allowing it to flow onto the paper.
        `,
    },
    {
        slug: "how-velcro-works-burrs",
        title: "The Burdock Burr: How Velcro Works",
        description: "It was invented by a man walking his dog. Nature's hook and loop.",
        category: "Nature",
        publishedAt: "2024-06-17",
        imageUrl: "/images/velcro-macro.png",
        tags: ["Nature", "Design", "Biomimicry"],
        content: `
## George de Mestral
In 1941, George went for a walk. He came home covered in Burrs.
He looked at one under a microscope.
He saw **Hundreds of tiny hooks**.
They had latched onto the loops of thread in his pants.
**The Invention:**
He replicated this with Nylon.
*   **Side A (The Hook):** Stiff plastic hooks.
*   **Side B (The Loop):** Fuzzy web of soft loops.
**The Noise:** The ripping sound you hear is hundreds of individual plastic hooks snapping back into shape after releasing their loop.

## Deep Dive: Fatigue Life
Velcro (Hook and Loop) wears out.
Why?
The Loops break.
The Hooks are stiff plastic. The Loops are soft nylon.
Every time you rip it open, a few loops span and break.
Eventually, the "Fuzzy" side becomes "Frizzy" and there are no closed loops left for the hooks to grab.
This is why military uniforms use buttons for critical pockets (Silence + Durability).

> **One-Minute Summary**
> Inspired by plant burrs sticking to fur, Velcro consists of two opposing surfaces: one with stiff plastic hooks and the other with soft loops. When pressed together, the hooks catch the loops, creating a strong but temporary bond.
        `,
    },
    {
        slug: "how-lightbulbs-work-argon",
        title: "The Burning Wire: How Lightbulbs Work",
        description: "Why Thomas Edison failed 1,000 times. The secret was the gas.",
        category: "Engineering",
        publishedAt: "2024-06-18",
        imageUrl: "/images/filiment-argon.png",
        tags: ["Engineering", "Physics", "History"],
        content: `
## The Tungsten Problem
To make light, you get a wire white-hot (2,500°C).
*   **Air:** Oxygen reacts with the hot wire. It burns out in 1 second.
*   **Vacuum:** The wire doesn't burn, but it **Evaporates**. The atoms boil off and coat the glass in black soot. The wire breaks in an hour.

### The Argon Solution
We fill the bulb with **Argon Gas**.
Argon is inert (Noble Gas). It doesn't react with anything.
**The Bounce:** When a Tungsten atom tries to boil off the wire, it hits a heavy Argon atom and bounces back onto the filament.
This "Gas Pressure" suppresses evaporation, allowing the bulb to last 1,000 hours.

## Deep Dive: Black Body Radiation
Everything glows if you get it hot enough.
*   500°C: Red Hot (Stove).
*   1,000°C: Orange (Fire).
*   2,500°C: White (Lightbulb).
*   5,500°C: Blue-White (The Sun).
The problem with Tungsten is that it emits 90% of its energy as **Infrared** (Heat), not Visible Light.
This is why LEDs (which use electron band-gaps, not heat) are 10x more efficient.

> **One-Minute Summary**
> An incandescent bulb works by heating a tungsten filament until it glows. To prevent the filament from burning up (oxidation) or evaporating away, the bulb is filled with Argon, an inert gas that suppresses these destructive processes.
        `,
    },
    {
        slug: "how-soap-works-micelles",
        title: "The Molecular Crowbar: How Soap Works",
        description: "Water cannot wash away grease. Soap acts as a diplomat between them.",
        category: "Chemistry",
        publishedAt: "2024-06-19",
        imageUrl: "/images/soap-micelle.png",
        tags: ["Chemistry", "Hygiene", "Physics"],
        content: `
## Oil and Water
Water is Polar (Magnetic-ish).
Oil is Non-Polar.
Water sticks to Water. It ignores Oil.
If you scrub a greasy pan with water, the water just glides over the oil.

### The Amphiphile
Soap molecules look like lollipops.
1.  **Head (Hydrophilic):** Loves water.
2.  **Tail (Hydrophobic):** Hates water. Loves oil.
When you mix soap, water, and grease:
The tails stab into the grease. The heads stay in the water.
They form a sphere called a **Micelle**.
The grease is trapped *inside* the sphere.
To the water, the outside of the sphere just looks like soap heads (Water seeking).
So the water washes the sphere away, taking the grease with it.

## Deep Dive: Surface Tension
Water skin is tough.
You can float a paperclip on it.
This skin prevents water from soaking into fabrics (it bridges the gaps).
Soap is a **Surfactant** (Surface Active Agent).
It breaks the surface tension.
It makes the water "Wetter."
This allows the water to penetrate deep into the fibers of your clothes to find the dirt.

> **One-Minute Summary**
> Soap molecules have a dual nature: one end bonds with water, the other with oil. They surround oil particles to form microscopic spheres called micelles, effectively making the oil soluble in water so it can be rinsed away.
        `,
    }
];
