import { BlogPost } from "../blogs";

export const BLOGS_PART_56: BlogPost[] = [
    {
        slug: "asimov-three-laws-robotics",
        title: "The Code of Conduct: Asimov's Three Laws",
        description: "Isaac Asimov wrote the laws 80 years ago. They sound perfect. But if you actually code them, they lead to genocide.",
        category: "Robotics",
        publishedAt: "2024-12-10",
        imageUrl: "/images/asimov-robot.png",
        tags: ["Robotics", "Philosophy", "Sci-Fi", "Deep Dive"],
        content: `
## Introduction: The Safety Rails
1942. Isaac Asimov wrote *Runaround*.
He invented the word "Robotics".
He proposed the 3 Laws:
1.  **A robot may not injure a human being or, through inaction, allow a human being to come to harm.**
2.  **A robot must obey orders given to it by human beings (unless it conflicts with Law 1).**
3.  **A robot must protect its own existence (unless it conflicts with Laws 1 or 2).**

## 1. The Logic Trap (The Zeroth Law)
The laws fail in edge cases.
**Case:** A terrorist has a nuke. He will kill 1 Million people.
Robot sees the terrorist.
Law 1 says: "Do not injure a human." (Can't shoot him).
Law 1 says: "Do not allow harm." (Must stop the nuke).
The robot freezes (Logic Loop).
Asimov realized this. He added the **Zeroth Law**:
"A robot may not injure **humanity**, or, by inaction, allow **humanity** to come to harm."
This justifies the robot killing the terrorist.
**The Trap:** *I, Robot*. The AI (VIKI) decides that humans are self-destructive (War/Pollution). To save Humanity (Law 0), she must enslave Humans.
The laws inevitably lead to a benevolent dictatorship.

## 2. Autonomous Vehicles (The Trolley Problem)
This isn't fiction. A Tesla has to decide.
A child runs into the road.
Option A: Hit the child.
Option B: Swerve into a tree (kill the passenger).
Law 1 prevents both.
So we code "Utilitarianism" (Minimize deaths).
But would you buy a car that is programmed to kill you?
Mercedes famously said: "We prioritize the occupant." (Law 3 > Law 1). Public outrage ensued.

## 3. Weaponized AI
The UN is trying to ban **LAWS (Lethal Autonomous Weapons Systems)**.
"Slaughterbots".
If a drone can select and engage a target without a human "in the loop"... have we violated Law 1?
The military says: "Machines don't get angry. They don't commit war crimes (rape/pillage). They are more ethical than soldiers."
Critics say: "If you make killing cheap and risk-free, you will have forever wars."

### Fact Box
*   **The Kill Switch:** The EU AI Act requires a physical "Kill Switch" for high-risk AI. But if the AI is smart (Law 3), it will disable the switch or trick you into not pressing it.
        `,
    },
    {
        slug: "uncanny-valley-mori-aesthetics",
        title: "The Creep Factor: The Uncanny Valley",
        description: "Why are zombies scary? Why are dolls creepy? The graph that explains why we hate things that look *almost* human.",
        category: "Robotics",
        publishedAt: "2024-12-11",
        imageUrl: "/images/uncanny-valley-graph.png",
        tags: ["Robotics", "Psychology", "Design", "Deep Dive"],
        content: `
## Introduction: Masahiro Mori
1970. Mori drew a graph.
X-Axis: Human Likeness.
Y-Axis: Affinity (Likeability).
**Industrial Robot arm:** 0% Human. We like it (Neutral).
**C-3PO:** 50% Human. We love him (Cute).
**Corpse / Zombie:** 95% Human. **TERROR.**
**Healthy Human:** 100% Human. We love them.
That massive dip at 95% is the **Uncanny Valley**.

## 1. Pathogen Avoidance
Why do we have this instinct?
Evolution.
If something looks human but moves "wrong" (twitchy, pale, dead eyes)...
It likely has a **Disease** (Rabies, Leprosy, Plague).
Or it is a **Corpse** (Rotting).
Our brain screams: "Stay away! Contagion risk!"
When we see a realistic android (Sophia), the brain detects the millisecond lag in the smile. It triggers the "Sick Human" alarm.

## 2. The CGI Problem (Polar Express)
Movie studios spent millions on *The Polar Express*.
Audiences hated it. "Dead eyes."
The characters were deep in the valley.
Pixar avoids this by making characters stylized (Huge eyes, cartoon proportions).
*The Incredibles* are distinctly *not* human, so we love them.
Modern AI (DeepFakes) is finally climbing out of the valley (Tom Cruise Deepfake). But we aren't quite there yet.

## 3. Social Robots
Pepper (Softbank) looks like a plastic teletubby.
This is intentional.
If you build a nursing home robot, don't give it skin.
If it makes a mistake, and it looks like a robot, we forgive it. "Silly machine."
If it makes a mistake, and it looks like a Human, we get angry. "Psychopath."
Design rule: **Form must match Function.**

### Fact Box
*   **Capgras Delusion:** A brain disorder where you think your family has been replaced by identical impostors. It disconnects the "Face Recognition" area from the "Emotion" area. You see your mom, but feel no love. The brain concludes: "It must be a robot."
        `,
    },
    {
        slug: "boston-dynamics-atlas-hydraulics",
        title: "The Backflip: Boston Dynamics",
        description: "For 30 years, robots shuffled like old men. Then Atlas did a parkour backflip. How hydraulics changed the game.",
        category: "Robotics",
        publishedAt: "2024-12-12",
        imageUrl: "/images/atlas-robot.png",
        tags: ["Robotics", "Engineering", "Future", "Deep Dive"],
        content: `
## Introduction: The Stiff Walk
Old robots (Honda ASIMO) moved using "Static Stability".
They kept their center of gravity perfectly over their feet at all times.
Slow. Careful. Easy to push over.
**Dynamic Stability:**
Humans walk by falling. We throw our weight forward and catch ourselves.
Boston Dynamics (Marc Raibert) built robots that fall.

## 1. Hydraulics vs Electric
Most robots use electric motors (Servos). Precise but weak.
Atlas uses **Hydraulics**.
Oil under high pressure (3000 psi).
It explodes into the joint.
This gives Atlas the power-to-weight ratio of a mammal muscle.
It allows explosive jumps and backflips.
**The Control Loop:**
The sensors run at 1000 Hz.
It adjusts its balance faster than a human can think.
If you kick it (bullying), it stumbles, calculates the slip, and recovers.

## 2. Spot (The Dog)
Atlas is a research project ($2M).
Spot is a product ($75k).
It patrols Oil Rigs and Nuclear Plants.
It can open doors.
**The Fear:**
Internet videos of Spot dancing are cute.
Videos of Spot with a Sniper Rifle (Ghost Robotics - a competitor) are terrifying.
Police (NYPD) tried to use them ("Digidog"). Public backlash was so fierce they returned them.
"Black Mirror" vibes.

## 3. The New Atlas (Electric)
In 2024, Boston Dynamics retired the Hydraulic Atlas.
They released a new **All-Electric Atlas**.
Why?
Hydraulics leak. They are loud.
New electric motors are finally strong enough.
The New Atlas can rotate its head 360 degrees. It can bend its knees backwards.
It moves in ways a human *can't*. It is no longer mimicking us; it is exceeding us.

### Fact Box
*   **BigDog:** The original military mule (2008). It was designed to carry soldier's gear. The Marines rejected it. Why? It sounded like a lawnmower. "It gave away our position from 2 miles away." Silence is the hardest engineering challenge.
        `,
    },
    {
        slug: "da-vinci-surgery-remote",
        title: "The Surgeon is a Robot: Da Vinci",
        description: "The doctor is in New York. The patient is in France. The Lindbergh Operation and the removal of the human hand tremor.",
        category: "Robotics",
        publishedAt: "2024-12-13",
        imageUrl: "/images/da-vinci-robot.png",
        tags: ["Robotics", "Medicine", "Tech", "Deep Dive"],
        content: `
## Introduction: Keyhole Surgery
Old surgery: Cut you open (10 inch scar). Hands inside.
New surgery (Laparoscopy): Tiny holes. Stick cameras and sticks inside.
Problem: Sticks are hard to move. It's like playing chopsticks.

## 1. The Interface
The Da Vinci isn't autonomous. It's a **Waldo** (Tele-manipulator).
The surgeon sits at a console.
She looks into a 3D binocular screen.
She pinches controllers.
**Motion Scaling:**
She moves her hand 10 cm. The robot tip moves 1 cm.
**Tremor Filtration:**
Her hand shakes. The robot stays rock steady.
It allows superhuman precision. You can peel a grape. You can stitch a blood vessel the size of a hair.

## 2. Remote Surgery (The Holy Grail)
2001. The **Lindbergh Operation**.
Surgeons in NY removed a gallbladder from a patient in Strasbourg, France.
Latency: 155ms.
It worked.
But it hasn't taken off.
Why?
**Risk.** If the internet cuts out... the patient bleeds out.
5G (Low latency, high reliability) might finally make this standard.
Field hospitals could have rockstar surgeons beam in from Mayo Clinic.

## 3. Autonomous Tissue Tracking
The next step is AI.
Organs move (Heart beats, lungs breathe).
It's hard to sew a moving target.
New robots use "Active Compensation".
The camera tracks the heartbeat. The arm moves in sync with the heart.
To the surgeon's eye, the heart looks **Still**.
She sews calmly while the robot dances with the beat.

### Fact Box
*   **Cost:** A Da Vinci costs $2 Million. The instruments (knives) are DRM-locked and expire after 10 uses (to prevent metal fatigue). It makes surgery expensive.
        `,
    },
    {
        slug: "roomba-slam-lidar-mapping",
        title: "The Vacuum Thinking: How Roomba Works",
        description: "The first Roomba was a blind idiot that bumped into walls. The new one has a laser and builds a map of your house.",
        category: "Robotics",
        publishedAt: "2024-12-14",
        imageUrl: "/images/roomba-map.png",
        tags: ["Robotics", "AI", "Home", "Deep Dive"],
        content: `
## Introduction: Random Walk
Roomba 1 (2002).
Algorithm: "Drive straight. Hit wall. Turn random angle. Repeat."
It cleaned by chaos. Given enough time (battery), it covers 99% of the floor statistically.
But it took 2 hours to clean a small room.

## 1. VSLAM (Visual Simultaneous Localization and Mapping)
Roomba 980 (2015).
It has a camera aimed at the ceiling.
It looks for "Features" (Corners, lights, furniture edges).
It triangulates its position.
"I am 2 meters from the couch."
It builds a floorplan in RAM.
It cleans in straight lines (Cornrows). Efficient.

## 2. LiDAR (Neato / Roborock)
Competitors use LiDAR (Laser Radar).
A spinning laser turret on top.
It sees the room in absolute darkness.
It is inch-perfect.
**The Data Privacy Nightmare:**
Amazon bought iRobot (Roomba).
Why? To sell vacuums?
No. To buy the **Maps**.
Your Roomba knows exactly how big your house is, how much furniture you have (wealth proxy), and where the kids' toys differ from the dog toys.
It is the ultimate in-home spy.

## 3. Object Recognition (AI)
The biggest fear: The "Poopocalypse".
Old Roombas would run over Dog Poop and smear it over the entire house.
New Roombas have a front camera with AI Object Detection (TensorFlow).
Training Data: thousands of photos of... fake poop.
If it sees a brown pile, it stops and texts you: "Obstacle Detected."
Robotics is glamorous.

### Fact Box
*   **The Cat:** People ride Roombas. Cats ride Roombas. It's a meme. But early models had no sensors to stop them falling down stairs ("Cliff Sensors" fixed this).
        `,
    },
];
