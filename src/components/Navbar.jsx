import React from 'react';
import { CreditCard, Home, PieChart, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100">
            <CreditCard className="h-5 w-5 text-emerald-600" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-gray-900">GlassCard</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
          <a href="#" className="inline-flex items-center gap-1.5 hover:text-gray-900">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#dashboard" className="inline-flex items-center gap-1.5 hover:text-gray-900">
            <PieChart className="h-4 w-4" /> Dashboard
          </a>
          <a href="#settings" className="inline-flex items-center gap-1.5 hover:text-gray-900">
            <Settings className="h-4 w-4" /> Settings
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
          <User className="h-4 w-4" /> Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
