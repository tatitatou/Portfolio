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
import { Education } from "@/components/portfolio/Education";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tatiana - Développeuse Full Stack" },
      {
        name: "description",
        content:
          "Portfolio moderne avec navigation à la Netflix. Vue, Symfony, PHP.",
      },
      { property: "og:title", content: "Tatiana - Développeuse Full Stack" },
      { property: "og:description", content: "Portfolio moderne avec navigation à la Netflix. Vue, Symfony, PHP." },
    ],
  }),
  component: Index,
});

const featured: Project[] = [
  { id: "f1", title: "Osasun Berri", image: "images/ob.png", gradient: "linear-gradient(135deg,#6366f1,#22d3ee)", description: "Osasun Berri est une plateforme numérique qui centralise les acteurs de santé du Pays Basque via une carte interactive et un suivi du parcours patient.", tech: ["Next.js", "React", "Prisma"], github: "#", demo: "https://osasunberri.alwaysdata.net/fr" },
  { id: "f2", title: "VHS", image: "/images/vhs.png", gradient: "linear-gradient(135deg,#a78bfa,#f472b6)", description: "VHS est une application web sociale qui permet aux passionnés de films et séries d’échanger, regarder du contenu ensemble à distance et débattre de façon ludique via des mini-jeux.", tech: ["Gestion de projet", "UML", "WBS"], github: "#", demo: "#" },
  { id: "f3", title: "Lecteur de Diaporama", image: "/images/diaporama.jpg", gradient: "linear-gradient(135deg,#0ea5e9,#8b5cf6)", description: "Lecteur de Diaporama pour visualiser des présentations interactives.", tech: ["QT"], github: "#", demo: "#" },
  { id: "f4", title: "LudoTek", image: "/images/ludotek.jpg", gradient: "linear-gradient(135deg,#10b981,#3b82f6)", description: "Bibliothèque de jeux avec options de locations", tech: ["Angular", "Laravel"], github: "https://github.com/tatitatou/LudoTek/tree/master" },
];

const learning: Project[] = [
  { id: "w1", title: "CONTROL", image: "/images/control.webp", gradient: "linear-gradient(135deg,#fb7185,#f59e0b)", description: "Logiciel intégré dans une imprimante 3D", tech: ["Vue.js", "Symfony", "Caddy"], demo: "https://lynxter.com/fr/logiciels/control" }
];

function Index() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="projects" className="space-y-10 py-10">
          <ProjectRow title="Projets universitaires" projects={featured} onOpen={setSelected} />
          <ProjectRow title="Apprentissage & Expériences" projects={learning} onOpen={setSelected} />
        </div>
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tatiana · Créer avec React, Tailwind & beaucoup de thé.
      </footer>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
