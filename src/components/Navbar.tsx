export default function Navbar() {
  const navItems = [
    { label: 'O mnie', href: '#about' },
    { label: 'Edukacja', href: '#education' },
    { label: 'Doświadczenie', href: '#experience' },
    { label: 'Projekty', href: '#projects' },
  ];

  return (
    <header className="w-full flex-none z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo / Inicjały */}
        <a 
          href="#about" 
          className="text-lg font-bold text-white tracking-wider hover:text-teal-400 transition-colors font-mono"
        >
          SP<span className="text-teal-400">.</span>
        </a>

        {/* Linki Nawigacyjne */}
        <nav className="flex items-center gap-6 text-sm">
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
        
      </div>
    </header>
  );
}