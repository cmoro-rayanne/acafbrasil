import React from 'react';
import { Scale, Shield, Users, Handshake } from 'lucide-react';

interface ObjectiveCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  highlightTag: string;
}

const ObjectiveCard: React.FC<ObjectiveCardProps> = ({ number, icon, title, description, highlightTag }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="group relative bg-[#FAF9F6] border border-acaf-forest/10 p-8 flex flex-col justify-between hover:border-acaf-forest transition-all duration-500 hover:shadow-xl hover:shadow-acaf-forest/5 hover:-translate-y-1 flashlight-card"
    >
      
      {/* Number details */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-acaf-sage opacity-50 group-hover:opacity-100 transition-opacity">
        {number}
      </div>

      <div className="mb-6">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-lg bg-acaf-forest/5 text-acaf-forest flex items-center justify-center mb-6 group-hover:bg-acaf-forest group-hover:text-acaf-sand transition-colors duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-sans text-[17px] font-semibold text-acaf-forest mb-4 uppercase tracking-wider leading-snug">
          {title}
        </h3>

        {/* Description */}
        <div className="text-[15px] text-acaf-sage leading-relaxed font-light">
          {description}
        </div>
      </div>

      {/* Legal Reference Tag */}
      <div className="mt-6 pt-4 border-t border-acaf-forest/5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-acaf-coral font-semibold">
        <span>{highlightTag}</span>
      </div>
    </div>
  );
};

export const Solutions: React.FC = () => {
  const objectives = [
    {
      number: "OBJETIVO 01",
      icon: <Scale className="w-6 h-6" />,
      title: "Representação Constitucional",
      highlightTag: "Art. 103, IX, CF",
      description: (
        <p>
          Defender os direitos inerentes a sua classe e subclasse em <strong>âmbito nacional</strong>, conforme regra prevista no <strong>art. 103, inc. IX da Constituição Federal</strong>.
        </p>
      )
    },
    {
      number: "OBJETIVO 02",
      icon: <Shield className="w-6 h-6" />,
      title: "Interesse Difuso & Defesa",
      highlightTag: "Lei Federal 7.347/1985",
      description: (
        <p>
          Defender os direitos inerentes à classe em situações de <strong>interesse difuso</strong> decorrentes do <strong>Código de Defesa do Consumidor</strong>, exercendo as prerrogativas da <strong>Lei Federal 7.347/1985</strong> em qualquer esfera jurídica, inclusive <strong>tributária</strong>.
        </p>
      )
    },
    {
      number: "OBJETIVO 03",
      icon: <Users className="w-6 h-6" />,
      title: "Promoção de Interesses",
      highlightTag: "Relações Institucionais",
      description: (
        <p>
          Promover os interesses coletivos da classe perante <strong>órgãos públicos e fiscalizadores</strong>, sindicatos, prestadores de serviço e o público em geral.
        </p>
      )
    },
    {
      number: "OBJETIVO 04",
      icon: <Handshake className="w-6 h-6" />,
      title: "União & Ética Corporativa",
      highlightTag: "Compromisso de Expansão",
      description: (
        <p>
          Manter a união agindo sempre de forma <strong>ética</strong>, imbuída da ideia de manter ativa sua participação, bem como, aumentar o quadro de associados com <strong>responsabilidade</strong>.
        </p>
      )
    }
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-32 px-6 md:px-16 bg-acaf-beige/30 border-b border-acaf-forest/10 overflow-hidden">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-4 h-full border-r border-acaf-forest">
          <div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
              Propósito e Estatuto
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-acaf-forest leading-tight tracking-tight">
              Objetivos da associação
            </h2>
            <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6"></div>
          </div>
          <p className="text-[17px] text-acaf-sage max-w-sm leading-relaxed font-light">
            Conheça as diretrizes estatutárias que fundamentam nossa governança de conformidade e defesa jurídica institucional em todo o território nacional.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((obj, index) => (
            <ObjectiveCard key={index} {...obj} />
          ))}
        </div>

      </div>
    </section>
  );
};
