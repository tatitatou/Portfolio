import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contactez-moi</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
             Vous recherchez un développeur full stack motivé pour rejoindre votre équipe ou concrétiser un projet ? 
            N’hésitez pas à me contacter, je serai ravi d’échanger avec vous.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-elevated">
              <Mail className="h-5 w-5 text-accent-glow" />
              <span className="text-sm">hello@example.com</span>
            </a>
            <div className="flex gap-3">
              <a href="https://github.com" className="inline-flex flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-elevated">
                <Github className="h-5 w-5" /> <span className="text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com" className="inline-flex flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-elevated">
                <Linkedin className="h-5 w-5" /> <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-surface p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" id="name" />
            <Field label="Email" id="email" type="email" />
          </div>
          <div>
            <label htmlFor="msg" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea id="msg" rows={5} required className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            {sent ? "Message sent ✓" : (<><Send className="h-4 w-4" /> Send Message</>)}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={id} type={type} required className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}