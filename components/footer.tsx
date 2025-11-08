import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95">
      <div className="max-w-viewport mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div className="space-y-4">
            <div className="text-[12px] uppercase tracking-[0.4em] text-muted-foreground font-display">Studio</div>
            <h3 className="text-3xl md:text-4xl font-serif leading-snug text-foreground">Tiara Tenorio</h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground/90">
              Visual artist exploring culture, identity, and the environment through cinematic storytelling across film,
              photography, and illustration.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-[12px] uppercase tracking-[0.4em] text-muted-foreground font-display">
              Navigation
            </div>
            <ul className="space-y-2 text-sm font-display uppercase tracking-[0.25em] text-muted-foreground/80">
              <li>
                <Link href="/photography" className="transition-colors hover:text-foreground">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/film" className="transition-colors hover:text-foreground">
                  Film
                </Link>
              </li>
              <li>
                <Link href="/drawings" className="transition-colors hover:text-foreground">
                  Illustrations
                </Link>
              </li>
              <li>
                <Link href="/essays" className="transition-colors hover:text-foreground">
                  Essays
                </Link>
              </li>
              <li>
                <Link href="/music" className="transition-colors hover:text-foreground">
                  Music
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-[12px] uppercase tracking-[0.4em] text-muted-foreground font-display">Connect</div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/90 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/90 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/40 pt-6 text-xs uppercase tracking-[0.35em] text-muted-foreground/70 font-display md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Tiara Tenorio · All rights reserved.</p>
          <p>Based in Oʻahu</p>
        </div>
      </div>
    </footer>
  )
}
