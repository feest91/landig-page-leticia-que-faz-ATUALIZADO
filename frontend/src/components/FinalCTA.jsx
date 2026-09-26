import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { FadeUp } from "./Reveal";
import { PHONE_DISPLAY, WHATSAPP_URL } from "../data";

const FinalCTA = () => (
  <section className="relative overflow-hidden border-b border-hairline bg-graphite">
    <span className="pointer-events-none absolute inset-x-0 bottom-2 mx-auto max-w-full select-none overflow-hidden whitespace-nowrap text-center text-4xl font-black uppercase leading-none text-white/5 sm:text-6xl md:text-8xl">
      Agende agora
    </span>
    <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <FadeUp>
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-ivory/70">Agendamentos</p>
        <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl">
          A sua melhor versão começa com <span className="text-rose">uma mensagem.</span>
        </h2>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-ivory/85 md:text-base">
          Consulte horários disponíveis e valores diretamente pelo WhatsApp. Resposta rápida, atendimento personalizado.
        </p>
        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-orange px-10 py-5 text-xs font-extrabold uppercase tracking-[0.2em] text-graphite transition-colors duration-300 hover:bg-white"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            Agendar pelo WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <span className="text-xl font-black tracking-widest text-white md:text-2xl">
            {PHONE_DISPLAY}
          </span>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default FinalCTA;
