import React from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Star, 
  Wrench, 
  Phone, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';
import { CompactQuoteCard } from './CompactQuoteCard';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Direct Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Campos dos Goytacazes - RJ e Região</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Conserto de Impressoras{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                sem complicação
              </span>{' '}
              e com garantia de 90 dias.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Especialistas em <strong>Epson EcoTank</strong>, <strong>HP Ink Tank</strong>, <strong>Canon</strong> e <strong>Laser</strong>. Resolvemos falhas de impressão, erros de almofadas (luzes piscando), papel preso e placas lógicas.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Impressoras Express e gostaria de solicitar um orçamento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href="tel:5522992862292"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{COMPANY_CONFIG.phoneFormatted}</span>
              </a>
            </div>

            {/* 4 Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-800/80 text-left">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-400 font-bold text-xs sm:text-sm font-heading">10+ Anos</div>
                <div className="text-[11px] text-slate-400">De Experiência</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-emerald-400 font-bold text-xs sm:text-sm font-heading">90 Dias</div>
                <div className="text-[11px] text-slate-400">Garantia Total</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-amber-400 font-bold text-xs sm:text-sm font-heading">Até 24h</div>
                <div className="text-[11px] text-slate-400">Diagnóstico Rápido</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-teal-400 font-bold text-xs sm:text-sm font-heading">Coleta & Entrega</div>
                <div className="text-[11px] text-slate-400">Em toda Campos</div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Fast Quote Card (5 cols) */}
          <div className="lg:col-span-5">
            <CompactQuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
};
