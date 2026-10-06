import { useEffect, useRef, useState, type ImgHTMLAttributes, type ReactNode } from "react";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Bursts small hearts + confetti from a point on screen. */
export function celebrate(x?: number, y?: number, count = 36) {
  if (typeof document === "undefined" || prefersReducedMotion()) return;
  const cx = x ?? window.innerWidth / 2;
  const cy = y ?? window.innerHeight / 2;
  const colors = ["#f2b8c6", "#e8a0b4", "#d8c8ef", "#e6c77a", "#fff4e8"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const heart = i % 3 === 0;
    el.className = heart ? "bd-burst bd-burst-heart" : "bd-burst";
    if (heart) el.textContent = "♥";
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;
    el.style.color = colors[i % colors.length]!;
    el.style.background = heart ? "transparent" : colors[i % colors.length]!;
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 220;
    el.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    el.style.setProperty("--dy", `${Math.sin(angle) * dist - 120}px`);
    el.style.setProperty("--rot", `${Math.random() * 720 - 360}deg`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "li" | "article" }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={`bd-reveal ${shown ? "is-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** Image with graceful fallback when the file is missing. */
export function Photo({ className = "", alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`bd-photo-fallback ${className}`} role="img" aria-label={alt}>
        <span>♥</span>
      </div>
    );
  }
  return <img {...props} alt={alt} className={`bd-photo ${className}`} onError={() => setFailed(true)} />;
}

export function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <Reveal className="bd-section-title">
      {kicker && <p className="bd-kicker">{kicker}</p>}
      <h2 className="bd-script">{title}</h2>
      <span className="bd-flourish" aria-hidden>
        ✦
      </span>
    </Reveal>
  );
}
