import React, { useState, useEffect } from 'react';
import { modulesData } from './data/courses';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';

export default function App() {
  const [route, setRoute] = useState(() => parseHash());

  function parseHash() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) return { page: 'home' };

    const parts = hash.split('/');
    if (parts[0] === 'module' && parts[1]) {
      return { page: 'module', moduleId: parts[1] };
    }
    if (parts[0] === 'lesson' && parts[1] && parts[2]) {
      return { page: 'lesson', moduleId: parts[1], lessonId: parts[2] };
    }
    return { page: 'home' };
  }

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newRoute) => {
    let newHash = '';
    if (newRoute.page === 'home') {
      newHash = '#home';
    } else if (newRoute.page === 'module') {
      newHash = `#module/${newRoute.moduleId}`;
    } else if (newRoute.page === 'lesson') {
      newHash = `#lesson/${newRoute.moduleId}/${newRoute.lessonId}`;
    }
    window.location.hash = newHash;
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active module and active lesson
  const currentModule = modulesData.find((m) => m.id === route.moduleId);
  let currentLesson = null;
  let prevLesson = null;
  let nextLesson = null;

  if (currentModule && route.lessonId) {
    const lessonIndex = currentModule.lessons.findIndex((l) => l.id === route.lessonId);
    if (lessonIndex !== -1) {
      currentLesson = currentModule.lessons[lessonIndex];
      prevLesson = lessonIndex > 0 ? currentModule.lessons[lessonIndex - 1] : null;
      nextLesson = lessonIndex < currentModule.lessons.length - 1 ? currentModule.lessons[lessonIndex + 1] : null;
    }
  }

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar currentRoute={route} navigateTo={navigateTo} />

      {/* Main View Area */}
      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage modules={modulesData} navigateTo={navigateTo} />
        )}

        {route.page === 'module' && currentModule && (
          <ModulePage module={currentModule} navigateTo={navigateTo} />
        )}

        {route.page === 'lesson' && currentModule && currentLesson && (
          <LessonPage 
            module={currentModule}
            lesson={currentLesson}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            navigateTo={navigateTo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
