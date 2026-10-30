import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ctaDestination } from "@/content/landing";

export function todayBR() {
  return new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

/** Client-only date (avoids SSR/hydration mismatch). */
export function useToday() {
  const [d, setD] = useState("");
  useEffect(() => setD(todayBR()), []);
  return d;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const bgs = {
  white: "bg-background",
  mint: "bg-mint",
  peach: "bg-peach-light",
  cream: "bg-cream",
  deep: "bg-primary text-primary-foreground",
} as const;

export function Section({ bg, children, className = "" }: { bg: keyof typeof bgs; children: ReactNode; className?: string }) {
  return (
    <section className={`section-y ${bgs[bg]} ${className}`}>
      <Reveal className="container-lp">{children}</Reveal>
    </section>
  );
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`mx-auto max-w-[640px] text-center text-2xl leading-tight font-bold text-primary md:text-4xl ${className}`}>{children}</h2>;
}

export function Hl({ children }: { children: ReactNode }) {
  return <span className="hl">{children}</span>;
}

export function Pill({ children, tone = "pastel" }: { children: ReactNode; tone?: "pastel" | "peach" }) {
  return (
    <span className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase text-primary ${tone === "pastel" ? "bg-pastel" : "bg-peach"}`}>
      {children}
    </span>
  );
}

export function Cta({ children, inverted = false, checkout = false }: { children: ReactNode; inverted?: boolean; checkout?: boolean }) {
  return (
    <a
      href={ctaDestination(checkout)}
      className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-8 text-center text-sm font-bold tracking-wide uppercase transition-transform duration-200 hover:-translate-y-0.5 shadow-soft sm:w-auto md:text-base ${
        inverted ? "bg-background text-primary" : "bg-primary text-primary-foreground"
      }`}
    >
      {children}
      <ArrowRight className="h-5 w-5 shrink-0" />
    </a>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-left">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pastel text-primary">
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Black placeholder block — swap for a real <img> later. */
export function Placeholder({ className = "", label }: { className?: string; label?: string }) {
  return <div role="img" aria-label={label ?? "Imagem em breve"} className={`bg-placeholder ${className}`} />;
}

/** Duplicated groups keep the loop seamless at its boundary. */
export function Marquee({
  items,
  continuous = false,
  direction = "left",
}: {
  items: ReactNode[];
  continuous?: boolean;
  direction?: "left" | "right";
}) {
  const anim = continuous
    ? direction === "right"
      ? "animate-marquee-continuous-right"
      : "animate-marquee-continuous"
    : "animate-marquee";
  return (
    <div className="relative overflow-hidden">
      <div className={`${anim} flex w-max`}>

        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-4 pr-4" aria-hidden={group === 1}>
            {items.map((it, i) => <div key={i} className="shrink-0">{it}</div>)}
          </div>
        ))}
      </div>
      <div className="fade-edge-l pointer-events-none absolute inset-y-0 left-0 w-12" />
      <div className="fade-edge-r pointer-events-none absolute inset-y-0 right-0 w-12" />
    </div>
  );
}
