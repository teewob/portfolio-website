"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative">
          <div className="max-w-viewport mx-auto px-6 py-24 md:py-28">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[12px] font-display uppercase tracking-superwide text-muted-foreground/70">
                  Contact
                </div>
                <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                  Let's talk about your project, collaboration, or idea.
                </h1>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground/80">
                Share a few details about what you're working on, timelines, or the story you want to tell. I respond
                personally within a few days.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
              <Card className="rounded-[32px] border border-border/70 bg-card/80 p-0">
                <CardContent className="p-10">
                  {/* ✅ Form wired to FormSubmit */}
                  <form
                    action="https://formsubmit.co/tiaraoreos@gmail.com"
                    method="POST"
                    className="space-y-7"
                  >
                    {/* Hidden config fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    {/* change this to your deployed URL if you want a custom thank-you page */}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://filmsfromtiara.vercel.app/contact?sent=1"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New message from your portfolio contact form"
                    />

                    <div className="grid gap-2">
                      <Label
                        htmlFor="name"
                        className="font-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-full border-border/60 bg-background/60 px-6 py-3 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className="font-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-full border-border/60 bg-background/60 px-6 py-3 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label
                        htmlFor="subject"
                        className="font-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project, collaboration, or question"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="rounded-full border-border/60 bg-background/60 px-6 py-3 text-sm"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label
                        htmlFor="message"
                        className="font-display text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share the story you would like to craft together..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="rounded-3xl border-border/60 bg-background/60 px-6 py-4 text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full border border-border/70 bg-primary px-8 py-4 font-display text-[11px] uppercase tracking-[0.32em] text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* right column stays the same */}
              <div className="space-y-6">
                <Card className="rounded-[28px] border border-border/70 bg-card/80 p-0">
                  <CardContent className="flex items-start gap-4 p-7">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
                        Location
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground/85">Oʻahu, Hawaiʻi </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[28px] border border-border/70 bg-card/80 p-0">
                  <CardContent className="flex items-start gap-4 p-7">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
                        Email
                      </div>
                      <a
                        href="mailto:tiaraoreos@gmail.com"
                        className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
                      >
                        tiaraoreos@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[28px] border border-border/70 bg-card/80 p-0">
                  <CardContent className="flex items-start gap-4 p-7">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground">
                      <Instagram className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
                        Instagram
                      </div>
                      <a
                        href="https://instagram.com/filmsfromtiara"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
                      >
                        @filmsfromtiara
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[28px] border border-border/70 bg-card/80 p-0">
                  <CardContent className="flex items-start gap-4 p-7">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground">
                      <Linkedin className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
                        LinkedIn
                      </div>
                      <a
                        href="https://www.linkedin.com/in/tiara-marie-tenorio-345a9624b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
                      >
                        linkedin.com/in/tiara-marie-tenorio-345a9624b
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[28px] border border-border/70 bg-card/80 p-0">
                  <CardContent className="flex items-start gap-4 p-7">
                    <div className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-muted-foreground">
                      <Youtube className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
                        YouTube
                      </div>
                      <a
                        href="https://www.youtube.com/@tiaraoreos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
                      >
                        youtube.com/@tiaraoreos
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
