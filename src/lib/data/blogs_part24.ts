import { BlogPost } from "../blogs";

export const BLOGS_PART_24: BlogPost[] = [
    {
        slug: "how-mirrors-work-silver",
        title: "The Silver Atom: How Mirrors Work",
        description: "Why is it silver? Why not green? The physics of reflectivity.",
        category: "Physics",
        publishedAt: "2024-04-01",
        imageUrl: "/images/mirror-reflection.png",
        tags: ["Physics", "Light", "Materials"],
        content: `
## It's Not the Glass
Glass is invisible. The mirror is a thin layer of **Aluminum** or **Silver** sprayed on the back of the glass.
The glass is just there to protect the metal from scratching/oxidizing.

## Construction: The Silvering Process
A modern mirror is a chemical sandwich:
1.  **Glass Substrate:** High-quality "Float Glass" (perfectly flat).
2.  **Tin Chloride (SnCl2):** A sensitizer layer that helps silver stick.
3.  **Silver Nitrate + Ammonia:** The chemical reaction that deposits pure atomic silver.
4.  **Copper Layer:** Prevents the silver from oxidizing (tarnishing).
5.  **Paint:** The grey backing you see, protecting the metal from scratches.

### The Electron Sea
Metals reflect light because they have **Free Electrons**.
When a light wave (Oscillating Electric Field) hits the metal:
1.  The electrons start vibrating at the same frequency.
2.  Vibrating electrons create their *own* light wave.
3.  This new wave travels backwards.
**Ideally:** It reflects 100%.
**Reality:** Silver reflects 95%. It absorbs a tiny bit of Blue/UV light.
If you look at a "Tunnel of Mirrors" (Infinity mirror), the reflection gets **Greener** and greener deep down. That is the true color of mirrors.

> **One-Minute Summary**
> Incoming light shakes the loose electrons on the metal surface. These shaking electrons re-emit the light in the opposite direction, preserving the image information.
        `,
    },
    {
        slug: "how-lenses-work-refraction",
        title: "Bending Light: How Lenses Work",
        description: "Light slows down in glass. That's why it bends. The Index of Refraction.",
        category: "Physics",
        publishedAt: "2024-04-02",
        imageUrl: "/images/lens-refraction.png",
        tags: ["Physics", "Light", "Optics"],
        content: `
## The Speed Limit
Speed of light ($c$) = 300,000 km/s.
Speed of light in Glass = 200,000 km/s.
It slows down.

## Construction: Just Glass?
No. A camera lens is a marvel of chemistry:
1.  **The Glass:** Not window glass. It contains Lanthanum, Fluorite, or Lead for high density.
2.  **Coatings:** A lens has purple/green tints. These are **Anti-Reflective (AR)** coatings (Magnesium Fluoride). Without them, you'd lose 4% of light at every surface. A modern lens has 15+ elements, so you'd lose half your light without coatings.
3.  **Aperture Blades:** The mechanical iris inside that controls light flow.

### The Marching Band Analogy
Imagine a marching band marching on pavement (Fast).
They hit a patch of mud (Slow) at an **Angle**.
1.  The people on the Right hit the mud first. They slow down.
2.  The people on the Left are still on pavement. They keep going fast.
3.  **The Turn:** The entire line "pivots" towards the mud.
This is **Refraction**.
A Convex Lens is shaped so that light rays from all angles are bent towards a single point (The Focal Point).

> **One-Minute Summary**
> Light travels slower through dense materials. By shaping the glass curve, we force different parts of the light beam to slow down at different times, steering the beam to a focus.
        `,
    },
    {
        slug: "how-lasers-work-stimulated-emission",
        title: "The Clone Army: How Lasers Work",
        description: "Light is usually chaotic. A Laser is disciplined. Mono-chromatic, Coherent, Directional.",
        category: "Physics",
        publishedAt: "2024-04-03",
        imageUrl: "/images/laser-cavity.png",
        tags: ["Physics", "Light", "Quantum"],
        content: `
## LASER: Light Amplification by Stimulated Emission of Radiation.

## Construction: The Ruby Rod
The very first laser (Maiman, 1960) was simple:
1.  **Gain Medium:** A synthetic Ruby rod (Aluminum Oxide + Chromium).
2.  **Pump Source:** A coiled Xenon Flash lamp (like a camera flash) wrapping around the rod.
3.  **Cavity:** One end fully silvered, the other end partially silvered.

### 1. Population Inversion (The Battery)
We pump energy into a crystal (Ruby) or Gas.
The electrons jump up to a high energy level. They are waiting.

### 2. Stimulated Emission (The Clone)
A single photon flies past an excited electron.
It doesn't just hit it. It whispers "Join me."
The electron drops down and emits a **second photon**.
**Crucial:** The new photon is an exact clone.
*   Same Color (Wavelength).
*   Same Direction.
*   Same Phase (Step).
Now we have 2 photons. They hit 2 more atoms. Now 4. Then 8. 16. 32.

### 3. The Mirrors (The Cavity)
We put mirrors on both ends.
The light bounces back and forth, recruiting billions of clones every pass.
One mirror is "Half-Silvered" (let's 1% out).
The beam shoots out.

> **One-Minute Summary**
> We excite atoms so they are ready to fire. When one photon passes, it triggers a chain reaction of "cloned" photons that all march in perfect lockstep, creating a coherent beam.
        `,
    },
    {
        slug: "how-microscopes-work-diffraction",
        title: "The Limit of Light: How Microscopes Work",
        description: "Why can't we see atoms with light? The wavelength problem.",
        category: "Science",
        publishedAt: "2024-04-04",
        imageUrl: "/images/microscope-limit.png",
        tags: ["Science", "Optics", "Biology"],
        content: `
## Magnification is Easy. Resolution is Hard.
You can make a lens magnify 1,000,000x.
But the image will be blurry.
Why?
Because Light is a **Wave**.
Visible light acts like a beach ball (Size: 400nm - 700nm).
If you try to "feel" a marble (an Atom) using a beach ball, you fail. The ball is too big.
## Construction: The Compound Optics
It's not just one lens. It's a relay team:
1.  **Objective Lens:** The tiny high-power lens near the sample. It captures the details.
2.  **Eyepiece (Ocular):** The lens you look through. It merely magnifies the image created by the objective.
3.  **Condenser:** A lens under the stage that focuses light *onto* the sample so it's bright enough to see.

This is the **Diffraction Limit** (Abbe Limit).
You cannot see anything smaller than half the wavelength of light (~200nm).
Bacteria are 1,000nm (Visible).
Viruses are 50nm (Invisible).
To see Viruses, we need smaller waves. **Electrons** (Electron Microscope).

> **One-Minute Summary**
> Simple lenses magnify the image. But the ultimate sharpness is limited by the physical size of the light waves. To see smaller than light, we must use electrons.
        `,
    },
    {
        slug: "how-telescopes-work-reflection",
        title: "The Time Bucket: How Telescopes Work",
        description: "It doesn't make things bigger. It makes them brighter. Why Newton used mirrors.",
        category: "Space",
        publishedAt: "2024-04-05",
        imageUrl: "/images/telescope-mirror.png",
        tags: ["Space", "Optics", "Astronomy"],
        content: `
## The Light Bucket
Your pupil is 5mm wide.
The Hubble Telescope is 2,400mm wide.
It collects **230,000 times more light** than your eye.
This allows it to see faint things (Galaxies) that are effectively invisible to us.

This allows it to see faint things (Galaxies) that are effectively invisible to us.

## Construction: The Newtonian
A classic Dobsonian/Newtonian telescope is elegant:
1.  **Primary Mirror:** A parabolic dish at the bottom.
2.  **Secondary Mirror:** A small flat mirror angled 45° near the top.
3.  **Spider Vanes:** Thin metal cross-hairs holding the secondary mirror (creates the "star spikes" in photos).
4.  **Eyepiece Focuser:** Where you actually look.

### Refractor (Lens) vs Reflector (Mirror)
1.  **Refractor (Galileo):** Uses glass lenses.
    *   *Problem:* Heavy glass droops. "Chromatic Aberration" (Colors split like a prism).
2.  **Reflector (Newton):** Uses a curved mirror at the bottom.
    *   *Solution:* Mirrors reflect all colors equally. You can support the mirror from the back so it can be huge (10 meters+).
Almost all modern research telescopes are Reflectors.

> **One-Minute Summary**
> A telescope is a giant funnel for photons. Its primary job is to gather enough light from faint objects to trigger a sensor. Magnification is secondary.
        `,
    }
];
