export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">À propos de moi</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Étudiante en informatique passionnée par la création d’expériences aussi agréables à
            utiliser qu’à regarder. Après deux années d’alternance, je suis à l’aise pour concevoir
            et livrer des fonctionnalités de bout en bout, de la modélisation de la base de données
            jusqu’à une interface soignée et précise.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            J’accorde une grande importance au code propre, aux interfaces réfléchies et aux petits
            détails qui rendent un produit mémorable. Toujours en train d’apprendre, toujours en
            train de construire.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary/30 via-accent-glow/20 to-primary/10 p-1">
            <div className="h-full w-full rounded-[22px] bg-surface grid place-items-center text-7xl">
              <img
                src="/images/photo.jpg"
                alt="Photo de profil"
                className="h-full w-full object-cover rounded-[22px]"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-2xl border border-border bg-card px-4 py-3 shadow-glow">
            <p className="text-xs text-muted-foreground">Actuellement</p>
            <p className="font-semibold">Alternante en BUT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
