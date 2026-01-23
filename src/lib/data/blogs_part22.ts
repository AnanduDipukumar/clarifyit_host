import { BlogPost } from "../blogs";

export const BLOGS_PART_22: BlogPost[] = [
    {
        slug: "how-oled-works-organic",
        title: " The Black Pixel: How OLED Works",
        description: "Why your old TV looks grey in the dark, but your phone looks purely black.",
        category: "Technology",
        publishedAt: "2024-03-22",
        imageUrl: "/images/oled-subpixel.png",
        tags: ["Technology", "Electronics", "Light"],
        content: `
## LCD vs OLED
*   **LCD (Liquid Crystal):** A big bright lamp (Backlight) is always on. Millions of shutters (Pixels) try to block the light to make black. They leak. Black looks Grey.
*   **OLED (Organic LED):** Every single pixel is its own tiny light bulb.

## Construction: The Stack
An OLED pixel is an ultra-thin sandwich (1000x thinner than a hair):
1.  **Substrate:** Glass or plastic base.
2.  **Anode:** Transparent metal (Indium Tin Oxide) that injects Holes.
3.  **Emissive Layer:** Carbon-based molecules (Alq3) that glow.
4.  **Cathode:** Aluminum layer that injects Electrons.

### The Organic Sandwich
"Organic" doesn't mean pesticide-free. It means **Carbon-based**.
Between two conductors (Anode and Cathode), we place a thin film of organic molecules (like Alq3).
When electricity jumps through the molecules, they get excited and release a photon.
**True Black:**
To show black on an OLED, we simply **turn off the power** to that pixel.
Zero light. Infinite contrast.
**Burn-in:** The organic blue pixels die faster than the red/green ones. Eventually, the screen leaves a ghost image.

> **One-Minute Summary**
> In an OLED screen, each pixel generates its own light. This allows for perfect blacks (by turning the pixel off) and thinner screens because no backlight is required.
        `,
    },
    {
        slug: "how-eink-works-electrophoresis",
        title: "The Physical Pixel: How Kindle E-Ink Works",
        description: "It uses zero power to show an image. It only uses power to change it.",
        category: "Technology",
        publishedAt: "2024-03-23",
        imageUrl: "/images/eink-capsules.png",
        tags: ["Technology", "Reading", "Physics"],
        content: `
## Electronic Ink
An LCD screen is fighting the sun. (Backlight vs Sunlight).
E-Ink reflects the sun. It looks like paper.

## Construction: The Capsule
The screen is not pixels; it is balls.
1.  **Micro-capsules:** Tiny diameter ranges (0.04mm) filled with oil.
2.  **Pigments:** Positively charged White dust ($TiO_2$) and Negatively charged Black dust (Carbon).
3.  **Electrodes:** Top and bottom transparent conductive sheets.

### The Microcapsules
The screen is filled with millions of tiny bubbles of oil.
Inside each bubble are floating pigments:
1.  **White Particles:** Positive Charge (+).
2.  **Black Particles:** Negative Charge (-).
**The Switch:**
*   **Make it Black:** Put a Positive charge *under* the pixel.
    *   The Black (-) particles are attracted down? No, opposites attract. Wait.
    *   Correction: Put a **Positive** charge on top. Black (-) flies up. White (+) flies down. **Pixel looks Black.**
*   **Make it White:** Reverse the voltage. White flies up. **Pixel looks White.**

### Bistability
Once the particles move, they **stay there**.
You can rip the battery out. The image remains.
This is why a Kindle lasts 3 weeks. It only uses juice when you turn the page.

> **One-Minute Summary**
> Tiny capsules contain black and white dust suspended in oil. We use voltage to physically push the dust up or down to the surface. Once moved, they stay in place without power.
        `,
    },
    {
        slug: "how-film-cameras-work-chemistry",
        title: "The Silver Trap: How Film Cameras Work",
        description: "Photography is just controlled rusting. The chemistry of Silver Halide.",
        category: "Art",
        publishedAt: "2024-03-24",
        imageUrl: "/images/film-grain.png",
        tags: ["Art", "Chemistry", "History"],
        content: `
## The Photon Trap
A strip of plastic (Film) is coated in gelatin containing crystals of **Silver Halide**.
These crystals are light-sensitive.
1.  **Exposure:** You open the shutter. Light hits the film.
2.  **The Latent Image:** The photon knocks an electron loose within the crystal. A few silver atoms turn into metallic silver.
    *   You can't see this yet. It is invisible.

## Construction: The Roll
Film is a chemical lasagne:
1.  **Base:** Acetate or Polyester plastic (The support).
2.  **Emulsion:** Gelatin holding the silver crystals (The sensor).
3.  **Anti-Halation Layer:** A dark coating on the back to stop light from bouncing back through the film and causing halos.

### The Darkroom
To see the photo, you need chemicals.
1.  **Developer:** A chemical that hunts for those few metallic silver atoms. If it finds one, it converts the *entire crystal* into black metallic silver.
    *   Lots of Light = Lots of Black Silver. (Negative features are dark).
2.  **Stop Bath:** Acid that kills the developer.
3.  **Fixer:** The crucial step. It dissolves the **unexposed** crystals (the ones that didn't see light). If you skipped this, the photo would turn black as soon as you took it into the sun.

> **One-Minute Summary**
> Light triggers a microscopic chemical change in silver crystals. We use a developer to amplify this change, turning exposed crystals black, and a fixer to wash away the unexposed ones, leaving a permanent negative image.
        `,
    },
    {
        slug: "how-microphones-work-diaphragm",
        title: "The Reverse Speaker: How Microphones Work",
        description: "Sound is air pressure. How do we turn wind into voltage?",
        category: "Technology",
        publishedAt: "2024-03-25",
        imageUrl: "/images/microphone-diaphragm.png",
        tags: ["Technology", "Audio", "Physics"],
        content: `
## Dynamic Mics (The Shure SM58)
It is literally a speaker wired backwards.
1.  **Diaphragm:** A thin plastic sheet.
2.  **Coil:** Glued to the back is a coil of wire floating around a magnet.
3.  **Sound:** You sing. The air hits the diaphragm. It moves.
4.  **Induction:** The moving coil cuts the magnetic field. Voltage is generated.
*   **Pro:** Rugged. Needs no batteries.
*   **Con:** Heavy diaphragm. Can't capture high frequencies well.

## Construction: The Transducer
A dynamic mic (like the SM58) contains:
1.  **Grille:** Steel mesh pop-filter/windshield.
2.  **Diaphragm:** Mylar dome.
3.  **Voice Coil:** Copper wire glued to the dome.
4.  **Magnet:** Rare earth magnet inside the coil.

## Condenser Mics (The Studio Mic)
They use a **Capacitor**.
1.  **Backplate:** Solid Metal (Fixed).
2.  **Diaphragm:** Gold-sputtered Mylar (Moving).
3.  **The Charge:** We pump 48V (Phantom Power) into them to create an electric field.
4.  **The Signal:** When the diaphragm moves closer/further from the backplate, the **Capacitance** changes. This change is converted into voltage.
*   **Pro:** Ultra-light diaphragm. Captures perfect detail.
*   **Con:** Fragile. Needs power.

> **One-Minute Summary**
> A lightweight membrane vibrates when hit by sound waves. This vibration either moves a coil in a magnetic field (Dynamic) or changes the capacitance of a charged plate (Condenser) to generate an electrical signal.
        `,
    },
    {
        slug: "how-headphones-work-voice-coil",
        title: "The Moving Magnet: How Headphones Work",
        description: "It works because of the Left Hand Rule. Turning electricity back into air pressure.",
        category: "Technology",
        publishedAt: "2024-03-26",
        imageUrl: "/images/headphone-driver.png",
        tags: ["Technology", "Audio", "Physics"],
        content: `
## The Motor Principle
To make sound, you need to push air.
You need a cone that moves In and Out.
How do you push a cone with a wire?
**Magnets.**

## Construction: The Driver
Headphones are miniaturized speakers:
1.  **Magnet:** Neodymium doughnut.
2.  **Voice Coil:** The electromagnet.
3.  **Spider:** The suspension spring that centers the coil.
4.  **Diaphragm (Cone):** The plastic sheet that pushes air.

### The Voice Coil
1.  **Permanent Magnet:** A heavy magnet is glued to the back of the headphone.
2.  **Voice Coil:** A coil of copper wire is glued to the paper cone.
3.  **The Signal:** Your phone sends an AC current (Music) into the coil.
    *   **Current +:** The coil becomes a North magnet. It repels. The cone moves **Out**.
    *   **Current -:** The coil becomes a South magnet. It attracts. The cone moves **In**.
If the current switches 440 times a second (440Hz), the cone moves 440 times a second. You hear an 'A' note.

### Planar Magnetic (The Audiophile Choice)
Instead of a cone, they use a flat sheet of plastic with wire *printed* on it.
It hangs between two arrays of magnets.
The entire sheet moves at once.
**Result:** Less distortion, but heavy and expensive.

> **One-Minute Summary**
> An electromagnet (Voice Coil) pushes against a permanent magnet. By varying the current flowing through the coil, we force the attached speaker cone to vibrate, pushing air waves that your ear interprets as sound.
        `,
    }
];
