import { Briefcase, GraduationCap } from "lucide-react";

const entries = [
  {
    icon: GraduationCap,
    role: "Diplôme d'ingénieur en Réseaux et Informatique",
    org: "ENSEIRB-MATMECA Bordeaux",
    period: "2026 — 2029",
    bullets: [
      "Conception et administration des réseaux (LAN, WAN, cybersécurité)",
      "Architecture des systèmes distribués et cloud computing",
      "Développement logiciel avancé et ingénierie système",
      "Gestion de projets techniques et travail en équipe",
    ],
  },
  {
    icon: GraduationCap,
    role: "BUT Informatique",
    org: "IUT de Bayonne et du pays Basque",
    period: "2023 — 2026",
    bullets: [
      "Programmation (Java, JavaScript, C++) et développement web",
      "Bases de données relationnelles et SQL",
      "Conception d’applications et architecture logicielle",
      "Projets tutorés en équipe et mise en pratique professionnelle",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Formation</h2>
      <p className="mt-2 text-muted-foreground">Mon parcours académique et mes qualifications.</p>
      <ol className="relative mt-10 space-y-6 border-l border-border pl-6">
        {entries.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[35px] top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent-glow text-primary-foreground shadow-glow">
              <e.icon className="h-4 w-4" />
            </span>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{e.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/90">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent-glow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
