
export interface Module {
    id: string;
    name: string;
    description: string;
    blogSlugs: string[]; // Slugs of blogs that belong to this module
}

export interface Course {
    id: string;
    name: string;
    university: string;
    year: string;
    code: string;
    description: string;
    modules: Module[];
}

export const COURSES: Course[] = [
    {
        id: "ktu-btech-s1",
        name: "B.Tech First Year (Semester 1)",
        university: "APJ Abdul Kalam Technological University (KTU)",
        year: "First Year",
        code: "KTU-S1",
        description: "Common engineering subjects for all branches in the first semester.",
        modules: [
            {
                id: "eng-physics-a",
                name: "Engineering Physics A",
                description: "Introduction to quantum mechanics, optics, and oscillations.",
                blogSlugs: [
                    "quantum-entanglement",
                    "double-slit-experiment",
                    "time-dilation-gravity",
                    "what-is-frequency",
                    "what-is-resistance", // Linking related concepts
                ],
            },
            {
                id: "basic-electronics",
                name: "Basic Electrical & Electronics",
                description: "Fundamental concepts of circuits, voltage, and current.",
                blogSlugs: [
                    "what-is-voltage",
                    "voltage-vs-current",
                    "ac-vs-dc",
                    "series-vs-parallel",
                    "what-is-emi",
                    "why-transformers",
                ],
            },
            {
                id: "engineering-math",
                name: "Engineering Mathematics I",
                description: "Calculus and linear algebra foundations.",
                blogSlugs: [
                    "derivative-intuition",
                    "kmh-to-ms-conversion"
                ]
            },
            {
                id: "eng-chemistry",
                name: "Engineering Chemistry",
                description: "Molecular structures and chemical applications.",
                blogSlugs: [
                    "why-ice-floats",
                    "absorption-spectra-missing-lines"
                ]
            }
        ],
    },
    {
        id: "physics-major-101",
        name: "Physics Major (Year 1)",
        university: "Generic University",
        year: "First Year",
        code: "PHY-101",
        description: "Deep dive into classical and modern physics.",
        modules: [
            {
                id: "quantum-intro",
                name: "Introduction to Quantum Mechanics",
                description: "The weird world of the very small.",
                blogSlugs: [
                    "quantum-entanglement",
                    "double-slit-experiment",
                    "absorption-spectra-missing-lines"
                ]
            },
            {
                id: "relativity-intro",
                name: "Introduction to Relativity",
                description: "Understanding space, time, and gravity.",
                blogSlugs: [
                    "time-dilation-gravity"
                ]
            }
        ]
    }
];

export function getCourse(courseId: string): Course | undefined {
    return COURSES.find((c) => c.id === courseId);
}

export function getModule(courseId: string, moduleId: string): Module | undefined {
    const course = getCourse(courseId);
    return course?.modules.find((m) => m.id === moduleId);
}

export function searchCourses(query: string): Course[] {
    const lowerQuery = query.toLowerCase();
    return COURSES.filter(course =>
        course.name.toLowerCase().includes(lowerQuery) ||
        course.university.toLowerCase().includes(lowerQuery) ||
        course.code.toLowerCase().includes(lowerQuery)
    );
}
