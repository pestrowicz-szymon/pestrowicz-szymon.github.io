// src/components/sections/ExperienceSection.tsx

export default function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="max-w-5xl mx-auto md:snap-start md:snap-always min-h-full shrink-0 w-full flex flex-col justify-center items-start px-4 sm:px-6 py-12"
    >
      <div className="w-full flex flex-col gap-6">
        
        <div className="flex flex-col gap-1">
          <span className="text-teal-400 font-mono text-sm">02. Experience</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="flex flex-col gap-4 w-full">
          
          {/* 1. Junior Power Apps / Backend Developer */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Junior Power Apps / Backend Developer
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  B/S/H/ (BSH Home Appliances Group)
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  B/S/H/
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Dec 2025 – Apr 2026
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Engineered and deployed a multi-plant crisis contact application used across <strong>5 manufacturing plants</strong> in Poland, tracking employee responses and enforcing strict labor law compliance for hundreds of shift coordinators.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Designed global non-production purchasing tracking software (<strong>"iProject"</strong>) utilized by <strong>120+ international stakeholders</strong>, implementing automated lifecycle stage notifications and savings tracking.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Integrated custom backend services with external enterprise systems via REST APIs, handling complex JSON parsing, data validation, and asynchronous logic.
                </span>
              </li>
            </ul>
          </div>

          {/* 2. Junior Digital Transformation Specialist */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Junior Digital Transformation Specialist
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  B/S/H/ (BSH Home Appliances Group)
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  B/S/H/
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Dec 2024 – Dec 2025
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Built an automated industrial downtime monitoring system linking high-frequency PLC machine events in SQL with manual operator logs, enabling bottleneck identification and yield analysis.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Developed a SQL data-matching pipeline for imported compressor serial numbers to satisfy customs duty exemption compliance rules.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Developed automation scripts and backend integration utilities to refactor legacy data pipelines.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Participated in technical recruitment evaluations for new engineering student candidates.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Digital Process Transformation Intern */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Digital Process Transformation Intern
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  B/S/H/ (BSH Home Appliances Group)
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  B/S/H/
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Jul 2023 – Dec 2024
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Optimized complex SQL queries and database schemas to increase internal web service data throughput.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Conducted technical workshops for <strong>over 140 enterprise employees</strong> on data analysis and automation.
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Mathematics & Computer Science Tutor */}
          <div className="p-4 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2 border-b border-slate-800/60 pb-3">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  Mathematics & Computer Science Tutor
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Continuum Korepetycje
                </p>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Continuum Korepetycje
                </span>
                <span className="text-xs font-mono text-slate-400 mt-1">
                  Sep 2022 – Jan 2025
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                <span>
                  Taught algorithms, programming fundamentals, and advanced mathematics to <strong>15+ students</strong>.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}