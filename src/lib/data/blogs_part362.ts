import { BlogPost } from "../blogs";

export const BLOGS_PART_362: BlogPost[] = [
    {
        slug: "pong-physics-accident",
        title: "Pong: The Glitch That Created An Industry",
        description: "In 1972, Atari wasn't trying to make a masterpiece. They built a simple tennis game. But a hardware bug made the ball speed up. That bug made it addictive.",
        category: "Tech",
        publishedAt: "2029-02-13",
        imageUrl: "/images/pong-arcade.png",
        tags: ["Tech", "History", "Gaming", "Ultimate Guide"],
        content: `
## The Training Exercise

**Nolan Bushnell** (Atari founder) hired a young engineer named **Al Alcorn**.
He told him: "Build a simple ping-pong game. Just for practice."
Alcorn built it using transistors (no CPU code).
He added a feature: If you hit the ball with the *edge* of the paddle, it changes angle.
But he also added a mistake: As the rally goes on, the ball gets faster.
Bushnell played it. "Leave it in. It creates tension."

---

## 1. The Quarter Problem

They put the prototype machine in **Andy Capp's Tavern** in Sunnyvale, California.
Two weeks later, the bar owner called. "The machine is broken."
Alcorn drove over to fix it.
He opened the coin box.
It was so full of quarters that the mechanism was jammed.
They used a cup to scoop out the money.
Pong was a hit.

---

## 2. The Lawsuit

Bushnell hadn't invented Pong.
He had seen a similar game on the **Magnavox Odyssey**.
Magnavox sued. Atari settled for $700,000.
But Atari owned the arcades, and that's where the money was.

---

## 3. Conclusion

The video game industry is now worth $200 Billion.
It started because people in a dive bar wanted to hit a square ball with a rectangle paddle.

---

## 4. FAQ

**Q: Was it the first video game?**
**A:** No. *Tennis for Two* (1958) and *Spacewar!* (1962) were earlier. But Pong was the first *commercial* success.

**Q: How much RAM did it have?**
**A:** Zero. It had no microprocessor. It was pure logic gates on a circuit board.
        `,
    },
    {
        slug: "super-mario-clouds-bushes",
        title: "Super Mario: Why The Clouds Are Just Green Bushes",
        description: "The NES had 2KB of RAM. Nintendo designers had to be magicians. They reused the same sprites for different objects. You just never noticed.",
        category: "Tech",
        publishedAt: "2029-02-14",
        imageUrl: "/images/mario-cloud-bush.png",
        tags: ["Tech", "Gaming", "Design", "Ultimate Guide"],
        content: `
## The Art of Limits

**Shigeru Miyamoto** wanted a vibrant world.
But the NES cartridge could only hold 40KB of data.
Every pixel counted.
**The Trick:**
Look at the Cloud in the sky.
Now look at the Bush on the ground.
They are the **exact same sprite**.
The only difference is the color palette (White vs Green).
By reusing the shape, they saved precious memory for things like Goombas.

---

## 1. Luigi is Green Mario

Luigi exists because of the same limitation.
They needed a second player. They didn't have space for a new character model.
So they took Mario, changed his palette to Green (borrowed from the Koopa Troopa shell color), and called him Luigi.
He is literally a "Palette Swap."

---

## 2. The Goomba Walk

Why do Goombas just waddle back and forth?
Because animating legs takes frames.
They just flipped the sprite horizontally to create a walking illusion.
It cost almost zero memory.

---

## 3. Conclusion

Modern games have 100GB sizes. Developers are lazy with optimization.
The NES era was the golden age of efficient coding.

---

## 4. FAQ

**Q: Why does Mario wear a hat?**
**A:** Hair is hard to animate. A hat stays static.
**Q: Why a mustache?**
**A:** Before HD graphics, you couldn't draw a mouth. A mustache defined where the nose ended and the face began. Practicality dictated the design.
        `,
    },
    {
        slug: "doom-shareware-revolution",
        title: "DOOM: The Game That Crashed The Corporate Internet",
        description: "1993. ID Software did the unthinkable. They gave their game away for free. It was installed on more computers than Windows 95.",
        category: "Tech",
        publishedAt: "2029-02-15",
        imageUrl: "/images/doom-guy.png",
        tags: ["Tech", "Gaming", "Business", "Ultimate Guide"],
        content: `
## Knee Deep in the Dead

**John Carmack** (Code) and **John Romero** (Design) built a masterpiece.
But how to sell it?
They used the **Shareware** model.
1.  **Episode 1:** Free (uploaded to Bulletin Boards).
2.  **Episodes 2 & 3:** Pay $15 to get them by mail.
It spread like a virus.
People installed it on work computers. University servers clogged up with people downloading the WAD files.
**Intel** had to ban the game because Deathmatch traffic was bringing down their internal network.

---

## 1. The Bill Gates Promo

It was so popular that **Bill Gates** considered buying ID Software.
Instead, he made a promo video where he (Bill Gates) stood inside the Doom game, holding a shotgun, shooting demons to promote **Windows 95** as a gaming platform.
"Windows 95 is the best platform for games like Doom."

---

## 2. Modding

Carmack made the code "Open."
He allowed players to modify the WAD files.
Results: Star Wars Doom, Simpsons Doom, Batman Doom.
This birthed the **Modding Community**, which later gave us *Counter-Strike* and *Dota*.

---

## 3. Conclusion

Doom proved that "Free" is the best marketing strategy.
It also proved that a shotgun solves most problems (in game).

---

## 4. FAQ

**Q: Can it run on a pregnancy test?**
**A:** Yes. Hackers have ported Doom to pregnancy tests, calculators, ATMs, and even tractors. "Will it run Doom?" is the ultimate test of any CPU.
        `,
    },
    {
        slug: "wow-corrupted-blood-plague",
        title: "Corrupted Blood: The Virtual Plague That CDC Studied",
        description: "In 2005, a glitch in World of Warcraft unleashed a deadly virus on the servers. Players died in thousands. Cities became graveyards. Real-world epidemiologists took notes.",
        category: "Tech",
        publishedAt: "2029-02-16",
        imageUrl: "/images/wow-corrupted-blood.png",
        tags: ["Tech", "Gaming", "Science", "Ultimate Guide"],
        content: `
## Patient Zero: Hakkar the Soulflayer

**September 13, 2005.**
Blizzard released a new raid boss: Hakkar.
He had an ability: **Corrupted Blood**.
It drained life from the player and spread to anyone standing nearby.
It was supposed to last 10 seconds and only work *inside* the dungeon.
**The Glitch:**
If a Hunter dismissed their Pet while the pet was infected... the pet "stored" the disease.
When the Hunter summoned the pet back in a major city (Ironforge), the pet exploded with the disease.

---

## 1. The Outbreak

Ironforge was crowded.
The pet infected a player. That player infected the Auction House.
Low-level players (Level 1-50) died constantly.
High-level players survived but became **Carriers** (Typhoid Marys).
The floor was covered in skeletons.

---

## 2. Human Behavior

Players reacted exactly like people in real pandemics (COVID-19):
1.  **Denial:** "It's just a game bug."
2.  **Panic:** People fled the cities to the mountains (Social Distancing).
3.  **Heroism:** Healers set up triage centers at the city gates to heal the sick.
4.  **Terrorism:** "Griefers" intentionally got infected and teleported to safe zones to kill everyone.

---

## 3. The CDC Interest

Blizzard tried to quarantine the zones. It failed.
They had to do a "Hard Reset" of the servers.
**Epidemiologists** (Dr. Nina Fefferman) published papers on it.
It was a perfect simulation of how people behave during a plague.
The Griefers represented people who refuse to wear masks or travel while sick.

---

## 4. FAQ

**Q: Did players lose gear?**
**A:** No, just repair costs. But the disruption meant nobody could trade or raid for a week.

**Q: Is there a monument?**
**A:** No, but the incident is legendary in gaming history.
        `,
    },
    {
        slug: "minecraft-infinite-world",
        title: "The Far Lands: The Glitch at the End of the Universe",
        description: "Minecraft worlds are supposedly infinite. They aren't. If you walk far enough, the math breaks. Welcome to the Far Lands.",
        category: "Tech",
        publishedAt: "2029-02-17",
        imageUrl: "/images/minecraft-far-lands.png",
        tags: ["Tech", "Gaming", "Code", "Ultimate Guide"],
        content: `
## Walking to the Edge

In early versions of Minecraft (Beta 1.7), the world generator used a noise function to create hills and valleys.
It worked fine near the center (Spawn).
But computers use **Floating Point Numbers**.
As you get further from zero, the numbers get less precise.
At **12,550,821 blocks** from spawn, the precision error becomes visible.

---

## 1. The Wall

Suddenly, the normal terrain stops.
It is replaced by a massive, distorted wall of swiss-cheese holes.
FPS drops to zero.
Movement becomes jerky.
This is the **Far Lands**.
It looks alien. Like the code is screaming.

---

## 2. Far Lands or Bust

In 2011, a YouTuber named **Kurt J. Mac** started walking.
His goal: Reach the Far Lands in survival mode (no cheats).
He has been walking for **12 Years**.
He has raised $400,000 for charity (Child's Play).
He is currently about 50% of the way there.
It takes a long time to walk 12 million meters.

---

## 3. The Patch

In Beta 1.8, Notch fixed the math bug.
The Far Lands disappeared (replaced by an endless ocean).
But players loved the glitch so much that they installed mods to bring it back.
It represents the "Edge of the Known World."

---

## 4. FAQ

**Q: What happens if you go past?**
**A:** The game crashes. The physics engine stops working (you can't move).

**Q: Is the world round?**
**A:** No. It is a flat plane. Flat Earthers love Minecraft.
        `,
    }
];
