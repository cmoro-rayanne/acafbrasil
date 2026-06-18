import React from 'react';
import { ShieldCheck, TrendingUp, Landmark, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-acaf-forest/10 py-12 md:py-24">
      
      {/* Background Decorative Gradient Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-acaf-emerald/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-acaf-coral/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-6 self-start px-3 py-1 bg-acaf-forest/5 border border-acaf-forest/10 rounded-full animate-fade-in">
            <span className="w-1.5 h-1.5 bg-acaf-coral rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-acaf-forest">
              Excelência & Integridade
            </span>
          </div>

          {/* Lettering with Mixed Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-semibold text-acaf-forest leading-[1.15] tracking-tight mb-6 max-w-2xl">
            Fortalecendo os <span className="font-serif italic font-normal text-acaf-emerald">Centros de Atividade Física</span> do Brasil.
          </h1>

          {/* Subtitle */}
          <p className="text-[19px] sm:text-[21px] text-acaf-sage max-w-xl mb-10 font-normal leading-relaxed">
            A ACAF Brasil representa academias, estúdios e box em todo o país com voz unificada, conhecimento técnico e benefícios exclusivos para associados.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="btn-slide-reveal group inline-flex items-center gap-2 bg-acaf-forest text-acaf-sand px-7 py-4 text-[15px] font-mono uppercase tracking-[0.15em] transition-all hover:text-acaf-forest"
              style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
            >
              Seja um Associado
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#sobre"
              className="btn-slide-reveal inline-flex items-center justify-center border border-acaf-forest text-acaf-forest px-7 py-4 text-[15px] font-mono uppercase tracking-[0.15em] transition-all"
              style={{ '--slide-color': '#EAEFEB' } as React.CSSProperties}
            >
              Conheça a ACAF Brasil
            </a>
          </div>
        </div>

        {/* Right Side: Floating Analytical Panels & Structural Layout */}
        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center">
          
          {/* Structural background box with border & layout details */}
          <div className="absolute inset-0 border border-acaf-forest/5 bg-acaf-forest/[0.01] rounded-2xl flex items-center justify-center">
            {/* Fine architectural lines */}
            <div className="absolute w-full h-[1px] bg-acaf-forest/5 top-1/4"></div>
            <div className="absolute w-full h-[1px] bg-acaf-forest/5 top-3/4"></div>
            <div className="absolute h-full w-[1px] bg-acaf-forest/5 left-1/3"></div>
            <div className="absolute h-full w-[1px] bg-acaf-forest/5 left-2/3"></div>
            
            {/* Compass-like spinning decoration */}
            <div className="absolute w-28 h-28 border border-acaf-forest/5 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-2 h-2 bg-acaf-coral/30 rounded-full"></div>
            </div>
          </div>

          {/* Floating Card 1: Compliance Metric (Top-Left) */}
          <div className="absolute top-6 left-4 bg-white/75 backdrop-blur-md border border-acaf-forest/10 p-5 rounded-xl shadow-lg shadow-acaf-forest/5 w-60 animate-float">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-acaf-forest/5 rounded-lg text-acaf-forest">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-mono text-[13px] uppercase tracking-wider text-acaf-coral bg-acaf-coral/10 px-2 py-0.5 rounded-full font-semibold">
                Ativo
              </span>
            </div>
            <h4 className="font-mono text-[13px] uppercase tracking-wider text-acaf-sage">
              Índice de Conformidade
            </h4>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-serif font-bold text-acaf-forest">99.8</span>
              <span className="text-[17px] font-semibold text-acaf-forest">%</span>
            </div>
            <p className="text-[17px] text-acaf-sage mt-2 leading-relaxed">
              Auditoria de risco mitigada em tempo real com conformidade absoluta.
            </p>
          </div>

          {/* Floating Card 2: Fomento Allocations (Bottom-Right) */}
          <div className="absolute bottom-8 right-4 bg-white/75 backdrop-blur-md border border-acaf-forest/10 p-5 rounded-xl shadow-lg shadow-acaf-forest/5 w-64 animate-float-slow">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-acaf-emerald/10 rounded-lg text-acaf-emerald">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-mono text-[13px] text-acaf-emerald uppercase tracking-wider">
                Fluxo Alocado
              </span>
            </div>
            <h4 className="font-mono text-[13px] uppercase tracking-wider text-acaf-sage">
              Fomento Patrimonial
            </h4>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-serif font-bold text-acaf-forest">R$ 4.2B</span>
            </div>
            
            {/* Visual Mini Sparkline (SVG) */}
            <div className="h-8 w-full mt-3">
              <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
                <path
                  d="M0,25 Q15,10 30,22 T60,5 T90,12 T100,2"
                  stroke="#3D7F61"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="90" cy="12" r="3" fill="#F69066" />
              </svg>
            </div>
          </div>

          {/* Floating Card 3: Governance Metrics (Center-Right) */}
          <div className="absolute top-1/3 -right-2 bg-white/75 backdrop-blur-md border border-acaf-forest/10 p-4 rounded-xl shadow-lg shadow-acaf-forest/5 w-48 animate-float-delayed">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-4 h-4 text-acaf-sage" />
              <h4 className="font-mono text-[12px] uppercase tracking-widest text-acaf-sage">
                Governança
              </h4>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-acaf-emerald rounded-full"></div>
                <span className="text-[13px] text-acaf-forest font-medium">Auditoria Externa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-acaf-emerald rounded-full"></div>
                <span className="text-[13px] text-acaf-forest font-medium">LGPD Strict Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-acaf-emerald rounded-full"></div>
                <span className="text-[13px] text-acaf-forest font-medium">Balanço Transparente</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
