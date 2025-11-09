import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-[#0b0f1a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 py-16 md:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md ring-1 ring-white/20">
          <Rocket className="h-3.5 w-3.5 text-emerald-300" />
          <span className="text-white/80">Modern Fintech Experience</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
          Your Finance, Visualized
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
          Track spending, plan savings, and discover insights with a clean dashboard
          built for clarity. Powerful filters, live charts, and a beautiful 3D
          hero crafted for a modern, minimalist feel.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-emerald-400/20 transition hover:bg-emerald-300">
            Get Started
          </button>
          <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
