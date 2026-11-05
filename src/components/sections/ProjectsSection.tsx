import { useState, useRef } from 'react';
import type { TouchEvent } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string[];
  technologies: string[];
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
    },
    {
      id: 2,
      title: 'Submarine Game',
      category: 'Google Play Store',
      description: [
        'Created and published a physics-based mobile game featuring upgrades, save states, and AdMob ads.',
      ],
      technologies: ['C#', 'Unity', 'Physics Engine', 'AdMob', 'Game Dev'],
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
    },
    {
      id: 5,
      title: 'Smart Home IoT Backend Service',
      category: 'Backend & IoT',
      description: [
        'Designed an asynchronous RESTful backend handling IoT telemetry and Redis caching.',
      ],
      technologies: ['Python', 'Django', 'REST API', 'Redis', 'SQL', 'IoT'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Nawigacja w pętli bez końca (Modulo Arithmetic)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Obsługa gestów przesunięcia palcem (Swipe)
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
      nextSlide(); // Przesunięcie w lewo -> następny projekt
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Przesunięcie w prawo -> poprzedni projekt
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentProject = projects[currentIndex];

  return (
    <section 
      id="projects" 
      className="max-w-5xl mx-auto snap-start snap-always h-full w-full flex flex-col justify-center items-start px-6 py-12"
    >
      <div className="w-full flex flex-col gap-6">
        
        {/* Nagłówek Sekcji ze Strzałkami Nawigacyjnymi */}
        <div className="flex items-end justify-between w-full border-b border-slate-800/80 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-teal-400 font-mono text-sm">03. Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Selected Engineering Projects
            </h2>
          </div>

          {/* Przyciski Nawigacyjne (Strzałki) */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all active:scale-95"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-xs font-mono text-slate-400 min-w-[45px] text-center">
              {currentIndex + 1} / {projects.length}
            </span>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-all active:scale-95"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Karuzela / Obszar slajdu z obsługą gestów */}
        <div 
          className="w-full touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Pojedyncza Karta Projektu z płynnym powiększeniem/pojawianiem */}
          <div 
            key={currentProject.id}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between gap-6 min-h-[360px]"
          >
            {/* Nagłówek Karty */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-800/60 pb-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="text-xs font-mono text-teal-400 mt-1">
                  {currentProject.category}
                </p>
              </div>

              {/* Link do GitHuba */}
              <a 
                href="https://github.com/pestrowicz-szymon" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all w-fit"
                aria-label="View Source Code"
              >
                <svg className="w-5 h-5 fill-current">
                  <use href="/icons.svg#github-icon" />
                </svg>
              </a>
            </div>

            {/* Opis projektu (Lista punktowana) */}
            <ul className="flex flex-col gap-2.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentProject.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Prostokąciki ze skillami (Tagi/Pills) */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/60">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Technologies & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-teal-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Wskaźniki pozycji (Kropki na dole) */}
        <div className="flex items-center justify-center gap-2 w-full pt-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
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