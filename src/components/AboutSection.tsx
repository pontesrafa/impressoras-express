import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  Users, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppLink } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-900/60 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column with Logo & Experience Badge (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden text-center">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />

              <div className="inline-block relative mb-4">
                <img
                  src="/images/logo-cropped.jpg"
                  alt="Impressoras Express"
                  className="w-32 h-32 object-contain mx-auto rounded-2xl bg-slate-900 p-2 border border-cyan-500/40 shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-full shadow-md font-heading">
                  10+ ANOS
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                Impressoras Express
              </h3>
              <p className="text-xs text-cyan-400 font-medium mt-1">
                {COMPANY_CONFIG.tagline}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Campos dos Goytacazes - RJ
              </p>

              {/* Stats Inside About Box */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800 text-left">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-xl font-bold text-cyan-400 font-heading">2.500+</div>
                  <div className="text-[11px] text-slate-400">Equipamentos Recuperados</div>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="text-xl font-bold text-emerald-400 font-heading">90 Dias</div>
                  <div className="text-[11px] text-slate-400">Garantia em Peças e Mão de Obra</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Differentiators (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Quem Somos & Nossa História
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
              Mais de uma década consertando impressoras com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                honestidade técnica
              </span>{' '}
              em Campos.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A <strong>Impressoras Express</strong> nasceu com um propósito claro: acabar com a dor de cabeça de quem precisa imprimir todo dia e se depara com a máquina travada, falhando ou com mensagens de erro confusas.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atendemos advogados, contadores, clínicas, escolas, comércios, estudantes e famílias em toda a região de Campos dos Goytacazes. Trabalhamos somente com peças certificadas, tintas de primeira linha e nunca trocamos peças sem real necessidade.
            </p>

            {/* Differentiator pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block">Técnicos Especialistas</strong>
                  <span className="text-xs text-slate-400">Treinamento constante nas tecnologias mais recentes de EcoTank e Laser.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block">Garantia Real de 90 Dias</strong>
                  <span className="text-xs text-slate-400">Se o mesmo defeito reaparecer dentro do prazo, você não paga nada a mais.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block">Diagnóstico em até 24h</strong>
                  <span className="text-xs text-slate-400">Você não fica semanas esperando para saber o que a impressora tem.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block">Peças Originais</strong>
                  <span className="text-xs text-slate-400">Suprimentos e componentes de alta durabilidade e procedência garantida.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá! Gostaria de conversar com um técnico da Impressoras Express.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar com nossa equipe no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
