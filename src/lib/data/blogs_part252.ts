import { BlogPost } from "../blogs";

export const BLOGS_PART_252: BlogPost[] = [
    {
        slug: "photoelectric-effect-einstein-nobel",
        title: "Einstein's Only Nobel: The Photoelectric Effect",
        description: "Einstein didn't win the Nobel Prize for Relativity. He won it for proving that light is made of particles (Photons).",
        category: "Physics",
        publishedAt: "2027-05-21",
        imageUrl: "/images/photoelectric-effect.png",
        tags: ["Physics", "Quantum", "Einstein"],
        content: `
## Introduction: The Mystery
Shine a light on metal. Electrons pop off (Electricity).
Classical physics said: "Brighter light = Faster electrons."
Experiment said: "Brighter light = *More* electrons. But speed depends on *Color*."
Blue light kicked them fast. Red light didn't kick them at all, no matter how bright it was.
Physics was broken.

## 1. The Photon
In 1905, Einstein solved it.
Light acts like bullets (Quanta/Photons).
Red bullets are soft. Even a million of them won't dent the metal.
Blue bullets are hard. One hit knocks an electron loose.
This proved **Wave-Particle Duality**. Light is a wave... but it is also a stream of particles.

## 2. Solar Panels
This is how Solar Panels work.
Sunlight hits silicon, knocks electrons loose, and creates a current.
We owe modern energy to this paper.

> **One-Minute Summary**
>
> The **Photoelectric Effect** is the emission of electrons when electromagnetic radiation (light) hits a material. Einstein explained it by proposing that light consists of discrete packets of energy called **Photons**. This discovery was pivotal in establishing **Quantum Mechanics** and earned him the Nobel Prize in Physics in 1921.
        `,
    },
    {
        slug: "polarization-sunglasses-physics",
        title: "The Picket Fence: How Polarization Works",
        description: "Why do polarized sunglasses cut glare? How do 3D glasses work? It's all about the angle of the wiggle.",
        category: "Physics",
        publishedAt: "2027-05-22",
        imageUrl: "/images/polarization-filter.png",
        tags: ["Physics", "Light", "Optics"],
        content: `
## Introduction: The Wiggle
Light is a transverse wave. It wiggles up-down, left-right, and every angle in between.
**Glare** happens when light hits a flat surface (Road/Water) and bounces off.
The bounce filters the light. The reflected light is mostly Horizontal.

## 1. The Filter
Polarized sunglasses are like a Picket Fence with vertical slats.
They let "Up-Down" light through.
They block "Left-Right" (Horizontal) light.
Since Glare is Horizontal, the glasses block the glare but let you see the world.

## 2. LCD Screens
Your computer screen uses polarization.
Liquid Crystals twist the light to fit through a filter.
If you wear polarized glasses and tilt your head, your phone screen might turn black.
You crossed the fences.

> **One-Minute Summary**
>
> **Polarization** refers to the orientation of the oscillations of light waves. Unpolarized light (like the sun) vibrates in all planes. Reflection off non-metallic surfaces (water, roads) tends to polarize light horizontally, creating glare. **Polarizing Filters** block these specific angles, enhancing contrast and visibility.
        `,
    },
    {
        slug: "diffraction-bending-light",
        title: "Bending Around Corners: Diffraction",
        description: "Why can you hear someone around a corner, but you can't see them? Because sound waves are big and light waves are tiny.",
        category: "Physics",
        publishedAt: "2027-05-23",
        imageUrl: "/images/diffraction-waves.png",
        tags: ["Physics", "Waves", "Light"],
        content: `
## Introduction: The Smear
Waves don't go straight. They spread out when they pass through a hole.
This is **Diffraction**.
The smaller the hole (relative to the wavelength), the more it spreads.

## 1. The Limit
This limits how small we can make computer chips.
We use UV light to \"print\" chips.
But the light smears.
We can't print lines smaller than the light wave itself (Diffraction Limit).
We had to switch to Extreme UV (EUV) just to make the iPhone 15 chip.

## 2. Sound vs Light
Sound waves are meters long. They bend around doorways easily.
Light waves are nanometers long. They barely bend at all.
That's why shadows are sharp.

> **One-Minute Summary**
>
> **Diffraction** is the bending of waves around obstacles or through openings. It fundamentally limits the resolution of any optical system (microscopes, telescopes). The **Diffraction Limit** dictates that you cannot resolve details smaller than roughly half the wavelength of the light used to observe them.
        `,
    },
    {
        slug: "metamaterials-invisibility-cloak-v2",
        title: "The Invisibility Cloak: Metamaterials",
        description: "We can't make things transparent. But we can make light flow *around* them like water around a stone.",
        category: "Physics",
        publishedAt: "2027-05-24",
        imageUrl: "/images/invisibility-cloak.png",
        tags: ["Physics", "Materials", "Future"],
        content: `
## Introduction: Negative Refraction
Glass bends light *towards* the normal.
What if a material bent light the wrong way (Negative Refraction)?
It doesn't exist in nature.
So we built it. **Metamaterials**.
They have structures smaller than light waves.

## 1. The Cloak
If you wrap an object in a Metamaterial, the light flows around it and reconnects on the other side.
To the observer, the object isn't there.
You see the background behind it.

## 2. The Catch
Currently, it only works for specific colors (microwaves, infrared).
A full "Harry Potter" cloak is hard because you have to bend Red, Green, and Blue light differently at the same time.
But for Radar (which is one color), we can make planes invisible.

> **One-Minute Summary**
>
> **Metamaterials** are artificial materials engineered to have properties not found in nature. By having a negative **Refractive Index**, they can bend electromagnetic waves around an object, effectively rendering it invisible to that specific wavelength. Current applications focus on antennas and stealth technology rather than visible light cloaking.
        `,
    },
    {
        slug: "michelson-morley-failed-experiment",
        title: "The Most Successful Failure: Michelson-Morley",
        description: "They tried to prove the 'Ether' existed. They failed. Their failure paved the way for Einstein and destroyed classical physics.",
        category: "Physics",
        publishedAt: "2027-05-25",
        imageUrl: "/images/michelson-interferometer.png",
        tags: ["Physics", "History", "Einstein"],
        content: `
## Introduction: The Ether
Sound needs air to travel.
Waves need water.
So Light must need something to travel through, right?
Scientists called it the **Luminiferous Ether**.
They thought the Earth was moving through this Ether wind.

## 1. The Experiment (1887)
Michelson and Morley built a device (Interferometer) to measure the Ether wind.
They measured the speed of light in direction X and direction Y.
If the Earth was moving, the speeds should be different.
Result: **Zero Difference**.
The speed of light was exactly the same, no matter which way they pointed it.

## 2. The Crisis
Physics panicked. How can the speed be constant?
20 years later, Einstein said: "Maybe there is no Ether. Maybe the speed of light is a universal constant."
The failure of this experiment birthed **Special Relativity**.

> **One-Minute Summary**
>
> The **Michelson-Morley Experiment** attempted to detect the relative motion of matter through the stationary **Luminiferous Aether**. The null result (finding no difference in the speed of light) disproved the existence of the Aether and provided the experimental foundation for Einstein's theory that the speed of light is constant in all reference frames.
        `,
    },
];
