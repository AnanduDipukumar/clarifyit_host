import { BlogPost } from "../blogs";

export const BLOGS_PART_112: BlogPost[] = [
    {
        slug: "react-vs-vue-framework-wars",
        title: "React vs Vue: The Framework War",
        description: "Facebook vs The Community. One is a library, the other is a framework. Why React won (for now) and why Vue is loved.",
        category: "Tech",
        publishedAt: "2025-09-14",
        imageUrl: "/images/react-vs-vue.png",
        tags: ["Tech", "Code", "Web", "Deep Dive"],
        content: `
## Introduction: jQuery
In 2010, everyone used jQuery. \`$('#id').hide()\`.
It was spaghetti code.
Then AngularJS happened (Two-way binding).
Then React happened.

## 1. React (Facebook)
Philosophy: **"It's just JavaScript."**
JSX allows you to write HTML inside JS.
Component-Based Architecture.
One-Way Data Flow (Props down, Events up).
Virtual DOM (Fast).
Pros: Huge ecosystem (Next.js), Jobs, Corporate backing.
Cons: Learning curve (useEffect hooks are confusing).

## 2. Vue (Evan You)
Evan You worked at Google (on Angular). He wanted the good parts of Angular without the bloat.
He built Vue.
Philosophy: **"Progressive Framework."**
Start with a CDN script tag. Add complexity later.
It separates HTML, CSS, JS clearly.
It feels more like "traditional" web dev.
Pros: Easy to learn, beautiful documentation.
Cons: Smaller job market in the US (Huge in China).

## 3. Svelte (The Compiler)
React and Vue do the work in the *Browser* (Runtime).
Svelte does the work in the *Build Step* (Compile time).
It converts your code to tiny vanilla JS.
No Virtual DOM.
It is faster and lighter.
"The framework that disappears."

### Fact Box
*   **Virtual DOM:** It's a copy of the UI in memory. React compares the Copy vs the Real DOM. It only updates the parts that changed. It's like editing a draft before printing the final paper.
        `,
    },
    {
        slug: "rest-vs-graphql-api-design",
        title: "Overfetching: REST vs GraphQL",
        description: "Why Facebook invented GraphQL to fix the mobile app problem. Stop asking for the whole user object when you just need their name.",
        category: "Tech",
        publishedAt: "2025-09-15",
        imageUrl: "/images/graphql-query.png",
        tags: ["Tech", "Code", "API", "Deep Dive"],
        content: `
## Introduction: The Menu
REST is like a menu.
GET /user/1.
The server gives you the whole User object (Name, Age, Email, Address, Friends...).
But you only wanted the Name.
This is **Overfetching**. Wasted data.
Or, you need the User's friends.
So you call GET /user/1/friends.
This is **Underfetching** (Multiple round trips).

## 1. The GraphQL Solution
GraphQL is a query language.
"I want User { name, friends { name } }".
The server returns *exactly* that.
1 Request. Precise data.
Facebook built it because mobile networks were slow (2G).
Every byte mattered.

## 2. The Tradeoff (Complexity)
REST is simple. It uses HTTP caching.
GraphQL breaks HTTP caching (everything is a POST request).
It moves complexity to the client.
You need a Schema. You need Resolvers.
For simple apps, REST is fine.
For complex data graphs (Social Networks), GraphQL is supreme.

## 3. RPC (Remote Procedure Call)
tRPC (used in the T3 Stack).
If you use TypeScript on both ends...
You can call server functions directly from the client.
\`const user = await server.getUser()\`.
No API endpoints. Just code.
It's the future for full-stack devs.

### Fact Box
*   **HATEOAS:** "Hypertext As The Engine Of Application State". The pure version of REST where the API tells you what you can do next (like links on a webpage). Nobody actually does this except giant nerds.
        `,
    },
    {
        slug: "webassembly-wasm-browser-performance",
        title: "Running Doom in the Browser: WebAssembly",
        description: "JavaScript is slow. C++ is fast. How WASM lets you run Photoshop, Video Editors, and Games inside Chrome.",
        category: "Tech",
        publishedAt: "2025-09-16",
        imageUrl: "/images/wasm-code.png",
        tags: ["Tech", "Code", "Future", "Deep Dive"],
        content: `
## Introduction: JS is single-threaded
JavaScript was built in 10 days to make buttons blink.
It wasn't meant to run Figma or Unreal Engine.
It is interpreted (slow).
We needed a way to run machine code in the browser.

## 1. What is WASM?
It is a binary instruction format.
You write code in C++, Rust, or Go.
You compile it to a .wasm file.
The browser runs it at near-native speed.
It is a virtual CPU inside Chrome.

## 2. Cases
*   **Figma:** The entire design engine is written in C++ and compiled to WASM. That's why it's so fast.
*   **Google Earth:** The 3D rendering uses WASM.
*   **FFmpeg.wasm:** You can edit video inside the browser without uploading files to a server.
*   **Doom:** Yes, you can play Doom.

## 3. Will it kill JS?
No.
WASM cannot touch the DOM directly (yet).
It works *with* JS.
JS handles the UI (Buttons, Clicks).
WASM handles the heavy math (Image processing, Physics).
The future is Hybrid.

### Fact Box
*   **Blazor:** Microsoft's framework lets you write C# code that compiles to WASM. You can build a whole frontend website using C# instead of JavaScript. Enterprise devs rejoice.
        `,
    },
    {
        slug: "threejs-webgl-3d-graphics",
        title: "3D on the Web: The Magic of Three.js",
        description: "How to accept the GPU from JavaScript. Building immersive worlds, games, and data visualizations in the browser.",
        category: "Tech",
        publishedAt: "2025-09-17",
        imageUrl: "/images/threejs-cube.png",
        tags: ["Tech", "Code", "3D", "Deep Dive"],
        content: `
## Introduction: WebGL
WebGL is a low-level API to talk to the Graphics Card (GPU).
It is incredibly hard to write.
"Draw a triangle" takes 100 lines of code.
Ricardo Cabello (Mr. Doob) wrote a wrapper: **Three.js**.
"Draw a cube" takes 3 lines.

## 1. The Scene Graph
*   **Scene:** The universe.
*   **Camera:** The eye.
*   **Renderer:** The painter.
*   **Mesh:** The object (Geometry + Material).
You add the Mesh to the Scene. Point the Camera. Tell the Renderer to render.
Result: 60 FPS 3D graphics.

## 2. Shaders (GLSL)
The real magic happens in Shaders.
Vertex Shader: Where are the points?
Fragment Shader: What color is the pixel?
You can create water, fire, smoke, and holograms using math.
Shader programming is a dark art.

## 3. The Metaverse
If the Metaverse happens, it will be via WebXR (Virtual Reality in the browser).
Three.js supports VR/AR out of the box.
You put on a headset, go to a URL, and you are there.
No app store. No download.
The "Open Metaverse".

### Fact Box
*   **Bruno Simon:** He made a portfolio website where you drive a toy car around a 3D world to see his projects. It went viral and proved that 3D web is ready for mainstream.
        `,
    },
    {
        slug: "serverless-aws-lambda-cloud",
        title: "There is No Server: The Serverless Myth",
        description: "Of course there are servers. But *you* don't manage them. Why Amazon Lambda changed how we build backends.",
        category: "Tech",
        publishedAt: "2025-09-18",
        imageUrl: "/images/serverless-cloud.png",
        tags: ["Tech", "Code", "Cloud", "Deep Dive"],
        content: `
## Introduction: The Old Way (EC2)
You rent a virtual computer (EC2).
You install Linux, Node.js, Nginx.
You pay for it 24/7. Even if nobody visits your site at 3am.
You have to patch security updates.
Painful.

## 1. AWS Lambda
"Functions as a Service".
You upload a single function: \`const hello = () => "Hello"\`.
When a user visits /hello... Amazon spins up a container, runs the code, returns the result, and *kills* the container.
You pay **per millisecond**.
If nobody visits, you pay $0.
If 1 million people visit, Amazon spins up 1 million containers instantly. (Scalability).

## 2. Cold Starts
The downside.
If nobody visited for a while... the container is "Cold".
It takes 1-2 seconds to boot up.
The user waits.
Solution: "Keep Warm" pings. Or use "Edge Computing" (Cloudflare Workers) which start instantly (0ms cold start).

## 3. Vendor Lock-in
If you write for Lambda, you are married to Amazon.
It is hard to move to Google Cloud or Azure.
But the developer experience (DX) is so good (Vercel, Netlify) that nobody cares.
"Focus on your code, not the infrastructure."

### Fact Box
*   **The Bill:** A startup can run for months on the "Free Tier". But one bad loop (Function A calls Function B calls Function A...) can cost you $10,000 in one night. Always set billing alerts.
        `,
    },
];
