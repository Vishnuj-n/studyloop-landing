import React from 'react';
import { Sparkles, Quote, Terminal, ArrowRight } from 'lucide-react';

export const CinematicPauseSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#070a0e] text-white overflow-hidden border-y border-white/[0.06] select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Decorative tilted background geometric element (The "Slanty" Design) */}
      <div className="absolute -top-24 -right-20 w-96 h-96 border border-emerald-500/10 rounded-3xl rotate-12 pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 border border-sky-500/10 rounded-3xl -rotate-12 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top small icon pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono font-medium tracking-wide mb-8">
          <Quote className="w-3.5 h-3.5" />
          <span>The Core Realization</span>
        </div>

        {/* The Great Pause Statement */}
        <blockquote className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-balance max-w-4xl mx-auto mb-8">
          "You don't have a retention problem.{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
            You have a feedback loop problem.
          </span>"
        </blockquote>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans mb-10 text-pretty">
          When learning is passive, the human brain forgets by design. When every concept is verified with instant Socratic rescue, comprehension turns into permanent muscle memory.
        </p>

        {/* Slanted mini code card for visual tension */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300 shadow-2xl -rotate-1 hover:rotate-0 transition-transform">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>sqlite-vec + FSRS-4 + Local LLM = 100% Offline Cognitive Sovereignty</span>
        </div>

      </div>
    </section>
  );
};
