import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-acaf-forest border-t border-white/10 py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <a href="#" className="flex items-center group select-none mb-6" aria-label="ACAF Brasil Home">
              <div 
                className="h-10 w-[105px] bg-[#FAF9F6] transition-transform group-hover:scale-105 duration-300"
                style={{
                  maskImage: 'url(/acaf-logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(/acaf-logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                }}
              />
            </a>
            <p className="text-[15px] text-[#FAF9F6]/80 leading-relaxed max-w-sm mb-8 font-light">
              Associação Corporativa de Auditoria e Fomento. Segurança jurídica, inteligência patrimonial e compliance estruturado sob os maiores padrões mundiais.
            </p>
          </div>
        </div>

        {/* Col 2: Navigation links */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#FAF9F6] mb-6 font-semibold">
            Institucional
          </h4>
          <ul className="space-y-3 text-[15px] text-[#FAF9F6]/70">
            <li>
              <a href="#sobre" className="link-underline-hover hover:text-white transition-colors">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#/parceiros" className="link-underline-hover hover:text-white transition-colors">
                Parceiros
              </a>
            </li>
            <li>
              <a href="#/associados" className="link-underline-hover hover:text-white transition-colors">
                Associados
              </a>
            </li>
            <li>
              <a href="#/diretoria" className="link-underline-hover hover:text-white transition-colors">
                Diretoria
              </a>
            </li>
            <li>
              <a href="#/noticias" className="link-underline-hover hover:text-white transition-colors">
                Notícias
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Compliance newsletter & contact info */}
        <div className="md:col-span-4">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#FAF9F6] mb-6 font-semibold">
            Relatórios de Transparência
          </h4>
          <p className="text-[15px] text-[#FAF9F6]/80 leading-relaxed mb-4 font-light">
            Assine para receber informativos sobre conformidade e regulamentos de fomento.
          </p>
          
          <div className="flex border-b border-white/20 py-1.5 focus-within:border-white transition-colors">
            <input
              type="email"
              placeholder="Seu e-mail corporativo"
              className="w-full bg-transparent border-none outline-none text-[15px] text-white placeholder-[#FAF9F6]/40"
            />
            <button className="text-white hover:text-acaf-coral transition-colors ml-2 cursor-pointer">
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#FAF9F6]/60 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} ACAF Brasil. Todos os direitos reservados. Auditoria externa anual independente.</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <span>Desenvolvido por:</span>
            <a 
              href="https://www.rmoro.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo-horizontal.png" 
                alt="r.moro desenvolvimento digital" 
                className="h-4 w-auto object-contain brightness-0 invert"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-6">
          <a href="#/regimento-interno" className="hover:text-white">Regimento Interno</a>
          <a href="#/estatuto-social" className="hover:text-white">Estatuto Social</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
