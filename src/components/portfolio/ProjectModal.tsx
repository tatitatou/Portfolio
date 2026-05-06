import { X, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "./ProjectRow";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in-up"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-video w-full" style={{ background: project.gradient }}>
          <div className="flex h-full items-center justify-center text-8xl"><img src={project.image} alt={project.title} className="h-full w-full object-cover" /></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-elevated"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent-glow px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}