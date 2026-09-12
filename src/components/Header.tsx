import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Cloud, 
  Clock, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';

interface HeaderProps {
  onOpenCloudflareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCloudflareModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços & Marcas', href: '#servicos' },
    { label: 'Coleta & Garantia', href: '#coleta' },
    { label: 'Dúvidas & Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-1.5 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Campos dos Goytacazes - RJ
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Seg-Sex: 8h às 18h | Sáb: 8h às 12h
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCloudflareModal}
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition text-[11px] font-semibold py-0.5 px-2 rounded bg-orange-500/10 border border-orange-500/20 cursor-pointer"
              title="Instruções para postar no Cloudflare Pages"
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Como Publicar no Cloudflare Pages</span>
            </button>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{COMPANY_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-2.5'
            : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-900 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img 
                src="/images/logo-cropped.jpg" 
                alt="Impressoras Express" 
                className="w-10 h-10 object-contain rounded-xl border border-cyan-500/30 bg-slate-900 p-1 shadow-md shadow-cyan-500/10 group-hover:border-cyan-400 transition"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950" title="Atendimento Ativo" />
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white font-heading">
                  Impressoras
                </span>
                <span className="text-lg sm:text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-heading">
                  Express
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-none">
                Assistência Especializada · Campos - RJ
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-2 text-sm text-slate-300 hover:text-cyan-400 border-b border-slate-900"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Orçamento no WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCloudflareModal();
                }}
                className="w-full py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>Instruções Cloudflare Pages</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
