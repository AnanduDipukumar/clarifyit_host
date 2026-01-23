import { BlogPost } from "../blogs";

export const BLOGS_PART_96: BlogPost[] = [
    {
        slug: "qubit-superposition-bloch-sphere",
        title: "The Impossible Bit: Qubits and Superposition",
        description: "A classical bit is Heads or Tails. A Qubit is a spinning coin. It is both at once. Until you look at it.",
        category: "Quantum",
        publishedAt: "2025-06-26",
        imageUrl: "/images/bloch-sphere.png",
        tags: ["Quantum", "Physics", "Math", "Deep Dive"],
        content: `
## Introduction: The Light Switch
Classical Computer: Switch is ON (1) or OFF (0).
Quantum Computer: Switch is dimming. It is 30% ON and 70% OFF simultaneously.
This is **Superposition**.
Equation: $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$.
Where $|\alpha|^2 + |\beta|^2 = 1$.

## 1. The Bloch Sphere
Imagine a sphere.
North Pole = 1.
South Pole = 0.
A Classical bit can only be at North or South.
A Qubit can be *anywhere on the surface*.
It can be on the Equator (Superposition).
It holds infinitely more information than a bit... until measurement.

## 2. Measurement (The Collapse)
The moment you measure it (look at it), it snaps to North or South.
Probability rules.
If it was at the Equator (50/50), it is a coin toss.
If it was near North (90/10), it will probably be 1.
**The Trick:**
Quantum algorithms manipulate the probability *before* you look.
They rotate the sphere so the "Wrong Answer" has 0% probability and the "Right Answer" has 100%.

## 3. Exponential Power
If you have 1 Qubit -> 2 states (0, 1).
If you have 2 Qubits -> 4 states (00, 01, 10, 11).
If you have 300 Qubits...
You have $2^{300}$ states.
That is more states than there are atoms in the observable universe.
A 300-Qubit computer could calculate things that would take a classical supercomputer the age of the universe to solve.

### Fact Box
*   **Decoherence:** Qubits are shy. If a single photon or heat atom hits them, they collapse. We have to keep them at Absolute Zero (-273°C) in a golden chandelier fridge to keep them quiet.
        `,
    },
    {
        slug: "quantum-entanglement-erpt-paradox",
        title: "Spooky Action at a Distance: Entanglement",
        description: "Einstein hated it. He called it 'Spooky'. Two particles can communicate instantly across the universe, breaking the speed of light. Logic says no. Experiments say yes.",
        category: "Quantum",
        publishedAt: "2025-06-27",
        imageUrl: "/images/entanglement.png",
        tags: ["Quantum", "Physics", "Mystery", "Deep Dive"],
        content: `
## Introduction: The Pairs
Take two particles. Entangle them (Make them interact).
Separate them. One on Earth. One on Mars.
If you measure Earth as "Up Spin"...
Mars instantly becomes "Down Spin".
Instantly. Faster than light.

## 1. Hidden Variables (Einstein)
Einstein said: "God does not play dice."
He thought the particles agreed beforehand. "I will be Up, you be Down." (Hidden Variables).
It's like separating a pair of gloves. If you find the Left glove, you *know* the other is Right. No magic.

## 2. Bell's Theorem (John Bell)
1964. John Bell did the math.
He proved that if "Hidden Variables" were true, the correlation would follow a straight line.
If "Quantum Magic" was true, the correlation would curve.
**Aspect Experiment (1982):**
They ran the test.
The correlation curved.
Einstein was wrong.
The universe is **Non-Local**.
What happens here *instantaneously* affects what happens there.

## 3. No Faster Than Light Communication
Can we use this for a telephone? NO.
Because the result is *Random*.
I measure "Up". I know you have "Down".
But I couldn't *force* mine to be Up to send you a 1.
It's random noise on both ends. Perfectly correlated noise, but still noise.
Relativity is safe. Information cannot travel faster than light.

### Fact Box
*   **The Chinese Satellite:** In 2017, the Micius satellite beamed entangled photons to two ground stations 1200km apart (Tibet and Gobi). They remained entangled. It proves we can build a "Quantum Internet" that cannot be hacked.
        `,
    },
    {
        slug: "shors-algorithm-encryption-breaking",
        title: "The End of Encryption: Shor's Algorithm",
        description: "RSA encryption relies on factoring prime numbers being hard. Poter Shor wrote an algorithm that makes it easy. The day Quantum Computers work, all secrets are revealed.",
        category: "Quantum",
        publishedAt: "2025-06-28",
        imageUrl: "/images/shor-algorithm.png",
        tags: ["Quantum", "Crypto", "Math", "Deep Dive"],
        content: `
## Introduction: RSA
Your credit card is safe because:
$Pub Key = Prime A \times Prime B$.
It is easy to multiply ($3 \times 5 = 15$).
It is hard to factor ($15 = ? \times ?$).
For big numbers (2048 bits), it takes a trillion years.

## 1. Period Finding
Peter Shor realized factoring is just "Period Finding" (finding a repeating pattern in a modular exponentiation function).
A Classical computer has to check every number one by one.
A Quantum computer uses **Superposition** to check ALL numbers at once.
And **Interference** to cancel out the wrong answers.
The right answer (The Factors) amplifies.

## 2. Q-Day (Y2Q)
The day a Quantum Computer is big enough (4000 logical qubits) to run Shor's Algorithm.
Estimates: 2035?
On that day, every bank account, every military secret, every Bitcoin wallet... is cracled instantly.
**Harvest Now, Decrypt Later:**
Spies are recording encrypted traffic *now*. They are storing it in Utah.
They are waiting for 2035 to read it.

## 3. Post-Quantum Cryptography (PQC)
We need new math.
Lattice-based cryptography.
Problems that are hard *even* for a Quantum Computer.
NIST has already standardized "Kyber" and "Dilithium".
Apple just added PQC to iMessage (PQ3).
The race is on.

### Fact Box
*   **Logical vs Physical:** We have 400-qubit chips (Osprey). Why isn't RSA broken? Noise. These are "Physical Qubits". They error constantly. We need 1000 Physical Qubits to make 1 "Logical Qubit" (Error Corrected). So we need a Million-Qubit chip.
        `,
    },
    {
        slug: "quantum-tunneling-sun-fusion",
        title: "Walking Through Walls: Quantum Tunneling",
        description: "If you throw a ball at a wall, it bounces. If you throw an electron, it might teleport to the other side. This is why the Sun shines.",
        category: "Quantum",
        publishedAt: "2025-06-29",
        imageUrl: "/images/quantum-tunneling.png",
        tags: ["Quantum", "Physics", "Sun", "Deep Dive"],
        content: `
## Introduction: The Barrier
Two Protons (Positive charge) repel each other. (Coulomb Barrier).
To fuse them (Fusion), you need insane heat/speed to overcome the repulsion.
Calculation: The Sun's core is 15 Million degrees.
That is **Not Hot Enough**.
Classically, the protons should bounce off.
The Sun should be dark.

## 1. The Wave Function
Particles are waves.
A wave doesn't have a hard edge. It has a "Probability Tail".
The tail extends *through* the barrier.
There is a 0.0000001% chance the proton is actually *on the other side*.
Wait long enough... and it happens.
Because there are $10^{57}$ protons in the Sun, it happens often enough to light up the solar system.

## 2. Flash Memory (SSD)
Your USB stick uses tunneling.
To store a bit, we trap electrons in a "Floating Gate" (a prison cell surrounded by insulation).
To erase it, we apply a voltage.
The electrons **Tunnel** through the insulation wall to escape.
We are literally using quantum teleportation to save Excel files.

## 3. Touch Screens
When your finger touches the screen, it changes the capacitance.
The electrons tunnel across the gap between the glass layers.
Quantum Mechanics is in your pocket.

### Fact Box
*   **Enzymes:** Your body uses tunneling. Enzymes speed up reactions by millions of times. They do it by helping protons tunnel through activation barriers. You are a quantum machine.
        `,
    },
    {
        slug: "majorana-fermion-particle",
        title: "The Angel Particle: Majorana Fermions",
        description: "Matter and Antimatter destroy each other. Ettore Majorana predicted a particle that is its own antiparticle. It might build the perfect computer.",
        category: "Quantum",
        publishedAt: "2025-06-30",
        imageUrl: "/images/majorana-particle.png",
        tags: ["Quantum", "Physics", "Mystery", "Deep Dive"],
        content: `
## Introduction: The Mystery Man
Ettore Majorana (1937) was a genius equal to Newton.
He wrote a paper saying a particle could be its own antiparticle.
Then he withdrew all his money from the bank, bought a boat ticket, and vanished.
Suicide? South America? Monastery? No one knows.

## 1. Topological Qubits (Microsoft)
Standard Qubits (Superconducting) are fragile (Noise).
A **Majorana Qubit** is "Topological".
The information is stored in the *knot* of the wavefunction.
Knotting a string is robust. If you shake the string, the knot stays.
This means: **No Decoherence.** No Errors.
The Holy Grail.

## 2. The Hunt
Microsoft bet its entire Quantum strategy on this.
In 2018, they claimed they found it in a nanowire.
In 2021, they retracted the paper. "Data analysis error."
It was a phantom.
The hunt continues.
If we find it, we get Microsoft's "Q Station" (Scalable Quantum Computer).

## 3. Antimatter Recap
Dirac Equation: $x^2 = 4$. So $x = 2$ OR $x = -2$.
Physics usually ignored the negative solution.
Dirac said: "The negative solution is real. It is Antimatter."
Electron (-) <-> Positron (+).
Majorana Fermion: Charge is 0. So negative 0 is 0. It is its own opposite.

### Fact Box
*   **Neutrinos:** We suspect Neutrinos might be Majorana particles. If they are, it would explain why the universe has more matter than antimatter (Leptogenesis). Ettore might have solved the origin of the universe before disappearing.
        `,
    },
];
