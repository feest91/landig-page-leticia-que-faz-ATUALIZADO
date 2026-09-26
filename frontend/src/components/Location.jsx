import { MapPin, Navigation } from "lucide-react";
import { FadeUp } from "./Reveal";
import { ADDRESS, MAPS_URL } from "../data";

const Location = () => (
  <section id="localizacao" className="border-b border-hairline bg-white">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
      <FadeUp>
        <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-rose">Localização & Espaço</p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-tighter text-graphite md:text-5xl">
          No coração de <span className="text-rose">Leiria</span>
        </h2>
        <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-graphite/70 md:text-base">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
          <span>{ADDRESS}</span>
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 bg-orange px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-graphite transition-colors duration-300 hover:bg-graphite hover:text-white"
        >
          Como chegar
          <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </FadeUp>

      <FadeUp delay={0.15} className="flex">
        <div className="relative flex w-full flex-col justify-between border border-hairline bg-graphite p-8">
          <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-rose" />
          <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-rose" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/70">Centro — Leiria</p>
            <p className="mt-4 text-2xl font-black uppercase leading-tight tracking-tighter text-white md:text-3xl">
              R. Capitão Mouzinho de Albuquerque 18
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-rose">
              2º Andar D — 2400-193
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px border border-hairline bg-hairline">
            <div className="bg-graphite p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ivory/70">Cidade</p>
              <p className="mt-1 text-sm font-extrabold uppercase text-white">Leiria</p>
            </div>
            <div className="bg-graphite p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ivory/70">Zona</p>
              <p className="mt-1 text-sm font-extrabold uppercase text-white">Centro</p>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default Location;
