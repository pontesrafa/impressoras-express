import React from 'react';
import { Truck, ShieldCheck, Clock, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import { NEIGHBORHOODS_CAMPOS, getWhatsAppLink } from '../data/companyData';

export const CompactBenefits: React.FC = () => {
  return (
    <section id="coleta" className="py-12 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Coleta em Domicílio */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  Em Domicílio
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-heading">
                Coleta & Entrega em Campos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Você não precisa carregar peso nem arriscar derramar tinta no seu carro. Retiramos e entregamos na sua casa ou empresa com segurança.
              </p>

              {/* Bairros */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  Bairros Atendidos:
                </span>
                <p className="text-xs text-slate-300 leading-snug">
                  Pelinca, Flamboyant, Centro, Tamandaré, Guarus, Pq. Califórnia, Turf Club e toda a região.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Olá! Gostaria de agendar a coleta da minha impressora no meu endereço em Campos dos Goytacazes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Agendar Coleta no WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Card 2: Garantia & Honestidade */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                  90 Dias
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-heading">
                Garantia Real & Diagnóstico Rápido
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Mais de 10 anos de atuação com honestidade técnica. Diagnóstico em até 24h e garantia total de 90 dias em todas as peças e serviços executados.
              </p>

              <ul className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sem trocas desnecessárias de peças</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Laudo e teste de impressão na entrega</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-xs font-semibold text-cyan-300">
                +2.500 impressoras recuperadas
              </span>
            </div>
          </div>

          {/* Card 3: Plantão & Horários Especiais */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20">
                  Agendamento Flexível
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-heading">
                Plantão & Horários Especiais
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Precisa de manutenção urgente fora do horário comercial? Atendemos emergências com agendamento prévio à noite, sábados e feriados.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 12h</p>
                <p className="text-amber-400 font-semibold text-[11px]">
                  Emergências: plantão via WhatsApp
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Olá! Preciso de atendimento em horário especial ou emergência.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar Plantão no WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
