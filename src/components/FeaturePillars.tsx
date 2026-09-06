import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Award, 
  BrainCircuit, 
  SplitSquareVertical, 
  Check, 
  Copy, 
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  Clock,
  Cpu,
  FileText,
  Compass,
  Unlock,
  Zap
} from 'lucide-react';

interface FeaturePillarsProps {
  onOpenSocraticDemo: () => void;
}

export const FeaturePillars: React.FC<FeaturePillarsProps> = ({ onOpenSocraticDemo }) => {
  const [activeExaminerTab, setActiveExaminerTab] = useState<'question' | 'grading'>('grading');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = () => {
    const prompt = `[StudyLoop Socratic Rescue Prompt]
Context: Operating Systems Three Easy Pieces (§14.3 Multi-Level Paging)
Misconception: User confused page table directory entry invalidation with physical page frame deallocation.
Goal: Act as a rigorous tutor. Do not give the direct answer. Ask 2 targeted diagnostic questions to help me understand how page table hierarchies handle sparsely populated virtual address spaces.`;
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <section id="how-it-works" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-canvas-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Rigorous Cognitive Architecture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Engineered for Deep Retention, Not Passive Skimming
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Four foundational pillars differentiate StudyLoop from superficial flashcard apps and generic AI chatbot wrappers.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Pillar 1: Socratic Concept Rescue & Dual Tracks */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase text-rose-600 dark:text-rose-400 tracking-wider">Pillar 01</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Socratic Concept Rescue & Smooth Unblocking
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  When a quiz reveals a gap in understanding, StudyLoop guides you to the correct intuition before you move forward. Choose between standard 2-step review or instant tutor mode, with zero risk of getting locked out.
                </p>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span><strong>Dual Learning Tracks:</strong> Standard Track (Quiz Gap → Targeted Refresh → AI Tutor) or Instant Tutor for immediate conceptual help.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span><strong>Flexible Modes:</strong> Interactive in-app Socratic dialogue or 1-click structured prompt export for ChatGPT / Claude.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span><strong>Graceful Unblocking:</strong> If a tough concept still needs time, StudyLoop schedules a follow-up and unlocks your queue so your momentum never stalls.</span>
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenSocraticDemo}
                    className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Launch Socratic Demo</span>
                  </button>
                  <button
                    onClick={handleCopyPrompt}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] text-slate-700 dark:text-slate-300 font-mono text-xs flex items-center gap-2 transition-colors"
                  >
                    {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPrompt ? 'Copied to Clipboard!' : 'Copy AI Tutor Prompt'}</span>
                  </button>
                </div>
              </div>

              {/* Socratic Terminal Mockup */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    SOCRATIC CONCEPT TUTOR
                  </span>
                  <span>Active Diagnostic</span>
                </div>
                <div className="space-y-2 leading-relaxed">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Tutor:</strong> In your previous response, you mentioned that memory caches copy all data on startup. What happens to frequently accessed ("hot") data during active execution?
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-white/10 text-emerald-400">
                    <strong>User:</strong> The cache keeps the most recently requested pages in fast memory, avoiding slow lookups to storage.
                  </div>
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Tutor:</strong> Exactly. Caching relies on locality of reference. Ready for your checkpoint quiz!
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Smart Review Scheduler</span>
                  <span className="text-emerald-400">Queue Unblocked</span>
                </div>
              </div>

            </div>
          </div>

          {/* Pillar 2: Milestone Aggregate Exams & Examiner Mode */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase text-sky-600 dark:text-sky-400 tracking-wider">Pillar 02</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Milestone Comprehensive Exams & Examiner Mode
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mastering individual lessons is not enough. Every 10th completed session automatically pools and reviews questions from your previous quizzes—guaranteeing long-term retention with zero extra AI fees.
                </p>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                    <span><strong>10th Quiz Milestone Review:</strong> Re-tests verified questions from your last 10 quizzes to solidify retention across chapters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                    <span><strong>Examiner Mode:</strong> Practice written answers with instant, constructive AI grading against book-accurate criteria.</span>
                  </li>
                </ul>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setActiveExaminerTab('grading')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      activeExaminerTab === 'grading'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Examiner Written Rubric
                  </button>
                  <button
                    onClick={() => setActiveExaminerTab('question')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      activeExaminerTab === 'question'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    10th Quiz Milestone Pool
                  </button>
                </div>
              </div>

              {/* Interactive Rubric Card */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs space-y-3">
                {activeExaminerTab === 'grading' ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                      <span className="text-sky-400 font-semibold">EXAMINER WRITTEN RUBRIC</span>
                      <span className="text-emerald-400 font-bold">Score: 94/100 (Pass)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-white/10 text-slate-300">
                      <p className="text-slate-400 text-[11px] mb-1">Prompt: Explain why databases write changes to a recovery log before updating disk storage.</p>
                      <p className="text-emerald-300 text-xs italic mt-2">"Rubric Point #1 met: Student correctly explained how write-ahead logs ensure data can be restored after an unexpected power outage."</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1">
                      <span className="p-2 rounded bg-white/[0.03] border border-white/5">Strictness: High</span>
                      <span className="p-2 rounded bg-white/[0.03] border border-white/5">Source: Chapter 18</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                      <span className="text-sky-400 font-semibold">MILESTONE EXAM QUESTION POOL</span>
                      <span className="text-emerald-400 font-mono">100% Reliable · Zero Hallucinations</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      Question #7 (from Quiz #4): What is the main purpose of an operating system kernel when multiple programs request memory at the same time?
                    </p>
                    <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">
                      ✓ 10-Quiz Question Pool active: Reuses your past quizzes to test long-term memory.
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Pillar 3: FSRS-4 Spaced Repetition */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Pillar 03</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Modern Spaced Repetition (FSRS-4 Memory Engine)
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Powered by the modern Free Spaced Repetition Scheduler (FSRS-4), replacing outdated flashcard systems with scientifically calibrated memory retention curves.
                </p>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Auto-generates review flashcards directly from your passed quizzes.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Batches cards into focused review sessions to eliminate daily clutter.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Calculates the optimal day and time to review before you forget.</span>
                  </li>
                </ul>
              </div>

              {/* FSRS Retention Visualizer */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">MEMORY RETENTION MODEL</span>
                  <span>Target Retention: 90%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Estimated Recall Stability:</span>
                    <span className="text-emerald-300 font-bold">2.4 Days</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[90%]" />
                  </div>
                  <div className="flex justify-between items-center text-[11px] pt-1">
                    <span className="text-slate-400">Concept Difficulty:</span>
                    <span className="text-slate-300">Optimal (4.1 / 10)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] mt-2">
                    ✓ Next review scheduled in 48 hours. Zero manual planning needed.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Pillar 4: Fast Native Document Engine & Smart Boundaries */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center border border-slate-300 dark:border-slate-700">
                  <SplitSquareVertical className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase text-slate-600 dark:text-slate-400 tracking-wider">Pillar 04</span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Fast Native PDF Reader & Smart Chapter Boundaries
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fast, lightweight local PDF parsing with zero complex setup, paired with smart conceptual breaks so your study sessions never stop mid-sentence.
                </p>
                
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span><strong>Instant Native PDF Reader:</strong> Opens textbooks and notes instantly with zero server lag or heavy runtime dependencies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span><strong>Natural Concept Stopping Points:</strong> Detects complete thoughts across page boundaries so you always finish reading at logical milestones.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span><strong>Trust-Based Pacing:</strong> Study at your own rhythm. No stressful surveillance timers or rigid word quotas.</span>
                  </li>
                </ul>
              </div>

              {/* Chunker Visual Representation */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                  <span className="text-slate-200 font-semibold">SMART CHAPTER BOUNDARY DETECTION</span>
                  <span className="text-sky-400">Natural Milestone</span>
                </div>
                
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Concept Unit #14 (Pages 142-146)</div>
                    <div className="text-[11px] truncate mt-0.5">...How memory management units and caching hardware speed up data retrieval...</div>
                  </div>

                  <div className="p-2 rounded-md bg-sky-500/20 border border-sky-500/40 text-sky-300 text-[10px] text-center font-bold">
                    ✓ Natural Conceptual Boundary Detected — No Mid-Sentence Cutoffs
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Concept Unit #15 (Pages 147-151)</div>
                    <div className="text-[11px] truncate mt-0.5">...How hierarchical tables organize large address spaces efficiently...</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

