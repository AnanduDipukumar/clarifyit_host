import { BlogPost } from "../blogs";

export const BLOGS_PART_20: BlogPost[] = [
    {
        slug: "how-kevlar-works-hydrogen-bonds",
        title: "The Molecular Chain Mail: How Kevlar Works",
        description: "It is 5x stronger than steel. It stops bullets. It is basically glorified nylon.",
        category: "Materials",
        publishedAt: "2024-03-12",
        imageUrl: "/images/kevlar-weave.png",
        tags: ["Materials", "Chemistry", "Safety"],
        content: `
## The Spider Silk Dream
Stephanie Kwolek at DuPont invented Kevlar by accident in 1965. She was looking for tire rubber.
She found a liquid crystal polmer that was stiff and cloudy.

## Construction: The Weave
Kevlar is not just a plastic sheet. It is a fabric architecture:
1.  **Aramid Fibers:** The yellow thread itself (poly-para-phenylene terephthalamide).
2.  **Resin Matrix:** The glue that holds the shape (sometimes).
3.  **Cross-Weave:** A checkerboard pattern where fibers cross at 90 degrees to clamp down on the bullet.

### The Orientation
Most plastics (like a grocery bag) are tangled spaghetti strands. They stretch.
Kevlar molecules are flat, rigid rods.
When you spin them into a fiber, they all line up perfectly parallel (like raw spaghetti in a box).
**The Secret:** Hydrogen Bonds.
The molecules have Oxygen (-) on one side and Hydrogen (+) on the other.
They zip together sideways.
This makes the fiber incredibly hard to stretch (High Tensile Strength).

### The Catching Mitt
Kevlar doesn't deflect bullets (like Superman). It **catches** them.
It is woven into a fabric.
1.  **Impact:** The bullet hits the first layer.
2.  **Stretch:** The fibers stretch slightly, absorbing energy.
3.  **Distribution:** The weave spreads the force from 1 point to the entire vest.
It works like a soccer net.
**Pro:** Stops the bullet.
**Con:** The net gets pushed *into* your chest. It creates "Blunt Force Trauma." You still get a broken rib/bruise, but no hole.

> **One-Minute Summary**
> Kevlar is a plastic where the molecules are aligned in perfect rows and zipped together with hydrogen bonds. It acts as a net that dissipates the kinetic energy of a projectile by stretching rather than breaking.
        `,
    },
    {
        slug: "how-carbon-fiber-works-graphite",
        title: "Graphite Glue: How Carbon Fiber Works",
        description: "It is lighter than aluminum but stiffer than steel. Why race cars are black.",
        category: "Materials",
        publishedAt: "2024-03-13",
        imageUrl: "/images/carbon-fiber-weave.png",
        tags: ["Materials", "Engineering", "Cars"],
        content: `
## Cooked Acrylic
How do you make Carbon Fiber?
1.  Start with PAN (Acrylic fiber - basically sweater material).
2.  **Carbonization:** Roast it at 3,000°C in an oxygen-free oven.
3.  All the Hydrogen and Nitrogen atoms panic and leave.
4.  Only **Carbon** remains.
5.  The Carbon atoms form tight hexagonal crystals (Graphite) aligned along the fiber.

## Construction: The Pre-Preg
Race cars are baked in an oven.
1.  **The Mold:** An aluminum negative shape of the hood.
2.  **Pre-Preg:** Carbon cloth pre-soaked in epoxy resin (stored in a freezer so it doesn't cure).
3.  **Vacuum Bag:** Sucks all the air out.
4.  **Autoclave:** A pressurized oven (100 psi, 350°F) that crushes the layers into a single piece.

### The Composite (The Glue)
Carbon Fiber by itself is useless. It is just a floppy string.
You cannot build a car out of string.
You have to glue it together.
**CFRP (Carbon Fiber Reinforced Polymer):**
*   **The Fiber:** Provides the Tension strength (Pulling).
*   **The Resin (Epoxy):** Provides the Compression strength (Pushing) and holds the shape.
This is exactly like **Reinforced Concrete**.
(Fiber = Rebar, Resin = Concrete).

### Why is it brittle?
Metals bend (Plastic Deformation).
Carbon Fiber does not bend. It holds... holds... holds... **SHATTER.**
It fails catastrophically without warning.
This is why submarines (Titan) shouldn't be made of it. It works great for pressure *out* (Airplane), but unpredictable for pressure *in*.

> **One-Minute Summary**
> We burn acrylic fibers until they are pure carbon crystals, then glue them together with epoxy. It gives the best strength-to-weight ratio of any industrial material.
        `,
    },
    {
        slug: "how-tempered-glass-works-tension",
        title: "The Tension Sandwich: How Tempered Glass Works",
        description: "Why car windows explode into pebbles instead of shards.",
        category: "Materials",
        publishedAt: "2024-03-14",
        imageUrl: "/images/tempered-glass-stress.png",
        tags: ["Materials", "Physics", "Safety"],
        content: `
## The Prince Rupert's Drop
Glass is strong in compression, weak in tension.
To make it tough, we need to pre-load it.

### The Quench
1.  **Heat:** We bake a sheet of glass to 600°C (Soft).
2.  **Freeze:** We blast the *surface* with cold air.
3.  **The Result:** The skin freezes instantly and shrinks. The center is still hot/liquid.
4.  **The Cooling:** As the center slowly cools, it tries to shrink. But the skin is already hard.
5.  **The Lock:** The center pulls the skin IN tight.
    *   **Surface:** Under extreme **Compression** (10,000 psi).
    *   **Center:** Under extreme **Tension**.

## Construction: The Stress Layer
A piece of tempered glass is a physics battery:
1.  **Compression Shell:** The outer 20% thickness (Trying to expand).
2.  **Tension Core:** The inner 60% thickness (Trying to shrink).
3.  **Result:** It stores potential energy, waiting for a release.

### The Explosion
To break the glass, a rock has to overcome that 10,000 psi compression first. That's why it bounces off.
But if you scratch the "Tension Zone" (The edge), or pierce the compression layer...
**KRACK.**
The internal tension releases instantly. The entire sheet rips itself apart into 10,000 tiny cubes.
This protects you from being decapitated by a jagged shard in a car crash.

> **One-Minute Summary**
> We freeze the outside of the glass while the inside is hot. As the inside cools, it pulls the outside tight. This internal stress makes the surface incredibly hard to scratch, but causes the whole thing to disintegrate if breached.
        `,
    },
    {
        slug: "how-solder-works-alloy",
        title: "The Metal Glue: How Solder Works",
        description: "It joins wires without melting them. The magic of Eutectic Alloys.",
        category: "Electronics",
        publishedAt: "2024-03-15",
        imageUrl: "/images/solder-joint.png",
        tags: ["Electronics", "Materials", "Chemistry"],
        content: `
## Wetting (Not gluing)
Glue sticks to the surface.
Solder digs *into* the surface.
When you solder a copper wire, the Tin in the solder actually dissolves a microscopic layer of the Copper.
They mix to form an **Intermetallic Compound** ($Cu_6Sn_5$).
It becomes one solid piece of metal.

### Eutectic Point
*   Lead melts at 327°C.
*   Tin melts at 232°C.
*   **Mix (63% Tin / 37% Lead):** It melts at **183°C**.
Wait. The mix melts *colder* than either ingredient?
Yes. This is the **Eutectic Point**.
It also freezes instantly (Solid <-> Liquid) with no "slushy" phase.
This is critical. If it was slushy, moving the wire would create a "Cold Joint" (cracked).

## Construction: The Alloy
Solder is a wire with a gooey center:
1.  **The Metal:** Tin (60%) + Lead (40%) [Old style]. Or Tin/Silver/Copper (New RoHS style).
2.  **The Core (Flux):** A hollow tube inside the wire filled with Rosin (Acid).

### Flux (The Acid)
Metal oxidizes. Oxygen creates a skin of rust on copper.
Solder cannot touch dirty copper.
The smoke you see when soldering is **Flux** (Rosin).
It is an acid that boils, eats the rust layer, and creates a clean path for the liquid metal to wet the wire.

> **One-Minute Summary**
> Solder is an alloy designed to melt at a low temperature. It chemically reacts with copper to fuse wires together at the molecular level, creating a continuous electrical path.
        `,
    },
    {
        slug: "how-memory-foam-works-viscoelastic",
        title: "The Slow Sponge: How Memory Foam Works",
        description: "NASA invented it for crash seats. Why your mattress remembers your shape.",
        category: "Materials",
        publishedAt: "2024-03-16",
        imageUrl: "/images/memory-foam-hand.png",
        tags: ["Materials", "Chemistry", "Household"],
        content: `
## Visco-Elasticity
Most foams are Elastic (Springs). You push, they push back instantly.
Water is Viscous (Honey). You push, it flows away slowly.
Memory Foam (Polyurethane with additives) is both.
**Viscoelastic.**

## Construction: The Bubble
It begins as a liquid reaction:
1.  **Polyols + Isocyanates:** The two liquids mixed (Petrochemicals).
2.  **Blowing Agent:** A gas injected into the mix to create bubbles.
3.  **Surfactant:** Controls the size of the bubbles (Cells) to ensure they are "Open" (connected) rather than "Closed" (isolated).

### The Open Cell Matrix
Under a microscope, it looks like billions of open bubbles.
1.  **Compression:** When you lay on it, the air is squeezed out of the bubbles. The foam deforms.
2.  **Heat Sensitivity:** This is the key. The chemicals are tailored to soften at **98.6°F (Body Temp)**.
    *   Where you are warm, the foam melts and sinks.
    *   Where you are cool, the foam stays stiff.
    *   It literally molds a cast of your body.
3.  **The Lag:** When you get up, the air has to be sucked back into the tiny cells. This takes time (The "Memory" effect).

### The Hysteresis Loop
It absorbs energy.
If you drop a bowling ball on a spring mattress, it bounces.
If you drop it on Memory Foam, it splats and stops.
This is why it is great for isolation (You don't feel your partner move).

> **One-Minute Summary**
> A polyurethane foam that becomes soft when heated by your body. Its cell structure restricts airflow, causing it to regain its shape slowly after compression, which distributes pressure points evenly.
        `,
    }
];
