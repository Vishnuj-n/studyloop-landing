import React, { useEffect, useState } from 'react';
import { Database, ShieldCheck, Zap, Cpu, Activity, Lock } from 'lucide-react';

export const LiveTelemetryBadges: React.FC = () => {
  const [chunksProcessed, setChunksProcessed] = useState<number>(142080);
  const [activeRescues, setActiveRescues] = useState<number>(38);

  // Subtle simulated live ticker to give "alive" prototype physics
  useEffect(() => {
    const interval = setInterval(() => {
      setChunksProcessed((prev) => prev + Math.floor(Math.random() * 2));
      setActiveRescues((prev) => (Math.random() > 0.5 ? prev + 1 : Math.max(30, prev - 1)));
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'On-Device Storage',
      value: '100% Local SQLite',
      subtext: '0 bytes sent to external cloud',
      icon: Lock,
      color: 'text-emerald-500',
    },
    {
      label: 'Memory Retention',
      value: '94.8% Average',
      subtext: 'Powered by FSRS-4 decay algorithm',
      icon: Activity,
      color: 'text-sky-500',
    },
    {
      label: 'AI Cost Markup',
      value: '$0.00 / Zero Markup',
      subtext: 'Direct BYOK (Gemini, Groq, Ollama)',
      icon: Zap,
      color: 'text-amber-500',
    },
    {
      label: 'Chunks Encoded',
      value: chunksProcessed.toLocaleString(),
      subtext: 'Verified across local study sessions',
      icon: Database,
      color: 'text-emerald-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto my-10 text-left">
      {stats.map((stat, idx) => {
        const StatIcon = stat.icon;
        return (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-50/90 dark:bg-[#111827]/90 border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
              <StatIcon className={`w-4 h-4 ${stat.color} shrink-0`} />
            </div>

            <div>
              <div className="font-mono text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                {stat.subtext}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
