import React, { useState } from 'react';
import { 
  Download, 
  ChevronRight, 
  RefreshCw, 
  Database, 
  Key, 
  CreditCard,
  LayoutDashboard,
  BookOpen,
  Library,
  CheckSquare,
  Layers,
  PenTool,
  Bot,
  Boxes,
  Settings,
  Play,
  Check,
  CheckCircle2,
  RotateCcw,
  Folder,
  FileText,
  Sparkles,
  Copy,
  Plus,
  Minus,
  Pencil,
  Flame,
  Clock,
  ExternalLink,
  Send,
  ArrowRight,
  Brain,
  Headphones,
  Video,
  BookOpenCheck,
  Volume2,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onExplorePro: () => void;
}

type AppTab = 'dashboard' | 'reader' | 'notebooks' | 'quiz' | 'flashcards' | 'tutor' | 'extensions';

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExplorePro }) => {
  const [activeTab, setActiveTab] = useState<AppTab>('dashboard');
  
  // Interactive Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({
    1: 1, // Pre-select for visual fidelity
    2: 1,
    3: 1
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const flashcards = [
    {
      q: "What is a mutex in Go and how does it ensure mutual exclusion?",
      a: "A sync.Mutex provides exclusive locking so that only one goroutine can access a critical section or shared memory at a time, preventing race conditions via Lock() and Unlock()."
    },
    {
      q: "How does goroutine scheduling differ from OS thread scheduling in Go?",
      a: "Goroutines are multiplexed onto OS threads via the Go runtime M:N scheduler (work stealing), requiring only ~2KB of initial stack compared to ~1-8MB for OS threads."
    },
    {
      q: "What is the role of channels in Go's CSP concurrency model?",
      a: "Channels provide typed conduits through which goroutines synchronize execution and communicate values without explicit locks: 'Do not communicate by sharing memory; instead, share memory by communicating.'"
    },
    {
      q: "When should you use sync.RWMutex over a standard sync.Mutex?",
      a: "Use sync.RWMutex when read operations significantly outnumber write operations, allowing concurrent readers (RLock) while retaining exclusive locks for writers."
    },
    {
      q: "What causes a goroutine leak in Go applications?",
      a: "Goroutine leaks occur when a goroutine is launched but blocked indefinitely on a channel receive/send or unclosed resource, preventing the garbage collector from reclaiming its memory."
    }
  ];

  // Socratic Tutor state
  const [socraticActive, setSocraticActive] = useState(false);
  const [socraticInput, setSocraticInput] = useState('');
  const [socraticMessages, setSocraticMessages] = useState<Array<{ sender: 'user' | 'tutor'; text: string }>>([
    {
      sender: 'tutor',
      text: "Welcome to Guided Socratic Thinking. Before we write mutex lock code, what happens if two goroutines write to the exact same map concurrently without synchronization?"
    }
  ]);

  // Extensions Hub toggle states
  const [extSimplifierEnabled, setExtSimplifierEnabled] = useState(true);
  const [extAudioEnabled, setExtAudioEnabled] = useState(false);
  const [extYoutubeEnabled, setExtYoutubeEnabled] = useState(false);

  const trustBadges = [
    { label: '100% Local Privacy (ONNX Embeddings)', icon: Database },
    { label: 'Bring Your Own Key (Gemini, OpenAI, Ollama)', icon: Key },
    { label: '2-Strike Socratic Concept Rescue', icon: RefreshCw },
    { label: 'Zero Monthly Subscriptions', icon: CreditCard },
  ];

  const handleSelectAnswer = (qId: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleQuizReset = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 left-1/3 w-[450px] h-[250px] bg-teal-500/5 dark:bg-teal-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium tracking-wide mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>100% Free Core Desktop App · Local-First · Zero Monthly Markups</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-[62px] font-bold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-6 text-balance">
          The Anti-Chatbot AI Study Queue <br className="hidden sm:inline" />
          <span className="text-slate-500 dark:text-slate-400">
            for Serious Learners.
          </span>
        </h1>

        {/* Subtitle - Medium density */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Stop getting lost in endless chat windows. StudyLoop turns your textbooks and video lectures into a deterministic, local-first queue with on-device search, validation quizzes, and FSRS-4 repetition.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download Free Desktop App (Windows)</span>
          </button>
          
          <button
            onClick={onExplorePro}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 font-medium text-sm transition-all"
          >
            <span>Explore Pro Extensions ($39/yr)</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Trust Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-14 text-left">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0f1412] border border-slate-200 dark:border-emerald-500/10 text-slate-700 dark:text-slate-300 text-xs"
            >
              <badge.icon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="font-mono text-[11px] leading-tight">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* Authentic StudyLoop Desktop UI Mockup Window (Matches Real App Screenshots) */}
        {/* ========================================================================= */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-300 dark:border-[#1e2f26] bg-[#0d120f] shadow-2xl overflow-hidden text-left text-slate-100 font-sans">
          
          {/* Mockup macOS / Desktop Titlebar */}
          <div className="h-10 bg-[#090d0b] border-b border-[#18261e] px-4 flex items-center justify-between text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block opacity-80" />
              <span className="ml-3 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="text-emerald-400 font-semibold">The StudyLoop</span> Desktop v1.0 — <span className="text-slate-400">test_local</span>
              </span>
            </div>
            
            {/* Quick Screen Switcher Tabs in Header */}
            <div className="flex items-center bg-[#131d17] rounded-lg p-0.5 border border-[#1f3126] overflow-x-auto max-w-[420px] scrollbar-none">
              {(['dashboard', 'reader', 'notebooks', 'quiz', 'flashcards', 'tutor', 'extensions'] as AppTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium capitalize transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-[#1e3025] text-emerald-300 font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main Desktop Window Frame with Real StudyLoop Sidebar + Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] bg-[#0d120f]">
            
            {/* Left Real Sidebar */}
            <div className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col justify-between border-r border-[#18261e] p-3.5 bg-[#090d0b]">
              
              {/* Brand and Nav Links */}
              <div className="space-y-6">
                
                {/* Logo Header */}
                <div className="flex items-center gap-2.5 px-2 pt-1">
                  <div className="w-6 h-6 rounded-md bg-[#22c55e] flex items-center justify-center text-slate-950 font-bold text-sm shadow-sm">
                    S
                  </div>
                  <span className="font-semibold text-sm tracking-tight text-white">The StudyLoop</span>
                </div>

                {/* Nav Items */}
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'dashboard'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
                    <span>Dashboard</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('reader')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'reader'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Reader</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('notebooks')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'notebooks'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <Library className="w-3.5 h-3.5 shrink-0" />
                    <span>Notebooks</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('quiz')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'quiz'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <CheckSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>Quiz</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('flashcards');
                      setShowFlashcardAnswer(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'flashcards'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>Flashcards</span>
                  </button>

                  <div className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-500 opacity-60 cursor-default">
                    <PenTool className="w-3.5 h-3.5 shrink-0" />
                    <span>Examiner</span>
                  </div>

                  <button
                    onClick={() => setActiveTab('tutor')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'tutor'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5 shrink-0" />
                    <span>Tutor</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('extensions')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === 'extensions'
                        ? 'bg-[#15231c] text-emerald-400 font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#121a15]'
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5 shrink-0" />
                    <span>Extensions</span>
                  </button>
                </nav>

              </div>

              {/* Bottom Settings Link */}
              <div className="pt-3 border-t border-[#18261e] px-3 text-xs text-slate-400 flex items-center gap-2">
                <Settings className="w-3.5 h-3.5" />
                <span>Settings</span>
              </div>

            </div>

            {/* Main Content Area: Switches between the 4 Authentic App Screens */}
            <div className="col-span-1 md:col-span-9 p-5 sm:p-7 flex flex-col justify-between overflow-x-hidden">
              
              {/* ========================================================= */}
              {/* 1. DASHBOARD SCREEN (media_1787552230203.png) */}
              {/* ========================================================= */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Dashboard Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#18261e] pb-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                        STUDY QUEUE
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Today's Tasks</h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      <span className="px-2.5 py-1 rounded-full bg-[#131d17] border border-[#1f3126] text-rose-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        0 / 1 Sessions Today
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#131d17] border border-[#1f3126] text-slate-300">
                        ⏳ 52d left
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#131d17] border border-[#1f3126] text-amber-400 hidden lg:inline-flex">
                        ⚡ 1229 w/d (On track — 1 session/day)
                      </span>
                      <button 
                        onClick={() => setActiveTab('reader')}
                        className="px-3 py-1 rounded-full bg-[#16231d] border border-[#23372b] text-slate-200 hover:text-white hover:border-emerald-500/40 transition-colors"
                      >
                        Skip to Reading
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Grid: Tasks on Left, Streak on Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    
                    {/* Left: Up Next Cards */}
                    <div className="lg:col-span-8 space-y-4">
                      
                      {/* Main Up Next #1 Card */}
                      <div className="p-5 rounded-2xl bg-[#111a15] border border-[#1d2d23] shadow-md space-y-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2 py-0.5 rounded-md bg-[#18261e] text-emerald-400 font-mono text-[10px] font-semibold uppercase flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-xs bg-emerald-500" />
                            READING · 15 MIN
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 font-bold">UP NEXT #1</span>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">Read: Chapter 1</h3>
                          <p className="text-xs text-slate-400 mt-0.5">Pages 21-30</p>
                        </div>

                        <button
                          onClick={() => setActiveTab('reader')}
                          className="px-4 py-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-sm active:scale-95"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Start Reading</span>
                        </button>
                      </div>

                      {/* Up Next in Queue Section */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-400">Up Next in Queue</p>
                        
                        <div className="p-3.5 rounded-xl bg-[#111a15]/70 border border-[#1a2820] flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-1 rounded bg-[#16221b] text-slate-400 font-mono text-[11px]">#2</span>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono uppercase bg-[#18261e] text-emerald-400 px-1.5 py-0.5 rounded">READING · 21 min</span>
                              </div>
                              <p className="text-slate-200 font-medium mt-1">Read: Ch 2. Variables <span className="text-slate-400 text-[11px]">(Pages 3-3)</span></p>
                            </div>
                          </div>

                          <button 
                            onClick={() => setActiveTab('reader')}
                            className="px-3 py-1.5 rounded-lg bg-[#22c55e]/90 hover:bg-[#22c55e] text-slate-950 font-semibold text-xs transition-colors"
                          >
                            Start
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Right: 2-Day Streak & Calendar */}
                    <div className="lg:col-span-4 p-4 rounded-2xl bg-[#111a15] border border-[#1d2d23] space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
                          <div>
                            <span className="text-sm font-bold text-white leading-tight block">2</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">DAY STREAK</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">Longest: 2d</span>
                      </div>

                      {/* Mini Calendar Widget */}
                      <div className="border-t border-[#18261e] pt-3 text-[11px]">
                        <p className="font-medium text-slate-200 mb-2">August 2026</p>
                        
                        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-400 mb-1">
                          <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px]">
                          {/* Calendar dummy filler */}
                          {Array.from({ length: 6 }).map((_, i) => (
                            <span key={`empty-${i}`} className="p-1 text-slate-700" />
                          ))}
                          <span className="p-1 text-slate-500">1</span>
                          {[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map(d => (
                            <span key={d} className="p-1 text-slate-400 hover:bg-[#18261e] rounded">{d}</span>
                          ))}
                          {/* Active streak days */}
                          <span className="p-1 rounded bg-[#18261e] text-emerald-400 font-bold border border-emerald-500/30">23</span>
                          <span className="p-1 rounded bg-emerald-500 text-slate-950 font-bold shadow-xs">24</span>
                          {[25,26,27,28,29,30,31].map(d => (
                            <span key={d} className="p-1 text-slate-400 hover:bg-[#18261e] rounded">{d}</span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 2. READER SCREEN (media_1787552246407.png) */}
              {/* ========================================================= */}
              {activeTab === 'reader' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Reader Header */}
                  <div className="border-b border-[#18261e] pb-3">
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                      READER
                    </span>
                    <div className="flex items-center gap-3 mt-0.5">
                      <h2 className="text-2xl font-bold text-white tracking-tight">Chapter 1</h2>
                      <span className="text-xs text-slate-400">40 sections</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#18261e] text-emerald-400 border border-emerald-500/20">
                        TASK MODE
                      </span>
                    </div>
                  </div>

                  {/* Reader Action Toolbar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs bg-[#111a15] p-2.5 rounded-xl border border-[#1d2d23]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-300 text-[11px]">Page 21 / 352</span>
                      <button 
                        onClick={() => setActiveTab('quiz')}
                        className="px-3 py-1 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" />
                        <span>Complete Session</span>
                      </button>
                      <button className="px-2.5 py-1 rounded-lg bg-[#16221b] hover:bg-[#1d2d23] text-slate-300 text-[11px] flex items-center gap-1 border border-[#23372b]">
                        <Copy className="w-3 h-3" />
                        <span>Copy Session</span>
                      </button>
                      <button className="px-2.5 py-1 rounded-lg bg-[#16221b] hover:bg-[#1d2d23] text-amber-300 text-[11px] flex items-center gap-1 border border-[#23372b]">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Simplify</span>
                      </button>
                    </div>

                    <span className="font-mono text-slate-400 text-[11px] hidden sm:inline">
                      Reading Window: Pages 21-30
                    </span>
                  </div>

                  {/* Document Page Canvas */}
                  <div className="relative rounded-xl bg-white text-slate-900 p-6 sm:p-8 shadow-inner font-serif min-h-[300px] border border-slate-300">
                    <div className="max-w-xl mx-auto space-y-4">
                      <div className="text-center space-y-1">
                        <span className="text-xs font-sans tracking-widest text-blue-700 uppercase font-bold">CHAPTER 1</span>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950">The Truth about Relativity</h3>
                        <p className="text-xs sm:text-sm italic text-slate-600">Why Everything Is Relative—Even When It Shouldn't Be</p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif pt-2">
                        <span className="text-3xl font-bold float-left mr-2 leading-none font-serif text-slate-950">O</span>
                        ne day while browsing the World Wide Web (obviously for work—not just wasting time), I stumbled on the following ad, on the Web site of a magazine, the <em>Economist</em>.
                      </p>

                      {/* Mockup Subscription Table inside Document */}
                      <div className="p-3 bg-slate-50 border border-slate-300 rounded text-[11px] font-sans text-slate-800 space-y-1.5">
                        <div className="font-bold border-b border-slate-200 pb-1 text-slate-900">SUBSCRIPTIONS</div>
                        <div className="flex justify-between">
                          <span>Economist.com subscription — 1 year online</span>
                          <span className="font-semibold">US $59.00</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                          <span>Print subscription — 1 year print edition</span>
                          <span className="font-semibold">US $125.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-slate-950 bg-blue-50/60 p-1 rounded">
                          <span>Print & web subscription — 1 year print + web</span>
                          <span>US $125.00</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Zoom & AI Chat controls */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0d120f]/90 text-white p-1 rounded-lg border border-[#1f3126] font-mono text-[10px]">
                      <button className="p-1 hover:text-emerald-400"><Minus className="w-3 h-3" /></button>
                      <span className="px-1">100%</span>
                      <button className="p-1 hover:text-emerald-400"><Plus className="w-3 h-3" /></button>
                    </div>

                    <div className="absolute top-4 right-3 bg-[#0d120f] text-emerald-400 px-2 py-1 rounded border border-[#1f3126] font-mono text-[10px] flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Chat (Expand)</span>
                    </div>
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 3. NOTEBOOKS SCREEN (media_1787552260432.png) */}
              {/* ========================================================= */}
              {activeTab === 'notebooks' && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Notebooks Header */}
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Notebooks</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Upload and manage your learning materials</p>
                  </div>

                  {/* Dropzone Container */}
                  <div className="border border-dashed border-[#1f3126] bg-[#0c1410] rounded-2xl p-6 text-center space-y-3">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Drag & drop your study material</h4>
                      <p className="text-xs text-slate-400">Upload a PDF, Markdown (.md), or Text (.txt) file or folder</p>
                    </div>
                    <button className="px-4 py-1.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-semibold text-xs transition-colors">
                      Browse Files
                    </button>
                    <p className="text-[10px] text-slate-400 font-mono">
                      PDF, MD, TXT • Up to 50 MB per file • Multi-files combine into one notebook
                    </p>
                  </div>

                  {/* Active Lane */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-bold text-white">Active Lane (2 / 4)</h3>
                      <p className="text-xs text-slate-400">Your currently studying textbooks. Maximum 4 active at a time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      
                      {/* Notebook Card 1 */}
                      <div className="p-4 rounded-xl bg-[#111a15] border border-emerald-500/30 text-xs space-y-2.5 relative">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-slate-300 shrink-0" />
                            <span className="font-bold text-white leading-tight">Go Programming – Golang Course with Bonus Projects</span>
                          </div>
                          <Pencil className="w-3 h-3 text-slate-400 shrink-0" />
                        </div>

                        <div className="text-[11px] font-mono text-slate-400 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-[#16221b] text-slate-300 font-semibold">YOUTUBE</span>
                            <span>24 pages • 612 chunks</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300 pt-1">
                            <span className="truncate text-emerald-400">Chapter 1: Ch 1 Why Write Go (Pages 2 to 2)</span>
                            <span className="text-blue-400 underline cursor-pointer shrink-0 ml-2">Ask Tutor</span>
                          </div>
                          <div className="flex justify-between text-slate-400 pt-1 border-t border-[#18261e]">
                            <span>Priority: 5</span>
                            <span>Uploaded: 23/8/2026</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button className="px-3 py-1 rounded bg-[#16221b] hover:bg-[#1d2d23] text-amber-300 border border-amber-500/20 text-[11px] font-mono">
                            Sleep
                          </button>
                          <button className="px-3 py-1 rounded bg-[#16221b] hover:bg-rose-950/30 text-rose-400 border border-rose-500/20 text-[11px] font-mono">
                            Delete
                          </button>
                        </div>
                      </div>

                      {/* Notebook Card 2 */}
                      <div className="p-4 rounded-xl bg-[#111a15] border border-emerald-500/30 text-xs space-y-2.5 relative">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 rounded bg-rose-500/40 border border-rose-500/60 inline-block shrink-0" />
                            <span className="font-bold text-white leading-tight">Predictably irrational.pdf</span>
                          </div>
                          <Pencil className="w-3 h-3 text-slate-400 shrink-0" />
                        </div>

                        <div className="text-[11px] font-mono text-slate-400 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-[#16221b] text-slate-300 font-semibold">PDF</span>
                            <span>352 pages • 511 chunks</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300 pt-1">
                            <span className="truncate text-emerald-400">Chapter 1 (Pages 21 to 36)</span>
                            <span className="text-blue-400 underline cursor-pointer shrink-0 ml-2">Ask Tutor</span>
                          </div>
                          <div className="flex justify-between text-slate-400 pt-1 border-t border-[#18261e]">
                            <span>Priority: 5</span>
                            <span>Uploaded: 22/8/2026</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button className="px-3 py-1 rounded bg-[#16221b] hover:bg-[#1d2d23] text-amber-300 border border-amber-500/20 text-[11px] font-mono">
                            Sleep
                          </button>
                          <button className="px-3 py-1 rounded bg-[#16221b] hover:bg-rose-950/30 text-rose-400 border border-rose-500/20 text-[11px] font-mono">
                            Delete
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 4. QUIZ SCREEN (media_1787552278230.png) */}
              {/* ========================================================= */}
              {activeTab === 'quiz' && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Quiz Header */}
                  <div className="border-b border-[#18261e] pb-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                        ASSESSMENT
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Quiz</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      {!quizSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          className="px-4 py-1.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-all shadow-sm"
                        >
                          Submit Quiz
                        </button>
                      ) : (
                        <button
                          onClick={handleQuizReset}
                          className="px-3 py-1.5 rounded-lg bg-[#16221b] hover:bg-[#1d2d23] text-emerald-400 font-mono text-xs transition-all border border-emerald-500/30 flex items-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset Demo</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Feedback Banner upon Submission */}
                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between animate-fade-in">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span><strong>Score: 3/3 (100% Pass)</strong> · Verified against source chunks. Scheduled into FSRS-4 repetition queue.</span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Questions List */}
                  <div className="space-y-4 text-xs font-sans">
                    
                    {/* Question 1 */}
                    <div className="p-4 rounded-xl bg-[#111a15] border border-[#1d2d23] space-y-3">
                      <p className="font-semibold text-slate-100 text-sm leading-snug">
                        <span className="font-mono text-slate-400 mr-2">1</span>
                        According to the text, Go's execution speed is much faster than which of the following groups of languages?
                      </p>
                      
                      <div className="space-y-1.5">
                        {[
                          { text: "Java and C#", correct: false },
                          { text: "Python, JavaScript, Ruby, and PHP", correct: true },
                          { text: "C, C++, and Rust", correct: false },
                          { text: "Go's own standard library", correct: false }
                        ].map((opt, i) => {
                          const isSelected = selectedAnswers[1] === i;
                          let btnStyle = "border-[#1c2a21] bg-[#0c1410] text-slate-300 hover:border-emerald-500/40";
                          if (isSelected) {
                            btnStyle = "border-emerald-500/60 bg-[#16241c] text-white font-medium";
                          }
                          if (quizSubmitted) {
                            if (opt.correct) {
                              btnStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-semibold";
                            } else if (isSelected && !opt.correct) {
                              btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200";
                            }
                          }

                          return (
                            <button
                              key={i}
                              onClick={() => handleSelectAnswer(1, i)}
                              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center gap-2.5 ${btnStyle}`}
                            >
                              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-emerald-400 bg-emerald-500' : 'border-slate-600 bg-transparent'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                              {quizSubmitted && opt.correct && (
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div className="p-4 rounded-xl bg-[#111a15] border border-[#1d2d23] space-y-3">
                      <p className="font-semibold text-slate-100 text-sm leading-snug">
                        <span className="font-mono text-slate-400 mr-2">2</span>
                        The text states that Go's compilation speed is:
                      </p>
                      
                      <div className="space-y-1.5">
                        {[
                          { text: "Slower than interpreted languages", correct: false },
                          { text: "Much faster than compiled languages such as C and Rust", correct: true },
                          { text: "About the same as Java's compilation speed", correct: false },
                          { text: "Irrelevant to developer productivity", correct: false }
                        ].map((opt, i) => {
                          const isSelected = selectedAnswers[2] === i;
                          let btnStyle = "border-[#1c2a21] bg-[#0c1410] text-slate-300 hover:border-emerald-500/40";
                          if (isSelected) {
                            btnStyle = "border-emerald-500/60 bg-[#16241c] text-white font-medium";
                          }
                          if (quizSubmitted) {
                            if (opt.correct) {
                              btnStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-semibold";
                            } else if (isSelected && !opt.correct) {
                              btnStyle = "border-rose-500 bg-rose-500/20 text-rose-200";
                            }
                          }

                          return (
                            <button
                              key={i}
                              onClick={() => handleSelectAnswer(2, i)}
                              className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center gap-2.5 ${btnStyle}`}
                            >
                              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-emerald-400 bg-emerald-500' : 'border-slate-600 bg-transparent'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                              {quizSubmitted && opt.correct && (
                                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 5. FLASHCARDS SCREEN (Matches user's Flashcard screenshot) */}
              {/* ========================================================= */}
              {activeTab === 'flashcards' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Top Flashcard Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#18261e] pb-3">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                        RETENTION
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Flashcards</h2>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">NOTEBOOK</span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#111a15] border border-[#1d2d23] text-xs text-slate-200 cursor-pointer">
                          <span>Go Programming – Golang</span>
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flashcard Progress & Mode Indicator */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">
                      Card {flashcardIndex + 1} of {flashcards.length}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#18261e] text-emerald-400 text-[10px] uppercase font-semibold border border-emerald-500/20">
                      PRACTICE MODE
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-[#15231c] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                      style={{ width: `${((flashcardIndex + 1) / flashcards.length) * 100}%` }}
                    />
                  </div>

                  {/* Flashcard Stage */}
                  <div className="relative min-h-[250px] sm:min-h-[280px] rounded-2xl bg-[#090d0b] border border-[#18261e] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-inner">
                    
                    <div className="max-w-md space-y-4 my-auto">
                      <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                        {flashcards[flashcardIndex].q}
                      </p>

                      {showFlashcardAnswer && (
                        <div className="p-4 rounded-xl bg-[#111a15] border border-emerald-500/30 text-xs text-slate-200 leading-relaxed text-left animate-fade-in space-y-2">
                          <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                            Key Answer & Concept:
                          </span>
                          <p>{flashcards[flashcardIndex].a}</p>
                        </div>
                      )}

                      <div>
                        {!showFlashcardAnswer ? (
                          <button
                            onClick={() => setShowFlashcardAnswer(true)}
                            className="px-6 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
                          >
                            Show Answer
                          </button>
                        ) : (
                          <div className="flex items-center justify-center gap-2 pt-2">
                            <button
                              onClick={() => {
                                setShowFlashcardAnswer(false);
                                setFlashcardIndex((prev) => (prev + 1) % flashcards.length);
                              }}
                              className="px-4 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-mono transition-colors"
                            >
                              Hard (1d)
                            </button>
                            <button
                              onClick={() => {
                                setShowFlashcardAnswer(false);
                                setFlashcardIndex((prev) => (prev + 1) % flashcards.length);
                              }}
                              className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-mono transition-colors"
                            >
                              Good (3d)
                            </button>
                            <button
                              onClick={() => {
                                setShowFlashcardAnswer(false);
                                setFlashcardIndex((prev) => (prev + 1) % flashcards.length);
                              }}
                              className="px-4 py-2 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 text-xs font-bold transition-all shadow-sm"
                            >
                              Easy (7d) →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pagination Dot/Counter at bottom */}
                    <div className="absolute bottom-3 right-4 flex items-center gap-2 text-slate-500 text-[11px] font-mono">
                      <span>Card {flashcardIndex + 1}/{flashcards.length}</span>
                    </div>
                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 6. SOCRATIC TUTOR SCREEN (Matches user's Tutor screenshot) */}
              {/* ========================================================= */}
              {activeTab === 'tutor' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Socratic Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#18261e] pb-3">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                        TUTOR
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Guided Thinking</h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          setSocraticActive(false);
                          setSocraticMessages([
                            {
                              sender: 'tutor',
                              text: "Welcome to Guided Socratic Thinking. Before we write mutex lock code, what happens if two goroutines write to the exact same map concurrently without synchronization?"
                            }
                          ]);
                        }}
                        className="px-3 py-1 rounded-lg bg-[#16221b] hover:bg-[#1d2d23] text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors flex items-center gap-1.5 border border-[#23372b]"
                      >
                        <Pencil className="w-3 h-3" />
                        <span>Clear Chat</span>
                      </button>
                    </div>
                  </div>

                  {/* Filters Bar */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111a15] border border-[#1d2d23] text-slate-300">
                      <Folder className="w-3 h-3 text-slate-400" />
                      <span>Go Programming – Golang</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111a15] border border-[#1d2d23] text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>Entire book (No topic filter)</span>
                    </div>
                  </div>

                  {/* Socratic Interactive Viewport */}
                  <div className="min-h-[270px] rounded-2xl bg-[#090d0b] border border-[#18261e] p-4 flex flex-col justify-between relative">
                    
                    {!socraticActive ? (
                      /* Centered Socratic Starter Box */
                      <div className="my-auto max-w-sm mx-auto p-6 rounded-2xl bg-[#111a15] border border-[#1d2d23] text-center space-y-4 shadow-lg animate-fade-in">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30 text-2xl">
                          🧠
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">Socratic Tutor</h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Select a notebook and topic above, then start a guided session or type a specific question below to begin.
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0a100d] border border-[#17241d] text-[11px] text-slate-400">
                          Notebook: Go Programming (Golang Course)
                        </div>
                        <button
                          onClick={() => setSocraticActive(true)}
                          className="w-full py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Start Socratic Session</span>
                        </button>
                      </div>
                    ) : (
                      /* Active Socratic Conversation Stream */
                      <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                        {socraticMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex gap-2.5 text-xs ${
                              msg.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                          >
                            {msg.sender === 'tutor' && (
                              <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center text-xs shrink-0 mt-0.5">
                                🧠
                              </div>
                            )}
                            <div
                              className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                                msg.sender === 'user'
                                  ? 'bg-[#22c55e] text-slate-950 font-medium'
                                  : 'bg-[#111a15] border border-[#1d2d23] text-slate-200'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom Prompt Input Bar */}
                    <div className="mt-3 pt-2 border-t border-[#18261e] flex items-center gap-2">
                      <input
                        type="text"
                        value={socraticInput}
                        onChange={(e) => setSocraticInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && socraticInput.trim()) {
                            setSocraticActive(true);
                            setSocraticMessages(prev => [
                              ...prev,
                              { sender: 'user', text: socraticInput },
                              { sender: 'tutor', text: "Great insight! That causes a fatal runtime crash (concurrent map read and map write). How would a sync.Mutex isolate that operation?" }
                            ]);
                            setSocraticInput('');
                          }
                        }}
                        placeholder="Ask a grounded question about your material, and the tutor will guide you..."
                        className="flex-1 px-3.5 py-2 rounded-xl bg-[#111a15] border border-[#1d2d23] text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/60"
                      />
                      <button
                        onClick={() => {
                          if (socraticInput.trim()) {
                            setSocraticActive(true);
                            setSocraticMessages(prev => [
                              ...prev,
                              { sender: 'user', text: socraticInput },
                              { sender: 'tutor', text: "Great insight! That causes a fatal runtime crash (concurrent map read and map write). How would a sync.Mutex isolate that operation?" }
                            ]);
                            setSocraticInput('');
                          }
                        }}
                        className="p-2 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 transition-colors"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              )}

              {/* ========================================================= */}
              {/* 7. EXTENSIONS HUB SCREEN (Matches user's Extensions screenshot) */}
              {/* ========================================================= */}
              {activeTab === 'extensions' && (
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Extensions Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#18261e] pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Extensions Hub</h2>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Customize and extend your StudyLoop environment with local tools and integrations.</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#16221b] text-slate-300 font-mono text-[10px] uppercase font-bold border border-[#23372b]">
                        FREE PLAN
                      </span>
                      <button 
                        onClick={onExplorePro}
                        className="px-3.5 py-1 rounded-md bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-colors"
                      >
                        Upgrade to Pro
                      </button>
                    </div>
                  </div>

                  {/* Free Extensions Section */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Free Extensions</h3>
                      <span className="px-2 py-0.2 rounded-full bg-[#16221b] text-slate-400 text-[10px] font-mono">1 available</span>
                    </div>

                    {/* AI Text Simplifier Card */}
                    <div className="max-w-md p-4 rounded-xl bg-[#111a15] border border-[#1d2d23] space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#16221b] border border-[#23372b] flex items-center justify-center text-slate-300">
                            <BookOpenCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-xs">AI Text Simplifier</span>
                              <span className="px-1.5 py-0.5 rounded bg-[#18261e] text-emerald-400 text-[9px] font-mono uppercase font-bold">FREE</span>
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono">V1.0.0 • Reader</span>
                          </div>
                        </div>

                        {/* Toggle switch */}
                        <button
                          onClick={() => setExtSimplifierEnabled(!extSimplifierEnabled)}
                          className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
                            extSimplifierEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                            extSimplifierEnabled ? 'translate-x-4' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Transforms dense textbook chapters and academic text into structured, crystal-clear Markdown notes using AI.
                      </p>

                      <button
                        onClick={() => setActiveTab('reader')}
                        className="w-full py-1.5 rounded-lg bg-[#16221b] hover:bg-[#1d2d23] text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 border border-[#23372b] transition-colors"
                      >
                        <span>Open Simplifier</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Pro Extensions Section */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <span>Pro Extensions</span>
                        <span>👑</span>
                      </h3>
                      <span className="px-2 py-0.2 rounded-full bg-[#16221b] text-slate-400 text-[10px] font-mono">2 pro tools</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      
                      {/* Audio Overview Card */}
                      <div className="p-4 rounded-xl bg-[#111a15] border border-[#1d2d23] space-y-3 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-[#16221b] border border-[#23372b] flex items-center justify-center text-sky-400">
                                <Headphones className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-white text-xs">AI Audio Overview</span>
                                  <span className="px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-400 text-[9px] font-mono uppercase font-bold border border-sky-500/20">PRO</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono">V1.0.0 • Audio</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setExtAudioEnabled(!extAudioEnabled)}
                              className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
                                extAudioEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                extAudioEnabled ? 'translate-x-4' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>

                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            Generate dynamic conversational podcast-style audio summaries of reading topics using Edge TTS.
                          </p>
                        </div>

                        <button
                          onClick={onExplorePro}
                          className="w-full py-1.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-colors shadow-sm mt-2"
                        >
                          Unlock with Pro
                        </button>
                      </div>

                      {/* YouTube Ingestion Card */}
                      <div className="p-4 rounded-xl bg-[#111a15] border border-[#1d2d23] space-y-3 flex flex-col justify-between">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-[#16221b] border border-[#23372b] flex items-center justify-center text-rose-400">
                                <Video className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-white text-xs truncate max-w-[120px]">YouTube Ingestion & ...</span>
                                  <span className="px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 text-[9px] font-mono uppercase font-bold border border-rose-500/20">PRO</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono">V0.1.0 • Ingestion</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setExtYoutubeEnabled(!extYoutubeEnabled)}
                              className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
                                extYoutubeEnabled ? 'bg-emerald-500' : 'bg-slate-700'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                extYoutubeEnabled ? 'translate-x-4' : 'translate-x-0'
                              }`} />
                            </button>
                          </div>

                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            Ingest YouTube video lectures, extract timestamped transcripts with chapters, and study with embedded video player and quizzes.
                          </p>
                        </div>

                        <button
                          onClick={onExplorePro}
                          className="w-full py-1.5 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-colors shadow-sm mt-2"
                        >
                          Unlock with Pro
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* Bottom footer status */}
              <div className="mt-5 pt-3 border-t border-[#18261e] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Local Engine Ready
                  </span>
                  <span className="hidden sm:inline">Direct BYOK: Gemini / OpenAI / Ollama</span>
                </div>
                <span>Zero Cloud Toll</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

