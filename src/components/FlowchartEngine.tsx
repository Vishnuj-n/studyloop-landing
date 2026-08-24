import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  AlertTriangle, 
  ShieldAlert, 
  Layers, 
  Calendar,
  ArrowRight,
  ArrowDown,
  Sparkles,
  PlayCircle,
  MessageSquare,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlowchartEngineProps {
  onOpenSocraticDemo: () => void;
}

export const FlowchartEngine: React.FC<FlowchartEngineProps> = ({ onOpenSocraticDemo }) => {
  const [activeSimulation, setActiveSimulation] = useState<'pass' | 'strike1' | 'strike2'>('pass');

  const triggerPassConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0F172A', '#0EA5E9', '#10B981'],
    });
  };

  return (
    <section id="closed-loop-engine" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-canvas-dark relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-slate-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Deterministic Cognitive State Machine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            The Closed-Loop Learning Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            StudyLoop is a self-healing, deterministic feedback loop that guarantees concept mastery before allowing you to proceed.
          </p>
        </div>

        {/* Interactive Simulation Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <span className="text-xs font-mono text-slate-500 mr-2 uppercase tracking-wider">Test Engine Outcome:</span>
          
          <button
            onClick={() => {
              setActiveSimulation('pass');
              triggerPassConfetti();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeSimulation === 'pass'
                ? 'bg-emerald-600 text-white shadow-md border-emerald-500'
                : 'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Simulate Quiz PASS (85%+)</span>
          </button>

          <button
            onClick={() => setActiveSimulation('strike1')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeSimulation === 'strike1'
                ? 'bg-amber-600 text-white shadow-md border-amber-500'
                : 'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-500/40'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Simulate Quiz FAIL (Strike 1)</span>
          </button>

          <button
            onClick={() => setActiveSimulation('strike2')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
              activeSimulation === 'strike2'
                ? 'bg-rose-600 text-white shadow-md border-rose-500'
                : 'bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-rose-500/40'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Simulate Strike 2 (Socratic Rescue)</span>
          </button>
        </div>

        {/* Dynamic Diagram Flow */}
        <div className="space-y-5">
          
          {/* 1. Ingestion Pipeline */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] relative shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase">Phase 01</span>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">Ingestion & Chunking Pipeline</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Textbooks and videos are parsed into ~2,500-word study chunks with 200-word overlap.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                  Offline PDF
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                  ONNX Embeddings
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2. Queue-Driven Reading */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] relative shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-400 uppercase">Phase 02</span>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">Queue-Driven Reading</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Trust-based reading session without timers or eye tracking. When done, trigger validation.
                  </p>
                </div>
              </div>
              <div className="shrink-0 font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.02] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                Action: Complete Session
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3. Synchronous Validation Quiz */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border-2 border-slate-900 dark:border-white/20 relative shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shrink-0 shadow-sm">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-slate-200 uppercase">Phase 03 · Validation Gate</span>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">Synchronous Lockout Quiz</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Direct LLM quiz generation strictly bounded to the exact 2,500 words read.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/20 shrink-0">
                Evaluation Gateway
              </span>
            </div>
          </div>

          {/* Branching Grid based on Evaluation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* PASS BRANCH */}
            <div className={`p-6 rounded-2xl border transition-all ${
              activeSimulation === 'pass'
                ? 'bg-emerald-500/10 border-emerald-500/50 shadow-xl shadow-emerald-500/10'
                : 'bg-surface-1-light dark:bg-[#111827] border-slate-200 dark:border-white/[0.08] opacity-60'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">Branch A</span>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">Quiz Evaluation: PASS</h4>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/50 dark:bg-black/30 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono font-semibold text-emerald-700 dark:text-emerald-300 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>FSRS-4 Spaced Repetition Flashcards</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Concepts extracted and scheduled into batch review blocks using modern FSRS-4 cognitive decay algorithms.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/50 dark:bg-black/30 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono font-semibold text-sky-700 dark:text-sky-300 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>10th Quiz Milestone Aggregate Exam</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Every 10 completed quizzes automatically schedules a comprehensive synthesis exam across the entire topic.
                  </p>
                </div>
              </div>
            </div>

            {/* FAIL BRANCH */}
            <div className={`p-6 rounded-2xl border transition-all ${
              activeSimulation === 'strike1' || activeSimulation === 'strike2'
                ? 'bg-rose-500/10 border-rose-500/50 shadow-xl shadow-rose-500/10'
                : 'bg-surface-1-light dark:bg-[#111827] border-slate-200 dark:border-white/[0.08] opacity-60'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-600 dark:text-rose-400">Branch B</span>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">Quiz Evaluation: FAIL (Self-Healing)</h4>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {/* Strike 1 */}
                <div className={`p-3 rounded-xl border transition-all ${
                  activeSimulation === 'strike1'
                    ? 'bg-amber-500/20 border-amber-500/60 ring-1 ring-amber-400/40'
                    : 'bg-white/50 dark:bg-black/30 border-slate-200 dark:border-white/10'
                }`}>
                  <div className="flex items-center gap-2 font-mono font-semibold text-amber-600 dark:text-amber-300 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Strike 1: Targeted REREAD Task</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Queue immediately schedules a priority reread highlighting exactly what concepts caused comprehension failure.
                  </p>
                </div>

                {/* Strike 2 */}
                <div className={`p-3 rounded-xl border transition-all ${
                  activeSimulation === 'strike2'
                    ? 'bg-rose-500/20 border-rose-500/60 ring-1 ring-rose-400/40'
                    : 'bg-white/50 dark:bg-black/30 border-slate-200 dark:border-white/10'
                }`}>
                  <div className="flex items-center justify-between font-mono font-semibold text-rose-600 dark:text-rose-300 mb-1">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Strike 2: SOCRATIC CONCEPT RESCUE</span>
                    </div>
                    <span className="text-[10px] uppercase bg-rose-500/30 px-1.5 py-0.5 rounded text-rose-200">Queue Halts</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mb-2">
                    Progression is locked. An interactive Socratic tutor probes your misconceptions or exports a structured prompt for Claude/ChatGPT.
                  </p>
                  <button
                    onClick={onOpenSocraticDemo}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-mono text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open Socratic Rescue Live Simulation</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
