import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { id: "inicio", label: "Início", href: "#hero" },
  { id: "servicos", label: "Serviços", href: "#servicos" },
  { id: "localizacao", label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-graphite/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a href="#hero" className="block" onClick={() => setOpen(false)}>
          <img
            src="/assets/logo_dark.png"
            alt="Letícia que Faz — Beauty Academy"
            className="h-8 w-auto object-contain md:h-10"
          />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-widest text-ivory/70 md:flex">
          {links.map((l) => (
            <a key={l.id} href={l.href} className="transition-colors duration-300 hover:text-rose">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-graphite transition-colors duration-300 hover:bg-white md:px-6"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-white transition-colors duration-300 hover:text-orange md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-hairline bg-graphite md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-hairline px-5 py-4 text-xs font-extrabold uppercase tracking-[0.25em] text-ivory/80 transition-colors duration-300 hover:text-orange"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
