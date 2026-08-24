import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Check, 
  Copy, 
  HardDrive, 
  ShieldCheck, 
  Terminal, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);

  if (!isOpen) return null;

  const shaHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleStartDownload = () => {
    setDownloadStarted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0F172A', '#0EA5E9', '#10B981'],
    });
  };

  const handleCopySha = () => {
    navigator.clipboard.writeText(shaHash);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0F172A] border border-white/15 shadow-2xl text-slate-200 overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-slate-950 flex items-center justify-center shadow-sm">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">
                Download StudyLoop for Windows
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                v1.0.0 Desktop Installer (64-bit x64)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-xs font-sans">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">File:</span>
              <span className="text-white font-bold">StudyLoop-Setup-1.0.0.exe</span>
            </div>
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Size:</span>
              <span className="text-slate-300">~68.4 MB (Standalone Bundle)</span>
            </div>
            <div className="flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Compatibility:</span>
              <span className="text-emerald-400">Windows 10 / Windows 11 (x64)</span>
            </div>
          </div>

          {/* Quick 3-Step Setup */}
          <div className="space-y-2.5">
            <h5 className="font-mono text-[11px] font-bold uppercase text-slate-400">Quick 3-Step Onboarding</h5>
            <div className="space-y-2 text-[11px] text-slate-300">
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">1</span>
                <span>Run the installer. Zero mandatory online account creation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">2</span>
                <span>Drop any PDF textbook or course slides into your local library.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-700 text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">3</span>
                <span>Add your free Google Gemini API key or connect to local Ollama.</span>
              </div>
            </div>
          </div>

          {/* SHA256 Verification */}
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>SHA-256 Checksum:</span>
              <button
                onClick={handleCopySha}
                className="text-slate-300 hover:text-white flex items-center gap-1"
              >
                {copiedSha ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSha ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
            <p className="font-mono text-[10px] text-slate-500 truncate select-all">
              {shaHash}
            </p>
          </div>

          {/* Download Action */}
          <div className="space-y-3 pt-2">
            {!downloadStarted ? (
              <button
                onClick={handleStartDownload}
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Download className="w-4 h-4" />
                <span>Download Installer (.exe)</span>
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-2 animate-fade-in">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xs">
                  <Check className="w-4 h-4" />
                  <span>Download Initiated!</span>
                </div>
                <p className="text-[11px] text-emerald-200/90 font-sans">
                  Your browser is downloading StudyLoop-Setup-1.0.0.exe. Open the file to launch your local study environment.
                </p>
              </div>
            )}

            <a
              href="https://github.com/Vishnuj-n/studyloop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 font-mono text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
