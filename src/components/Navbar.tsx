// src/components/Navbar.tsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 w-full flex-none z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900/50 px-4 sm:px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#about" 
          className="text-lg font-bold text-white tracking-wider font-mono"
          onClick={() => setIsOpen(false)}
        >
          SP<span className="text-teal-400">.</span>
        </a>

        {/* Nawigacja Desktopowa */}
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-teal-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Przycisk Hamburgera */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-lg text-slate-400 hover:text-teal-400 hover:bg-slate-900/60 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 fill-none stroke-current stroke-2 transition-transform duration-200" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Rozwijane Menu Mobilne z Animacją Rozwijania/Zwijania */}
      <div
        className={`sm:hidden grid transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-900/80' 
            : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 pb-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-teal-400 text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-slate-900/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}