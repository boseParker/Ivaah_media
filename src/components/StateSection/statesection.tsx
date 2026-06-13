import React, { useEffect, useRef, useState } from "react";

/**
 * Bento-style asymmetric masonry layout for the stats section.
 * Background: #1F2128 (dark charcoal)
 * Boxes: transparent with 1px white/light-gray border, sharp corners (no radius)
 *
 * Layout: 12-column bento grid with varied cell spans — large feature tiles
 * (world map, tagline) anchor the grid while smaller stat tiles fill around them.
 *
 * Animation:
 * - Each cell fades + rises into view on scroll (staggered by grid order).
 * - Numeric stats count up from 0 to their target once visible.
 * - World map dots draw in with a subtle staggered fade/scale.
 */

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({
  to,
  inView,
  duration = 1500,
}: {
  to: number;
  inView: boolean;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <>{val.toLocaleString()}</>;
}

function Cell({
  className,
  children,
  delay = 0,
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`cell ${className} ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { inView })
          : child
      )}
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="stats-section">
      <style>{CSS}</style>

      <div className="grid">
        {/* Big feature: world map, wide + tall */}
        <Cell className="map-cell" delay={0}>
          <WorldMap inView={false} />
          <p className="map-caption">
            More than 1 Million
            <br />
            Successful Global Campaigns
          </p>
        </Cell>

        {/* Tall narrow: 45000+ */}
        <Cell className="campaigns-cell" delay={60}>
          <StatNumber value={45000} suffix="+" inView={false} />
          <p>
            High-Impact Campaigns Across
            <br />
            Dubai &amp; UAE
          </p>
        </Cell>

        {/* Wide short: impressions */}
        <Cell className="impressions-cell" delay={120}>
          <p>
            Millions of Daily
            <br />
            Impressions Delivered
          </p>
        </Cell>

        {/* Small square: badge */}
        <Cell className="badge-cell" delay={180}>
          <BadgeIcon />
        </Cell>

        {/* Small square: 10+ awards */}
        <Cell className="awards-cell" delay={240}>
          <StatNumber value={10} suffix="+" inView={false} />
          <p>Internationally Recognised Awards</p>
        </Cell>

        {/* Medium: 75+ years */}
        <Cell className="years-cell" delay={300}>
          <StatNumber value={75} suffix="+" inView={false} />
          <p>Years of Combined Experience in the Industry</p>
        </Cell>

        {/* Big feature: tagline, tall with accent border */}
        <Cell className="tagline-cell" delay={60}>
          <p>
            FIERCELY
            <br />
            INDEPENDENT.
            <br />
            <span className="accent">CLIENT FOCUSED.</span>
            <br />
            SOLUTIONS LED.
          </p>
        </Cell>

        {/* Wide medium: 70000+ clients */}
        <Cell className="clients-cell" delay={120}>
          <StatNumber value={70000} suffix="+" inView={false} />
          <p>Happy Clients Around the World</p>
        </Cell>

        {/* Small square: 90% recall */}
        <Cell className="recall-cell" delay={180}>
          <StatNumber value={90} suffix="%" inView={false} />
          <p>Audience Recall from OOH Campaigns</p>
        </Cell>

        {/* Wide short: trusted brands */}
        <Cell className="trusted-cell" delay={240}>
          <p>
            Trusted by <strong>8500+</strong> Global and Regional Brands
          </p>
        </Cell>
      </div>
    </div>
  );
}

/* Renders an animated h3 stat; `inView` is injected by Cell via cloneElement */
function StatNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView?: boolean;
}) {
  return (
    <h3>
      <Counter to={value} inView={!!inView} />
      <span className={suffix === "%" ? "pct" : "plus"}>{suffix}</span>
    </h3>
  );
}

function WorldMap({ inView: _unused }: { inView?: boolean }) {
  const { ref, inView } = useInView<SVGSVGElement>(0.2);
  return (
    <svg ref={ref} viewBox="0 0 640 360" className="world-map" aria-hidden="true">
      <g fill="#5B8FB0" opacity="0.55">
        <DotContinent animate={inView} />
      </g>
    </svg>
  );
}

// Generates a scattered dot field shaped roughly like the world map continents
function DotContinent({ animate }: { animate: boolean }) {
  const dots: { x: number; y: number; r: number; delay: number }[] = [];
  const blobs = [
    { cx: 110, cy: 110, rx: 90, ry: 60 }, // North America
    { cx: 180, cy: 230, rx: 50, ry: 80 }, // South America
    { cx: 330, cy: 90, rx: 50, ry: 35 }, // Europe
    { cx: 340, cy: 200, rx: 60, ry: 85 }, // Africa
    { cx: 460, cy: 110, rx: 120, ry: 70 }, // Asia
    { cx: 540, cy: 260, rx: 50, ry: 35 }, // Australia
  ];
  const spacing = 7;
  for (let y = 0; y < 360; y += spacing) {
    for (let x = 0; x < 640; x += spacing) {
      for (const b of blobs) {
        const dx = (x - b.cx) / b.rx;
        const dy = (y - b.cy) / b.ry;
        if (dx * dx + dy * dy <= 1) {
          if (Math.random() > 0.18) {
            const delay = (x / 640) * 0.8 + Math.random() * 0.15;
            dots.push({ x, y, r: 1.4, delay });
          }
          break;
        }
      }
    }
  }
  return (
    <>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          className="map-dot"
          style={{
            animationDelay: `${d.delay}s`,
            animationPlayState: animate ? "running" : "paused",
          }}
        />
      ))}
    </>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="badge-icon" aria-hidden="true">
      <circle cx="32" cy="26" r="18" fill="none" stroke="#F4F1EA" strokeWidth="2" />
      <path
        d="M22 40 L18 58 L32 50 L46 58 L42 40"
        fill="none"
        stroke="#F4F1EA"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 26 L29 31 L40 19"
        fill="none"
        stroke="#F4F1EA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CSS = `
.stats-section {
  background: #1F2128;
  color: #F4F1EA;
  font-family: 'Segoe UI', Arial, sans-serif;
  padding: 32px;
}

/* 12-column bento grid, fixed-height auto rows for masonry rhythm */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 90px;
  gap: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.cell {
  border: 1px solid #F4F1EA;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.cell.in-view {
  opacity: 1;
  transform: translateY(0);
}

.cell h3 {
  font-size: 56px;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1;
}
.cell .plus, .cell .pct {
  font-size: 32px;
  font-weight: 400;
  vertical-align: super;
}
.cell p {
  margin: 0;
  font-size: 17px;
  line-height: 1.4;
  font-weight: 300;
}

/* ---------------------------------------------------------------- */
/* Bento placements                                                   */
/* ---------------------------------------------------------------- */

/* Big feature: world map — wide, tall */
.map-cell {
  grid-column: 1 / 8;
  grid-row: span 4;
  position: relative;
  align-items: flex-start;
}
.world-map {
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 75%;
}
.map-caption {
  position: relative;
  z-index: 1;
  margin-top: auto;
  text-align: left;
}

/* Tall narrow: 45000+ campaigns */
.campaigns-cell {
  grid-column: 8 / 13;
  grid-row: span 3;
}

/* Wide short: impressions */
.impressions-cell {
  grid-column: 1 / 5;
  grid-row: span 2;
}

/* Small square: badge */
.badge-cell {
  grid-column: 5 / 8;
  grid-row: span 2;
}
.badge-icon {
  width: 64px;
  height: 64px;
}

/* Small square: 10+ awards */
.awards-cell {
  grid-column: 8 / 13;
  grid-row: span 2;
}

/* Medium: 75+ years */
.years-cell {
  grid-column: 1 / 5;
  grid-row: span 2;
}

/* Big feature: tagline — tall, accent border */
.tagline-cell {
  grid-column: 5 / 9;
  grid-row: span 3;
  border: 1px solid #5B8FB0;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
}
.tagline-cell p {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
}
.tagline-cell .accent { color: #5B8FB0; }

/* Wide medium: 70000+ clients */
.clients-cell {
  grid-column: 9 / 13;
  grid-row: span 2;
}

/* Small square: 90% recall */
.recall-cell {
  grid-column: 1 / 5;
  grid-row: span 2;
}

/* Wide short: trusted brands */
.trusted-cell {
  grid-column: 5 / 13;
  grid-row: span 1;
}

/* ---------------------------------------------------------------- */
/* Responsive                                                         */
/* ---------------------------------------------------------------- */

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 110px;
  }
  .map-cell { grid-column: 1 / 3; grid-row: span 4; }
  .campaigns-cell { grid-column: 1 / 3; grid-row: span 2; }
  .impressions-cell { grid-column: 1 / 2; grid-row: span 2; }
  .badge-cell { grid-column: 2 / 3; grid-row: span 2; }
  .awards-cell { grid-column: 1 / 2; grid-row: span 2; }
  .years-cell { grid-column: 2 / 3; grid-row: span 2; }
  .tagline-cell { grid-column: 1 / 3; grid-row: span 3; }
  .clients-cell { grid-column: 1 / 3; grid-row: span 2; }
  .recall-cell { grid-column: 1 / 2; grid-row: span 2; }
  .trusted-cell { grid-column: 2 / 3; grid-row: span 2; }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .map-cell, .campaigns-cell, .impressions-cell, .badge-cell, .awards-cell,
  .years-cell, .tagline-cell, .clients-cell, .recall-cell, .trusted-cell {
    grid-column: 1 / 2;
    grid-row: auto;
    min-height: 160px;
  }
  .map-cell { min-height: 280px; }
}

/* ---------------------------------------------------------------- */
/* Animations                                                         */
/* ---------------------------------------------------------------- */

.map-dot {
  opacity: 0;
  transform-origin: center;
  transform: scale(0.3);
  animation: dot-in 0.6s ease forwards;
  animation-play-state: paused;
}
@keyframes dot-in {
  to {
    opacity: 0.55;
    transform: scale(1);
  }
}

.badge-cell.in-view .badge-icon {
  animation: badge-pulse 0.9s ease 0.4s 1;
}
@keyframes badge-pulse {
  0% { transform: scale(0.7); opacity: 0; }
  60% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .cell {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .map-dot {
    animation: none;
    opacity: 0.55;
    transform: scale(1);
  }
  .badge-cell.in-view .badge-icon {
    animation: none;
  }
}
`;