import { BlogPost } from "../blogs";

export const BLOGS_PART_17: BlogPost[] = [
    {
        slug: "how-refrigerators-work-phase-change",
        title: " The Heat Pump: How Refrigerators Work",
        description: "Cold does not exist. It is just the absence of heat. The fridge doesn't make cold; it moves heat.",
        category: "Physics",
        publishedAt: "2024-02-26",
        imageUrl: "/images/fridge-cycle.png",
        tags: ["Physics", "Household", "Thermodynamics"],
        content: `
## Construction: The 4 Parts
It is a closed loop with four specific zones:
1.  **Compressor:** The heart. It pumps the blood (refrigerant).
2.  **Condenser:** The hot coils on the back.
3.  **Expansion Valve:** The tiny nozzle that creates the cold.
4.  **Evaporator:** The cold coils inside the box.

## The Law of Evaporation
Lick your finger and blow on it. It feels cold.
Why?
Because when a liquid turns into a gas (Evaporation), it **steals heat** from its surroundings to break the molecular bonds.
A refrigerator is just a machine that forces a liquid to evaporate inside the box and condense outside the box.

### The Cycle
1.  **Inside (The Evaporator):** A special fluid (Refrigerant) enters a low-pressure coil. It boils instantly at -26°C. As it boils, it sucks the heat out of your milk/cheese.
2.  **The Compressor:** The pump squeezes the gas. Squeezing gas makes it **Hot**.
3.  **Outside (The Condenser):** The hot gas runs through the coils on the back of the fridge. Since it is hotter than the kitchen air, it dumps its heat into the room. It turns back into a liquid.
4.  **The Expansion Valve:** The high-pressure liquid hits a tiny nozzle. It sprays out into the low-pressure zone and boils again. Detailed Loop.

> **Mental Model: The Sponge**
> Imagine a sponge.
> 1.  **Inside:** You let the sponge expand (absorb heat).
> 2.  **Move Outside:** You squeeze the sponge (dump heat).
> 3.  **Repeat.**
> **One-Minute Summary**
> We manipulate the boiling point of a refrigerant by changing its pressure. We let it boil inside the fridge (absorbing heat) and compress it outside the fridge (releasing heat).
        `,
    },
    {
        slug: "how-dishwashers-work-biological",
        title: "The Hot Box: How Dishwashers Work",
        description: "It isn't a washing machine for plates. It is a biological sterilizer.",
        category: "Technology",
        publishedAt: "2024-02-27",
        imageUrl: "/images/dishwasher-jet.png",
        tags: ["Technology", "Household", "Chemistry"],
        content: `
## Construction: The Robot Maid
It is simpler than you think:
1.  **Water Intel Valve:** Fills the bottom basin.
2.  **Circulation Pump:** An electric motor that forces water up the tubes.
3.  **Spray Arms:** Spinning propellers powered by water pressure (like a lawn sprinkler).
4.  **Heating Element:** A metal ring like an electric kettle.

## It Doesn't Fill Up
People think a dishwasher fills with water like a bathtub.
If it did, it would use 50 gallons.
It actually uses only 3 gallons.
It recycles the same small bucket of water hundreds of times, filtering it and spraying it again.

### The Enzyme Detergent
Soap is not enough. Old lasagna is tough.
Dishwasher detergent contains **Enzymes** (Proteases and Amylases).
*   **Protease:** Eats proteins (Egg, Meat).
*   **Amylase:** Eats carbs (Pasta, Potatoes).
These enzymes are biological robots. They literally digest the food off the plate.
**Misconception:** Rinsing your plates helps.
**Truth:** Modern detergents *need* dirt to activate. If the plates are too clean, the enzymes attack the glass surface instead, causing "Cloudy Glass."

### The Heater
The water from your tap (120°F) isn't hot enough.
The dishwasher has its own heating element to boost it to **150°F+ (Sanitize Mode)**.
This heat melts fat and kills bacteria.

> **One-Minute Summary**
> It sprays a small amount of super-heated, enzyme-rich water at high velocity. It relies on chemical digestion (enzymes) rather than just mechanical scrubbing.
        `,
    },
    {
        slug: "how-toasters-work-bimetallic",
        title: "The Bread Timer: How Toasters Work",
        description: "How does it know the toast is brown? It doesn't. It measures the heat of the room.",
        category: "Engineering",
        publishedAt: "2024-02-28",
        imageUrl: "/images/bimetallic-strip.png",
        tags: ["Engineering", "Household", "Physics"],
        content: `
## Construction: The Hot Box
A toaster has three main systems:
1.  **The Element:** High-resistance wire (Nichrome).
2.  **The Tray:** A spring-loaded elevator.
3.  **The Latch:** An electromagnet or hook that holds the tray down.

## The Nichrome Wire
Why don't the wires melt?
Copper melts at 1085°C. But copper *doesn't glow* easily; it just conducts.
We use **Nichrome** (Nickel + Chromium).
*   It has **High Resistance** (It fights electricity -> creates heat).
*   It creates a layer of Chromium Oxide when heated, which prevents it from burning out (Oxidation).

### The Pop Mechanism (Bi-Metallic Strip)
Cheap toasters use a simple timer chip.
But classic/good toasters use a **Bi-Metallic Strip**.
1.  **The Strip:** Two metals (Brass and Steel) fused together.
2.  **The Heat:** Brass expands faster than Steel.
3.  **The Bend:** As the toaster gets hot, the strip *curls* because one side is growing faster than the other.
4.  **The Trigger:** When it curls enough, it hits a physical switch. **POP.**
This is better than a timer because if the toaster is already hot (Round 2 of toast), the strip starts pre-curled, so it pops sooner. It prevents burning.

> **One-Minute Summary**
> Electricity forces its way through a resistant Nichrome wire, creating infrared radiation. A bimetallic thermostat bends as it heats up, mechanically releasing the spring-loaded tray when the temperature is right.
        `,
    },
    {
        slug: "how-co-detectors-work-fuel-cell",
        title: "The Silent Killer: How CO Detectors Work",
        description: "Carbon Monoxide is invisible and odorless. How a chemical battery saves your life.",
        category: "Safety",
        publishedAt: "2024-02-29",
        imageUrl: "/images/co-detector-sensor.png",
        tags: ["Safety", "Chemistry", "Household"],
        content: `
## Construction: The Sniffer
Inside the plastic shell is:
1.  **Check Cell:** The chemical sensor (Fuel Cell).
2.  **Piezo Siren:** The 85-decibel screamer.
3.  **Microcontroller:** Counts the PPM over time.

## The Hemoglobin Hijack
Carbon Monoxide (CO) is dangerous because it loves your blood more than Oxygen does.
It binds to hemoglobin 200x tighter than oxygen. It refuses to let go.
You suffocate while breathing fresh air.

### The Electrochemical Sensor
The detector is actually a mini **Fuel Cell**.
1.  **Electrode A:** Platinum.
2.  **Electrode B:** Lead/Acid.
3.  **The Fuel:** Carbon Monoxide.
When CO enters the chamber, it reacts with the Platinum electrode.
$CO + H_2O \rightarrow CO_2 + 2H+ + 2e-$
This creates an **Electric Current**.
The more CO, the stronger the current.
If the current passes a threshold (e.g., 50ppm for 60 minutes), the alarm sounds.

### Why they expire (7 Years)
The sensor is a chemical reaction. It gets "used up" or contaminated by dust/cleaners over time.
After 7-10 years, the chemistry is dead. The alarm might beep, but it won't sense the gas.

> **One-Minute Summary**
> The device uses Carbon Monoxide as a "fuel" to power a tiny battery. The presence of the gas generates an electric current that triggers the alarm.
        `,
    },
    {
        slug: "how-thermostats-work-mercury",
        title: "The Tilt Switch: How Thermostats Work",
        description: "Old school automation. A drop of liquid metal that decides when the furnace runs.",
        category: "Engineering",
        publishedAt: "2024-03-01",
        imageUrl: "/images/mercury-switch.png",
        tags: ["Engineering", "Physics", "Control"],
        content: `
## Construction: The Analog Brain
It relies on mechanical physics, not silicon chips:
1.  **Bimetallic Strip:** A thermometer made of two different metals.
2.  **Mercury Switch:** A glass ampoule with liquid metal.
3.  **Anticipator:** A tiny heater that tricks the thermostat into turning off early to prevent overheating.

## The Coil
Open an old Honeywell round thermostat.
You will see a coiled spring.
This is a **Bi-Metallic Coil** (just like the Toaster).
*   **Cold:** The coil winds up tight.
*   **Hot:** The coil unwinds loose.

### The Liquid Metal Switch
 Attached to the coil is a small glass vial.
Inside the vial is a blob of **Mercury** (Liquid Metal).
Three wires enter the glass.
1.  **Cold:** The coil tilts the vial *Left*. The mercury slides Left. It touches the "Heater" wire + "Power" wire. **Furnace ON**.
2.  **Warm:** The coil unwinds and tilts the vial *Right*. The mercury slides Right. It breaks the connection. **Furnace OFF**.
3.  **Hysteresis:** Mercury has surface tension (it's sticky). It doesn't slide instantly. It waits until the tilt is significant. This prevents the heater from flickering On/Off every second (Short Cycling).

> **One-Minute Summary**
> A temperature-sensitive spring tilts a glass tube containing a blob of mercury. The mercury slides back and forth, physically completing the electrical circuit to headers or air conditioners.
        `,
    }
];
