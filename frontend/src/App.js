import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Specialties from "@/components/Specialties";
import RotatingCard from "@/components/RotatingCard";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
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
          lenis.scrollTo(el, { offset: -64 });
        }
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="noise-overlay bg-graphite font-montserrat text-ivory">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Specialties />
        <RotatingCard />
        <Marquee inverted />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
