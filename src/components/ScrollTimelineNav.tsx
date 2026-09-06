import React, { useEffect, useState } from 'react';
import { Sparkles, Shield, Cpu, Zap, Heart } from 'lucide-react';

interface Stage {
  id: string;
  num: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: Stage[] = [
  { id: 'problem-agitation', num: '01', label: 'The Trap', shortLabel: 'The Trap', icon: Zap },
  { id: 'closed-loop-engine', num: '02', label: 'The Mechanism', shortLabel: 'Mechanism', icon: Cpu },
  { id: 'visual-evidence', num: '03', label: 'Live Proof', shortLabel: 'Proof', icon: Sparkles },
  { id: 'byok-privacy', num: '04', label: 'Sovereignty', shortLabel: 'Sovereignty', icon: Shield },
  { id: 'pricing', num: '05', label: 'Zero-Risk Offer', shortLabel: 'Offer', icon: Heart },
];

export const ScrollTimelineNav: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('problem-agitation');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Detect active stage based on viewport position
      const scrollPos = window.scrollY + 240;
      for (let i = STAGES.length - 1; i >= 0; i--) {
        const el = document.getElementById(STAGES[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStageId(STAGES[i].id);
          return;
        }
      }
      setActiveStageId(STAGES[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Topmost Continuous Glowing Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-sky-500 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Dynamic Narrative Timeline Bar inside Header Navigation */}
      <nav aria-label="Narrative Progress" className="hidden lg:flex items-center gap-1 xl:gap-2">
        {STAGES.map((stage) => {
          const isActive = activeStageId === stage.id;

          return (
            <button
              key={stage.id}
              onClick={() => scrollToSection(stage.id)}
              className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold shadow-xs scale-[1.02]'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span
                className={`text-[10px] px-1 py-0.2 rounded font-mono ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-black'
                    : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                }`}
              >
                {stage.num}
              </span>
              <span className="text-[11px] font-sans tracking-tight">
                {stage.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
