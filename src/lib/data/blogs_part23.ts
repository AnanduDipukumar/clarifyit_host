import { BlogPost } from "../blogs";

export const BLOGS_PART_23: BlogPost[] = [
    {
        slug: "how-solar-panels-work-photovoltaic",
        title: "The Electron Pump: How Solar Panels Work",
        description: "It has no moving parts. The sunlight itself kicks electrons across a canyon.",
        category: "Energy",
        publishedAt: "2024-03-27",
        imageUrl: "/images/solar-panel-silicon.png",
        tags: ["Energy", "Physics", "Semiconductors"],
        content: `
## The Band Gap
Electricity is just moving electrons.
In Silicon, electrons are lazy. They are stuck in the "Valence Band" (The couch).
To make electricity, we need to kick them up to the "Conduction Band" (The highway).
The energy required to do this kick is called the **Band Gap**.
Sunlight (Photons) carries energy.

## Construction: The Sandwich
A solar panel is a laminate:
1.  **Glass:** Tempered to survive hail.
2.  **EVA Film:** Plastic glue that melts to seal the cells.
3.  **Cell Matrix:** The 60 or 72 Blue Silicon wafers wired in series.
4.  **Backsheet:** A white polymer layer that protects from moisture.
5.  **Frame:** Aluminum rim.

### The P-N Junction
We create a one-way street using two types of Silicon (Doping):
1.  **N-Type:** Has extra electrons (Negative).
2.  **P-Type:** Has holes (Positive).
3.  **The Junction:** Where they meet, an electric field forms.
**The Event:**
A photon hits the silicon. BAM. It knocks an electron loose.
Because of the electric field, the electron is forced to move in **one direction** only.
It flows out the wire, lights your bulb, and returns to the other side.

> **One-Minute Summary**
> Photons from the sun strike silicon atoms, dislodging electrons. An internal electric field forces these loose electrons to flow in a single direction, creating a direct current (DC).
        `,
    },
    {
        slug: "how-wind-turbines-work-lift",
        title: "The Giant Wing: How Wind Turbines Work",
        description: "It doesn't spin because the wind pushes it. It spins because the wind sucks it.",
        category: "Energy",
        publishedAt: "2024-03-28",
        imageUrl: "/images/wind-turbine-blade.png",
        tags: ["Energy", "Physics", "Aerodynamics"],
        content: `
## Construction: The Nacelle
The box at the top of the tower contains:
1.  **Rotor:** The hub holding the 3 blades.
2.  **Gearbox:** Stepping up RPM from 15 to 1,500.
3.  **Generator:** The magnet that makes power.
4.  **Yaw Motor:** Turns the entire head to face the wind.

## Drag vs Lift
Old Dutch windmills used **Drag**. The wind pushed the cloth sails. Max efficiency: 15%.
Modern turbines use **Lift** (like a plane).
The blade is an airfoil.
The wind moves faster over the curved back of the blade.
*   **Bernoulli's Principle:** Fast air = Low Pressure.
*   **Result:** The low pressure sucks the blade forward.
This allows the tip of the blade to move at 180 mph even in a 15 mph wind. (10x faster than the wind driving it).

### The Gearbox
The blades turn slowly (15 RPM).
The generator needs to turn fast (1,500 RPM).
Inside the box is a massive transmission that multiplies the speed by 100x.
**Direct Drive:** Newer turbines use massive ring generators to eliminate the gearbox (which is the part that breaks most often).

> **One-Minute Summary**
> The blades are not paddles; they are wings. The wind creates a vacuum on the forward side of the blade, pulling it around. This slow rotation is geared up to spin a magnetic generator.
        `,
    },
    {
        slug: "how-geothermal-works-radioactive",
        title: "The Earth Boiler: How Geothermal Works",
        description: "The floor is lava. Literally. Why the Earth's core is stays hot.",
        category: "Energy",
        publishedAt: "2024-03-29",
        imageUrl: "/images/geothermal-plant.png",
        tags: ["Energy", "Geology", "Physics"],
        content: `
## Why is the Earth hot?
1.  **Leftover Heat:** From when the planet formed (collisions) 4.5 billion years ago.
2.  **Radioactive Decay:** Uranium and Thorium inside the mantle are constantly decaying. This is a slow nuclear reactor that keeps the core at 6,000°C.

## Construction: The Loop (Flash Steam)
A typical plant consists of:
1.  **Production Well:** The "Straw" sucking up hot water.
2.  **Flash Tank:** Where pressure drops and water explodes into steam.
3.  **Turbine:** Captured steam spins the blades.
4.  **Injection Well:** Putting the cold water back into the ground to reheat.

### The Steam Cycle
We drill two holes 3 miles deep.
1.  **Injection Well:** We pump cold water down.
2.  **The Rock:** The hot granite boils the water instantly.
3.  **Production Well:** High-pressure steam shoots up.
4.  **Turbine:** The steam spins the generator.

### The Fracking Risk (EGS)
Traditional Geothermal only works in Iceland or California (where volcanos are close).
**Enhanced Geothermal Systems (EGS):** We drill anywhere, fracture the hot dry rock (like fracking for oil), and pump water.
**Risk:** Lubricating fault lines causes earthquakes (Induced Seismicity).

> **One-Minute Summary**
> We use the Earth's natural nuclear decay heat to boil water. By circulating water through deep, hot rocks, we bring steam to the surface to drive turbines.
        `,
    },
    {
        slug: "how-lithium-batteries-work-intercalation",
        title: "The Ion Shuttle: How Lithium Batteries Work",
        description: "It doesn't store electricity. It stores Lithium ions in a graphite hotel.",
        category: "Energy",
        publishedAt: "2024-03-30",
        imageUrl: "/images/lithium-ion-movement.png",
        tags: ["Energy", "Chemistry", "Tech"],
        content: `
## Construction: The Jelly Roll
Inside the cylinder (18650 cell), it's a rolled-up carpet:
1.  **Anode Foil:** Copper coated in Graphite.
2.  **Separator:** A porous plastic sheet (The Border Control).
3.  **Cathode Foil:** Aluminum coated in Lithium Cobalt Oxide.
4.  **Electrolyte:** The liquid solvent.

## The Rocking Chair
A battery has two sides:
1.  **Anode:** Graphite (Sheets of Carbon).
2.  **Cathode:** Cobalt Oxide.
3.  **The Ion:** Lithium ($Li+$).
Lithium is tiny. It fits *between* the layers of graphite (Intercalation).
*   **Charging:** We force the Lithium ions to leave the comfortable Cathode and squeeze into the crowding Graphite Anode (High Energy State).
*   **Discharging:** The Lithium rushes back home to the Cathode.
As they migrate through the electrolyte, they force electrons to travel through the outside wire.

### The Dendrite Danger
If you charge too fast, the Lithium doesn't have time to intercalate.
It plates onto the surface as metallic spikes (**Dendrites**).
These spikes grow until they poke through the separator and touch the other side.
**Short Circuit.** Thermal Runaway. Fire.

> **One-Minute Summary**
> We force Lithium ions to migrate from a stable crystal structure to an unstable one (charging). When we release them, they migrate back, creating an electrical current in the process.
        `,
    },
    {
        slug: "how-tidal-power-works-gravity",
        title: "The Lunar Engine: How Tidal Power Works",
        description: "The Moon pulls the ocean 10 meters up. We put a turbine in the way.",
        category: "Energy",
        publishedAt: "2024-03-31",
        imageUrl: "/images/tidal-turbine.png",
        tags: ["Energy", "Physics", "Space"],
        content: `
## The Predictable Wind
Solar stops at night. Wind stops when calm.
Tides **never stop**.
We know exactly when the tide will be 100 years from now.
It is the most reliable renewable energy.

## Construction: The Underwater Fan
A tidal stream turbine looks like a windmill, but tougher:
1.  **Rotor Blades:** Short and thick to survive the 800x density of water.
2.  **Nacelle:** Sealed waterproof generator.
3.  **Gravity Base:** A massive concrete block sitting on the seabed (no drilling needed).

### The Barrage vs The Stream
1.  **Barrage (La Rance, France):** Build a dam across an estuary.
    *   Tide comes in -> Gate opens.
    *   Tide goes out -> Gate closes. Hold water back.
    *   Release water through turbines (like a Hydro Dam).
2.  **Tidal Stream (Scotland):** Put wind turbines *underwater*.
    *   Water is 800x denser than air.
    *   A 1 mph current has the same energy as a 90 mph hurricane.
    *   The blades can be small and spin slowly, yet generate massive power.

> **One-Minute Summary**
> Using the gravitational pull of the Moon, we capture the kinetic energy of moving oceans. Since water is incredibly dense, slow-moving tidal currents contain immense amounts of harvestable energy.
        `,
    }
];
