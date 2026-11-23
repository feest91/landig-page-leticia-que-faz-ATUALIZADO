import { ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { FadeUp } from "./Reveal";
import { PHONE_DISPLAY, WHATSAPP_URL } from "../data";

const FinalCTA = () => (
  <section className="final-section">
    <div className="page-width">
      <FadeUp className="final-panel">
        <span className="final-watermark" aria-hidden="true">Agende agora</span>
        <div className="final-copy">
          <p className="eyebrow">Agendamentos</p>
          <h2>A sua melhor versão começa com <strong>uma mensagem.</strong></h2>
          <p className="body-copy">Consulte horários disponíveis e valores diretamente pelo WhatsApp. Resposta rápida, atendimento personalizado.</p>
          <div className="final-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button button-whatsapp">
              <WhatsAppIcon />Agendar pelo WhatsApp<span className="button-arrow"><ArrowUpRight size={19} /></span>
            </a>
            <span className="final-phone">{PHONE_DISPLAY}</span>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);
export default FinalCTA;
