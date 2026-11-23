import { MapPin, Navigation, ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import { ADDRESS, MAPS_URL } from "../data";

const Location = () => (
  <section id="localizacao" className="location-section section-space">
    <div className="page-width location-grid">
      <FadeUp className="location-copy">
        <p className="eyebrow">Localização &amp; Espaço</p>
        <h2>No coração de <strong>Leiria</strong></h2>
        <p className="location-address"><MapPin size={22} /><span>{ADDRESS}</span></p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="button button-maps">
          <Navigation size={18} />Como chegar<span className="button-arrow"><ArrowUpRight size={19} /></span>
        </a>
      </FadeUp>
      <FadeUp delay={0.12}>
        <div className="location-panel">
          <div className="location-lines" aria-hidden="true"><i /><i /><i /></div>
          <div className="location-pin" aria-hidden="true"><MapPin size={28} /></div>
          <p className="eyebrow">Centro — Leiria</p>
          <h3>R. Capitão Mouzinho de Albuquerque 18</h3>
          <p className="location-floor">2º Andar D — 2400-193</p>
          <div className="location-facts">
            <div><span>Cidade</span><strong>Leiria</strong></div>
            <div><span>Zona</span><strong>Centro</strong></div>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);
export default Location;
