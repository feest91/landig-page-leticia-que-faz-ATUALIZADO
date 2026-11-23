import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import { SPECIALTIES, WHATSAPP_URL, PROMO_WHATSAPP_URL } from "../data";

const Specialties = () => (
  <section id="servicos" className="services-section section-space">
    <div className="page-width">
      <FadeUp className="section-heading">
        <p className="eyebrow">Especialidades</p>
        <h2>Técnica, precisão <span className="quiet-word">&amp;</span> <strong>naturalidade</strong></h2>
      </FadeUp>
      <FadeUp>
        <a
          href={PROMO_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-banner-link"
        >
          <img
            src="/assets/banner-leticia-boas-vindas.svg"
            alt="Promoção de Boas-Vindas Design de Sobrancelhas 10€"
            className="promo-banner-img"
            loading="lazy"
            decoding="async"
          />
        </a>
      </FadeUp>
      <div className="services-grid">
        {SPECIALTIES.map((service, i) => (
          <FadeUp key={service.number} delay={(i % 2) * 0.1} className={`service-slot service-slot-${i + 1}`}>
            <article className={`service-card service-card-${i + 1}`}>
              <div className="service-photo">
                <img src={service.image} alt={service.title} loading="lazy" decoding="async" />
                <span className="service-tag">{service.tag}</span>
              </div>
              <div className="service-copy">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="service-link">
                  Consultar no WhatsApp<span><ArrowUpRight size={19} /></span>
                </a>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
export default Specialties;
