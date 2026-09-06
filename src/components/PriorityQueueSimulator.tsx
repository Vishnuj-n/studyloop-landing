import React, { useState } from 'react';
import { 
  ListOrdered, 
  ArrowDownUp, 
  Layers, 
  Play, 
  Check, 
  Sparkles, 
  BookOpen, 
  BrainCircuit, 
  FileCheck,
  AlertCircle,
  HelpCircle,
  Clock,
  RotateCcw
} from 'lucide-react';

interface QueueItem {
  id: string;
  tier: number;
  tierName: string;
  notebook: string;
  weight: number;
  priorityLabel: string;
  title: string;
  status: 'pending' | 'active' | 'completed';
  badgeColor: string;
}

const INITIAL_QUEUE: QueueItem[] = [
  {
    id: 't-1',
    tier: 1,
    tierName: 'Create Flashcards',
    notebook: 'Computer Systems',
    weight: 1.5,
    priorityLabel: 'High Priority (1.5x)',
    title: 'Generate 4 review cards on Memory Management & Caching',
    status: 'pending',
    badgeColor: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20'
  },
  {
    id: 't-2',
    tier: 2,
    tierName: 'AI Concept Tutor',
    notebook: 'Distributed Networks',
    weight: 1.2,
    priorityLabel: 'High Priority (1.2x)',
    title: 'Clarify Misconception: How cluster nodes elect a leader safely',
    status: 'pending',
    badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20'
  },
  {
    id: 't-3',
    tier: 3,
    tierName: 'Spaced Review',
    notebook: 'Database Architecture',
    weight: 1.0,
    priorityLabel: 'Normal Priority (1.0x)',
    title: 'Review 8 flashcards due today (Index Balancing & Lookups)',
    status: 'pending',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
  },
  {
    id: 't-4',
    tier: 4,
    tierName: 'Targeted Re-Read',
    notebook: 'Computer Systems',
    weight: 1.5,
    priorityLabel: 'High Priority (1.5x)',
    title: 'Quick 3-min refresher: Handling memory page misses',
    status: 'pending',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
  },
  {
    id: 't-5',
    tier: 5,
    tierName: 'Checkpoint Quiz',
    notebook: 'Computer Networking',
    weight: 0.9,
    priorityLabel: 'Normal Priority (0.9x)',
    title: 'Comprehension Check: How internet traffic congestion is controlled',
    status: 'pending',
    badgeColor: 'bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
  },
  {
    id: 't-6',
    tier: 6,
    tierName: 'Milestone Exam',
    notebook: 'Computer Systems',
    weight: 1.5,
    priorityLabel: 'High Priority (1.5x)',
    title: 'Milestone Exam #2: Memory & Concurrency (20 Questions)',
    status: 'pending',
    badgeColor: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20'
  },
  {
    id: 't-7',
    tier: 7,
    tierName: 'Active Reading',
    notebook: 'Distributed Networks',
    weight: 1.2,
    priorityLabel: 'High Priority (1.2x)',
    title: 'Next Chapter: How decentralized systems maintain consistency',
    status: 'pending',
    badgeColor: 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
  },
  {
    id: 't-8',
    tier: 8,
    tierName: 'Written Assessment',
    notebook: 'Database Architecture',
    weight: 1.0,
    priorityLabel: 'Normal Priority (1.0x)',
    title: 'Short-Answer Response: Database crash recovery protocols',
    status: 'pending',
    badgeColor: 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700'
  }
];

export const PriorityQueueSimulator: React.FC = () => {
  const [queue, setQueue] = useState<QueueItem[]>(INITIAL_QUEUE);
  const [activeTask, setActiveTask] = useState<QueueItem | null>(null);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const handleNextTask = () => {
    const pendingIndex = queue.findIndex(item => item.status === 'pending');
    if (pendingIndex === -1) return;

    const updated = [...queue];
    if (activeTask) {
      const prevActiveIndex = updated.findIndex(item => item.id === activeTask.id);
      if (prevActiveIndex !== -1) {
        updated[prevActiveIndex].status = 'completed';
        setCompletedCount(c => c + 1);
      }
    }

    const nextPending = updated.find(item => item.status === 'pending');
    if (nextPending) {
      nextPending.status = 'active';
      setActiveTask(nextPending);
    } else {
      setActiveTask(null);
    }
    setQueue(updated);
  };

  const handleReset = () => {
    setQueue(INITIAL_QUEUE.map(item => ({ ...item, status: 'pending' })));
    setActiveTask(null);
    setCompletedCount(0);
  };

  return (
    <section id="priority-queue" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0B0F17] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Zero Decision Fatigue
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            The 8-Tier Cognitive Priority Hierarchy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Never wonder what to study next. StudyLoop normalizes notebook weights and strictly resolves cognitive bottlenecks in deterministic order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Execution Controller */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">Queue Engine</span>
              <span className="text-xs font-mono text-slate-900 dark:text-slate-100 font-bold">
                {completedCount}/{queue.length} Completed
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The scheduler calculates cognitive priority using notebook weights and task tiers. Critical remedial tasks always preempt normal reading.
              </p>
              
              <div className="p-3.5 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10 space-y-2">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Active Session</div>
                {activeTask ? (
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono border mb-1.5 ${activeTask.badgeColor}`}>
                      Tier {activeTask.tier}: {activeTask.tierName}
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                      {activeTask.title}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                      {activeTask.notebook} · <span className="text-emerald-600 dark:text-emerald-400 font-medium">{activeTask.priorityLabel}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">No task currently active. Click below to execute.</p>
                )}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleNextTask}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{activeTask ? 'Complete & Step Next Task' : 'Start Queue Execution'}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2 px-3 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.04] text-slate-600 dark:text-slate-400 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Priority Queue Demo</span>
              </button>
            </div>
          </div>

          {/* Right: The 8-Tier Ordered Queue Items */}
          <div className="lg:col-span-8 space-y-2.5">
            {queue.map((task) => {
              let rowStyle = "border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200";
              if (task.status === 'active') {
                rowStyle = "border-slate-900 dark:border-white bg-slate-100/70 dark:bg-white/[0.08] shadow-sm";
              } else if (task.status === 'completed') {
                rowStyle = "border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/20 opacity-40";
              }

              return (
                <div
                  key={task.id}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${rowStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 text-slate-700 dark:text-slate-300">
                      {task.status === 'completed' ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : `0${task.tier}`}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border font-medium ${task.badgeColor}`}>
                          {task.tierName}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {task.notebook} · <span className="text-slate-400">{task.priorityLabel}</span>
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm font-medium ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                        {task.title}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    {task.status === 'active' && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-900 dark:text-white bg-slate-200 dark:bg-white/10 px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        In Progress
                      </span>
                    )}
                    {task.status === 'completed' && (
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">Done</span>
                    )}
                    {task.status === 'pending' && (
                      <span className="text-[11px] font-mono text-slate-400">Queued</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
