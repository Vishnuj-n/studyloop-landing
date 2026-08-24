import React, { useState } from "react";
import {
  BookOpen,
  HelpCircle,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  MessageSquare,
  Zap,
  Unlock,
  Database,
  Trophy,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

interface FlowchartEngineProps {
  onOpenSocraticDemo: () => void;
}

type TrackMode = "classical" | "fast_track";
type Scenario = "pass" | "strike1" | "strike2" | "unblock";

function cx(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function StepDivider({ active = true }: { active?: boolean } = {}) {
  return (
    <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-10">
      <div
        className={cx(
          "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
          active
            ? "bg-sky-500 text-white shadow-[0_0_14px_4px_rgba(14,165,233,0.5)] ring-2 ring-sky-300/30"
            : "bg-slate-200 dark:bg-slate-700 text-slate-400"
        )}
      >
        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
      </div>
    </div>
  );
}

type CardColor = "emerald" | "amber" | "rose" | "indigo";

const colorMap: Record<
  CardColor,
  { card: string; icon: string; label: string; badge: string; inactive: string }
> = {
  emerald: {
    card: "bg-emerald-500/10 border-emerald-400 shadow-lg shadow-emerald-500/10",
    icon: "bg-emerald-500/20 text-emerald-500",
    label: "text-emerald-700 dark:text-emerald-300",
    badge: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
    inactive: "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/[0.06] opacity-50",
  },
  amber: {
    card: "bg-amber-500/10 border-amber-400 shadow-lg shadow-amber-500/10",
    icon: "bg-amber-500/20 text-amber-500",
    label: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
    inactive: "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/[0.06] opacity-50",
  },
  rose: {
    card: "bg-rose-500/10 border-rose-400 shadow-lg shadow-rose-500/10",
    icon: "bg-rose-500/20 text-rose-500",
    label: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-500/20 text-rose-700 dark:text-rose-300",
    inactive: "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/[0.06] opacity-50",
  },
  indigo: {
    card: "bg-indigo-500/10 border-indigo-400 shadow-lg shadow-indigo-500/10",
    icon: "bg-indigo-500/20 text-indigo-500",
    label: "text-indigo-700 dark:text-indigo-300",
    badge: "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
    inactive: "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/[0.06] opacity-50",
  },
};

function OutcomeCard({
  active,
  color,
  icon,
  label,
  badge,
  description,
}: {
  active: boolean;
  color: CardColor;
  icon: React.ReactNode;
  label: string;
  badge: string;
  description: React.ReactNode;
}) {
  const c = colorMap[color];
  return (
    <div
      className={cx(
        "rounded-xl border-2 p-4 flex flex-col gap-2 transition-all duration-300",
        active ? c.card : c.inactive
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={cx(
              "w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center",
              active ? c.icon : "bg-slate-200 dark:bg-slate-700 text-slate-400"
            )}
          >
            {icon}
          </div>
          <span
            className={cx(
              "text-[11px] font-mono font-bold leading-tight",
              active ? c.label : "text-slate-600 dark:text-slate-400"
            )}
          >
            {label}
          </span>
        </div>
        <span
          className={cx(
            "flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold",
            active ? c.badge : "bg-slate-100 dark:bg-slate-800 text-slate-400"
          )}
        >
          {badge}
        </span>
      </div>
      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
        {description}
      </p>
    </div>
  );
}

export const FlowchartEngine: React.FC<FlowchartEngineProps> = ({
  onOpenSocraticDemo,
}) => {
  const [trackMode, setTrackMode] = useState<TrackMode>("fast_track");
  const [scenario, setScenario] = useState<Scenario>("pass");

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#10B981", "#0EA5E9", "#F59E0B"],
    });
  };

  const handleTrackChange = (mode: TrackMode) => {
    setTrackMode(mode);
    if (mode === "fast_track" && scenario === "strike1") {
      setScenario("strike2");
    }
  };

  const handleScenarioChange = (s: Scenario) => {
    setScenario(s);
    if (s === "pass") triggerConfetti();
  };

  const isPass = scenario === "pass";
  const isStrike1 = scenario === "strike1";
  const isStrike2 = scenario === "strike2";
  const isUnblock = scenario === "unblock";
  const isFail = isStrike1 || isStrike2 || isUnblock;
  const readHighlight = isStrike1;

  return (
    <section
      id="closed-loop-engine"
      className="py-16 sm:py-20 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-canvas-dark relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/[0.03] dark:bg-sky-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            Deterministic Cognitive Engine
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            The Closed-Loop Learning Circuit
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Interactive state machine — choose a remediation mode and click an outcome to test the circuit.
          </p>
        </div>

        {/* Top Controls: Mode (Top & Prominent) + Simulate (Below) */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-white/10 p-4 sm:p-5 shadow-sm mb-6 flex flex-col gap-4">

          {/* 1. High-Prominence Mode Selector on TOP */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                Remediation Mode:
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {trackMode === "fast_track" ? "⚡ Direct AI escalation" : "🔄 2-Stage classical loop"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Fast Track Option (Default & Highlighted) */}
              <button
                type="button"
                onClick={() => handleTrackChange("fast_track")}
                className={cx(
                  "p-3 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3 relative cursor-pointer",
                  trackMode === "fast_track"
                    ? "bg-rose-500/10 dark:bg-rose-950/40 border-rose-500 dark:border-rose-400 shadow-md shadow-rose-500/10 ring-2 ring-rose-500/20"
                    : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 opacity-70 hover:opacity-100"
                )}
              >
                <div
                  className={cx(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    trackMode === "fast_track"
                      ? "bg-rose-500 text-white shadow-sm shadow-rose-500/40"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                  )}
                >
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cx(
                      "text-xs font-mono font-bold leading-tight",
                      trackMode === "fast_track" ? "text-rose-700 dark:text-rose-300" : "text-slate-800 dark:text-slate-200"
                    )}>
                      Fast Track (Direct AI)
                    </span>
                    <span className={cx(
                      "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full uppercase",
                      trackMode === "fast_track"
                        ? "bg-rose-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                    )}>
                      Default
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    Quiz fail immediately triggers Socratic AI rescue. Bypasses re-read step.
                  </p>
                </div>
              </button>

              {/* Classical Option */}
              <button
                type="button"
                onClick={() => handleTrackChange("classical")}
                className={cx(
                  "p-3 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3 relative cursor-pointer",
                  trackMode === "classical"
                    ? "bg-amber-500/10 dark:bg-amber-950/40 border-amber-500 dark:border-amber-400 shadow-md shadow-amber-500/10 ring-2 ring-amber-500/20"
                    : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 opacity-70 hover:opacity-100"
                )}
              >
                <div
                  className={cx(
                    "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    trackMode === "classical"
                      ? "bg-amber-500 text-white shadow-sm shadow-amber-500/40"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                  )}
                >
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cx(
                      "text-xs font-mono font-bold leading-tight",
                      trackMode === "classical" ? "text-amber-700 dark:text-amber-300" : "text-slate-800 dark:text-slate-200"
                    )}>
                      Classical (2-Strike)
                    </span>
                    <span className={cx(
                      "text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full uppercase",
                      trackMode === "classical"
                        ? "bg-amber-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-500"
                    )}>
                      2-Strike
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    Strike 1 re-reads missed concepts. Strike 2 escalates to Socratic AI.
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* 2. Simulation Outcome Controls (Below Mode) */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Simulate Outcome:
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => handleScenarioChange("pass")}
                className={cx(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
                  isPass
                    ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Quiz Pass (≥85%)</span>
              </button>

              {trackMode === "classical" ? (
                <button
                  onClick={() => handleScenarioChange("strike1")}
                  className={cx(
                    "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
                    isStrike1
                      ? "bg-amber-600 text-white shadow-sm ring-2 ring-amber-500/30"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  )}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Strike 1: Fail &amp; Re-read</span>
                </button>
              ) : (
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 px-2 py-1 bg-slate-100 dark:bg-white/[0.02] rounded border border-dashed border-slate-300 dark:border-white/10">
                  Strike 1 Bypassed (Fast Track)
                </span>
              )}

              <button
                onClick={() => handleScenarioChange("strike2")}
                className={cx(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
                  isStrike2
                    ? "bg-rose-600 text-white shadow-sm ring-2 ring-rose-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>
                  {trackMode === "classical"
                    ? "Strike 2 / Fail: Socratic Rescue"
                    : "Fail: Socratic Rescue"}
                </span>
              </button>

              <button
                onClick={() => handleScenarioChange("unblock")}
                className={cx(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
                  isUnblock
                    ? "bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                )}
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Graceful Unblock</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card-based state machine — NO SVG / NO ARROWS */}
        <div className="bg-white dark:bg-[#0E131F] rounded-2xl border border-slate-200 dark:border-white/10 p-4 sm:p-6 shadow-sm">

          {/* Row 1: Linear pipeline steps */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3 mb-4">

            {/* Step 1: Smart Ingestion */}
            <div className="flex-1 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-sky-500" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                    01 Smart Ingestion
                  </span>
                </div>
                <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  sqlite-vec
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                Boundary-snapping PDF chunks at natural concept breaks.
              </p>
            </div>

            <StepDivider active />

            {/* Step 2: Sovereign Reading */}
            <div
              className={cx(
                "flex-1 rounded-xl border-2 p-4 flex flex-col gap-2 transition-all duration-300",
                readHighlight
                  ? "bg-amber-500/10 border-amber-400 shadow-md shadow-amber-500/10"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-white/10"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cx(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                      readHighlight ? "bg-amber-500/20" : "bg-emerald-500/10"
                    )}
                  >
                    <BookOpen
                      className={cx(
                        "w-4 h-4 transition-colors",
                        readHighlight ? "text-amber-500" : "text-emerald-500"
                      )}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                    02 Sovereign Reading
                  </span>
                </div>
                {readHighlight ? (
                  <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    ↩ Re-read Loop
                  </span>
                ) : (
                  <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Self-Paced
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {readHighlight
                  ? "Targeted Re-read Active — missing concepts re-queued."
                  : "User-paced reading with zero artificial timers."}
              </p>
            </div>

            <StepDivider active />

            {/* Step 3: Quiz Gate */}
            <div
              className={cx(
                "flex-1 rounded-xl border-2 p-4 flex flex-col gap-2 transition-all duration-300",
                isPass
                  ? "bg-emerald-500/10 border-emerald-400 shadow-md shadow-emerald-500/10"
                  : isStrike1
                  ? "bg-amber-500/10 border-amber-400 shadow-md shadow-amber-500/10"
                  : isStrike2
                  ? "bg-rose-500/10 border-rose-400 shadow-md shadow-rose-500/10"
                  : "bg-indigo-500/10 border-indigo-400 shadow-md shadow-indigo-500/10"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cx(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                      isPass
                        ? "bg-emerald-500/20"
                        : isStrike1
                        ? "bg-amber-500/20"
                        : isStrike2
                        ? "bg-rose-500/20"
                        : "bg-indigo-500/20"
                    )}
                  >
                    <HelpCircle
                      className={cx(
                        "w-4 h-4",
                        isPass
                          ? "text-emerald-500"
                          : isStrike1
                          ? "text-amber-500"
                          : isStrike2
                          ? "text-rose-500"
                          : "text-indigo-500"
                      )}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                    03 Quiz Gate
                  </span>
                </div>
                <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  3-5 MCQs
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-200/70 dark:border-white/[0.06]">
                <div
                  className={cx(
                    "rounded-lg py-1.5 px-2 text-center font-mono text-[10px] font-bold transition-all",
                    isPass
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-100 dark:bg-black/30 text-slate-400"
                  )}
                >
                  ≥85% PASS
                </div>
                <div
                  className={cx(
                    "rounded-lg py-1.5 px-2 text-center font-mono text-[10px] font-bold transition-all",
                    isFail
                      ? "bg-rose-500 text-white"
                      : "bg-slate-100 dark:bg-black/30 text-slate-400"
                  )}
                >
                  &lt;85% FAIL
                </div>
              </div>
            </div>
          </div>

          {/* ── Bridge: Quiz Gate → Outcome ── */}
          <div className="flex flex-col items-center my-1">
            {/* Vertical tick */}
            <div className="w-px h-4 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500" />
            {/* Label pill */}
            <div
              className={cx(
                "flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono font-semibold transition-all duration-300",
                isPass
                  ? "bg-emerald-500/10 border-emerald-400/50 text-emerald-600 dark:text-emerald-400"
                  : isStrike1
                  ? "bg-amber-500/10 border-amber-400/50 text-amber-600 dark:text-amber-400"
                  : isStrike2
                  ? "bg-rose-500/10 border-rose-400/50 text-rose-600 dark:text-rose-400"
                  : "bg-indigo-500/10 border-indigo-400/50 text-indigo-600 dark:text-indigo-400"
              )}
            >
              <HelpCircle className="w-3 h-3" />
              <span>
                Quiz Gate →{" "}
                {isPass && "Pass route"}
                {isStrike1 && "Strike 1 route"}
                {isStrike2 && (trackMode === "classical" ? "Strike 2 route" : "Fast-track fail route")}
                {isUnblock && "Graceful Unblock route"}
              </span>
            </div>
            {/* Second tick */}
            <div className="w-px h-4 bg-gradient-to-b from-slate-400 to-slate-300 dark:from-slate-500 dark:to-slate-600" />
          </div>

          {/* Row 2: Outcome branch cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

            {/* Outcome A: Pass */}
            <OutcomeCard
              active={isPass}
              color="emerald"
              icon={<Trophy className="w-4 h-4" />}
              label="Pass: Retention"
              badge="Unlocked"
              description="FSRS-4 Spaced Decay + 10th Milestone Aggregate Exam."
            />

            {/* Outcome B: Strike 1 */}
            {trackMode === "classical" ? (
              <OutcomeCard
                active={isStrike1}
                color="amber"
                icon={<RotateCcw className="w-4 h-4" />}
                label="Strike 1: Targeted Re-Read"
                badge="Loops Back ↩"
                description="Missing concepts re-queued for a focused re-read pass."
              />
            ) : (
              <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-white/10 p-4 flex flex-col items-center justify-center gap-1.5 opacity-40">
                <Zap className="w-4 h-4 text-rose-400" />
                <span className="text-[10px] font-mono text-slate-500 text-center leading-snug">
                  Strike 1 Bypassed
                  <br />
                  (Fast Track)
                </span>
              </div>
            )}

            {/* Outcome C: Socratic Rescue */}
            <div
              className={cx(
                "rounded-xl border-2 p-4 flex flex-col gap-2 transition-all duration-300",
                isStrike2
                  ? "bg-rose-500/10 border-rose-400 shadow-lg shadow-rose-500/10"
                  : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-white/[0.06] opacity-50"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className={cx(
                      "w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center",
                      isStrike2
                        ? "bg-rose-500/20 text-rose-500"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-400"
                    )}
                  >
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <span
                    className={cx(
                      "text-[11px] font-mono font-bold leading-tight",
                      isStrike2
                        ? "text-rose-700 dark:text-rose-300"
                        : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {trackMode === "classical"
                      ? "Strike 2: Socratic Rescue"
                      : "Fail: Socratic Rescue"}
                  </span>
                </div>
                <span
                  className={cx(
                    "flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold",
                    isStrike2
                      ? "bg-rose-500/20 text-rose-700 dark:text-rose-300"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                  )}
                >
                  AI Tutor
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug flex-1">
                Socratic AI dialogue — probes root cause until the gap surfaces.
              </p>
              <button
                onClick={onOpenSocraticDemo}
                disabled={!isStrike2}
                className={cx(
                  "mt-auto w-full py-1.5 px-2 rounded-lg font-mono text-[10px] font-semibold flex items-center justify-center gap-1.5 transition-all",
                  isStrike2
                    ? "bg-rose-600 hover:bg-rose-500 text-white cursor-pointer"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                )}
              >
                <MessageSquare className="w-3 h-3" />
                Launch Live Socratic Demo
              </button>
            </div>

            {/* Outcome D: Graceful Unblock */}
            <OutcomeCard
              active={isUnblock}
              color="indigo"
              icon={<Unlock className="w-4 h-4" />}
              label="Graceful Unblock"
              badge="Safe Exit"
              description={
                <span>
                  Flags{" "}
                  <code className="font-mono bg-indigo-500/10 px-1 rounded text-[9px]">
                    external_help_required
                  </code>{" "}
                  — unblocks queue, zero dead ends.
                </span>
              }
            />
          </div>

          {/* Status bar */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <span
              className={cx(
                "transition-all duration-300",
                isPass && "text-emerald-600 dark:text-emerald-400",
                isStrike1 && "text-amber-600 dark:text-amber-400",
                isStrike2 && "text-rose-600 dark:text-rose-400",
                isUnblock && "text-indigo-600 dark:text-indigo-400"
              )}
            >
              {isPass &&
                "✔ [PASS ≥85%]: FSRS-4 Spaced Decay activated — next chunk unlocked."}
              {isStrike1 &&
                "↩ [STRIKE 1]: Targeted re-read re-queued — loops back to Sovereign Reading."}
              {isStrike2 &&
                "⚡ [SOCRATIC ESCALATION]: AI Socratic rescue activated — root cause probing."}
              {isUnblock &&
                "🛡 [GRACEFUL UNBLOCK]: external_help_required flagged — queue unblocked, no infinite loops."}
            </span>
            <span className="text-[10px] text-slate-400">
              Deterministic Closed Loop
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
