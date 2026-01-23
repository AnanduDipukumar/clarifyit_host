import { BlogPost } from "../blogs";

export const BLOGS_PART_9: BlogPost[] = [
    {
        slug: "how-fiber-optics-work-total-internal-reflection",
        title: "The Glass Pipe: How Fiber Optics Work",
        description: "It isn't just a wire for light. It is a mirrored tunnel that can bend simple physics to its will.",
        category: "Technology",
        publishedAt: "2024-01-15",
        imageUrl: "/images/fiber-optics-tir.png", // TODO: Prompt: A glowing blue laser beam bouncing in a zig-zag pattern inside a transparent glass tube. Dark background. High contrast.
        tags: ["Technology", "Physics", "Internet"],
        content: `
## The Speed of Light Paradox
We are told that light always travels in a straight line.
So how do we get the internet from New York to London, through a cable that curves around the bottom of the ocean?
We use a trick that physics students learn in week 1, but engineers perfected over 50 years.
**Total Internal Reflection.**

### The Skipping Stone
> **Mental Model: The Lake**
> 
> Imagine you are standing at the edge of a calm lake.
> If you throw a rock **down** (steep angle), it smashes through the surface and sinks.
> If you throw a rock **sideways** (shallow angle), it skips off the water and flies back up.
> 
> Fiber optics works the exact same way.
> We shoot a laser beam down a glass tube at such a shallow angle that the light *tries* to escape, but the glass surface acts like the lake water. It skips the light back into the center.

---

## It's Not Mirrors
A common myth is that fiber cables are lined with tiny mirrors.
**False.**
Mirrors are terrible.
*   **Mirror Efficiency:** A bathroom mirror absorbs 5-10% of light every bounce.
*   **The Problem:** In a long cable, light bounces billions of times. With mirrors, the signal would go dark after 10 feet.
*   **The Solution:** We don't use mirrors. We use **Core and Cladding**.

1.  **The Core:** Ultra-pure glass (Hair thin). This is the "Lake".
2.  **The Cladding:** A different type of glass wrapped around the core. This is the "Air".
Because the Cladding has a lower Refractive Index (Density) than the Core, the light essentially hits a "wall" of density and bounces back in with **100% efficiency**.

### The Critical Angle
There is a catch.
You cannot bend the cable too much.
If you kink the hose, the angle of the light hitting the wall becomes too steep (like throwing the rock straight down).
**Snap.**
The light breaks through the cladding and leaks out. The signal dies instantly.
This is why fiber cables have a "Minimum Bend Radius" printed on the jacket.

## Copper vs Glass: The Cage Match

| Feature | Copper (Cat6) | Fiber Optic |
| :--- | :--- | :--- |
| **Transmission** | Electrons (Electricity) | Photons (Light) |
| **Speed** | Fast (but has resistance) | Speed of Light (minus 30%) |
| **Distance** | 100 Meters Max | 40 Kilometers Max |
| **Interference** | High (Magnets/Power Lines kill it) | Zero (It's glass, it ignores magnets) |
| **Security** | Low (Can be tapped) | High (Impossible to tap without breaking) |

### The "Twist": Glass is Heavy
We think of glass as fragile.
But optical fiber glass is **pure silica**.
If you drew a thread of steel and a thread of fiber glass of the same thickness:
**The Glass is stronger than the Steel.**
The only reason windows break is because they have microscopic surface scratches. Fiber is drawn in a vacuum and coated instantly. It is perfect.

## Edge Case: The Shark Bite
In the 1980s, the first deep-sea cables had a mysterious problem.
They kept going dark.
Engineers pulled them up and found **Shark Teeth** embedded in the plastic.
**Why?**
The high-voltage power lines running alongside the fiber created an electromagnetic field. Sharks sense electricity (to find fish). They thought the cable was a struggling tuna and bit it.
**The Fix:** We now wrap deep-sea cables in a layer of Kevlar and steel tape. Not for pressure, but for sharks.

### Q&A
1.  **Does light travel at 'C' in the cable?**
    No. Light slows down in glass by about 31%. It travels at roughly 200,000 km/s instead of 300,000 km/s. It is still faster than electricity in copper.
2.  **How do we fix a broken undersea cable?**
    A special ship hooks the cable from the seabed (2 miles down), pulls both cut ends up to the surface, splices them (fuses the glass) in a clean room on the boat, and drops it back down. It costs $1 Million per repair.

> **One-Minute Summary**
> We trap light inside a strand of pure glass by shooting it at such a shallow angle that it skips off the walls instead of passing through them. It is the only way to send a signal around the globe without it fading away.
        `,
    },
];
