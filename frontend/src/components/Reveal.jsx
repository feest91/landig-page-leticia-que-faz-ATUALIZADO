import { motion, useReducedMotion } from "framer-motion";
const ease = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const reduceMotion = useReducedMotion();
  return <span className={`reveal-mask ${className}`}>
    <motion.span className="reveal-content"
      initial={reduceMotion ? false : { y: "105%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease }}>
      {children}
    </motion.span>
  </span>;
};
export const FadeUp = ({ children, delay = 0, className = "" }) => {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className}
    initial={reduceMotion ? false : { opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : delay, ease }}>
    {children}
  </motion.div>;
};
