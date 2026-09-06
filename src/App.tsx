import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from '@clerk/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlowchartEngine } from './components/FlowchartEngine';
import { PriorityQueueSimulator } from './components/PriorityQueueSimulator';
import { FeaturePillars } from './components/FeaturePillars';
import { ByokArchitecture } from './components/ByokArchitecture';
import { ExtensionsHub } from './components/ExtensionsHub';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SocraticRescueModal } from './components/SocraticRescueModal';
import { DownloadModal } from './components/DownloadModal';

import { ProblemAgitationSection } from './components/ProblemAgitationSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CinematicPauseSection } from './components/CinematicPauseSection';

const LandingPage: React.FC<{
  onOpenDownload: () => void;
  onOpenSocraticModal: () => void;
}> = ({ onOpenDownload, onOpenSocraticModal }) => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1">
      {/* 0. Hero Section (Micro-Commitment & Zero-Second Hook) */}
      <Hero
        onOpenDownload={onOpenDownload}
        onExplorePro={handleScrollToPricing}
      />

      {/* 1. Act 01: Problem Agitation & The Illusion of Competence */}
      <ProblemAgitationSection />

      {/* 2. Act 02: The Mechanism (Closed-Loop Engine Interactive Flowchart) */}
      <FlowchartEngine onOpenSocraticDemo={onOpenSocraticModal} />

      {/* 3. Act 03: Visual Evidence (Before/After Complexity Slider) */}
      <BeforeAfterSlider />

      {/* 4. 8-Tier Cognitive Priority Queue Live Demo */}
      <PriorityQueueSimulator />

      {/* 5. Strategic White Space & Pacing Pause Section */}
      <CinematicPauseSection />

      {/* 6. Deep-Dive Feature Modules & Pillars */}
      <FeaturePillars onOpenSocraticDemo={onOpenSocraticModal} />

      {/* 7. Act 04: BYOK & Sovereignty Architecture */}
      <ByokArchitecture />

      {/* 8. Pro Extensions Hub */}
      <ExtensionsHub />

      {/* 9. Act 05: Transparent Zero-Risk Pricing & Capability Matrix */}
      <PricingSection onOpenDownload={onOpenDownload} />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />
    </main>
  );
};

const LoginPage: React.FC = () => {
  return (
    <main className="flex-1 flex items-center justify-center py-20 px-4">
      <SignIn routing="path" path="/login" signUpUrl="/login" />
    </main>
  );
};

export const App: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [socraticModalOpen, setSocraticModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-[#F9FAFB] transition-colors selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-900">
      
      {/* Navigation Header */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onOpenDownload={() => setDownloadModalOpen(true)}
              onOpenSocraticModal={() => setSocraticModalOpen(true)}
            />
          }
        />
        <Route path="/login/*" element={<LoginPage />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Interactive Modals */}
      <SocraticRescueModal
        isOpen={socraticModalOpen}
        onClose={() => setSocraticModalOpen(false)}
      />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
};

export default App;

