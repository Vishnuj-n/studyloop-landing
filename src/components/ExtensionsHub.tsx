import React, { useState } from 'react';
import { 
  Youtube, 
  Headphones, 
  Sparkles, 
  FolderArchive, 
  Play, 
  Pause, 
  Volume2, 
  Layers, 
  Check, 
  ArrowRight, 
  ExternalLink,
  Code2,
  FileVideo,
  Terminal,
  Clock,
  BookOpenCheck,
  FileText
} from 'lucide-react';

export const ExtensionsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'audio' | 'simplify' | 'ingestion'>('youtube');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [simplifyMode, setSimplifyMode] = useState<'original' | 'simplified'>('simplified');
  const [pdfExtractionMode, setPdfExtractionMode] = useState<'raw' | 'extracted'>('extracted');

  const extensionsList = [
    {
      id: 'youtube',
      name: 'YouTube Lecture Ingestion',
      tier: 'Free',
      icon: Youtube,
      color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20',
      shortDesc: 'Converts video lectures into timestamped reading sections with synchronized video jumping and checkpoint quizzes.'
    },
    {
      id: 'audio',
      name: 'Audio Overview & Podcasts',
      tier: 'Pro',
      icon: Headphones,
      color: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20',
      shortDesc: 'Generates two-host podcast briefings on your device so you can listen and learn on the go with zero cloud fees.'
    },
    {
      id: 'simplify',
      name: 'AI Text Simplifier',
      tier: 'Free',
      icon: Sparkles,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      shortDesc: '1-click conversion of complex academic proofs, jargon, and dense text into clean, easy-to-read bullet notes.'
    },
    {
      id: 'ingestion',
      name: 'Deep Ingestion & PDF Extraction',
      tier: 'Pro',
      icon: FileText,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
      shortDesc: 'Smartly parses multi-column textbooks, research papers, and notes into structured chapters without formatting mess.'
    }
  ];

  return (
    <section id="extensions" className="py-20 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-canvas-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-4">
            Extensible Cognitive Power
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Extensions That Power Your Study Queue
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Turn video lectures, complex PDFs, and dense textbooks into clean, quiz-ready study sessions automatically.
          </p>
        </div>

        {/* Extensions Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {extensionsList.map((ext) => {
            const isSelected = activeTab === ext.id;
            return (
              <button
                key={ext.id}
                onClick={() => setActiveTab(ext.id as any)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-[#111827] border-slate-900 dark:border-white ring-1 ring-slate-900/20 dark:ring-white/20 shadow-md'
                    : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${ext.color}`}>
                      <ext.icon className="w-4 h-4" />
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                      ext.tier === 'Free' 
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}>
                      {ext.tier}
                    </span>
                  </div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {ext.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {ext.shortDesc}
                  </p>
                </div>
                
                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono font-medium">
                  <span className={isSelected ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-slate-400'}>
                    {isSelected ? '✓ Viewing Demo' : 'View Demo'}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Extension Showcase Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-white/[0.08] shadow-xs">
          
          {/* 1. YouTube Ingestion Tab */}
          {activeTab === 'youtube' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Free Extension: Video Lecture Parser</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Turn Video Lectures into Structured, Timestamped Study Chunks
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Paste any educational YouTube URL. StudyLoop transcribes and chunks video lectures into timestamped reading chunks with synchronized video jumping and validation quizzes.
                </p>
                <div className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                    <span>Synchronized video jumping to exact conceptual lecture timestamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                    <span>Integrates directly into your 8-tier priority study queue with quizzes</span>
                  </div>
                </div>
              </div>

              {/* YouTube Mockup */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <FileVideo className="w-3.5 h-3.5" />
                    MIT 6.824: Lecture 3 — GFS & Primary Backup
                  </span>
                  <span className="text-slate-500">Duration: 1h 22m</span>
                </div>
                <div className="relative aspect-video bg-slate-950 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="text-center z-10 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <span className="text-[11px] font-sans text-slate-200">Interactive Synchronized Lecture Chunker</span>
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-300">
                    <span>Timestamp: 18:42</span>
                    <span className="text-rose-400">Concept Unit #2 Active</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-slate-400">
                  ⚡ Auto-extracted 4 concept-aware units with timestamped validation quizzes.
                </div>
              </div>
            </div>
          )}

          {/* 2. Audio Overview Tab */}
          {activeTab === 'audio' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-mono">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Pro Extension: Two-Host Audio Briefings</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Two-Host Podcast Briefings Streamed On-Device
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Generates two-host podcast briefings streamed on-device using Microsoft Edge TTS for auditory learners handling dense textbook chapters. 100% local audio generation with zero external audio API fees.
                </p>

                {/* Python Dependency Info */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                  <div>
                    <span className="font-bold">Local Streaming Runtime:</span>
                    <p className="text-[11px] mt-0.5 text-amber-700 dark:text-amber-200 font-sans">
                      Edge-TTS streaming runs locally on your Windows machine (requires Python 3.10+ installed for the audio sidecar).
                    </p>
                  </div>
                </div>
              </div>

              {/* Audio Player Mockup */}
              <div className="lg:col-span-6 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs text-slate-300 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    Deep Briefing: Two-Host Neural Audio
                  </span>
                  <span className="text-emerald-400">Edge-TTS Stream</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-sans font-semibold text-white text-xs">Chapter 14: Virtual Memory Deep-Dive</h5>
                      <span className="text-[10px] text-slate-400">Host A (Concept Guide) & Host B (Devil's Advocate)</span>
                    </div>
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-white text-slate-950 flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                  </div>

                  {/* Animated Soundwave Preview */}
                  <div className="flex items-center gap-1 h-8 px-2 bg-black/40 rounded-lg">
                    {[40, 70, 25, 90, 60, 30, 80, 45, 95, 30, 60, 85, 40, 75, 50, 90, 35, 65, 80, 40].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-sky-400' : 'bg-slate-700'
                        }`}
                        style={{ height: isPlayingAudio ? `${Math.max(15, (h * (i % 3 + 1)) % 100)}%` : '20%' }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>03:24</span>
                    <span>11:45</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Simplify Tool Tab (Free Community Extension) */}
          {activeTab === 'simplify' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Extension: AI Text Simplifier</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  1-Click Refactoring of Dense Proofs & Jargon
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Refactor dense academic proofs, dense math, and cryptic jargon into clear, structured Markdown notes directly inside the Reader without manual copy-pasting. Free for all users.
                </p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setSimplifyMode('original')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      simplifyMode === 'original'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Original Dense Excerpt
                  </button>
                  <button
                    onClick={() => setSimplifyMode('simplified')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      simplifyMode === 'simplified'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    ✨ Structured Markdown Note
                  </button>
                </div>
              </div>

              {/* Side-by-side / dynamic preview */}
              <div className="lg:col-span-7 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-slate-200 font-semibold">
                    {simplifyMode === 'original' ? 'ORIGINAL ACADEMIC EXCERPT' : 'READER STRUCTURED MARKDOWN NOTE'}
                  </span>
                  <span className="text-slate-500">OSTEP §14.4</span>
                </div>

                {simplifyMode === 'original' ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-300 text-xs leading-relaxed space-y-2">
                    <p className="italic text-slate-400">
                      "Let &Phi;: V &rarr; P represent the sparse virtual mapping where |V| &gt;&gt; |P|. Under a two-tier hierarchy, the top-tier Page Directory Entry PDE_i contains a presence predicate p_i &isin; &#123;0, 1&#125;. If p_i = 0, the page table allocation routine aborts..."
                    </p>
                    <span className="text-[10px] text-amber-400 block font-mono">Dense formal notation. High friction.</span>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20 text-slate-200 text-xs leading-relaxed space-y-2">
                    <div className="text-emerald-400 font-bold font-sans text-sm mb-1">
                      ### Two-Tier Paging Intuition
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-300 font-sans text-xs">
                      <li><strong>The Problem:</strong> Flat page tables waste megabytes allocating slots for unused memory.</li>
                      <li><strong>The Hierarchy:</strong> A single 1-page Directory acts as a Table of Contents.</li>
                      <li><strong>Lazy Allocation:</strong> If an entire 4MB memory region is empty, its leaf page table is never allocated in RAM.</li>
                    </ul>
                    <span className="text-[10px] text-emerald-400 block font-mono mt-2">✓ Structured Markdown generated directly inside Reader. Zero copy-pasting.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. Deep Ingestion & PDF Extraction Tab */}
          {activeTab === 'ingestion' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-xs font-mono">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Pro Extension: Deep Ingestion Engine</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  Flawless Extraction for Multi-Column Papers & Textbooks
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Academic papers and textbooks are filled with double columns, diagrams, and sidebars that break standard copy-pasting. StudyLoop reconstructs reading order naturally so you can study without cleaning up formatting errors.
                </p>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setPdfExtractionMode('raw')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      pdfExtractionMode === 'raw'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    Raw 2-Column PDF
                  </button>
                  <button
                    onClick={() => setPdfExtractionMode('extracted')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      pdfExtractionMode === 'extracted'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold'
                        : 'border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    ✨ Structured Study Chapter
                  </button>
                </div>
              </div>

              {/* Ingestion Preview Showcase */}
              <div className="lg:col-span-7 rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-300 dark:border-white/10 p-5 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-purple-400 font-semibold">
                    {pdfExtractionMode === 'raw' ? 'RAW 2-COLUMN PDF INPUT' : 'EXTRACTED STUDY NOTEBOOK CHUNK'}
                  </span>
                  <span className="text-slate-400">ArXiv / Textbook Parser</span>
                </div>

                {pdfExtractionMode === 'raw' ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-400 text-xs leading-relaxed space-y-2">
                    <div className="grid grid-cols-2 gap-3 text-[11px] opacity-75 font-mono">
                      <div className="p-2 border border-dashed border-slate-700 rounded">
                        <span className="text-[10px] text-slate-500 block mb-1">Column A</span>
                        "In distributed storage systems, consensus proto- [1] cols must resolve split..."
                      </div>
                      <div className="p-2 border border-dashed border-slate-700 rounded">
                        <span className="text-[10px] text-slate-500 block mb-1">Column B</span>
                        "...brain states during net- work partition. Figure 3 shows leader election."
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-400 block font-mono mt-1">
                      ⚠️ Scrambled columns, broken hyphens, and misplaced figures.
                    </span>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/20 text-slate-200 text-xs leading-relaxed space-y-2">
                    <div className="text-purple-400 font-bold font-sans text-sm mb-1">
                      Section 3.2: Resolving Network Partitions
                    </div>
                    <p className="font-sans text-xs text-slate-300 leading-normal">
                      In distributed storage systems, consensus protocols must resolve split-brain states when nodes are isolated by a network partition.
                    </p>
                    <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-mono">
                      ✓ Reordered text columns · Stripped OCR noise · Linked to Checkpoint Quiz #5
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-slate-400">
                  <span>✓ 2-Column Papers</span>
                  <span>✓ Math & Tables</span>
                  <span>✓ Obsidian & Notion</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

