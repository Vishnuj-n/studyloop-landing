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
  ArrowRight,
  ExternalLink,
  MessageSquare,
  FileCode,
  Unlock
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
  const [activeMode, setActiveMode] = useState<'in-app' | 'export'>('in-app');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'tutor',
      text: "Socratic Rescue Triggered. You missed Question #2 on Virtual Memory Two-Level Paging twice. Let's diagnose the root misconception without giving away the answers before your re-quiz.",
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
  const [externalCompleted, setExternalCompleted] = useState(false);

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

  const exportPromptText = `[StudyLoop Socratic Rescue Prompt]
Context: Operating Systems Three Easy Pieces (§14.3 Multi-Level Paging)
Concept: Virtual memory two-level translation invalid entry overhead.
Detected Gap: Confusing PDE invalidation with PTE frame deallocation.
Goal: Act as a rigorous tutor. Do not give the direct answer. Ask 2 targeted diagnostic questions to help me understand how page table hierarchies handle sparsely populated virtual address spaces.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(exportPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCompleteExternalSession = () => {
    setExternalCompleted(true);
    setResolved(true);
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'tutor',
        text: "Socratic Rescue Triggered. You missed Question #2 on Virtual Memory Two-Level Paging twice. Let's diagnose the root misconception without giving away the answers before your re-quiz.",
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
    setExternalCompleted(false);
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
                  Socratic Rescue
                </span>
                <span className="text-xs font-mono text-slate-400">Classic Strike 2 / Fast Track</span>
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

        {/* Dual Mode Switcher Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveMode('in-app')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                activeMode === 'in-app'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>In-App Tutor</span>
            </button>
            <button
              onClick={() => setActiveMode('export')}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors ${
                activeMode === 'export'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>1-Click Prompt Export</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400">
            <Unlock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Graceful Unblocking Protected</span>
          </div>
        </div>

        {/* Mode 1: In-App Interactive Tutor */}
        {activeMode === 'in-app' ? (
          <>
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
                    <span>Misconception Cleared. Queue Resumed.</span>
                  </div>
                  <p className="text-[11px] font-sans text-emerald-200">
                    You resolved the underlying mental model error. StudyLoop has queued a fresh validation re-quiz. (If a post-rescue re-quiz ever fails, <code className="bg-emerald-950/60 px-1 rounded text-emerald-300 font-mono">external_help_required</code> unblocks the queue automatically).
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
          </>
        ) : (
          /* Mode 2: 1-Click Prompt Export */
          <div className="p-6 space-y-5 overflow-y-auto font-mono text-xs flex-1">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">Structured Socratic Prompt for Claude 3.7 / ChatGPT</span>
                <span className="text-[10px] text-slate-400">Context + Error Diagnostics</span>
              </div>
              <p className="text-slate-400 font-sans text-xs">
                Prefer debugging in Claude 3.7 or ChatGPT? Copy this diagnostic context prompt, run a tutoring session with your external LLM, and click <strong>"I've Completed the Session"</strong> below to unblock your queue.
              </p>
            </div>

            {/* Prompt Code Block */}
            <div className="relative p-4 rounded-2xl bg-slate-950 border border-white/10 text-slate-300 font-mono text-xs leading-relaxed">
              <pre className="whitespace-pre-wrap select-all text-[11px] text-slate-200">
                {exportPromptText}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleCopyPrompt}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-white/10 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Prompt to Clipboard!' : 'Copy Prompt for External LLM'}</span>
              </button>

              <button
                onClick={handleCompleteExternalSession}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>I've Completed the Session</span>
              </button>
            </div>

            {externalCompleted && (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>External Socratic Session Verified!</span>
                </div>
                <p className="text-[11px] font-sans text-emerald-200">
                  Your queue has resumed and scheduled a fresh validation re-quiz.
                </p>
              </div>
            )}

            {/* Graceful unblocking info box */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] font-sans text-slate-400 flex items-start gap-2.5">
              <Unlock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200">Graceful Unblocking Architecture:</strong> If you take the post-rescue re-quiz and fail again, StudyLoop will not trap you in an infinite loop. It flags <code className="text-indigo-300 font-mono">external_help_required</code> and unblocks the queue.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

