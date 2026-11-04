import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(nextLang);
  };

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

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#education" className="text-slate-400 hover:text-teal-400 transition-colors">
              {t('nav.education')}
            </a>
            <a href="#experience" className="text-slate-400 hover:text-teal-400 transition-colors">
              {t('nav.experience')}
            </a>
            <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors">
              {t('nav.projects')}
            </a>
          </nav>

          {/* Przycisk zmiany języka */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-slate-900 border border-slate-800 text-teal-400 hover:border-teal-500/50 transition-colors"
            aria-label="Change language"
          >
            {i18n.language === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
        
      </div>
    </header>
  );
}