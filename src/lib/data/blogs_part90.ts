import { BlogPost } from "../blogs";

export const BLOGS_PART_90: BlogPost[] = [
    {
        slug: "solid-state-battery-toyota",
        title: "The Holy Grail: Solid State Batteries",
        description: "Lithium-ion batteries catch fire. They take 45 mins to charge. Solid State takes 10 mins and never burns. Why can't we buy one yet?",
        category: "Energy",
        publishedAt: "2025-05-26",
        imageUrl: "/images/solid-state-battery.png",
        tags: ["Energy", "Tech", "Future", "Deep Dive"],
        content: `
## Introduction: The Liquid Problem
Current batteries contain a Liquid Electrolyte (organic solvent).
It allows Lithium ions to swim from Anode to Cathode.
**Problem 1:** It is flammable. (Tesla fires).
**Problem 2:** Dendrites. Sharp lithium crystals grow in the liquid and puncture the separator, causing a short circuit.
**Solution:** Solid Electrolyte. (Ceramic or Glass).

## 1. The Promise
A solid battery has:
*   **Safety:** You can drive a nail through it. No explosion.
*   **Density:** 2x the range of current cars (1000km).
*   **Speed:** Charge 0-80% in 10 minutes (ions move faster in the specific solid lattice than in liquid).
Toyota has 1000 patents on this. They claim a car launch in 2027.

## 2. The Hurdle (Expansion)
When you charge a battery, the Anode swells.
In a liquid battery, the liquid just moves out of the way. Easy.
In a solid battery, the solid electrolyte cracks.
**Contact Loss:** Once it cracks, the wire is broken. The battery is dead.
We need a material that is solid like rock but stretchy like rubber.
**QuantumScape:** They use a proprietary flexible ceramic separator.

## 3. Lithium Metal Anode
Current batteries use Graphite (Carbon) to hold the Lithium.
It's heavy.
Solid State allows us to use **Pure Lithium Metal** as the anode.
This is the ultimate density.
The "Anode-Free" battery.
It is the difference between carrying water in a sponge (Graphite) vs just carrying a block of ice (Lithium).

### Fact Box
*   **The Price:** Currently, solid state costs $800/kWh. We need it to be $80/kWh to compete with gas cars. Manufacturing thin ceramic sheets without cracks is hard.
        `,
    },
    {
        slug: "nuclear-fusion-iter-tokamak",
        title: "Star in a Jar: Nuclear Fusion",
        description: "Fission splits atoms (messy). Fusion mashes them together (clean). We are building the biggest machine in history (ITER) to prove it works.",
        category: "Energy",
        publishedAt: "2025-05-27",
        imageUrl: "/images/iter-tokamak.png",
        tags: ["Energy", "Physics", "Future", "Deep Dive"],
        content: `
## Introduction: E=mc2
The Sun fuses Hydrogen into Helium.
The mass of Helium is slightly less than the Hydrogen.
The missing mass becomes Energy.
Lots of it.
If we can do this on Earth, we have infinite fuel (Seawater) and zero Carbon.

## 1. The Tokamak (Donut)
You need to heat gas to **150 Million Degrees** (10x hotter than the Sun).
No metal can hold it.
So we use **Magnets**.
The plasma floats in a magnetic cage shaped like a donut.
**ITER (France):**
A $25 Billion international project.
Goal: Put 50 MW in, get 500 MW out ($Q=10$).
It is 10 years late and over budget. But it is nearly finished.

## 2. NIF (Lasers)
The other way.
Use 192 giant lasers.
Shoot a tiny pellet of Hydrogen (size of a peppercorn).
**Implosion.**
The pressure fuses the atoms.
In 2022, NIF achieved **Ignition** (Energy Out > Laser Energy In).
But only for a billionth of a second.
And the lasers need hours to cool down.
It is a science experiment, not a power plant.

## 3. Helion (The Startup)
Private companies are racing ITER.
Helion Energy uses "pulsed magnetic fusion".
They don't boil water (Steam Turbine).
They extract electricity *directly* from the magnetic field expansion.
Microsoft has already signed a contract to buy power from them in 2028.
High stakes.

### Fact Box
*   **Helium-3:** The moon is covered in Helium-3. It is the perfect fusion fuel (no radioactive neutrons). This is why China and the US want to build moon bases. Mining the moon for energy is the plot of the future.
        `,
    },
    {
        slug: "perovskite-solar-cells-efficiency",
        title: "The Solar Revolution: Perovskites",
        description: "Silicon solar panels are hitting their limit. A new crystal structure called Perovskite could be printed like newspaper and double the efficiency.",
        category: "Energy",
        publishedAt: "2025-05-28",
        imageUrl: "/images/perovskite-crystal.png",
        tags: ["Energy", "Materials", "Future", "Deep Dive"],
        content: `
## Introduction: The Shockley-Queisser Limit
Silicon can theoretically convert max 33% of sunlight to electricity.
We are currently at 26%. Ideally, we are stuck.
Enter **Perovskites**.
A family of crystals with a specific shape ($ABX_3$).
They are cheap and liquid-processable.

## 1. Tandem Cells
Silicon loves Red light.
Perovskite loves Blue light.
**Solution:** Stack them.
Put a Perovskite layer on top of a Silicon layer.
It catches the blue, lets the red pass through to the silicon.
**Efficiency:** 45% is theoretically possible.
This would change the economics of solar overnight.

## 2. Printable Solar
You don't need a cleanroom and a vacuum chamber.
You can dissolve Perovskite in a solvent and **Print it** like ink.
Imagine:
Solar windows (transparent).
Solar car paint.
Solar backpacks.
Flexible, lightweight, cheap.

## 3. The Catch (Lead and Rain)
Why aren't they here?
1.  **Durability:** Silicon lasts 25 years. Early Perovskites dissolved in rain in 2 days. We have improved them to months, but we need years.
2.  **Toxicity:** The most efficient recipe uses **Lead**. Putting lead on every roof in the world is an environmental risk if it leaks.

### Fact Box
*   **Space Solar:** Without an atmosphere, solar panels are 10x more effective. Perovskites are radiation-hard. We could launch them, fold them out, and beam the power down via microwaves (Japan is testing this).
        `,
    },
    {
        slug: "gravity-battery-energy-storage",
        title: "Dropping Concrete: Gravity Batteries",
        description: "We have too much solar power at noon. How do we store it for the night? Forget Lithium. Use Gravity.",
        category: "Energy",
        publishedAt: "2025-05-29",
        imageUrl: "/images/gravity-blocks.png",
        tags: ["Energy", "Physics", "Engineering", "Deep Dive"],
        content: `
## Introduction: Pumped Hydro
95% of the world's grid storage is currently **Pumped Hydro**.
When you have free power (Noon), pump water up a hill.
When you need power (Night), let it flow down through a turbine.
Problem: You need a mountain and a lake.

## 1. Energy Vault (The Tower)
Energy Vault builds a robotic crane tower.
** Charge:** The crane lifts 35-ton concrete blocks and stacks them high.
**Discharge:** The crane lowers the blocks. The motors spin backward (Generators).
Efficiency: 90%.
Cost: Cheap (Concrete + Steel).
No chemical degradation. No fire risk.

## 2. Advanced Rail Energy Storage (ARES)
Put a heavy train loaded with rocks on a hill.
Push it up (Charge).
Let it roll down (Discharge).
Regenerative braking generates the power.
We have millions of miles of unused track.

## 3. The Skepticism
Critics say: "Concrete cracks. Cranes break. Wind knocks towers over."
Lithium batteries are getting so cheap ($100/kWh) that these mechanical monsters might be obsolete before they are built.
But for **Long Duration Storage** (Weeks), Gravity wins. Batteries leak charge; a rock on a hill keeps its potential energy forever.

### Fact Box
*   **Compressed Air:** Another idea. Pump air into an underground cavern (old salt mine) until it hits 1000 psi. Release it to spin a turbine. It gets hot when compressed (Physics), so you have to store the heat too to stay efficient.
        `,
    },
    {
        slug: "small-modular-reactor-nuclear",
        title: "Nuclear Lego: Small Modular Reactors (SMR)",
        description: "Big Nuclear plants take 15 years to build and go over budget. SMRs are built in a factory and shipped on a truck.",
        category: "Energy",
        publishedAt: "2025-05-30",
        imageUrl: "/images/smr-reactor.png",
        tags: ["Energy", "Nuclear", "Future", "Deep Dive"],
        content: `
## Introduction: The Gigawatt Curse
Hinkley Point C (UK) costs £30 Billion. It is 10 years late.
Nuclear is dying because it is too hard to build.
Every plant is a unique, bespoke cathedral.
**SMR Idea:**
Treat reactors like iPhones.
Mass produce them in a factory. Identical. Standardized. 
Ship them to the site. Plug them in.

## 1. NuScale (The First)
NuScale Power Module.
20 meters tall. 77 Megawatts.
It sits in a pool of water.
**Passive Safety:**
If power fails (Fukushima scenario)...
You don't need pumps.
Convection circulates the water naturally.
It cools itself indefinitely.
It is "Walk-Away Safe".

## 2. Applications
Because they are small and safe, you can put them near cities.
Or replace old Coal boilers.
**Coal to Nuclear:**
Take an old coal plant. Keep the turbine and grid connection. Replace the coal furnace with an SMR.
Instant decarbonization of existing infrastructure.

## 3. The Economics
It relies on **Economies of Volume**.
The first one is expensive.
The 100th one is cheap.
We need an order book of hundreds to make the factory viable.
Current status: Utah (UAMPS) cancelled the first NuScale project due to rising costs.
It is a chicken and egg problem.

### Fact Box
*   **Nuclear Diamond Batteries:** Radioactive waste (Carbon-14) can be compressed into a diamond. The radiation generates a tiny trickle of electricity. It lasts 28,000 years. Useless for cars, but perfect for pacemakers or deep space sensors.
        `,
    },
];
