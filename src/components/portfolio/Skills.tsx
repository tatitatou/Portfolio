import { Code, Server, Wrench, Database } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS", "React"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["PHP", "Symfony", "Node.js", "REST APIs", "Next.js"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["SQL", "MySQL", "PostgreSQL", "Doctrine", "MongoDB", "Prisma"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
      <p className="mt-2 text-muted-foreground">My toolkit, organized by category.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent-glow text-primary-foreground">
              <g.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}