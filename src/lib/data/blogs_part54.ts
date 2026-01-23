import { BlogPost } from "../blogs";

export const BLOGS_PART_54: BlogPost[] = [
    {
        slug: "concorde-supersonic-failure",
        title: "The Beautiful Failure: Concorde",
        description: "You could fly London to NY in 3 hours. You saw the curve of the Earth. You drank champagne at Mach 2. Why did we stop?",
        category: "Aviation",
        publishedAt: "2024-11-30",
        imageUrl: "/images/concorde-takeoff.png",
        tags: ["Aviation", "History", "Engineering", "Deep Dive"],
        content: `
## Introduction: The Sound Barrier
Sound travels at 767 mph (Mach 1).
When you fly fast, air builds up in front of you. A wall.
If you break it, the wall collapses into a Shockwave. **BOOM**.
Concorde was built to cruise at Mach 2.02 (1,350 mph).
Faster than a rifle bullet. The friction was so hot the fuselage stretched 12 inches during flight.

## 1. The Technology
It was 1969 tech (older than a moon rocket).
*   **The Droop Snoot:** The nose pointed down during landing so pilots could see the runway (High Angle of Attack).
*   **Fuel Transfer:** To balance the plane at Mach 2, they pumped fuel from front to back to change the Center of Gravity.
*   **Olympus Engines:** They used Afterburners (dumping raw fuel into the exhaust) for takeoff. It was loud. It was dirty. It was magnificent.

## 2. Why it Failed (Economics)
It wasn't the crash (2000). It was the cash.
It burned 2 tons of fuel just taxiing to the runway.
Tickets cost $12,000.
**The Sonic Boom:**
You can't go supersonic over land. The boom breaks windows.
So it could only fly NY-London or NY-Paris.
Boeing bet on the 747 (Jumbo Jet). "Slow and Cheap" beats "Fast and Expensive".
Boeing won. We chose cheap cattle-class over speed.

## 3. The Future (Boom Supersonic)
New startups (Boom Overture) are bringing it back.
How to fix the boom?
**NASA X-59:** "Quiet Supersonic".
By shaping the nose, you can turn the Sharp Boom into a Soft Thump.
We might see Mach 2 travel again by 2030. The dream isn't dead.

### Fact Box
*   **The Race:** The Russians built a copy called the "Konkordski" (Tu-144). It was faster but cruder. It crashed at the Paris Air Show in 1973. It flew only 55 passenger flights before being grounded forever.
        `,
    },
    {
        slug: "jet-engine-whittle-turbine",
        title: "Suck, Squeeze, Bang, Blow: The Jet Engine",
        description: "Frank Whittle invented the continuous explosion. How a tube of spinning blades generates 100,000 lbs of thrust.",
        category: "Aviation",
        publishedAt: "2024-12-01",
        imageUrl: "/images/jet-engine-cutaway.png",
        tags: ["Aviation", "Physics", "Engineering", "Deep Dive"],
        content: `
## Introduction: The Propeller Limit
Propellers stop working at 450 mph.
The blade tips hit supersonic speed and lose grip.
To go faster, we needed a new way to push.
Frank Whittle (UK) and Hans von Ohain (Germany) invented the Jet independently in the 1930s.

## 1. The Cycle (Brayton Cycle)
1.  **Suck (Fan):** The big fan at the front sucks in air. (High Bypass).
2.  **Squeeze (Compressor):** Rows of tiny blades compress the air 40x. It gets hot.
3.  **Bang (Combustor):** Inject Kerosene. Spark. Controlled Explosion.
4.  **Blow (Turbine):** The hot gas shoots out the back (Thrust). On the way out, it spins a Turbine, which powers the Compressor at the front.
It is a self-sustaining torch.

## 2. The Materials Challenge
The Turbine blades sit inside the fire (1500°C).
But the metal melts at 1300°C.
Impossible?
**The Cooling:**
Each blade has tiny holes laser-drilled in it. Cool air from the compressor flows *inside* the blade and forms a "film" of cool air on the surface.
**Single Crystal:**
We grow the metal blade as a single crystal (No grain boundaries). It makes it immune to "Creep" (stretching under centrifugal force).

## 3. Turbofan vs Turbojet
Old jets (Top Gun) were Turbojets. 100% of air went through the core. Loud. Inefficient.
Modern Airliners are **Turbofans**.
90% of the air bypasses the core. It just gets pushed by the big fan.
It's basically a ducted propeller.
This makes them quiet and fuel efficient.
The GE9X engine on the 777X is as wide as a Boeing 737 fuselage.

### Fact Box
*   **Bird Strike:** Engines are tested by firing dead chickens at them at 400mph. The engine must survive and shut down safely without exploding shrapnel into the cabin. (Miracle on the Hudson: Birds took out both engines).
        `,
    },
    {
        slug: "air-traffic-control-radar",
        title: "The Invisible Highway: Air Traffic Control",
        description: "There are 5,000 planes in the sky right now. They don't crash. The complex dance of Radar, Squawk Codes, and TRACON.",
        category: "Aviation",
        publishedAt: "2024-12-02",
        imageUrl: "/images/atc-radar-screen.png",
        tags: ["Aviation", "Systems", "Safety", "Deep Dive"],
        content: `
## Introduction: The Void
The sky looks empty.
It is actually a tight grid of 3D highways.
**Class A Airspace:** Above 18,000ft. You must follow Instrument Flight Rules (IFR). You do what Controllers say. No exceptions.

## 1. The Handoff
1.  **Tower:** "Cleared for takeoff." Handles you for 5 miles.
2.  **Departure (TRACON):** Handles you to 18,000ft. Vectors you to the highway.
3.  **Center (En Route):** The guys in the dark room with the big screens. They handle the cruise.
4.  **Approach:** Lines you up for landing.
5.  **Tower:** "Cleared to land."
If you drop communication for 1 minute... Fighter Jets scramble.

## 2. Squawk Codes (Transponder)
Radar is a ping (Primary). It tells distance.
But it doesn't tell *Who* you are.
Your plane has a Transponder.
ATC assigns a code ("Squawk 4521").
Your plane broadcasts: "I am 4521 at 35,000ft."
**Emergency Codes:**
*   **7700:** General Emergency (My engine is on fire).
*   **7600:** Radio Failure (I can't hear you).
*   **7500:** Hijacking (Send the SEAL team). The pilot enters this silently.

## 3. ADS-B (The Upgrade)
Radar is old (1940s). It updates every 12 seconds.
ADS-B (Automatic Dependent Surveillance-Broadcast) uses GPS.
The plane tells everyone where it is every 1 second.
This allows planes to fly closer together safely.
It powers apps like FlightRadar24 so you can track your grandma's flight.

### Fact Box
*   **English:** English is the international language of aviation. A Chinese pilot landing in France speaks to the controller in English. Misunderstandings have caused crashes (Tenerife). Standard phraseology is rigid ("Roger", "Wilco", "Mayday").
        `,
    },
    {
        slug: "black-box-flight-recorder-mh370",
        title: "The Orange Box: Flight Recorders",
        description: "It's not black. It helps us solve the puzzle of death. Why do we still not stream the data to the cloud?",
        category: "Aviation",
        publishedAt: "2024-12-03",
        imageUrl: "/images/black-box.png",
        tags: ["Aviation", "Tech", "Mystery", "Deep Dive"],
        content: `
## Introduction: David Warren
1953. David Warren (Australia) had an idea.
"If we had a tape recorder in the cockpit, we would know what they said before they crashed."
Authorities rejected it. "It breaches pilot privacy."
Today, it is mandatory.

## 1. Two Boxes
1.  **FDR (Flight Data Recorder):** Records 1000 parameters. Altitude, Speed, Flap position, Rudder input. "What the plane did."
2.  **CVR (Cockpit Voice Recorder):** Records the pilots talking. "What the humans thought."
They are wrapped in Titanium.
Tested to survive 3400 Gs (Impact) and 1000°C fire for an hour.
They have a "Pinger" (ULB) that beeps underwater for 30 days.

## 2. MH370 (The Failure)
Malaysia Airlines 370 vanished in 2014.
We never found the boxes.
Why?
Because the ocean is huge and deep. The pinger battery died.
**Live Streaming?**
Why don't we stream the data like Netflix?
Cost + Bandwidth.
Streaming 1000 parameters for 100,000 flights a day via Satellite is expensive.
But after MH370, newly built planes trigger "Distress Streaming" if they detect weird attitudes.

## 3. The Tombstone Mentality
"Aviation regulations are written in blood."
We only fix things *after* people die.
*   Grand Canyon Collision (1956) -> Created the FAA and Radar.
*   Tenerife (1977) -> Fixed Pilot Hierarchy (CRM).
*   ValuJet (1996) -> Fixed Fire Detection.
The Black Box ensures that every death saves future lives.

### Fact Box
*   **The Last Words:** CVR transcripts are chilling. The most common final words are "Oh God" or simply "Shit." But often, they are purely professional, fighting the plane all the way to impact. "Pull up. Pull up."
        `,
    },
    {
        slug: "737-max-mcas-boeing",
        title: "Software that Kills: The 737 MAX",
        description: "How a single line of bad code and corporate greed crashed two brand new planes. The MCAS scandal.",
        category: "Aviation",
        publishedAt: "2024-12-04",
        imageUrl: "/images/737-max.png",
        tags: ["Aviation", "Engineering", "Disaster", "Deep Dive"],
        content: `
## Introduction: The Engine Upgrade
Boeing was losing to Airbus (A320neo).
They needed a new plane fast.
They took the old 1960s 737 frame and strapped huge new engines on it.
**The Physics Problem:**
The engines were too big. They had to mount them forward and high.
This made the plane want to pitch UP under power.
If it pitches up too much -> Stall -> Crash.

## 1. MCAS (The Band-Aid)
Instead of redesigning the plane (expensive), they added software.
**Maneuvering Characteristics Augmentation System.**
If the sensor says "Angle is too high", MCAS pushes the nose DOWN automatically.
It moves the horizontal stabilizer.
**The Fatal Flaw:**
It relied on **ONE** sensor (Angle of Attack vane).
If a bird hit that sensor...
The software thought the plane was stalling.
It slammed the nose down.
The pilots fought back. They pulled up.
MCAS fought harder. It pushed down again.
Active struggle: Man vs Machine. The Machine won.
Lion Air 610. Ethiopian 302.
346 Dead.

## 2. The Coverup
Boeing didn't put MCAS in the manual.
They didn't want pilots to need simulator training (because that costs airlines money).
"It handles just like the old 737." (Lie).
Internal emails revealed engineers mocking the FAA: "This plane is designed by clowns, who are supervised by monkeys."

## 3. The Fix
The fleet was grounded for 2 years.
The fix:
1.  Use TWO sensors. (Redundancy).
2.  Pilots can override MCAS easily.
3.  Sim training is mandatory.
It is now the most scrutinized plane in history. But the trust is broken.

### Fact Box
*   **The $2.5 Billion Fine:** Boeing paid massive fines. But nobody went to jail. The CEO (Dennis Muilenburg) was fired but walked away with $62 Million.
        `,
    },
];
