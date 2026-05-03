export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About me</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            I'm a curious computer science student with a passion for building things that
            feel as good as they look. After two years of work-study, I've grown comfortable
            shipping features end-to-end — from database schema to pixel-perfect UI.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I love clean code, thoughtful interfaces, and the small moments of magic that
            make a product memorable. Always learning, always shipping.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary/30 via-accent-glow/20 to-primary/10 p-1">
            <div className="h-full w-full rounded-[22px] bg-surface grid place-items-center text-7xl">
              👩‍💻
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-2xl border border-border bg-card px-4 py-3 shadow-glow">
            <p className="text-xs text-muted-foreground">Currently exploring</p>
            <p className="font-semibold">TypeScript & DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
}