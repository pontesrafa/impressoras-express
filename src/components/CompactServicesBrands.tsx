import React, { useState } from 'react';
import { 
  Wrench, 
  RefreshCw, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Printer, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { getWhatsAppLink } from '../data/companyData';

export const CompactServicesBrands: React.FC = () => {
  const [modelFilter, setModelFilter] = useState('');

  const services = [
    {
      title: 'Reset de Almofadas (Waste Ink)',
      desc: 'Luzes piscando alternadas ou erro E-11 / almofada no fim da vida útil. Fazemos o reset do contador e limpeza ou troca do absorvedor.',
      highlight: 'Resolvido no mesmo dia',
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      tag: 'Mais Procurado'
    },
    {
      title: 'Desentupimento de Cabeçote',
      desc: 'Falhas nas cores, riscos brancos horizontais ou páginas em branco. Limpeza química profunda por ultrassom e recuperação do fluxo de tinta.',
      highlight: 'Economize sem trocar a cabeça',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      tag: 'Alta Eficácia'
    },
    {
      title: 'Tracionador & Puxador de Papel',
      desc: 'Impressora puxa várias folhas de uma vez, engasga o papel ou faz barulho forte de engrenagem ao tentar puxar.',
      highlight: 'Troca de roletes originais',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      tag: 'Peças Originais'
    },
    {
      title: 'Reparo de Placa Lógica & Geral',
      desc: 'Equipamento que não liga, queima de fonte, curto-circuito, mensagens de erro fatal e substituição de sensores e correias.',
      highlight: 'Garantia de 90 dias',
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      tag: 'Eletrônica Avançada'
    }
  ];

  const popularBrands = [
    {
      name: 'Epson EcoTank',
      models: ['L3250', 'L3150', 'L4260', 'L3110', 'L4160', 'L1800'],
      color: 'border-blue-500/40 bg-blue-950/20 text-blue-300'
    },
    {
      name: 'HP Ink Tank & DeskJet',
      models: ['Ink Tank 415', '416', '515', 'Smart Tank', 'DeskJet 2776'],
      color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300'
    },
    {
      name: 'Canon MegaTank',
      models: ['G3110', 'G3100', 'G3111', 'G4110', 'G6010'],
      color: 'border-red-500/40 bg-red-950/20 text-red-300'
    },
    {
      name: 'Brother & Laser',
      models: ['DCP-T420W', 'T520W', 'Laser Brother', 'Samsung', 'Lexmark'],
      color: 'border-amber-500/40 bg-amber-950/20 text-amber-300'
    }
  ];

  return (
    <section id="servicos" className="py-12 bg-slate-900/50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              Serviços & Marcas Atendidas
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              O que consertamos com mais rapidez
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Diagnóstico técnico preciso, orçamento transparente antes de qualquer serviço e peças de qualidade.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre manutenção na minha impressora.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition shrink-0"
          >
            <span>Dúvidas? Chame no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/40 transition">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-400">
                  {srv.highlight}
                </span>
                <a
                  href={getWhatsAppLink(`Olá! Preciso de conserto para: *${srv.title}*.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition"
                  title="Consultar no WhatsApp"
                  aria-label={`Consultar ${srv.title}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Brands & Models Strip */}
        <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Printer className="w-4 h-4 text-cyan-400" />
              Principais Modelos que Atendemos em Campos dos Goytacazes:
            </span>
            <span className="text-[11px] text-slate-400">
              Garantia oficial de 90 dias em peças e mão de obra
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {popularBrands.map((b) => (
              <div
                key={b.name}
                className={`p-3 rounded-xl border ${b.color}`}
              >
                <strong className="text-xs font-bold block mb-1">
                  {b.name}
                </strong>
                <div className="flex flex-wrap gap-1">
                  {b.models.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-900/90 text-slate-200 border border-slate-700/60"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
