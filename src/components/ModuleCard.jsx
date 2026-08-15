import React from 'react';
import { Play, ArrowRight, Video, Sparkles, Radio } from 'lucide-react';

export default function ModuleCard({ module, onAccess }) {
  const isCyan = module.color === 'cyan';

  return (
    <div 
      onClick={onAccess}
      className={`group relative cursor-pointer rounded-3xl overflow-hidden glass-card flex flex-col justify-between border border-white/10 ${module.accentBorder} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${module.accentGlow}`}
    >
      {/* Background Gradient Mesh */}
      <div className={`absolute inset-0 bg-gradient-to-b ${module.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
      
      {/* Visual Cover Header */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img 
          src={module.coverImage} 
          alt={module.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay Dark Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-[#0c0e17]/50 to-transparent"></div>
        
        {/* Top Badge */}
        <div className="absolute top-5 left-5">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider border uppercase backdrop-blur-md ${module.badgeBg}`}>
            {isCyan ? <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> : <Sparkles className="w-3.5 h-3.5 text-pink-400" />}
            {module.badge}
          </span>
        </div>

        {/* Floating Neon Highlight Title inside Cover */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] uppercase">
            {module.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {module.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button 
            className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform group-hover:scale-[1.02] shadow-lg ${module.buttonBg}`}
          >
            <span className="tracking-wider uppercase text-sm font-black">ACESSAR MÓDULO</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
