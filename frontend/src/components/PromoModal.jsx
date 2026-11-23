import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PROMO_WHATSAPP_URL } from "../data";

const STORAGE_KEY = "leticia_promo_modal_seen";

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        return;
      }
    } catch {
      // In case sessionStorage is restricted by browser settings
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="promo-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Promoção de Boas-Vindas"
        >
          <motion.div
            className="promo-modal-card"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            <button
              type="button"
              className="promo-modal-close"
              onClick={handleClose}
              aria-label="Fechar pop-up"
            >
              <X size={20} />
            </button>
            <a
              href={PROMO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="promo-modal-link"
              onClick={handleClose}
            >
              <img
                src="/assets/banner-leticia-boas-vindas.svg"
                alt="Promoção de Boas-Vindas Design de Sobrancelhas 10€"
                className="promo-modal-img"
              />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoModal;
