import { Briefcase, GraduationCap } from "lucide-react";

const entries = [
  {
    icon: Briefcase,
    role: "Alternante ingénieure",
    org: "BAMI",
    period: "2026 — 2029",
    bullets: [
      "Rédaction de spécifications techniques et documentation système",
      "Amélioration de la sécurité des intégrations Core Banking",
      "Fiabilisation des applications bancaires interconnectées",
      "Intégration dans des pipelines CI/CD et développement en environnement COBOL",
    ],
  },
  {
    icon: Briefcase,
    role: "Alternante ingénieure",
    org: "Lynxter",
    period: "2024 — 2026",
    bullets: [
      "Développement d’outils internes et logiciels de gestion d’imprimantes 3D",
      "Utilisation de Symfony, Vue.js et Nest.js pour des applications métier",
      "Déploiement et maintenance sur serveurs Apache",
      "Rédaction de documentation technique et participation à la coordination projet",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
      <p className="mt-2 text-muted-foreground">Two years of work-study and counting.</p>

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
