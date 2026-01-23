import { BlogPost } from "../blogs";

export const BLOGS_PART_215: BlogPost[] = [
    {
        slug: "speed-of-light-limit",
        title: "The Universal Speed Limit: c",
        description: "Why is the speed of light 299,792,458 m/s? Why not infinite? Einstein realized it's not the speed of light; it's the speed of Causality.",
        category: "Physics",
        publishedAt: "2026-11-16",
        imageUrl: "/images/speed-of-light.png",
        tags: ["Physics", "Light", "Relativity"],
        content: `
## Introduction: The Constant
In the old days, we thought time was constant.
Einstein changed that.
He said **c** (Speed of Light) is constant.
If you move fast, Time slows down to keep c constant.
Nothing with mass can reach c.
If you did, you would have infinite mass and time would stop.

## 1. Why that number?
Why 300,000 km/s?
We don't know yet.
It's a fundamental constant of the vacuum.
But it is frustratingly slow.
It takes 8 minutes to get to the Sun. 4 years to Alpha Centauri.
Communicating with Mars has a 20-minute lag.
The universe is a prison cell, and the walls are the speed of light.

## 2. Speed of Causality
It's not just about light. Gravity travels at c.
If the Sun disappeared, Earth would orbit nothing for 8 minutes before flying off.
Information cannot travel faster than Cause and Effect.
If it did, you could answer a phone before it rang.

> **One-Minute Summary**
>
> The **Speed of Light** in a vacuum, commonly denoted **c**, is a universal physical constant exactly equal to **299,792,458 meters per second**. According to special relativity, c is the maximum speed at which all conventional matter and information in the universe can travel. It is the core of Einstein's famous equation **E=mc²**.
        `,
    },
    {
        slug: "refraction-bending-light",
        title: "Why Straws Bend: Refraction",
        description: "Light slows down in water. This braking effect makes it turn. It's the reason glasses work and mirages exist.",
        category: "Physics",
        publishedAt: "2026-11-17",
        imageUrl: "/images/prism-rainbow.png",
        tags: ["Physics", "Light", "Science"],
        content: `
## Introduction: The Marching Band
Imagine a marching band walking on pavement (Fast).
One corner hits a patch of mud (Slow).
That corner slows down, while the rest keep walking fast.
The whole line turns toward the mud.
This is **Refraction**.
Light is the band. Glass/Water is the mud.

## 1. Dispersion
Different colors slow down by different amounts.
Blue slows down more than Red.
So Blue bends more.
This is how a prism splits white light into a rainbow (**Dispersion**).
It is why the sky is blue and sunsets are red (Rayleigh Scattering, a related effect).

## 2. The Mirage
On a hot road, the air near the asphalt is hot (less dense).
Light travels faster in hot air.
The light from the sky bends *up* towards your eye.
You see the sky on the ground.
Your brain thinks: "Sky on ground = Water."
But it's just a light trick.

> **One-Minute Summary**
>
> **Refraction** is the change in direction of a wave passing from one medium to another (e.g., from air to water). It creates optical illusions like bending straws or mirages. The amount of bending depends on the **Refractive Index** of the materials. Snell's Law describes the mathematical relationship between the angles of incidence and refraction.
        `,
    },
    {
        slug: "diffraction-waves-around-corners",
        title: "Hearing Around Corners: Diffraction",
        description: "You can hear someone in the next room, but you can't see them. Why does sound turn corners but light doesn't?",
        category: "Physics",
        publishedAt: "2026-11-18",
        imageUrl: "/images/diffraction-waves.png",
        tags: ["Physics", "Waves", "Sound"],
        content: `
## Introduction: The Gap
Waves spread out when they pass through a hole.
This is **Diffraction**.
But it only works if the hole is roughly the same size as the Wavelength.
**Sound Waves:** Meters long. They easily diffract through doorways (Size ~1 meter).
**Light Waves:** Nanometers long. They go straight through the door without spreading.
That's why shadows are sharp, but sound is fuzzy.

## 1. The Double Slit
If you force light through tiny slits (nanometer size), it *does* diffract.
The waves overlap and interfere.
This creates Interference Patterns (Bright and Dark spots).
This proved Light is a Wave (Young's Experiment).

## 2. Radio Shadows
AM Radio (Long waves) can bend around mountains.
FM Radio (Short waves) gets blocked by mountains.
Frequency matters.

> **One-Minute Summary**
>
> **Diffraction** refers to various phenomena that occur when a wave encounters an obstacle or a slit. It is defined as the bending of waves around the corners of an obstacle or through an aperture into the region of geometrical shadow of the obstacle/aperture. It is most pronounced when the wavelength is comparable to the size of the obstacle.
        `,
    },
    {
        slug: "lasers-coherent-light",
        title: "Taming the Photon: How Lasers Work",
        description: "Light usually scatters everywhere (Lightbulb). A Laser forces all photons to march in lockstep. Coherent, Monochromatic, Powerful.",
        category: "Physics",
        publishedAt: "2026-11-19",
        imageUrl: "/images/laser-beam.png",
        tags: ["Physics", "Tech", "Lasers"],
        content: `
## Introduction: Stimulated Emission
**LASER** = **L**ight **A**mplification by **S**timulated **E**mission of **R**adiation.
1.  You excite an atom (give it energy).
2.  A photon hits it.
3.  The atom releases a second photon.
4.  Crucially, the new photon is a **Clone**. Same color. Same direction. Same phase.
5.  Put mirrors on both ends. The clones bounce back and forth, creating a cascade.

## 1. Coherence
A lightbulb is a crowd of people running in panic.
A laser is an army marching in unison.
This allows it to stay focused for miles (Moon Ranging).
It allows it to cut steel (Energy Density).

## 2. Uses
Without lasers, we have no Internet (Fiber Optics).
No Barcode scanners.
No LASIK eye surgery.
No Lidar (Self-driving cars).
It is a solution that looked for a problem... and found thousands.

> **One-Minute Summary**
>
> A **Laser** is a device that emits light through a process of optical amplification based on the stimulated emission of electromagnetic radiation. The light is **Spatial Coherent** (tight beam) and **Monochromatic** (single color). Invented in 1960, it has become ubiquitous in consumer electronics, medicine, and industry.
        `,
    },
    {
        slug: "lenses-focus-cameras",
        title: "Bending Reality: How Lenses Work",
        description: "A piece of curved glass can make a bug look huge or a mountain look small. The technology that let us see the Germ and the Galaxy.",
        category: "Physics",
        publishedAt: "2026-11-20",
        imageUrl: "/images/magnifying-glass.png",
        tags: ["Physics", "Optics", "History"],
        content: `
## Introduction: Convex and Concave
**Convex (Bulges out):** Focuses light to a point. Makes things look bigger. (Microscope).
**Concave (Caves in):** Spreads light out. Makes things look smaller. (Peephole).

## 1. The Telescope Revolution
In 1609, Galileo put two lenses in a tube.
He saw Jupiter's moons.
He destroyed the idea that Earth was the center of the universe.
In 1665, Robert Hooke put lenses in a microscope.
He saw cells.
He discovered the universe of the small.
Glass changed philosophy.

## 2. The Eye
Your eye is a liquid lens.
Muscles squeeze it to change focus (Accommodation).
As you get old, the lens gets hard. It can't squeeze.
You need reading glasses.
We are biological cameras.

> **One-Minute Summary**
>
> A **Lens** is a transmissive optical device that focuses or disperses a light beam by means of refraction. A simple lens consists of a single piece of transparent material, while a compound lens consists of several simple lenses (elements), usually arranged along a common axis. They are the core component of telescopes, microscopes, cameras, and human eyes.
        `,
    },
];
