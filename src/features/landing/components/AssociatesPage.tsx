import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft, Search, MapPin, X, Building2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

const ITEMS_PER_PAGE = 36;

// Define the structure of an Associate
interface Associate {
  name: string;
  category: string;
  city: string;
  state: string;
}

// Complete list of 152 corporate partners
const PARTNERS_NAMES = [
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

// Mapping to objects with category, city and state dynamically
export const ASSOCIATES_LIST: Associate[] = PARTNERS_NAMES.map((name, index) => {
  let category = "Varejo & Consumo";
  let city = "São Paulo";
  let state = "SP";

  if (index < 32) {
    category = "Financeiro & Investimentos";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Rio de Janeiro", state: "RJ" },
      { city: "Belo Horizonte", state: "MG" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else if (index < 56) {
    category = "Auditoria & Jurídico";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Brasília", state: "DF" },
      { city: "Curitiba", state: "PR" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else if (index < 84) {
    category = "Tecnologia & Inovação";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Belo Horizonte", state: "MG" },
      { city: "Curitiba", state: "PR" },
      { city: "Florianópolis", state: "SC" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else if (index < 112) {
    category = "Indústria & Infraestrutura";
    const cities = [
      { city: "Jaraguá do Sul", state: "SC" },
      { city: "São Paulo", state: "SP" },
      { city: "Belo Horizonte", state: "MG" },
      { city: "Porto Alegre", state: "RS" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else if (index < 127) {
    category = "Acadêmico & Pesquisa";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Rio de Janeiro", state: "RJ" },
      { city: "Campinas", state: "SP" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else if (index < 139) {
    category = "Imobiliário & Construção";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Rio de Janeiro", state: "RJ" },
      { city: "Belo Horizonte", state: "MG" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  } else {
    category = "Varejo & Consumo";
    const cities = [
      { city: "São Paulo", state: "SP" },
      { city: "Belo Horizonte", state: "MG" },
      { city: "Curitiba", state: "PR" }
    ];
    const item = cities[index % cities.length];
    city = item.city;
    state = item.state;
  }

  return { name, category, city, state };
});

// Categories list
const CATEGORIES = [
  "Todos",
  "Financeiro & Investimentos",
  "Auditoria & Jurídico",
  "Tecnologia & Inovação",
  "Indústria & Infraestrutura",
  "Acadêmico & Pesquisa",
  "Imobiliário & Construção",
  "Varejo & Consumo"
];

interface AutocompleteSuggestion {
  type: 'name' | 'city' | 'state' | 'category';
  value: string;
  label: string;
}

export const AssociatesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close suggestions dropdown when clicking outside
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

  // Compute Autocomplete Suggestions in real time
  const suggestions = useMemo((): AutocompleteSuggestion[] => {
    if (searchQuery.trim().length < 2) return [];

    const query = searchQuery.toLowerCase().trim();
    const resultList: AutocompleteSuggestion[] = [];

    // 1. Matches by Category
    CATEGORIES.forEach(cat => {
      if (cat !== 'Todos' && cat.toLowerCase().includes(query)) {
        resultList.push({ type: 'category', value: cat, label: `${cat} (Categoria)` });
      }
    });

    // 2. Matches by State
    const uniqueStates = Array.from(new Set(ASSOCIATES_LIST.map(a => a.state)));
    uniqueStates.forEach(st => {
      if (st.toLowerCase() === query || (st.toLowerCase().includes(query) && query.length >= 2)) {
        resultList.push({ type: 'state', value: st, label: `${st} (Estado)` });
      }
    });

    // 3. Matches by City
    const uniqueCities = Array.from(new Set(ASSOCIATES_LIST.map(a => `${a.city}, ${a.state}`)));
    uniqueCities.forEach(cityState => {
      if (cityState.toLowerCase().includes(query)) {
        const [city] = cityState.split(', ');
        resultList.push({ type: 'city', value: city, label: `${cityState} (Cidade)` });
      }
    });

    // 4. Matches by Name
    ASSOCIATES_LIST.forEach(item => {
      if (item.name.toLowerCase().includes(query)) {
        resultList.push({ type: 'name', value: item.name, label: `${item.name} (Associado)` });
      }
    });

    // Return unique suggestions limited to 8 items
    const seen = new Set<string>();
    return resultList.filter(item => {
      const key = `${item.type}-${item.value}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 8);
  }, [searchQuery]);

  // Click handler for suggestions
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

  // Filtered associates list
  const filteredAssociates = useMemo(() => {
    return ASSOCIATES_LIST.filter(item => {
      // Filter by Category Tabs
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

      // Filter by Search Query (Name, City, State, Category)
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCity = item.city.toLowerCase().includes(query);
        const matchesState = item.state.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        return matchesName || matchesCity || matchesState || matchesCategory;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCity, selectedState]);

  // Calculate pages count and paginated slice of associates
  const totalPages = Math.ceil(filteredAssociates.length / ITEMS_PER_PAGE);

  const paginatedAssociates = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAssociates.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAssociates, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  // Clear filters helper
  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
    setSelectedCity('');
    setSelectedState('');
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
            Nossos Associados
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-acaf-sage leading-relaxed font-light">
            Lista completa das maiores corporações, gestoras de capital, firmas de auditoria e instituições de pesquisa integradas às nossas normas de conformidade e fomento institucional.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-[#FAF9F6] border border-acaf-forest/10 p-6 md:p-8 mb-10 shadow-sm relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search Input with Autocomplete Dropdown */}
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

              {/* Autocomplete suggestions popup */}
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

            {/* Quick Active Indicators & Clear Buttons */}
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

        {/* Category Filter Pills (Navigation Tabs) */}
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

        {/* Stats Row */}
        <div className="flex justify-between items-center mb-6 font-mono text-[13px] text-acaf-sage border-b border-acaf-forest/10 pb-4">
          <div>
            Mostrando <span className="font-semibold text-acaf-forest">{filteredAssociates.length}</span> de <span className="font-semibold">{ASSOCIATES_LIST.length}</span> associados
          </div>
          {searchQuery && (
            <div>
              Busca por: <span className="italic font-sans text-acaf-forest">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Main Grid View */}
        {filteredAssociates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedAssociates.map((item, idx) => (
                <div
                  key={idx}
                  onMouseMove={handleMouseMove}
                  className="bg-white border border-acaf-forest/10 p-6 flex flex-col justify-between hover:border-acaf-forest/30 hover:shadow-md transition-all duration-300 group flashlight-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-acaf-coral font-semibold">
                        {item.category}
                      </span>
                      <Building2 className="w-4 h-4 text-acaf-sage/30 group-hover:text-acaf-coral transition-colors" />
                    </div>
                    <h3 className="font-sans text-[19px] font-semibold text-acaf-forest mb-6 tracking-tight leading-snug group-hover:text-acaf-emerald transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-acaf-sage/70 font-mono text-[13px] border-t border-acaf-forest/5 pt-4 mt-auto">
                    <MapPin className="w-3.5 h-3.5 text-acaf-coral" />
                    <span>{item.city}, {item.state}</span>
                  </div>
                </div>
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
            <Building2 className="w-12 h-12 text-acaf-sage/30 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-acaf-forest mb-2">Nenhum associado encontrado</h3>
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

      <Footer />

    </div>
  );
};
