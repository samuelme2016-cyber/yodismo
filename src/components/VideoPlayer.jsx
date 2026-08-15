import React, { useState } from 'react';
import { Play, Volume2, Maximize, Sparkles } from 'lucide-react';

export default function VideoPlayer({ lesson, moduleColor }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isCyan = moduleColor === 'cyan';

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) return url;
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtube.com/watch')) {
      const parts = url.split('v=');
      if (parts[1]) {
        const videoId = parts[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    return url;
  };

  const embedUrl = getEmbedUrl(lesson.videoUrl);

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/15 p-1.5 sm:p-3 relative shadow-2xl">
      {/* Outer Glow Border */}
      <div className={`relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-inner border border-white/10 ${
        isCyan ? 'shadow-[0_0_40px_rgba(0,242,254,0.15)]' : 'shadow-[0_0_40px_rgba(254,44,85,0.15)]'
      }`}>

        {isPlaying && embedUrl ? (
          <iframe 
            src={`${embedUrl}?autoplay=1&rel=0`} 
            title={lesson.title} 
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          /* Interactive High-Tech Preview Cover Player */
          <div className="relative w-full h-full flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* Background Thumbnail Image */}
            <img 
              src={lesson.thumbnail} 
              alt={lesson.title}
              className="w-full h-full object-cover opacity-75 group-hover:opacity-85 transition-opacity duration-300 scale-105"
            />
            
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>

            {/* Glowing Center Play Trigger */}
            <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4 px-2 text-center">
              <div className={`w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl backdrop-blur-md ${
                isCyan 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_30px_rgba(0,242,254,0.6)]' 
                  : 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_30px_rgba(254,44,85,0.6)]'
              }`}>
                <Play className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 fill-current ml-0.5" />
              </div>
              <span className="text-[10px] sm:text-xs lg:text-sm font-black tracking-widest text-white uppercase bg-black/80 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
                CLIQUE PARA REPRODUZIR VÍDEO
              </span>
            </div>

            {/* Top Bar Overlay */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between pointer-events-none">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/80 text-[10px] sm:text-xs font-bold text-slate-200 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                IA AULAS PLAYER
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/80 text-[10px] sm:text-xs font-bold text-slate-300 backdrop-blur-md border border-white/10">
                {lesson.duration || "HD 1080p"}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );

}
