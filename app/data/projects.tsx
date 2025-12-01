// data/projects.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  color?: string;
}

export const projects: Project[] = [
  {
    slug: "leetchamp",
    title: "LeetChamp",
    description:
      "A responsive Twitter/X clone built with HTML, Tailwind CSS, and React featuring core social media functionalities like posting, following, and user interactions.​",
    color: "#f8edeb",
  },
  {
    slug: "ologvisualizer",
    title: "O-Log Visualizer",
    description:
      "An interactive web tool that visualizes O(log n) algorithmic complexity and Big O notation concepts through graphical representations.",
    color: "#fcd5ce",
  },
  {
    slug: "twitter",
    title: "Twitter Clone",
    description:
      "A responsive Twitter/X clone built with HTML, Tailwind CSS, and React featuring core social media functionalities like posting, following, and user interactions.​",
    color: "#f49595",
  },
  {
    slug: "officialportfolio",
    title: "Official Portfolio",
    description:
      "Frontend developer specializing in React, Next.js, and modern web technologies with 2+ years of UI/UX design experience. I create fast, interactive applications that blend algorithmic problem-solving with thoughtful design. Currently building educational tools and visualization platforms to help developers master data structures and algorithms",
    color: "#fec89a",
  },
];
