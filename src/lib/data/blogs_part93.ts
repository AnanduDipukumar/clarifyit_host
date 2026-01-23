import { BlogPost } from "../blogs";

export const BLOGS_PART_93: BlogPost[] = [
    {
        slug: "burj-khalifa-structural-design",
        title: "Touching the Sky: How to Build the Burj Khalifa",
        description: "It is 828 meters tall. The wind should knock it over. The sand should swallow it. Here is how we stopped physics.",
        category: "Civil Engineering",
        publishedAt: "2025-06-11",
        imageUrl: "/images/burj-khalifa-foundation.png",
        tags: ["Engineering", "Architecture", "Physics", "Deep Dive"],
        content: `
## Introduction: The Problems
Building high is easy.
Building high on **Sand** is hard.
Building high in **120°C heat** is harder.
Building high against **Vortex Shedding** is the hardest.
The Burj is a miracle.

## 1. The Foundation (Friction Piles)
You can't dig to Bedrock (none in Dubai).
So they used **Friction Piles**.
192 concrete rods drilled 50 meters deep.
They don't sit on anything.
They "grip" the sand.
The friction between the concrete and the compressed sand holds the building up.
It floats in the desert.

## 2. The Shape (Buttressed Core)
A normal skyscraper is a square tube (World Trade Center).
Problem: At 800m, a square acts like a sail.
The wind pushes it.
Adrian Smith (Architect) designed a **Tripod**.
"The Buttressed Core".
Three wings support a central spine.
**Vortex Shedding:**
The wings **Setback** (get smaller) at different heights.
This confuses the wind.
The wind vortices cannot organize into a rhythm.
If the building was smooth, the rhythmic swaying would make people seasick (or snap the building).
The shape forces the wind to be chaotic.

## 3. The Concrete Pumps
How do you pump wet concrete 600m vertically?
It sets/hardens in the pipe due to heat/friction.
They had to pump at **Night** (cooler).
They added ice flakes to the mix.
They developed a new super-high-pressure pomp (Putzmeister).
The concrete at the bottom is C80 grade (Ultra High Strength). It is more like rock than cement.

### Fact Box
*   **The Spire:** The top 200m is steel, not concrete (to save weight). It was built *inside* the tower and jacked up hydraulically at the end. The final height changed during construction to beat competitors.
        `,
    },
    {
        slug: "tacoma-narrows-bridge-resonance",
        title: "Galloping Gertie: The Tacoma Narrows Bridge",
        description: "1940. A mild breeze blew. The bridge started to dance. Then it tore itself apart. The lesson of Aeroelastic Flutter.",
        category: "Civil Engineering",
        publishedAt: "2025-06-12",
        imageUrl: "/images/tacoma-bridge-collapse.png",
        tags: ["Engineering", "Physics", "Disaster", "Deep Dive"],
        content: `
## Introduction: The Mistake
Leon Moisseiff designed a sleek, thin suspension bridge.
To save money, he used solid Plate Girders on the sides instead of open Trusses.
This was fatal.
The solid plates acted like a **Wing**.

## 1. Resonance? No. Flutter.
Textbooks say "Resonance" (Soldiers marching in step).
Wrong.
It was **Aeroelastic Flutter**.
Self-Excited Vibration.
1.  Wind pushes the bridge up slightly.
2.  The bridge twists.
3.  The twist changes the angle of attack.
4.  The wind now pushes it down harder.
5.  It twists back.
The bridge feeds energy from the wind into the oscillation.
The more it moves, the more energy it captures.
Positive Feedback Loop.

## 2. The Collapse
On Nov 7, 1940, the wind was 40 mph.
The bridge twisted 45 degrees.
The cables snapped.
The road fell into the water.
A dog (Tubby) was the only casualty. (The owner was too scared to go back and get him).

## 3. The Fix
Modern bridges (Golden Gate) use **Trusses**. Wind blows *through* them.
The new Tacoma bridge has:
*   Open grates in the road (to let air equalize pressure).
*   Gaps between lanes.
*   Hydraulic dampers.
We simulate bridges in Wind Tunnels now before building them.

### Fact Box
*   **London Millennium Bridge:** In 2000, it wobbled. Not wind, but **People**. Pedestrians synchronized their steps to counter the wobble, which made the wobble worse (Lock-in effect). They had to install 90 dampers to fix it.
        `,
    },
    {
        slug: "channel-tunnel-chunnel-digging",
        title: "Meeting in the Middle: The Channel Tunnel",
        description: "England and France are 50km apart. Digging a tunnel under the sea is easy. Making the two ends meet in the middle is hard.",
        category: "Civil Engineering",
        publishedAt: "2025-06-13",
        imageUrl: "/images/chunnel-tbm.png",
        tags: ["Engineering", "History", "Math", "Deep Dive"],
        content: `
## Introduction: The Chalk Marl
Geologists found a layer of "Chalk Marl" under the seabed.
It is soft (easy to drill) but waterproof (clay content).
It was the perfect path.
But it curves and dips. You have to follow the layer perfectly. Use lasers.

## 1. The TBMs (Tunnel Boring Machines)
Giant worms. 2 stories high.
11 TBMs were used.
The British TBMs dug from Dover.
The French TBMs dug from Calais.
They had to meet in the middle.
**Laser Guidance:**
If they were off by 1 degree... they would miss each other by meters.
They used Gyroscopes and GPS (on the surface) to calculate position.
When they broke through, they were off by **35 centimeters**.
Perfect.

## 2. The Burial
What happened to the TBMs?
The British machines were driven *off the track* and buried downwards into the rock.
They are still there, entombed in concrete under the tracks.
The French machines were dismantled and reversed out (French labor laws/recycling?).

## 3. Fire Safety
A 50km tunnel is a fire trap.
There are actually 3 tunnels.
Two for trains (North/South).
One small "Service Tunnel" in the middle.
It is pressurized. Smoke cannot enter it.
In case of fire, passengers evacuate into the Service Tunnel.
In 1996, a truck fire burned at 1000°C. Nobody died. The system worked.

### Fact Box
*   **The Sale:** The project went 80% over budget. The investors lost their shirts. But the public got an engineering marvel. It is often the case with Mega-Projects. The first owners go bankrupt; the second owners make the profit.
        `,
    },
    {
        slug: "three-gorges-dam-physics",
        title: "Slowing the Earth: The Three Gorges Dam",
        description: "It is the biggest power plant in the world. It holds back so much water that it actually slowed the rotation of the planet.",
        category: "Civil Engineering",
        publishedAt: "2025-06-14",
        imageUrl: "/images/three-gorges-dam.png",
        tags: ["Engineering", "China", "Energy", "Deep Dive"],
        content: `
## Introduction: The Yangtze
The Yangtze river floods every year. It killed 300,000 people in the 20th century.
China built the dam for Flood Control first, Power second.
Size: 2.3km long. 180m high.
Concrete: 27 million cubic meters.

## 1. 22 Gigawatts
It has 32 turbines.
Total output: 22,500 MW.
That is equal to **20 Nuclear Reactors**.
It powers Shanghai.
It replaces 30 Million tons of coal per year.

## 2. The Physics of Rotation
Moment of Inertia.
If a figure skater moves her arms out, she spins slower.
By raising 39 Trillion kg of water 175 meters...
China moved mass *away* from the Earth's center.
Effect: Earth slowed down by **0.06 microseconds**.
The North Pole shifted by 2cm.
Humans are now a geological force.

## 3. Displacements
The lake (reservoir) submerged 13 cities, 140 towns, and 1300 villages.
1.3 Million people were forced to move.
Historical artifacts were lost underwater.
Landslides are common on the new banks.
It is an engineering triumph but a humanitarian scar.

### Fact Box
*   **The Ship Lift:** Ships need to get over the dam. The locks take 4 hours. So they built a **Ship Lift**. A giant elevator that lifts a 3000-ton boat 113 meters in the air in 40 minutes. It is the biggest elevator in the world.
        `,
    },
    {
        slug: "earthquake-skyscraper-tuned-mass-damper",
        title: "Dancing with Earthquakes: Tuned Mass Dampers",
        description: "Taipei 101 has a giant gold ball hanging inside it. It saves the building from typhoons and quakes. How physics fights vibrations.",
        category: "Civil Engineering",
        publishedAt: "2025-06-15",
        imageUrl: "/images/taipei-101-damper.png",
        tags: ["Engineering", "Physics", "Safety", "Deep Dive"],
        content: `
## Introduction: The Period
Every building has a natural frequency.
Tall buildings sway slowly (Period = 5-10 seconds).
If an earthquake (or wind) matches that frequency -> **Resonance**.
The swaying gets bigger until it snaps.

## 1. The Pendulum (TMD)
Taipei 101 installed a **Tuned Mass Damper (TMD)**.
A 660-ton steel sphere suspended on cables on the 87th floor.
Physics:
When the building sways Left...
The ball lags behind and swings Right.
The ball pulls the building back.
It acts as a giant shock absorber.
It reduces sway by 40%.
Effect: People on the top floor don't vomit during a typhoon.

## 2. Base Isolation
Alternative method (used in Japan).
Put the building on **Rollers**.
Rubber and Lead bearings.
When the ground moves, the building stays still. The ground slides *under* it.
You can see the gap ("Moat") around the building.
During the 2011 Quake, skyscrapers in Tokyo swayed gently while the ground shook violently.

## 3. Flex vs Rigid
Old buildings (Brick) were rigid. They crumbled.
New buildings (Steel) are flexible. They bend like bamboo.
The goal is not to *resist* nature, but to *move* with it.
"Ductility".
A building that bends survives. A building that fights fails.

### Fact Box
*   **The Damper Babies:** The Taipei 101 damper is a tourist attraction. They have mascots ("Damper Babies") with different colors. It is the only engineering component in the world that sells plush toys.
        `,
    },
];
