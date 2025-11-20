import React from 'react';

const features = [
  {
    title: 'AI-Powered Templates',
    desc: 'Jumpstart with smart blocks tailored for fintech and travel.',
  },
  {
    title: 'Realtime Previews',
    desc: 'See changes instantly with smooth motion and polish.',
  },
  {
    title: 'Secure & Scalable',
    desc: 'Built on modern stacks with best practices baked-in.',
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Everything you need to ship</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Focus on the experience. We handle the motion, theming, and structure so you can ship faster.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
