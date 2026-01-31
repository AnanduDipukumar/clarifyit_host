import { BlogPost } from "../blogs";

export const BLOGS_PART_406: BlogPost[] = [
    {
        slug: "tenerife-disaster-crm-deep-dive",
        title: "The Deadliest Day in Aviation: The Tenerife Disaster",
        description: "583 people died on a runway in the Canary Islands. It wasn't a mechanical failure. It was a failure of language, ego, and protocol. This crash created modern aviation safety.",
        category: "History",
        publishedAt: "2029-05-13",
        imageUrl: "/images/tenerife-crash.png",
        tags: ["History", "Aviation", "Safety", "Deep Dive"],
        content: `
## Introduction: The Perfect Storm
Disasters are rarely one thing. They are a chain.
To get Tenerife, you needed:
1.  **Terrorism:** A bomb at Gran Canaria diverted all flights to Los Rodeos (Tenerife), a tiny airport not built for 747s.
2.  **Weather:** A thick fog blanketed the runway (visibility 300m).
3.  **Radio:** The tower was overwhelmed.
4.  **Ego:** Captain Jacob Veldhuyzen van Zanten (KLM) was the airline's poster boy. He was in a rush to beat duty-time limits.

---

## 2. The Collision
**KLM 4805** and **Pan Am 1736** were both taxiing on the one runway.
KLM reached the end and turned around.
Pan Am was still on the runway, looking for the exit (C3), but missed it in the fog.
Captain Van Zanten throttled up for takeoff.
**Co-Pilot:** "Wait, is he not clear, that Pan Am?"
**Van Zanten:** "Oh, yes." (Confident dismissal).

At 150 knots, KLM saw Pan Am in front of them.
Van Zanten pulled back on the stick so hard the tail scraped the tarmac (tailstrike).
He tried to jump over the Pan Am.
He almost made it.
The landing gear clipped the top of the Pan Am fuselage.
**Boom.**
KLM crashed and exploded. Pan Am was sliced open and caught fire.
583 dead. 61 survivors (all from Pan Am).

---

## 3. The Legacy: CRM
Before this, the Captain was God.
If the Captain made a mistake, the Co-Pilot stayed silent out of respect/fear.
After Tenerife, **Crew Resource Management (CRM)** was born.
Rule: **"If you see something, say something."**
Junior pilots are now trained to challenge the Captain.
"Captain, I am uncomfortable. We must abort."

### Language Standardization
The KLM pilot said: "We are at takeoff."
The Tower thought he meant: "We are sitting AT the takeoff position."
The Pilot meant: "We are TAKING OFF."
Now, the phrase "Takeoff" is banned until the actual clearance is given.
Pilots must say "Ready for departure."

---

## FAQ
**Q: Could they have stopped?**
A: If the radio hadn't heterodyned (squealed) when Pan Am tried to warn them, KLM might have heard "We are still on the runway." That squeal cost 583 lives.
        `,
    },
    {
        slug: "gimli-glider-math-error",
        title: "The Gimli Glider: When Math Almost Killed 69 People",
        description: "Air Canada Flight 143 ran out of fuel at 41,000 feet. The reason? They calculated the fuel in Pounds, but the new plane used Kilograms. This is the story of the greatest glide in history.",
        category: "History",
        publishedAt: "2029-05-14",
        imageUrl: "/images/gimli-glider.png",
        tags: ["History", "Aviation", "Math", "Deep Dive"],
        content: `
## Introduction: The Metric Switch
1983. Canada was switching to the Metric system.
The Boeing 767 was the first "Metric Plane".
The Fuel Quantity Information System (FQIS) was broken (blank screen).
So they had to use "Drip Sticks" to measure fuel manually.
They measured 11,525 Liters.
They needed to convert Liters to Weight (Kg) to know if they had enough.
The density of jet fuel is **1.77 lbs/liter**.
They *should* have used **0.8 kg/liter**.
They did the math with 1.77.
They thought they had 22,300 kg. They actually had 10,000 kg.
They took off with half a tank.

---

## 2. The Silence
Over Red Lake, Ontario, the warning chime sounded.
**Left Engine Failed.**
Then: **Right Engine Failed.**
The cockpit went dark (Glass cockpit needs power).
The Ram Air Turbine (RAT) popped out—a little propeller to generate emergency electricity.
Pilot **Bob Pearson** was a glider enthusiast.
He realized he had one shot.
"Gimli Air Force Base is 12 miles away."

## 3. The Drag Race
Gimli was no longer an airport. It was a race track.
It was "Family Day". Kids, campers, Go-Karts were on the runway.
The plane approached silently.
No one heard it until it was right on top of them.
Pearson performed a **Forward Slip** (flying sideways) to lose altitude without gaining speed.
He slammed it down.
The nose gear collapsed (which was good—it acted as a brake).
The plane ground to a halt 100 feet from the campers.
0 Fatalities.

---

## Conclusion
The "Gimli Glider" was repaired and flew for another 25 years.
It serves as a stark warning about **Units of Measurement**.
(NASA lost a Mars Orbiter in 1999 for the same reason).
        `,
    },
    {
        slug: "helios-522-ghost-flight",
        title: "The Ghost Flight: Helios 522",
        description: "F-16 pilots flew alongside the Boeing 737. They looked inside. The pilot was missing. The co-pilot was slumped over. Oxygen masks were dangling. The plane flew on for 3 hours with everyone asleep.",
        category: "History",
        publishedAt: "2029-05-15",
        imageUrl: "/images/helios-522-f16.png",
        tags: ["History", "Aviation", "Deep Dive"],
        content: `
## Introduction: Hypoxia
At 30,000 feet, you have 15 seconds of "Useful Consciousness" without oxygen.
After that, you don't choke. You get euphoric.
You feel happy. You feel warm.
Then you pass out.
Then you die.

### The Switch
Engineers had tested the pressurization system on the ground.
They set the switch to **MANUAL**.
They forgot to set it back to **AUTO**.
The pilots missed it on the checklist.
As the plane climbed, the air left the cabin.
The "Cabin Altitude" alarm went off.
The pilots thought it was a "Takeoff Configuration" alarm (they sound the same).
They were confused. Their brains were starving.

---

## 2. The Interception
Greek F-16s were scrambled.
They saw a ghost ship.
In the cabin, passengers were frozen, unconscious.
But they saw movement in the cockpit.
**Andreas Prodromou**, a flight attendant, was entering.
He had a portable oxygen tank.
He was trying to save the plane.
He waved weakly at the F-16 pilot.
But the engines flamed out.
The plane crashed into a hill. 121 dead.

## Conclusion
It is the most haunting disaster in modern times.
It proved that "Checklists are written in blood."
If they had just flipped one switch, everyone would have lived.
        `,
    },
    {
        slug: "erebus-disaster-whiteout-illusion",
        title: "The Erasure of Flight 901: Mount Erebus",
        description: "Air New Zealand offered 'Sightseeing Flights' to Antarctica. Champagne, lobster, and glaciers. But a data entry error sent Flight 901 strictly into the side of a volcano.",
        category: "History",
        publishedAt: "2029-05-16",
        imageUrl: "/images/erebus-crash.png",
        tags: ["History", "Aviation", "Antarctica", "Deep Dive"],
        content: `
## Introduction: The Coordinate Change
Pilots were given a flight plan.
It took them down McMurdo Sound (safe, flat ice).
The night before flight, navigation updated the coordinates in the computer.
They moved the track 27 miles east.
Directly over **Mount Erebus** (12,000 ft volcano).
Nobody told the pilots.

### Sector Whiteout
The pilot, Jim Collins, looked out the window.
He saw white snow below. He saw white clouds above.
Between them, the air was clear.
He thought he was seeing the flat ice of McMurdo Sound efficiently stretching to the horizon.
Actually, he was looking at the white slope of the mountain.
Without shadows, the mountain was invisible.
**"Terrain! Pull Up!"**
Smash.

---

## 2. The Controversy
Air New Zealand said: "Pilot Error. He flew too low."
They shredded documents. They hid the coordinate change.
Justice Peter Mahon led the inquiry.
He delivered a blistering verdict:
"The airline's defense is an orchestrated litany of lies."
It remains New Zealand's Titanitc.

---

## FAQ
**Q: Were the bodies recovered?**
A: Most were. It was a horrific job for the recovery team (frozen bodies, skuas eating them). It caused massive PTSD for the police officers involved.
        `,
    },
    {
        slug: "payne-stewart-hypoxia",
        title: "The Sleep of Death: The Payne Stewart Crash",
        description: "The golf legend boarded a Learjet in Florida. He was heading for Dallas. He ended up in South Dakota. The plane flew silently across America with a dead crew.",
        category: "History",
        publishedAt: "2029-05-17",
        imageUrl: "/images/learjet-flight-path.png",
        tags: ["History", "Aviation", "Deep Dive"],
        content: `
## Introduction: Rapid Decompression
We don't know exactly what broke.
A seal? A valve?
But the cabin pressure dumped instantly.
The emergency oxygen system on older Learjets required a manual pull.
If the pilots were stunned or passed out in seconds, they couldn't reach it.

### The Flight
ATC called: "Learjet 35, acknowledge."
Silence.
The plane climbed to 40,000 feet and stayed there on autopilot.
F-16s were sent up.
The pilots reported: "Windows are frosted. No movement."
The world watched on CNN as the "Ghost Plane" flew for 4 hours.
Eventually, fuel ran out.
It spiraled down at near-supersonic speed.
It left a crater 10 feet deep.

## Conclusion
It changed the rules for private jets.
Automated emergency descent systems are now standard.
If cabin pressure drops, the plane automatically dives to safe altitude (10,000 ft) where you can breathe.
        `,
    }
];
