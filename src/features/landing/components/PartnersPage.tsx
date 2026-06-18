import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PartnerCard, partnersData } from './Partners';

export const PartnersPage: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#0D3C1F] selection:text-[#FAF9F6] font-sans bg-[#F8FAF7]">
      
      {/* Fixed Noise Overlay for Premium Feeling */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* Navigation Header */}
      <Header />

      <main className="relative z-10 pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0D3C1F] hover:text-[#C5A880] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Início
          </a>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F69066] mb-4 block font-semibold">
            Ecossistema
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0D3C1F] leading-tight tracking-tight">
            Nossos Parceiros
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-[#4A6B5A] leading-relaxed font-light">
            Conheça todas as marcas líderes integradas ao ecossistema ACAF Brasil, trazendo soluções de alta performance em equipamentos, tecnologia, gestão e segurança para nossos associados.
          </p>
        </div>

        {/* Partners Static Grid without slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnersData.map((partner, idx) => (
            <PartnerCard key={idx} {...partner} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
