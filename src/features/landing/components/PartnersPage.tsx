import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft, Search, X, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PartnerCard, partnersData } from './Partners';

const ITEMS_PER_PAGE = 24;

// Categories list extracted from partnersData plus "Todos"
const CATEGORIES = ["Todos", "Equipamentos", "Software", "Acessórios", "Segurança"];

interface AutocompleteSuggestion {
  type: 'name' | 'city' | 'state' | 'category';
  value: string;
  label: string;
}

export const PartnersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedCity, selectedState]);

  // Compute suggestions based on input
  const suggestions = useMemo((): AutocompleteSuggestion[] => {
    if (searchQuery.trim().length < 2) return [];

    const query = searchQuery.toLowerCase().trim();
    const resultList: AutocompleteSuggestion[] = [];

    // 1. Match Categories
    CATEGORIES.forEach(cat => {
      if (cat !== 'Todos' && cat.toLowerCase().includes(query)) {
        resultList.push({ type: 'category', value: cat, label: `${cat} (Categoria)` });
      }
    });

    // 2. Match States
    const uniqueStates = Array.from(new Set(partnersData.map(p => p.state).filter(Boolean))) as string[];
    uniqueStates.forEach(st => {
      if (st.toLowerCase() === query || (st.toLowerCase().includes(query) && query.length >= 2)) {
        resultList.push({ type: 'state', value: st, label: `${st} (Estado)` });
      }
    });

    // 3. Match Cities
    const uniqueCities = Array.from(new Set(partnersData.map(p => p.city && p.state ? `${p.city}, ${p.state}` : '').filter(Boolean))) as string[];
    uniqueCities.forEach(cityState => {
      if (cityState.toLowerCase().includes(query)) {
        const [city] = cityState.split(', ');
        resultList.push({ type: 'city', value: city, label: `${cityState} (Cidade)` });
      }
    });

    // 4. Match Names
    partnersData.forEach(item => {
      if (item.name.toLowerCase().includes(query)) {
        resultList.push({ type: 'name', value: item.name, label: `${item.name} (Parceiro)` });
      }
    });

    // Unique suggestions limited to 8 items
    const seen = new Set<string>();
    return resultList.filter(item => {
      const key = `${item.type}-${item.value}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 8);
  }, [searchQuery]);

  const handleSelectSuggestion = (suggestion: AutocompleteSuggestion) => {
    if (suggestion.type === 'category') {
      setSelectedCategory(suggestion.value);
    } else if (suggestion.type === 'city') {
      setSelectedCity(suggestion.value);
      setSearchQuery('');
    } else if (suggestion.type === 'state') {
      setSelectedState(suggestion.value);
      setSearchQuery('');
    } else if (suggestion.type === 'name') {
      setSearchQuery(suggestion.value);
    }
    setShowSuggestions(false);
  };

  // Filtered partners list
  const filteredPartners = useMemo(() => {
    return partnersData.filter(item => {
      // Filter by Category Pills
      if (selectedCategory !== 'Todos' && item.category !== selectedCategory) {
        return false;
      }

      // Filter by Selected City
      if (selectedCity && item.city !== selectedCity) {
        return false;
      }

      // Filter by Selected State
      if (selectedState && item.state !== selectedState) {
        return false;
      }

      // Filter by Search Input Query (Name, City, State, Category)
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCity = item.city ? item.city.toLowerCase().includes(query) : false;
        const matchesState = item.state ? item.state.toLowerCase().includes(query) : false;
        const matchesCategory = item.category.toLowerCase().includes(query);
        return matchesName || matchesCity || matchesState || matchesCategory;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCity, selectedState]);

  // Calculate pages count and paginated slice of partners
  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);

  const paginatedPartners = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPartners.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPartners, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
    setSelectedCity('');
    setSelectedState('');
  };

  return (
    <div className="relative min-h-screen selection:bg-[#0D3C1F] selection:text-[#FAF9F6] font-sans bg-[#F8FAF7]">
      
      {/* Noise Overlay */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <Header />

      <main className="relative z-10 pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        
        {/* Back Link */}
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
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
            Ecossistema ACAF
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-acaf-forest leading-tight tracking-tight">
            Nossos Parceiros
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-acaf-sage leading-relaxed font-light">
            Conheça todas as marcas líderes integradas ao ecossistema ACAF Brasil, trazendo soluções de alta performance em equipamentos, tecnologia, gestão e segurança para nossos associados.
          </p>
        </div>

        {/* Search & Autocomplete Filter Box */}
        <div className="bg-[#FAF9F6] border border-acaf-forest/10 p-6 md:p-8 mb-10 shadow-sm relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Input search */}
            <div className="lg:col-span-8 relative" ref={dropdownRef}>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-acaf-sage mb-2 font-semibold">
                Busca Rápida (Nome, Cidade, Estado ou Categoria)
              </label>
              <div className="relative flex items-center border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-1.5">
                <Search className="w-4 h-4 text-acaf-sage shrink-0 mr-3" />
                <input
                  type="text"
                  placeholder="Digite para buscar..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full bg-transparent border-none outline-none text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:text-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-[#FAF9F6] border border-acaf-forest/15 rounded-sm shadow-xl z-50 overflow-hidden max-h-[300px] overflow-y-auto animate-reveal-up">
                  <div className="py-1">
                    {suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSuggestion(suggestion)}
                        className="w-full text-left px-5 py-3 text-[15px] text-acaf-forest hover:bg-acaf-forest/5 hover:text-acaf-emerald transition-colors border-b border-acaf-forest/5 last:border-b-0 flex items-center justify-between"
                      >
                        <span>{suggestion.label}</span>
                        <Check className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Clear Button */}
            <div className="lg:col-span-4 flex justify-end gap-3 self-end">
              {(searchQuery || selectedCategory !== 'Todos' || selectedCity || selectedState) && (
                <button
                  onClick={handleClearAll}
                  className="w-full lg:w-auto px-5 py-3 border border-acaf-forest text-acaf-forest hover:bg-acaf-forest hover:text-acaf-sand text-[13px] font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Limpar Filtros
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Tags */}
          {(selectedCity || selectedState || selectedCategory !== 'Todos') && (
            <div className="flex flex-wrap items-center gap-2 mt-6 border-t border-acaf-forest/10 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-acaf-sage mr-2">Filtros ativos:</span>
              
              {selectedCategory !== 'Todos' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-acaf-forest/5 text-acaf-forest border border-acaf-forest/10 text-[13px] rounded-full">
                  <span>Categoria: {selectedCategory}</span>
                  <button onClick={() => setSelectedCategory('Todos')} className="hover:text-red-700">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedCity && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-acaf-forest/5 text-acaf-forest border border-acaf-forest/10 text-[13px] rounded-full">
                  <span>Cidade: {selectedCity}</span>
                  <button onClick={() => setSelectedCity('')} className="hover:text-red-700">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedState && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-acaf-forest/5 text-acaf-forest border border-acaf-forest/10 text-[13px] rounded-full">
                  <span>Estado: {selectedState}</span>
                  <button onClick={() => setSelectedState('')} className="hover:text-red-700">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Category Pills (Pills style) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-mono tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-acaf-forest text-acaf-sand shadow-sm'
                  : 'bg-[#FAF9F6] text-acaf-sage border border-acaf-forest/10 hover:border-acaf-forest hover:text-acaf-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mb-6 font-mono text-[13px] text-acaf-sage border-b border-acaf-forest/10 pb-4">
          <div>
            Mostrando <span className="font-semibold text-acaf-forest">{filteredPartners.length}</span> de <span className="font-semibold">{partnersData.length}</span> parceiros
          </div>
          {searchQuery && (
            <div>
              Busca por: <span className="italic font-sans text-acaf-forest">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Partners Static Grid filtered */}
        {filteredPartners.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {paginatedPartners.map((partner, idx) => (
                <PartnerCard key={idx} {...partner} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 border-t border-acaf-forest/10 pt-10 mt-12">
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
          </>
        ) : (
          /* Empty State */
          <div className="bg-[#FAF9F6] border border-acaf-forest/10 py-20 text-center rounded-sm">
            <h3 className="text-xl font-serif text-acaf-forest mb-2">Nenhum parceiro encontrado</h3>
            <p className="text-[17px] text-acaf-sage max-w-sm mx-auto font-light leading-relaxed">
              Tente redefinir sua busca ou escolher outra categoria para expandir os resultados.
            </p>
            <button
              onClick={handleClearAll}
              className="mt-6 px-6 py-2.5 bg-acaf-forest text-acaf-sand hover:text-acaf-forest text-xs font-mono uppercase tracking-widest btn-slide-reveal transition-all"
              style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
            >
              Ver Todos
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
