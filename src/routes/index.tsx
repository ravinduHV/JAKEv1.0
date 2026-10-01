import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import faculty from "@/assets/faculty-image-with-jake.png";
import logo from "@/assets/jake-logo.png";
import robot from "@/assets/jake-robot.png";
import robots from "@/assets/jake-robots.png";
import { Parallax, ScrollAtmosphere } from "@/components/jake/ScrollMotion";
import { RobotParticles } from "@/components/jake/RobotParticles";
import { Label, Reveal } from "@/components/jake/ui";
import { Button } from "@/components/ui/button";
import { capabilities, experience, futureEnvironments, heroTags, journey } from "@/content/jake";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Project JAKE 1.0 — Engineering Intelligence in Motion" },
    { name: "description", content: "Meet JAKE, an autonomous service-robot concept being developed for the Faculty of Engineering at the University of Sri Jayewardenepura." },
    { property: "og:title", content: "Project JAKE 1.0 — Engineering Intelligence in Motion" },
    { property: "og:description", content: "A human-centered service-robot concept designed to assist, guide, inform, and support everyday activity." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const nav = [["Home", "#top"], ["JAKE", "#jake"], ["Capabilities", "#capabilities"], ["Vision", "#vision"], ["Development", "#development"], ["Join", "#join"]] as const;

function NavLink({ href, children, onClick }: { href: string; children: string; onClick?: () => void }) {
  return <a href={href} onClick={onClick} className="story-link font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">{children}</a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollAtmosphere />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 lg:flex lg:px-12">
          <a href="#top" className="flex min-w-0 items-center"><img src={logo} alt="JAKE logo" className="logo-glow h-10 w-auto shrink-0 object-contain" /></a>
          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-7 lg:flex">{nav.map(([label, href]) => <NavLink key={href} href={href}>{label}</NavLink>)}</nav>
          <Button asChild size="sm" className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.16em] sm:inline-flex lg:ml-6"><a href="#join">Join JAKE <ArrowDownRight /></a></Button>
          <Button type="button" variant="ghost" size="icon" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)} className="lg:hidden"><Menu /></Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background/95 px-5 py-5 backdrop-blur-xl lg:hidden"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5">{nav.map(([label, href]) => <NavLink key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}</div></nav>}
      </header>

      <main className="relative z-10">
        <section id="top" className="bg-page relative min-h-[min(940px,100svh)] overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-4 lg:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <Reveal className="relative z-10 min-w-0 py-5">
              <Label><span className="text-primary">●</span> Project JAKE 1.0 · In development</Label>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.35rem,8.7vw,4.8rem)] font-bold uppercase leading-[1.02] sm:mt-7 lg:text-[4.65rem] xl:text-[5.35rem]">Engineering<br />Intelligence<br /><span className="text-primary">in Motion.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">JAKE is an autonomous service-robot concept being developed for the Faculty of Engineering, University of Sri Jayewardenepura.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">Designed to assist people, simplify everyday interactions, and explore how intelligent service robots can operate in real environments.</p>
              <div className="mt-8 grid gap-3 sm:flex">
                <Button asChild size="lg" className="glow h-12 font-mono text-[11px] uppercase tracking-[0.16em]"><a href="#jake">Explore JAKE <ArrowDownRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="h-12 font-mono text-[11px] uppercase tracking-[0.16em]"><a href="#join">Join the project</a></Button>
              </div>
            </Reveal>
            <Reveal className="relative flex min-h-[330px] items-end justify-center sm:min-h-[420px] lg:min-h-[640px]">
              <div className="robot-halo" />
              <RobotParticles />
              <Parallax strength={0.06} className="relative flex h-full items-end justify-center"><img src={robot} alt="JAKE service robot" className="relative max-h-[410px] w-auto max-w-full object-contain robot-shadow sm:max-h-[520px] lg:max-h-[650px]" /></Parallax>
            </Reveal>
          </div>
          <div className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-2 border-t border-border pt-5 sm:mt-10 sm:pt-7">{heroTags.map((tag) => <span key={tag} className="rounded-sm border border-border bg-card/45 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm sm:text-[10px]">{tag}</span>)}</div>
        </section>

        <section id="jake" className="light-section bg-light relative border-t border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <Reveal>
              <Label><span className="text-primary">01</span> · Meet JAKE</Label>
              <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-[1.08] sm:text-5xl">A useful presence, designed around people.</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">JAKE explores how a service robot can welcome, guide, inform, and support people through simple everyday interactions.</p>
              <a href="#capabilities" className="story-link mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">See what JAKE can do <ArrowRight className="h-4 w-4" /></a>
            </Reveal>
            <Reveal className="relative min-w-0 overflow-hidden rounded-md border border-border bg-card shadow-xl"><Parallax strength={0.025}><img src={faculty} alt="JAKE at the Faculty of Engineering" className="aspect-[4/3] w-full scale-[1.08] object-cover object-[54%_center] sm:aspect-[16/10]" /></Parallax><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-5 pt-20"><Label className="text-foreground">Faculty of Engineering · USJ</Label></div></Reveal>
          </div>
        </section>

        <section id="capabilities" className="relative border-t border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl"><Label><span className="text-primary">02</span> · Capabilities</Label><h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-[1.08] sm:text-5xl">Five ways JAKE is being designed to help.</h2><p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">Purposeful assistance, expressed through a small set of clear and useful experiences.</p></Reveal>
            <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
              {capabilities.map((item, index) => <Reveal key={item.n} className={`capability-card group rounded-md border border-border bg-card/55 p-6 backdrop-blur-sm lg:col-span-2 ${index > 2 ? "lg:col-span-3" : ""}`}><span className="font-mono text-[11px] text-primary">{item.n}</span><h3 className="mt-8 font-display text-base uppercase sm:text-lg">{item.t}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{item.d}</p></Reveal>)}
            </div>
          </div>
        </section>

        <section id="vision" className="relative overflow-hidden border-t border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal className="relative flex min-h-[410px] items-end justify-center sm:min-h-[560px]"><span aria-hidden="true" className="absolute left-0 top-0 font-display text-[5.2rem] font-bold uppercase leading-none text-foreground/[0.035] sm:text-[9rem]">People</span><Parallax strength={0.055}><img src={robots} alt="JAKE front and rear views" className="relative max-h-[560px] w-full object-contain robot-shadow" /></Parallax></Reveal>
            <div>
              <Reveal><Label><span className="text-primary">03</span> · Designed around people</Label><h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-[1.08] sm:text-5xl">A simple experience from arrival to assistance.</h2><p className="mt-5 max-w-lg text-muted-foreground sm:text-lg">JAKE is envisioned as an approachable point of support—easy to understand, useful in the moment, and ready to let people continue with confidence.</p></Reveal>
              <ol className="mt-10 border-y border-border">{experience.map((step, index) => <Reveal key={step} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-5 last:border-0"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><h3 className="min-w-0 font-display text-lg uppercase sm:text-xl">{step}</h3><ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" /></Reveal>)}</ol>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-border">
          <Parallax strength={0.018}><img src={faculty} alt="JAKE in the Faculty of Engineering environment" className="h-[72svh] min-h-[520px] w-full scale-[1.08] object-cover object-[53%_center]" /></Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20"><Reveal className="mx-auto max-w-7xl"><Label><span className="text-primary">04</span> · Starting at the faculty</Label><h2 className="mt-5 max-w-4xl font-display text-3xl font-semibold uppercase leading-[1.08] sm:text-5xl">A real environment for a meaningful first step.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">The Faculty of Engineering at the University of Sri Jayewardenepura gives JAKE a grounded place to explore assistance in everyday life.</p></Reveal></div>
        </section>

        <section id="development" className="light-section bg-light relative border-t border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal><Label><span className="text-primary">05</span> · Development</Label><h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-[1.08] sm:text-5xl">From concept to reality.</h2><div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-primary/30 bg-primary/10 px-4 py-3"><span className="h-2 w-2 rounded-full bg-primary pulse" /><span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">JAKE 1.0 · Currently in development</span></div></Reveal>
              <ol className="border-y border-border">{journey.map((stage, index) => <Reveal key={stage} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 border-b border-border py-5 last:border-0 sm:gap-8"><span className="font-display text-2xl text-primary/45 sm:text-3xl">0{index + 1}</span><h3 className="font-display text-base uppercase sm:text-xl">{stage}</h3></Reveal>)}</ol>
            </div>
            <Reveal className="mt-20 border-t border-border pt-14 sm:mt-28"><Label>Future direction</Label><div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><h3 className="font-display text-3xl uppercase leading-[1.08] sm:text-5xl">Designed to go further.</h3><div><p className="max-w-lg text-muted-foreground sm:text-lg">Potential future applications could explore a wider range of service environments.</p><div className="mt-7 flex flex-wrap gap-2">{futureEnvironments.map((item) => <span key={item} className="rounded-sm border border-border bg-card/55 px-4 py-3 text-sm">{item}</span>)}</div></div></div></Reveal>
            <p className="mt-14 max-w-3xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">Capabilities shown on this website represent the intended direction of the project and may evolve throughout development.</p>
          </div>
        </section>

        <section id="join" className="bg-page relative overflow-hidden border-t border-border px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="join-glow" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.58fr]">
            <Reveal><Label><span className="text-primary">06</span> · Join Project JAKE</Label><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">Build what<br /><span className="text-primary">moves next.</span></h2><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Be part of an emerging service-robot initiative shaped by people, purpose, and a real-world vision.</p><Button asChild size="lg" className="glow mt-9 h-12 font-mono text-[11px] uppercase tracking-[0.16em]"><a href="#top">Join Project JAKE <ArrowRight /></a></Button></Reveal>
            <Reveal className="hidden justify-center lg:flex"><Parallax strength={0.045}><img src={robot} alt="JAKE service robot" className="max-h-[520px] w-auto robot-shadow" /></Parallax></Reveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border bg-background px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-5"><img src={logo} alt="JAKE — Japura Autonomous Kiosk Engine" className="logo-glow h-14 w-auto min-w-0 object-contain" /><div className="min-w-0 text-right"><p className="font-display text-[10px] uppercase sm:text-xs">Faculty of Engineering</p><p className="mt-1 text-xs text-muted-foreground">University of Sri Jayewardenepura</p></div></div></footer>
    </div>
  );
}
