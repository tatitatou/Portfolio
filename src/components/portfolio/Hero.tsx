import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-hero pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute right-[-5%] top-40 h-96 w-96 rounded-full bg-accent-glow/25 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Salut, je suis <span className="gradient-text">Tatiana</span>.
            <br />
            Développeuse Full Stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Etudiante en informatique à l'IUT de Bayonne en alternance.
            Je crée des expériences web réfléchies avec Vue, Symfony et une esprit curieux.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Voir les Projets <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "2 ans", v: "Experience" },
              { k: "4+", v: "Projets" },
              { k: "7+", v: "Technologies" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl font-bold gradient-text">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}