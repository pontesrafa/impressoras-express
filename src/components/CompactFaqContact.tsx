import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';

export const CompactFaqContact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quickMsg, setQuickMsg] = useState('');
  const [userName, setUserName] = useState('');

  const faqs = [
    {
      q: 'Quanto tempo demora o diagnóstico e conserto?',
      a: 'O diagnóstico é realizado em até 24 horas. Serviços como Reset de Almofadas e desentupimentos simples costumam ser resolvidos no mesmo dia.'
    },
    {
      q: 'Como funciona a garantia de 90 dias?',
      a: 'Todos os nossos serviços e peças têm garantia oficial de 90 dias. Se o mesmo problema reaparecer dentro do prazo, corrigimos sem nenhum custo adicional.'
    },
    {
      q: 'Como funciona a coleta e entrega em domicílio?',
      a: 'Agendamos o melhor horário para retirar a impressora na sua residência ou empresa em Campos com transporte seguro para não vazar tinta. Após o conserto, devolvemos testada.'
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, cartões de crédito e débito. Para empresas e órgãos, também faturamos sob consulta.'
    }
  ];

  const handleSendQuickMsg = (e: React.FormEvent) => {
    e.preventDefault();
    const text = quickMsg.trim() || 'Olá! Gostaria de um orçamento para conserto de impressora.';
    const namePart = userName.trim() ? `Meu nome é *${userName.trim()}*.\n` : '';
    const fullMsg = `Olá! Vim pelo site da Impressoras Express.\n${namePart}${text}`;
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-12 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Top FAQs (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              Dúvidas Frequentes
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              Perguntas rápidas
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Tudo claro e direto para você economizar tempo e resolver seu equipamento.
            </p>

            {/* Accordions */}
            <div className="space-y-2.5 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-white hover:text-cyan-300 transition"
                    >
                      <span className="text-xs sm:text-sm font-bold font-heading">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2.5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Fast Contact & Channels (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Fale Direto com a Assistência
              </span>
              <h3 className="text-xl font-extrabold text-white font-heading">
                Entre em Contato Agora
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Atendimento rápido para tirar dúvidas ou agendar a retirada da impressora.
              </p>
            </div>

            {/* Direct Channel Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center gap-3 transition group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">WhatsApp Oficial</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition">
                    {COMPANY_CONFIG.phoneFormatted}
                  </span>
                </div>
              </a>

              <a
                href={COMPANY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center gap-3 transition group"
              >
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:scale-105 transition">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition">
                    {COMPANY_CONFIG.instagram}
                  </span>
                </div>
              </a>
            </div>

            {/* Hours & Location line */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                Campos dos Goytacazes - RJ
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Seg-Sex: 8h-18h · Sáb: 8h-12h
              </span>
            </div>

            {/* Quick message sender directly into WhatsApp */}
            <form onSubmit={handleSendQuickMsg} className="space-y-3 pt-1 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Seu nome (opcional)"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="text"
                  placeholder="Qual o defeito da impressora?"
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Dúvida pelo WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
