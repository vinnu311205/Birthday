import { useEffect, useRef, useState } from "react";
import { cake, favoriteThings, featuredMemories, finale, hero, message, music, nav, surprise, timeline } from "@/content/birthday";
import { celebrate, Photo, Reveal, scrollToId, SectionTitle } from "./utils";

/* ---------- Navigation ---------- */
export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };
  return (
    <nav className={`bd-nav ${open ? "is-open" : ""}`} aria-label="Sections">
      <button className="bd-nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <span />
        <span />
      </button>
      <ul>
        {nav.map((n) => (
          <li key={n.id}>
            <button className={active === n.id ? "is-active" : ""} onClick={() => go(n.id)}>
              {n.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Ambient particles ---------- */
function Particles({ count = 22 }: { count?: number }) {
  const [items, setItems] = useState<{ l: number; d: number; s: number; t: number; c: string }[]>([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }, (_, i) => ({
        l: Math.random() * 100,
        d: Math.random() * 12,
        s: 6 + Math.random() * 10,
        t: 14 + Math.random() * 14,
        c: ["♥", "✦", "·", "✧"][i % 4]!,
      })),
    );
  }, [count]);
  return (
    <div className="bd-particles" aria-hidden>
      {items.map((p, i) => (
        <span key={i} style={{ left: `${p.l}%`, animationDelay: `-${p.d}s`, fontSize: p.s, animationDuration: `${p.t}s` }}>
          {p.c}
        </span>
      ))}
    </div>
  );
}

/* ---------- 1. Hero ---------- */
export function BirthdayHero() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <section id="home" className="bd-hero">
      <Particles />
      <div className="bd-hero-glow" aria-hidden />
      <div className="bd-hero-inner">
        <div className="bd-hero-text">
          <p className="bd-hero-greeting bd-script">{hero.greeting} <span className="bd-heart">♥</span></p>
          <p className="bd-hero-line">{hero.line}</p>
          <h1 className={`bd-hero-reveal ${revealed ? "is-in" : ""}`}>{hero.reveal}</h1>
          <button
            className={`bd-btn bd-btn-glow ${revealed ? "is-in" : ""}`}
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              celebrate(r.left + r.width / 2, r.top + r.height / 2, 44);
              setTimeout(() => scrollToId("message"), 700);
            }}
          >
            {hero.button}
          </button>
        </div>
        <div className="bd-hero-photo">
          <div className="bd-polaroid bd-tilt-r">
            <Photo src={hero.image} alt="Us, laughing" width={1600} height={1024} fetchPriority="high" />
            <span className="bd-tape" aria-hidden />
          </div>
        </div>
      </div>
      <button className="bd-scroll-cue" onClick={() => scrollToId("message")} aria-label="Scroll down">
        <span />
      </button>
    </section>
  );
}

/* ---------- 2. Message ---------- */
export function BirthdayMessage() {
  return (
    <section id="message" className="bd-section bd-message">
      <Reveal className="bd-message-photo">
        <div className="bd-polaroid bd-tilt-l">
          <Photo src={message.image} alt="A favourite memory" loading="lazy" width={800} height={1024} />
          <span className="bd-tape" aria-hidden />
        </div>
      </Reveal>
      <Reveal className="bd-message-card bd-glass" delay={150}>
        <h2 className="bd-script">{message.title} <span className="bd-heart">♥</span></h2>
        {message.paragraphs.map((p, i) => (
          <p key={i} className={i === 1 ? "bd-emph" : ""}>{p}</p>
        ))}
      </Reveal>
    </section>
  );
}

/* ---------- 3. Timeline ---------- */
export function FriendshipTimeline() {
  return (
    <section id="story" className="bd-section">
      <SectionTitle kicker="Our story" title="How It All Started..." />
      <ol className="bd-timeline">
        {timeline.map((t, i) => (
          <Reveal as="li" key={t.title} className={`bd-tl-item ${i % 2 ? "is-right" : ""}`}>
            <span className="bd-tl-dot" aria-hidden />
            <article className="bd-tl-card bd-glass">
              <Photo src={t.image} alt={t.title} loading="lazy" width={1024} height={768} />
              <div className="bd-tl-body">
                <span className="bd-tl-year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------- 5. Favorite things ---------- */
const icons: Record<string, string> = { smile: "☺", sparkle: "✧", heart: "♡", ear: "❀", chat: "❝", star: "✦" };
export function FavoriteThings() {
  return (
    <section id="about-you" className="bd-section">
      <SectionTitle kicker="About you" title="Things That Make You, You" />
      <div className="bd-things">
        {favoriteThings.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 100} className="bd-thing bd-glass">
            <span className="bd-thing-icon" aria-hidden>{icons[f.icon]}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 6. Featured memories ---------- */
export function MemoryCards() {
  return (
    <section className="bd-section">
      <SectionTitle kicker="Favourites" title="Our Favourite Memories" />
      <div className="bd-featured">
        {featuredMemories.map((m, i) => (
          <Reveal as="article" key={m.title} className={`bd-feature ${i % 2 ? "is-flip" : ""}`}>
            <div className="bd-feature-img">
              <Photo src={m.image} alt={m.title} loading="lazy" width={1024} height={768} />
            </div>
            <div className="bd-feature-body">
              <span className="bd-tl-year">{m.date}</span>
              <h3 className="bd-script">{m.title}</h3>
              <p>{m.story}</p>
              <span className="bd-flourish" aria-hidden>✦ ♥ ✦</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 7. Surprise ---------- */
export function SurpriseReveal() {
  const [open, setOpen] = useState(false);
  return (
    <section id="surprise" className="bd-section bd-surprise">
      <SectionTitle title={surprise.title} />
      <Reveal className={`bd-envelope ${open ? "is-open" : ""}`}>
        <div className="bd-env-flap" aria-hidden />
        <div className="bd-env-letter" aria-live="polite">
          {open && surprise.message.map((p, i) => <p key={i} className={i === surprise.message.length - 1 ? "bd-script bd-letter-sign" : ""}>{p}</p>)}
        </div>
        {!open && (
          <button
            className="bd-btn bd-btn-glow is-in bd-env-btn"
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              celebrate(r.left + r.width / 2, r.top, 50);
              setOpen(true);
            }}
          >
            {surprise.button} <span className="bd-heart">♥</span>
          </button>
        )}
      </Reveal>
    </section>
  );
}

/* ---------- 8. Cake ---------- */
export function BirthdayCake() {
  const [blown, setBlown] = useState(false);
  return (
    <section className="bd-section bd-cake-section">
      <SectionTitle title={cake.title} />
      <p className="bd-cake-hint">{blown ? "" : cake.hint}</p>
      <button
        className={`bd-cake ${blown ? "is-blown" : ""}`}
        aria-label={blown ? "Candles blown out" : "Blow out the candles"}
        onClick={(e) => {
          if (blown) return;
          const r = e.currentTarget.getBoundingClientRect();
          setBlown(true);
          celebrate(r.left + r.width / 2, r.top + 40, 60);
        }}
      >
        <div className="bd-candles">
          {[0, 1, 2].map((i) => (
            <span key={i} className="bd-candle">
              <i className="bd-flame" />
              <i className="bd-smoke" />
            </span>
          ))}
        </div>
        <div className="bd-tier bd-tier-top" />
        <div className="bd-tier bd-tier-bottom" />
        <div className="bd-plate" />
      </button>
      <p className={`bd-wish bd-script ${blown ? "is-in" : ""}`} aria-live="polite">{blown ? cake.done : "\u00a0"}</p>
    </section>
  );
}

/* ---------- 9. Finale ---------- */
export function FinalMessage() {
  return (
    <section id="final" className="bd-final" style={{ backgroundImage: `url(${finale.image})` }}>
      <div className="bd-final-overlay" />
      <div className="bd-final-inner">
        <Reveal><p className="bd-script bd-final-intro">{finale.intro}</p></Reveal>
        {finale.lines.map((l, i) => (
          <Reveal key={i} delay={200 + i * 250}>
            <p className="bd-final-line">{l}</p>
          </Reveal>
        ))}
        <Reveal delay={1300}>
          <p className="bd-script bd-final-closing">{finale.closing} <span className="bd-heart bd-beat">♥</span></p>
        </Reveal>
        <p className="bd-signature">{finale.signature} <span className="bd-beat">♥</span></p>
      </div>
    </section>
  );
}

/* ---------- Music ---------- */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);
  const toggle = async () => {
    const a = audioRef.current;
    if (!a || missing) return;
    try {
      if (a.paused) {
        await a.play();
        setPlaying(true);
      } else {
        a.pause();
        setPlaying(false);
      }
    } catch {
      setMissing(true);
    }
  };
  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" onError={() => setMissing(true)} />
      <button className={`bd-music ${playing ? "is-playing" : ""}`} onClick={toggle} aria-pressed={playing} aria-label={missing ? "Song not added yet" : playing ? "Pause music" : "Play music"} title={missing ? "Add /audio/birthday-song.mp3 to enable music" : undefined}>
        {playing ? (
          <span className="bd-bars" aria-hidden><i /><i /><i /></span>
        ) : (
          <span aria-hidden>♪</span>
        )}
      </button>
    </>
  );
}
