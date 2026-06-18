import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface PartnerCardProps {
  index: string;
  image: string;
  tag: string;
  name: string;
  description: string;
  category: string;
  coverage: string;
  since: string;
  website: string;
  instagram: string;
  linkedin: string;
  city?: string;
  state?: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  image,
  tag,
  name,
  description,
  category,
  coverage,
  since,
  website,
  instagram,
  linkedin,
  city,
  state
}) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-md overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl border border-[#0D3C1F]/10 h-full">
      {/* Top Container: White background with partner conceptual image */}
      <div className="relative aspect-[4/3] bg-white border-b border-[#0D3C1F]/10 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Content block: White background */}
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          {/* Tag */}
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#F69066] uppercase mb-2 block font-semibold">
            {tag}
          </span>
          {/* Title */}
          <h3 className="font-sans text-lg font-bold text-[#0D3C1F] mb-2">
            {name}
          </h3>
          {/* Description */}
          <p className="text-[14px] text-[#4A6B5A] leading-relaxed font-light min-h-[40px]">
            {description}
          </p>
        </div>

        <div>
          {/* Upper fine divider */}
          <div className="border-t border-[#0D3C1F]/10 my-4"></div>

          {/* Technical Metadata (3 Columns) */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="block text-[9px] font-mono tracking-wider text-[#0D3C1F]/40 uppercase">
                Categoria
              </span>
              <span className="block text-[12px] font-sans font-semibold text-[#0D3C1F] mt-0.5 truncate" title={category}>
                {category}
              </span>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-wider text-[#0D3C1F]/40 uppercase">
                Local
              </span>
              <span className="block text-[12px] font-sans font-semibold text-[#0D3C1F] mt-0.5 truncate" title={city ? `${city}, ${state}` : coverage}>
                {city ? `${city}, ${state}` : coverage}
              </span>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-wider text-[#0D3C1F]/40 uppercase">
                Desde
              </span>
              <span className="block text-[12px] font-sans font-semibold text-[#0D3C1F] mt-0.5">
                {since}
              </span>
            </div>
          </div>

          {/* Lower fine divider */}
          <div className="border-t border-[#0D3C1F]/10 my-4"></div>

          {/* Card Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a 
                href={`https://${website}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-mono tracking-wider text-[#0D3C1F] hover:text-[#C5A880] transition-colors font-semibold uppercase"
              >
                {website}
              </a>
              <div className="flex items-center gap-2 text-[#0D3C1F]/50">
                <a href={instagram} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C5A880] transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Square button with Lucide arrow-right */}
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-sm border border-[#0D3C1F]/15 flex items-center justify-center text-[#0D3C1F] hover:bg-[#0D3C1F]/5 hover:text-[#C5A880] hover:border-[#C5A880]/30 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const partnersData = [
  {
    index: "01 / 08",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
    tag: "Equipamentos Premium",
    name: "Matrix Fitness",
    description: "Equipamentos de cardio e força com engenharia de alta performance para academias de padrão internacional.",
    category: "Equipamentos",
    coverage: "Global",
    since: "2001",
    website: "matrixfitness.com",
    instagram: "#",
    linkedin: "#",
    city: "São Paulo",
    state: "SP"
  },
  {
    index: "02 / 08",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    tag: "Tecnologia & Gestão",
    name: "Tecnofit",
    description: "Software de gestão líder para automatizar controle financeiro, controle de acesso e experiência dos alunos.",
    category: "Software",
    coverage: "Nacional",
    since: "2016",
    website: "tecnofit.com.br",
    instagram: "#",
    linkedin: "#",
    city: "Curitiba",
    state: "PR"
  },
  {
    index: "03 / 08",
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop",
    tag: "Acessórios & Treino",
    name: "Reebok Fitness",
    description: "Acessórios funcionais, anilhas, kettlebells e barras de alta durabilidade e excelência ergonômica.",
    category: "Acessórios",
    coverage: "Nacional",
    since: "2010",
    website: "reebokfitness.com.br",
    instagram: "#",
    linkedin: "#",
    city: "São Paulo",
    state: "SP"
  },
  {
    index: "04 / 08",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    tag: "Sistemas de Acesso",
    name: "Pacto Soluções",
    description: "Catracas inteligentes, reconhecimento facial e soluções completas de segurança para controle de fluxo.",
    category: "Segurança",
    coverage: "Nacional",
    since: "2005",
    website: "pactosolucoes.com.br",
    instagram: "#",
    linkedin: "#",
    city: "Goiânia",
    state: "GO"
  },
  {
    index: "05 / 08",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    tag: "Equipamentos Nacionais",
    name: "Movement",
    description: "Líder nacional em equipamentos de cardio e força com design ergonômico e facilidade de manutenção.",
    category: "Equipamentos",
    coverage: "Nacional",
    since: "1999",
    website: "movement.com.br",
    instagram: "#",
    linkedin: "#",
    city: "Manaus",
    state: "AM"
  },
  {
    index: "06 / 08",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    tag: "Software Integrado",
    name: "EVO W12",
    description: "Plataforma completa de gestão e vendas para academias e estúdios com operação em nuvem global.",
    category: "Software",
    coverage: "Global",
    since: "2008",
    website: "w12.com.br",
    instagram: "#",
    linkedin: "#",
    city: "São Paulo",
    state: "SP"
  },
  {
    index: "07 / 08",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=600&auto=format&fit=crop",
    tag: "Moda & Acessórios",
    name: "Speedo",
    description: "Vestuário esportivo, óculos de natação e acessórios especializados para natação e hidroginástica.",
    category: "Acessórios",
    coverage: "Nacional",
    since: "1928",
    website: "speedo.com.br",
    instagram: "#",
    linkedin: "#",
    city: "São Paulo",
    state: "SP"
  },
  {
    index: "08 / 08",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    tag: "Equipamentos Funcionais",
    name: "Physicus",
    description: "Acessórios e aparelhos de ginástica localizada, treinamento funcional e reabilitação física.",
    category: "Equipamentos",
    coverage: "Nacional",
    since: "1993",
    website: "physicus.com.br",
    instagram: "#",
    linkedin: "#",
    city: "Auriflama",
    state: "SP"
  }
];

export const Partners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = partnersData.length - visibleCount;

  // Clip index on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, currentIndex, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="parceiros" className="relative py-20 md:py-32 px-6 md:px-16 bg-[#F8FAF7] border-b border-acaf-forest/10 overflow-hidden reveal">
      
      {/* Background Graphic Grid lines to maintain the architectural feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-12 h-full border-r border-[#0D3C1F]">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F69066] mb-4 block font-semibold">
              Ecossistema
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0D3C1F] leading-tight tracking-tight">
              Nossos Parceiros
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A880] mt-6 mb-4"></div>
            <p className="text-[17px] text-[#4A6B5A] leading-relaxed font-light">
              Marcas líderes em tecnologia, equipamentos e inovação operacional integradas para impulsionar a gestão dos nossos associados.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-6 md:mt-0 select-none">
            <button 
              onClick={handlePrev}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full border border-[#0D3C1F]/15 flex items-center justify-center text-[#0D3C1F] hover:bg-[#0D3C1F] hover:text-[#FAF9F6] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Próximo"
              className="w-12 h-12 rounded-full border border-[#0D3C1F]/15 flex items-center justify-center text-[#0D3C1F] hover:bg-[#0D3C1F] hover:text-[#FAF9F6] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Partners Carousel / Slider Window */}
        <div className="overflow-hidden w-full py-4">
          <div 
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(calc(-1 * ${currentIndex} * (100% + 32px) / ${visibleCount}))`
            }}
          >
            {partnersData.map((partner, idx) => (
              <div 
                key={idx} 
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] shrink-0"
              >
                <PartnerCard {...partner} />
              </div>
            ))}
          </div>
        </div>

        {/* Veja Mais Button */}
        <div className="mt-16 text-center">
          <a
            href="#/parceiros"
            className="btn-slide-reveal group inline-flex items-center gap-2 bg-[#0D3C1F] text-[#FAF9F6] px-8 py-4 text-xs font-mono uppercase tracking-[0.15em] transition-all hover:text-[#0D3C1F]"
            style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
          >
            Veja Mais Parceiros
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
