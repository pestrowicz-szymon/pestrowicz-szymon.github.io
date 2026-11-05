export default function HeroSection() {
  const coreStack = [
    'React', 'TypeScript', 'Tailwind CSS v4', 'Python', 
    'Java', 'Astro', 'Bun', 'Machine Learning (XAI)'
  ];

  return (
    <section 
      id="about" 
      className="max-w-5xl mx-auto snap-start snap-always h-full w-full flex flex-col justify-center items-start px-6 py-12"
    >
      <div className="flex flex-col gap-6 max-w-3xl">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono border border-teal-500/20 w-fit">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Software Engineer & MSc Student @ PWr
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Hi, I'm <span className="text-teal-400">Szymon Pestrowicz</span>.
        </h1>

        {/* Short Bio */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          I build high-performance web applications and design analytical, algorithmic solutions for engineering challenges. My current research focuses on Machine Learning (<strong className="text-white">Explainable AI / SHAP</strong>) and Quantum Computing, paired with a modern web stack (<strong className="text-white">React, Astro, Bun</strong>).
        </p>

        {/* Core Stack Pills */}
        <div className="flex flex-col gap-2.5 pt-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Core Tech & Focus Areas
          </span>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:border-teal-500/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call-to-Actions & Socials */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#experience" 
            className="px-6 py-3 rounded-lg border border-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-colors"
          >
            Experience & R&D
          </a>

          {/* Social Links (używające Twojego sprite'a icons.svg) */}
          <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0">
            <a 
              href="https://github.com/pestrowicz-szymon" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#linkedin-icon" />
              </svg>
            </a>
            <a 
              href="mailto:contact@pestrowicz.pl" 
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-all"
              aria-label="Send Email"
            >
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#email-icon" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}