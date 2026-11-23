import { useEffect, useRef } from "react";

const EnamelBrushBg = () => {
  const containerRef = useRef(null);

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
        brush.setAttribute("transform", `translate(${pt.x}, ${pt.y}) rotate(${deg})`);
        brush.style.opacity = p < 0.08 ? `${p / 0.08}` : p > 0.88 ? `${(1 - p) / 0.12}` : "1";

        if (dist - lastDist > 28) {
          const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          c.setAttribute("cx", `${pt.x + (Math.random() - 0.5) * 36}`);
          c.setAttribute("cy", `${pt.y + (Math.random() - 0.5) * 36}`);
          c.setAttribute("r", "2.2");
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
  }, []);

  return (
    <div ref={containerRef} className="enamel-brush-bg" aria-hidden="true">
      <svg id="polishScene" viewBox="0 0 1440 820" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="polishStrokeGrad" x1="0%" y1="85%" x2="100%" y2="15%">
            <stop offset="0%" stopColor="#8A143E" stopOpacity="0.35" />
            <stop offset="28%" stopColor="#D42261" stopOpacity="0.35" />
            <stop offset="68%" stopColor="#E02869" stopOpacity="0.35" />
            <stop offset="92%" stopColor="#F58A07" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFD166" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="polishGlossGrad" x1="5%" y1="85%" x2="95%" y2="20%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
            <stop offset="30%" stopColor="#FFD6E6" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFE08A" stopOpacity="0.30" />
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
          <path
            id="masterPath"
            d="M -70,705 C 205,680 435,545 675,380 C 895,228 1135,140 1295,268 C 1412,362 1368,582 1185,642"
            fill="none"
          />
          <path
            className="polish-track"
            d="M -70,705 C 205,680 435,545 675,380 C 895,228 1135,140 1295,268 C 1412,362 1368,582 1185,642"
            fill="none"
            stroke="url(#polishStrokeGrad)"
            strokeWidth="72"
            strokeLinecap="round"
          />
          <path
            className="polish-track"
            d="M -70,687 C 205,662 435,527 675,362 C 895,210 1135,122 1295,250 C 1412,344 1368,564 1185,624"
            fill="none"
            stroke="url(#polishGlossGrad)"
            strokeWidth="8"
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
