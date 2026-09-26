import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "../data";

const metrics = [
  { value: "+1.200", label: "Atendimentos" },
  { value: "100%", label: "Precisão Técnica" },
  { value: "5.0", label: "Avaliação", star: true },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-hairline pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 md:grid-cols-12 md:px-10 md:pb-0">
        <div className="flex flex-col justify-center md:col-span-7 md:pb-20">
          <Reveal delay={0.1}>
            <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-rose">
              Letícia que Faz
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory/60">
              Beauty Academy | Unhas, Sobrancelhas & Olhar
            </p>
          </Reveal>
          <h1 className="mt-8 text-3xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-5xl lg:text-7xl">
            <Reveal delay={0.35}>Sua beleza.</Reveal>
            <Reveal delay={0.45}><span className="text-rose">Seu momento.</span></Reveal>
            <Reveal delay={0.55}>A sua <span className="text-rose">melhor versão.</span></Reveal>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-ivory/80 md:text-base"
          >
            Estética de alta precisão, elegância e naturalidade para destacar a sua beleza — no coração de Leiria.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-orange px-8 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-graphite transition-colors duration-300 hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center md:col-span-5 md:pb-20">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border border-hairline" />
            <div className="absolute -inset-3 rounded-full border border-rose/40 [clip-path:polygon(0_0,30%_0,30%_3px,0_3px)]" />
            <div className="overflow-hidden rounded-full border-2 border-rose/70">
              <img
                src="/assets/leticia_new.webp"
                alt="Letícia — profissional de estética"
                fetchpriority="high"
                decoding="async"
                width="920"
                height="920"
                className="h-[340px] w-[340px] object-cover object-top sm:h-[400px] sm:w-[400px] md:h-[460px] md:w-[460px]"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center justify-between gap-6 border border-hairline bg-anthracite px-5 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/60">Letícia que Faz</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Leiria — PT</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mx-auto grid max-w-7xl grid-cols-3 border-t border-hairline md:mx-10 lg:mx-auto"
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`flex flex-col gap-1 px-4 py-6 md:px-8 md:py-8 ${i > 0 ? "border-l border-hairline" : ""}`}
          >
            <span className="flex items-center gap-2 text-2xl font-black tracking-tight text-white md:text-4xl">
              {m.value}
              {m.star && <Star className="h-4 w-4 fill-rose text-rose md:h-5 md:w-5" />}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-ivory/70 md:text-xs">{m.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
