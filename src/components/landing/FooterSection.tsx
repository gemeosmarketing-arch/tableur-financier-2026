import { Shield, Lock } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 border-t border-green-900/40">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-start">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Legal</span>
            <a
              href="/offersection"
              className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              Política de Privacidade
            </a>
            <a
              href="/offersection"
              className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              Termos de Uso
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Segurança</span>
            <div className="flex items-center gap-2 bg-green-950/60 border border-green-800/50 backdrop-blur-sm rounded-xl px-4 py-3">
              <div className="flex items-center justify-center w-8 h-8 bg-green-700/30 rounded-full">
                <Shield className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-green-300 text-xs font-semibold leading-tight">Site Seguro</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Lock className="w-3 h-3 text-green-500" />
                  <span className="text-green-600 text-[10px]">Conexão criptografada SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-400 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Planilha Financeira 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
