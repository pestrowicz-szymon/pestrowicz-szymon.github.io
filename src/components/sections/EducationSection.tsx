// src/components/sections/EducationSection.tsx

export default function EducationSection() {
  const mscSkills = [
    'Machine Learning & Deep Learning',
    'Explainable AI (XAI / SHAP / LIME)',
    'Advanced Data Analytics & Feature Engineering',
    'Complex AI Systems Design',
  ];

  const bscSkills = [
    'Advanced data structures & graph algorithms',
    'Concurrent & distributed programming (Java)',
    'Computational complexity & algorithm optimization',
    'Relational and non-relational databases',
  ];

  const quantumSkills = [
    'Quantum Computing', 'Linear Algebra', 'QUBO Models',
    'Ising Spin', 'QAOA Algorithm', "Grover's Algorithm", 'Python',
  ];

  return (
    <section 
      id="education" 
      className="max-w-5xl mx-auto md:snap-start md:snap-always min-h-full shrink-0 w-full flex flex-col justify-center items-start px-4 sm:px-6 py-12"
    >
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-teal-400 font-mono text-sm">01. Education</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Education & Certifications</h2>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          
          {/* 1. M.Sc. */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  M.Sc. in Applied Computer Science
                </h3>
                <p className="text-xs font-mono text-teal-400 mt-0.5">
                  Master of Science • Applied Computer Science
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Wrocław University of Science and Technology
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Mar 2026 – Jul 2027
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-lg bg-teal-500/10 border border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider block">
                  Master's Thesis
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-100">
                  “Artificial Intelligence Methods in Used Product Valuation”
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-teal-300/80 bg-teal-500/20 px-2 py-0.5 rounded shrink-0 w-fit">
                XAI / SHAP / Hybrid ML
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Curriculum covers advanced machine learning techniques and Explainable AI (XAI). Designing custom predictive models and analyzing feature contributions to product valuation:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-mono mt-1">
                {mscSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. B.Sc. */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  B.Sc. in Algorithmic Computer Science
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Bachelor of Science • Algorithmic Computer Science
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Wrocław University of Science and Technology
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Oct 2021 – Jan 2025
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                  Bachelor's Thesis
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  “Determination of vehicle's engine power using acceleration measurements”
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded shrink-0 w-fit">
                Android / Kotlin / Bluetooth / Sensors
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Intensive studies focused on theoretical and practical foundations of algorithms, data structures, and low-level / object-oriented programming:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 font-mono mt-1">
                {bscSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. ARP Quantum Academy */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  ARP Quantum Academy
                </h3>
                <p className="text-xs font-mono text-teal-400 mt-0.5">
                  Certified Quantum Technologies Course
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Wrocław Univ. of Science and Technology / ARP
                </span>
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 mt-1 w-fit">
                  Expected Dec 2026
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Specialized program focused on linear algebra, combinatorial optimization, and quantum algorithm implementation in Python:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                {quantumSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}