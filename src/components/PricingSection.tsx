import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  RotateCcw,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Laptop
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  onOpenDownload: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownload }) => {
  const [showLicenseSimulation, setShowLicenseSimulation] = useState(false);
  const [licenseActivated, setLicenseActivated] = useState(false);

  const triggerCelebration = () => {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0F172A', '#0EA5E9', '#10B981'],
    });
  };

  const handleSimulateActivation = () => {
    setShowLicenseSimulation(true);
    setTimeout(() => {
      setLicenseActivated(true);
      triggerCelebration();
    }, 1200);
  };

  const comparisonRows = [
    { feature: 'Deterministic 8-Tier Study Queue', free: true, pro: true },
    { feature: 'Local PDF & Markdown 2,500w Chunking', free: true, pro: true },
    { feature: 'On-Device ONNX Vector Search Engine', free: true, pro: true },
    { feature: 'Synchronous Comprehension Quizzes', free: true, pro: true },
    { feature: 'FSRS-4 Spaced Repetition Flashcards', free: true, pro: true },
    { feature: '2-Strike Socratic Concept Rescue System', free: true, pro: true },
    { feature: 'Milestone Aggregate Exams (Every 10 Quizzes)', free: true, pro: true },
    { feature: 'Examiner Written Assessment Rubric Mode', free: true, pro: true },
    { feature: 'BYOK (Gemini Free, OpenAI, Ollama, Groq)', free: true, pro: true },
    { feature: 'YouTube Lecture Ingestion & Video Queue', free: false, pro: true, highlight: true },
    { feature: 'Edge TTS Conversational Audio Briefings', free: false, pro: true, highlight: true },
    { feature: 'Reader AI Simplify Proof Clarifier', free: false, pro: true, highlight: true },
    { feature: '12-Month Access to Future Importers (Vaults)', free: false, pro: true, highlight: true },
    { feature: 'Desktop Loopback 1-Click License Activation', free: false, pro: true, highlight: true },
  ];

  return (
    <section id="pricing" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-canvas-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Honest, Transparent Pricing
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            No Monthly Subscriptions. No Hostage Data.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The core desktop app is 100% free forever. Support ongoing development with a single annual pass for power extensions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: Community Edition */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Community Edition
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                  Free Forever
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">$0</span>
                  <span className="text-sm font-mono text-slate-500">/ forever</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  For students and self-directed learners who want complete local control over their textbooks.
                </p>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-slate-200 dark:border-white/10 mb-8 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Deterministic 8-Tier Cognitive Study Queue</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Local PDF & Markdown 2,500w Chunk Reader</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>On-Device ONNX Vector Search & RAG</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Synchronous Comprehension Quizzes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>FSRS-4 Spaced Repetition Engine</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>2-Strike Socratic Concept Rescue</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Milestone Aggregate Exams & Examiner Mode</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Full BYOK support (Gemini Free, Groq, Ollama)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 text-slate-900 dark:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Desktop App (Windows)</span>
            </button>
          </div>

          {/* Card 2: 1-Year Pro Extensions Pass */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white dark:bg-[#111827] border-2 border-slate-900 dark:border-slate-700 relative flex flex-col justify-between shadow-lg">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-slate-800 dark:bg-slate-700 text-slate-200 border border-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider">
              Single Payment
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                  Pro Extensions Pass
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/10 text-slate-200">
                  No Auto-Renew
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white">$39</span>
                  <span className="text-sm font-mono text-slate-400">/ 12-month pass</span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  For serious learners who study from video lectures, audio briefings, and desire advanced tools.
                </p>
              </div>

              <div className="space-y-2.5 pt-5 border-t border-white/10 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Everything in Free Community Edition</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>YouTube Lecture Ingestion & Video Queue</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Edge TTS Conversational Audio Briefing Player</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reader AI "Simplify" Proof Clarifier</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All New Extensions & Importers for 12 Months</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Desktop Loopback License Activation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Perpetual Fallback: Keep everything you unlocked forever</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSimulateActivation}
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-500 fill-current" />
                <span>Get 1-Year Pro Pass ($39 Single Payment)</span>
              </button>

              <p className="text-[11px] text-center font-mono text-slate-400">
                Single upfront charge · No recurring credit card fees
              </p>
            </div>
          </div>

        </div>

        {/* Full Feature Comparison Table */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs overflow-x-auto">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">
            Detailed Capability Matrix
          </h3>

          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 font-mono">
                <th className="pb-3 font-semibold text-slate-700 dark:text-slate-300">Feature / Capability</th>
                <th className="pb-3 font-semibold text-center w-36">Community Edition ($0)</th>
                <th className="pb-3 font-semibold text-center w-44 text-slate-900 dark:text-white font-bold">Pro Pass ($39/yr)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-white/5">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? 'bg-slate-100/50 dark:bg-white/[0.02]' : ''}>
                  <td className={`py-3.5 pr-4 ${row.highlight ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                    {row.feature}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.free ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3.5 text-center font-bold">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Loopback License Activation Modal Simulation */}
        {showLicenseSimulation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900 border border-white/15 shadow-2xl text-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-slate-300" />
                  <span className="font-mono text-xs font-bold text-white">Desktop Loopback Activation</span>
                </div>
                <button onClick={() => setShowLicenseSimulation(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {!licenseActivated ? (
                <div className="text-center py-6 space-y-3 font-mono text-xs">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-slate-300">Communicating with local StudyLoop desktop agent...</p>
                  <p className="text-[11px] text-slate-500">POST http://127.0.0.1:49281/activate</p>
                </div>
              ) : (
                <div className="text-center py-4 space-y-3 font-mono text-xs animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white">Pro Pass Activated!</h4>
                  <p className="text-slate-400 text-xs font-sans">
                    License token securely stored in your local Windows Keyring. All Pro extensions are now unlocked in your desktop app.
                  </p>
                  <button
                    onClick={() => setShowLicenseSimulation(false)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs mt-2"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
