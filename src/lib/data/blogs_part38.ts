import { BlogPost } from "../blogs";

export const BLOGS_PART_38: BlogPost[] = [
    {
        slug: "how-quantum-tunneling-works-sun",
        title: "Walking Through Walls: Quantum Tunneling",
        description: "If you run at a wall enough times, eventually you teleport to the other side.",
        category: "Physics",
        publishedAt: "2024-06-10",
        imageUrl: "/images/quantum-tunneling.png",
        tags: ["Physics", "Space", "Quantum"],
        content: `
## The Probability Wave
In classical physics, a ball cannot roll over a hill if it doesn't have enough energy.
In Quantum physics, a particle is not a ball. It is a **Wave**.
The wave represents only the *probability* of where the particle is.
If the wave hits a wall, most of it bounces back.
But a tiny "tail" of the wave leaks through to the other side.
This means there is a non-zero chance the particle just... appears on the other side.
**The Sun:** Protons in the sun repel each other (Positive vs Positive). They shouldn't fuse.
But 1 in a quintillion times, they "tunnel" through the repulsion barrier and fuse.
Without tunneling, the sun wouldn't shine.

## Deep Dive: The Exponential Tail
The Wave Function ($\Psi$) decays exponentially inside a barrier.
It doesn't hit zero instantly. It fades out.
If the barrier is thin enough (like the nucleus), the tail sticks out the other side.
Wait long enough, and the particle teleports to the tail.
Flash Memory (USB drives) uses this to trap electrons in a "Floating Gate." We force them to tunnel in, then they are stuck.

> **One-Minute Summary**
> At the quantum scale, particles behave like probability waves. This allows them to occasionally pass through energy barriers that should be impassable according to classical mechanics, a phenomenon essential for nuclear fusion in stars.
        `,
    },
    {
        slug: "how-superposition-works-cat",
        title: "Dead and Alive: Superposition",
        description: "A particle doesn't choose a state until you look at it.",
        category: "Physics",
        publishedAt: "2024-06-11",
        imageUrl: "/images/schrodingers-cat.png",
        tags: ["Physics", "Quantum", "Philosophy"],
        content: `
## The Spinning Coin
If you spin a coin, is it Heads or Tails?
It is neither. It is a blur of both.
Only when you slap it onto the table (Measure it) does it become Heads or Tails.
**Schrödinger's Cat:**
A cat in a box with a poison vial triggered by a radioactive atom.
The atom has a 50% chance of decaying.
Until you open the box, the atom is both decayed and not decayed.
Therefore, the cat is both **Dead and Alive**.
It sounds stupid (Schrödinger meant it as a joke), but mathematically, it is true for atoms.

## Deep Dive: Decoherence
Why don't we see dead/alive cats in real life?
Because of **Decoherence**.
Superposition is fragile. It requires isolation.
Air molecules bounce off the cat. Photons bounce off the cat.
Each bounce "measures" the cat.
The universe is constantly measuring macro-objects, forcing them to choose a state.
Quantum Computers must be kept at absolute zero to prevent heat (vibrating atoms) from measuring the Qubits and ruining the superposition.

> **One-Minute Summary**
> Quantum systems can exist in multiple states simultaneously (Superposition) until they are interacted with or measured. This measurement forces the system to collapse into a single definite state.
        `,
    },
    {
        slug: "how-entanglement-works-spooky",
        title: "Spooky Action: Quantum Entanglement",
        description: "Two particles can communicate instantly across the universe. Einstein hated it.",
        category: "Physics",
        publishedAt: "2024-06-12",
        imageUrl: "/images/quantum-entanglement.png",
        tags: ["Physics", "Quantum", "Space"],
        content: `
## The Shared Soul
You take two particles and "entangle" them.
*   Particle A spins Up.
*   Particle B spins Down.
(Conservation of Momentum tells us they must represent zero total spin).
Now, send Particle A to Mars.
Keep Particle B on Earth.
If you force Particle B to spin UP...
**Instantly** (zero time lag), Particle A flips to spin DOWN.
It ignores the speed of light.
**No Information:** You can't use this to send a message (like Morse Code) because you can't control the spin, you can only measure it. It is random. But the randomness is correlated.

## Deep Dive: Bell's Theorem
Einstein said: "There must be hidden variables inside the particle telling it what to do."
John Bell proved him wrong.
He created a statistical test (Bell's Inequality).
*   If Einstein was right, the correlation would be < 2.
*   If Quantum Mechanics (Spooky Action) was right, the correlation would be > 2.
Experiments proved the correlation is > 2.
Reality is non-local. Spooky action is real. Einstein lost.

> **One-Minute Summary**
> Entangled particles share a single quantum state, regardless of distance. Measuring the property of one particle instantly determines the state of its partner, defying the classical idea that information must travel through space.
        `,
    },
    {
        slug: "how-uncertainty-principle-works-heisenberg",
        title: "You Can't Know Both: Heisenberg Uncertainty",
        description: "It isn't that our tools are bad. It is that the universe is blurry.",
        category: "Physics",
        publishedAt: "2024-06-13",
        imageUrl: "/images/heisenberg-uncertainty.png",
        tags: ["Physics", "Quantum", "Math"],
        content: `
## Taking a Photo
To see where an electron is, you have to bounce a photon (light) off it.
*   **High Precision:** Use a high-energy photon (X-Ray).
    *   Result: You see the position perfectly, but the photon hits the electron so hard it sends it flying. **Velocity is now unknown.**
*   **Low Impact:** Use a low-energy photon (Radio).
    *   Result: You barely nudge the electron (Velocity is known), but the wave is so long you can't tell exactly where it is. **Position is unknown.**
The more you know about Position ($x$), the less you know about Momentum ($p$).
$\Delta x \Delta p \ge h/4\pi$

## Deep Dive: Fourier Transform
This isn't just about clumsy measurement tools. It is a mathematical property of waves.
*   **A pure Tone (Sine wave):** Perfect momentum (frequency), but infinite position (it stretches forever).
*   **A Clap (Pulse):** Perfect position (happens now), but infinite momentum (it contains all frequencies).
You cannot have a wave that is both a perfect Point and a perfect Sine Wave.
You have to trade off precision in one for the other.

> **One-Minute Summary**
> It is impossible to simultaneously measure the exact position and momentum of a particle. The act of measuring one property with high precision inherently disturbs the other, imposing a fundamental limit on what can be known.
        `,
    },
    {
        slug: "how-double-slit-works-observer",
        title: "The Observer Effect: The Double Slit Experiment",
        description: "Particles act like waves. Until you watch them. Then they act like particles.",
        category: "Physics",
        publishedAt: "2024-06-14",
        imageUrl: "/images/double-slit-interference.png",
        tags: ["Physics", "Quantum", "Light"],
        content: `
## The Interference Pattern
Shoot electrons at a wall with two slits.
1.  **Prediction:** You get two bands of hits on the back wall. (Like throwing tennis balls).
2.  **Reality:** You get an **Interference Pattern** (Stripes).
    *   This proves electrons are Waves. They go through *both* slits at once and interfere with themselves.

### The Watcher
Now, put a sensor at the slit to see which one it goes through.
**The Climax:** The moment you turn the sensor on, the Interference Pattern disappears. You get two bands.
The electron stops acting like a wave and starts acting like a particle.
**The universe knows you are watching.**

## Deep Dive: Pilot Wave Theory
Is it really magic? Maybe not.
Louis de Broglie suggested a different idea (Bohmian Mechanics).
The particle *does* exist in one place.
But it surfs on a **Pilot Wave**.
The Wave goes through both slits. The Particle goes through one.
The Wave hits the wall and creates an interference pattern.
The Particle rides the wave and lands in the pattern.
This removes the "Observer Effect" magic, but creates other weird problems (Non-locality).

> **One-Minute Summary**
> Matter exhibits wave-particle duality. When unobserved, particles behaves like waves (showing interference). When observed or measured, the wave function collapses, and they behave like discrete particles.
        `,
    }
];
