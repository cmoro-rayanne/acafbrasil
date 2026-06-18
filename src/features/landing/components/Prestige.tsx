import React from 'react';
import { Award, Briefcase, Landmark, ShieldCheck } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, sublabel }) => {
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
      className="flex flex-col items-center text-center p-8 border border-acaf-forest/5 hover:border-acaf-forest/20 hover:bg-white/40 transition-colors duration-500 rounded-xl flashlight-card"
    >
      <div className="w-10 h-10 rounded-full bg-acaf-forest/5 text-acaf-forest flex items-center justify-center mb-6">
        {icon}
      </div>
      <span className="text-4xl md:text-5xl font-serif font-bold text-acaf-forest tracking-tight mb-2">
        {value}
      </span>
      <span className="font-mono text-[15px] uppercase tracking-[0.2em] text-acaf-sage mb-2 font-semibold">
        {label}
      </span>
      <p className="text-[15px] text-acaf-sage leading-relaxed max-w-[180px] font-light">
        {sublabel}
      </p>
    </div>
  );
};

export const Prestige: React.FC = () => {
  return (
    <section id="prestige" className="relative py-20 md:py-32 px-6 md:px-16 bg-acaf-sand border-b border-acaf-forest/10 overflow-hidden">
      
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acaf-emerald/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block">
            Credibilidade
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-acaf-forest leading-tight tracking-tight">
            Nossos números refletem nossa <span className="font-serif italic font-normal text-acaf-emerald">solidez regulatória</span>.
          </h2>
          <p className="text-[17px] text-acaf-sage mt-6 leading-relaxed font-light">
            Garantimos liquidez operacional e governança estrita para corporações de todos os portes com um track record comprovado de integridade e inteligência fiscal.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <StatItem
            icon={<Briefcase className="w-5 h-5" />}
            value="R$ 4.2B"
            label="Volume Fomentado"
            sublabel="Capital alocado em operações mercantis auditadas."
          />

          <StatItem
            icon={<ShieldCheck className="w-5 h-5" />}
            value="99.8%"
            label="Compliance Score"
            sublabel="Aprovação regulatória em canais de auditoria rigorosos."
          />

          <StatItem
            icon={<Award className="w-5 h-5" />}
            value="150+"
            label="Grandes Clientes"
            sublabel="Empresas de alta relevância nacional assessoradas."
          />

          <StatItem
            icon={<Landmark className="w-5 h-5" />}
            value="15+"
            label="Anos de Solidez"
            sublabel="Liderança ética no mercado financeiro institucional."
          />

        </div>

        {/* Dynamic quote/trust seal */}
        <div className="mt-16 border-t border-acaf-forest/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-acaf-coral flex items-center justify-center text-acaf-coral font-serif font-bold text-lg animate-spin-slow">
              ★
            </div>
            <div>
              <h4 className="font-sans text-sm font-semibold text-acaf-forest uppercase tracking-wider">
                Selo de Governança
              </h4>
              <p className="text-[15px] text-acaf-sage leading-relaxed font-light">
                Processos fiscalizados de acordo com as normas da CVM e diretrizes de integridade da LGPD.
              </p>
            </div>
          </div>
          <p className="text-[15px] font-mono uppercase tracking-[0.15em] text-acaf-forest border border-acaf-forest/20 px-4 py-2 bg-[#FAF9F6]">
            Auditoria Independente Anual
          </p>
        </div>

      </div>
    </section>
  );
};
