import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is the core desktop app really completely free?",
    answer: "Yes. The core application (local PDF reader, deterministic 8-tier queue, on-device ONNX vector search, FSRS-4 flashcard reviews, synchronous comprehension quizzes, and Socratic concept rescue) is 100% free with no trial limits, no credit card required, and no hidden feature lockouts."
  },
  {
    question: "What is the difference between the Annual Supporter and Founder's Lifetime Pass?",
    answer: "Both tiers directly support independent development and unlock all advanced extensions (Deep Structured PDF, Edge-TTS audio podcasts, YouTube ingestion). The Annual Supporter pass (₹199/yr) grants 12 months of updates, while the Founder's Lifetime Pass (₹499 one-time) guarantees lifetime access to all future extensions and tools with zero recurring subscriptions."
  },
  {
    question: "How does Pro Pass Activation work?",
    answer: "Your pass is tied directly to your registered Clerk account email. Simply sign in to your StudyLoop desktop app using your Clerk credentials, and all Pro extensions and founder privileges are activated instantly. No license keys or manual token copying required."
  },
  {
    question: "What are the requirements for Audio Overview?",
    answer: "The conversational podcast briefing extension uses Microsoft Edge-TTS neural voice synthesis. It runs locally and requires Python 3.10 or higher installed on your Windows machine."
  },
  {
    question: "Which LLM providers can I use with BYOK?",
    answer: "Any provider of your choice: Google Gemini (including free tier with 15 RPM), OpenAI (GPT-4o / GPT-4o-mini), Groq (Llama 3.3 70B), DeepSeek, Anthropic Claude, or 100% offline models via local Ollama."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-canvas-dark relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Clarity & Transparency
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Everything you need to know about architecture, licensing, and privacy guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#111827] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? 'rotate-180 bg-slate-900 text-white dark:bg-white dark:text-slate-950' : 'bg-slate-100 dark:bg-white/10 text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
