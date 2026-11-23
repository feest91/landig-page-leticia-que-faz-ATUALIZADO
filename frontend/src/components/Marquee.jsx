const items = ["Beauty Academy", "Nails Designer", "Lash Lifting", "Brow Lamination", "Design de Sobrancelhas", "Leiria"];
const Marquee = ({ inverted = false }) => (
  <div className={`marquee ${inverted ? "marquee-dark" : ""}`}>
    <div className="marquee-track">
      {[0, 1].map((copy) => <div className="marquee-copy" key={copy} aria-hidden={copy === 1}>
        {items.map((item) => <span key={item}>{item}<span className="marquee-dot" aria-hidden="true">✦</span></span>)}
      </div>)}
    </div>
  </div>
);
export default Marquee;
