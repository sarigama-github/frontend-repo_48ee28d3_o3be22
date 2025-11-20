import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-black/60 py-10 text-center text-sm text-white/50">
        <p>© {new Date().getFullYear()} WebsiteDigix • Built with immersive 3D interactions</p>
      </footer>
    </div>
  )
}

export default App
