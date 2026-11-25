import { useCallback, useEffect, useState } from 'react';
import { ArrowRight, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, type Project } from '@/data/waleed';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --navy:        #020b18;
    --navy-2:      #061525;
    --navy-3:      #0a1f35;
    --blue-vivid:  #1565c0;
    --blue-sky:    #2196f3;
    --blue-glow:   #42a5f5;
    --blue-bright: #4fc3f7;
    --cyan:        #00e5ff;
    --cyan-soft:   #80deea;
    --white:       #f0f6ff;
    --muted:       #7fa8cc;
    --card-bg:     rgba(6,21,37,0.7);
    --border:      rgba(33,150,243,0.18);
    --border-h:    rgba(0,229,255,0.45);
  }

  /* ═══ BACKGROUND ═══ */
  .pf-bg-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 15% 25%, rgba(21,101,192,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 85% 75%, rgba(0,180,255,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 65% 35% at 50% 95%, rgba(57,73,171,0.15) 0%, transparent 55%),
      #020b18;
  }
  .pf-orb {
    position: fixed; border-radius: 50%;
    filter: blur(100px); pointer-events: none; z-index: 0;
  }
  .pf-orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(21,101,192,0.26) 0%, transparent 65%); top: -250px; left: -200px; animation: pfOrb1 24s ease-in-out infinite alternate; }
  .pf-orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,229,255,0.09) 0%, transparent 65%); bottom: -160px; right: -120px; animation: pfOrb2 30s ease-in-out infinite alternate; }
  .pf-orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(57,73,171,0.17) 0%, transparent 65%); top: 45%; left: 58%; animation: pfOrb3 20s ease-in-out infinite alternate; }
  @keyframes pfOrb1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(50px,-35px) scale(1.08); } }
  @keyframes pfOrb2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-40px,45px) scale(0.93); } }
  @keyframes pfOrb3 { 0% { transform: translate(0,0); } 100% { transform: translate(-35px,-25px) scale(1.06); } }

  .pf-dot-grid {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(rgba(33,150,243,0.055) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  /* Bubbles */
  .pf-bubbles { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .pf-bubble { position: absolute; bottom: -100px; border-radius: 50%; opacity: 0; animation: pfBubbleRise linear infinite; }
  .pf-bubble.v1 { background: radial-gradient(circle at 35% 35%, rgba(79,195,247,0.5), rgba(21,101,192,0.12)); border: 1px solid rgba(79,195,247,0.3); }
  .pf-bubble.v2 { background: radial-gradient(circle at 35% 35%, rgba(0,229,255,0.35), rgba(0,150,200,0.08)); border: 1px solid rgba(0,229,255,0.24); }
  .pf-bubble.v3 { background: radial-gradient(circle at 35% 35%, rgba(33,150,243,0.3), rgba(13,59,110,0.08)); border: 1px solid rgba(33,150,243,0.25); }
  @keyframes pfBubbleRise {
    0%   { transform: translateY(0) scale(0.6); opacity: 0; }
    8%   { opacity: 0.9; }
    85%  { opacity: 0.45; }
    100% { transform: translateY(-105vh) scale(1); opacity: 0; }
  }

  /* ═══ PAGE ═══ */
  .pf-page { position: relative; z-index: 1; padding-top: 68px; color: var(--white); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  .pf-container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }
  .pf-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(0,229,255,0.5), rgba(33,150,243,0.3), transparent); }

  /* ═══ HERO ═══ */
  .pf-hero { padding: 100px 24px 80px; text-align: center; }
  .pf-hero__inner { max-width: 860px; margin: 0 auto; }

  .pf-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 20px;
    background: rgba(21,101,192,0.15); border: 1px solid rgba(33,150,243,0.35);
    border-radius: 100px; font-size: 13px; letter-spacing: 0.05em; color: var(--cyan-soft);
    margin-bottom: 36px; backdrop-filter: blur(12px);
  }
  .pf-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: pfPulse 2s infinite; }
  @keyframes pfPulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

  .pf-hero__title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800; line-height: 1.06; letter-spacing: -0.04em; margin-bottom: 24px;
  }
  .pf-hero__title .solid { color: var(--white); }
  .pf-hero__title .grad {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 30%, #00e5ff 65%, #81d4fa 100%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: pfShimmer 4.5s linear infinite;
  }
  @keyframes pfShimmer { 0% { background-position: 0% center; } 100% { background-position: 220% center; } }

  .pf-hero__desc { color: var(--muted); font-size: clamp(1rem, 1.6vw, 1.1rem); font-weight: 300; line-height: 1.8; max-width: 1100px; margin: 0 auto; }

  /* ═══ FILTER BAR ═══ */
  .pf-filter { padding: 48px 0; }
  .pf-filter__inner { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }

  .pf-filter-btn {
    padding: 10px 26px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 600;
    cursor: pointer; transition: all 0.22s; border: 1px solid rgba(33,150,243,0.2);
    background: rgba(6,21,37,0.5); color: var(--muted);
    backdrop-filter: blur(8px);
  }
  .pf-filter-btn:hover { background: rgba(33,150,243,0.1); border-color: rgba(0,229,255,0.35); color: var(--blue-bright); }
  .pf-filter-btn.active {
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 50%, #039be5 85%, #29b6f6 100%);
    border-color: rgba(41,182,246,0.4);
    color: #fff;
    box-shadow: 0 4px 18px rgba(13,71,161,0.45);
  }

  /* ═══ PROJECTS GRID ═══ */
  .pf-section { padding: 20px 0 100px; }
  .pf-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(520px, 1fr)); gap: 28px; }
  @media (max-width: 1100px) { .pf-grid { grid-template-columns: 1fr; } }

  /* Project card */
  .pf-card {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: 20px; overflow: hidden; backdrop-filter: blur(16px);
    transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
    display: flex; flex-direction: column;
  }
  .pf-card:hover { transform: translateY(-7px); border-color: rgba(0,229,255,0.4); box-shadow: 0 24px 56px rgba(0,229,255,0.07); }

  .pf-card__img {
    width: 100%; aspect-ratio: 16/9; overflow: hidden;
    background: var(--navy-3); position: relative;
  }
  .pf-card__img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 55%, var(--navy-2) 100%); }
  .pf-card__img img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.45s ease; }
  .pf-card:hover .pf-card__img img { transform: scale(1.04); }

  .pf-card__body { padding: 28px; flex: 1; display: flex; flex-direction: column; }

  .pf-card__category { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cyan); margin-bottom: 10px; display: block; }

  .pf-card[data-category="AI & Agentic AI"] {
  border-color: rgba(0, 229, 255, 0.24);
  }
  
  .pf-card[data-category="AI & Agentic AI"]:hover {
    border-color: rgba(0, 229, 255, 0.55);
    box-shadow:
      0 24px 56px rgba(0, 229, 255, 0.10),
      0 0 35px rgba(33, 150, 243, 0.06);
  }

  .pf-card__title {
    font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700;
    color: var(--white); margin-bottom: 12px; line-height: 1.4; transition: color 0.2s;
  }
  .pf-card:hover .pf-card__title { color: var(--blue-glow); }

  .pf-card__desc { color: var(--muted); font-size: 0.88rem; line-height: 1.7; margin-bottom: 20px; font-weight: 300; flex: 1; }

  /* Tags */
  .pf-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 22px; }
  .pf-tag { padding: 3px 11px; background: rgba(33,150,243,0.1); border: 1px solid rgba(33,150,243,0.22); border-radius: 100px; font-size: 11px; color: var(--cyan-soft); font-weight: 500; }

  /* Card links */
  .pf-card__links { display: flex; gap: 10px; flex-wrap: wrap; }
  .pf-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 600; text-decoration: none;
    padding: 7px 16px; border-radius: 8px; transition: all 0.2s;
  }
  .pf-link-primary { background: linear-gradient(130deg, #0d47a1, #1976d2 50%, #039be5 85%, #29b6f6); color: #fff; box-shadow: 0 3px 14px rgba(13,71,161,0.45); }
  .pf-link-primary:hover { box-shadow: 0 6px 24px rgba(3,155,229,0.55); transform: translateY(-2px); }
  .pf-link-ghost { color: var(--cyan); border: 1px solid rgba(0,229,255,0.25); background: transparent; }
  .pf-link-ghost:hover { background: rgba(0,229,255,0.08); border-color: rgba(0,229,255,0.5); transform: translateY(-2px); }

  /* Empty state */
  .pf-empty { text-align: center; padding: 80px 24px; }
  .pf-empty h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; color: var(--muted); margin-bottom: 20px; }

  /* ═══ CTA ═══ */
  .pf-cta { padding: 100px 24px; text-align: center; position: relative; }
  .pf-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(21,101,192,0.18) 0%, transparent 70%); pointer-events: none; }
  .pf-cta__card {
    max-width: 700px; margin: 0 auto; position: relative; z-index: 1;
    background: rgba(6,21,37,0.8); border: 1px solid rgba(33,150,243,0.25);
    border-radius: 24px; padding: 64px 48px; backdrop-filter: blur(20px);
    box-shadow: 0 0 80px rgba(21,101,192,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
  }
  .pf-cta__card h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; color: var(--white); margin-bottom: 16px; }
  .pf-cta__card p { color: var(--muted); font-size: 1.05rem; margin-bottom: 36px; line-height: 1.7; font-weight: 300; }

  /* Primary button */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 34px;
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 45%, #039be5 80%, #29b6f6 100%);
    border-radius: 10px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #fff; text-decoration: none;
    box-shadow: 0 4px 20px rgba(13,71,161,0.55), 0 0 0 1px rgba(41,182,246,0.2);
    transition: transform 0.22s, box-shadow 0.22s; position: relative; overflow: hidden;
  }
  .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transition: left 0.45s ease; }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(3,155,229,0.6), 0 0 0 1px rgba(41,182,246,0.4); }
  .btn-primary:hover::before { left: 150%; }

  /* ═══ FADE UP ═══ */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .stagger-1 { transition-delay: 0.08s; } .stagger-2 { transition-delay: 0.16s; }
  .stagger-3 { transition-delay: 0.24s; } .stagger-4 { transition-delay: 0.32s; }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .pf-container { padding: 0 20px; }
    .pf-cta__card { padding: 40px 24px; }
    .pf-hero { padding: 80px 20px 60px; }
  }

  /* ═══ Waleed additions ═══ */
  .pf-card { cursor: pointer; }
  .pf-card__img.collage { display: flex; justify-content: center; align-items: flex-end; gap: 12px; padding: 16px 16px 0; }
  .pf-card__img.collage img { height: 100%; width: auto; max-width: 31%; object-fit: cover; object-position: top; border-radius: 10px 10px 0 0; border: 1px solid rgba(33,150,243,0.25); border-bottom: none; }
  .pf-card__img.collage.wide img { max-width: 48%; height: auto; max-height: 100%; align-self: center; border-radius: 8px; border-bottom: 1px solid rgba(33,150,243,0.25); }
  .pf-card:hover .pf-card__img.collage img { transform: none; }
  .pf-card__desc.clamp { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; flex: none; }
  .pf-card__badge { display: inline-block; margin-left: 10px; padding: 2px 10px; border-radius: 100px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cyan); background: rgba(0,229,255,0.08); border: 1px solid rgba(0,229,255,0.25); }
  .pf-card__more { font-size: 12px; color: var(--muted); margin-left: auto; align-self: center; }

  /* Project modal */
  .pf-modal { font-family: 'DM Sans', system-ui, sans-serif; position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center; padding: 24px; }
  .pf-modal__backdrop { position: absolute; inset: 0; background: rgba(2,11,24,0.85); backdrop-filter: blur(8px); }
  .pf-modal__panel { position: relative; width: min(1040px, 100%); max-height: 92vh; display: flex; flex-direction: column; background: rgba(6,21,37,0.97); border: 1px solid rgba(33,150,243,0.28); border-radius: 22px; box-shadow: 0 30px 90px rgba(0,0,0,0.6), 0 0 80px rgba(21,101,192,0.15); animation: pfModalIn 0.25s ease; }
  @keyframes pfModalIn { from { opacity: 0; transform: translateY(14px) scale(0.98); } to { opacity: 1; transform: none; } }
  .pf-modal__close { position: absolute; top: 14px; right: 14px; z-index: 3; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(13,59,110,0.45); border: 1px solid rgba(41,182,246,0.3); color: #81d4fa; cursor: pointer; transition: all 0.2s; }
  .pf-modal__close:hover { background: rgba(33,150,243,0.2); border-color: rgba(0,229,255,0.55); color: var(--cyan); }
  .pf-modal__scroll { overflow-y: auto; padding: 32px; }
  .pf-modal__meta { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cyan); margin-bottom: 10px; padding-right: 44px; }
  .pf-modal__title { font-family: 'Syne', sans-serif; font-size: clamp(1.3rem, 3vw, 1.9rem); font-weight: 800; letter-spacing: -0.01em; color: var(--white); line-height: 1.25; margin-bottom: 16px; padding-right: 44px; }
  .pf-modal__main { position: relative; margin-top: 22px; background: var(--navy-3); border: 1px solid var(--border); border-radius: 16px; display: flex; align-items: center; justify-content: center; height: min(52vh, 460px); overflow: hidden; }
  .pf-modal__main img { max-width: 100%; max-height: 100%; object-fit: contain; }
  .pf-modal__nav { position: absolute; top: 50%; transform: translateY(-50%); width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(2,11,24,0.7); border: 1px solid rgba(41,182,246,0.3); color: #81d4fa; cursor: pointer; transition: all 0.2s; }
  .pf-modal__nav:hover { border-color: rgba(0,229,255,0.55); color: var(--cyan); }
  .pf-modal__nav.prev { left: 12px; } .pf-modal__nav.next { right: 12px; }
  .pf-modal__thumbs { display: flex; gap: 10px; overflow-x: auto; padding: 14px 2px 4px; }
  .pf-modal__thumb { flex: 0 0 auto; height: 78px; border-radius: 10px; overflow: hidden; border: 1px solid var(--border); background: var(--navy-3); padding: 0; cursor: pointer; opacity: 0.6; transition: all 0.2s; }
  .pf-modal__thumb img { height: 100%; width: auto; display: block; }
  .pf-modal__thumb:hover { opacity: 1; }
  .pf-modal__thumb.on { opacity: 1; border-color: var(--cyan); box-shadow: 0 0 0 1px rgba(0,229,255,0.4); }
  .pf-modal__body { margin-top: 22px; }
  .pf-modal__body p { color: var(--muted); font-size: 0.92rem; line-height: 1.8; font-weight: 300; margin-bottom: 14px; }
  .pf-modal__body .pf-tags { margin: 18px 0 22px; }
  @media (max-width: 600px) { .pf-modal { padding: 10px; } .pf-modal__scroll { padding: 22px 18px; } .pf-modal__thumb { height: 62px; } }
`;

const FILTERS = [
  { key: "all", label: "All Work" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "web", label: "Web Apps" },
];

const BUBBLES = [
  { size: 8, left: 5, dur: 14, delay: 0, v: "v1" },
  { size: 14, left: 14, dur: 18, delay: 2, v: "v2" },
  { size: 6, left: 24, dur: 12, delay: 4, v: "v3" },
  { size: 18, left: 35, dur: 22, delay: 1, v: "v1" },
  { size: 10, left: 48, dur: 16, delay: 6, v: "v2" },
  { size: 16, left: 60, dur: 20, delay: 8, v: "v3" },
  { size: 9, left: 72, dur: 15, delay: 0.5, v: "v1" },
  { size: 20, left: 83, dur: 25, delay: 5, v: "v2" },
  { size: 7, left: 92, dur: 13, delay: 3, v: "v3" },
];

function useReveal() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll(".fade-up");
      const io = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.1 }
      );
      els.forEach(el => io.observe(el));
      return io;
    };
    const io = observe();
    return () => io.disconnect();
  }, []);
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  const open = (p: Project) => { setSelected(p); setImgIdx(0); };
  const close = useCallback(() => setSelected(null), []);
  const step = useCallback((dir: number) => {
    setImgIdx(i => (selected ? (i + dir + selected.images.length) % selected.images.length : i));
  }, [selected]);

  // Modal: Esc closes, arrows navigate, page scroll locked
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected, close, step]);

  return (
    <>
      <style>{styles}</style>

      {/* Background */}
      <div className="pf-bg-mesh" />
      <div className="pf-orb pf-orb-1" />
      <div className="pf-orb pf-orb-2" />
      <div className="pf-orb pf-orb-3" />
      <div className="pf-dot-grid" />
      <div className="pf-bubbles">
        {BUBBLES.map((b, i) => (
          <div key={i} className={`pf-bubble ${b.v}`}
            style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <main className="pf-page">

        {/* ══════════ HERO ══════════ */}
        <section className="pf-hero">
          <div className="pf-hero__inner">
            <div className="pf-badge fade-up visible">
              <span className="pf-badge-dot" />
              Full Portfolio
            </div>

            <h1 className="pf-hero__title fade-up visible" style={{ transitionDelay: "0.1s" }}>
              <span className="solid">All </span>
              <span className="grad">Projects</span>
            </h1>

            <p
              className="pf-hero__desc fade-up visible"
              style={{ transitionDelay: "0.2s" }}
            >
              A closer look at everything I've built — from AI-powered mobile apps for real-world
              problems to full-stack web platforms. Tap any project for screenshots, tech stack and details.
            </p>
          </div>
        </section>

        <div className="pf-divider" />

        {/* ══════════ FILTER ══════════ */}
        <section className="pf-filter">
          <div className="pf-container">
            <div className="pf-filter__inner fade-up visible">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  className={`pf-filter-btn ${activeFilter === f.key ? "active" : ""}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section className="pf-section">
          <div className="pf-container">
            {filteredProjects.length > 0 ? (
              <div className="pf-grid">
                {filteredProjects.map((project, i) => (
                  <div
                    key={project.id}
                    data-category={project.category}
                    className={`pf-card fade-up visible stagger-${(i % 4) + 1}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${project.title} project details`}
                    onClick={() => open(project)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(project); } }}
                  >
                    <div className={`pf-card__img collage${project.category === "web" ? " wide" : ""}`}>
                      {project.images.slice(0, project.category === "web" ? 2 : 3).map(src => (
                        <img key={src} src={src} alt="" loading="lazy" />
                      ))}
                    </div>

                    <div className="pf-card__body">
                      <span className="pf-card__category">
                        {project.org}{project.year ? ` · ${project.year}` : ""}
                        {project.badge && <span className="pf-card__badge">{project.badge}</span>}
                      </span>
                      <h3 className="pf-card__title">{project.title}</h3>
                      <p className="pf-card__desc clamp">{project.description[0]}</p>

                      <div className="pf-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="pf-tag">{tag}</span>
                        ))}
                      </div>

                      <div className="pf-card__links">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pf-link pf-link-ghost"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={13} /> GitHub
                        </a>
                        <span className="pf-card__more">View details →</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="pf-empty fade-up visible">
                <h3>No projects in this category yet.</h3>
                <button className="btn-primary" onClick={() => setActiveFilter("all")}>
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="pf-cta">
          <div className="pf-cta__card fade-up">
            <h2>Let's Build Something Amazing Together</h2>

            <p>
              Have a project in mind? I'm always interested in collaborating on innovative ideas.
            </p>

            <Link to="/contact" className="btn-primary">
              Contact Me <ArrowRight size={17} />
            </Link>
          </div>
        </section>

      </main>

      {/* ══════════ PROJECT MODAL ══════════ */}
      {selected && (
        <div className="pf-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} details`}>
          <div className="pf-modal__backdrop" onClick={close} />
          <div className="pf-modal__panel">
            <button className="pf-modal__close" onClick={close} aria-label="Close project details">
              <X size={18} />
            </button>

            <div className="pf-modal__scroll">
              <div className="pf-modal__meta">
                {selected.org}{selected.year ? ` · ${selected.year}` : ""}
                {selected.badge && <span className="pf-card__badge">{selected.badge}</span>}
              </div>
              <h2 className="pf-modal__title">{selected.title}</h2>

              <div className="pf-modal__main">
                {selected.images.length > 1 && (
                  <button className="pf-modal__nav prev" onClick={() => step(-1)} aria-label="Previous screenshot">
                    <ChevronLeft size={18} />
                  </button>
                )}
                <img src={selected.images[imgIdx]} alt={`${selected.title} screenshot ${imgIdx + 1}`} />
                {selected.images.length > 1 && (
                  <button className="pf-modal__nav next" onClick={() => step(1)} aria-label="Next screenshot">
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>

              <div className="pf-modal__thumbs">
                {selected.images.map((src, i) => (
                  <button
                    key={src}
                    className={`pf-modal__thumb ${i === imgIdx ? "on" : ""}`}
                    onClick={() => setImgIdx(i)}
                    aria-label={`View screenshot ${i + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>

              <div className="pf-modal__body">
                {selected.description.map((d, i) => <p key={i}>{d}</p>)}

                <div className="pf-tags">
                  {selected.tags.map(tag => <span key={tag} className="pf-tag">{tag}</span>)}
                </div>

                <div className="pf-card__links">
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="pf-link pf-link-primary">
                    <Github size={13} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
