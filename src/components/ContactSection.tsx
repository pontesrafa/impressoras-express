import React, { useState } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock, 
  Moon, 
  Send, 
  CheckCircle2,
  Truck
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink, NEIGHBORHOODS_CAMPOS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    modelo: '',
    bairro: 'Pelinca',
    precisaColeta: true,
    problema: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.telefone.trim() || !formData.problema.trim()) {
      setError('Por favor, preencha nome, telefone/WhatsApp e descreva o problema.');
      return;
    }
    setError('');
    setSubmitting(true);

    const message = 
      `Olá! Vim pelo site da Impressoras Express.\n\n` +
      `👤 *Nome:* ${formData.nome.trim()}\n` +
      `📱 *Telefone:* ${formData.telefone.trim()}\n` +
      `🖨️ *Modelo da impressora:* ${formData.modelo.trim() || 'Não informado'}\n` +
      `🛵 *Coleta em domicílio:* ${formData.precisaColeta ? `Sim (Bairro: ${formData.bairro})` : 'Não, levo na loja'}\n\n` +
      `⚠️ *Problema:* ${formData.problema.trim()}`;

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contato" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              Fale com a Gente
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">resolver</span> sua impressora?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Entre em contato conosco agora. Respondemos rapidamente em horário comercial e agendamos a coleta no seu endereço em Campos dos Goytacazes.
            </p>

            {/* Channels */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 flex items-center gap-4 transition group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition">
                  <MessageCircle className="w-5 h-5 fill-emerald-400 text-transparent" />
                </div>
                <div>
                  <strong className="text-xs text-slate-400 uppercase tracking-wider block">WhatsApp Oficial</strong>
                  <span className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                    {COMPANY_CONFIG.phoneFormatted}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500 flex items-center gap-4 transition group"
              >
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-105 transition">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs text-slate-400 uppercase tracking-wider block">Instagram</strong>
                  <span className="text-base font-bold text-white group-hover:text-pink-300 transition">
                    {COMPANY_CONFIG.instagram}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs text-slate-400 uppercase tracking-wider block">Localização</strong>
                  <span className="text-sm font-semibold text-white">
                    Campos dos Goytacazes - RJ (Coleta & Entrega)
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs text-slate-400 uppercase tracking-wider block">Horário Comercial</strong>
                  <span className="text-xs sm:text-sm text-slate-200 block">
                    Seg a Sex: 8h às 18h · Sáb: 8h às 12h
                  </span>
                </div>
              </div>

              {/* Special night & emergency schedule banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-indigo-500/30 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 shrink-0">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    Atendimento em Horários Especiais
                  </strong>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Precisa de manutenção fora do horário comercial? À noite, fim de semana ou feriado? Fale conosco no WhatsApp para agendamento prévio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-1">
              Envie sua mensagem rápida
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Ao clicar em enviar, sua mensagem será formatada e enviada diretamente para o nosso WhatsApp.
            </p>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-900/30 border border-red-500/40 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(22) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Modelo da impressora
                </label>
                <input
                  type="text"
                  placeholder="Ex: Epson L3250, HP Ink Tank 415, Canon G3110..."
                  value={formData.modelo}
                  onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Delivery preference */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    Deseja Coleta no seu endereço em Campos?
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, precisaColeta: true })}
                      className={`text-xs px-3 py-1 rounded-lg font-semibold transition ${
                        formData.precisaColeta
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      Sim, buscar
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, precisaColeta: false })}
                      className={`text-xs px-3 py-1 rounded-lg font-semibold transition ${
                        !formData.precisaColeta
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-white'
                      }`}
                    >
                      Não, vou levar
                    </button>
                  </div>
                </div>

                {formData.precisaColeta && (
                  <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
                    <span className="text-xs text-slate-400 shrink-0">Bairro em Campos:</span>
                    <select
                      value={formData.bairro}
                      onChange={(e) => setFormData({ ...formData, bairro: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      {NEIGHBORHOODS_CAMPOS.map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Conte o que está acontecendo com a impressora *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ex: Está imprimindo riscado, as cores estão falhando e faz um barulho quando puxa o papel..."
                  value={formData.problema}
                  onChange={(e) => setFormData({ ...formData, problema: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>{submitting ? 'Abrindo WhatsApp...' : 'Enviar Orçamento pelo WhatsApp'}</span>
              </button>

              <p className="text-center text-[11px] text-slate-400">
                Você será redirecionado para o WhatsApp com todos os dados preenchidos para envio imediato.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
