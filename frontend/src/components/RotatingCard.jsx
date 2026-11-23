import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { FadeUp } from "./Reveal";

const RotatingCard = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="greeting-section section-space">
      <div className="page-width">
        <FadeUp className="greeting-stage">
          <span className="greeting-watermark" aria-hidden="true">Maravilhosas</span>
          <div className="greeting-orbit greeting-orbit-one" aria-hidden="true" />
          <div className="greeting-orbit greeting-orbit-two" aria-hidden="true" />
          <div className="greeting-perspective">
            <motion.div className="greeting-card"
              whileInView={reduceMotion ? {} : { y: [0, -10, 0], rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <span className="greeting-icon"><Heart size={28} strokeWidth={1.5} /></span>
              <h2>Olá, <strong>Maravilhosas!</strong></h2>
              <p>Letícia que Faz — Beauty Academy</p>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
export default RotatingCard;
