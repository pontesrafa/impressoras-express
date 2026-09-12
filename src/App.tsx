import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompactServicesBrands } from './components/CompactServicesBrands';
import { CompactBenefits } from './components/CompactBenefits';
import { CompactFaqContact } from './components/CompactFaqContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CloudflareDeployModal } from './components/CloudflareDeployModal';

export default function App() {
  const [cloudflareModalOpen, setCloudflareModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenCloudflareModal={() => setCloudflareModalOpen(true)} />

      {/* Main Content Sections - Compact & Direct */}
      <main className="flex-1">
        {/* Hero + Instant WhatsApp Quote Tool */}
        <Hero />

        {/* Services & Brands - Scannable 4 core services + top models */}
        <CompactServicesBrands />

        {/* Benefits Bento - Pickup/Delivery in Campos, 90-day warranty & Special emergency hours */}
        <CompactBenefits />

        {/* Frequently Asked Questions + Direct WhatsApp / Instagram contact */}
        <CompactFaqContact />
      </main>

      {/* Footer */}
      <Footer onOpenCloudflareModal={() => setCloudflareModalOpen(true)} />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Cloudflare Pages Tutorial & Deployment Modal */}
      <CloudflareDeployModal
        isOpen={cloudflareModalOpen}
        onClose={() => setCloudflareModalOpen(false)}
      />
    </div>
  );
}
