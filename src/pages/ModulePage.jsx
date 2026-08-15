import React from 'react';
import { ArrowLeft, Sparkles, Radio, Play, Film } from 'lucide-react';
import LessonCard from '../components/LessonCard';

export default function ModulePage({ module, navigateTo }) {
  if (!module) return null;

  const isCyan = module.color === 'cyan';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back Button */}
      <div>
        <button 
          onClick={() => navigateTo({ page: 'home' })}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all text-xs font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VOLTAR AOS MÓDULOS</span>
        </button>
      </div>

      {/* Module Header Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl">
        
        {/* Background Gradient Mesh */}
        <div className={`absolute inset-0 bg-gradient-to-r ${module.gradient} opacity-50`}></div>
        
        {/* Cover Backdrop Blur Effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden md:block">
          <img 
            src={module.coverImage} 
            alt={module.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          
          {/* Module Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase border backdrop-blur-md bg-black/50 text-white border-white/20">
            {isCyan ? <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> : <Sparkles className="w-3.5 h-3.5 text-pink-400" />}
            <span>{module.badge}</span>
          </div>

          {/* Module Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none">
            {module.title}
          </h1>

          {/* Module Description requested in prompt */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium pt-2">
            {module.detailDescription}
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1.5">
              <Film className="w-4 h-4 text-cyan-400" />
              {module.lessons.length} Aulas Disponíveis
            </span>
            <span>•</span>
            <span>Acesso Livre</span>
          </div>

        </div>
      </div>

      {/* Lessons Grid Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2 uppercase">
            <span>AULAS DO MÓDULO</span>
          </h2>
          <span className="text-xs font-semibold text-slate-400">
            Selecione uma aula para assistir
          </span>
        </div>

        {/* Grid of Lesson Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.lessons.map((lesson) => (
            <LessonCard 
              key={lesson.id}
              lesson={lesson}
              moduleColor={module.color}
              onSelectLesson={() => navigateTo({ 
                page: 'lesson', 
                moduleId: module.id, 
                lessonId: lesson.id 
              })}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
