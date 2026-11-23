import { Star, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Reveal, FadeUp } from "./Reveal";
import EnamelBrushBg from "./EnamelBrushBg";
import { WHATSAPP_URL } from "../data";

const metrics = [
  { value: "+1.200", label: "Atendimentos" },
  { value: "100%", label: "Precisão Técnica" },
  { value: "5.0", label: "Avaliação", star: true },
];
const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-halo" aria-hidden="true" />
    <EnamelBrushBg />
    <div className="page-width hero-grid">
      <div className="hero-copy">
        <Reveal><p className="eyebrow">Letícia que Faz</p></Reveal>
        <Reveal delay={0.08}><p className="hero-subtitle">Beauty Academy | Unhas, Sobrancelhas &amp; Olhar</p></Reveal>
        <h1 className="hero-title">
          <Reveal delay={0.16}>Sua beleza.</Reveal>
          <Reveal delay={0.24}>Seu momento.</Reveal>
          <Reveal delay={0.32}>A sua <strong>melhor versão.</strong></Reveal>
        </h1>
        <FadeUp delay={0.2}>
          <p className="body-copy hero-description">Estética de alta precisão, elegância e naturalidade para destacar a sua beleza — no coração de Leiria.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button button-whatsapp hero-button">
            <WhatsAppIcon />Agendar pelo WhatsApp<span className="button-arrow"><ArrowUpRight size={19} /></span>
          </a>
        </FadeUp>
      </div>
      <div className="hero-portrait">
        <div className="portrait-ring" aria-hidden="true" />
        <div className="portrait-image">
          <img src="/assets/leticia_new.webp" alt="Letícia — profissional de estética" fetchPriority="high" decoding="async" width="920" height="920" />
        </div>
        <div className="portrait-caption"><span>Letícia que Faz</span><span>Leiria — PT</span></div>
      </div>
    </div>
    <FadeUp className="page-width hero-metrics-container">
      <div className="hero-metrics">
        {metrics.map((metric) => <div className="metric" key={metric.label}>
          <span className="metric-value">{metric.value}{metric.star && <Star size={22} fill="currentColor" />}</span>
          <span className="metric-label">{metric.label}</span>
        </div>)}
      </div>
    </FadeUp>
  </section>
);
export default Hero;
