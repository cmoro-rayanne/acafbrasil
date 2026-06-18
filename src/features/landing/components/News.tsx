import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsArticles } from './newsData';

export interface NewsCardProps {
  id: string;
  image: string;
  date: string;
  tag: string;
  title: string;
  description: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ id, image, date, tag, title, description }) => {
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
        <a 
          href={`#/noticia/${id}`}
          className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-[#0D3C1F] group-hover:text-[#F69066] transition-colors duration-300 border-t border-[#0D3C1F]/5 pt-4 mt-auto cursor-pointer"
        >
          <span>Ler Artigo Completo</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export const News: React.FC = () => {
  // Take first 3 articles to show on landing page
  const featuredArticles = newsArticles.slice(0, 3);

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
            Últimas do setor
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mt-6 mb-4"></div>
          <p className="text-[17px] text-[#4A6B5A] leading-relaxed font-light">
            Acompanhe análises jurídicas, tendências operacionais de mercado e as principais atualizações regulatórias do setor fitness brasileiro.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((art) => (
            <NewsCard key={art.id} {...art} />
          ))}
        </div>

        {/* Veja Mais Button */}
        <div className="mt-16 text-center">
          <a
            href="#/noticias"
            className="btn-slide-reveal group inline-flex items-center gap-2 bg-[#0D3C1F] text-[#FAF9F6] px-8 py-4 text-xs font-mono uppercase tracking-[0.15em] transition-all hover:text-[#0D3C1F]"
            style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
          >
            Veja Mais Notícias
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
