import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}>
      {children}
    </div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground ${className}`}>{children}</span>;
}

export function Tag({ kind }: { kind: "doc" | "concept" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] ${kind === "doc" ? "border-primary/40 text-primary" : "border-border text-muted-foreground"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${kind === "doc" ? "bg-primary" : "bg-muted-foreground"}`} />
      {kind === "doc" ? "Documented" : "Conceptual / Future"}
    </span>
  );
}

export function Section({ id, index, label, title, children, className = "", light = false }: { light?: boolean; id?: string; index: string; label: string; title: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative border-t border-border px-6 py-24 md:px-12 md:py-32 ${light ? "light-section bg-light" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Label><span className="text-primary">{index}</span> — {label}</Label>
          <h2 className="mt-5 max-w-4xl font-display text-2xl font-semibold uppercase leading-[1.15] tracking-tight md:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export function ImagePending({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`grid-bg relative flex items-center justify-center overflow-hidden rounded-md border border-border bg-card ${className}`}>
      {["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "left-3 bottom-3 border-l border-b", "right-3 bottom-3 border-r border-b"].map((c) => (
        <span key={c} className={`absolute h-4 w-4 border-primary ${c}`} />
      ))}
      <div className="text-center">
        <Label>{label}</Label>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Official image pending</p>
      </div>
    </div>
  );
}
