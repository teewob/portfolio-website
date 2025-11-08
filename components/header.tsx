"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Visual Stories", href: "/photography", subtitle: "Photography" },
  { name: "Moving Pictures", href: "/film", subtitle: "Film" },
  { name: "Drawn Worlds", href: "/drawings", subtitle: "Art" },
  { name: "Written Word", href: "/essays", subtitle: "Essays" },
  { name: "Sonic Landscapes", href: "/music", subtitle: "Music" },
  { name: "Connect", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 transition-all duration-500">
      <nav className="max-w-viewport mx-auto flex h-20 items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-xs tracking-[0.5em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-300"
        >
          Tiara Tenorio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative text-[13px] uppercase tracking-[0.28em] font-display transition-all duration-300",
                pathname === item.href ? "text-foreground" : "text-muted-foreground/80 hover:text-foreground",
              )}
            >
              <span className="relative pb-1">
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-foreground/80 transition-all duration-300",
                    pathname === item.href ? "w-full" : "group-hover:w-full",
                  )}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/80 bg-background/80 backdrop-blur-md"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background">
            <div className="mt-12 flex flex-col gap-7">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group text-2xl font-display uppercase tracking-[0.3em] transition-colors",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground",
                  )}
                >
                  <div>
                    {item.name}
                    {item.subtitle && (
                      <div className="mt-2 text-sm font-sans font-normal tracking-normal text-muted-foreground/80">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
