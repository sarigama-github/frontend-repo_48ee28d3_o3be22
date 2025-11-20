import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to guide focus - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/40 to-orange-500/10" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.9)]" />
          Fintech x Travel — Interactive Boarding Pass Experience
        </span>
        
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-6xl">
          Build modern travel products
          <span className="block bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-transparent">with immersive 3D vibes</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
          A sleek, dark interface with a white-to-orange accent that feels fast, premium, and alive. Hover, explore, and ship.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400/60">
            Get Started
          </a>
          <a href="#learn-more" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Learn More
          </a>
        </div>

        {/* Boarding pass style hint cards */}
        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: 'Boarding Pass UI', desc: 'Tap and hover to reveal details with smooth transitions.' },
            { title: 'Secure Payments', desc: 'Tokenized wallets and instant checkout built-in.' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-orange-400/60 hover:bg-orange-400/5"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-transparent blur-2xl" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">Hover</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                <span>UX · Motion</span>
                <span className="font-mono">W2-ORNG</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
