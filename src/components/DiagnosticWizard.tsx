import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  RotateCcw, 
  Clock, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  HelpCircle,
  Printer,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { BRANDS, DIAGNOSTIC_SYMPTOMS, COMPANY_CONFIG } from '../data/companyData';

export const DiagnosticWizard: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('epson');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('falha-impressao');
  const [modelName, setModelName] = useState<string>('');
  const [needsPickup, setNeedsPickup] = useState<boolean>(true);
  const [neighborhood, setNeighborhood] = useState<string>('Pelinca');
  const [customNotes, setCustomNotes] = useState<string>('');

  const currentSymptom = DIAGNOSTIC_SYMPTOMS.find(s => s.id === selectedSymptom) || DIAGNOSTIC_SYMPTOMS[0];
  const brandObj = BRANDS.find(b => b.id === selectedBrand);
  const brandLabel = brandObj ? brandObj.name : 'Outra Marca';

  const handleGenerateWhatsApp = () => {
    let msg = `Olá! Fiz o diagnóstico interativo pelo site da Impressoras Express.\n\n`;
    msg += `🖨️ *Marca/Linha:* ${brandLabel}\n`;
    if (modelName.trim()) {
      msg += `📌 *Modelo da impressora:* ${modelName.trim()}\n`;
    }
    msg += `⚠️ *Problema identificado:* ${currentSymptom.label}\n`;
    msg += `📝 *Sintoma:* ${currentSymptom.desc}\n`;
    if (customNotes.trim()) {
      msg += `💬 *Detalhes adicionais:* ${customNotes.trim()}\n`;
    }
    msg += `🛵 *Precisa de Coleta em Domicílio:* ${needsPickup ? `Sim (Bairro: ${neighborhood})` : 'Não, levo na assistência'}\n\n`;
    msg += `Gostaria de confirmar o diagnóstico e agendar o atendimento!`;

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSelectedBrand('epson');
    setSelectedSymptom('falha-impressao');
    setModelName('');
    setNeedsPickup(true);
    setNeighborhood('Pelinca');
    setCustomNotes('');
  };

  return (
    <section id="diagnostico" className="py-20 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-cyan-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Simulador de Diagnóstico Online
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Descubra o defeito da sua impressora em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">menos de 1 minuto</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Selecione a marca e os sintomas. Nosso sistema identifica a causa provável e já calcula o prazo de reparo com garantia de 90 dias em Campos dos Goytacazes.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Side (Left - 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-7">
            {/* Step 1: Brand */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Qual é a marca ou linha da impressora?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'epson', name: 'Epson EcoTank', sub: 'L3250, L3150...' },
                  { id: 'hp', name: 'HP Ink / Laser', sub: '415, DeskJet...' },
                  { id: 'canon', name: 'Canon MegaTank', sub: 'G3100, G3160...' },
                  { id: 'brother', name: 'Brother / Outra', sub: 'Laser / Jato' }
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBrand(b.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                      selectedBrand === b.id
                        ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{b.name}</span>
                      {selectedBrand === b.id && (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1 leading-tight">{b.sub}</span>
                  </button>
                ))}
              </div>

              {/* Model input optional */}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Sabe o modelo exato? Ex: Epson L3250, HP 415, Canon G3110 (Opcional)"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            {/* Step 2: Symptom */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                2. O que está acontecendo com ela?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DIAGNOSTIC_SYMPTOMS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSymptom(s.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedSymptom === s.id
                        ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-semibold text-sm leading-snug">{s.label}</span>
                      {selectedSymptom === s.id ? (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {s.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Pickup & Delivery */}
            <div className="pt-2 border-t border-slate-800/80">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                3. Você precisa que a gente busque na sua porta?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setNeedsPickup(true)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    needsPickup
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${needsPickup ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block text-white">Sim, buscar no meu endereço</span>
                    <span className="text-xs text-slate-400">Coleta e entrega em Campos</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedsPickup(false)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    !needsPickup
                      ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-md ring-1 ring-cyan-400'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${!needsPickup ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm block text-white">Não, vou levar na oficina</span>
                    <span className="text-xs text-slate-400">Entregar pessoalmente</span>
                  </div>
                </button>
              </div>

              {/* Neighborhood select if pickup selected */}
              {needsPickup && (
                <div className="mt-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs font-medium text-slate-300 shrink-0">Qual o seu bairro em Campos?</span>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                  >
                    {[
                      'Pelinca', 'Flamboyant', 'Parque Tamandaré', 'Centro', 'Turfe Clube',
                      'Parque São Caetano', 'Guarus', 'Jardim Carioca', 'Parque Leopoldina',
                      'Parque Santo Antônio', 'Parque Aurora', 'Goytacazes', 'Donana', 'Outro bairro em Campos'
                    ].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Observações extras (Opcional)
              </label>
              <textarea
                rows={2}
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ex: Já fiz limpeza de cabeçote pelo computador 3x e não resolveu..."
                className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          {/* Diagnosis Result Card (Right - 5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Pré-Diagnóstico Concluído
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 transition"
                  title="Reiniciar simulador"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reiniciar
                </button>
              </div>

              {/* Equipment Summary */}
              <div className="mt-5 space-y-4">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Equipamento Selecionado
                  </span>
                  <div className="text-lg font-bold text-white mt-0.5 font-heading">
                    {brandLabel} {modelName ? `— ${modelName}` : ''}
                  </div>
                  <div className="mt-2 text-xs text-cyan-300 flex items-center gap-1.5 font-medium">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Problema: {currentSymptom.label}</span>
                  </div>
                </div>

                {/* Likely Cause */}
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 space-y-1.5">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-cyan-400" />
                    Causa Mais Provável Identificada:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentSymptom.likelyCause}
                  </p>
                </div>

                {/* Benefits / Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Prazo Médio</span>
                      <span className="text-xs font-bold text-white">{currentSymptom.estimatedTime}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Garantia</span>
                      <span className="text-xs font-bold text-white">90 Dias Oficial</span>
                    </div>
                  </div>
                </div>

                {/* Delivery reminder */}
                {needsPickup && (
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-center gap-2.5 text-xs text-emerald-300">
                    <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Coleta e entrega agendadas para o bairro <strong>{neighborhood}</strong>.</span>
                  </div>
                )}

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleGenerateWhatsApp}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Diagnóstico no WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Sem custo pelo diagnóstico. Resposta ágil no WhatsApp da Impressoras Express.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
