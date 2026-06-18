import React from 'react';
import { Layers, FileSearch, ShieldCheck, BarChart4, ArrowUpRight } from 'lucide-react';

interface SolutionCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ number, icon, title, description, features }) => {
  return (
    <div className="group relative bg-[#FAF9F6] border border-acaf-forest/10 p-8 flex flex-col justify-between hover:border-acaf-forest transition-all duration-500 hover:shadow-xl hover:shadow-acaf-forest/5 hover:-translate-y-1">
      
      {/* Visual background details */}
      <div className="absolute top-4 right-4 text-[10px] font-mono text-acaf-sage opacity-50 group-hover:opacity-100 transition-opacity">
        {number}
      </div>

      <div className="mb-8">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-lg bg-acaf-forest/5 text-acaf-forest flex items-center justify-center mb-6 group-hover:bg-acaf-forest group-hover:text-acaf-sand transition-colors duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-sans text-lg font-semibold text-acaf-forest mb-3 uppercase tracking-wider">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[17px] text-acaf-sage leading-relaxed mb-6 font-light">
          {description}
        </p>

        {/* Features bullet list */}
        <ul className="space-y-2 border-t border-acaf-forest/5 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-[15px] text-acaf-sage">
              <span className="w-1 h-1 bg-acaf-coral rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button link */}
      <div className="mt-8 flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-acaf-forest group-hover:text-acaf-emerald transition-colors">
        <span>Saiba mais</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
};

export const Solutions: React.FC = () => {
  const solutions = [
    {
      number: "01 / FOCO EM CAPITAL",
      icon: <Layers className="w-6 h-6" />,
      title: "Fomento Estruturado",
      description: "Aceleração estratégica de recebíveis e estruturação de operações financeiras sob medida para fortalecer o caixa corporativo.",
      features: [
        "Liquidez imediata sob taxas claras",
        "Operações simplificadas via plataforma",
        "Análise preditiva de crédito"
      ]
    },
    {
      number: "02 / BLINDAGEM OPERACIONAL",
      icon: <FileSearch className="w-6 h-6" />,
      title: "Auditoria Independente",
      description: "Revisão meticulosa de processos, transações e conformidade contábil para garantir a transparência exigida pelo mercado.",
      features: [
        "Auditoria de balanço e conciliação",
        "Mapeamento e mitigação de gargalos",
        "Certificação de segurança fiscal"
      ]
    },
    {
      number: "03 / RIGOR REGULATÓRIO",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Conformidade & Compliance",
      description: "Mapeamento regulatório sistemático para assegurar que a empresa atue alinhada a diretrizes de segurança, governança e ética.",
      features: [
        "Adequação a órgãos federais",
        "Implementação rigorosa de LGPD",
        "Código de ética e canal de denúncia"
      ]
    },
    {
      number: "04 / VISÃO ESTRATÉGICA",
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Cultura de Transparência",
      description: "Modelagem e divulgação de dados corporativos de forma transparente, fortalecendo a reputação da marca e gerando confiança.",
      features: [
        "Prestação de contas simplificada",
        "Integração contínua de BI",
        "Comunicação clara com investidores"
      ]
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block">
              Nossos Pilares
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-acaf-forest leading-tight tracking-tight">
              Soluções integradas para mitigar riscos e impulsionar o seu <span className="font-serif italic font-normal text-acaf-emerald">crescimento sustentável</span>.
            </h2>
          </div>
          <p className="text-[17px] text-acaf-sage max-w-xs mt-6 md:mt-0 leading-relaxed font-light">
            Soluções completas desenhadas para responder com precisão às demandas de governança e fomento contemporâneas.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => (
            <SolutionCard key={index} {...sol} />
          ))}
        </div>

      </div>
    </section>
  );
};
