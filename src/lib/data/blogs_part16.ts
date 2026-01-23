import { BlogPost } from "../blogs";

export const BLOGS_PART_16: BlogPost[] = [
    {
        slug: "how-cruise-control-works-pid",
        title: "The Invisible Foot: How Cruise Control Works",
        description: "It looks at the speedometer and moves the gas pedal. The math of PID Controllers.",
        category: "Technology",
        publishedAt: "2024-02-21",
        imageUrl: "/images/cruise-control-actuator.png",
        tags: ["Technology", "Cars", "Math"],
        content: `
## Construction: The 3 Inputs
The system is a robot with three sensors:
1.  **Speed Sensor:** A magnet on the transmission shaft (Hall Effect) counting rotations.
2.  **Actuator:** A solenoid that pulls the throttle cable (or an electric motor on Drive-by-Wire cars).
3.  **The Brain (ECU):** The computer running the math.

## The Hill Problem
If you just locked the gas pedal at 50%, you would slow down on hills and speed up downhill.
A Cruise Control system needs to be active. It needs a **Feedback Loop**.

### The PID Controller
This is the algorithm that runs the world (Boilers, Drones, Cruise Control).
It calculates the **Error** (Target Speed - Current Speed).
Then it applies a correction based on three terms:
1.  **P (Proportional):** "I am slow. Push gas." (The Now).
2.  **I (Integral):** "I have been slow for a long time. Push gas HARDER." (The Past).
3.  **D (Derivative):** "I am speeding up too fast, I'm going to overshoot. Ease off." (The Future).

### Adaptive Cruise (Radar)
Modern cars add eyes.
A Radar sensor in the bumper measures distance to the car ahead.
If *Distance < Safe Distance*, the computer overrides the PID controller and brakes.
It basically tethers you to the car in front with an invisible spring.

> **One-Minute Summary**
> It continuously measures the error between your actual speed and your target speed, adjusting the throttle valve in real-time using a specific mathematical formula (PID) to smooth out the bumps.
        `,
    },
    {
        slug: "how-air-traffic-control-works-radar",
        title: "The Sky Tetris: How Air Traffic Control Works",
        description: "How to fit 5,000 planes in the sky without them touching.",
        category: "Technology",
        publishedAt: "2024-02-22",
        imageUrl: "/images/atc-screen.png",
        tags: ["Technology", "Aviation", "Systems"],
        content: `
## The Big Sky Myth
The sky is big, but planes follow invisible highways (Vor Airways).
They are crowded.
ATC's job is **Separation**.
*   **Vertical:** 1,000 feet.
*   **Lateral:** 5 miles.

### Primary vs Secondary Radar
1.  **Primary Radar (The Old Way):** Bounce a radio wave off the metal plane.
    *   *Pro:* Works even if the plane radio is dead.
    *   *Con:* Doesn't tell you *who* it is. Just a blip.
2.  **Secondary Radar (Transponder):**
    *   The Radar Tower asks: "Who are you?"
    *   The Plane's Transponder replies: "I am Flight UA99, Altitude 35,000."
    *   This puts the "Data Tag" on the controller's screen.

## Construction: The 3 Layers
No single tower controls the whole flight. You are passed through three distinct zones:
1.  **Town (Tower):** Eyes on the runway. Range: 5 miles.
2.  **County (TRACON):** Radar in a dark room. Range: 30 miles.
3.  **State (Center/ARTCC):** High altitude cruising. Range: Hundreds of miles.

### The Handoff
No single tower controls the whole flight.
1.  **Tower:** Controls the Airport (Takeoff). "Contact Departure."
2.  **TRACON:** Controls the city airspace (30 miles). "Contact Center."
3.  **Center (ARTCC):** Controls high-altitude cruising (Waiters in the sky).
You are passed like a baton from one controller to the next.

> **One-Minute Summary**
> Controllers use radar-assisted radio tags to monitor a 3D grid of highways. Their only job is to ensure that two blips never get within 5 miles or 1,000 feet of each other.
        `,
    },
    {
        slug: "how-ejection-seats-work-rocket",
        title: "The Rocket Chair: How Ejection Seats Work",
        description: "0 to 400mph in 0.2 seconds. How to survive leaving a supersonic jet.",
        category: "Technology",
        publishedAt: "2024-02-23",
        imageUrl: "/images/ejection-seat-sequence.png",
        tags: ["Technology", "Aviation", "Safety"],
        content: `
## The Spinal Compression
Ejecting is violent.
The pilot must be shot clear of the tail fin instantly.
If we used a spring, it would be too slow.
We use a **Rocket Motor** under the seat.
**G-Force:** 14G to 20G.
This compresses the spine. Pilots often shrink by 1 inch after an ejection. Career limit: 2 ejections.

## Construction: The Escape Pod
A Martin-Baker seat is a vehicle inside a vehicle:
1.  **The Gun:** A telescoping tube with explosives to boost the pilot *out* of the cockpit.
2.  **The Rocket:** An under-seat motor that fires *after* leaving the plane to clear the tail.
3.  **The Sequencer:** An aneroid barometer that decides when to open the parachute (wait until you fall to breathable air).

### The Sequence (The Martin-Baker Seat)
It happens automatically in 2 seconds.
1.  **Pull Handle:** The canopy blows off (explosive bolts).
2.  **Leg Restraints:** Cables snap tight around the pilot's calves to pull their legs in (so they don't hit the dashboard and get ripped off).
3.  **Fire:** The seat rockets up the rail.
4.  **Drogue Chute:** A small chute stabilizes the seat so it doesn't tumble.
5.  **Separation:** The seat drops away. The pilot's main chute opens.

### Zero-Zero Ejection
Old seats needed speed and altitude to work.
Modern seats work at **Zero Altitude / Zero Speed** (Sitting on the runway).
The rocket is powerful enough to shoot you high enough for the chute to open even if the plane is parked.

> **One-Minute Summary**
> It is an automated escape pod. Explosives blow the roof, cables retract the limbs, and a rocket shoots the chair clear of the aircraft tail before deploying a parachute.
        `,
    },
    {
        slug: "how-parachutes-work-drag",
        title: "The Controlled Fall: How Parachutes Work",
        description: "It isn't just a bedsheet. It is a wing woven from zero-porosity fabric.",
        category: "Physics",
        publishedAt: "2024-02-24",
        imageUrl: "/images/parachute-cells.png",
        tags: ["Physics", "Aviation", "Fluids"],
        content: `
## Terminal Velocity
If you fall, gravity speeds you up (9.8 $m/s^2$).
Air resistance waits for you to go fast, then pushes back.
Eventually, Gravity = Air Resistance. You stop speeding up.
*   **Human:** 120 mph. (Splat).
*   **With Chute:** 15 mph. (Safe).

## Construction: The Elements
It is more than a cloth.
1.  **Canopy:** Ripstop nylon (Zero Porosity) coated in silicone so air can't pass through.
2.  **Lines:** Spectra or Kevlar cords (Stronger than steel cable).
3.  **Pilot Chute:** A mini-parachute that pulls the big one out of the bag.

### Round vs Ram-Air
1.  **Round Chute (WWII):** A dome. Relies purely on **Drag**. You drift where the wind blows. You land hard (like jumping off a 2-story building).
2.  **Ram-Air (Modern):** A mattress shape.
    *   It has open cells at the front.
    *   Air rams in and inflates it into a **Wing Shape**.
    *   It generates **Lift**.
    *   You can steer it. You can "Flare" (brake) right before landing for a tiptoe touchdown.
    
### The Slider
If the chute opened instantly at 120mph, the shock would snap your neck.
A small rectangle of fabric called a **Slider** holds the lines together at the top.
The wind slowly pushes it down the lines.
This forces the canopy to inflate **slowly (Snivel)** over 3-4 seconds.

> **One-Minute Summary**
> By increasing surface area, we increase air resistance. Modern chutes also inflate into an airfoil shape, generating lift that allows the jumper to glide and steer rather than just fall slowly.
        `,
    },
    {
        slug: "how-maglev-trains-work-superconductor",
        title: "The Floating Track: How Maglev Trains Work",
        description: "375 mph. No wheels. No engine. Just pure magnetic levitation.",
        category: "Technology",
        publishedAt: "2024-02-25",
        imageUrl: "/images/maglev-guideway.png",
        tags: ["Technology", "Transport", "Magnets"],
        content: `
## The Friction Trap
Trains are limited by wheels.
Above 200mph, wheels vibrate, hunt, and wear out.
To go faster, you must eliminate contact.

## Construction: The Guideway
The track is the engine. It contains:
1.  **Levitation Coils:** Figure-8 loops that push the train up.
2.  **Propulsion Coils:** Electromagnets that switch polarity to pull/push.
3.  **Guidance Magnets:** Side magnets that keep the train centered so it doesn't scrape the walls.

### Electrodynamic Suspension (EDS - Japan)
These train use **Superconducting Magnets** (cooled to -269°C).
1.  **Levitation:** The train has magnets. The track has figure-8 coils. As the train moves, it induces a current in the track that pushes back (Lenz Law). The train lifts 10cm (4 inches) into the air.
    *   *Catch:* It only works at speed. The train has rubber wheels for takeoff/landing.
2.  **Propulsion:** The walls of the track have electromagnets that switch North-South-North.
    *   **Front:** Pulls the train (N-S attraction).
    *   **Back:** Pushes the train (N-N repulsion).
    *   It is a linear motor surfing a magnetic wave.

### Electromagnetic Suspension (EMS - Germany/China)
The Transrapid system is weird. It hangs **under** the track.
A C-shaped arm wraps around the guideway.
Magnets on the arm pull **UP** towards the steel rail.
Computers maintain a 15mm gap. If the power fails, it drops onto skids.

> **One-Minute Summary**
> By cooling magnets until they become superconductors, we create field strengths powerful enough to lift a 50-ton train car and propel it using magnetic waves in the guideway walls.
        `,
    }
];
