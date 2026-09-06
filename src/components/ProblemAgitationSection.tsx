import React from 'react';
import { AlertTriangle, Highlighter, MessageSquareOff, Brain, ArrowDownRight, CheckCircle2, XCircle } from 'lucide-react';

export const ProblemAgitationSection: React.FC = () => {
  const traps = [
    {
      title: "The Highlighter Trap",
      badHabit: "Coloring paragraphs in 3 neon shades",
      consequence: "Zero cognitive struggle = Zero neural encoding. It creates the 'Illusion of Competence' while your brain stays passive.",
      icon: Highlighter,
      badge: "Passive Reading",
    },
    {
      title: "The AI Chatbot Trap",
      badHabit: "Asking ChatGPT to explain everything",
      consequence: "Reading AI-generated summaries gives instant dopamine, but your brain never forms the retrieval pathway. In an exam, the AI isn't there.",
      icon: MessageSquareOff,
      badge: "Borrowed Brain",
    },
    {
      title: "The Forgetting Curve Freefall",
      badHabit: "Binging 6 hours on Sunday, zero review on Wednesday",
      consequence: "Without predictive spaced recall, the human brain discards up to 75% of new technical information within 48 hours.",
      icon: AlertTriangle,
      badge: "Ebbinghaus Decay",
    },
  ];

  return (
    <section id="problem-agitation" className="py-20 sm:py-28 bg-slate-50 dark:bg-[#0d1219] border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[300px] bg-rose-500/5 dark:bg-rose-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-amber-500/5 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Act 1 Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Act 01: The Illusion of Learning
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            You don't have a bad memory.{' '}
            <br />
            <span className="text-rose-600 dark:text-rose-400">
              You were sold bad study habits.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Re-reading notes, highlighting PDFs, and skimming video transcripts feels productive. But cognitive science has proven that <strong>passive familiarity is not permanent recall</strong>.
          </p>
        </div>

        {/* 3 Traps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {traps.map((trap, idx) => {
            const TrapIcon = trap.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                      <TrapIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {trap.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {trap.title}
                  </h3>

                  <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-start gap-2 bg-rose-50 dark:bg-rose-950/20 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900/30">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-rose-900 dark:text-rose-200 block">The Habit:</span>
                        <span className="text-rose-700 dark:text-rose-300">{trap.badHabit}</span>
                      </div>
                    </div>

                    <p className="leading-relaxed text-slate-500 dark:text-slate-400 pt-1">
                      {trap.consequence}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-rose-600 dark:text-rose-400">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  <span>Result: 0% real long-term mastery</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Diagnostic Comparison Bar */}
        <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  The Cognitive Shift
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                From Open-Loop Hoping to Closed-Loop Mastery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                If studying doesn't force active retrieval with immediate corrective feedback, your brain marks the knowledge as garbage collection material. StudyLoop enforces a closed circuit.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-white/5 space-y-2">
                <span className="text-[11px] font-mono font-bold text-rose-500 uppercase block">
                  ✕ Typical Passive Study
                </span>
                <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    Read 50 pages without testing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    Feels easy while reading
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    Forget 80% after 2 weeks
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    Panic cramming before exams
                  </li>
                </ul>
              </div>

              {/* StudyLoop Closed Loop */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase block">
                  ✔ StudyLoop Closed Loop
                </span>
                <ul className="text-xs space-y-1.5 text-slate-800 dark:text-slate-200">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Bite-sized chapters with checkpoint quizzes
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Immediate Socratic rescue on mistakes
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Predictive spaced reviews before forgetting
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    100% calm, permanent recall
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
