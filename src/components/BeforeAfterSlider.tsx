import React, { useState, useRef, useCallback } from 'react';
import { 
  SlidersHorizontal, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  Layers, 
  BrainCircuit, 
  ShieldCheck,
  FolderOpen,
  Sparkles,
  Zap,
  ArrowLeftRight
} from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {
      // Ignore if pointer capture already released
    }
  };

  const setPreset = (pos: number) => {
    setSliderPosition(pos);
  };

  return (
    <section id="visual-evidence" className="py-20 sm:py-24 bg-white dark:bg-[#0B0F17] border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Visual Evidence & Complexity Shift
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Drag to See the Cognitive Transformation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
            Slide left and right or tap a preset to compare chaotic open-loop studying with StudyLoop's automated pipeline.
          </p>

          {/* Quick Preset Selector Buttons for Instant Butter-Smooth Switching */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-xs font-mono">
            <button
              onClick={() => setPreset(10)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                sliderPosition <= 20
                  ? 'bg-rose-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Show "Before" (Chaos)
            </button>
            <button
              onClick={() => setPreset(50)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                sliderPosition > 20 && sliderPosition < 80
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              50/50 Split View
            </button>
            <button
              onClick={() => setPreset(90)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                sliderPosition >= 80
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Show "After" (StudyLoop)
            </button>
          </div>
        </div>

        {/* The Interactive Before/After Visual Sandbox with Smooth Pointer Capture */}
        <div 
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative select-none min-h-[500px] sm:min-h-[460px] rounded-2xl border border-slate-300 dark:border-white/15 overflow-hidden shadow-2xl bg-slate-900 cursor-ew-resize touch-none transition-shadow ${
            isDragging ? 'ring-2 ring-emerald-500/40 shadow-emerald-950/40' : ''
          }`}
          style={{ willChange: 'transform' }}
        >
          {/* ========================================================================= */}
          {/* AFTER STATE (Full background layer - Revealed on the Right) */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1410] via-[#0e1913] to-[#122319] p-6 sm:p-8 flex flex-col justify-between text-slate-100 font-sans">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  After: The StudyLoop Closed Pipeline
                </span>
              </div>
              <span className="text-[11px] font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                100% On-Device · Zero Friction
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
              <div className="p-4 rounded-xl bg-[#14231b]/90 border border-emerald-500/30 space-y-2 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <FolderOpen className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">1. Single Dropzone</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Drop any PDF or YouTube lecture. StudyLoop splits chapters cleanly at natural paragraph boundaries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14231b]/90 border border-emerald-500/30 space-y-2 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">2. Daily 15-Min Queue</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero decision fatigue. Your 8-tier cognitive queue gives you exactly 1 focused session per day.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14231b]/90 border border-emerald-500/30 space-y-2 backdrop-blur-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">3. Socratic Encoding</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Checkpoint quiz catches gaps instantly. Socratic AI guides you to the insight so memory stays locked.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-emerald-500/20 text-xs font-mono text-emerald-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                94.8% Measured Recall Retention (FSRS-4)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                No subscriptions • Local SQLite vector storage
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* BEFORE STATE (Clipped layer - On the Left side) */}
          {/* ========================================================================= */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#1a0f12] via-[#241317] to-[#2d181e] p-6 sm:p-8 flex flex-col justify-between text-slate-100 font-sans overflow-hidden"
            style={{ 
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              transition: isDragging ? 'none' : 'clip-path 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4 min-w-[320px]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold">
                  Before: The Fragmented Chaos
                </span>
              </div>
              <span className="text-[11px] font-mono bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                Cognitive Overload · 18 Tabs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto min-w-[320px]">
              <div className="p-4 rounded-xl bg-[#2e191f]/90 border border-rose-500/30 space-y-2 opacity-95">
                <div className="flex items-center gap-2 text-rose-400">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">1. Scattered PDFs & Tabs</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  14 open browser tabs, lost bookmarks, disjointed video timestamps, and highlighting that leads nowhere.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2e191f]/90 border border-rose-500/30 space-y-2 opacity-95">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">2. Manual Notion Hassle</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Spending 45 minutes formatting databases instead of actually encoding technical knowledge in your brain.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#2e191f]/90 border border-rose-500/30 space-y-2 opacity-95">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase">3. The 3-Week Blackout</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Felt like you understood it in March. Blank out completely in the technical interview in April.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-rose-500/20 text-xs font-mono text-rose-300 min-w-[320px]">
              <span>✕ 80% Forgetting Curve Decay</span>
              <span>✕ $20/mo SaaS Toll for Generic Chatbots</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SLIDER DIVIDER LINE & HANDLE (Hardware-accelerated) */}
          {/* ========================================================================= */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)] flex items-center justify-center pointer-events-none z-20"
            style={{ 
              left: `${sliderPosition}%`,
              transition: isDragging ? 'none' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="w-9 h-9 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center justify-center shadow-2xl border-2 border-slate-900 pointer-events-none transform -translate-x-1/2">
              <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom helper pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-slate-300 pointer-events-none z-30 shadow-lg">
            ← Drag anywhere or tap presets →
          </div>
        </div>

      </div>
    </section>
  );
};
