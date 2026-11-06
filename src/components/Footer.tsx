import { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'pestrowicz.szymon@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900/80 px-4 sm:px-6 py-3 sm:py-6 shrink-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
        
        <span className="text-[11px] sm:text-xs text-slate-400">
          © 2026 Szymon Pestrowicz
        </span>

        <div className="hidden sm:flex items-center gap-2.5 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800/80 hover:border-slate-700 transition-colors">
          <a
            href={`mailto:${email}`}
            className="hover:text-teal-400 transition-colors text-slate-300 font-medium"
          >
            {email}
          </a>

          <div className="h-3 w-[1px] bg-slate-800" />

          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <span className="text-teal-400 text-[11px] font-bold">Copied!</span>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="https://github.com/pestrowicz-szymon" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-teal-400 transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5">
              <use href="/icons.svg#github-icon" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/szymon-pestrowicz-507176277/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-teal-400 transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5">
              <use href="/icons.svg#linkedin-icon" />
            </svg>
          </a>
          <a 
            href={`mailto:${email}`}
            className="sm:hidden hover:text-teal-400 transition-colors p-1"
            aria-label="Send Email"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}