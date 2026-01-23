import { BlogPost } from "../blogs";

export const BLOGS_PART_4: BlogPost[] = [
{slug: "how-fire-extinguishers-work-oxygen-thief",
        title: "The Oxygen Thief: How Extinguishers Work",
        description: "Fire is a triangle. Remove one side, and it collapses.",
        category: "Safety",
        publishedAt: "2025-12-03",
        imageUrl: "/images/fire-triangle.png", // PROMPT: The Fire Triangle (Heat, Fuel, Oxygen). A Fire Extinguisher spraying a cloud of white powder (CO2/Chemical) that physically separates the "Oxygen" side from the other two. Label: "Suffocation". Clean style.
        tags: ["Safety", "Chemistry", "Home"],
        content: `
## The Triangle of Death
Fire needs three things to survive:
1.  **Fuel** (Wood, Gasoline).
2.  **Heat** (Spark).
3.  **Oxygen** (Air).

If you steal any ONE of these, the fire dies instantly.
Water removes **Heat**.
But water is heavy and ruins everything.
Fire extinguishers remove **Oxygen**.

> **Mental Model: The Heavy Blanket**
>
> Most red extinguishers contain **CO2** or **Dry Chemical Powder**.
> Both are heavier than air.
> When you spray the base of the fire, the gas settles on top of the flames like an invisible blanket.
> It separates the fuel from the air. The fire "chokes" to death in seconds.

### The "Pass" Technique
1.  **P**ull the pin.
2.  **A**im at the base (not the flames).
3.  **S**queeze the handle.
4.  **S**weep side to side.

### Why Not Water on Grease?
If you pour water on a burning frying pan, the water sinks to the bottom (density).
It instantly boils into steam (expanding 1,700x).
This explosion throws the burning oil into your face.
**Never use water on a kitchen fire.** Use a lid (suffocation) or a Class B extinguisher.

> **One-Minute Takeaway**
>
> **Halon Gas:** Data centers use Halon. It doesn't suffocate the fire; it chemically interrupts the chain reaction of combustion. It puts out the fire without harming a single microchip (or leaving a messy powder residue).
        `,},
{slug: "how-airbags-work-chemical-pillow",
        title: "The Magic Popcorn: How Airbags Work",
        description: "How to inflate a pillow in 30 milliseconds. (Hint: It involves rocket fuel).",
        category: "Technology",
        publishedAt: "2025-12-04",
        imageUrl: "/images/airbag-explosion.png", // PROMPT: Cross-section of a Steering Wheel. Inside: A tiny canister labeled "Sodium Azide (NaN3)". An electrical spark hits it. It turns into NITROGEN GAS. The bag expands to catch a dummy's head. Time counter: "0.03 Seconds". Clean style.
        tags: ["Technology", "Cars", "Chemistry", "Safety"],
        content: `
## The Speed Problem
A car crash happens in 50 milliseconds.
Blinking your eye takes 100 milliseconds.
You need a pillow that inflates **faster than a blink**.
Compressed air is too slow. A fan is too slow.

You need an **Explosion**.

> **Mental Model: The Solid Gas**
>
> Inside your steering wheel is a pellet of **Sodium Azide** ($NaN_3$).
> It is a solid rock.
> But if you heat it to 300°C, it instantly decomposes into **Nitrogen Gas**.
> A tiny handful of solid turns into 70 liters of gas in 0.03 seconds.
> It's not "inflating." It is a controlled bomb blast directed into a nylon bag.

### The Deflation
You don't want to hit a rock-hard balloon. That would break your nose.
You want to hit a *leaking* balloon.
Airbags have tiny holes in the back.
As your face hits the bag, the gas squeezes out.
This controlled deflation absorbs the energy of your head, slowing it down gently.

### Common Misconception
**"Airbags are soft."**
No. They come out at 200 mph. They smell like burnt chemical (gunpowder). They will friction-burn your arms. But they are softer than the windshield.

> **One-Minute Takeaway**
>
> **The Sensor:** The car doesn't just guess. It has an accelerometer (MEMS). It only fires if the deceleration is greater than 15Gs (equivalent to hitting a brick wall at 15mph). It ignores distinct bumps like potholes.
        `,},
{slug: "how-seatbelts-work-inertia-lock",
        title: "The Inertia Lock: How Seatbelts Work",
        description: "It's loose when you reach for the radio, but locks when you crash. How does it know?",
        category: "Technology",
        publishedAt: "2025-12-05",
        imageUrl: "/images/seatbelt-mechanism.png", // PROMPT: Close up of the Seatbelt Retractor mechanism. A toothed gear. A weighted pendulum hanging below it. NORMAL: Pendulum hangs straight, gear spins freely. CRASH: Pendulum swings forward, engaging a locking pawl into the gear teeth. Clean, mechanical style.
        tags: ["Technology", "Cars", "Physics", "Safety"],
        content: `
## The Clever Ratchet
You can pull the strap out slowly. But yank it fast, and it stops.
There is no computer. No electricity. It is pure mechanical physics.

> **Mental Model: The Centrifugal Clutch**
>
> Inside the spool, there is a weighted lever.
> 1.  **Slow Pull:** The spool rotates gently. The lever stays tucked in.
> 2.  **Fast Pull:** The centrifugal force flings the lever outward.
> 3.  **The Lock:** The lever catches on a metal tooth (Ratchet) and jams the spool.
>
> It works exactly like the "Spin Cycle" lock on a washing machine door.

### The Pretensioner (The Hidden Hero)
Modern cars have a second trick.
When the airbag sensor detects a crash, it fires a **Pyrotechnic Charge** (explosion) in the seatbelt pillar.
This explosion *pulls* the seatbelt tight, retracting 2 inches of slack instantly.
It pins you to the seat *before* your body starts moving forward.
This is why you often have bruises across your chest after a crash—the car literally tackled you to save your life.

> **One-Minute Takeaway**
>
> **3-Point Belt:** Invented by Volvo in 1959. Before that, cars only had lap belts (which snapped your spine in half). Volvo gave the patent away for free to every car company. It has saved over 1 million lives.
        `,},
{slug: "how-vending-machines-work-coin-judge",
        title: "The Coin Judge: How Vending Machines Work",
        description: "It knows a quarter from a slug. It knows a fake dollar. How?",
        category: "Technology",
        publishedAt: "2025-12-06",
        imageUrl: "/images/vending-coin-mech.png", // PROMPT: Cross-section of a Coin Mechanism. A coin rolling down a ramp. 1. LASER measures diameter. 2. MAGNET measures metal type (speed). 3. SCALE measures weight. A "Sort Gate" flips to accept or reject the coin based on the data. Clean style.
        tags: ["Technology", "Money", "Engineering"],
        content: `
## The Gauntlet
When you drop a coin, it runs a 3-step obstacle course.
It happens in 0.5 seconds.

> **Mental Model: The Magnetic Brake**
>
> 1.  **Size:** Optical sensors measure the width. (Too small? Dime. Too big? Quarter).
> 2.  **Weight:** It drops on a balance scale.
> 3.  **Material (The Trick):** The coin rolls past a strong magnet.
>
> Copper is not magnetic, but it IS conductive.
> As a copper/nickel coin rolls past a magnet, it creates "Eddy Currents" (resistance) that slow it down.
> *   **Real Quarter:** Slows down exactly 20%. Hits the correct target.
> *   **Fake Slug:** Doesn't slow down. Overshoots into the "Coin Return" slot.
> *   **Arcade Token:** Slows down too much. Falls short.

### The Dollar Bill Scanner
The bill acceptor takes a photo of the bill using **UV Light** and **Magnetic Ink Sensors**.
US Dollars are printed with magnetic ink.
The machine scans the "Iron Pattern" in George Washington's face.
If you photocopied a dollar, the ink wouldn't be magnetic. The machine spits it out.

> **One-Minute Takeaway**
>
> **Ridges:** Why do quarters have ridges? Originally, coins were made of real silver. People would shave the edges off ("Clipping") to steal free silver dust. The ridges were added to prove the coin hadn't been shaved. Vending machines check these too.
        `,},

{slug: "how-atms-work-money-vacuum",
        title: "The Money Vacuum: How ATMs Work",
        description: "It has $200,000 inside. How does it count bills without sticking?",
        category: "Technology",
        publishedAt: "2025-12-08",
        imageUrl: "/images/atm-mechanism.png", // PROMPT: Cross-section of an ATM Cash Dispenser. A stack of bills in a cassette. A "Rubber Friction Wheel" peeling one bill off. A "Thickness Sensor" measuring the bill. SCENARIO: Two bills stuck together. The sensor detects "Double Thickness" and diverts them to a "Reject Bin". Clean style.
        tags: ["Technology", "Money", "Security"],
        content: `
## The Friction Picker
Dispensing paper is hard. (Just ask any printer that jams).
Dispensing money is high-stakes. If you give two $20s instead of one, the bank loses millions.

> **Mental Model: The Reverse Printer**
>
> 1.  **The Peel:** A rubber wheel pulls one bill from the stack.
> 2.  **The Thickness Check (Crucial):** The bill passes through two rollers. A sensor measures the gap to within 0.01mm.
>     *   **One Bill:** Pass.
>     *   **Two Bills stuck together:** FAIL. Divert to "Reject Bin."
>     *   **Folded Bill:** FAIL. Reject.
> 3.  **The Belt:** High-speed belts shoot the bill to the slot at 10 mph.

### Security: The Dye Pack
If someone steals the whole ATM or rips it open with a truck?
Shock sensors trigger a **Dye Pack**.
It explodes red ink over all the money.
The ink is permanent, marks the bills as stolen, and often contains tear gas to blind the thief. The money becomes worthless paper.

> **One-Minute Takeaway**
>
> **The PIN:** Why 4 digits? The inventor's wife said she could only remember 4 numbers. That's it. That's the only reason it isn't 6.
        `,},
{slug: "how-automatic-doors-work-invisible-eye",
        title: "The Invisible Eye: How Automatic Doors Work",
        description: "They open before you touch them. Are they using lasers? Radar?",
        category: "Technology",
        publishedAt: "2025-12-09",
        imageUrl: "/images/automatic-door-sensor.png", // PROMPT: Illustration of a Sliding Door. Above it, a PIR Sensor box. It projects a "Zone" of infrared beams hitting the floor. A person walks into the zone, blocking/changing the heat signature. The sensor sends a signal to the motor. Label: "Passive Infrared". Clean style.
        tags: ["Technology", "Sensors", "Everyday"],
        content: `
## Seeing Heat and Motion

Most grocery store doors use **Passive Infrared (PIR)** or **Microwave Radar**.

> **Mental Model: The Thermal Camera**
>
> 1.  **PIR (Infrared):** The sensor looks at the floor. It sees a "Temperature Picture." The floor is cold.
> 2.  **The Change:** You (37°C / 98.6°F) walk into the picture.
> 3.  **The Trigger:** The sensor sees a sudden *change* in temperature pixels. It doesn't know you are a human. It just knows "Warm Blob Moving."
>
> **Microwave Radar:** It shoots radio waves down. If they bounce back at a different frequency (Doppler Effect), it knows something is moving toward the door.

### The Safety Beams
Why doesn't it close on your grandma?
There is a second sensor: A generic light beam across the threshold (at ankle height).
If you stand in the doorway, your leg blocks the beam.
**Blocked Beam = Do Not Close.**
This is an absolute safety override.

> **One-Minute Takeaway**
>
> **To Lock Pro Open:** If you wave your hand continuously in front of the sensor for 5+ seconds, some modern doors enter "Hold Open" mode for loading deliveries.
        `,},
{slug: "how-safes-work-steel-fortress",
        title: "The Steel Fortress: How Safes Work",
        description: "It's not just a thick box. It's a layer cake of concrete, glass, and traps.",
        category: "Security",
        publishedAt: "2025-12-10",
        imageUrl: "/images/safe-re-locker.png", // PROMPT: Cutaway of a Safe Door lock mechanism. A drill is trying to drill through the lock. It hits a "Glass Plate". The glass shatters. This releases spring-loaded "Re-Lockers" (bolts) that snap into place from random directions, permanently jamming the door shut. Label: "The Trap". Clean style.
        tags: ["Security", "Engineering", "Crime"],
        content: `
## It's Not About Being Indestructible
Nothing is indestructible. Give me enough time and C4, and I *will* open your safe.
A safe's job is to buy **Time**.
*   **TL-15 Rating:** Resists tools for 15 minutes.
*   **TL-30 Rating:** Resists tools for 30 minutes.

### The Glass Relocker (The Booby Trap)
Hollywood shows burglars drilling the lock.
In real high-end safes, there is a sheet of tempered glass *behind* the dial.
Values are low. The glass is under tension.
1.  **Drill hits glass.**
2.  **Smash:** The glass shatters explosively.
3.  **Trigger:** Pins properly held back by the glass are released.
4.  **Snap:** These spring-loaded bolts (Re-lockers) fire into the frame from random directions.
The safe is now permanently locked. Even the owner can't open it. You have to melt the whole door off.

> **Mental Model: The Concrete Sandwich**
>
> The walls aren't just steel. They are two sheets of steel filled with **High-Strength Concrete** mixed with ceramic nuggets.
> *   **Drill:** Hits ceramic (harder than drill bit). The bit dulls instantly.
> *   **Torch:** Concrete doesn't melt. It insulates the heat.
> **One-Minute Takeaway**
>
> **Heat Expansion:** Fire safes use a seal that expands 7 times its size when hot. It glues the door shut to prevent smoke/water from damaging the papers inside.
        `,},
{slug: "how-welding-works-metal-sewing",
        title: "The Metal Sewing: How Welding Works",
        description: "Glue doesn't work on steel. To join metal, you must melt it into a liquid river.",
        category: "Technology",
        publishedAt: "2025-12-11",
        imageUrl: "/images/welding-pool.png", // PROMPT: Extreme close up of MIG Welding. An electrode wire touching the metal surface. An "Electric Arc" (Plasma) melting both. A "Shielding Gas" cone protecting the liquid pool from the air. Clean, bright colors.
        tags: ["Technology", "Construction", "Physics"],
        content: `
## Melting Point: 2,500°F
You can't glue two cars together. The glue would peel.
 Welding isn't gluing. It is **Fusing**.
You are melting the two pieces so they mix together and become *one single piece of metal*.

> **Mental Model: The Lightning Pen**
>
> An Arc Welder is a machine that creates a controlled lightning bolt.
> 1.  **Short Circuit:** You touch the energized wire to the metal table.
> 2.  **The Arc:** Electricity jumps the gap. This plasma is 6,000°F (approaching the sun's surface temperature).
> 3.  **The Puddle:** The steel turns to liquid soup instantaneously.
> 4.  **The Filler:** You dip a filler rod into the soup to add volume.
> 5.  **Cooling:** You move the pen via. The soup freezes behind you. It is now solid steel.

### Improved: The Shielding Gas
Liquid steel hates Oxygen. If air touches the weld pool, it bubbles (porosity) and becomes weak.
So, the welding gun shoots a cloud of **Argon or CO2** gas around the spark.
This "Shield" pushes the air away and creates a pure, clean bubble for the metal to melt in.

> **One-Minute Takeaway**
>
> **Cold Welding:** In the vacuum of space, if two pieces of clean, bare metal touch, they fuse together *instantly* without heat. There is no air layer (oxidation) to separate the atoms. They think they are one piece. NASA has to coat satellites to prevent this.
        `,
    },


    {
        slug: "how-soldering-works-metal-glue",
        title: "The Metal Glue: How Soldering Works",
        description: "It looks like welding, but it isn't. You aren't melting the parts; you are melting the glue.",
        category: "Technology",
        publishedAt: "2025-12-12",
        imageUrl: "/images/soldering-iron.png", // PROMPT: Macro shot of a Soldering Iron tip touching a circuit board pad. A silver blob of molten solder is wetting the copper pad. Smoke rising. Label: "Wetting Action". Clean, detailed style.
        tags: ["Technology", "Electronics", "DIY"],
        content: `
## Welding vs Soldering
In welding, you melt the base metal.
In soldering, you **never** melt the base metal.
You melt a third metal (Soldering Wire) that acts as a metallic glue.

> **Mental Model: The Hot Wax Seal**
>
> Think of a circuit board as a letter you want to seal.
> 1.  **Heat:** You heat the paper (Copper Pad) and the envelope (Component Leg).
> 2.  **Flow:** You touch the wax (Solder) to the *hot parts*, not the iron.
> 3.  **Wetting:** If the parts are hot enough, the "wax" sucks into the fibers of the paper. This is called **Wetting**.
>
> If the parts are cold, the wax just sits on top like a ball. This is a **Cold Solder Joint**. It creates a bad electrical connection.

### The Flux (The Secret Sauce)
Metal oxides (rust) form instantly in air. Solder refuses to stick to oxide.
That's why solder wire has "Flux" inside it (like a jelly donut).
When you heat it, the acid flux flows out first, eats the rust, and cleans the metal for the solder to stick.

> **One-Minute Takeaway**
>
> **Lead-Free:** Old solder was 40% Lead. It melted perfectly at 183°C. Modern electronics use Lead-Free (Tin/Silver/Copper). It creates microscopic "Tin Whiskers" that can grow over years and short out satellites in space.
        `,},
{slug: "how-cnc-machines-work-robot-sculptor",
        title: "The Robot Sculptor: How CNC Machines Work",
        description: "A human hand shakes. A computer moves with mathematical perfection to 0.001mm.",
        category: "Technology",
        publishedAt: "2025-12-14",
        imageUrl: "/images/cnc-mill-diagram.png", // PROMPT: Diagram of a 3-Axis CNC Mill. X-Axis (Left/Right table). Y-Axis (In/Out table). Z-Axis (Up/Down spindle). A drill bit cutting a block of aluminum. Clean, engineering style.
        tags: ["Technology", "Engineering", "Manufacturing"],
        content: `
## Subtractive Manufacturing
3D Printing adds material (Additive).
CNC (Computer Numerical Control) removes material (Subtractive).
It starts with a solid block of aluminum and carves away everything that isn't the part.

> **Mental Model: The Etch-A-Sketch**
>
> Remember the Etch-A-Sketch toy?
> *   **Left Knob:** Moves X (Left/Right).
> *   **Right Knob:** Moves Y (Up/Down).
>
> A CNC machine is just a robot turning those knobs.
> But it spins them 10,000 times faster and more accurately than you ever could.
> And it adds a **Z-Axis** (Depth) to cut 3D shapes.

### G-Code (The Language)
The machine doesn't speak English. It speaks coordinates.
*   \`G01 X10 Y20\` means "Move to X=10, Y=20 in a straight line."
*   \`G02\` means "Move in a Clockwise Circle."
Every iPhone case, car engine, and rocket part was cut by a machine following millions of lines of these simple coordinates.

> **One-Minute Takeaway**
>
> **5-Axis:** Advanced machines can tilt the block while cutting it. They can carve a sphere inside a cube. They are so precise that high-end 5-Axis machines are technically classified as weapons by export control laws (because you can make nuclear centrifuge parts with them).
        `,},
{slug: "how-key-locks-work-pin-puzzle",
        title: "The Pin Puzzle: How Key Locks Work",
        description: "The serrated edge of your key isn't random. It is a code.",
        category: "Technology",
        publishedAt: "2025-12-15",
        imageUrl: "/images/lock-tumbler.png", // PROMPT: Cross-section of a Pin Tumbler Lock (side view). 5 Pins. Each pin is cut into two colors (Red Driver, Blue Key Pin). A Key is inserted. The jagged edge lifts the pins so the "Shear Line" aligns perfectly flat. The plug can turn. Clean style.
        tags: ["Technology", "Security", "Everday"],
        content: `
## The Shear Line
A lock is just a cylinder inside a hole.
It *should* turn.
But we drilled 5 holes through it and dropped metal pins inside to jam it.

> **Mental Model: The Split Pins**
>
> Each pin is actually cut in half.
> *   **Top Half (Driver):** Jams the cylinder rotation.
> *   **Bottom Half (Key Pin):** Sits on your key.
>
> Your key has ridges. High ridges lift the pins high. Low ridges lift them low.
> The goal is to lift all 5 pins to the exact height where the "cut" in the pin aligns perfectly with the edge of the cylinder.
> This creates a straight gap called the **Shear Line**.
> Once aligned, the cylinder turns freely.

### Why Bump Keys Work
If you hit a lock with a hammer, the energy transfers to the pins.
The Top Pins jump up (like billiard balls), momentarily leaving a gap at the shear line.
If you turn the key at that exact split-second, the lock opens.
This is "Lock Bumping."

> **One-Minute Takeaway**
>
> **Master Keys:** How does the janitor's key open your door AND the office door? The lock has *three* slices in the pin stack instead of two. It creates two valid "Shear Lines"—one for your specific key, and one for the master key shape.
        `,},
{slug: "how-combination-locks-work-wheel-alignment",
        title: "The Wheel Alignment: How Combination Locks Work",
        description: "Right 23, Left 10, Right 5. You are lining up gates in a maze.",
        category: "Technology",
        publishedAt: "2025-12-16",
        imageUrl: "/images/combo-lock-wheels.png", // PROMPT: Internal view of a Safe Dial lock. Three metal wheels stacked on an axle. Each wheel has a "Notch" (Gate). The wheels are misaligned. A "Fence" (Bar) is trying to drop into the notches. Clean, mechanical style.
        tags: ["Technology", "Security", "School"],
        content: `
## The Stack of Pancakes
Inside the lock are 3 metal wheels (Pancakes).
Each wheel has a notch cut into it (The Gate).
To open the lock, you must line up all 3 notches at the top (12 o'clock).
Then the shackle bar can drop into the notches and release.

> **Mental Model: The Pickup Truck**
>
> The wheels aren't connected directly.
> *   **Wheel 1** has a little tab sticking out.
> *   **Wheel 2** has a tab.
>
> When you spin the dial Right, Wheel 1 spins.
> Eventually, its tab hits Wheel 2's tab and picks it up. Now both spin.
> Then Wheel 2 hits Wheel 3.
>
> This is why you have to spin "3 times past zero" at the start—to ensure you have "picked up" all the wheels and reset the stack.
> *   **Turn Right:** Park Wheel 3.
> *   **Turn Left:** Park Wheel 2.
> *   **Turn Right:** Park Wheel 1.
> Open.
> **One-Minute Takeaway**
>
> **The Shim:** Cheap padlocks leave a gap between the shackle and the body. You can slide a thin piece of metal (aluminum can) down the gap to push the latch springtime aside, bypassing the wheels entirely.
        `,},
{slug: "how-thermostats-work-bimetallic-strip",
        title: "The Bimetallic Strip: How Old Thermostats Work",
        description: "Before computers, we used a dumb piece of metal that curled when it got hot.",
        category: "Technology",
        publishedAt: "2025-12-17",
        imageUrl: "/images/bimetallic-strip.png", // PROMPT: Diagram of a Bimetallic Strip coil (Thermostat Spring). Layer A: Brass (Expands fast). Layer B: Steel (Expands slow). Heat makes the strip CURL because one side grows longer than the other. The tip of the curl holds a "Mercury Switch". Clean style.
        tags: ["Technology", "Home", "Physics"],
        content: `
## The Metal Sandwich
Most metals expand when hot. But they expand at different rates.
*   **Brass:** Expands a lot.
*   **Steel:** Expands a little.

If you glue a strip of Brass to a strip of Steel, you get magic.
1.  **Heat it up:** The Brass wants to grow long. The Steel holds it back.
2.  **Result:** The strip **Curls** away from the brass side.

> **Mental Model: The Mercury Switch**
>
> Old Honeywell thermostats have this coiled metal strip holding a glass vial of **Mercury**.
> *   **Room gets Cold:** The strip uncurls. It tilts the vial. The mercury slides down and touches two wires. **CLICK.** Furnace ON.
> *   **Room gets Hot:** The strip curls up. It tilts the vial back. Mercury slides away. **CLICK.** Furnace OFF.
>
> It was a completely mechanical computer.
> **One-Minute Takeaway**
>
> **Digital Accel:** Modern digital thermostats artificially heat themselves up slightly to "anticipate" the room warming, preventing them from overshooting the target temperature.
        `,},
{slug: "how-dishwashers-work-hot-spray",
        title: "The Hot Spray: How Dishwashers Work",
        description: "It doesn't fill with water like a bathtub. It recycles a tiny bucket of water.",
        category: "Home",
        publishedAt: "2025-12-18",
        imageUrl: "/images/dishwasher-pump.png", // PROMPT: Ghost view of a Dishwasher. Bottom: A generic pump and heater. Spray Arms: Spinning jets of water hitting plates. Show the water falling down, being filtered, and sucked back into the pump to be reused. Cycle loop. Clean style.
        tags: ["Home", "Appliances", "Cleaning"],
        content: `
## It's a Shower, Not a Bath
If you filled a dishwasher to the top, it would use 50 gallons of water.
Instead, it uses only **3 gallons**.

> **Mental Model: The Recirculation Loop**
>
> 1.  **Fill:** It takes in a small puddle of water at the bottom.
> 2.  **Heat:** An electric element boils this puddle to 140°F (too hot for hands).
> 3.  **Spray:** A high-speed pump shoots this hot water through the spinning arms.
> 4.  **Filter:** The dirty water drips down, goes through a food-grinder filter, and drops back into the puddle.
> 5.  **Repeat:** It sprays the *same* water on your dishes for 20 minutes.
>
> Only at the very end does it drain the dirty water and rinse with fresh water.

### Why Detergent Matters
Dishwasher soap isn't creating suds. (Suds would ruin the pump).
It is an **Enzyme** and **Base**.
*   **Enzymes:** Eat proteins (egg/cheese).
*   **High pH:** Dissolves grease.
Since the water is reused, the soap stays concentrated the whole time.

> **One-Minute Takeaway**
>
> **The Pre-Rinse Mistake:** Don't rinse your dishes clean before loading. Modern soap *needs* dirt to cling to. If the plates are clean, the soap attacks the glass instead, causing cloudy "etching" over time.
        `,},
{slug: "how-washing-machines-work-soap-agitator",
        title: "The Soap Agitator: How Washing Machines Work",
        description: "Clothes provide the friction. The machine just provides the tumble.",
        category: "Home",
        publishedAt: "2025-12-19",
        imageUrl: "/images/washer-agitator.png", // PROMPT: Cross-section of a Top Load Washer. Central Agitator pillar. Show the "Auger" motion: Pushing clothes DOWN in the center, and them cycling UP the sides. Arrows showing the torus flow of fabric. Clean style.
        tags: ["Home", "Appliances", "Cleaning"],
        content: `
## Suspension of Dirt
Water alone can't remove grease. Oil and water don't mix.
Soap acts as a **Connector**.
One end of the soap molecule holds water. The other holds oil.
It pulls the oil off the shirt and suspends it in the water bubble.

> **Mental Model: The Mosh Pit**
>
> The Agitator (center pole) or Drum (front loader) isn't scrubbing the clothes.
> It is throwing the clothes against *each other*.
> **Fabric rubbing against Fabric** is what cleans the stains.
> The machine just keeps the mosh pit moving.

### The Spin Cycle (Centrifuge)
At the end, the drum spins at 1,200 RPM.
This creates 500Gs of force.
The water is ripped out of the fabric and flings through the holes in the drum, leaving the clothes just damp.

> **One-Minute Takeaway**
>
> **Cement Trucks:** A uneven load (wet towels on one side) creates a massive imbalance. The machine compensates by adding "Counterweight" concrete blocks attached to the drum. Yes, your washer is heavy because it has literal rocks inside it.
        `,},
{slug: "how-clothes-dryers-work-tumble-vent",
        title: "The Tumble Vent: How Dryers Work",
        description: "Heat + Airflow +  Tumbling. Why the lint trap is the most dangerous part of your house.",
        category: "Home",
        publishedAt: "2025-12-20",
        imageUrl: "/images/dryer-airflow.png", // PROMPT: Diagram of Dryer Airflow. Air intake -> Heating Coil (Red) -> Drum (Clothes tumbling) -> Lint Screen -> Exhaust Vent (Blue moist air). Clean arrows showing the path. Clean style.
        tags: ["Home", "Appliances", "Safety"],
        content: `
## The Evaporation Accelerator
Wet clothes will dry on a line in 5 hours.
A dryer does it in 45 minutes.
How?
It lowers the **Relative Humidity** to near zero.

1.  **Heat:** Raising air temperature allows it to hold more water vapor. 150°F air is "thirsty."
2.  **Tumble:** Fluffs the clothes to expose maximum surface area.
3.  **Vent:** (Crucial). It sucks the wet air OUT of the house.
If you blocked the vent, you would just be steaming your clothes in a sauna. They would never dry.

### The Lint Fire
As clothes tumble, tiny fibers break off.
This is **Lint**.
Lint is highly flammable cotton dust.
Your lint screen catches 90% of it. The other 10% builds up in your wall vent.
If the vent clogs, the heat backs up, ignites the lint, and burns your house down.
**Clean your vent hose once a year.**

> **One-Minute Takeaway**
>
> **Dryer Sheets:** They are coated in wax (Stefan). The heat melts the wax, coating your clothes to make them soft and conductive (anti-static). But this wax also coats the moisture sensor bars, eventually making the dryer "guess" wrong about when the clothes are dry.
        `,},
{slug: "how-chainsaws-work-centrifugal-clutch",
        title: "The Centrifugal Clutch: How Chainsaws Work",
        description: "The engine is running, but the chain is stopped. Safe. Rev it up, and the chain bites. Magic.",
        category: "Tools",
        publishedAt: "2025-12-21",
        imageUrl: "/images/centrifugal-clutch.png", // PROMPT: Exploded view of a Centrifugal Clutch. Inner hub (connected to engine) has spring-loaded "Shoes". IDLE: Shoes are pulled in by springs. REV: Shoes fly OUTWARDS due to spin force, grabbing the outer "Clutch Bell" (connected to chain). Clean style.
        tags: ["Tools", "Safety", "Mechanics"],
        content: `
## The Safety Idle
Imagine a car that started driving the moment you turned the key. Terrifying.
You need a "Neutral."
But chainsaws don't have a gear stick.
They use **RPM** to decide when to move.

> **Mental Model: The Weighted Arms**
>
> Inside the clutch drum are spring-loaded weights (Shoes).
> *   **Idle (Low Speed):** The springs are strong. They hold the weights in. The engine spins, but the chain drum sits still. Safe.
> *   **Full Throttle (High Speed):** The engine spins fast. Centrifugal force throws the weights **Outward**.
> *   **The Grip:** The weights smash against the inside of the drum wall. Friction locks them together. The drum spins. The chain cuts.

### The Chisel Chain
Look closely at a chainsaw tooth. It isn't a knife. It isn't a saw.
It is a **curved chisel** (Gouge).
It scoops wood out like an ice cream scoop.
The "Raker" (a small nub in front of the tooth) sets the depth.
*   **High Raker:** Thin shaving (Dust).
*   **Low Raker:** Deep scoop (Big Chips).

> **One-Minute Takeaway**
>
> **Kickback:** If the *tip* (upper quadrant) of the bar touches wood, the chain tries to "climb" the log. Since it can't climb, the physics throws the bar instantly **UP** towards your face. This is why you never cut with the tip. The "Chain Brake" is a lever in front of your hand designed to snap forward and stop the chain if this happens.
        `,},
{slug: "how-lawnmowers-work-spinning-knife",
        title: "The Spinning Knife: How Lawnmowers Work",
        description: "It doesn't scissor the grass. It creates a tornado that stands the grass up to be beheaded.",
        category: "Tools",
        publishedAt: "2025-12-22",
        imageUrl: "/images/lawnmower-blade-lift.png", // PROMPT: Side profile of a Lawnmower Blade. Show the "Wing" shape on the back of the blade. Airflow arrows curling UPWARDS. The "Vacuum" lifts the grass blade straight up just before the sharp edge hits it. Clean style.
        tags: ["Tools", "Gardening", "Physics"],
        content: `
## The Vacuum Blade
Cutting limp grass is hard. It just folds over.
You need to hold it straight.
But a mower has no hands.
So it uses **Wind**.

> **Mental Model: The Wing**
>
> Look at a mower blade. The back edge is curved up like a spoiler or a fan.
> As it spins at 3,000 RPM, it creates a massive **Updraft** (Vacuum).
> 1.  **Suck:** The vacuum pulls the limp grass blades to stand at attention.
> 2.  **Cut:** The sharp leading edge slices them at a consistent height.
> 3.  **Throw:** The airflow carries the clippings out the chute or into the bag.

### The Carburetor (Why it won't start)
Small engines use a Carburetor (a mechanical bowl) to mix gas and air.
Gasoline (Ethanol) turns into gum if left for 6 months.
The gum clogs the tiny "Jet" (a pinhole) in the carburetor.
No gas = No bang.
**The Fix:** Drain the gas in winter, or use Stabilizer.

> **One-Minute Takeaway**
>
> **Mulching:** A mulching blade has extra curves to circulate the grass *inside* the deck, cutting it 10 times into tiny confetti before dropping it. This feeds nitrogen back to the soil so you don't need fertilizer.
        `,},
{slug: "how-vacuum-cleaners-work-air-pump",
        title: "The Air Pump: How Vacuums Work",
        description: "Nature abhors a vacuum. We use that anger to clean rugs.",
        category: "Home",
        publishedAt: "2025-12-23",
        imageUrl: "/images/vacuum-cyclone.png", // PROMPT: Diagram of a Dyson-style Cyclone. Air entering a cone at high speed. Centrifugal force flinging "Dust Particles" to the outer wall and down into the bin. Clean air spiraling up the center. Clean, Scientific style.
        tags: ["Home", "Cleaning", "Physics"],
        content: `
## Creating Nothing
A vacuum cleaner doesn't "suck."
(Remember: Sucking doesn't exist).
The motor is just a high-speed fan that blows air **Out** the back.
This creates an area of **Low Pressure** (Partial Vacuum) inside the machine.

> **Mental Model: The Rusher**
>
> The air in the room is at High Pressure (14.7 psi).
> The air inside the vacuum is Low Pressure (12 psi).
> The Room Air acts like a crowd rushing into an empty stadium. It pushes its way into the nozzle to convert the low pressure.
> The dirt is just a passenger carried along by this rushing wind.

### The Beater Bar
Suction alone can't clean carpet. The dust clings to the fibers.
The **Beater Bar** (Brush Roll) beats the carpet like a rug beater.
*   **Vibrate:** It bounces the dirt particles into the air.
*   **Airflow:** The rushing air catches the floating dirt and carries it to the bag.

### Bag vs Cyclone (Dyson)
*   **Bag:** The air flows *through* the dirt. As the bag fills, the pores clog, and suction drops.
*   **Cyclone:** Using centrifugal force (spinning the air), the heavy dust is flung to the walls of the canister and falls down. The air stays clear. Suction never fades.

> **One-Minute Takeaway**
>
> **HEPA Filters:** Vacuum exhaust is normally full of microscopic dust. HEPA filters trap 99.97% of particles. If you don't change your filter, your vacuum is just a "Dust Cannon" shooting pollen back into the air you breathe.
        `,
    }
];
