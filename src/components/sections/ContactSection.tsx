// src/components/sections/ContactSection.tsx
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'pestrowicz.szymon@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section 
      id="contact" 
      className="max-w-5xl mx-auto md:snap-start md:snap-always min-h-full shrink-0 w-full flex flex-col justify-center items-start px-4 sm:px-6 py-12"
    >
      <div className="w-full flex flex-col gap-6">
        
        {/* Wyśrodkowany Nagłówek Sekcji */}
        <div className="flex flex-col items-center gap-1 text-center w-full border-b border-slate-800/80 pb-4">
          <span className="text-teal-400 font-mono text-sm">04. What's Next?</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
        </div>

        {/* Główna Karta Kontaktowa */}
        <div className="p-6 sm:p-10 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col items-center text-center gap-6 w-full">
          
          {/* Status availability badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono border border-teal-500/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Open for both Engineering and Intern Roles as well as Research Projects
          </div>

          {/* Krótka zachęta do kontaktu */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl text-justify">
            Whether you have a question about my research in Explainable AI, want to discuss software development opportunities, or just want to say hi — my inbox is always open!
          </p>

          {/* Główny przycisk email z obsługą kopiowania */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            
            {/* Przycisk wysłania maila */}
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Message
            </a>

            {/* Przycisk kopiowania adresu */}
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs hover:border-teal-500/40 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{email}</span>
              {copied ? (
                <span className="text-teal-400 font-bold ml-1">Copied!</span>
              ) : (
                <svg className="w-4 h-4 text-slate-400 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Kafelki Social Media & Lokalizacja */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-slate-800/60 mt-2">
            
            {/* GitHub Card */}
            <a
              href="https://github.com/pestrowicz-szymon"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors">
                  <use href="/icons.svg#github-icon" />
                </svg>
                <div className="text-left">
                  <span className="text-xs font-semibold text-white block">GitHub</span>
                  <span className="text-[10px] font-mono text-slate-400">@pestrowicz-szymon</span>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-teal-400 text-xs transition-colors">→</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 hover:bg-slate-800 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors">
                  <use href="/icons.svg#linkedin-icon" />
                </svg>
                <div className="text-left">
                  <span className="text-xs font-semibold text-white block">LinkedIn</span>
                  <span className="text-[10px] font-mono text-slate-400">Connect Profile</span>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-teal-400 text-xs transition-colors">→</span>
            </a>

            {/* Location Card */}
            <div className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
              <span className="text-lg">📍</span>
              <div className="text-left">
                <span className="text-xs font-semibold text-white block">Location</span>
                <span className="text-[10px] font-mono text-slate-400">Wrocław, Poland (CET)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}