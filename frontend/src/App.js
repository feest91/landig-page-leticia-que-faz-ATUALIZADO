import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Specialties from "@/components/Specialties";
import RotatingCard from "@/components/RotatingCard";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PromoModal from "@/components/PromoModal";

function App() {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const el = document.querySelector(a.getAttribute("href"));
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -(document.querySelector("header")?.offsetHeight || 82) - 20 });
        }
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return (
    <div className="app-shell">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Specialties />
        <RotatingCard />
        <Marquee inverted />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <PromoModal />
    </div>
  );
}

export default App;
