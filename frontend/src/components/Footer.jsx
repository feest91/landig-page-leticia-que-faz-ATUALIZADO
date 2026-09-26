import { Instagram } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_URL } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => (
  <footer className="bg-graphite">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-8 pt-14 md:grid-cols-3 md:px-10 md:py-14">
      <div>
        <img
          src="/assets/logo_dark.png"
          alt="Letícia que Faz — Beauty Academy"
          loading="lazy"
          decoding="async"
          className="h-10 w-auto object-contain"
        />
        <p className="mt-4 max-w-xs text-xs leading-relaxed text-ivory/70">
          Estética de alta precisão, elegância e naturalidade para destacar a sua beleza.
        </p>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Endereço</p>
        <p className="mt-3 text-xs leading-relaxed text-ivory/70">{ADDRESS}</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose">Contacto</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold tracking-widest text-white transition-colors duration-300 hover:text-rose"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          {PHONE_DISPLAY}
        </a>
        <a
          href="https://www.instagram.com/leticiaquefaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-ivory/70 transition-colors duration-300 hover:text-rose"
        >
          <Instagram className="h-4 w-4 shrink-0" />
          @leticiaquefaz
        </a>
      </div>
    </div>
    <div className="border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-6 pt-4 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/60">
          © {new Date().getFullYear()} Letícia que Faz — Beauty Academy. Todos os direitos reservados.
        </p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#A0A0A0]">
          Desenvolvido por{" "}
          <a
            href="https://wa.me/351910228253"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A0A0A0] transition-colors duration-300 hover:text-orange"
          >
            Carlos Fernandes
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
