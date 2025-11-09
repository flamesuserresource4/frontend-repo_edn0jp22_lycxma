import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FiltersBar from './components/FiltersBar';
import KPIs from './components/KPIs';
import ChartsGrid from './components/ChartsGrid';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar />
      <HeroSection />

      <main id="dashboard" className="mx-auto max-w-6xl px-6 py-10 md:px-8 lg:px-12">
        <FiltersBar />
        <div className="mt-6">
          <KPIs />
        </div>
        <div className="mt-6">
          <ChartsGrid />
        </div>
      </main>

      <footer className="border-t border-gray-200/80 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GlassCard — A modern, minimalist finance dashboard.
      </footer>
    </div>
  );
}

export default App;
