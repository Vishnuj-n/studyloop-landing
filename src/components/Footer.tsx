import React from 'react';
import { Cpu, Download, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="border-t border-white/[0.08] dark:border-white/[0.08] border-slate-200 bg-white dark:bg-[#070A10] text-slate-400 text-xs py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 shadow-sm">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Study<span className="text-slate-500 dark:text-slate-400">Loop</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              The anti-chatbot study queue for serious learners. Engineered with local-first vector search, deterministic cognitive prioritization, and 2-strike Socratic concept rescue.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Local-First Sovereign · Zero Telemetry on Textbooks</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-mono text-[11px] font-bold uppercase text-slate-900 dark:text-white tracking-wider">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-slate-900 dark:hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#closed-loop-engine" className="hover:text-slate-900 dark:hover:text-white transition-colors">Closed-Loop Engine</a></li>
              <li><a href="#priority-queue" className="hover:text-slate-900 dark:hover:text-white transition-colors">8-Tier Queue</a></li>
              <li><a href="#byok-privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">BYOK Privacy</a></li>
              <li><a href="#extensions" className="hover:text-slate-900 dark:hover:text-white transition-colors">Extensions</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Architecture & Open Source */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-mono text-[11px] font-bold uppercase text-slate-900 dark:text-white tracking-wider">
              Ecosystem
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/Vishnuj-n/studyloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><span className="text-slate-500">ONNX Runtime</span></li>
              <li><span className="text-slate-500">FSRS-4 Scheduler</span></li>
              <li><span className="text-slate-500">PyMuPDF Chunker</span></li>
              <li><span className="text-slate-500">Microsoft Edge TTS</span></li>
            </ul>
          </div>

          {/* Download Action */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-[11px] font-bold uppercase text-slate-900 dark:text-white tracking-wider">
              Desktop Binary
            </h5>
            <p className="text-[11px] text-slate-500">
              Download standalone executable for Windows (x64). Free community edition.
            </p>
            <button
              onClick={onOpenDownload}
              className="w-full py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download for Windows</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} StudyLoop. Engineered for focused, sovereign learners.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vishnuj-n/studyloop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>Vishnuj-n/studyloop</span>
            </a>
            <span>·</span>
            <span>Zero Cloud Markups</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
