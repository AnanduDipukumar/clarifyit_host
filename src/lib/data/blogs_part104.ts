import { BlogPost } from "../blogs";

export const BLOGS_PART_104: BlogPost[] = [
    {
        slug: "circle-of-fifths-music-theory",
        title: "The Clock of Music: Circle of Fifths",
        description: "Why does C Major lead to G Major? The geometric secret behind every pop song.",
        category: "Music",
        publishedAt: "2025-08-05",
        imageUrl: "/images/circle-of-fifths.png",
        tags: ["Music", "Math", "Theory", "Deep Dive"],
        content: `
## Introduction: The Code
Music isn't random. It's Math.
Pythagoras discovered that if you pluck a string...
Then cut it in half... it sounds the same (Octave).
Then cut it by 2/3... it sounds perfect (The Fifth).
The Fifth (Do -> Sol) is the strongest relationship in music.

## 1. The Clock face
Imagine a clock.
12:00 = C Major (No sharps/flats).
Turn right (Clockwise) by a Fifth.
1:00 = G Major (1 Sharp).
2:00 = D Major (2 Sharps).
...
6:00 = F# Major (6 Sharps).
...
Turn Left (Counter-Clockwise) by a Fourth.
11:00 = F Major (1 Flat).
It maps every possible scale perfectly.
Musicians memorize this like the multiplication table.

## 2. Modulation
How do you change key smoothly?
You move to a neighbor on the clock.
C -> G is easy (Beatles do it constantly).
C -> F# is jarring (The Triton). It sounds like a horror movie.
The Circle tells you which keys are "Friends".

## 3. Negative Harmony (Jacob Collier)
If you flip the Circle on its axis...
You get "Negative Harmony".
Converting a happy song into a dark, mirror-world version.
It is an advanced jazz technique that essentially turns "Gravity" upside down.
Music theory is geometry in time.

### Fact Box
*   **Coltrane Changes:** John Coltrane drew a star inside the circle. He jumped keys by Major Thirds (C -> E -> Ab). This splits the octave into 3 equal parts. It is mathematically symmetrical and incredibly hard to play.
        `,
    },
    {
        slug: "equal-temperament-tuning-pianos",
        title: "Why Pianos are Out of Tune: Equal Temperament",
        description: "The music we hear today is a lie. We compromised perfection so we could play in all 12 keys. Bach's 'Well-Tempered Clavier' changed the world.",
        category: "Music",
        publishedAt: "2025-08-06",
        imageUrl: "/images/piano-tuning.png",
        tags: ["Music", "Math", "History", "Deep Dive"],
        content: `
## Introduction: The Wolf Interval
In "Just Intonation" (Pure Math), a Fifth is exactly 3:2 ratio (1.5).
But if you stack 12 Fifths... you don't land exactly on an Octave.
$1.5^{12} = 129.74$.
7 Octaves ($2^7$) = 128.
The difference (1.74) is the **Pythagorean Comma**.
If you tune a piano perfectly in C... it sounds awful in F#. The error accumulates in one "Wolf Interval" that howls.

## 1. The Compromise (12-TET)
To fix this, we cheated.
We took the Comma... and smashed it.
We distributed the error equally among all 12 notes.
Every Fifth is slightly flat (by 2 cents).
Every Major Third is very sharp (by 14 cents).
**Result:** Nothing is perfect. But everything is *acceptable*.
We can play in any key without retuning.
This is **12-Tone Equal Temperament**.

## 2. Bach's Propaganda
J.S. Bach wrote "The Well-Tempered Clavier".
48 Preludes and Fugues. In *every* key.
He wanted to prove: "Look! With this new tuning, I can play in C# and it doesn't sound like dying cats!"
It became the standard for Western Music.

## 3. Microtonal Music
Other cultures (Indian, Arabic) didn't compromise.
They use "Just Intonation" (Pure intervals).
But they use drones, not chord changes.
Or they use 24 tones, or 53 tones.
To a Western ear, they sound "Out of Tune".
To them, Western pianos sound "Harsh and restless".

### Fact Box
*   **Barbershop Quartets:** Singers naturally adjust their pitch to lock into "Just Intonation" chords. That's why Barbershop chords "Ring" so loudly. The overtones lineup perfectly. Pianos can't do this.
        `,
    },
    {
        slug: "polyrhythms-3-against-4",
        title: "Drumming in 4D: Polyrhythms",
        description: "Your hands play 3 beats. Your feet play 4 beats. Your brain melts. The African roots of complex rhythm.",
        category: "Music",
        publishedAt: "2025-08-07",
        imageUrl: "/images/polyrhythm.png",
        tags: ["Music", "Math", "Rhythm", "Deep Dive"],
        content: `
## Introduction: Pass the Butter
Simple rhythm: 1, 2, 3, 4.
Polyrhythm: Two different pulses at once.
3 against 2 (Hemiola).
Left Hand: 1, 2.
Right Hand: 1, 2, 3.
Combined: **"Not Difficult"**. (Dum... da-da... Dum).

## 1. 4 against 3
Right Hand plays 4.
Left Hand plays 3.
Mnemonic: **"Pass the God-damn Butter"**.
This creates a rolling, circular feel.
It is the backbone of African drumming and Modern Jazz (Elvin Jones).

## 2. Phase Shifting (Steve Reich)
What happens if two drummers play the *same* beat... but one speeds up slightly?
They go out of phase.
The beats clash, then align in new patterns.
It creates a "Moire Pattern" of sound.
Minimalist music uses this to create trance states.

## 3. Tool (The Band)
The song "Lateralus".
The time signatures follow the Fibonacci Sequence.
9/8, 8/8, 7/8.
Danny Carey (Drummer) plays 7 against 3.
It is math metal.
But it grooves. That's the secret. Polyrhythms shouldn't sound like math; they should sound like a river with multiple currents.

### Fact Box
*   **Metric Modulation:** You take the "3" of the polyrhythm and make it the new "1". The tempo changes instantly without stopping. The audience feels like the floor dropped out. Elliot Carter invented it. Meshuggah perfected it.
        `,
    },
    {
        slug: "tricone-devil-interval",
        title: "The Devil's Interval: The Tritone",
        description: "Three whole steps. The most dissonant sound in music. The Catholic Church banned it (supposedly). It defines Heavy Metal.",
        category: "Music",
        publishedAt: "2025-08-08",
        imageUrl: "/images/tritone.png",
        tags: ["Music", "History", "Metal", "Deep Dive"],
        content: `
## Introduction: Diabolus in Musica
Play C and F# together.
It creates a tension that demands resolution.
It splits the octave perfectly in half.
In the Middle Ages, strict counterpoint rules avoided it.
Myth: "The Church executed you for playing it."
Reality: "The Church just thought you were a bad composer."

## 1. The Blues (and The Simpsons)
The Tritone is the "Blue Note".
In a Blues scale, you slide into it. It gives the music grit and pain.
**The Simpsons Theme:**
"The Simp - sons".
That interval is a Tritone.
"Ma - ri - a" (West Side Story). Tritone.
It is everywhere.

## 2. Black Sabbath
1970. Tony Iommi.
He slowed down the Blues. He leaned on the Tritone.
The song "Black Sabbath".
Use the interval... pause... let it ring.
Heavy Metal was born.
The "Evil" sound comes from the mathematical instability of the frequency ratio ($1:\sqrt{2}$).

## 3. Function (Dominant 7th)
Why do we need it?
To drive the music home.
The G7 chord (G-B-D-F) contains a Tritone (B-F).
This tension *pulls* violently towards C Major.
Without the Tritone, music would wander aimlessly. The Tritone is the engine of tension and release.

### Fact Box
*   **Sirens:** European Police sirens typically use a Tritone (or close to it). Why? Because it is the most annoying/alarming sound possible. It cuts through traffic noise because the brain cannot ignore the dissonance.
        `,
    },
    {
        slug: "432hz-440hz-conspiracy",
        title: "The Frequency Conspiracy: 432Hz vs 440Hz",
        description: "Did the Nazis tune our instruments to 440Hz to make us aggressive? Why internet hippies want to retune the world.",
        category: "Music",
        publishedAt: "2025-08-09",
        imageUrl: "/images/tuning-fork.png",
        tags: ["Music", "Conspiracy", "Physics", "Deep Dive"],
        content: `
## Introduction: A = 440
Go to an orchestra. The Oboe plays an "A". Everyone tunes to it.
That A is vibrating 440 times a second.
ISO Standard 16 (adopted 1955).

## 1. The 432Hz Cult
Search Youtube for "432Hz Healing".
Claim: 432Hz is the "Natural Frequency of the Universe".
Relation to Pi? Golden Ratio? Heart Chakra?
Claim: 440Hz causes aggression and spiritual suppression.
Claim: Goebbels (Nazis) forced 440Hz on Europe.
**Reality:**
Most of this is pseudoscience bunk.
Joseph Goebbels had nothing to do with it. The Americans pushed 440Hz because it was a round number for calculations.

## 2. History of A
Mozart tuned to A=421.
Beethoven tuned to A=455.
Pitch Inflation: Opera houses tuned higher to make singers sound more "Brilliant".
Singers complained their throats were bleeding.
So the French Gov passed a law: A=435 (Diapason Normal).
The British defined A=439 (because of temperature physics).
Finally, 440 was a compromise.

## 3. Does it matter?
If you play a song at 432Hz (pitch it down), it sounds warmer, darker, slower.
People like it.
But not because of magic geometry.
Because it is lower.
Lower frequencies are more relaxing.
Higher frequencies are more exciting.
Tune your guitar to whatever you want. The universe doesn't care.

### Fact Box
*   **Cymatics:** 432Hz proponents show pictures of water vibrating on a speaker. "Look! Beautiful patterns at 432!" Yes, but if you change the size of the bowl, you get beautiful patterns at 440 too. It's about the bowl (Resonance), not the frequency number.
        `,
    },
];
