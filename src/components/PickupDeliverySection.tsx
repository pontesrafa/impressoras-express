import React from 'react';
import { 
  Truck, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Box, 
  ArrowRight 
} from 'lucide-react';
import { NEIGHBORHOODS_CAMPOS, getWhatsAppLink } from '../data/companyData';

export const PickupDeliverySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Chame no WhatsApp',
      desc: 'Informe o modelo e o que está acontecendo. Se puder, mande uma foto da falha de impressão ou das luzes piscando.',
      icon: <MessageCircle className="w-5 h-5 text-cyan-400" />
    },
    {
      num: '02',
      title: 'Coleta no seu Endereço',
      desc: 'Combinamos o melhor horário para retirar a impressora na sua casa ou empresa com proteção para não vazar tinta.',
      icon: <Truck className="w-5 h-5 text-emerald-400" />
    },
    {
      num: '03',
      title: 'Diagnóstico & Conserto',
      desc: 'Nossos técnicos analisam na bancada, enviamos o orçamento detalhado e, após sua aprovação, executamos o reparo.',
      icon: <Box className="w-5 h-5 text-amber-400" />
    },
    {
      num: '04',
      title: 'Entrega com Teste e Garantia',
      desc: 'Devolvemos sua máquina funcionando 100%, com laudo de teste e termo oficial de garantia de 90 dias.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />
    }
  ];

  return (
    <section id="coleta" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Delivery Highlights (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              Atendimento em Domicílio
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Você não precisa carregar peso.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                A gente vai até você.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Transportar impressora de tanque de tinta (EcoTank/Ink Tank) no carro sem cuidado pode derramar tinta e queimar a placa lógica. Nossa equipe faz o transporte seguro com travas adequadas e proteção completa.
            </p>

            {/* Neighborhoods pills */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  Bairros Atendidos em Campos dos Goytacazes:
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">Toda a cidade</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {NEIGHBORHOODS_CAMPOS.map((bairro) => (
                  <span
                    key={bairro}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

            {/* Security checklist */}
            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trava dos tanques e válvulas para impedir derramamento interno</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Horários flexíveis para combinar com a sua rotina ou expediente</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Comprovante de retirada imediato para total segurança do seu equipamento</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá! Gostaria de solicitar a coleta da minha impressora no meu endereço em Campos dos Goytacazes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Agendar Coleta no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Step-by-Step Flow (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-cyan-400 transition">
                  <span className="font-heading font-black text-base text-cyan-400">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h4>
                    <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
