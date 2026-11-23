import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a href="#hero" className="brand-link" onClick={() => setOpen(false)}>
          <img src="/assets/logo_dark.png" alt="Letícia que Faz — Beauty Academy" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="button button-light header-booking">
            <WhatsAppIcon />Agendar
          </a>
          <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Navegação mobile"
          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}>
          {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
