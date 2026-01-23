import { BlogPost } from "../blogs";

export const BLOGS_PART_29: BlogPost[] = [
    {
        slug: "how-pacemakers-work-leads",
        title: "The Electric Heart: How Pacemakers Work",
        description: "Your heart is a battery-powered pump. Sometimes it needs a jump start.",
        category: "Health",
        publishedAt: "2024-04-26",
        imageUrl: "/images/pacemaker-xray.png",
        tags: ["Health", "Electronics", "Biology"],
        content: `
## The SA Node
Your heart has a natural pacemaker called the **Sinoatrial (SA) Node**.
It sends an electric zap 60 times a minute.
If this node fails (Bradychardia), your heart slows down. You pass out.

## Construction: The Hermetic Seal
The device must last 10 years inside a salty bag of water (your body).
1.  **Case:** Laser-welded Titanium (Biocompatible, non-magnetic).
2.  **Battery:** Lithium-Iodide. It doesn't emit gas. It lasts 10 years.
3.  **Feedthrough:** The most critical part. The connection point where wires leave the box. It uses a ceramic-to-metal brazing seal to ensure moisture *never* touches the electronics.

### The Implant
A pacemaker is a titanium box (Battery + Computer) implanted under your collarbone.
Wires (Leads) run through your veins into the heart chambers.
It has two modes:
1.  **Sensing:** It listens. If your heart beats on its own, it does nothing (Saves battery).
2.  **Pacing:** If you miss a beat, it zaps you (1 to 5 Volts).
**Rate Response:** Modern ones have accelerometers. If you start running, the pacemaker feels the jiggle and speeds up your heart automatically.

> **One-Minute Summary**
> A small computer monitors the heart's natural rhythm. If it detects a missed beat, it sends a precisely timed electrical impulse through wires directly into the heart muscle to trigger a contraction.
        `,
    },
    {
        slug: "how-cochlear-implants-work-nerve",
        title: "Hacking the Ear: How Cochlear Implants Work",
        description: "It doesn't make sound louder. It replaces the ear entirely.",
        category: "Health",
        publishedAt: "2024-04-27",
        imageUrl: "/images/cochlear-implant-diagram.png",
        tags: ["Health", "Neuroscience", "Electronics"],
        content: `
## Hearing Aid vs Cochlear
*   **Hearing Aid:** A mini speaker. Amplifies sound for a damaged ear.
*   **Cochlear Implant:** Used when the ear is dead. It bypasses the ear.

## Deep Dive: Tonotopic Mapping
The Cochlea is a rolled-up piano keyboard.
The outside (Base) detects High Pitch.
The inside (Apex) detects Low Pitch.
The electrode array takes advantage of this physical layout.
By stimulating specific locations along the spiral, we can "play" the correct frequency notes directly into the brain.
It sounds robotic (like a vocoder) at first, but the brain adapts in about 6 months, smoothing it into natural speech.

### The Electrode Array
1.  **Microphone:** Sits behind the ear. Picks up sound.
2.  **Processor:** Converts sound into digital signals.
3.  **Transmitter:** Sends signals (Radio) through the skin to the implant.
4.  **Electrodes:** A wire is threaded *deep inside* the Cochlea (The snail shell).
The array has 22 electrodes.
*   Electrode 1 triggers "High Pitch" nerves.
*   Electrode 22 triggers "Low Pitch" nerves.
It plays the auditory nerve like a piano.
The brain learns to interpret these electric sparks as sound.

> **One-Minute Summary**
> Instead of amplifying sound, it converts audio waves into electrical impulses. These impulses are sent to an electrode array inside the inner ear, which directly stimulates the auditory nerve fibers.
        `,
    },
    {
        slug: "how-stents-work-nitinol",
        title: "The Folding Scaffold: How Stents Work",
        description: "Opening a clogged artery with a metal balloon.",
        category: "Health",
        publishedAt: "2024-04-28",
        imageUrl: "/images/stent-balloon.png",
        tags: ["Health", "Materials", "Engineering"],
        content: `
## The Plaque Blockage
Cholesterol builds up in your arteries. The pipe gets narrow. Blood stops. Heart Attack.
We need to prop the pipe open.

## Deep Dive: Shape Memory
Nitinol is magic.
At cold temps (Martensite phase), it is soft like putty. You crush the stent onto the catheter.
At body temp (Austenite phase), it remembers its original shape and *forces* itself open with immense strength.
It isn't just a spring. It is a phase-changing metal engine activated by your blood heat.

### The Delivery System
You can't do open heart surgery for this.
Doctors insert a catheter (long tube) into your leg and snake it up to your heart.
At the tip is a **Stent** crimped onto a tiny **Balloon**.
1.  **Position:** Navigate to the blockage.
2.  **Inflate:** Pump water into the balloon at 15 Atmospheres (High Pressure).
3.  **Expand:** The metal mesh expands and locks into the artery wall.
4.  **Retract:** Deflate the balloon. The stent stays behind.

### Nitinol (Shape Memory)
Modern stents are made of **Nitinol** (Nickel Titanium).
It is super-elastic. You can crush it, and it springs back.
This allows the artery to flex and bend with every heartbeat without the metal snapping (Fatigue failure).

> **One-Minute Summary**
> A mesh tube is crimped onto a balloon catheter. Once placed inside the narrowed artery, the balloon is inflated to expand the mesh, which locks in place to keep the vessel open permanently.
        `,
    },
    {
        slug: "how-artificial-knees-work-hinge",
        title: "The Titanium Hinge: How Knee Replacements Work",
        description: "Bone rubbing on bone is agony. We replace it with plastic.",
        category: "Health",
        publishedAt: "2024-04-29",
        imageUrl: "/images/knee-implant.png",
        tags: ["Health", "Materials", "Biomechanics"],
        content: `
## The Cartilage Cushion
Healthy knees have cartilage (Teflon) between the bones.
Arthritis eats the cartilage.
Now you have sandpaper rubbing on sandpaper.

## Construction: The Triad
A Total Knee Arthroplasty (TKA) has 3 parts:
1.  **Femoral Component:** A polished metal "C" clamp that covers the end of the thigh bone.
2.  **Tibial Baseplate:** A flat titanium platter screwed into the top of the shin bone.
3.  **Polyethylene Insert:** The high-density plastic puck between the metal parts. This is the bearing surface. It eventually wears out (lasts 15-20 years).

### The Resurfacing
We don't cut the whole leg off. We just cap the ends.
1.  **Femur (Thigh):** We glue a polished **Cobalt-Chrome** cap onto the bone.
2.  **Tibia (Shin):** We screw a **Titanium** tray into the bone.
3.  **The Spacer:** Between the metal parts, we snap in a piece of **Ultra-High Molecular Weight Polyethylene (Plastic)**.
The metal glides on the plastic. Friction is zero.
**The Rollback:** The knee is not a simple hinge. It rolls *and* glides. The shape of the plastic is computer-designed to mimic this complex motion.

> **One-Minute Summary**
> Surgeons remove the damaged bone surfaces and cap them with metal alloys. A specialized plastic spacer is inserted between the metal caps to act as artificial cartilage, allowing smooth, frictionless movement.
        `,
    },
    {
        slug: "how-insulin-pumps-work-basal",
        title: "The External Pancreas: How Insulin Pumps Work",
        description: "Type 1 Diabetics don't make insulin. The pump does it for them.",
        category: "Health",
        publishedAt: "2024-04-30",
        imageUrl: "/images/insulin-pump.png",
        tags: ["Health", "Biology", "Electronics"],
        content: `
## Construction: The Lead Screw
How do you push a liquid with nanoliter precision 24/7?
1.  **The Reservoir:** A plastic cartridge filled with 300 units of insulin.
2.  **The Plunger:** A piston.
3.  **The Lead Screw:** A threaded rod driven by a tiny **Stepper Motor**.
4.  **Gear Train:** Reduces the motor speed so 1 revolution = 0.001 units of insulin.
Safety is paramount. If the motor slips, you die. So it has dual microprocessors cross-checking each other.

## Basal vs Bolus
A normal pancreas drips a little insulin all day (Basal) and a huge squirt when you eat (Bolus).
Injections are clunky (Long acting vs Fast acting).
A pump uses **only** Fast Acting insulin.
1.  **Basal Rate:** It moves the plunger a tiny bit every few minutes to keep you alive.
2.  **Bolus:** You type in "I ate a burger." It injects 10 units instantly.

### The Loop (CGM)
The holy grail is the **Closed Loop**.
Consider the pump + a **Continuous Glucose Monitor (CGM)**.
*   **CGM:** "Blood sugar is dropping fast!"
*   **Pump:** "Okay, I will shut off the Basal insulin to prevent a coma."
It acts like a cruise control for your blood sugar.

> **One-Minute Summary**
> A motorized syringe delivers a continuous "trickle" of insulin through a tube to mimic the pancreas's background function. When the user eats, they manually trigger a larger dose to cover the meal.
        `,
    }
];
