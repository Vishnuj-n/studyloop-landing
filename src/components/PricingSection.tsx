import React from 'react';
import { 
  Check, 
  X, 
  Download, 
  Sparkles, 
  Zap, 
  Heart 
} from 'lucide-react';
interface PricingSectionProps {
  onOpenDownload: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownload }) => {
  const comparisonRows = [
    { feature: 'Smart 8-Tier Daily Study Queue', free: true, annual: true, pro: true },
    { feature: 'Fast Native PDF Reader (Runs locally, zero setup)', free: true, annual: true, pro: true },
    { feature: 'Trust-Based Reading (User-paced, no surveillance timers)', free: true, annual: true, pro: true },
    { feature: 'Smart Chapter Boundaries (No mid-sentence cutoffs)', free: true, annual: true, pro: true },
    { feature: 'Active Comprehension Checkpoint Quizzes', free: true, annual: true, pro: true },
    { feature: 'Modern Spaced Repetition (FSRS-4 Memory Engine)', free: true, annual: true, pro: true },
    { feature: 'Socratic Concept Rescue & AI Tutor (In-App + Prompt Export)', free: true, annual: true, pro: true },
    { feature: 'Smooth Queue Scheduling (No infinite lockouts)', free: true, annual: true, pro: true },
    { feature: 'Milestone Comprehensive Exams (10-Quiz Question Pool, 0 Extra AI Cost)', free: true, annual: true, pro: true },
    { feature: 'Examiner Written Assessment & Instant AI Rubrics', free: true, annual: true, pro: true },
    { feature: 'AI Text Simplifier (Converts dense text & jargon into clean notes)', free: true, annual: true, pro: true },
    { feature: 'Full BYOK Support (Gemini Free, Groq, Ollama, OpenAI)', free: true, annual: true, pro: true },
    { feature: 'YouTube Lecture Ingestion & Synchronized Video Queue', free: true, annual: true, pro: true },
    { feature: 'Deep Ingestion & PDF Extraction (2-Column Papers, Multi-Row Tables & Formulas)', free: false, annual: true, pro: true, highlight: true },
    { feature: 'On-Device Two-Host Conversational Audio Briefings / Podcasts', free: false, annual: true, pro: true, highlight: true },
    { feature: '12-Month Access to All Pro Extensions & Importers', free: false, annual: true, pro: true, highlight: true },
    { feature: 'Founder Badge & Lifetime Access to All Future Extensions Forever', free: false, annual: false, pro: true, highlight: true },
    { feature: 'Direct Indie Developer Support & Roadmap Priority', free: false, annual: true, pro: true, highlight: true },
    { feature: 'Instant Activation via Registered Clerk Account Email', free: false, annual: true, pro: true, highlight: true },
  ];

  return (
    <section id="pricing" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-canvas-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Honest, Transparent Pricing
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Support Independent Software. No Hostage Data.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The core desktop app is 100% free forever. Support the solo developer building sovereign study tools and unlock advanced AI extensions.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          
          {/* Card 1: Community Edition */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] flex flex-col justify-between shadow-xs">
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
                  <span className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">$0</span>
                  <span className="text-xs font-mono text-slate-500">/ forever</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  For students and independent learners who want 100% local, private study without cloud toll.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/10 mb-8 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>8-Tier Cognitive Study Queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Fast Native PDF Reader (Runs Locally)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Smart Chapter Boundaries (No Mid-Sentence Cuts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Socratic Concept Tutor & Instant Rescue</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Milestone Comprehensive Exams</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Modern Spaced Repetition (FSRS-4 Engine)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>AI Text Simplifier (Dense Text into Markdown)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>YouTube Lecture Ingestion & Queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Full BYOK Support (Gemini, Groq, Ollama)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDownload}
              className="w-full py-3 px-4 rounded-xl bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 text-slate-900 dark:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free (Windows)</span>
            </button>
          </div>

          {/* Card 2: Annual Supporter Pass (₹199/yr) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-sky-500/40 dark:border-sky-500/30 flex flex-col justify-between shadow-sm relative">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
              Developer Supporter
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Annual Supporter</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  1-Year Pass
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">₹199</span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">/ year (~$2.40 USD)</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                  Fuel indie development with an affordable yearly pass. Unlocks all Pro extensions for 12 months.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-white/10 mb-8 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Everything in Community Edition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Deep Ingestion & PDF Extraction (2-Column Papers & Tables)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Edge-TTS AI Audio Briefings / Podcasts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>YouTube Lecture Ingestion & Timestamp Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>12 Months of All Future Pro Extensions & Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Directly Back Independent Developer Tooling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Instant Clerk Account Email Activation</span>
                </div>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9GT8cK_zUWLPMR6YSMn4Cf3s8Re-2PBcikN06o3fn2cVYgA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-2 text-center shadow-sm"
            >
              <span>Get Annual Pass (₹199/yr) →</span>
            </a>
          </div>

          {/* Card 3: Founder's Lifetime Pass (₹499) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 text-white dark:bg-[#111827] border-2 border-emerald-500/60 relative flex flex-col justify-between shadow-xl ring-2 ring-emerald-500/20">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
              Best Value • Founder Early Access
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Founder's Lifetime Pass</span>
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white">₹499</span>
                  <span className="text-xs font-mono text-slate-400">/ lifetime</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400/90 mt-1">
                  Single payment • Free lifetime updates
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Become a founding backer. Lock in lifetime access to all current and future Pro extensions forever.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-8 text-xs text-slate-200">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Everything in Annual Supporter, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Lifetime Access to All Future Pro Importers & Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Never pay recurring subscription fees</span>
                </div>
                <div className="flex items-center gap-2 font-medium text-emerald-300">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-current shrink-0" />
                  <span>Direct Developer Support & Founder Recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Instant Clerk account email activation</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9GT8cK_zUWLPMR6YSMn4Cf3s8Re-2PBcikN06o3fn2cVYgA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-center"
              >
                <Zap className="w-4 h-4 text-slate-950 fill-current" />
                <span>★ Apply for Lifetime Early Access →</span>
              </a>

              <p className="text-[11px] font-mono text-center text-slate-400 pt-1">
                One-time charge • No recurring subscription
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
                <th className="pb-3 font-semibold text-center w-32">Community ($0)</th>
                <th className="pb-3 font-semibold text-center w-36 text-sky-600 dark:text-sky-400 font-semibold">Annual Supporter (₹199/yr)</th>
                <th className="pb-3 font-semibold text-center w-40 text-emerald-600 dark:text-emerald-400 font-bold">Founder's Lifetime (₹499)</th>
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
                  <td className="py-3.5 text-center">
                    {row.annual ? (
                      <Check className="w-4 h-4 text-sky-600 dark:text-sky-400 mx-auto" />
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

      </div>
    </section>
  );
};

