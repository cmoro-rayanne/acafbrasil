import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/85 backdrop-blur-md border-b border-acaf-forest/10 px-6 py-4 md:px-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center group select-none" aria-label="ACAF Brasil Home">
          <div 
            className="h-10 w-[105px] bg-acaf-forest transition-transform group-hover:scale-105 duration-300"
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

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-mono uppercase tracking-[0.15em] text-acaf-sage">
          <a href="#sobre" className="link-underline-hover hover:text-acaf-forest transition-colors">
            Quem Somos
          </a>
          <a href="#/parceiros" className="link-underline-hover hover:text-acaf-forest transition-colors">
            Parceiros
          </a>
          <a href="#/associados" className="link-underline-hover hover:text-acaf-forest transition-colors">
            Associados
          </a>
          <a href="#/diretoria" className="link-underline-hover hover:text-acaf-forest transition-colors">
            Diretoria
          </a>
          <a href="#/noticias" className="link-underline-hover hover:text-acaf-forest transition-colors">
            Notícias
          </a>
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contato"
            className="btn-slide-reveal inline-flex items-center justify-center border border-acaf-forest text-acaf-forest px-5 py-2.5 text-[15px] font-mono uppercase tracking-[0.15em] transition-all"
            style={{ '--slide-color': '#EAEFEB' } as React.CSSProperties}
          >
            Quero me Associar
          </a>
        </div>

        {/* Hamburger Toggle Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden text-acaf-forest focus:outline-none p-1.5"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FAF9F6] border-b border-acaf-forest/10 md:hidden flex flex-col px-6 py-6 gap-6 shadow-lg animate-reveal-up z-40">
          <nav className="flex flex-col gap-4 text-[15px] font-mono uppercase tracking-[0.15em] text-acaf-sage">
            <a 
              href="#sobre" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-acaf-forest transition-colors py-1"
            >
              Quem Somos
            </a>
            <a 
              href="#/parceiros" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-acaf-forest transition-colors py-1"
            >
              Parceiros
            </a>
            <a 
              href="#/associados" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-acaf-forest transition-colors py-1"
            >
              Associados
            </a>
            <a 
              href="#/diretoria" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-acaf-forest transition-colors py-1"
            >
              Diretoria
            </a>
            <a 
              href="#/noticias" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-acaf-forest transition-colors py-1"
            >
              Notícias
            </a>
          </nav>
          <div className="border-t border-acaf-forest/10 pt-4 flex flex-col">
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center border border-acaf-forest text-acaf-forest py-3 text-[15px] font-mono uppercase tracking-[0.15em] hover:bg-acaf-forest hover:text-acaf-sand transition-all"
            >
              Quero me Associar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
