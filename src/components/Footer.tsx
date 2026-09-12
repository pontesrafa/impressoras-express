import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Cloud
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';

interface FooterProps {
  onOpenCloudflareModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCloudflareModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-cropped.jpg"
              alt="Impressoras Express"
              className="w-9 h-9 object-contain rounded-xl bg-slate-900 border border-cyan-500/30 p-1"
            />
            <div>
              <span className="text-base font-bold text-white font-heading block">
                Impressoras Express
              </span>
              <span className="text-[11px] text-slate-400">
                Campos dos Goytacazes - RJ · Assistência Técnica Especializada
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#inicio" className="hover:text-cyan-400 transition">Início</a>
            <a href="#servicos" className="hover:text-cyan-400 transition">Serviços & Marcas</a>
            <a href="#coleta" className="hover:text-cyan-400 transition">Coleta & Garantia</a>
            <a href="#contato" className="hover:text-cyan-400 transition">Dúvidas & Contato</a>
            <button
              onClick={onOpenCloudflareModal}
              className="text-orange-400 hover:text-orange-300 transition flex items-center gap-1 font-semibold cursor-pointer"
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Publicar no Cloudflare Pages</span>
            </button>
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-2.5">
            <a
              href={COMPANY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500 text-slate-300 hover:text-pink-400 flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {currentYear} Impressoras Express · Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <span>90 Dias de Garantia</span>
            <span>·</span>
            <span>Coleta em toda Campos dos Goytacazes</span>
            <span>·</span>
            <span>Tel: {COMPANY_CONFIG.phoneFormatted}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
