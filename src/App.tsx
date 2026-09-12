import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompactServicesBrands } from './components/CompactServicesBrands';
import { CompactBenefits } from './components/CompactBenefits';
import { CompactFaqContact } from './components/CompactFaqContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections - Compact, Clean & Conversion-Focused */}
      <main className="flex-1">
        {/* Hero + Instant WhatsApp Quote Tool */}
        <Hero />

        {/* Services & Brands - Scannable 4 core services + top models */}
        <CompactServicesBrands />

        {/* Benefits - Pickup/Delivery in Campos, 90-day warranty & Special emergency hours */}
        <CompactBenefits />

        {/* Frequently Asked Questions + Direct WhatsApp / Instagram contact */}
        <CompactFaqContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
