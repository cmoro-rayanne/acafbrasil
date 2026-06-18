import React from 'react';

const PARTNERS = [
  // Financial & Wealth
  "Vanguard Capital", "Faria Lima Partners", "Aliança Asset", "Gávea Investimentos",
  "Alfa Fomento", "Safra Corporate", "Vinci Partners", "XP Private",
  "Credit Suisse", "Itaú BBA", "BTG Pactual", "Bradesco BBI",
  "Santander Corporate", "J.P. Morgan", "Goldman Sachs", "Morgan Stanley",
  "BlackRock Brasil", "Franklin Templeton", "Moneda Asset", "SulAmérica Investimentos",
  "Tarpon Capital", "Pátria Investimentos", "Verde Asset", "Kinea Investimentos",
  "SPX Capital", "Claritas Administração", "Plural Gestão", "Truno Fomento",
  "Apex Partners", "Squadra Investimentos", "Oria Capital", "Valora Investimentos",

  // Audits, consulting & legal
  "Deloitte Brasil", "PwC Brasil", "EY Brasil", "KPMG Brasil",
  "Grant Thornton", "BDO Auditing", "Mazars", "Crowe Brasil",
  "RSM International", "Accenture Strategy", "McKinsey & Co.", "Bain & Company",
  "Boston Consulting Group", "Oliver Wyman", "Roland Berger", "Kearney",
  "Pinheiro Neto Advogados", "Mattos Filho", "Machado Meyer", "Demarest Advogados",
  "TozziniFreire", "BMA Advogados", "Lobo de Souza", "Trench Rossi Watanabe",

  // Tech & Innovation
  "Nexa Tech", "Quantum Consulting", "Zenith Solutions", "Vertex Brasil",
  "Synergy Logistics", "Apex Industry", "Orion Trade", "Delta Cargo",
  "Nova Energia", "PetroCorp", "Loggi Enterprise", "Movile Group",
  "iFood Corporate", "Stone Co.", "PagSeguro Dev", "Gympass Business",
  "Hotmart Enterprise", "QuintoAndar Corp", "Loft Solutions", "VTEX Global",
  "Neoway Analytics", "Totvs Corporate", "Mercado Livre Partners", "Nubank Enterprise",
  "Ebanx Global", "Creditas Institutional", "Wildfire Tech", "Alpha Cloud",

  // Large Industries & Infrastructure
  "Vale S.A.", "Gerdau Corporate", "Embraer Global", "Weg S.A.",
  "Suzano Papel", "Klabin Indústrias", "JBS Global", "Minerva Foods",
  "Marfrig Group", "Raízen", "Cosan", "Ultrapar",
  "Equatorial Energia", "Rumo Logística", "CCR S.A.", "Eletrobras",
  "Petrobras", "Braskem", "Usiminas", "CBA Alumínio",
  "Tupy S.A.", "Iochpe-Maxion", "Randon Corp", "Marcopolo S.A.",
  "M. Dias Branco", "Ambev", "Hypera Pharma", "Eurofarma",

  // Academic & Research
  "FGV Business School", "Insper", "USP - USP",
  "UNICAMP", "Mackenzie", "PUC-SP", "FIA Business School",
  "Fundação Dom Cabral", "COPPEAD UFRJ", "FIPE", "Fundação Estudar",
  "IPEA", "FAPESP", "SENAI Cimatec", "INPE", "CBPF",

  // Real Estate & Construction
  "Cyrela Corporate", "MRV Engenharia", "Direcional", "Eztec",
  "Even Construtora", "Trisul", "JHSF Institutional", "Multiplan",
  "Iguatemi S.A.", "Aliansce Sonae", "Log Commercial Properties", "Tenda",

  // Retail & Consumer
  "Magazine Luiza Corp", "Via Varejo", "Grupo Carrefour Brasil", "GPA",
  "Grupo Mateus", "Raia Drogasil", "Drogarias Pacheco", "Lojas Renner",
  "Grupo Boticário", "Natura & Co", "Arezzo & Co", "Alpargatas S.A."
];

// Slice the 152 items into 4 lists (~38 items each)
const row1 = PARTNERS.slice(0, 38);
const row2 = PARTNERS.slice(38, 76);
const row3 = PARTNERS.slice(76, 114);
const row4 = PARTNERS.slice(114, 152);

interface MarqueeRowProps {
  items: string[];
  speed: string;
  direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, speed, direction }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="flex overflow-hidden py-3 select-none">
      <div
        className={`flex gap-6 shrink-0 ${animationClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onMouseMove={handleMouseMove}
            className="flex-shrink-0 font-mono text-[11px] md:text-xs tracking-widest text-[#F8FAF7]/60 uppercase px-6 py-2.5 border border-[#FAF9F6]/10 bg-[#FAF9F6]/5 hover:text-[#C5A880] hover:border-[#C5A880]/30 hover:bg-[#FAF9F6]/10 transition-all duration-300 cursor-default rounded-sm flashlight-card dark-card"
          >
            {item}
          </div>
        ))}
        {/* Duplicate list to achieve infinite scroll loop */}
        {items.map((item, idx) => (
          <div
            key={`dup-${idx}`}
            onMouseMove={handleMouseMove}
            className="flex-shrink-0 font-mono text-[11px] md:text-xs tracking-widest text-[#F8FAF7]/60 uppercase px-6 py-2.5 border border-[#FAF9F6]/10 bg-[#FAF9F6]/5 hover:text-[#C5A880] hover:border-[#C5A880]/30 hover:bg-[#FAF9F6]/10 transition-all duration-300 cursor-default rounded-sm flashlight-card dark-card"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Associates: React.FC = () => {
  return (
    <section id="associates" className="relative py-20 md:py-28 bg-[#082016] border-b border-acaf-forest/10 overflow-hidden">

      {/* Background Graphic Lines with Soft Gold Tone */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-12 h-full border-r border-[#C5A880]">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] mb-4 block">
            Ecossistema ACAF
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-[#F8FAF7] leading-tight tracking-tight">
            Associados
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A880]/40 mx-auto mt-4"></div>
        </div>
      </div>

      {/* Wall of Partners: Infinite Horizontal Marquee Rows */}
      <div className="marquee-fade-mask relative w-full flex flex-col gap-2 max-w-[1920px] mx-auto">

        {/* Row 1: Left */}
        <MarqueeRow items={row1} speed="75s" direction="left" />

        {/* Row 2: Right */}
        <MarqueeRow items={row2} speed="85s" direction="right" />

        {/* Row 3: Left */}
        <MarqueeRow items={row3} speed="70s" direction="left" />

        {/* Row 4: Right */}
        <MarqueeRow items={row4} speed="80s" direction="right" />

      </div>

    </section>
  );
};
