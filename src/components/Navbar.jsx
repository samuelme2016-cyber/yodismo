import React, { useState } from 'react';
import { Sparkles, Video, Play, Menu, X, Radio } from 'lucide-react';

export default function Navbar({ currentRoute, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNav({ page: 'home' })}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-slate-900 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
              <div className="w-full h-full bg-[#08090d] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-wider text-white">IA</span>
                <span className="font-black text-2xl tracking-wider bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">AULAS</span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest -mt-1">TikTok Shop & IA</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNav({ page: 'home' })}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentRoute.page === 'home'
                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              INÍCIO
            </button>

            <button
              onClick={() => handleNav({ page: 'module', moduleId: 'lives-gravadas' })}
              className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                currentRoute.page === 'module' && currentRoute.moduleId === 'lives-gravadas'
                  ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              <Radio className="w-4 h-4 text-pink-500 animate-pulse" />
              LIVES GRAVADAS
            </button>

            <button
              onClick={() => handleNav({ page: 'module', moduleId: 'videos-com-ia' })}
              className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                currentRoute.page === 'module' && currentRoute.moduleId === 'videos-com-ia'
                  ? 'text-pink-400 bg-pink-500/10 border border-pink-500/30 shadow-[0_0_15px_rgba(254,44,85,0.15)]'
                  : 'text-slate-300 hover:text-pink-400 hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              VÍDEOS COM IA
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e17] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNav({ page: 'home' })}
            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
              currentRoute.page === 'home'
                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <span>INÍCIO</span>
          </button>

          <button
            onClick={() => handleNav({ page: 'module', moduleId: 'lives-gravadas' })}
            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center gap-3 ${
              currentRoute.page === 'module' && currentRoute.moduleId === 'lives-gravadas'
                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Radio className="w-5 h-5 text-pink-500" />
            <span>LIVES GRAVADAS</span>
          </button>

          <button
            onClick={() => handleNav({ page: 'module', moduleId: 'videos-com-ia' })}
            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center gap-3 ${
              currentRoute.page === 'module' && currentRoute.moduleId === 'videos-com-ia'
                ? 'text-pink-400 bg-pink-500/10 border border-pink-500/30'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>VÍDEOS COM IA</span>
          </button>
        </div>
      )}
    </header>
  );
}
