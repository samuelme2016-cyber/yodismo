import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer({ navigateTo }) {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#06070a] text-slate-400 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-pink-500 p-[1px]">
            <div className="w-full h-full bg-[#08090d] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-white tracking-wider flex items-center gap-1">
              IA <span className="text-cyan-400">AULAS</span>
            </div>
            <p className="text-xs text-slate-500">TikTok Shop, Lives & Inteligência Artificial</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs font-semibold">
          <button 
            onClick={() => navigateTo({ page: 'home' })}
            className="hover:text-cyan-400 transition-colors"
          >
            INÍCIO
          </button>
          <button 
            onClick={() => navigateTo({ page: 'module', moduleId: 'lives-gravadas' })}
            className="hover:text-cyan-400 transition-colors"
          >
            LIVES GRAVADAS
          </button>
          <button 
            onClick={() => navigateTo({ page: 'module', moduleId: 'videos-com-ia' })}
            className="hover:text-pink-400 transition-colors"
          >
            VÍDEOS COM IA
          </button>
        </div>

        {/* Note */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          Plataforma de Conteúdo Aberto • Acesso Direto por Link
        </div>

      </div>
    </footer>
  );
}
