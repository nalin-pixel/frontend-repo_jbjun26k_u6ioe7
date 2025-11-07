import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <Rocket size={14} className="text-sky-400" />
          <span>Playful. Precise. Built for creators.</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Custom Mechanical Keyboards
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Elevate your desk setup with premium switches, hot-swappable PCBs, and
          artisan-grade craftsmanship. Tap into a modern typing experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 active:scale-95"
          >
            <ShoppingCart size={18} />
            Shop Keyboards
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
