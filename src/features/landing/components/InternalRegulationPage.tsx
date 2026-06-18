import React from 'react';
import { ArrowLeft, BookOpen, ShieldCheck, FileText } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export const InternalRegulationPage: React.FC = () => {
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
        
        {/* Back Link */}
        <div className="mb-12 border-b border-acaf-forest/10 pb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-acaf-forest hover:text-acaf-coral transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Início
          </a>
        </div>

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
            Governança e Normas
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-acaf-forest leading-tight tracking-tight mb-6">
            Regimento Interno
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-acaf-sage leading-relaxed font-light">
            Regulamento que rege o funcionamento administrativo, os deveres dos associados e as normas de conformidade técnica adotadas pela ACAF Brasil.
          </p>
        </div>

        {/* Articles Content */}
        <div className="bg-white border border-acaf-forest/10 p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <BookOpen className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Capítulo I - Do Objeto e Finalidades</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 1º.</strong> Este Regimento Interno tem por finalidade detalhar as regras estatutárias de conduta, ética, governança administrativa e procedimentos fiscais adotados pela ACAF Brasil (Associação Corporativa de Auditoria e Fomento).
              </p>
              <p>
                <strong>Art. 2º.</strong> Todos os centros de atividade física (academias, estúdios e boxes de treinamento) associados estão sujeitos às deliberações técnicas deste documento, visando manter a integridade fiscal e regulatória perante órgãos federais de fiscalização.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <ShieldCheck className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Capítulo II - Dos Direitos e Deveres dos Associados</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 3º.</strong> Constituem direitos dos associados em situação regular:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Utilizar as plataformas de fomento e aceleração de recebíveis desenvolvidas pela associação;</li>
                <li>Solicitar assessoria jurídica consultiva para relações trabalhistas, de consumo e tributárias;</li>
                <li>Participar de congressos, eventos técnicos e guias fiscais desenvolvidos pela ACAF de forma exclusiva.</li>
              </ul>
              <p>
                <strong>Art. 4º.</strong> Constituem deveres fundamentais:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Manter a pontualidade nas contribuições mensais de fomento e assessoria;</li>
                <li>Cumprir integralmente as normas da vigilância sanitária, PMOC (Plano de Manutenção, Operação e Controle) e regras de segurança coletiva vigentes;</li>
                <li>Agir em conformidade com o Código de Ética e as políticas de privacidade da associação.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <FileText className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Capítulo III - Das Contribuições e Manutenção</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 5º.</strong> A manutenção das atividades operacionais e a prestação de serviços jurídicos perante os associados são financiadas por contribuições corporativas mensais, cujos valores são revistos anualmente em Assembleia Geral Executiva.
              </p>
              <p>
                <strong>Art. 6º.</strong> O atraso superior a 60 dias nas obrigações financeiras resultará na suspensão temporária do acesso à plataforma de fomento e à consultoria de auditoria, até a devida regularização fiscal.
              </p>
            </div>
          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
};
