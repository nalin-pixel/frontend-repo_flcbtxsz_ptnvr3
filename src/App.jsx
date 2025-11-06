import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AutomationDemo from './components/AutomationDemo';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-slate-900">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-white">AI</span>
            <span>AutoWarehouse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Fitur</a>
            <a href="#demo" className="hover:text-slate-900">Demo</a>
            <a href="#" className="hover:text-slate-900">Harga</a>
          </nav>
        </div>
      </header>

      <main className="space-y-12 md:space-y-16 py-0">
        {/* Hero is full-bleed, following sections are contained */}
        <Hero />
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Features />
          <AutomationDemo />
          <CTA />
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-600">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AutoWarehouse AI. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-900">Ketentuan Layanan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
