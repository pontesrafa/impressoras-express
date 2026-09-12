import React from 'react';
import { Star, MessageSquare, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            Depoimentos de Quem Já Consertou Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            A opinião de quem confia na <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Impressoras Express</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Avaliações de clientes reais atendidos em diversos bairros de Campos dos Goytacazes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-lg shadow-slate-950"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{t.date}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · Bairro {t.neighborhood}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-full inline-block">
                    {t.printer}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-slate-300">
            Mais de <strong>2.500 impressoras atendidas</strong> com <strong>98% de satisfação</strong> em Campos dos Goytacazes e região.
          </span>
        </div>
      </div>
    </section>
  );
};
