import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Clock, Radio, Play } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import LessonMaterials from '../components/LessonMaterials';

export default function LessonPage({ module, lesson, prevLesson, nextLesson, navigateTo }) {
  if (!module || !lesson) return null;

  const isCyan = module.color === 'cyan';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button 
          onClick={() => navigateTo({ page: 'module', moduleId: module.id })}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all text-xs font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VOLTAR PARA {module.title}</span>
        </button>

        {/* Module • Lesson Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-white/5 border border-white/10 text-slate-300">
          <span className={isCyan ? "text-cyan-400" : "text-pink-400"}>{module.badge}</span>
          <span>•</span>
          <span>{lesson.number}</span>
        </div>
      </div>

      {/* Lesson Title Section */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {lesson.title}
        </h1>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-1">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {lesson.duration || "Duração flexível"}
          </span>
          <span>•</span>
          <span>TikTok Shop & IA</span>
        </div>
      </div>

      {/* Main Video Player Container */}
      <div className="w-full">
        <VideoPlayer lesson={lesson} moduleColor={module.color} />
      </div>

      {/* MATERIAIS DA AULA (If Available for Lesson) */}
      {lesson.materials && (
        <LessonMaterials materials={lesson.materials} moduleColor={module.color} />
      )}

      {/* Simple Linear Navigation: Previous / Next Lesson */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        
        {/* Previous Lesson Button */}
        {prevLesson ? (
          <button
            onClick={() => navigateTo({ page: 'lesson', moduleId: module.id, lessonId: prevLesson.id })}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-bold">{prevLesson.number}</div>
              <div>← AULA ANTERIOR</div>
            </div>
          </button>
        ) : (
          <div className="w-full sm:w-auto"></div>
        )}

        {/* Next Lesson Button */}
        {nextLesson ? (
          <button
            onClick={() => navigateTo({ page: 'lesson', moduleId: module.id, lessonId: nextLesson.id })}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-lg group ${
              isCyan 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-[0_0_20px_rgba(0,242,254,0.3)]' 
                : 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-[0_0_20px_rgba(254,44,85,0.3)]'
            }`}
          >
            <div className="text-right">
              <div className="text-[10px] opacity-80 font-bold">{nextLesson.number}</div>
              <div>PRÓXIMA AULA →</div>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            onClick={() => navigateTo({ page: 'module', moduleId: module.id })}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>CONCLUIR MÓDULO</span>
          </button>
        )}

      </div>

    </div>
  );
}


