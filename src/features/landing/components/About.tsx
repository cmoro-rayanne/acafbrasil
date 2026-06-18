import React, { useEffect, useRef, useState } from 'react';
import { Eye, Shield, Landmark } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 md:px-16 bg-acaf-sand border-b border-acaf-forest/10 overflow-hidden"
    >
      
      {/* Background architectural element */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-acaf-forest/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left column: Header, Title & Description */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="font-mono text-[15px] uppercase tracking-[0.25em] text-acaf-coral mb-4 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-acaf-forest leading-tight tracking-tight">
            Uma associação que conecta e impulsiona o <span className="font-serif italic font-normal text-acaf-emerald">setor fitness</span>.
          </h2>
          <div className="w-16 h-[2px] bg-acaf-emerald mt-6 mb-8"></div>
          
          {/* Animated Description Text */}
          <p className={`text-[16px] text-acaf-sage leading-relaxed font-light transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Há mais de uma década, a ACAF Brasil atua como ponte entre proprietários, gestores e profissionais dos centros de atividade física, defendendo o setor diante de órgãos reguladores e oferecendo soluções práticas para o dia a dia operacional.
          </p>
        </div>

        {/* Right column: Core values list (stacked one below the other) */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 w-full">
          
          {/* Card 1: Missão */}
          <div 
            className={`bg-[#FAF9F6] border border-acaf-forest/10 p-6 rounded-xl shadow-sm flex gap-4 w-full transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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
          <div 
            className={`bg-[#FAF9F6] border border-acaf-forest/10 p-6 rounded-xl shadow-sm flex gap-4 w-full transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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
          <div 
            className={`bg-[#FAF9F6] border border-acaf-forest/10 p-6 rounded-xl shadow-sm flex gap-4 w-full transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
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
    </section>
  );
};
