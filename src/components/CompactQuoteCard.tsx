import React, { useState } from 'react';
import { MessageCircle, Check, Truck, Sparkles, Send } from 'lucide-react';
import { COMPANY_CONFIG, NEIGHBORHOODS_CAMPOS } from '../data/companyData';

export const CompactQuoteCard: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('Epson');
  const [selectedIssue, setSelectedIssue] = useState('Falha na impressão / riscado');
  const [model, setModel] = useState('');
  const [needsPickup, setNeedsPickup] = useState(true);
  const [neighborhood, setNeighborhood] = useState('Pelinca');

  const brands = ['Epson', 'HP', 'Canon', 'Brother', 'Outra'];
  const commonIssues = [
    'Falha na impressão / riscado',
    'Almofadas cheias / Luzes piscando',
    'Papel atolando / Não puxa',
    'Não liga / Erro geral',
    'Outro defeito'
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Olá! Gostaria de um orçamento rápido para conserto de impressora:\n\n` +
      `🖨️ *Marca:* ${selectedBrand}\n` +
      (model.trim() ? `📌 *Modelo:* ${model.trim()}\n` : '') +
      `⚠️ *Problema:* ${selectedIssue}\n` +
      `🛵 *Coleta em domicílio:* ${needsPickup ? `Sim (Bairro: ${neighborhood})` : 'Não, levo na loja'}\n\n` +
      `Pode me passar a estimativa de valor e prazo?`;

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-2xl shadow-slate-950 backdrop-blur-sm">
      {/* Top Tag */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Orçamento Imediato no WhatsApp
          </span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
          Resposta Rápida
        </span>
      </div>

      <form onSubmit={handleSendWhatsApp} className="space-y-4">
        {/* Step 1: Select Brand */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            1. Marca da sua impressora:
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {brands.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBrand(b)}
                className={`py-1.5 text-xs font-bold rounded-xl border transition text-center ${
                  selectedBrand === b
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Issue */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            2. O que está acontecendo?
          </label>
          <select
            value={selectedIssue}
            onChange={(e) => setSelectedIssue(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition"
          >
            {commonIssues.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
        </div>

        {/* Step 3: Model (Optional) */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            3. Modelo da máquina <span className="text-slate-500 font-normal">(opcional)</span>:
          </label>
          <input
            type="text"
            placeholder="Ex: Epson L3250, HP 415, Canon G3110..."
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
        </div>

        {/* Step 4: Pickup checkbox */}
        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={needsPickup}
              onChange={(e) => setNeedsPickup(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-slate-700"
            />
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Desejo coleta e entrega em Campos dos Goytacazes
            </span>
          </label>

          {needsPickup && (
            <div className="flex items-center gap-2 pt-1 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400 shrink-0">Seu Bairro:</span>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                {NEIGHBORHOODS_CAMPOS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white text-transparent" />
          <span>Pedir Orçamento no WhatsApp</span>
        </button>

        <p className="text-[11px] text-slate-400 text-center">
          Atendimento direto com técnico · Sem compromisso
        </p>
      </form>
    </div>
  );
};
