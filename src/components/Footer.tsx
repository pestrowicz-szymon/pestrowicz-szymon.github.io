function Footer() {
    const currentYear = new Date().getFullYear();


    return (
        <footer className="w-full flex-none flex py-8 bg-slate-950/80 text-slate-400 border-t border-slate-900 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-6xl mx-auto px-4 text-sm">
        
            <p>© {currentYear} Szymon Pestrowicz</p>

            {/* Ikonki / Linki społecznościowe */}
            <div className="flex items-center gap-5">
          
            {/* GitHub */}
            <a
                href="https://github.com/pestrowicz-szymon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-teal-400 transition-colors"
            >
                <svg className="w-5 h-5">
                    <use href="/icons.svg#github-icon" />
                </svg>
            </a>

            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-teal-400 transition-colors"
            >
                <svg className="w-5 h-5">
                    <use href="/icons.svg#linkedin-icon" />
                </svg>
            </a>

            {/* Email */}
            <a
                href="mailto:twoj-email@domain.com"
                aria-label="Email"
                className="text-whitehover:text-teal-400 transition-colors"
            >
                <svg className="w-5 h-5">
                    <use href="/icons.svg#mail-icon" />
                </svg>
            </a>

            </div>
      </div>
    </footer>
    )
}

export default Footer