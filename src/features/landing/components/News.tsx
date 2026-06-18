import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  image: string;
  date: string;
  tag: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, tag, title, description }) => {
  return (
    <div className="group flex flex-col bg-white rounded-md overflow-hidden border border-[#0D3C1F]/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl h-full">
      {/* Image Header */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute top-4 left-4 bg-white text-[#FAF9F6] text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#0D3C1F] uppercase font-semibold select-none rounded-sm">
          {tag}
        </div>
      </div>

      {/* Content Block */}
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          {/* Date */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#4A6B5A] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          {/* Title */}
          <h3 className="font-sans text-lg font-bold text-[#0D3C1F] mb-3 leading-snug group-hover:text-[#F69066] transition-colors duration-300">
            {title}
          </h3>
          {/* Description */}
          <p className="text-[14px] text-[#4A6B5A] leading-relaxed font-light mb-6">
            {description}
          </p>
        </div>

        {/* Link */}
        <div className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-[#0D3C1F] group-hover:text-[#F69066] transition-colors duration-300 border-t border-[#0D3C1F]/5 pt-4">
          <span>Ler Artigo Completo</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

export const News: React.FC = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
      date: "18 de Junho, 2026",
      tag: "Regulatório",
      title: "ACAF Brasil debate novas regras sanitárias e de acessibilidade com órgãos técnicos",
      description: "Debate detalhado sobre conformidade de climatização, qualidade do ar e normas de acesso facilitado para estúdios e academias de grande porte."
    },
    {
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
      date: "12 de Junho, 2026",
      tag: "Mercado",
      title: "Crescimento de centros de treinamento funcional bate recorde histórico nacional",
      description: "Estudo semestral divulgado aponta alta demanda e faturamento recorde em academias e boxes focados em treinos personalizados e de alta intensidade."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      date: "05 de Junho, 2026",
      tag: "Gestão",
      title: "ACAF lança guia prático de precificação e inteligência financeira para associados",
      description: "Um manual completo desenvolvido por auditores especializados para auxiliar gestores no cálculo de ponto de equilíbrio, margem operacional e fluxo de caixa."
    }
  ];

  return (
    <section id="noticias" className="relative py-20 md:py-32 px-6 md:px-16 bg-[#FAF9F6] border-b border-acaf-forest/10 overflow-hidden reveal">
      
      {/* Architectural Background Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-12 h-full border-r border-[#0D3C1F]">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F69066] mb-4 block font-semibold">
            Notícias e Eventos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0D3C1F] leading-tight tracking-tight">
            Notícias e Eventos
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mt-6 mb-4"></div>
          <p className="text-[17px] text-[#4A6B5A] leading-relaxed font-light">
            Acompanhe análises jurídicas, tendências operacionais de mercado e as principais atualizações regulatórias do setor fitness brasileiro.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <NewsCard key={idx} {...art} />
          ))}
        </div>
      </div>
    </section>
  );
};
