import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const RotatingCard = () => (
  <section className="relative overflow-hidden border-b border-hairline py-24 md:py-32">
    <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none text-anthracite">
      Maravilhosas
    </span>
    <div className="relative flex justify-center" style={{ perspective: 900 }}>
      <motion.div
        animate={{ rotateY: [0, 0, 360] }}
        transition={{ duration: 6, times: [0, 0.5, 1], repeat: Infinity, ease: "easeInOut" }}
        className="border border-rose/60 bg-anthracite px-10 py-12 text-center md:px-16 md:py-14"
      >
        <Heart className="mx-auto h-6 w-6 fill-rose text-rose" />
        <p className="mt-4 text-xl font-black uppercase tracking-tight text-white md:text-3xl">
          Olá, <span className="text-rose">Maravilhosas!</span>
        </p>
        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.3em] text-ivory/60">
          Letícia que Faz — Beauty Academy
        </p>
      </motion.div>
    </div>
  </section>
);

export default RotatingCard;
