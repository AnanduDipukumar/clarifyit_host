import { BlogPostStats } from "./db";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug?: string;
  imageUrl?: string;
  content: string;
  publishedAt: string;
}

export const INITIAL_BLOGS: BlogPost[] = [
  {
    slug: "what-is-voltage",
    title: "What is Voltage? A Simple Explanation",
    description: "Understand the 'push' that makes electricity move. Includes water analogy and derivations.",
    category: "Physics",
    publishedAt: "2023-10-01",
    imageUrl: "/images/voltage-analogy.png",
    content: `
## The Driving Force

Imagine you have a new toy car, but it won't move. You need to push it. In the world of electricity, **Voltage** is that push.

Without voltage, electrons (the tiny particles that carry energy) just drift around aimlessly inside a wire. Voltage gives them direction and energy.

> **Key Concept:** Voltage is the **Pressure**. Current is the **Flow**.

### The Water Tank Analogy
To truly understand voltage, forget wires for a second. Think about **Water**.

1.  **Water** = Electrons (The stuff that moves)
2.  **Pipe** = Wire (The path)
3.  **Pressure** = **Voltage** (The force)

Imagine two water tanks connected by a pipe.
*   **Case A**: Both tanks are at the same height. *Result*: Water doesn't flow.
*   **Case B**: One tank is high up, the other is low. *Result*: Water rushes down.

![Voltage Water Analogy](/images/voltage-analogy.png)

**Voltage is that height difference.** It is the "Electrical Pressure" that forces current to flow.

### Reinventing the Math
Why do we measure Voltage in Volts? And what does it actually mean?

Physics defines Voltage ($V$) as **Work done per unit Charge**.

$$ V = \\frac{W}{Q} $$

*   **Work ($W$)**: Energy spent (Joules).
*   **Charge ($Q$)**: The amount of electricity (Coulombs).

**Think of it like this:**
You are a delivery driver (The Electron).
*   **The Package**: Top secret energy (Joules).
*   **The Destination**: A lightbulb.
*   **Voltage**: How much energy (Package) you are carrying per truck.

> If you have a **9V Battery**, it means every Coulomb of charge is carrying **9 Joules** of energy to dump into your circuit.

### Common Misconceptions

> **Myth:** "Voltage flows through the wire."
>
> **Fact:** No! Voltage doesn't flow. **Current** flows. Voltage is just the pressure pushing the current. You can have Voltage without Current (like a battery sitting on a shelf), but you can't have Current without Voltage.

### Summary
*   **Symbol**: $V$
*   **Unit**: Volts ($V$) (= Joules per Coulomb)
*   **Role**: The Push / Pressure.
    `,
  },
  {
    slug: "voltage-vs-current",
    title: "Difference Between Voltage and Current",
    description: "One pushes, the other flows. Clear up the confusion once an for all.",
    category: "Physics",
    publishedAt: "2023-10-02",
    imageUrl: "/images/voltage-vs-current.png",
    content: `
## The Gun and The Bullet

People often use "High Voltage" and "High Current" interchangeably, but they are very different things.

Think of a **Gun**:
*   **Voltage** is the gunpowder explosion (The Energy/Speed).
*   **Current** is the bullet itself (The Mass/Object).

A grain of sand moving at light speed (High Voltage, Low Current) will hurt.
A slow-moving mountain (Low Voltage, High Current) will also hurt.
But they hurt for different reasons!

### The Water Analogy Revisited

| Feature | Voltage ($V$) | Current ($I$) |
| :--- | :--- | :--- |
| **Water Analogy** | **Pressure** (Water Height) | **Flow Rate** (Gallons per minute) |
| **Role** | The Use | The Effect |
| **Can exist alone?** | **Yes** (A closed tap has pressure) | **No** (Flow needs pressure) |

![Voltage vs Current Analogy](/images/voltage-vs-current.png)

### Ohm's Law: The Connection
These two are best friends. They are linked by **Resistance** ($R$).

$$ I = \\frac{V}{R} $$

Let's "reinvent" this formula logic:
1.  If I push harder ($V$ goes up), more water flows ($I$ goes up). -> $I \\propto V$.
2.  If the pipe is clogged ($R$ goes up), less water flows ($I$ goes down). -> $I \\propto 1/R$.

Combine them: **$I = V / R$**.

### Common Misconceptions

> **Myth:** "It's not the Voltage that kills you, it's the Current."
>
> **Fact:** Partially true, but dangerous. You need Voltage to *push* that Current through your skin. A 12V car battery can deliver hundreds of Amps (Huge Current), but you can touch it safely because 12V isn't enough "pressure" to push through your skin. You need **both**.

### Summary
*   **Voltage**: The Cause (Push).
*   **Current**: The Effect (Flow).
    `,
  },
  {
    slug: "what-is-resistance",
    title: "What is Resistance? The Traffic Jam",
    description: "Why doesn't electricity flow instantly? The physics of resistance and heat.",
    category: "Physics",
    publishedAt: "2023-10-05",
    imageUrl: "/images/resistance-traffic.png",
    content: `
## Fighting the Flow

Imagine you are driving a Ferrari (The Electron) on a wide, empty highway. You can go fast!
Now imagine that highway suddenly narrows down to one lane, and the road is full of potholes. You have to slow down.

**That is Resistance.**

In a wire, electrons don't fly freely. They crash into the atoms of the metal.
*   **Collision** = Friction.
*   **Friction** = Heat.
*   **Result** = Slower Flow (Less Current).

### Visualization: The Traffic Jam
![Resistance Traffic Analogy](/images/resistance-traffic.png)

*   **Highway Width** = Wire Thickness (Area). Wider road = Easier flow = Low Resistance.
*   **Highway Length** = Wire Length. Longer trip = More traffic = High Resistance.

### The Math of Construction
Resistance ($R$) is built into the object. It depends on 4 things:

$$ R = \\rho \\frac{L}{A} $$

Let's derive why:
1.  **Length ($L$)**: Twice the length means twice the obstacles. So $R \\propto L$.
2.  **Area ($A$)**: Twice the width means twice the room to move. So $R \\propto 1/A$ (Inversely proportional).
3.  **Rho ($\\rho$)**: The "stickiness" of the road. Copper is smooth (Low $\\rho$), Rubber is sticky (High $\\rho$).

### Why do we need it?
If Resistance limits flow, isn't it bad?
**No!** We use resistance to turn electricity into useful things.
*   **Light Bulbs**: The filament has high resistance $\\to$ gets hot $\\to$ glows.
*   **Heaters**: Resistance turns energy directly into heat.

### Common Misconceptions

> **Myth:** "Superconductors have zero resistance, so they create infinite energy."
>
> **Fact:** No. They just don't *waste* energy as heat. You still need to put energy in to get energy out.

### Summary
*   **Symbol**: $R$.
*   **Unit**: Ohms ($\\Omega$).
*   **Concept**: Electrical Friction.
    `,
  },
  {
    slug: "kmh-to-ms-conversion",
    title: "Converting km/h to m/s: The Magic 3.6",
    description: "Don't memorize the number. Understand where it comes from.",
    category: "Math",
    publishedAt: "2023-10-10",
    imageUrl: "/images/speed-conversion.png",
    content: `
## Why is this confusing?

In Physics class, you often get speed in **km/h** (like a car), but equations need **m/s** (meters per second).
You might hear "Divide by 3.6", but *why*?

Let's derive it from scratch so you never forget.

### The Setup
We start with **1 km/h**.
This means we travel **1 Kilometer** in **1 Hour**.

$$ \\text{Speed} = \\frac{1 \\text{ km}}{1 \\text{ hour}} $$

### Step 1: Fix the numerator (Distance)
We know $1 \\text{ km} = 1000 \\text{ meters}$.
So:
$$ \\frac{1000 \\text{ m}}{1 \\text{ hour}} $$

### Step 2: Fix the denominator (Time)
We know $1 \\text{ hour} = 60 \\text{ minutes}$.
And $1 \\text{ minute} = 60 \\text{ seconds}$.
So $1 \\text{ hour} = 60 \\times 60 = 3600 \\text{ seconds}$.

Put that in step 1:
$$ \\frac{1000 \\text{ m}}{3600 \\text{ s}} $$

### Step 3: Simplify
Now we just divide the numbers.
$$ \\frac{1000}{3600} = \\frac{10}{36} = \\frac{1}{3.6} $$

**Result:** To go from km/h to m/s, you are essentially multiplying by $1/3.6$, which is the same as **dividing by 3.6**.

![Speed Conversion Chart](/images/speed-conversion.png)

### Summary Rule
*   **Big Unit (km/h) $\\to$ Small Unit (m/s)**: Variable gets smaller. **Divide**.
*   **Small Unit (m/s) $\\to$ Big Unit (km/h)**: Variable gets bigger. **Multiply**.

### Common Misconceptions

> **Myth:** "There are 100 seconds in a minute."
>
> **Fact:** This is a classic exam panic mistake. Always use 60! $60 \\times 60 = 3600$.

### Practice
Try converting $72 \\text{ km/h}$.
$$ \\frac{72}{3.6} = 20 \\text{ m/s} $$
    `,
  },
  {
    slug: "absorption-spectra-missing-lines",
    title: "The Missing Colors: Absorption Spectra",
    description: "How we read the 'barcodes' of stars billions of miles away.",
    category: "Chemistry",
    publishedAt: "2023-10-12",
    imageUrl: "/images/absorption-spectra.png",
    content: `
## The Puzzle
If you shine pure white light through a prism, you get a perfect rainbow.
But if you look at sunlight through a high-tech prism, you spot something weird: **Tiny black lines**.
Specific colors are missing. Where did they go?

### The thief: Atoms
Light travels from the sun's hot core through its cooler outer atmosphere.
The atoms in that atmosphere (Hydrogen, Helium, etc.) are "hungry" for energy.

### The Ladder (Quantum Mechanics)
Imagine an electron orbiting an atom.
**Rule #1:** It cannot orbit "anywhere". It can only stand on specific rungs of a ladder (Energy Levels).
**Rule #2:** To climb up a rung, it needs **exact change**.

If the gap between Rung 1 and Rung 2 costs **2.5 Joules**, the electron needs a photon with **exactly** 2.5 Joules.
*   Photon A (2.4 Joules): Ignored. Passes through.
*   Photon B (2.6 Joules): Ignored. Passes through.
*   Photon C (2.5 Joules): **ABSORBED!**

The electron eats Photon C and jumps up.
Since Photon C is gone, that specific "color" disappears from the rainbow.

![Absorption Spectra Diagram](/images/absorption-spectra.png)

### The Fingerprint
Every element (Hydrogen, Carbon, Gold) has a unique ladder with different rung spacing.
This means Hydrogen eats specific colors. Helium eats different colors.

By looking at *which* lines are black, we can tell exactly what elements are in a star, even if it's across the galaxy.

### Common Misconceptions

> **Myth:** "The lines are black because the star is cold."
>
> **Fact:** No, the lines are black because that specific light was absorbed by atoms in the star's atmosphere before it reached us.

### Key Formula
$$ E = hf $$
(Energy of a photon = Planck's Constant $\\times$ Frequency)
    `,
  },
  {
    slug: "ac-vs-dc",
    title: "AC vs DC: The War of Currents",
    description: "Why does your wall outlet shake electrons back and forth?",
    category: "Engineering",
    publishedAt: "2023-10-15",
    imageUrl: "/images/ac-vs-dc.png",
    content: `
## The Battle
In the 1880s, Thomas Edison (Team DC) and Nikola Tesla (Team AC) had a massive feud.
*   **DC (Direct Current)**: Electrons flow in a straight line, like a river.
*   **AC (Alternating Current)**: Electrons wiggle back and forth, like a saw.

AC won the war for the Power Grid. But why?

![AC vs DC Waveforms](/images/ac-vs-dc.png)

### The Problem: Calculation
We need to send power from a plant to your house (100 miles away).
The wire has **Resistance ($R$)**.
Current ($I$) flowing through resistance creates heat (Loss).

$$ P_{loss} = I^2 R $$

Look at the $I^2$.
*   If current is 1 Amp, Loss is $1^2 = 1$ Unit.
*   If current is 10 Amps, Loss is $10^2 = 100$ Units!

> **Current is the enemy.** We need to lower Current to save energy.

### The Solution: High Voltage
We know power is: $P = V \\times I$.
To keep Power ($P$) high but Current ($I$) low, we must make Voltage ($V$) **super high**.

We need to step up the voltage to 400,000V for the trip, and step it down to 110V for your house.
**Transformers** can do this easily for AC. They *cannot* do it easily for DC (back in 1880).

That is why our grid is AC.

### The Comeback of DC
Today, DC is winning in your house.
*   LEDs? DC.
*   Laptops? DC.
*   Phones? DC.
Because microchips need a steady "river" of electrons, not a shaking saw. That's why every charger has a "brick" – it converts AC from the wall to DC for your device.

### Common Misconceptions

> **Myth:** "AC is faster than DC."
>
> **Fact:** Electricity travels at near light speed in both. AC simply changes direction, while DC goes straight.

### Summary
*   **AC**: Efficient for Transport (Grid).
*   **DC**: Efficient for Computing (Devices).
    `,
  },
  {
    slug: "what-is-emi",
    title: "EMI: The Invisible Pollution",
    description: "Why you have to turn on Airplane Mode.",
    category: "Engineering",
    publishedAt: "2023-10-18",
    imageUrl: "/images/emi-shielding.png",
    content: `
## Ghost in the Machine
Have you ever heard a buzzing sound in your speakers right before your phone rings?
That is **EMI** (Electromagnetic Interference).

Your phone sent a powerful radio signal to the cell tower. Your speaker wires acted like an antenna, "caught" that signal, and turned it into buzzing noise.

### The Science: Faraday's Law
Why did the wire catch the signal?
Physics tells us: **A changing Magnetic Field creates an Electric Current.**

$$ \\text{Change in B-Field} \\rightarrow \\text{Induced Current} $$

1.  Radio waves are changing magnetic fields.
2.  They pass through the wire.
3.  They force electrons in the wire to move (Current).
4.  This "ghost" current messes up the real signal.

### The Solution: The Faraday Cage
How do we stop it? We put the sensitive stuff in a metal box.

![EMI Shielding Cage](/images/emi-shielding.png)

When the radio waves hit the metal box, they induce a current **in the box's surface**. This current cancels out the wave. The inside of the box remains perfectly silent and safe.

This is why:
*   Microwaves have a metal mesh window (keeps waves in).
*   Elevators kill your cell signal (metal box keeps waves out).
*   Coaxial cables (TV cords) have a metal foil wrap.

### Common Misconceptions

> **Myth:** "Aluminum foil boosts your Wifi signal."
>
> **Fact:** Actually, metal **blocks** radio waves. If you put foil behind the router, it might *reflect* the signal directionally, but wrapping your antenna in foil will kill the signal dead.

### Summary
*   **Problem**: Invisible waves creating unwanted currents.
*   **Solution**: Metal Shielding.
    `,
  },
  {
    slug: "why-transformers",
    title: "Transformers: More Than Meets the Eye",
    description: "How a simple iron ring powers the entire modern world.",
    category: "Engineering",
    publishedAt: "2023-10-20",
    imageUrl: "/images/transformer-coil.png",
    content: `
## The Magic Machine
A transformer can turn 10,000 Volts into 10 Volts.
It has no moving parts. No gears. No motors. It just sits there and hums. How?

### The Anatomy
1.  **Iron Core**: A square ring of magnetic iron.
2.  **Primary Coil**: Wire wrapped around the left side.
3.  **Secondary Coil**: Wire wrapped around the right side.
**Crucially: The two wires NOT touch.** They are electrically isolated.

![Transformer Coil Diagram](/images/transformer-coil.png)

### The Process
1.  **AC IN**: Alternating current flows in the Primary Coil.
2.  **Magnetism**: This creates a *changing* magnetic field in the Iron Ring.
3.  **Induction**: The magnetic field travels around the ring to the Secondary Coil.
4.  **AC OUT**: The changing magnetic field pushes electrons in the Secondary Coil.

### The Math: It's a Ratio
The voltage change depends purely on the number of wire loops (Turns, $N$).

$$ \\frac{V_{out}}{V_{in}} = \\frac{N_{out}}{N_{in}} $$

**Example:**
*   Primary ($N_{in}$): 1000 turns.
*   Secondary ($N_{out}$): 100 turns.
*   Ratio is 10:1.
*   If you put **100V** in, you get **10V** out.

> You just made a "Step-Down" transformer (like your phone charger).
> Reverse the coils, and you get a "Step-Up" transformer (used at power plants).

### Common Misconceptions

> **Myth:** "Transformers create energy."
>
> **Fact:** Impossible. Energy is conserved. If Voltage goes **DOWN**, Current goes **UP**.
>
> $P_{in} = P_{out}$
>
> $100V \\times 1A = 10V \\times 10A$ (Both are 100 Watts).

### Summary
Transformers trade Voltage for Current using magnetism.
    `,
  },
  {
    slug: "what-is-frequency",
    title: "What is Frequency? The Rhythm of Physics",
    description: "From the beating of your heart to the color of the sky.",
    category: "Physics",
    publishedAt: "2023-10-22",
    imageUrl: "/images/frequency-waves.png",
    content: `
## It's All Waves
Sound is a wave. Light is a wave. Radio is a wave.
The only difference between a deep bass note and a high squeak is **Frequency**.

**Frequency ($f$)** is: How many times does the wave wiggle per second?

### The Unit: Hertz
Named after Heinrich Hertz.
*   **1 Hz**: One wiggle per second.
*   **1 kHz**: 1,000 wiggles.
*   **1 MHz**: 1,000,000 wiggles (1 Million).

### Visualizing it
![Frequency Waves Diagram](/images/frequency-waves.png)

*   **Low Frequency**: Lazy waves. Spread out. (Red light, Deep Voice).
*   **High Frequency**: Hyperactive waves. Packed tight. (Blue light, Whistle).

### The Math: Speed, Time, and Distance
Frequency is tied to Wavelength ($\\lambda$, the length of one wave).
Imagine a train (the wave) moving at speed $v$.
If the cars are short (small wavelength), many pass you per second (high frequency).

$$ v = f \\times \\lambda $$

**Example: Light**
Light travels at $c = 300,000,000$ m/s.
If you have a Red light wave ($\\lambda = 700$ nm), what is $f$?
$$ f = \\frac{c}{\\lambda} = \\approx 430 \\text{ Trillion Hz} $$
That's how fast the electric field wiggles to make the color Red!

### Common Misconceptions

> **Myth:** "Radio waves are different stuff than Light."
>
> **Fact:** No. They are both Electromagnetic Radiation. Radio is just a "color" of light that our eyes can't see because the frequency is too low.

### Summary
*   Frequency = Pitch (Sound) or Color (Light).
*   Higher Frequency = Higher Energy.
    `,
  },
  {
    slug: "series-vs-parallel",
    title: "Series vs Parallel: How to Wire",
    description: "Why your house lights don't all go out when one bulb blows.",
    category: "Engineering",
    publishedAt: "2023-10-25",
    imageUrl: "/images/series-parallel.png",
    content: `
## The Holiday Light Disaster
In the old days, if one Christmas light broke, the whole string went dark. You had to test every single bulb to find the bad one.
This was a **Series** circuit.
Today, if one breaks, the rest stay on. This is a **Parallel** circuit.

### Series: The Single File Line
Imagine a single lane road.
*   The current must flow through Bulb 1, then Bulb 2, then Bulb 3.
*   **Obstacles add up**: $R_{total} = R_1 + R_2 + R_3$.
*   **Weakness**: If the road is blocked at Bulb 1, traffic stops everywhere.
*   **Effect**: Bulbs share the voltage. 3 bulbs on a 9V battery get 3V each (Dim).

### Parallel: The Multi-Lane Highway
Imagine a highway splits into 3 lanes.
*   The current splits. Some goes to Bulb 1, some to Bulb 2.
*   **Independence**: If Lane 1 is blocked, traffic still flows in Lane 2 and 3.
*   **Effect**: Each bulb gets the full 9V (Bright).

![Series vs Parallel Diagram](/images/series-parallel.png)

### The Math of Parallel Resistance
This surprises people. Adding more resistors in parallel makes the total resistance **LOWER**.
$$ \\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} $$

> **Logic by Analogy:** opening a second checkout lane at the supermarket makes the line move *faster*, even if the second cashier is slow. More paths = Easier flow.

### Common Misconceptions

> **Myth:** "Batteries in parallel gives more voltage."
>
> **Fact:** No.
> *   **Series Batteries**: Voltages add up ($1.5V + 1.5V = 3V$). Use for power.
> *   **Parallel Batteries**: Voltage stays $1.5V$, but it lasts twice as long. Use for endurance.

### Summary
*   **House Wiring**: Always Parallel.
*   **Flashlights**: Batteries often in Series.
    `,
  },
];
