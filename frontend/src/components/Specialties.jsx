import { Gift } from "lucide-react";
import { FadeUp } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import PromoCountdown from "./PromoCountdown";
import { SPECIALTIES, WHATSAPP_URL, PROMO_WHATSAPP_URL } from "../data";

const Specialties = () => (
  <section id="servicos" className="border-b border-hairline bg-[#F8F9FA]">
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <FadeUp>
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-rose">Especialidades</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-none tracking-tighter text-graphite md:text-5xl">
          Técnica, precisão <span className="text-rose">&</span> naturalidade
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div
          className="mt-14 flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-[#FF8906] to-[#E53170] p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-12"
        >
          <div className="flex-1">
            <div className="flex justify-start">
              <span
                className="promo-blink inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.3em] text-graphite"
              >
                <Gift className="h-3.5 w-3.5 shrink-0" />
                Oferta de Boas-Vindas
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
              Design de Sobrancelhas
            </h3>
            <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-white/85">
              Mapeamento facial personalizado e simetria perfeita para valorizar o seu olhar.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <span className="text-6xl font-extrabold tracking-tighter text-white md:text-7xl">
              10€
            </span>
            <a
              href={PROMO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-graphite px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              Quero aproveitar a promoção
            </a>
            <PromoCountdown />
          </div>
        </div>
      </FadeUp>

      <div className="mt-10 grid grid-cols-1 border border-[#E4E2EC] sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALTIES.map((s, i) => (
          <FadeUp
            key={s.number}
            delay={i * 0.1}
            className={`group flex flex-col border-[#E4E2EC] ${i > 0 ? "border-t sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
          >
            <div className="flex h-full flex-col bg-graphite">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-graphite/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-coral">
                  {s.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-black tracking-widest text-rose">{s.number}</span>
                <h3 className="mt-2 text-lg font-extrabold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-rose">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/70">{s.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-[11px] font-extrabold uppercase tracking-[0.25em] text-white underline decoration-rose decoration-2 underline-offset-8 transition-colors duration-300 hover:text-rose"
                >
                  Consultar no WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Specialties;
