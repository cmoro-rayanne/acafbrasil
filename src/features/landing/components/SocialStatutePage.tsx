import React from 'react';
import { ArrowLeft, Landmark, FileText, Scale } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

export const SocialStatutePage: React.FC = () => {
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
            Constituição Jurídica
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-acaf-forest leading-tight tracking-tight mb-6">
            Estatuto Social
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-acaf-sage leading-relaxed font-light">
            A ata oficial de fundação e a estrutura legal que rege a personalidade jurídica da ACAF Brasil sob a Lei Federal.
          </p>
        </div>

        {/* Articles Content */}
        <div className="bg-white border border-acaf-forest/10 p-8 md:p-12 shadow-sm space-y-10">
          
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <Landmark className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Título I - Denominação, Sede e Fins</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 1º.</strong> A ACAF Brasil (Associação Corporativa de Auditoria e Fomento) é uma associação civil de direito privado, sem fins econômicos, regida pelo presente Estatuto Social e pelas disposições legais aplicáveis.
              </p>
              <p>
                <strong>Art. 2º.</strong> A associação tem sede e foro jurídico na cidade de Curitiba, PR, podendo atuar e constituir subsedes em todo o território nacional.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <Scale className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Título II - Dos Objetivos Constitucionais</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 3º.</strong> São objetivos precípuos da associação:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Defender os direitos inerentes a sua classe e subclasse em âmbito nacional, conforme previsto no <strong>art. 103, inc. IX da Constituição Federal</strong>;
                </li>
                <li>
                  Defender os direitos da classe nos casos vinculados ao interesse difuso decorrentes do <strong>Código de Defesa do Consumidor</strong>, utilizando-se da prerrogativa contida na <strong>Lei Federal 7.347/1985</strong>, inclusive em âmbito tributário e de preservação da atividade econômica;
                </li>
                <li>
                  Representar e promover os interesses coletivos da classe perante sindicatos e órgãos públicos fiscalizadores federais, estaduais e municipais.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-acaf-forest">
              <FileText className="w-5 h-5 text-acaf-coral" />
              <h2 className="text-xl font-serif font-bold">Título III - Da Diretoria e Órgãos Deliberativos</h2>
            </div>
            <div className="text-[17px] text-acaf-sage font-light leading-relaxed space-y-3">
              <p>
                <strong>Art. 4º.</strong> A associação é composta e administrada pelos seguintes órgãos diretivos:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Assembleia Geral Executiva (órgão soberano);</li>
                <li>Conselho Executivo (Diretoria);</li>
                <li>Conselho Fiscal de Auditoria Independente.</li>
              </ul>
              <p>
                <strong>Art. 5º.</strong> Os mandatos diretivos têm duração de 4 anos, permitindo-se a reeleição de acordo com as diretrizes de ética internas e prestação de contas fiscais periódicas.
              </p>
            </div>
          </section>

        </div>

      </main>

      <Footer />

    </div>
  );
};
