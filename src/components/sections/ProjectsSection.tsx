// src/components/sections/ProjectsSection.tsx
import { useState, useRef } from 'react';
import type { TouchEvent } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string[];
  technologies: string[];
  link?: string;
  linkType?: 'github' | 'playstore' | 'external';
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-5 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between w-full h-[440px] sm:h-[380px]">
      
      {/* Nagłówek Karty */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-800/60 pb-3 sm:pb-4 shrink-0 min-h-[68px] sm:min-h-[80px]">
        <div className="flex-1">
          <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-teal-400 mt-1">
            {project.category}
          </p>
        </div>

        {/* Ikona renderuje się TYLKO gdy podano link */}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 sm:p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all shrink-0 flex items-center justify-center"
            aria-label={`Open ${project.title}`}
            title={project.linkType === 'playstore' ? 'View on Google Play Store' : 'View Source Code'}
          >
            {project.linkType === 'playstore' ? (
              <svg className="w-5 h-5 fill-none stroke-current stroke-2 text-white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-current text-white">
                <use href="/icons.svg#github-icon" />
              </svg>
            )}
          </a>
        )}
      </div>

      {/* Środek: Opis projektu */}
      <div className="flex-1 flex flex-col justify-center py-3 sm:py-4">
        <ul className="flex flex-col gap-2 sm:gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {project.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 sm:mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dół: Technologie */}
      <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/60 shrink-0">
        <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
          Technologies & Tools
        </span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Vehicle OBD2 Dyno Application',
      category: 'B.Sc. Thesis',
      description: [
        'Developed an Android app retrieving live telemetry via Bluetooth ELM327 to calculate real-time engine horsepower and torque.',
      ],
      technologies: ['Kotlin', 'Android Studio', 'Bluetooth', 'ELM327', 'Real-Time Telemetry'],
      link: 'https://github.com/pestrowicz-szymon/MobileCarDyno',
      linkType: 'github',
    },
    {
      id: 2,
      title: 'Submarine Game',
      category: 'Google Play Store',
      description: [
        'Created and published a physics-based mobile game featuring upgrades, save states, and AdMob ads.',
      ],
      technologies: ['C#', 'Unity', 'Physics Engine', 'AdMob', 'Game Dev'],
      link: 'https://play.google.com/store/apps/details?id=com.UnderTheWaterTest.com.unity.template.mobile2D',
      linkType: 'playstore',
    },
    {
      id: 3,
      title: 'Local Multimodal LLM Math OCR Pipeline',
      category: 'AI & Vision Pipeline',
      description: [
        'Engineered an automated Python pipeline leveraging a locally hosted multimodal LLM (Ollama / Qwen) to convert image-based mathematical tasks into structured LaTeX code.',
        'Implemented batch image preprocessing and custom prompt validation routines to achieve high transcription accuracy and valid syntax generation.',
      ],
      technologies: ['Python', 'Ollama', 'Qwen-Vision', 'Image Processing', 'LaTeX', 'Local LLM'],
    },
    {
      id: 4,
      title: 'Custom Programming Language Compiler',
      category: 'Compiler & Formal Languages',
      description: [
        'Designed and implemented a complete compilation pipeline in Python for a custom domain-specific language, incorporating a dedicated Lexer and Parser.',
        'Built Abstract Syntax Tree (AST) traversal, symbol table management, and runtime execution/evaluation modules for program validation.',
      ],
      technologies: ['Python', 'Lexical Analysis', 'Parsing', 'AST', 'Formal Languages', 'Runtime Evaluation'],
      link: 'https://github.com/pestrowicz-szymon/Semestr-5/tree/main/J%C4%99zyki%20Formalne%20i%20Techniki%20Translacji/Lista4_vytax',
      linkType: 'github',
    },
    {
      id: 5,
      title: 'Smart Home IoT Backend Service',
      category: 'Backend & IoT',
      description: [
        'Designed an asynchronous RESTful backend handling IoT telemetry.',
      ],
      technologies: ['Python', 'Django', 'REST API', 'SQL', 'IoT'],
      link: 'https://github.com/pestrowicz-szymon/Projekt_Smart_Home',
      linkType: 'github',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const changeSlide = (newIndex: number, dir: 'next' | 'prev') => {
    if (isAnimating || newIndex === currentIndex) return;
    setDirection(dir);
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setIsAnimating(true);
  };

  const nextSlide = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    changeSlide(nextIdx, 'next');
  };

  const prevSlide = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    changeSlide(prevIdx, 'prev');
  };

  const handleAnimationEnd = () => {
    setPrevIndex(null);
    setIsAnimating(false);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="projects" 
      className="max-w-5xl mx-auto md:snap-start md:snap-always min-h-full shrink-0 w-full flex flex-col justify-center items-start px-4 sm:px-6 py-12"
    >
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0.3; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutToLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0.3; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); opacity: 0.3; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutToRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0.3; }
        }

        .anim-slide-in-right { animation: slideInFromRight 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .anim-slide-out-left { animation: slideOutToLeft 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .anim-slide-in-left { animation: slideInFromLeft 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .anim-slide-out-right { animation: slideOutToRight 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      <div className="w-full flex flex-col gap-6">
        
        {/* Nagłówek Sekcji wyśrodkowany z przyciskami po prawej stronie */}
        <div className="relative w-full border-b border-slate-800/80 pb-4 flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-teal-400 font-mono text-sm">03. Portfolio</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Selected Engineering Projects
            </h2>
          </div>

          <div className="sm:absolute sm:right-0 mt-3 sm:mt-0 flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-xs font-mono text-slate-400 min-w-[45px] text-center select-none">
              {currentIndex + 1} / {projects.length}
            </span>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Kontener Karuzeli */}
        <div 
          className="relative w-full overflow-hidden touch-pan-y h-[440px] sm:h-[380px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {prevIndex !== null && (
            <div 
              className={`absolute top-0 left-0 w-full h-full z-0 ${
                direction === 'next' ? 'anim-slide-out-left' : 'anim-slide-out-right'
              }`}
            >
              <ProjectCard project={projects[prevIndex]} />
            </div>
          )}

          <div 
            key={currentIndex}
            onAnimationEnd={handleAnimationEnd}
            className={`w-full h-full z-10 relative ${
              isAnimating 
                ? direction === 'next' 
                  ? 'anim-slide-in-right' 
                  : 'anim-slide-in-left' 
                : ''
            }`}
          >
            <ProjectCard project={projects[currentIndex]} />
          </div>
        </div>

        {/* Wskaźniki Kropkowe */}
        <div className="flex items-center justify-center gap-2 w-full pt-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index, index > currentIndex ? 'next' : 'prev')}
              disabled={isAnimating}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === currentIndex 
                  ? 'w-8 bg-teal-400' 
                  : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}