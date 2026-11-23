import { Instagram } from "lucide-react";
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_URL } from "../data";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-width footer-grid">
      <div>
        <img src="/assets/logo_dark.png" alt="Letícia que Faz — Beauty Academy" loading="lazy" decoding="async" className="footer-logo" />
        <p>Estética de alta precisão, elegância e naturalidade para destacar a sua beleza.</p>
      </div>
      <div><h2>Endereço</h2><p>{ADDRESS}</p></div>
      <div className="footer-contact">
        <h2>Contacto</h2>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />{PHONE_DISPLAY}</a>
        <a href="https://www.instagram.com/leticiaquefaz/" target="_blank" rel="noopener noreferrer"><Instagram size={18} />@leticiaquefaz</a>
      </div>
    </div>
    <div className="page-width footer-bottom">
      <p>© {new Date().getFullYear()} Letícia que Faz — Beauty Academy. Todos os direitos reservados.</p>
      <p>Desenvolvido por <a href="https://wa.me/351910228253" target="_blank" rel="noopener noreferrer">Carlos Fernandes</a></p>
    </div>
  </footer>
);
export default Footer;
