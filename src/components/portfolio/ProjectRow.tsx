import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  emoji: string;
  github?: string;
  demo?: string;
};

export function ProjectRow({
  title,
  projects,
  onOpen,
}: {
  title: string;
  projects: Project[];
  onOpen: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="group/row relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
      </div>

      <div className="relative">
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full glass border border-border p-2 opacity-0 transition-opacity group-hover/row:opacity-100 md:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full glass border border-border p-2 opacity-0 transition-opacity group-hover/row:opacity-100 md:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={ref}
          className="snap-row scrollbar-hide flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => onOpen(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      className={cn(
        "snap-card group relative shrink-0 cursor-pointer overflow-hidden rounded-xl border border-border bg-surface text-left transition-all duration-300",
        "w-[78%] sm:w-[44%] md:w-[32%] lg:w-[24%]",
        "hover:scale-[1.04] hover:shadow-glow hover:z-10",
      )}
    >
      <div
        className="aspect-video w-full"
        style={{ background: project.gradient }}
      >
        <div className="flex h-full items-center justify-center text-6xl">{project.emoji}</div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold tracking-tight">{project.title}</h4>
        <div
          className={cn(
            "grid transition-all duration-300",
            hover ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {project.github && (
                <span className="inline-flex items-center gap-1 rounded-md bg-foreground/90 px-2 py-1 text-xs text-background">
                  <Github className="h-3 w-3" /> Code
                </span>
              )}
              {project.demo && (
                <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-primary to-accent-glow px-2 py-1 text-xs text-primary-foreground">
                  <ExternalLink className="h-3 w-3" /> Demo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}