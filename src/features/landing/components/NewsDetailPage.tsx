import React, { useMemo } from 'react';
import { ArrowLeft, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { newsArticles } from './newsData';

interface NewsDetailPageProps {
  articleId: string;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ articleId }) => {
  // Find article details by id
  const article = useMemo(() => {
    return newsArticles.find(art => art.id === articleId) || newsArticles[0];
  }, [articleId]);

  return (
    <div className="relative min-h-screen selection:bg-acaf-forest selection:text-acaf-sand font-sans bg-[#F8FAF7]">
      
      {/* Noise Overlay */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <Header />

      <main className="relative z-10 pt-12 pb-24 px-6 md:px-16 max-w-4xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-12 flex justify-between items-center border-b border-acaf-forest/10 pb-6">
          <a
            href="#/noticias"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-acaf-forest hover:text-acaf-coral transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para Notícias
          </a>
          <span className="font-mono text-[11px] uppercase tracking-widest text-acaf-sage">
            {article.tag}
          </span>
        </div>

        {/* Article Header */}
        <article className="mb-16">
          <header className="mb-10">
            <span className="inline-block px-3 py-1 bg-acaf-forest/5 text-acaf-forest border border-acaf-forest/10 text-[11px] font-mono uppercase tracking-widest rounded-sm mb-4">
              {article.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-acaf-forest leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            
            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-6 text-[13px] font-mono text-acaf-sage border-y border-acaf-forest/5 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-acaf-coral" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-acaf-coral" />
                <span>Por: <span className="font-semibold text-acaf-forest">{article.author}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-acaf-coral" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Large Hero Image */}
          <div className="aspect-[16/9] w-full bg-[#FAF9F6] border border-acaf-forest/10 overflow-hidden mb-12 rounded-sm shadow-md">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Paragraphs with Premium Styling */}
          <div className="prose max-w-none text-[19px] text-acaf-sage leading-relaxed font-light space-y-6">
            {article.content.map((paragraph, index) => {
              // Styling first letter of the first paragraph as a premium dropcap
              if (index === 0) {
                return (
                  <p key={index} className="first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-acaf-forest first-letter:mr-3 first-letter:mt-1">
                    {paragraph}
                  </p>
                );
              }
              if (index === 2) {
                return (
                  <blockquote key={index} className="border-l-4 border-[#C5A880] pl-6 my-8 italic font-serif text-[21px] text-acaf-forest bg-[#FAF9F6] py-4 pr-4 border-r border-y border-acaf-forest/5">
                    {paragraph}
                  </blockquote>
                );
              }

              return (
                <p key={index}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Association Callout Box at bottom */}
        <div className="bg-[#FAF9F6] border border-[#C5A880]/30 p-8 md:p-10 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />
          
          <h3 className="text-2xl font-serif font-bold text-acaf-forest mb-4">
            Fortaleça seu Centro de Atividade Física
          </h3>
          <p className="text-[17px] text-acaf-sage leading-relaxed mb-6 font-light max-w-lg mx-auto">
            Assim como os líderes de mercado citados, você também pode ter acesso a assessoria jurídica especializada, consultoria de fomento, PMOC simplificado e benefícios exclusivos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[15px] font-mono text-acaf-sage mb-8">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-acaf-emerald" />
              <span>Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-acaf-emerald" />
              <span>Apoio em fiscalizações</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-acaf-emerald" />
              <span>Planos sob medida</span>
            </div>
          </div>
          <a
            href="#contato"
            className="btn-slide-reveal inline-flex items-center justify-center bg-acaf-forest text-acaf-sand px-8 py-3.5 text-xs font-mono uppercase tracking-widest transition-all hover:text-acaf-forest cursor-pointer"
            style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
          >
            Quero me Associar
          </a>
        </div>

      </main>

      <Footer />

    </div>
  );
};
