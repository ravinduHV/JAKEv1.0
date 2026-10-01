import { useEffect, useState } from "react";
import { Label, Tag } from "./ui";

const steps = ["Listening…", "Request recognized", "Destination found", "Route ready"];

export function VoiceDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % steps.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-md border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between">
        <Label>Interaction demo</Label>
        <Tag kind="concept" />
      </div>
      <div className="mt-8 flex items-end gap-1 h-12">
        {Array.from({ length: 32 }).map((_, k) => (
          <span key={k} className="w-1 flex-1 rounded-sm bg-primary/70 animate-wave" style={{ animationDelay: `${(k % 8) * 0.09}s`, opacity: i === 0 ? 1 : 0.35 }} />
        ))}
      </div>
      <p className="mt-8 font-display text-lg">"Where is the Mechatronics Laboratory?"</p>
      <ol className="mt-8 space-y-3">
        {steps.map((s, k) => (
          <li key={s} className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${k <= i ? "text-foreground" : "text-muted-foreground/40"}`}>
            <span className={`h-2 w-2 rounded-full ${k === i ? "bg-primary animate-pulse" : k < i ? "bg-primary" : "bg-border"}`} />
            {s}
          </li>
        ))}
      </ol>
      <div className={`mt-8 border-t border-border pt-5 transition-opacity ${i === 3 ? "opacity-100" : "opacity-30"}`}>
        <Label>Destination</Label>
        <p className="mt-1 font-display text-primary">Mechatronics Laboratory</p>
      </div>
    </div>
  );
}
