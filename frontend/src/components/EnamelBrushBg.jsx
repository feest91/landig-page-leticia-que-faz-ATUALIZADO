import { useEffect, useRef, useState } from "react";

const DESKTOP_CONFIG = {
  viewBox: "0 0 1440 820",
  pathD: "M -70,705 C 205,680 435,545 675,380 C 895,228 1135,140 1295,268 C 1412,362 1368,582 1185,642",
  glossPathD: "M -70,687 C 205,662 435,527 675,362 C 895,210 1135,122 1295,250 C 1412,344 1368,564 1185,624",
  strokeWidth: 72,
  glossStrokeWidth: 8,
  brushScale: 1,
  opacity: 0.35,
  sparkleInterval: 28,
  sparkleRadius: 2.2,
};

const MOBILE_CONFIG = {
  viewBox: "0 0 420 920",
  pathD: "M -30,110 C 160,130 380,210 370,390 C 360,540 80,550 70,710 C 60,820 250,860 410,810",
  glossPathD: "M -30,102 C 160,122 380,202 370,382 C 360,532 80,542 70,702 C 60,812 250,852 410,802",
  strokeWidth: 36,
  glossStrokeWidth: 5,
  brushScale: 0.58,
  opacity: 0.25,
  sparkleInterval: 38,
  sparkleRadius: 1.6,
};

const EnamelBrushBg = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cfg = isMobile ? MOBILE_CONFIG : DESKTOP_CONFIG;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const path = container.querySelector("#masterPath");
    const tracks = container.querySelectorAll(".polish-track");
    const brush = container.querySelector("#nailBrush");
    const group = container.querySelector("#strokeGroup");
    const sparkles = container.querySelector("#sparkleLayer");

    if (!path || !brush || !group || !sparkles) return;

    let len = 0;
    try {
      len = path.getTotalLength();
    } catch {
      return;
    }

    tracks.forEach((t) => {
      t.style.strokeDasharray = `${len}`;
      t.style.strokeDashoffset = `${len}`;
    });

    let start = null;
    let lastDist = -999;
    let animId = null;
    const timeouts = [];

    function step(ts) {
      if (!start) start = ts;
      const cycle = (ts - start) % 8600;

      if (cycle <= 3600) {
        const p = cycle / 3600;
        const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        const dist = len * ease;
        tracks.forEach((t) => {
          t.style.strokeDashoffset = `${len - dist}`;
        });
        group.style.opacity = "1";
        const pt = path.getPointAtLength(dist);
        const pt2 = path.getPointAtLength(Math.min(len, dist + 4));
        const deg = (Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180) / Math.PI - 14;
        const scale = cfg.brushScale;
        brush.setAttribute("transform", `translate(${pt.x}, ${pt.y}) rotate(${deg}) scale(${scale})`);
        brush.style.opacity = p < 0.08 ? `${p / 0.08}` : p > 0.88 ? `${(1 - p) / 0.12}` : "1";

        if (dist - lastDist > cfg.sparkleInterval) {
          const scatter = isMobile ? 22 : 36;
          const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          c.setAttribute("cx", `${pt.x + (Math.random() - 0.5) * scatter}`);
          c.setAttribute("cy", `${pt.y + (Math.random() - 0.5) * scatter}`);
          c.setAttribute("r", `${cfg.sparkleRadius}`);
          c.setAttribute("fill", "#F58A07");
          c.classList.add("dynamic-sparkle");
          c.style.setProperty("--dx1", "0px");
          c.style.setProperty("--dy1", "-10px");
          c.style.setProperty("--dx2", "4px");
          c.style.setProperty("--dy2", "-26px");
          sparkles.appendChild(c);

          const tid = setTimeout(() => {
            if (c.parentNode) c.remove();
          }, 2400);
          timeouts.push(tid);

          lastDist = dist;
        }
      } else if (cycle <= 6800) {
        tracks.forEach((t) => {
          t.style.strokeDashoffset = "0";
        });
        brush.style.opacity = "0";
        lastDist = -999;
      } else {
        group.style.opacity = `${Math.max(0, 1 - (cycle - 6800) / 1200)}`;
        brush.style.opacity = "0";
      }

      animId = requestAnimationFrame(step);
    }

    animId = requestAnimationFrame(step);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      timeouts.forEach(clearTimeout);
      if (sparkles) sparkles.innerHTML = "";
    };
  }, [isMobile, cfg]);

  return (
    <div ref={containerRef} className="enamel-brush-bg" aria-hidden="true">
      <svg id="polishScene" viewBox={cfg.viewBox} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="polishStrokeGrad" x1="0%" y1="85%" x2="100%" y2="15%">
            <stop offset="0%" stopColor="#8A143E" stopOpacity={cfg.opacity} />
            <stop offset="28%" stopColor="#D42261" stopOpacity={cfg.opacity} />
            <stop offset="68%" stopColor="#E02869" stopOpacity={cfg.opacity} />
            <stop offset="92%" stopColor="#F58A07" stopOpacity={cfg.opacity} />
            <stop offset="100%" stopColor="#FFD166" stopOpacity={cfg.opacity} />
          </linearGradient>
          <linearGradient id="polishGlossGrad" x1="5%" y1="85%" x2="95%" y2="20%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={cfg.opacity * 0.85} />
            <stop offset="30%" stopColor="#FFD6E6" stopOpacity={cfg.opacity} />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity={cfg.opacity} />
            <stop offset="100%" stopColor="#FFE08A" stopOpacity={cfg.opacity * 0.85} />
          </linearGradient>
          <linearGradient id="brushCapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E2A36" />
            <stop offset="50%" stopColor="#121016" />
            <stop offset="100%" stopColor="#26222E" />
          </linearGradient>
          <linearGradient id="goldFerruleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE29A" />
            <stop offset="50%" stopColor="#F58A07" />
            <stop offset="100%" stopColor="#FFD166" />
          </linearGradient>
          <linearGradient id="bristlesBaseGrad" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#1D1922" />
            <stop offset="45%" stopColor="#5E1230" />
            <stop offset="85%" stopColor="#E02869" />
            <stop offset="100%" stopColor="#FF5C96" />
          </linearGradient>
        </defs>

        <g id="strokeGroup">
          <path id="masterPath" d={cfg.pathD} fill="none" />
          <path
            className="polish-track"
            d={cfg.pathD}
            fill="none"
            stroke="url(#polishStrokeGrad)"
            strokeWidth={cfg.strokeWidth}
            strokeLinecap="round"
          />
          <path
            className="polish-track"
            d={cfg.glossPathD}
            fill="none"
            stroke="url(#polishGlossGrad)"
            strokeWidth={cfg.glossStrokeWidth}
            strokeLinecap="round"
          />
        </g>

        <g id="sparkleLayer"></g>

        <g id="nailBrush" opacity="0">
          <path
            d="M -56,-12 C -32,-18 -10,-16 0,-6 C 3,-2 3,2 0,6 C -10,16 -32,18 -56,12 Z"
            fill="url(#bristlesBaseGrad)"
          />
          <rect x="-132" y="-6.5" width="78" height="13" rx="3" fill="rgba(255,255,255,0.28)" />
          <rect x="-144" y="-11" width="14" height="22" rx="2.5" fill="url(#goldFerruleGrad)" />
          <path
            d="M -258,-15 L -144,-12.5 L -144,12.5 L -258,15 C -265,15 -269,10 -269,0 C -269,-10 -265,-15 -258,-15 Z"
            fill="url(#brushCapGrad)"
          />
        </g>
      </svg>
    </div>
  );
};

export default EnamelBrushBg;
