import { BlogPost } from "../blogs";

export const BLOGS_PART_70: BlogPost[] = [
    {
        slug: "doppler-effect-redshift",
        title: "The Sound of Speed: The Doppler Effect",
        description: "Neee-ooowww. Why does a racecar sound high-pitched coming towards you and low-pitched going away? The physics that helps us find planets.",
        category: "Acoustics",
        publishedAt: "2025-02-14",
        imageUrl: "/images/doppler-car.png",
        tags: ["Acoustics", "Physics", "Space", "Deep Dive"],
        content: `
## Introduction: The Ambulance Siren
You are standing on a street corner. An ambulance screams towards you.
*WHEEE...* (High Pitch).
It passes you.
*...OOOOW.* (Low Pitch).
The driver doesn't hear the change. To him, the siren is constant.
Only the observer hears the shift.
This is the **Doppler Effect**, discovered by Christian Doppler in 1842.
It applies to sound, light, and even water waves. It is the reason we know the universe is expanding.

## 1. The Physics: Crushing the Wave
Sound is a wave. A series of air pressure pulses.
A siren emitted at 1000 Hz creates 1000 pulses per second.
**Moving Towards You:**
The ambulance drives forward.
It emits Pulse 1. Then it drives *towards* Pulse 1 and emits Pulse 2.
The distance between the pulses gets squashed.
Shorter Wavelength = Higher Frequency = Higher Pitch.
**Moving Away:**
It emits Pulse 1. It drives *away* and emits Pulse 2.
The gap stretches out.
Longer Wavelength = Lower Frequency = Lower Pitch.

## 2. Breaking the Barrier (Sonic Boom)
What if the ambulance drives *faster* than sound (767 mph)?
It catches up to its own sound waves.
The waves pile up on top of each other at the nose of the vehicle.
This creates a **Shockwave** of infinite pressure.
When this wall of air hits you, you hear a **Sonic Boom**.
Inside the plane (or car, like the Thrust SSC), it is silent. You are outrunning your own noise. The boom is dragged behind you like a wake.

## 3. Redshift (Cosmic Doppler)
Light is also a wave.
Blue light has short waves. Red light has long waves.
If a star moves towards us, its light gets squashed (Blueshift).
If a star moves away, its light gets stretched (Redshift).
**Edwin Hubble (1929):**
He looked at distant galaxies.
They were all Redshifted.
Conclusion: Everything is moving away from us.
The Universe is expanding. The Big Bang happened.
Doppler gave us the history of creation.

## 4. Doppler Radar (Weather and Cops)
How does a cop know you were speeding?
He shoots a radar gun (Radio waves) at your car.
The wave bounces off your bumper and returns.
If you are moving towards him, the return wave is squashed (Higher Frequency).
The gun measures the difference ($\Delta f$) and calculates speed instantly.
**Weather:**
Doppler Radar sees rain.
By measuring the shift, it sees if the rain is blowing *towards* or *away* from the tower.
This detects **Result:** Rotation inside clouds = Tornado Warning.

### Fact Box
*   **The Exoplanet Hunter:** We find planets around other stars using Doppler. As a planet orbits a star, its gravity tugs the star slightly. The star wobbles back and forth. We see the star's light Redshift/Blueshift every few days. The "Wobble Method".
        `,
    },
    {
        slug: "noise-cancellation-headphones",
        title: "Silence by Math: How Noise Cancellation Works",
        description: "1 + (-1) = 0. You can delete sound by adding anti-sound. The technology inside your AirPods.",
        category: "Acoustics",
        publishedAt: "2025-02-15",
        imageUrl: "/images/anc-headphones.png",
        tags: ["Acoustics", "Tech", "Math", "Deep Dive"],
        content: `
## Introduction: The Anti-Wave
Sound is air pressure. Positive (Push) and Negative (Pull).
If you have a wave going UP (+1), and you seamlessly add a wave going DOWN (-1)...
What do you get?
**Silence.**
Destructive Interference.
This is Active Noise Cancellation (ANC).
It sounds like magic, but it is pure math.

## 1. The Feedback Loop
Inside the ear cup is a microphone.
It listens to the engines of the airplane (humming at 100 Hz).
The chip in the headphone inverts the signal phase (flips it upside down).
It plays this "Anti-Noise" through the speaker *at the exact same time* the engine noise hits your ear.
**Latency is Key:**
If the chip is too slow, the anti-noise arrives late.
Instead of cancelling, it might add to the noise (Constructive Interference).
It must process audio in microseconds.

## 2. Feedforward vs Feedback
*   **Feedback:** Mic is inside the ear cup. Corrects what you hear. Accurate but slow.
*   **Feedforward:** Mic is on the *outside* of the cup. It hears the noise *before* it gets to your ear. It predicts what to cancel. Faster, but vulnerable to wind noise.
*   **Hybrid:** Uses both. Modern Sony/Apple headphones use massive compute power to blend both signals.

## 3. Passive vs Active
*   **Passive Isolation:** Earplugs. Foam. They block High Frequencies (Voices, Screeching) well. They block Low Frequencies (Bass) poorly. Bass travels through solids (your skull).
*   **Active (ANC):** Great at Low Frequencies (Engine drone, AC hum). Terrible at sudden, sharp sounds (Gunshot, Clap).
Why? Because a drone is predictable. A clap changes too fast for the chip to generate an anti-wave.

## 4. The Transparency Mode
The irony.
We spent 50 years making headphones isolate us.
Now we want to hear.
Transparency mode uses the external mics to record the world and play it into your ear.
But it processes it.
It can amplify voices while suppressing wind.
It is "Augmented Reality" for your ears.
**Hearing Aids:**
Apple AirPods Pro act as FDA-approved hearing aids. They boost frequencies you are deaf to. It is democratizing medical tech.

### Fact Box
*   **The Silence of the Chamber:** In an Anechoic Chamber (99.9% sound absorption), it is so quiet you can hear your own blood pumping and your eyelids squeaking. Most people hallucinate within 30 minutes. Absolute silence is terrifying to the brain.
        `,
    },
    {
        slug: "anechoic-chamber-silence",
        title: "The Quietest Place on Earth: Anechoic Chambers",
        description: "A room with no echoes. No reflections. Just pure, dead sound. Used to test iPhones and drive people crazy.",
        category: "Acoustics",
        publishedAt: "2025-02-16",
        imageUrl: "/images/anechoic-wedges.png",
        tags: ["Acoustics", "Engineering", "Psychology", "Deep Dive"],
        content: `
## Introduction: -20 Decibels
The background noise of a library is 30 dB.
A quiet bedroom is 20 dB.
The Microsoft Audio Lab (Building 87) holds the record: **-20.6 dB**.
It is below the threshold of human hearing (0 dB).
It is quieter than the random motion of air molecules bumping into each other (Brownian Motion).
If you stand there, you become the loudest thing in the room.

## 1. The Wedges
The walls are lined with 4-foot deep fiberglass wedges.
Why wedges?
If a sound wave hits a flat wall, it bounces back (Echo).
If it hits a wedge, it bounces *into* the wedge, then into another wedge, deeper and deeper.
The friction converts the sound energy into heat.
It absorbs 99.99% of sound frequencies.
**The Floor:**
There is no floor. You walk on a steel mesh net suspended over more wedges.
It feels like floating in space.

## 2. Testing Tech
Why do we build these expensive rooms ($5 Million)?
To test **Direct Sound**.
If you test an iPhone speaker in a normal room, the microphone hears the speaker + the reflection off the table + the reflection off the wall.
The data is messy.
In an Anechoic chamber, you hear *purely* the speaker.
Engineers map the "Polar Response": Does the sound go forward or sideways?
They test fan noise on Xboxes. They test the hum of transformers.

## 3. The Psychological Torture
The legend says: "No one can survive 45 minutes."
It's true that it is disorienting.
We rely on reflections for balance (Echolocation).
In the chamber, your "Spatial Awareness" dies. You feel dizzy (Vertigo).
You hear your internal body:
*   Heartbeat: *Thump-Thump*.
*   Stomach: *Gurgle*.
*   Joints: *Creak*.
*   Blood in ears: *Whooshing*.
You become the noise.

### Fact Box
*   **Reverb Chamber:** The opposite. A room with polished concrete walls designed to echo forever (RT60 = 10 seconds). Used to test how loud noises build up, like in a missile silo launch.
        `,
    },
    {
        slug: "ultrasound-medical-imaging",
        title: "Seeing with Sound: How Ultrasound Works",
        description: "Bats knew it first. We use high-frequency screams to see babies in the womb and hunt for submarines. Sonar explained.",
        category: "Acoustics",
        publishedAt: "2025-02-17",
        imageUrl: "/images/ultrasound-baby.png",
        tags: ["Acoustics", "Medicine", "Physics", "Deep Dive"],
        content: `
## Introduction: Echolocation
If you shout in a canyon, you hear an echo.
Distance = (Time * Speed of Sound) / 2.
Bats send "Clicks" and listen for echoes to find moths.
Dolphins visualize fish with sound.
We call it **Sonar** (Sound Navigation Ranging).
In medicine, we call it **Ultrasound**.

## 1. The Piezoelectric Crystal
How do we make the sound?
The probe (Transducer) contains a Quartz or PZT crystal.
**Piezoelectricity:**
*   Apply Voltage -> Crystal vibrates (Speaker).
*   Vibrate Crystal -> Crystal makes Voltage (Microphone).
The probe does both.
It shouts a pulse (Transmission).
Then it goes silent and listens for the echo (Receive).
It repeats this thousands of times a second.

## 2. Acoustic Impedance
Why do we need the cold jelly?
Sound travels well in water (body). It travels poorly in air.
The interface between Air (Probe surface) and Skin is a massive mismatch.
99% of the sound would bounce off the skin.
The **Gel** excludes the air. It matches the density of the skin.
It is an "Acoustic Coupler".
**Shadows:**
Bone is dense. It reflects sound strongly (White on screen).
Fluid (Bladder) is clear. It lets sound through (Black).
We look for the boundaries.

## 3. The Doppler Mode
Doctors press a button and hear the *Whoosh-Whoosh* of the heart.
And see colors (Red/Blue).
This is Doppler Ultrasound.
It measures the speed of red blood cells.
*   **Red:** Blood flowing *towards* the probe.
*   **Blue:** Blood flowing *away*.
This detects clogged arteries or leaky heart valves non-invasively.

## 4. HIFU (High Intensity Focused Ultrasound)
We can use sound as a knife.
New therapy for prostate cancer.
Focus multiple beams of high-energy ultrasound on a single point (the tumor).
The constructive interference heats the tissue to 80°C.
It cooks the tumor inside the body without cutting the skin.
"Acoustic Surgery".

### Fact Box
*   **Kidney Stones:** Lithotripsy uses shockwaves (focused sound) to shatter kidney stones into sand so you can pass them. It saves thousands of surgeries a year.
        `,
    },
    {
        slug: "speed-of-sound-mach-number",
        title: "Breaking the Barrier: Chuck Yeager and Mach 1",
        description: "Engineers thought it was a solid wall. At 760mph, controls froze and planes shook apart. How we punched through the Sonic Barrier.",
        category: "Acoustics",
        publishedAt: "2025-02-18",
        imageUrl: "/images/bell-x1.png",
        tags: ["Acoustics", "History", "Aviation", "Deep Dive"],
        content: `
## Introduction: The Demon in the Sky
In WW2 (1945), props planes diving fast started encountering the "Compressibility" problem.
As air moves over the wing, it speeds up.
Even if the plane is going Mach 0.8, the air *over the wing* hits Mach 1.0.
Shockwaves form.
The controls reverse (pull up = go down).
The tail shakes violently.
Pilots died. They called it "The Sound Barrier". Many physicists said it was impenetrable. A solid wall of air.

## 1. The Bell X-1 (1947)
The shape.
Normal planes had thick, curved wings (Low Speed lift).
The X-1 was shaped like a **50. Caliber Bullet**. Thin wings. Sharp nose.
It had a rocket engine (XLR-11).
**Chuck Yeager:**
He had broken ribs from falling off a horse. He hid it. He used a broomstick to close the hatch because he couldn't lift his arm.
He dropped from a B-29. Lit the rockets.
**Mach 1.06:**
There was no explosion. The shaking stopped. The ride smoothed out.
He had outrun the shockwave. The barrier was broken.
The "Boom" was heard on the desert floor, scaring the jackrabbits.

## 2. Area Rule (Why fighters have coke-bottle waists)
Early jets struggled to pass Mach 1. Too much drag.
Richard Whitcomb (NASA) discovered the **Area Rule**.
To the air, the plane should act like a smooth tube.
Where the wings stick out, the fuselage should get *thinner* to compensate.
This "Wasp Waist" or "Coke Bottle" shape reduces transonic drag by 50%.
Check an F-18. It pinches in at the middle.

## 3. The Concorde Limit
Why don't we fly Mach 5?
**Heat.**
Friction heats the air.
Mach 2 (Concorde): Nose tip hits 127°C. (Aluminum is fine).
Mach 3 (SR-71): 300°C. (Need Titanium).
Mach 5 (Hypersonic): 1000°C. (Need Ceramics/Unobtainium).
The barrier isn't sound anymore. It's Thermodynamics.

### Fact Box
*   **The Bullwhip:** The first man-made object to break the sound barrier wasn't a plane. It was the whip. The crack of a whip is the tip moving faster than Mach 1 (767 mph), creating a mini sonic boom.
        `,
    },
];
