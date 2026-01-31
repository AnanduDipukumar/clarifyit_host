import { BlogPost } from "../blogs";

export const BLOGS_PART_307: BlogPost[] = [
    {
        slug: "mcgurk-effect-brain-illusion",
        title: "Your Eyes Lie to Your Ears: The McGurk Effect",
        description: "Watch a video of a man saying 'Ba-Ba'. It sounds like 'Ba'. Now the video changes mouths to 'Fa'. You hear 'Fa'. But the audio never changed.",
        category: "Psychology",
        publishedAt: "2028-01-04",
        imageUrl: "/images/mcgurk-mouth.png",
        tags: ["Psychology", "Illusion", "Brain", "Ultimate Guide"],
        content: `
## Introduction: Sensory Fusion
We think our senses are independent.
Eyes see. Ears hear.
Wrong.
The brain is a "Best Guess" machine.
When senses conflict, the brain votes.
And **Vision** usually wins.

## 1. The Experiment
1.  **Audio:** A recording of a man saying "Ba-Ba-Ba".
2.  **Video:** A video of a man mouthing "Fa-Fa-Fa".
3.  **Result:** You hear "Fa-Fa-Fa".
Even if you *know* it's an illusion, you can't un-hear it.
If you close your eyes, you instantly hear "Ba-Ba-Ba" again.
Open them, it switches back.

## 2. Why?
Speech perception is multimodal.
We unconsciously lip-read.
"Ba" requires lips to close. "Fa" requires teeth on lip.
If the brain sees teeth-on-lip, it says: "The ear must be wrong. The sound is noisy. The eye is HD. I trust the eye."
It literally *overwrites* the raw audio data in your auditory cortex.
You are hallucinating the sound "Fa".

## 3. Implications
This is why talking on the phone is hard in a noisy room, but talking face-to-face is easy.
This is why bad lip-syncing in movies feels "Uncanny".
Your brain is constantly stitching reality together in post-production.

> **One-Minute Summary**
>
> The **McGurk Effect** demonstrates that hearing is not purely an auditory process. When visual speech cues (lip movements) conflict with auditory signals, the brain prioritizes vision, creating a fused perception. This proves that our experience of reality is a constructed simulation, not a direct feed.
        `,
    },
    {
        slug: "shepard-tone-auditory-illusion",
        title: "The Sound That Rises Forever: Shepard Tone",
        description: "An audio illusion that sounds like it is constantly getting higher and higher in pitch, but never actually goes anywhere. Used by Christopher Nolan to create anxiety.",
        category: "Psychology",
        publishedAt: "2028-01-05",
        imageUrl: "/images/shepard-tone.png",
        tags: ["Psychology", "Music", "Illusion", "Ultimate Guide"],
        content: `
## Introduction: The Barber Pole
Imagine a Barber Pole. The red stripes go up forever. But the pole never moves.
The **Shepard Tone** is the audio equivalent.
It creates a feeling of infinite tension.
Hans Zimmer used it in the soundtrack for *Dunkirk* to make the audience feel stressed for 2 hours straight.

## 1. How to make it
You layer three sine waves separated by octaves.
1.  **High Pitch:** Fades out as it goes up.
2.  **Middle Pitch:** Loudest.
3.  **Low Pitch:** Fades in as it starts.
As the High pitch disappears off the top, the Low pitch sneakily enters at the bottom.
Your brain latches onto the Middle pitch (which is rising).
It fails to notice the switch.

## 2. The Anxiety Engine
Why does it scare us?
Because in nature, a rising pitch means "Something is coming" or "Energy is building" (A kettle boiling, a scream, an engine revving).
A Shepard Tone taps into our primal "Fight or Flight" system.
It creates anticipation that is never resolved.

## 3. Super Mario 64
In *Super Mario 64*, the "Endless Stairs" used a Shepard Tone.
You ran up the stairs. The music got faster and higher.
But you never reached the top.
It was the perfect auditory metaphor for the infinite loop.

> **One-Minute Summary**
>
> The **Shepard Tone** is an auditory illusion created by superimposing sine waves in octaves. By fading the highest pitch out while fading a new low pitch in, it tricks the brain into perceiving a pitch that continually ascends but remains centered. Filmmakers use it to generate subconscious anxiety and tension.
        `,
    },
    {
        slug: "yanny-vs-laurel-frequency",
        title: "Yanny or Laurel? The Frequency War",
        description: "In 2018, the internet broke. Half the world heard 'Yanny'. Half heard 'Laurel'. It wasn't a hoax. It was a hearing test.",
        category: "Psychology",
        publishedAt: "2028-01-06",
        imageUrl: "/images/yanny-laurel.png",
        tags: ["Psychology", "Viral", "Physics", "Ultimate Guide"],
        content: `
## Introduction: The Civil War
A grainy audio clip.
"What do you hear?"
People got angry. "It's clearly Yanny! Are you deaf?"
"It's Laurel! You're crazy."
This wasn't like the Dress (visual). This was auditory.

## 1. The Physics (High vs Low)
The recording contained **Both** names.
They were mixed together at different frequencies.
*   **Yanny:** Generally higher frequencies (above 1000 Hz).
*   **Laurel:** Generally lower frequencies (below 1000 Hz).
It was a "Bistable Illusion".

## 2. Why the split?
1.  **Hardware:** Cheap phone speakers (tiny) play Highs well (Yanny). Good headphones (bass) play Lows well (Laurel).
2.  **Age:** Older people lose high-frequency hearing first (Presbycusis). They were more likely to hear Laurel.
3.  **Priming:** If you read the word "Yanny" first, your brain tuned into that frequency band.

## 3. Brain Tuning
Your brain is an equalizer.
You can't pay attention to all frequencies at once.
Once your brain "Latches" onto Yanny, it suppresses the Laurel frequencies as noise.
That's why it's hard to switch.
But if you pitch-shift the audio up or down, you can force the switch.

> **One-Minute Summary**
>
> The **Yanny/Laurel** illusion occurred because the audio clip contained acoustic features of both words blended at different frequencies. "Yanny" occupied the high treble, while "Laurel" occupied the bass. Your equipment quality and your age (hearing loss) determined which frequency band your brain prioritized.
        `,
    },
    {
        slug: "ames-room-perspective-illusion",
        title: "The Giant and the Dwarf: The Ames Room",
        description: "You look through a peephole. A person walks from the left corner to the right corner. They shrink to half their size. How Lord of the Rings filmed hobbits.",
        category: "Psychology",
        publishedAt: "2028-01-07",
        imageUrl: "/images/ames-room.png",
        tags: ["Psychology", "Illusion", "Geometry", "Ultimate Guide"],
        content: `
## Introduction: Forced Perspective
We assume rooms are boxes.
Parallel walls. 90 degree corners. Flat floor.
The **Ames Room** (invented by Adelbert Ames Jr. in 1946) breaks this assumption.

## 1. The Geometry
The room is a trapezoid.
*   **Left Corner:** Far away and ceiling is high.
*   **Right Corner:** Very close and ceiling is low.
But... the floor is tiled in a checkered pattern that is warped to *look* square from exactly one point (the peephole).
The windows are trapezoids that *look* square.

## 2. The Assumption
Your brain has two choices:
A) The person is changing size. (Impossible).
B) The room is a weird shape. (Unlikely).
Result: The Brain rejects B.
"Rooms are always square."
It chooses A. "The person must be shrinking."
It sacrifices logic to preserve its model of the environment.

## 3. Hollywood Magic
Peter Jackson used this for *Lord of the Rings*.
When Gandalf sits at a table with Frodo.
Frodo is sitting 3 feet further back than Gandalf.
But the table is cut in a trapezoid shape so it looks square to the camera.
Gandalf looks huge. Frodo looks tiny. No CGI needed.

> **One-Minute Summary**
>
> The **Ames Room** is a distorted trapezoidal room designed to look like a normal cubic room when viewed from a specific angle. Because the brain rigidly assumes that walls are parallel and floors are flat, it perceives people moving within the room as growing or shrinking in size, prioritizing the stability of the environment over the stability of the object.
        `,
    },
    {
        slug: "troxler-effect-fading-colors",
        title: "Stare at the Dot: The Troxler Effect",
        description: "Stare at the center of a fuzzy image for 20 seconds. The colors disappear. The page turns white. Your brain deletes reality.",
        category: "Psychology",
        publishedAt: "2028-01-08",
        imageUrl: "/images/troxler-fading.png",
        tags: ["Psychology", "Eyes", "Illusion", "Ultimate Guide"],
        content: `
## Introduction: Neural Adaptation
Local News: "Terrorists put a bomb under your chair!"
Your Nervous System: "Panic!"
10 minutes later: "It's still there."
1 hour later: "Whatever."
Neurons stop firing if the stimulus doesn't change.
This is **Neural Adaptation**.
You don't feel your socks. You don't smell your own house.

## 1. Visual Adaptation
Your eyes crave change.
They constantly jitter (Microsaccades) to refresh the image.
But... if you stare *intently* at a fuzzy object (low contrast)...
The neurons in your retina get tired (fatigued).
They stop sending the "Purple" signal.
The brain fills in the blank space with the background color (White).
The object vanishes.

## 2. The Bloody Mirror
This explains the "Bloody Mary" ghost story.
Dim light (bathroom). Stare into a mirror for 10 minutes.
Your face starts to melt.
Features disappear (Troxler Effect).
Your brain panics and hallucinates scary faces to fill the void.
It's not a ghost. It's retinal fatigue.

> **One-Minute Summary**
>
> The **Troxler Effect** is a visual phenomenon where objects in the peripheral vision fade and disappear when one fixates on a central point for several seconds. It is caused by **Neural Adaptation**—the tendency of neurons to stop responding to unchanging stimuli. Since the image is stabilized on the retina, the brain deems it irrelevant and "deletes" it.
        `,
    },
];
