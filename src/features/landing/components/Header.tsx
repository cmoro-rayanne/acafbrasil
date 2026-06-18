import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/80 backdrop-blur-md border-b border-acaf-forest/10 px-6 py-4 md:px-16 transition-all duration-300">
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

        {/* Navigation Links */}
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

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="btn-slide-reveal inline-flex items-center justify-center border border-acaf-forest text-acaf-forest hover:text-acaf-forest px-5 py-2.5 text-[15px] font-mono uppercase tracking-[0.15em] transition-all"
            style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
          >
            Quero me Associar
          </a>
        </div>
      </div>
    </header>
  );
};
