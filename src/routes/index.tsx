import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ProjectRow, type Project } from "@/components/portfolio/ProjectRow";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Camille — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a computer science student & full stack developer. Vue, Symfony, PHP, SQL projects with a Netflix-style browsing experience.",
      },
      { property: "og:title", content: "Camille — Full Stack Developer" },
      { property: "og:description", content: "Modern portfolio with Netflix-style navigation. Vue, Symfony, PHP." },
    ],
  }),
  component: Index,
});

const featured: Project[] = [
  { id: "f1", title: "EduTrack", emoji: "🎓", gradient: "linear-gradient(135deg,#6366f1,#22d3ee)", description: "Symfony + Vue platform to track work-study apprentices, with dashboards for tutors and live progress reports.", tech: ["Symfony", "Vue.js", "MySQL", "Tailwind"], github: "#", demo: "#" },
  { id: "f2", title: "Bloom CMS", emoji: "🌱", gradient: "linear-gradient(135deg,#a78bfa,#f472b6)", description: "Headless CMS with a custom block editor and role-based publishing workflow.", tech: ["PHP", "Symfony", "Vue.js", "PostgreSQL"], github: "#", demo: "#" },
  { id: "f3", title: "Constellation", emoji: "✨", gradient: "linear-gradient(135deg,#0ea5e9,#8b5cf6)", description: "Interactive star map built in vanilla JS & Canvas — a side project that taught me a lot.", tech: ["JavaScript", "Canvas", "CSS"], github: "#", demo: "#" },
  { id: "f4", title: "Atelier API", emoji: "🛠️", gradient: "linear-gradient(135deg,#10b981,#3b82f6)", description: "REST API for a craft workshop, exposing inventory, orders and a little admin UI.", tech: ["Symfony", "API Platform", "MySQL"], github: "#" },
  { id: "f5", title: "Pixel Diary", emoji: "📓", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)", description: "A tiny journaling app with mood tracking and a charming pixel-art theme.", tech: ["Vue.js", "Vite", "SQLite"], github: "#", demo: "#" },
];

const webApps: Project[] = [
  { id: "w1", title: "MealMate", emoji: "🍜", gradient: "linear-gradient(135deg,#fb7185,#f59e0b)", description: "Weekly meal planner with shopping list export.", tech: ["Vue.js", "Pinia", "PHP"], demo: "#" },
  { id: "w2", title: "BookNest", emoji: "📚", gradient: "linear-gradient(135deg,#34d399,#0ea5e9)", description: "Personal library with reviews and reading goals.", tech: ["Symfony", "Twig", "MySQL"], github: "#" },
  { id: "w3", title: "TripWeave", emoji: "🧭", gradient: "linear-gradient(135deg,#8b5cf6,#22d3ee)", description: "Collaborative travel itinerary builder.", tech: ["Vue.js", "Node", "Postgres"], demo: "#" },
  { id: "w4", title: "FocusFlow", emoji: "🎯", gradient: "linear-gradient(135deg,#f472b6,#6366f1)", description: "Pomodoro + task board for deep work sessions.", tech: ["JavaScript", "CSS"], github: "#" },
];

const backend: Project[] = [
  { id: "b1", title: "Auth Lab", emoji: "🔐", gradient: "linear-gradient(135deg,#1e293b,#475569)", description: "Hand-rolled JWT auth flow with refresh rotation.", tech: ["Symfony", "JWT"], github: "#" },
  { id: "b2", title: "Data Pipe", emoji: "📊", gradient: "linear-gradient(135deg,#0f766e,#0ea5e9)", description: "ETL pipeline aggregating CSVs into a clean SQL warehouse.", tech: ["PHP", "MySQL", "CLI"], github: "#" },
  { id: "b3", title: "Webhook Hub", emoji: "🪝", gradient: "linear-gradient(135deg,#7c3aed,#ec4899)", description: "A lightweight webhook router with retries and signing.", tech: ["Node.js", "Express"], github: "#" },
  { id: "b4", title: "Bench API", emoji: "⚡", gradient: "linear-gradient(135deg,#ef4444,#f59e0b)", description: "Stress-tested REST API with caching strategies.", tech: ["Symfony", "Redis"], github: "#" },
];

const learning: Project[] = [
  { id: "l1", title: "Tiny Compiler", emoji: "🧪", gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)", description: "Toy compiler from a calculator language to JS.", tech: ["JavaScript"], github: "#" },
  { id: "l2", title: "CSS Garden", emoji: "🌸", gradient: "linear-gradient(135deg,#f9a8d4,#a78bfa)", description: "30 days of pure-CSS animations.", tech: ["CSS"], demo: "#" },
  { id: "l3", title: "Algo Visualizer", emoji: "🧠", gradient: "linear-gradient(135deg,#22c55e,#06b6d4)", description: "Visualizing sorting & path-finding algorithms.", tech: ["Vue.js"], demo: "#" },
  { id: "l4", title: "Shader Sketch", emoji: "🎨", gradient: "linear-gradient(135deg,#6366f1,#ec4899)", description: "First steps with WebGL shaders.", tech: ["WebGL", "GLSL"], github: "#" },
];

function Index() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div id="projects" className="space-y-10 py-10">
          <ProjectRow title="Featured Projects" projects={featured} onOpen={setSelected} />
          <ProjectRow title="Web Applications" projects={webApps} onOpen={setSelected} />
          <ProjectRow title="Backend Projects" projects={backend} onOpen={setSelected} />
          <ProjectRow title="Learning & Experiments" projects={learning} onOpen={setSelected} />
        </div>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Camille · Built with care, Vue energy & a lot of ☕
      </footer>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
