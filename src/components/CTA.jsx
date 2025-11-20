import React from 'react';

function CTA() {
  return (
    <section id="get-started" className="relative z-10 bg-gradient-to-b from-slate-950 to-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to upgrade your website?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Bring your brand to life with an interactive cover and premium dark styling.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start for Free</a>
          <a href="/test" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">Check Backend</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
