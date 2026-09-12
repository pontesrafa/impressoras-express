import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['marcas', 'coleta', 'garantia']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/50 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Perguntas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">todo mundo faz</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Tudo o que você precisa saber sobre nosso atendimento, prazos, garantia e coleta.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-400 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help prompt */}
        <div className="mt-10 text-center p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
          <p className="text-sm text-slate-300">
            Tem alguma outra dúvida específica sobre sua impressora?
          </p>
          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida sobre manutenção de impressora que não encontrei no site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tirar Dúvida Direto no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
