const items = ["Beauty Academy", "Nails Designer", "Lash Lifting", "Brow Lamination", "Design de Sobrancelhas", "Leiria"];

const Marquee = ({ inverted = false }) => (
  <div
    className={`overflow-hidden border-b border-hairline py-4 ${inverted ? "bg-orange" : "bg-anthracite"}`}
  >
    <div className="marquee-track flex w-max whitespace-nowrap">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
          {items.map((item) => (
            <span
              key={`${copy}-${item}`}
              className={`mx-6 text-sm font-black uppercase tracking-[0.3em] md:text-base ${
                inverted ? "text-graphite" : "text-outline"
              }`}
            >
              {item} <span className={inverted ? "text-graphite/50" : "text-rose"}>•</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
