import React, { useState, useMemo } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NewsCard } from './News';
import { newsArticles } from './newsData';

const ITEMS_PER_PAGE = 18;

export const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pages count
  const totalPages = Math.ceil(newsArticles.length / ITEMS_PER_PAGE);

  // Paginated articles slice
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-acaf-forest selection:text-acaf-sand font-sans bg-[#F8FAF7]">
      
      {/* Noise Overlay */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <Header />

      <main className="relative z-10 pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-acaf-forest hover:text-acaf-coral transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Início
          </a>
        </div>

        {/* Page Title Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
            Informativos & Eventos
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-acaf-forest leading-tight tracking-tight">
            Notícias e Eventos
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-acaf-sage leading-relaxed font-light">
            Mantenha-se atualizado com as análises, diretrizes regulatórias e eventos promovidos pela ACAF Brasil para o desenvolvimento do setor fitness.
          </p>
        </div>

        {/* Paginated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paginatedArticles.map((art) => (
            <NewsCard key={art.id} {...art} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 border-t border-acaf-forest/10 pt-8">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 border border-acaf-forest/15 rounded-full flex items-center justify-center text-acaf-forest hover:bg-acaf-forest hover:text-acaf-sand disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-acaf-forest transition-colors cursor-pointer select-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Buttons */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full font-mono text-[13px] tracking-wider transition-all select-none cursor-pointer ${
                  currentPage === page
                    ? 'bg-acaf-forest text-acaf-sand'
                    : 'border border-acaf-forest/10 text-acaf-sage hover:border-acaf-forest hover:text-acaf-forest'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 border border-acaf-forest/15 rounded-full flex items-center justify-center text-acaf-forest hover:bg-acaf-forest hover:text-acaf-sand disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-acaf-forest transition-colors cursor-pointer select-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </main>

      <Footer />

    </div>
  );
};
