import React, { useState } from 'react';
import { 
  Key, 
  ShieldCheck, 
  Database, 
  HardDrive, 
  Lock, 
  DollarSign, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Check, 
  TrendingDown,
  ServerOff
} from 'lucide-react';

export const ByokArchitecture: React.FC = () => {
  const [quizzesPerWeek, setQuizzesPerWeek] = useState<number>(15);

  // Cost estimates:
  // Typical quiz generation is ~3,000 input tokens + 800 output tokens = ~3,800 tokens.
  // In GPT-4o-mini: $0.15 / 1M input, $0.60 / 1M output -> ~$0.00093 per quiz.
  // 15 quizzes/week * 52 weeks = 780 quizzes = ~$0.73/year!
  // Gemini 1.5 Flash: Free tier ($0/year)
  // Ollama: $0/year (local hardware)
  // ChatGPT Plus / Claude Pro: $20/month = $240/year
  const annualQuizzes = quizzesPerWeek * 52;
  const annualByokCost = (annualQuizzes * 0.00095).toFixed(2);
  const annualChatGptCost = 240;
  const savings = (annualChatGptCost - parseFloat(annualByokCost)).toFixed(2);

  return (
    <section id="byok-privacy" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-canvas-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Zero Cloud Markups · 100% Data Sovereignty
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Bring Your Own Key (BYOK) & Local-First Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Your textbooks, notes, and study queue never touch our servers. Connect directly to your AI provider or run completely offline with local Ollama.
          </p>
        </div>

        {/* Local Data Pipeline Diagram Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs mb-12">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <HardDrive className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                Local-First Isolation Architecture
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              On-Device Sovereign
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Box 1: Your Local Machine */}
            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                  Your Local Computer
                </span>
                <span className="text-[11px] font-mono text-slate-400">Windows Keyring</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Textbooks & PDFs</span>
                  <span className="text-slate-500">Local Disk</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Embeddings Engine</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">On-Device ONNX</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">Progress & Queue</span>
                  <span className="text-slate-500">Local SQLite</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-slate-700 dark:text-slate-300">API Credentials</span>
                  <span className="text-emerald-700 dark:text-emerald-400">OS Keyring (AES-256)</span>
                </div>
              </div>
            </div>

            {/* Box 2: Direct Provider Connection */}
            <div className="p-5 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-sky-700 dark:text-sky-400">
                  AI Endpoints (Direct)
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Direct HTTPS</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-emerald-800 dark:text-emerald-300">
                  <span>Google Gemini 1.5 Flash</span>
                  <span className="font-bold">$0.00 (Free Tier 15 RPM)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>Groq (Llama-3.3 70B)</span>
                  <span>Fractions of a cent</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>OpenAI GPT-4o-mini</span>
                  <span>~$0.0009 / quiz</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span>Ollama (Local LLM)</span>
                  <span className="text-sky-700 dark:text-sky-400 font-semibold">100% Offline ($0)</span>
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-white/10 text-xs">
            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Windows Keyring Security</strong>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Keys stored in your operating system's native secure credential manager.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <TrendingDown className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Zero Token Surcharge</strong>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">We never sit between your API calls or add markups on inference.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <ServerOff className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block">Offline RAG Search</strong>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Chunk searching, reading, and queue scheduling run completely offline.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Cost Comparison Calculator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400">
                Cost Comparison Simulator
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-1">
                StudyLoop BYOK vs. $20/Month AI Subscriptions
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500">Quizzes / Week:</span>
              <span className="text-base font-mono font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                {quizzesPerWeek}
              </span>
            </div>
          </div>

          <div className="py-6 space-y-3">
            <label className="text-xs font-mono text-slate-500 flex justify-between">
              <span>Adjust Weekly Study Intensity:</span>
              <span>{quizzesPerWeek} sessions/week ({annualQuizzes} quizzes/year)</span>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={quizzesPerWeek}
              onChange={(e) => setQuizzesPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-900 dark:accent-white"
            />
          </div>

          {/* Pricing Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Generic SaaS Wrapper */}
            <div className="p-5 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10 space-y-2.5 shadow-xs">
              <span className="text-[11px] font-mono text-slate-400 uppercase">ChatGPT Plus / Claude Pro</span>
              <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                $240.00<span className="text-xs font-normal text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-slate-500">
                $20/mo recurring subscription toll whether you study 2 hours or 20 hours.
              </p>
            </div>

            {/* StudyLoop with OpenAI / Groq API */}
            <div className="p-5 rounded-xl bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/30 space-y-2.5 shadow-xs">
              <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400 uppercase font-bold">StudyLoop + Direct API</span>
              <div className="text-2xl font-bold text-sky-900 dark:text-sky-300 font-mono">
                ${annualByokCost}<span className="text-xs font-normal text-slate-400"> / year</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Pay purely for tokens consumed via direct API key at wholesale rates.
              </p>
            </div>

            {/* StudyLoop with Gemini Free / Ollama */}
            <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2.5 shadow-xs">
              <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase font-bold">Gemini Free / Local Ollama</span>
              <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 font-mono">
                $0.00<span className="text-xs font-normal text-slate-400"> / forever</span>
              </div>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Use Google Gemini's 15 RPM free tier or 100% offline local models.
              </p>
            </div>

          </div>

          <div className="mt-5 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600 dark:text-slate-300 font-medium">
              💡 Estimated annual savings with StudyLoop BYOK:
            </span>
            <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 text-sm">
              Save ${savings} every single year
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
