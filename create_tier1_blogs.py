
import os

output_file = r"src\lib\data\blogs_part5.ts"
output_dir = os.path.dirname(output_file)

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Tier 1 Quality Content
# Standards:
# - Variable Intro Styles (Anecdote, History, Physics Question)
# - No "Have you ever wondered"
# - Deep technical keywords (Curie Point, Latent Heat, Planetary Gear)
# - Mandatory 3/5 sections (Mental Model, Misconception, etc)

blogs_content = """import { BlogPost } from "../blogs";

export const BLOGS_PART_5: BlogPost[] = [
    {
        slug: "how-hair-dryers-work-alci-plug",
        title: "The Death Plug: How Hair Dryers Work",
        description: "Why is there a giant block on the cord? It's a life-saving computer protecting you from the bathtub.",
        category: "Technology",
        publishedAt: "2025-12-24",
        imageUrl: "/images/hair-dryer-alci.png", // PROMPT: Close-up of an ALCI Plug (the big block on the cord). Cutaway view showing the "Solenoid" and the "Sense Wire". A lightning bolt is trying to travel up the cord, but the solenoid snaps the circuit open. Label: "0.025 Seconds to disconnect". Clean engineering style.
        tags: ["Technology", "Safety", "Electricity"],
        content: `
## The Bathtub Scenario
In the 1980s, dropping a hair dryer in the bathtub was a common movie trope for murder.
Today, it is almost impossible to die that way.
Why? Because of the giant, ugly block at the end of the cord.

### The ALCI (Appliance Leakage Circuit Interrupter)
It looks like a plug, but it's actually a tiny computer.
It monitors the electricity going *out* and the electricity coming *back*.
*   **Normal:** 5 Amps go out. 5 Amps come back. Balance.
*   **Danger:** 5 Amps go out. 4 Amps come back. (Where did the missing 1 Amp go? **Through your body** into the water).

> **Mental Model: The Accounting Guard**
>
> Imagine a security guard counting people entering and leaving a building.
> If 100 people go in, but only 99 come out, he *instantly* locks the door.
> The ALCI plug cuts the power in **0.025 seconds**—faster than your heart can beat. You might feel a buzzing shock, but you won't die.

### The Nichrome Miracle
Inside the dryer, the heating element is a glowing red wire made of **Nichrome** (Nickel-Chromium).
Why not Copper?
Copper melts at 1085°C and oxidizes (rusts) instantly in air.
Nichrome forms a microscopic layer of Chromium Oxide that acts like a skin, preventing the wire from burning out even at 2000°F.

> **One-Minute Takeaway**
>
> **The Cool Shot Button:** Why do stylists use cold air at the end? Hot hair is "plastic" (moldable). Cold hair is "rigid." You heat the hair to shape it, then blast it with the Cool Shot to "freeze" the style in place.
        `,
    },
    {
        slug: "how-electric-kettles-work-bimetallic-snap",
        title: "The Click of Death: How Electric Kettles Know When to Stop",
        description: "Water hits 100°C. The kettle clicks off. How does it know? It's not a thermometer.",
        category: "Home",
        publishedAt: "2025-12-25",
        imageUrl: "/images/kettle-steam-tube.png", // PROMPT: Cross-section of an Electric Kettle. The water is boiling. Steam is traveling down a hidden "Steam Tube" inside the handle. The steam hits a bimetallic disc at the bottom. The disc snaps concave, hitting the switch. Label: "The Steam Tunnel". Clean style.
        tags: ["Home", "Physics", "Engineering"],
        content: `
## The Missing Sensor
If you take apart a cheap $10 kettle, you won't find a computer chip. You won't even find a thermometer probe in the water.
So how does it turn off exactly at boiling point?

### The Steam Tube Trick
The sensor isn't in the water. It's in the **Handle**.
There is a hidden tunnel running from the top of the water tank down to the bottom switch.
1.  **Boiling:** Water turns to steam.
2.  **Pressure:** The steam expands and is forced down the tunnel.
3.  **The Trigger:** The steam hits a Bimetallic Disc (two metals glued together) at the bottom.
4.  **The Snap:** The heat makes the disc buckle (pop) like a Snapple cap. This mechanical "Pop" pushes the plastic lever to "OFF."

> **Why This Is Counterintuitive**
>
> If you boil water on the top of Mount Everest, it boils at 70°C (low pressure).
> A thermometer-kettle would *never* turn off because it keeps waiting for 100°C, which is physically impossible to reach.
> But a **Steam-Kettle** works perfectly! It doesn't care about the temperature. It cares about the *presence of steam*. As soon as it boils (at 70°C), steam rushes down, and it clicks off.

> **One-Minute Takeaway**
>
> **The Dry Boil:** What if you turn it on empty? The element gets red hot (300°C). A *second* safety disc melts a plastic pin, killing the circuit permanently to prevent a fire. This is a "Sacrificial Fuse."
        `,
    },
    {
        slug: "how-rice-cookers-work-curie-point",
        title: "The Magnetic Chef: How Rice Cookers Work",
        description: "It cooks perfect rice every time. The secret isn't a timer. It's a magnet that loses its soul at 100°C.",
        category: "Home",
        publishedAt: "2025-12-26",
        imageUrl: "/images/rice-cooker-magnet.png", // PROMPT: Diagram of the Curie Point. A permanent magnet held to a spring. A fire heats the magnet. At "100°C", the magnet loses magnetism and falls off, releasing the switch. Label: "Curie Point Physics". Clean style.
        tags: ["Home", "Physics", "Cooking"],
        content: `
## The Water Plateau
Physics Fact: You cannot heat liquid water above 100°C (at sea level).
As long as there is water in the pot, the temperature stays stuck at exactly 100°C. The energy goes into *boiling*, not heating.

But the moment the water is gone (absorbed by the rice), the temperature shoots up to 105°C... 110°C...
The Rice Cooker is just waiting for that spike.

> **Mental Model: The Magnetic Switch**
>
> Inside the button is a magnet touching a special metal.
> This metal has a **Curie Point** of exactly 100°C.
> *   **Below 100°C:** The metal is magnetic. The switch sticks "On."
> *   **At 101°C:** The physics of the metal change. It suddenly **stops being magnetic**.
> *   **The Click:** The magnet falls off. The spring creates that familiar *CLUNK* sound. The switch flips to "Warm."
>
> It is an analog computer made of stone and metal.

### Where This Breaks Down
If you try to cook something that doesn't absorb all the water (like soup), the temperature never spikes. The magnet never falls. The rice cooker will boil forever until the house burns down (or the safety fuse blows).
**Don't cook soup in a basic rice cooker.**

> **One-Minute Takeaway**
>
> **Fuzzy Logic:** Expensive Japanese cookers (Zojirushi) use AI chips ("Fuzzy Logic") to adjust heat for different grain types. But for plain white rice, the $20 magnetic clicker is chemically indistinguishable.
        `,
    },
    {
        slug: "how-coffee-makers-work-geyser",
        title: "The Bubble Pump: How Coffee Makers Work",
        description: "There is no motor pumping the water. The water pumps itself.",
        category: "Home",
        publishedAt: "2025-12-27",
        imageUrl: "/images/coffee-maker-check-valve.png", // PROMPT: Cross-section of a Drip Coffee Maker. One-way "Check Valve" (marble) at the bottom. Water boils in the tube, creating a bubble. The bubble expands, pushing water UP the tube because the marble blocks it from going DOWN. Label: "Geyser Pump". Clean style.
        tags: ["Home", "Dynamics", "Fluids"],
        content: `
## The Silent Lifter
Water is heavy. Lifting it from the reservoir to the filter basket takes work.
But coffee makers have no moving parts. No motor. No piston.
They use the **Geyser Effect**.

### The Mechanism
1.  **Gravity:** Water flows down a tube into a heating chamber.
2.  **Boil:** The element heats it. A bubble of steam forms.
3.  **Expansion:** The bubble is huge. It takes up 1000x the space of water. It expels the water.
4.  **The Check Valve:** A tiny marble or flap prevents the water from flowing *back* into the tank.
5.  **Lift:** The only way out is **UP**. The bubble pushes a slug of hot water up the tube, burping it out over the grounds.

> **Mental Model: The Straw Trick**
>
> Put a straw in a drink. Put your finger over the top. Lift. The liquid stays involved.
> Now imagine a bubble forming in the middle of the straw. It pushes the liquid above it out the top.
> That gurgling sound you hear is the machine's "heartbeat"—boil, expand, push, refill.

### Why Coffee is Bitter
Standard machines boil the water to pump it.
But coffee burns at 100°C. Ideally, you want 93°C.
Cheap machines spray steam-hot water on the grounds, extracting bitter tannins.
**Premium Machines (SCA Certified):** They heat the water in a separate tank to exactly 93°C, then use a *real* mechanical pump to lift it.

> **One-Minute Takeaway**
>
> **Descaling:** That white crust? It's Calcium Carbonate (Limestone) from your tap water. It insulates the heating element and clogs the Geyser tube. Vinegar dissolves it because Acid + Base = Water + CO2.
        `,
    },
    {
        slug: "how-air-conditioners-work-latent-heat",
        title: "The Heat Mover: How AC Works (It Doesn't Make Cold)",
        description: "Cold is not a thing. You cannot 'make' it. You can only move heat from your bedroom to the outside.",
        category: "Technology",
        publishedAt: "2025-12-28",
        imageUrl: "/images/ac-cycle-diagram.png", // PROMPT: The Refrigeration Cycle. 1. Compressor (Squeeze). 2. Condenser (Hot coils outside). 3. Expansion Valve (Spray). 4. Evaporator (Cold coils inside). Color code: Red for High Pressure, Blue for Low Pressure. Arrows showing heat moving OUT of the house. Clean style.
        tags: ["Technology", "Physics", "Home"],
        content: `
## The Law of Thermodynamics
Energy cannot be destroyed.
You can't just "delete" the heat in your room.
You have to carry it outside, like taking out the trash.

### The Magic Fluid: Freon (Refrigerant)
We use a chemical that boils at -40°C.
By manually changing pressure, we can force it to boil or freeze on command.

> **Mental Model: The Sponge**
>
> Think of the Refrigerant as a **Heat Sponge**.
>
> 1.  **Inside (Squeeze the Sponge):** We release the pressure. The liquid instantly evaporates into a gas. Physics demands energy for this ("Latent Heat"). It **steals** that heat from your bedroom air. The coils get freezing cold.
> 2.  **The Ride:** The now-warm gas travels through a pipe to the outside unit.
> 3.  **Outside (Wring the Sponge):** The Compressor squeezes the gas hard. Squeezing molecules makes them hot. The heat is dumped into the backyard.
> 4.  **Repeat:** The sponge is dry (cold) again and ready to soak more heat.

### Common Misconception
**"Turning the thermostat to 60°F cools the room faster than 70°F."**
**False.**
AC is binary. It is either ON (100% power) or OFF.
Setting it to 60°F just means it will *run longer*. It won't blow colder air.

> **One-Minute Takeaway**
>
> **The Drip:** Why does AC drip water? Cold air holds less moisture than hot air. As the room air touches the freezing coils, the water falls out (Condensation). Your AC is also a Dehumidifier.
        `,
    },
    {
        slug: "how-dehumidifiers-work-water-harvester",
        title: "The Water Harvester: How Dehumidifiers Work",
        description: "It looks like an AC, but it makes the room hotter. Why?",
        category: "Home",
        publishedAt: "2025-12-29",
        imageUrl: "/images/dehumidifier-coils.png", // PROMPT: Diagram of Dehumidifier airflow. Moist Air -> Cold Coil (Blue, water drops forming) -> Hot Coil (Red) -> Dry Warm Air Out. The "Drip Tray" catches the water. Label: "Condensation". Clean style.
        tags: ["Home", "Physics", "Weather"],
        content: `
## The Glass of Ice Water
You know how a cold soda can "sweats" on a hot day?
A dehumidifier is just a machine that keeps a metal can freezing cold permanently.

### The Mechanism
It is literally an Air Conditioner.
*   **Front Coil (Cold):** Air passes over it. Water condenses and drips into the bucket.
*   **Back Coil (Hot):** In an AC, this is outside. In a dehumidifier, it's right behind the cold coil.
*   **Result:** The air is cooled (loses water), then immediately reheated.
Air comes out **Warm** and **Dry**.

> **Why This Is Counterintuitive**
>
> "I run the dehumidifier to make the basement feel cooler."
> **Wrong.**
> A dehumidifier adds heat to the room (Motor heat + Latent heat released from condensing water).
> It makes the room **Hotter**.
> However, dry air *feels* cooler on your skin because your sweat can evaporate. It's the "Dry Heat" effect.

### Where This Breaks Down: Frost
If the basement is too cold (< 60°F), the cold coil creates **Ice** instead of water.
The machine freezes into a solid block.
Modern units have "Defrost Cycles" where they turn off the compressor and run just the fan to melt the ice.

> **One-Minute Takeaway**
>
> **Drinkable?** The water in the bucket is chemically pure (distilled). But **DO NOT DRINK IT**. The coils are often covered in mold, bacteria, and metal dust. It is "Grey Water"—good for plants, bad for humans.
        `,
    },
    {
        slug: "how-cordless-drills-work-planetary-gear",
        title: "The Planetary Power: How Cordless Drills Work",
        description: "How does a tiny motor crush a screw through oak? It trades speed for muscle.",
        category: "Tools",
        publishedAt: "2025-12-30",
        imageUrl: "/images/planetary-gear-drill.png", // PROMPT: Exploded view of a Planetary Gearbox. Central "Sun Gear". Three "Planet Gears" orbiting it. Outer "Ring Gear". Label: "Speed Reducer, Torque Multiplier". Clean engineering style.
        tags: ["Tools", "Engineering", "mechanics"],
        content: `
## Torque vs Speed
A small DC motor spins at 20,000 RPM.
If you attached a drill bit directly to it, it would spin so fast it would burn the wood, but have zero strength ("Torque"). It would stop if you touched it.
You need **Gearing**.

> **Mental Model: The Bicycle Hill**
>
> When you ride up a hill, you shift to a low gear. You pedal fast (High RPM), but the wheel turns slow.
> *   **Input:** High Speed, Low Strengh.
> *   **Output:** Low Speed, Massive Strength.
>
> A drill uses a **Planetary Gearbox**.
> It's a "Sun" gear driving three "Planet" gears inside a "Ring."
> It fits a massive 50:1 gear reduction inside a chuck the size of a soda can.

### The Clutch (The Clicking Ring)
Why does the drill make that awful *click-click-click* sound?
That is the **Clutch**.
It's a safety mechanism.
Inside, steel balls are pressed into holes by a spring.
*   **Low Setting:** Weak spring. If the screw hits resistance, the balls pop out of the holes. The motor spins, but the bit stops. **Safe.**
*   **Drill Setting:** The spring is locked solid. The motor will twist your wrist off before it stops.

> **One-Minute Takeaway**
>
> **Impact Driver vs Drill:** A Drill pushes constantly. An **Impact Driver** has a rotating hammer inside. It hits the screw 50 times a second ("Dak-Dak-Dak"). This concussion breaks the friction, allowing it to drive massive lag bolts without twisting your wrist.
        `,
    },
    {
        slug: "how-nail-guns-work-pneumatic-piston",
        title: "The Air Hammer: How Nail Guns Work",
        description: "Driving a 3-inch nail takes 10 hammer swings. This machine does it in one blow. How?",
        category: "Tools",
        publishedAt: "2025-12-31",
        imageUrl: "/images/nail-gun-piston.png", // PROMPT: Cross-section of a Pneumatic Nail Gun. The "Main Chamber" is full of blue compressed air. The "Trigger Valve" opens. The air slams onto the top of the Piston. The "Driver Blade" punches the nail. Clean style.
        tags: ["Tools", "Construction", "Physics"],
        content: `
## Storing the Strike
A hammer swing relies on your arm muscle.
A nail gun relies on **Compressed Air**.
But air is soft? How does it hit hard?

### The Dump Valve
The gun is connected to a hose at 100 PSI.
The handle is hollow and acts as a reservoir.
When you pull the trigger, you aren't opening a tap. You are pulling a "Plug" (The Dump Valve).
1.  **The Wait:** Air pressure holds the piston *down*.
2.  **The Trigger:** The valve creates an imbalance. The piston flies *up*.
3.  **The Slam:** The main volume of air dumps onto the piston head instantly.
4.  **The Drive:** The steel blade hits the nail with the force of a sledgehammer.

> **Mental Model: The Dam Break**
>
> Don't think of it like a garden hose (flow).
> Think of it like a Dam breaking.
> The air volume waits right above the piston. The trigger removes the wall. 
> It isn't a "push"; it is a violent collision.

### Sequential vs Bump Fire (Danger)
*   **Sequential (Safe):** You must press the nose tip against wood, *then* pull the trigger. 1 Nail.
*   **Bump Fire (Fast):** You hold the trigger down. Every time the nose touches wood, it fires.
Builders use Bump Fire to frame houses fast ("Pop-Pop-Pop"). But if you trip and bump your leg... you shoot your femur.

> **One-Minute Takeaway**
>
> **Combustion Guns:** Some nail guns don't use air hoses. They use a battery and a canister of Butane gas. Every shot is a literal internal combustion engine explosion (like a car piston) that drives the nail. They smell like exhaust.
        `,
    },
    {
        slug: "how-air-purifiers-work-brownian-motion",
        title: "The Chaos Trap: How HEPA Filters Catch Viruses",
        description: "A virus is smaller than the holes in the filter. Yet the filter catches it. Welcome to the weird world of nano-physics.",
        category: "Home",
        publishedAt: "2026-01-01",
        imageUrl: "/images/hepa-brownian.png", // PROMPT: Microscopic view of HEPA fibers. A large Dust Mite hits the fibers (Sieving). A tiny Virus particle flying randomly/chaotically in zig-zags (Brownian Motion) and crashing into a fiber. Label: "Diffusion". Clean scientific style.
        tags: ["Home", "Health", "Physics"],
        content: `
## The Net Problem
Imagine throwing a marble at a chain-link fence. It flies right through.
A virus (0.1 microns) is the marble. The HEPA filter gaps (0.3 microns) are the fence.
Logic says the virus should pass.
Physics says **No**.

### The Three Traps
1.  **Impact (Big Stuff):** Dust and Pollen are heavy. They fly straight and smash into fibers. (Like a bug on a windshield).
2.  **Interception (Medium Stuff):** Mold spores flow with the air, but if they brush against a fiber, Van Der Waals forces (atomic glue) make them stick.
3.  **Diffusion (Tiny Stuff):** This is the magic.
Tiny particles (Viruses) are so small they get bullied by air molecules. They don't fly straight. They zig-zag like a drunk person pinballing through a crowd.
This **Brownian Motion** makes them travel a path 10x longer than a straight line.
Statistically, it is impossible for them *not* to hit a fiber eventually.

> **Why This Is Counterintuitive**
>
> HEPA filters are actually **Start at catching medium particles** (0.3 microns).
> They are 99.97% efficient at 0.3 microns.
> But they are **99.99% efficient** at 0.01 microns (Viruses).
> **Smaller things are easier to catch** because they zig-zag more.

> **One-Minute Takeaway**
>
> **Activated Carbon:** HEPA catches solids. It cannot catch gas (smells, VOCs). For that, you need a heavy layer of Charcoal. The charcoal has billions of micropores that trap gas molecules chemically.
        `,
    },
    {
        slug: "how-impact-wrenches-work-hammer-anvil",
        title: "The Rotational Hammer: How Impact Wrenches Work",
        description: "How mechanics remove rusted bolts without effort. It's not twisting; it's punching.",
        category: "Tools",
        publishedAt: "2026-01-02",
        imageUrl: "/images/impact-mechanism-anvil.png", // PROMPT: Internal mechanism of an Impact Wrench. The "Hammer" (a spinning block) hitting the "Anvil" (Output shaft). Sparks flying at the contact point. Label: "Kinetic Energy Transfer". Clean style.
        tags: ["Tools", "Mechanics", "Physics"],
        content: `
## Constant Torque vs Burst Torque
If you try to loosen a rusted bolt with a long bar, you apply **Constant Torque**.
Often, the bolt head snaps off.
You need **Shock**.

> **Mental Model: The Stuck Jar**
>
> You can't open the pickle jar.
> Do you squeeze harder? No.
> You tap the lid against the counter. **Pop.**
> The shockwave breaks the friction seal.
>
> An Impact Wrench is a machine that "taps the lid" 3,000 times a minute while twisting.

### The Hammer and Anvil
Inside the gun, the motor doesn't drive the socket.
The motor spins a heavy weight (The Hammer).
1.  **Spin:** The hammer spins freely, building up speed.
2.  **Strike:** It engages lugs and WHACKS the output shaft (The Anvil).
3.  **Retreat:** It bounces off, spins freely again, and hits again.
*   **Result:** Massive spikes of torque (1000 ft-lbs) for milliseconds.

### Why Your Wrist Doesn't Snap
If a drill jams, the torque transfers to the handle (and your wrist).
In an impact wrench, the torque is delivered in such short bursts that inertia prevents the handle from moving.
Your hand feels vibration, not twist.

> **One-Minute Takeaway**
>
> **Torque Sticks:** Tire shops use color-coded metal bars ("Torque Sticks") between the gun and the nut. These bars are designed to twist like a spring at a specific torque (e.g., 100 ft-lbs), absorbing any extra power so the mechanic doesn't snap your wheel studs.
        `,
    },
    {
        slug: "how-noise-cancelling-headphones-work-anti-sound",
        title: "The Anti-Sound: How Noise Cancelling Works",
        description: "1 + 1 = 0. How math can delete the sound of a jet engine.",
        category: "Technology",
        publishedAt: "2026-01-03",
        imageUrl: "/images/anti-sound-wave.png", // PROMPT: Diagram of Sound Waves. Wave A (Noise): A Red sine wave. Wave B (Anti-Noise): A Blue sine wave that is perfectly "Inverted" (180 degrees out of phase). The two waves overlap. Result: A flat line (Silence). Clean scientific style.
        tags: ["Technology", "Audio", "Physics"],
        content: `
## Sound is Pressure
Sound is just air molecules bumping into each other.
*   **Compression:** High pressure (Peak).
*   **Rarefaction:** Low pressure (Valley).

### Destructive Interference
If you have a Peak (+1), and you add a Valley (-1), you get **Zero**.
Silence.

> **Mental Model: The Mirror Image**
>
> 1.  **Listen:** A microphone on the *outside* of the headphone hears the jet engine hum.
> 2.  **Invert:** The chip flips the wave upside down instantly.
> 3.  **Play:** The speaker plays the music **+** the inverted hum.
> 4.  **Delete:** The inverted hum meets the real hum in your ear canal. They cancel out.
> You hear only the music.

### Why It Sucks at Voices
The chip needs time to process (about 5 milliseconds).
*   **Constant Noise (Drone):** Easy. The waveform is predictable. The chip can guess what comes next.
*   **Sudden Noise (Voice/Clap):** Impossible. By the time the chip hears the clap and creates the anti-clap, the real clap has already hit your ear.
This is why they silence planes perfectly but you can still hear the baby crying in row 12.

> **One-Minute Takeaway**
>
> **Passive vs Active:** "Noise Isolating" just means tight earplugs (blocking air). "Active Noise Cancelling" means using electricity to fight sound with sound.
        `,
    },
    {
        slug: "how-optical-mouse-works-high-speed-camera",
        title: "The Floor Camera: How an Optical Mouse Works",
        description: "The ball is gone. Now you are dragging a high-speed camera across your desk.",
        category: "Technology",
        publishedAt: "2026-01-04",
        imageUrl: "/images/optical-mouse-sensor.png", // PROMPT: Cutaway of an Optical Mouse sensor. A Red LED illuminates the rough texture of the "Desk Surface". A minimal camera sensor captures the shadows. Side-by-side comparison of Frame 1 and Frame 2 showing the pattern moving "Left". Clean style.
        tags: ["Technology", "Computers", "Sensors"],
        content: `
## No More Lint
Remember peeling the lint off the rubber ball?
The optical mouse killed the ball in 1999.
It uses **Digital Signal Processing (DSP)**.

### The 2,000 FPS Camera
There is a tiny camera sensor (CMOS) on the bottom.
It takes 2,000 to 6,000 pictures per second.
But it isn't taking photos of your cat. It is taking photos of the **microscopic texture** of your mousepad.

> **Mental Model: The Pattern Matcher**
>
> 1.  **Flash:** The Red LED lights up the desk surface at an angle to create distinct shadows.
> 2.  **Snap:** Camera takes Photo A.
> 3.  **Snap (1ms later):** Camera takes Photo B.
> 4.  **Compare:** The chip compares the two photos. "Hey, this scratch mark moved 5 pixels to the right."
> 5.  **Move:** It tells the computer "Move Cursor Left."

### Why Glass Breaks It
Glass is transparent and smooth. It has no texture. No shadows.
The camera sees emptiness in Photo A and emptiness in Photo B.
It thinks "I am not moving."
**Laser Mice** work on glass because the laser is coherent light; it creates interference patterns (speckle) even on perfectly smooth glass.

> **One-Minute Takeaway**
>
> **DPI (Dots Per Inch):** High DPI means the camera notices smaller movements. 10,000 DPI means if you move the mouse 1 inch, the cursor moves 10,000 pixels. Great for gaming, terrible for Grandma.
        `,
    }
];
"""

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(blogs_content)

print(f"Created {output_file} with Tier 1 content.")
