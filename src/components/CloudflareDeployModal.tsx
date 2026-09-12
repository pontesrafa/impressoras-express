import React, { useState } from 'react';
import { Cloud, CheckCircle2, Copy, ExternalLink, X, Terminal, ArrowRight, Sparkles, FolderArchive, GitBranch } from 'lucide-react';

interface CloudflareDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareDeployModal: React.FC<CloudflareDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(id);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-6 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-heading">
                  Como Publicar no Cloudflare Pages
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                  100% Compatível
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Este projeto foi configurado para gerar um build estático ultra-rápido pronto para o Cloudflare Pages.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-slate-300 text-sm">
          {/* Quick specs box */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Configurações Principais para o Cloudflare Pages
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-500 block mb-1">Comando de Build (Build command):</span>
                <div className="flex items-center justify-between font-mono text-emerald-400 font-semibold bg-slate-950 px-2 py-1.5 rounded border border-slate-800">
                  <span>npm run build</span>
                  <button
                    onClick={() => handleCopy('npm run build', 'build')}
                    className="text-slate-400 hover:text-white"
                    title="Copiar"
                  >
                    {copiedTab === 'build' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-500 block mb-1">Pasta de Saída (Build output directory):</span>
                <div className="flex items-center justify-between font-mono text-cyan-400 font-semibold bg-slate-950 px-2 py-1.5 rounded border border-slate-800">
                  <span>dist</span>
                  <button
                    onClick={() => handleCopy('dist', 'dist')}
                    className="text-slate-400 hover:text-white"
                    title="Copiar"
                  >
                    {copiedTab === 'dist' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Método 1: GitHub / Git */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold border border-cyan-500/30">
                1
              </div>
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Método Recomendado: Conectar via GitHub / GitLab</span>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 ml-2 bg-slate-800/40 p-4 rounded-xl border border-slate-800">
              <li>Exporte ou sincronize este projeto no seu GitHub.</li>
              <li>Acesse o painel do <a href="https://dash.cloudflare.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300 inline-flex items-center gap-0.5">Cloudflare Dashboard <ExternalLink className="w-3 h-3" /></a> e vá em <strong>Workers & Pages</strong> &gt; <strong>Create application</strong> &gt; <strong>Pages</strong>.</li>
              <li>Clique em <strong>Connect to Git</strong> e selecione seu repositório.</li>
              <li>Em <strong>Framework preset</strong>, selecione <strong>Vite</strong>.</li>
              <li>Confirme:
                <ul className="list-disc list-inside ml-4 mt-1 text-slate-400 text-xs font-mono space-y-1">
                  <li>Build command: <span className="text-emerald-400">npm run build</span></li>
                  <li>Build output directory: <span className="text-cyan-400">dist</span></li>
                  <li>Root directory: <span className="text-slate-300">/</span> (deixar vazio)</li>
                </ul>
              </li>
              <li>Clique em <strong>Save and Deploy</strong>. O Cloudflare Pages vai compilar o site e publicá-lo em poucos segundos no seu domínio <code className="text-cyan-300">impressoras-express.pages.dev</code>!</li>
            </ol>
          </div>

          {/* Método 2: Upload Direto da pasta dist */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold border border-cyan-500/30">
                2
              </div>
              <FolderArchive className="w-4 h-4 text-orange-400" />
              <span>Método Rápido: Upload Direto (Sem Git)</span>
            </div>
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800 space-y-2">
              <p>Você pode rodar a compilação e arrastar os arquivos da pasta <code className="text-cyan-400 font-mono">dist</code> direto no painel do Cloudflare:</p>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
                <span>npm run build</span>
                <button
                  onClick={() => handleCopy('npm run build', 'cmd2')}
                  className="text-slate-400 hover:text-white"
                >
                  {copiedTab === 'cmd2' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-xs text-slate-400">
                Depois, no Cloudflare Pages, escolha <strong>Upload assets</strong> e arraste todo o conteúdo da pasta <code className="text-cyan-400">dist</code>. Pronto!
              </p>
            </div>
          </div>

          {/* Método 3: Wrangler CLI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold border border-cyan-500/30">
                3
              </div>
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Via Terminal (Wrangler CLI)</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400">npx wrangler pages deploy dist --project-name=impressoras-express</span>
                <button
                  onClick={() => handleCopy('npx wrangler pages deploy dist --project-name=impressoras-express', 'wrangler')}
                  className="text-slate-400 hover:text-white ml-2"
                >
                  {copiedTab === 'wrangler' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Site 100% otimizado para o Cloudflare Pages</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-cyan-500/20 transition"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
