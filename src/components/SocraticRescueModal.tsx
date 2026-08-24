import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Bot, 
  User, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SocraticRescueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'tutor' | 'user';
  text: string;
  isDiagnostic?: boolean;
}

export const SocraticRescueModal: React.FC<SocraticRescueModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'tutor',
      text: "Queue Lockout Active. You missed Question #2 on Virtual Memory Two-Level Paging twice. Let's resolve the root misunderstanding before letting you re-quiz.",
      isDiagnostic: true
    },
    {
      role: 'tutor',
      text: "Diagnostic Question 1: If a 32-bit virtual address is split into 10 bits for Directory, 10 bits for Page Table, and 12 bits for Offset — why does an empty address range consume 0 bytes of leaf page tables in physical RAM?",
      isDiagnostic: true
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [step, setStep] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userText }];

    if (step === 0) {
      newMessages.push({
        role: 'tutor',
        text: "Spot on! The directory entry valid-bit remains 0, so the underlying 4KB page table page is never instantiated in RAM.",
      });
      newMessages.push({
        role: 'tutor',
        text: "Diagnostic Question 2: What is the single performance trade-off of this tree structure compared to a single flat page table array during a TLB miss?",
        isDiagnostic: true
      });
      setStep(1);
    } else if (step === 1) {
      newMessages.push({
        role: 'tutor',
        text: "Exactly right: it requires two serialized memory accesses (one for PDE, one for PTE) instead of one.",
      });
      newMessages.push({
        role: 'tutor',
        text: "🎉 Socratic Diagnostic Passed! The cognitive roadblock is cleared. Your Strike count is reset and a fresh re-quiz is now unlocked in your queue.",
      });
      setResolved(true);
      setStep(2);
    }

    setMessages(newMessages);
  };

  const handleCopyPrompt = () => {
    const prompt = `[StudyLoop Socratic Rescue Prompt]
Context: Operating Systems Three Easy Pieces (§14.3 Multi-Level Paging)
Misconception: Virtual memory two-level translation invalid entry overhead.
Goal: Act as a rigorous tutor. Do not give the direct answer. Ask 2 targeted diagnostic questions to help me understand how page table hierarchies handle sparsely populated virtual address spaces.`;
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'tutor',
        text: "Queue Lockout Active. You missed Question #2 on Virtual Memory Two-Level Paging twice. Let's resolve the root misunderstanding before letting you re-quiz.",
        isDiagnostic: true
      },
      {
        role: 'tutor',
        text: "Diagnostic Question 1: If a 32-bit virtual address is split into 10 bits for Directory, 10 bits for Page Table, and 12 bits for Offset — why does an empty address range consume 0 bytes of leaf page tables in physical RAM?",
        isDiagnostic: true
      }
    ]);
    setStep(0);
    setResolved(false);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F172A] border border-white/15 shadow-2xl text-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1E293B] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase bg-rose-500/30 text-rose-300 px-2 py-0.5 rounded">
                  Strike 2 Queue Lockout
                </span>
                <span className="text-xs font-mono text-slate-400">Interactive Socratic Probe</span>
              </div>
              <h3 className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                Topic: Virtual Memory Two-Level Paging (§14.3)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3.5 font-mono text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'tutor' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-slate-100 text-slate-950 font-sans text-xs rounded-tr-sm font-medium'
                    : m.isDiagnostic
                    ? 'bg-rose-500/10 border border-rose-500/30 text-rose-200 rounded-tl-sm'
                    : 'bg-slate-800/90 border border-white/10 text-slate-200 rounded-tl-sm'
                }`}
              >
                {m.text}
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {resolved && (
            <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Concept Mastery Verified. Queue Unblocked.</span>
              </div>
              <p className="text-[11px] font-sans text-emerald-200">
                You resolved the underlying mental model error. StudyLoop has generated a fresh 3-question validation quiz into your queue.
              </p>
            </div>
          )}
        </div>

        {/* Quick Suggestion buttons for interactive demo */}
        {!resolved && (
          <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="text-slate-500">Quick Test Answers:</span>
            {step === 0 && (
              <button
                type="button"
                onClick={() => setInputVal("Because the PDE valid bit is 0, so the underlying page table page is never allocated in physical RAM.")}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors truncate max-w-xs"
              >
                "Because PDE valid bit is 0..."
              </button>
            )}
            {step === 1 && (
              <button
                type="button"
                onClick={() => setInputVal("Extra memory reference overhead during TLB miss page walks.")}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors truncate max-w-xs"
              >
                "Extra memory reference overhead..."
              </button>
            )}
          </div>
        )}

        {/* Footer Input or Actions */}
        <div className="p-4 bg-[#1E293B] border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {!resolved ? (
            <form onSubmit={handleSend} className="w-full flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type your reasoning to answer the tutor..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <span>Submit</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          ) : (
            <div className="w-full flex items-center justify-between gap-3">
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-mono text-slate-400 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                Close & Return to App
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
