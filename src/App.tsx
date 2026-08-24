import React, { useState } from 'react';
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

export const App: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [socraticModalOpen, setSocraticModalOpen] = useState(false);

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-[#F9FAFB] transition-colors selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-900">
      
      {/* Navigation Header */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
          onExplorePro={handleScrollToPricing}
        />

        {/* 2. Closed-Loop Engine Interactive Flowchart */}
        <FlowchartEngine
          onOpenSocraticDemo={() => setSocraticModalOpen(true)}
        />

        {/* 3. 8-Tier Cognitive Priority Queue Live Demo */}
        <PriorityQueueSimulator />

        {/* 4. Deep-Dive Feature Modules & Pillars */}
        <FeaturePillars
          onOpenSocraticDemo={() => setSocraticModalOpen(true)}
        />

        {/* 5. BYOK & Zero-Markup Architecture */}
        <ByokArchitecture />

        {/* 6. Pro Extensions Hub */}
        <ExtensionsHub />

        {/* 7. Transparent Pricing & Capability Matrix */}
        <PricingSection
          onOpenDownload={() => setDownloadModalOpen(true)}
        />

        {/* 8. Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

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
