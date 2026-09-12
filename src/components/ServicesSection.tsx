import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  RefreshCw, 
  Droplets, 
  Truck, 
  Layers, 
  Check, 
  Clock, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SERVICES, ServiceItem, getWhatsAppLink } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            Nossos Serviços Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Soluções completas para qualquer defeito em sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">impressora</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Diagnóstico com precisão técnica em bancada equipada. Usamos peças originais, ferramentas de alta precisão e garantimos cada conserto.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 group"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-start justify-between gap-2 mb-5">
                  <div className="p-3.5 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {service.highlightBadge ? (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {service.highlightBadge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.turnaround}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.fullDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Olá! Tenho interesse no serviço de *${service.title}* para minha impressora.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700/80 hover:border-transparent transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Agendar no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate & Monthly Maintenance Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Contratos para Empresas & Escritórios
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Sua empresa imprime todos os dias e não pode ficar parada?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Oferecemos atendimento prioritário, emissão de Nota Fiscal (PJ), manutenção preventiva periódica e reposição rápida de suprimentos para escritórios em Campos dos Goytacazes.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de informações sobre contrato corporativo / atendimento para minha empresa em Campos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar com Técnico PJ</span>
          </a>
        </div>
      </div>
    </section>
  );
};
