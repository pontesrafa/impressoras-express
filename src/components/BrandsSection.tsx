import React, { useState } from 'react';
import { Search, CheckCircle2, MessageCircle, Sparkles, Printer, ArrowRight } from 'lucide-react';
import { BRANDS, getWhatsAppLink } from '../data/companyData';

export const BrandsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = BRANDS.map(b => {
    if (!searchTerm.trim()) return { ...b, matchesModel: false, matchedModels: [] };
    const term = searchTerm.toLowerCase();
    const matched = b.popularModels.filter(m => m.toLowerCase().includes(term));
    const matchesBrand = b.name.toLowerCase().includes(term);
    return {
      ...b,
      matchesModel: matched.length > 0 || matchesBrand,
      matchedModels: matched
    };
  });

  return (
    <section id="marcas" className="py-20 bg-slate-900/50 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Printer className="w-3.5 h-3.5" />
            Marcas & Modelos Atendidos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Trabalhamos com as <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">principais marcas</span> do Brasil
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Somos especialistas nas linhas Epson EcoTank e HP — as impressoras mais utilizadas em residências e empresas de Campos dos Goytacazes.
          </p>

          {/* Quick Model Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Busque seu modelo (ex: L3250, L3150, 415, G3110...)"
                className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 hover:border-cyan-500 focus:border-cyan-400 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none shadow-lg transition"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md"
                >
                  Limpar
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="text-xs text-cyan-400 mt-2">
                Filtrando modelos compatíveis para "{searchTerm}"...
              </p>
            )}
          </div>
        </div>

        {/* Featured Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredBrands.map((brand) => (
            <div
              key={brand.id}
              className={`bg-slate-900 border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                searchTerm && brand.matchesModel
                  ? 'border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-md font-heading"
                      style={{ backgroundColor: brand.accentColor }}
                    >
                      {brand.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {brand.name}
                      </h3>
                      <span className="text-xs text-cyan-400 font-semibold">{brand.badge}</span>
                    </div>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    Garantia 90 Dias
                  </span>
                </div>

                {/* Common Models Pills */}
                <div className="my-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                    Modelos Frequentes em Nossa Bancada:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {brand.popularModels.map((model) => {
                      const isMatched = searchTerm && model.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <span
                          key={model}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium transition ${
                            isMatched
                              ? 'bg-cyan-500 text-slate-950 font-bold scale-105'
                              : 'bg-slate-950 text-slate-300 border border-slate-800'
                          }`}
                        >
                          {model}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Common Services */}
                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Principais Reparos Feitos Nesta Linha:
                  </span>
                  <ul className="space-y-2">
                    {brand.commonServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Brand CTA */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href={getWhatsAppLink(`Olá! Tenho uma impressora da linha *${brand.name}* e gostaria de solicitar um orçamento para conserto.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-slate-700 hover:border-transparent transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar sobre minha {brand.name} no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Brands Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Também consertamos e fornecemos suprimentos para impressoras <strong className="text-white">Samsung</strong>, <strong className="text-white">Lexmark</strong>, <strong className="text-white">Xerox</strong> e <strong className="text-white">Ricoh</strong>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            {['Samsung', 'Lexmark', 'Xerox', 'Ricoh', 'Pantum', 'Kyocera'].map((b) => (
              <span key={b} className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
