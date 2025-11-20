import React from 'react';

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Logo" className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wide text-white/90">WebsiteDigix</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#get-started" className="rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/20">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
