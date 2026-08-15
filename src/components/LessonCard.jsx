import React from 'react';
import { Play, Clock } from 'lucide-react';

export default function LessonCard({ lesson, moduleColor, onSelectLesson }) {
  const isCyan = moduleColor === 'cyan';

  return (
    <div 
      onClick={onSelectLesson}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
        isCyan 
          ? 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,242,254,0.2)]' 
          : 'hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(254,44,85,0.2)]'
      }`}
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img 
          src={lesson.thumbnail} 
          alt={lesson.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-black/30 group-hover:opacity-80 transition-opacity"></div>

        {/* Play Icon Badge Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-110 ${
            isCyan ? 'bg-cyan-500/80 text-black shadow-[0_0_15px_rgba(0,242,254,0.5)]' : 'bg-pink-500/80 text-white shadow-[0_0_15px_rgba(254,44,85,0.5)]'
          }`}>
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider bg-black/70 text-white border border-white/10 backdrop-blur-md">
            {lesson.number}
          </span>
        </div>

        {/* Duration badge */}
        {lesson.duration && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-black/80 text-slate-300 backdrop-blur-md border border-white/10">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{lesson.duration}</span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h4 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
            {lesson.title}
          </h4>
        </div>

        {/* Button */}
        <div>
          <button className={`w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
            isCyan 
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black' 
              : 'bg-pink-500/10 text-pink-400 border border-pink-500/30 group-hover:bg-pink-500 group-hover:text-white'
          }`}>
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>ASSISTIR AULA</span>
          </button>
        </div>
      </div>

    </div>
  );
}
