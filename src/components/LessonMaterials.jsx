import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Bot, Terminal } from 'lucide-react';

export default function LessonMaterials({ materials, moduleColor }) {
  const [copiedId, setCopiedId] = useState(null);

  if (!materials || materials.length === 0) return null;

  const handleCopyPrompt = (promptText, materialId) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(materialId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section className="space-y-8 pt-6">
      
      {/* Section Header */}
      <div className="border-b border-white/10 pb-4 space-y-1">
        <div className="flex items-center gap-3">
          <div className="w-3 h-8 rounded-full bg-gradient-to-b from-pink-500 to-cyan-400"></div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
            MATERIAIS DA AULA
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base pl-6 font-medium">
          Acesse abaixo os links dos agentes e copie os prompts utilizados nesta aula.
        </p>
      </div>

      {/* Materials List */}
      <div className="space-y-8">
        {materials.map((material) => (
          <div 
            key={material.id}
            className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-pink-500/30"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Material Badge & Title */}
            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-pink-500/10 text-pink-400 border border-pink-500/30">
                <Bot className="w-3.5 h-3.5" />
                {material.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                {material.title}
              </h3>
            </div>

            {/* Material Description & Embedded Link */}
            <div className="space-y-3">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {material.description}
              </p>

              {/* Clickable Link inside Description */}
              {material.agentUrl && (
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Link de Acesso ao Agente:
                  </div>
                  <a
                    href={material.agentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-sm sm:text-base underline underline-offset-4 decoration-cyan-500/50 hover:decoration-cyan-400 transition-colors break-all group"
                  >
                    <span>{material.agentUrl}</span>
                    <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Prompt Section (If Exists) */}
            {material.promptSection && (
              <div className="rounded-2xl bg-[#050609] border border-white/10 p-5 sm:p-6 space-y-4 shadow-inner mt-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-white font-extrabold text-base tracking-tight uppercase">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>{material.promptSection.title}</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {material.promptSection.explanation}
                    </p>
                  </div>

                  {/* Copy Prompt Button */}
                  <button
                    onClick={() => handleCopyPrompt(material.promptSection.promptText, material.id)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-md ${
                      copiedId === material.id
                        ? 'bg-emerald-500 text-black border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                    }`}
                  >
                    {copiedId === material.id ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>PROMPT COPIADO!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPIAR PROMPT</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Prompt Code Container */}
                <div className="relative group">
                  <pre className="w-full max-h-96 overflow-x-auto overflow-y-auto p-4 rounded-xl bg-[#090b12] border border-white/10 text-xs sm:text-sm font-mono text-cyan-200 leading-relaxed whitespace-pre-wrap break-words select-all scrollbar-thin">
                    <code>{material.promptSection.promptText}</code>
                  </pre>
                </div>

              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}
