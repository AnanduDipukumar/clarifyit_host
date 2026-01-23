import { BlogPost } from "../blogs";

export const BLOGS_PART_64: BlogPost[] = [
    {
        slug: "fast-inverse-square-root-quake",
        title: "The Magic Number: 0x5f3759df",
        description: "John Carmack needed to calculate lighting faster than the CPU allowed. He used a hex code that shouldn't work. It did.",
        category: "Gaming",
        publishedAt: "2025-01-19",
        imageUrl: "/images/quake-code.png",
        tags: ["Gaming", "Coding", "Math", "Deep Dive"],
        content: `
## Introduction: The Vector Problem
To light a 3D scene, you need to calculate the angle of light reflecting off a surface.
This requires **Normalizing a Vector**.
Formula: $v / \sqrt{x^2 + y^2 + z^2}$.
The Square Root ($\sqrt{x}$) is slow.
The Division ($1/x$) is also slow.
In 1999 (Quake III), CPUs were weak. Doing this for every pixel would kill the framerate.

## 1. The Hack
The source code contains this function:
\`float Q_rsqrt( float number )\`
Inside, there is a line:
\`i = 0x5f3759df - ( i >> 1 ); // what the fuck?\`
(The comment is literally in the code).
This line guesses the answer.
It uses bit-shifting on the floating point representation of the number.
It exploits the fact that the IEEE 754 standard for floats is logarithmic.

## 2. Newton's Method
The guess is good, but not perfect.
So it runs one iteration of **Newton-Raphson** method to polish it.
\`y = y * ( threehalfs - ( x2 * y * y ) );\`
The result is accurate to 0.1%.
But it runs **4x faster** than the hardware square root instruction of the time.

## 3. Legacy
Who wrote it?
Carmack? Abrash? Terje Mathisen?
It was likely Greg Walsh (Ardent Computer).
But it defines the "Hacker Spirit" of early 3D gaming.
Today, GPUs have dedicated instructions for this. We don't need the magic number anymore. But it remains a legend.

### Fact Box
*   **DOOM runs on everything:** People have ported DOOM to: A pregnancy test. A tractor display. A Lego brick. The Touch Bar of a Macbook. E. coli bacteria (using fluorescent proteins as pixels - slow framerate).
        `,
    },
    {
        slug: "ray-tracing-path-tracing",
        title: "Photons, Finally: Ray Tracing",
        description: "For 30 years, games faked lighting (Rasterization). Now, we simulate every single photon bouncing off the wall.",
        category: "Gaming",
        publishedAt: "2025-01-20",
        imageUrl: "/images/ray-tracing-reflection.png",
        tags: ["Gaming", "Tech", "Physics", "Deep Dive"],
        content: `
## Introduction: Rasterization (The Cheat)
Old games take a 3D triangle, flatten it to 2D screen space, and paint it.
Lighting is faked.
"If a light is here, this pixel should be bright."
Shadows are pre-painted "Shadow Maps".
Reflections are impossible (unless you render the whole scene again).

## 1. Ray Tracing (The Truth)
Shoot a ray from the Camera (Eye) through one pixel.
Hit the wall.
Bounce to the light source.
Bounce to a mirror. Bounce to a red carpet (Color Bleed).
Calculate the color.
Do this for 4K pixels (8 Million rays).
Do this 60 times a second.
**Impossible.**

## 2. RTX (Hardware Acceleration)
Nvidia RTX cards have **RT Cores**.
Dedicated silicon just for calculating triangle intersections (BVH Traversal).
They also use AI (DLSS) to upscale the image.
Render at 1080p -> Fill within the blanks with AI -> Display 4K.
This makes real-time Ray Tracing possible.

## 3. Path Tracing (The Holy Grail)
Ray Tracing usually just does Shadows/Reflections.
**Path Tracing** (Cyberpunk 2077 Overdrive Mode) does *everything* with rays.
Global Illumination.
If a red car drives by a white wall, the wall turns pink.
If you open a window, sunlight fills the room naturally.
It looks like a movie.
It is the end of "Graphics Programming". You just build the world, add lights, and physics does the rest.

### Fact Box
*   **Caustics:** Look at the bottom of a swimming pool. The squiggly lines of light. Those are Caustics (light focused by curved water). Rasterization cannot do this. Ray Tracing does it for free.
        `,
    },
    {
        slug: "super-mario-jump-physics",
        title: "Coyote Time: The Physics of Mario",
        description: "Mario doesn't follow Newton's laws. He follows Fun's laws. Why platformers feel good or bad.",
        category: "Gaming",
        publishedAt: "2025-01-21",
        imageUrl: "/images/mario-jump.png",
        tags: ["Gaming", "Design", "Physics", "Deep Dive"],
        content: `
## Introduction: Floatiness
If you program realistic gravity ($9.8 m/s^2$)...
The jump feels heavy. You fall too fast.
You can't change direction effectively in mid-air.
Mario violates physics to feel "Responsive".

## 1. Coyote Time
Wile E. Coyote runs off a cliff. He hovers for a second before falling.
Games do this.
If you walk off a ledge... the game gives you **5 frames** (0.1s) where you can still jump.
Without it, players scream: "I pressed jump! The game cheated!"
With it, nobody notices, but they feel like a ninja.

## 2. Jump Buffering
You are falling. You press 'Jump' just before you hit the ground.
Realistically: Nothing happens (you are in air). You land. You stand there.
Game Physics: It remembers the button press.
As soon as you touch the ground, it executes the jump instantly.
"Bunny Hopping".

## 3. Variable Jump Height
Tap 'A' = Small Jump.
Hold 'A' = Big Jump.
Physics says: Once you leave the ground, your velocity is set. You can't add force.
Mario says: If you release the button, we multiply your vertical velocity by 0.5.
Gravity suddenly doubles. You drop.
This gives you **Control**.

### Fact Box
*   **World 1-1:** Shigeru Miyamoto designed the first level of Mario to be a tutorial without text. The first Goomba forces you to jump. The blocks are arranged to teach you about height. It is a masterclass in "Invisible Design".
        `,
    },
    {
        slug: "procedural-generation-no-mans-sky",
        title: "Infinite Worlds: Procedural Generation",
        description: "How to fit a universe on a floppy disk. From Elite (1984) to No Man's Sky (2016). Perlin Noise explained.",
        category: "Gaming",
        publishedAt: "2025-01-22",
        imageUrl: "/images/perlin-noise.png",
        tags: ["Gaming", "Math", "Coding", "Deep Dive"],
        content: `
## Introduction: You Can't Draw Everything
If you want 18 Quintillion planets... artists can't draw them.
The computer must build them.
**The Seed.**
If you give an algorithm the seed "123", it generates a specific mountain.
Every time you enter "123", you get the *same* mountain.
It is random, but **Deterministic**.

## 1. Perlin Noise
Ken Perlin (Tron).
Random noise looks like TV static. Too jagged.
**Perlin Noise** is smooth. Hills and valleys.
Octaves:
Add Big Noise (Continents).
Add Medium Noise (Hills).
Add Small Noise (Rocks).
Result: A realistic terrain map.
Apply this to colors (Biomes), creatures (Leg length), and names.

## 2. Elite (1984)
David Braben fit 8 Galaxies (2000 systems) into 22 Kilobytes of RAM.
He used the Fibonacci sequence.
The names were generated by stitching syllables (Lave, Diso, Riedquat).
It felt limitless.

## 3. Spore and No Man's Sky
The promise: "Every creature is unique."
The reality: "Space Dick Monsters."
Algorithms don't understand aesthetics.
They stick a leg on a head and call it a dog.
**The Challenge:**
How to make procedural content *meaningful*?
Minecraft succeeded because the world is a canvas for *you* to build.
No Man's Sky succeeded (eventually) by adding handcrafted lore to the random worlds.

### Fact Box
*   **The Library of Babel:** Borges wrote about a library containing every possible book (random letters). 99.9% is gibberish. One book explains the meaning of life. Procedural Gen is searching that library for the good books.
        `,
    },
    {
        slug: "doom-binary-space-partitioning",
        title: "The Engine that Killed 2D: DOOM",
        description: "Wolfenstein was flat. DOOM had stairs. How John Carmack used Binary Space Partitioning (BSP) to render 3D at 35fps on a 386.",
        category: "Gaming",
        publishedAt: "2025-01-23",
        imageUrl: "/images/doom-bsp.png",
        tags: ["Gaming", "Coding", "History", "Deep Dive"],
        content: `
## Introduction: The Painter's Algorithm
Old way to draw 3D:
Draw the back wall. Draw the enemy in front. Draw the gun.
Overdraw pixels.
Slow.
Carmack wanted zero overdraw.
He wanted to draw only what is visible.

## 1. Binary Space Partitioning (BSP)
Before the game runs (Compilation), slice the map in half.
Is the player on the Left or Right?
If Left, don't draw the Right.
Slice the Left in half again.
Repeat until you have tiny convex rooms (**Sectors**).
**The Tree:**
The map becomes a binary tree.
Traversing the tree tells you exactly WHICH walss are visible from ANY point instantly.
No Z-Buffer needed.
Lightning fast.

## 2. 2.5D
DOOM isn't strictly 3D.
You can't look up or down.
You can't have a room over a room (No bridges).
The map is a 2D floorplan with "Floor Height" and "Ceiling Height".
Enemies are 2D Sprites (Billboards) that always face you.
It felt 3D, but it ran like 2D.

## 3. Multiplayer (Deathmatch)
DOOM invented the Deathmatch.
IPX Network protocol.
Offices banned DOOM because it crashed their LANs.
It was the birth of Esports.
John Romero: "Suck it down."

### Fact Box
*   **Bill Gates in DOOM:** Microsoft realized DOOM was installed on more computers than Windows 95. They considered buying id Software. Instead, Bill Gates made a video of himself superimposed into DOOM to promote DirectX which was a huge marketing success.
        `,
    },
];
