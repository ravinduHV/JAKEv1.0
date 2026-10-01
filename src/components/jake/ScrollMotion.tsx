import { useEffect, useRef, type ReactNode } from "react";

export function ScrollAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = window.scrollY;
    let target = window.scrollY;

    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      current += (target - current) * 0.055;
      element.style.setProperty("--scroll-progress", String(current / max));
      if (Math.abs(target - current) > 0.1) frame = requestAnimationFrame(update);
      else frame = 0;
    };
    const onScroll = () => {
      target = window.scrollY;
      if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className="scroll-atmosphere" />;
}

export function Parallax({ children, className = "", strength = 0.08 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = 0;
    let target = 0;

    const measure = () => {
      const bounds = element.getBoundingClientRect();
      const centerOffset = bounds.top + bounds.height / 2 - window.innerHeight / 2;
      const mobileFactor = window.innerWidth < 768 ? 0.35 : 1;
      target = Math.max(-44, Math.min(44, -centerOffset * strength * mobileFactor));
    };
    const update = () => {
      current += (target - current) * 0.075;
      element.style.setProperty("--parallax-y", `${current}px`);
      if (Math.abs(target - current) > 0.05) frame = requestAnimationFrame(update);
      else frame = 0;
    };
    const onScroll = () => {
      measure();
      if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(update);
    };

    measure();
    current = target;
    element.style.setProperty("--parallax-y", `${current}px`);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return <div ref={ref} className={`parallax ${className}`}>{children}</div>;
}