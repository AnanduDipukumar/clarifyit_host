import { BlogPost } from "../blogs";

export const BLOGS_PART_26: BlogPost[] = [
    {
        slug: "how-elevators-work-counterweight",
        title: "The Hanging Box: How Elevators Work",
        description: "The motor doesn't lift the car. It just tips the scale.",
        category: "Engineering",
        publishedAt: "2024-04-11",
        imageUrl: "/images/elevator-counterweight.png",
        tags: ["Engineering", "City", "Safety"],
        content: `
## Construction: The Traction Sheave
Modern elevators are "Traction" elevators.
1.  **Machine Room:** Sits on the roof. Contains the motor.
2.  **Sheave:** A grooved pulley wheel. The cables *sit* in the grooves.
3.  **Ropes:** Steel cables (usually 4-8) that hold the car.
4.  **Counterweight:** A stack of steel plates sliding on its own rails.

## The Counterweight
Lifting a heavy steel box is hard.
So we tie a heavy rock (Counterweight) to the other end of the rope.
*   **Car Weight:** 2,000 lbs.
*   **Counterweight:** 2,000 lbs + 40% of max load.
The motor *doesn't lift the car*.
It just overcomes the difference (friction + passengers).
Often, the motor is actually *generating* electricity (Regenerative braking) because the counterweight is heavier than the empty car going up.

### The Safety Brake (Elisha Otis)
What if the rope snaps?
You don't fall.
1.  **The Governor:** A separate rope tracks the speed.
2.  **Overspeed:** If the car falls too fast, the Governor locks.
3.  **The Wedge:** This pulls a lever on the car that drives massive steel wedges into the guide rails.
4.  **The Stop:** The car grinds to a halt instantly. The friction melts the metal, but you live.

> **One-Minute Summary**
> It works like a balanced seesaw. A heavy counterweight offsets the car's mass, so the motor only moves the difference. If the cable fails, centrifugal brakes automatically wedge into the rails to stop the fall.
        `,
    },
    {
        slug: "how-escalators-work-chain",
        title: "The Endless Stair: How Escalators Work",
        description: "It is not a ramp. It is a chain of triangles.",
        category: "Engineering",
        publishedAt: "2024-04-12",
        imageUrl: "/images/escalator-steps.png",
        tags: ["Engineering", "City", "Mechanics"],
        content: `
## Construction: The Truss and Track
The escalator isn't just steps; it's a massive bridge structure (Truss) hidden under the floor.
1.  **Drive Gear:** A Top motor pulling the main chain.
2.  **Step Chain:** A bicycle chain on steroids. Each step is a link.
3.  **Comb Plate:** The yellow teeth at the start/end. They mesh with the grooves in the steps to scrape off shoelaces so they don't get sucked into the machine.

## The Hidden Steps
An escalator step is a triangle, not a flat plank.
It has two sets of wheels:
1.  **Front Wheels:** Follow the main track.
2.  **Rear Wheels:** Follow a *secondary* track.

### The Flattening
At the top and bottom, the tracks separate.
*   **The Slope:** The rear track is lower than the front track. The step is flat.
*   **The Rise:** The tracks move closer together height-wise. The steps stack up to form a staircase.
*   **The Return:** Underneath, the steps flip upside down and travel back to the start.

### The Handrail
The rubber handrail is a separate belt driven by the same motor.
If the gears slip, the handrail might move slightly faster or slower than the steps, which is why you have to keep adjusting your grip.

> **One-Minute Summary**
> A loop of triangular steps rides on two separate tracks. By changing the distance between the front and rear wheel tracks, the steps can transition from a flat floor to a staircase and back again.
        `,
    },
    {
        slug: "how-hvac-works-heat-exchanger",
        title: "The Heat Exchanger: How HVAC Works",
        description: "How to heat a house without poisoning the air.",
        category: "Engineering",
        publishedAt: "2024-04-13",
        imageUrl: "/images/furnace-exchanger.png",
        tags: ["Engineering", "Household", "Thermodynamics"],
        content: `
## Construction: The Clamshell
A residential furnace is a metal box containing:
1.  **Burners:** Gas jets (like a BBQ).
2.  **Heat Exchanger:** A serpentine metal path.
3.  **Inducer Fan:** Pulls the toxic smoke *through* the exchanger and pushes it out the chimney.
4.  **Blower Fan:** The big drum fan that pushes house air *around* the exchanger.

## Fire vs Air
Inside a gas furnace, fire burns at 2,000°F.
This creates Carbon Monoxide (Death).
We want the heat, but not the smoke.

### The Metal Lung
We use a **Heat Exchanger**.
It is a zig-zag metal tube (Clamshell).
1.  **Inside the Tube:** Fire and Poison Gas flow through and exit the chimney.
2.  **Outside the Tube:** Your house air is blown *over* the hot metal.
3.  **The Transfer:** The metal gets hot. The air touches the metal and gets hot.
The two air streams **never mix**.
**The Cracked Exchanger:** If the metal rusts and cracks, the poison leaks into your bedroom. This is why inspectors check "flame rollout."

> **One-Minute Summary**
> We burn gas inside a sealed metal labyrinth. A fan blows clean house air over the outside of the hot metal maze, absorbing the heat without ever touching the toxic combustion fumes.
        `,
    },
    {
        slug: "how-revolving-doors-work-airlock",
        title: "The Air Lock: Why Skyscrapers Have Spinning Doors",
        description: "It isn't for fancy entry. It is to stop the Stack Effect from sucking the furniture out.",
        category: "Architecture",
        publishedAt: "2024-04-14",
        imageUrl: "/images/revolving-door-stack.png",
        tags: ["Architecture", "Physics", "City"],
        content: `
## Construction: The Drum
1.  **Enclosure (Drum):** The curved glass walls.
2.  **Wings:** The 3 or 4 rotating doors.
3.  **Weather Stripping:** Brushes on the edges of the wings that create the perfect seal against the drum.
4.  **Speed Governor:** A viscous damper (like in a car shock absorber) that prevents you from spinning it too fast.

## The Stack Effect (Chimney Effect)
A skyscraper is a 1,000-foot tall hot air balloon.
*   **Winter:** Hot air rises. It wants to escape the roof.
*   **Vacuum:** As hot air rises, it creates a massive **Low Pressure** zone at the lobby.
*   **The Suck:** If you open a normal door, cold air rushes in at 30 mph. It is impossible to heat the lobby.

### The Revolving Door (Always Closed)
A revolving door is **always open and always closed**.
It seals the building.
It allows people to enter, but it only lets a tiny cup of air enter with them.
It acts as an **Airlock**.
Without them, the pressure difference would be so high you physically couldn't push a regular door open.

> **One-Minute Summary**
> Tall buildings act like chimneys, sucking cold air in at the bottom. Revolving doors act as airlocks that allow traffic flow while maintaining the pressure seal, preventing massive drafts.
        `,
    },
    {
        slug: "how-sprinklers-work-bulb",
        title: "The Glass Plug: How Fire Sprinklers Work",
        description: "Not like the movies. Smoke doesn't trigger them. Only heat does.",
        category: "Safety",
        publishedAt: "2024-04-15",
        imageUrl: "/images/sprinkler-bulb.png",
        tags: ["Safety", "Physics", "Engineering"],
        content: `
## The Hollywood Myth
In movies, the villain pulls a fire alarm, and *every sprinkler in the building* goes off.
**False.**
1.  Sprinklers are individual robots. They operate independently.
2.  Smoke alarms do not trigger sprinklers (imagine burnt toast flooding your apartment).

### The Glycerin Bulb
Look at a sprinkler head. You see a tiny glass bulb full of red liquid.
This is **Glycerin**.
It expands when heated.
1.  **Fire:** The air hits 155°F (68°C).
2.  **Expand:** The liquid expands. No room left.
3.  **Shatter:** The glass breaks.
4.  **Flow:** The plug falls out. Water (under pressure) hits the deflector plate and sprays the room.
Only the sprinkler *directly above the fire* breaks. (95% of fires are controlled by just 1 or 2 heads).

> A liquid-filled glass bulb holds the water back. When the heat of a fire causes the liquid to expand and shatter the glass, the plug releases, spraying water only on the specific area that is burning.

## Construction: The Seal
The sprinkler is simple but robust:
1.  **Frame:** The bronze body screwed into the pipe.
2.  **Plug (Pip Cap):** A small button blocking the water flow.
3.  **Bulb:** 5mm quartz glass containing glycerin.
4.  **Deflector:** The flower-shaped plate. It forces the water stream to fan out into an umbrella shape to cover more area.
        `,
    }
];
