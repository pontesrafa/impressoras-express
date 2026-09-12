import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-slate-900 border border-emerald-500/40 text-white text-xs p-3 rounded-2xl shadow-2xl max-w-xs animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full p-1 border border-slate-700 shadow"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <strong className="text-emerald-400 text-xs">Atendimento Online</strong>
          </div>
          <p className="text-slate-300 text-[11px] leading-snug">
            Sua impressora deu problema? Fale conosco no WhatsApp para tirar dúvidas ou agendar a coleta!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink('Olá! Vim pelo site da Impressoras Express e gostaria de ajuda com minha impressora.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-md group-hover:opacity-100 opacity-60 animate-pulse-subtle pointer-events-none" />
        <MessageCircle className="relative w-7 h-7 sm:w-8 sm:h-8 fill-white text-transparent" />
        
        {/* Unread badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 text-slate-950 font-black text-[10px] rounded-full flex items-center justify-center shadow">
          1
        </span>
      </a>
    </div>
  );
};
