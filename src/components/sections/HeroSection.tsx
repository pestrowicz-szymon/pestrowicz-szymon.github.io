// src/components/sections/HeroSection.tsx

export default function HeroSection() {
  const coreStack = [
    'Java', 
    'Python', 
    'SQL', 
    'REST APIs', 
    'Kotlin', 
    'TypeScript', 
    'C++', 
    'Power Platform',
    'Machine Learning (XAI)'
  ];

  return (
    <section 
      id="about" 
      className="max-w-5xl mx-auto md:snap-start md:snap-always min-h-full shrink-0 w-full flex flex-col justify-center items-start px-4 sm:px-6 py-12"
    >
      <div className="w-full flex flex-col gap-6">
        
        {/* Nagłówek Sekcji w stylu pozostałych podstron */}
        <div className="flex flex-col gap-1">
          <span className="text-teal-400 font-mono text-sm">00. About Me</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Engineering Profile</h2>
        </div>

        {/* Główny kontener-prostokąt o pełnej szerokości max-w-5xl */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-6 w-full">
          
          {/* Badge i Tytuł */}
          <div className="flex flex-col gap-3 border-b border-slate-800/60 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono border border-teal-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Software Engineer & M.Sc. Student @ PWr
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-teal-400">Szymon Pestrowicz</span>.
            </h1>
          </div>

          {/* Opis z CV */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Software Engineer with nearly <strong className="text-white">3 years of commercial enterprise experience</strong> in backend development, API integration, database optimization, and process automation. Currently pursuing an M.Sc. in Applied Computer Science focusing on <strong className="text-white">Machine Learning (Explainable AI / SHAP)</strong> alongside research in <strong className="text-white">Quantum Technologies</strong>.
          </p>

          {/* Tagi technologiczne w kafelkach */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-800/60">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Core Tech & Focus Areas
            </span>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/50 text-slate-300 text-xs font-mono hover:border-teal-500/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Przyciski Akcji */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#experience" 
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-colors"
            >
              Work Experience
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}