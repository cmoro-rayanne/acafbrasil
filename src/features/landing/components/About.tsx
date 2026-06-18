import React from 'react';
import { Eye, Shield, Landmark } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-20 md:py-32 px-6 md:px-16 bg-acaf-sand border-b border-acaf-forest/10 overflow-hidden">
      
      {/* Background architectural element */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-acaf-forest/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left column: Header & Tag */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-mono text-[15px] uppercase tracking-[0.25em] text-acaf-coral mb-4 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-acaf-forest leading-tight tracking-tight max-w-md">
            Uma associação que conecta e impulsiona o <span className="font-serif italic font-normal text-acaf-emerald">setor fitness</span>.
          </h2>
          <div className="w-16 h-[2px] bg-acaf-emerald mt-6"></div>
        </div>

        {/* Right column: Description & Values grid */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-[19px] sm:text-[21px] text-acaf-sage mb-8 leading-relaxed font-light">
            Há mais de uma década, a ACAF Brasil atua como ponte entre proprietários, gestores e profissionais dos centros de atividade física, defendendo o setor diante de órgãos reguladores e oferecendo soluções práticas para o dia a dia operacional.
          </p>

          {/* Core values list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            
            {/* Card 1: Missão */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-acaf-forest/5 flex items-center justify-center text-acaf-forest">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-[17px] font-semibold text-acaf-forest mb-2 uppercase tracking-wider">
                  Missão
                </h4>
                <p className="text-[15px] text-acaf-sage leading-relaxed font-light">
                  Representar e fortalecer os centros de atividade física do Brasil, promovendo desenvolvimento técnico e gestão profissional.
                </p>
              </div>
            </div>

            {/* Card 2: Visão */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-acaf-forest/5 flex items-center justify-center text-acaf-forest">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-[17px] font-semibold text-acaf-forest mb-2 uppercase tracking-wider">
                  Visão
                </h4>
                <p className="text-[15px] text-acaf-sage leading-relaxed font-light">
                  Ser referência nacional como entidade que une, capacita e defende os interesses do setor fitness brasileiro.
                </p>
              </div>
            </div>

            {/* Card 3: Valores */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-acaf-forest/5 flex items-center justify-center text-acaf-forest">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-[17px] font-semibold text-acaf-forest mb-2 uppercase tracking-wider">
                  Valores
                </h4>
                <p className="text-[15px] text-acaf-sage leading-relaxed font-light">
                  Ética, colaboração, profissionalismo, inovação e compromisso com a saúde e bem-estar da população.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
