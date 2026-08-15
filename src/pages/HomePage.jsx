import React from 'react';
import { Sparkles, Radio, Zap, ShoppingBag, ArrowRight } from 'lucide-react';
import ModuleCard from '../components/ModuleCard';

export default function HomePage({ modules, navigateTo }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 px-4 text-center overflow-hidden">
        
        {/* Background Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          
          {/* Platform Identity Top Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
              PLATAFORMA OFICIAL • IA AULAS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping"></span>
          </div>

          {/* Main Title / Brand Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            IA <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-pink-500 bg-clip-text text-transparent">AULAS</span>
          </h1>

          {/* Headline requested by user */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Conteúdos para dominar o <span className="text-cyan-400">TikTok Shop</span>
          </h2>

          {/* Complementary Text requested by user */}
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Lives, vídeos com IA e estratégias para criar conteúdos e vender no TikTok Shop.
          </p>

          {/* Highlights Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-300">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10">
              <ShoppingBag className="w-4 h-4 text-cyan-400" />
              <span>E-commerce & Vendas</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10">
              <Radio className="w-4 h-4 text-pink-500" />
              <span>Live Commerce</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>IA Generativa</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Section — CONTEÚDOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Title */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-pink-500"></div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
              CONTEÚDOS
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            2 Módulos Disponíveis
          </span>
        </div>

        {/* 2 Main Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {modules.map((module) => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onAccess={() => navigateTo({ page: 'module', moduleId: module.id })}
            />
          ))}
        </div>

      </section>

    </div>
  );
}
