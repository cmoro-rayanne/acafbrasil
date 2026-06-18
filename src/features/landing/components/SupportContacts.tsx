import React from 'react';
import { Mail, Phone, MapPin, User, Landmark, HelpCircle } from 'lucide-react';

export const SupportContacts: React.FC = () => {
  return (
    <section id="suporte-contato" className="relative py-20 md:py-28 px-6 md:px-16 bg-[#FAF9F6] border-b border-acaf-forest/10 overflow-hidden">
      
      {/* Background Graphic Grid lines to maintain the architectural feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-12 h-full border-r border-[#0D3C1F]">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
            Atendimento e Canais
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-acaf-forest leading-tight tracking-tight">
            Contatos de Suporte
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mt-6 mb-4"></div>
          <p className="text-[17px] text-acaf-sage leading-relaxed font-light">
            Sempre que precisar ou tiver alguma dúvida, seguem os nossos contatos de atendimento comercial, administrativo e de assessoria jurídica.
          </p>
        </div>

        {/* Contacts Distributed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Comercial e Administrativo */}
          <div className="bg-white border border-acaf-forest/10 p-8 md:p-10 hover:border-acaf-forest/30 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between rounded-sm">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-acaf-coral font-semibold">
                  Setor Comercial
                </span>
                <div className="w-10 h-10 rounded-full bg-acaf-forest/5 flex items-center justify-center text-acaf-forest group-hover:bg-acaf-forest group-hover:text-acaf-sand transition-colors duration-500">
                  <HelpCircle className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-acaf-forest mb-6">
                Comercial & Administrativo
              </h3>

              {/* Detail fields */}
              <div className="space-y-4 text-[15px] text-acaf-sage font-light">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">Responsável</span>
                    <span className="text-[17px] font-semibold text-acaf-forest">Dona Bela</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">E-mail de Contato</span>
                    <a href="mailto:acafbr.contato@gmail.com" className="text-[17px] font-semibold text-acaf-forest hover:underline">
                      acafbr.contato@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">WhatsApp / Telefone</span>
                    <a href="tel:+554198866616" className="text-[17px] font-semibold text-acaf-forest hover:underline">
                      (41) 9886-6616
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Assessoria Jurídica */}
          <div className="bg-white border border-acaf-forest/10 p-8 md:p-10 hover:border-acaf-forest/30 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between rounded-sm">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-acaf-coral font-semibold">
                  Setor Jurídico
                </span>
                <div className="w-10 h-10 rounded-full bg-acaf-forest/5 flex items-center justify-center text-acaf-forest group-hover:bg-acaf-forest group-hover:text-acaf-sand transition-colors duration-500">
                  <Landmark className="w-4 h-4" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-acaf-forest mb-6">
                Assessoria Jurídica
              </h3>

              {/* Detail fields */}
              <div className="space-y-4 text-[15px] text-acaf-sage font-light">
                <div className="flex items-start gap-3">
                  <Landmark className="w-4 h-4 text-acaf-coral shrink-0 mt-1" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">Escritório Parceiro</span>
                    <span className="text-[17px] font-semibold text-acaf-forest">Cavet & Castamann Sociedade de Advogados</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">Contato Responsável</span>
                    <span className="text-[17px] font-semibold text-acaf-forest">Gioser Antonio Olivette Cavet</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">E-mail Jurídico</span>
                    <a href="mailto:gioser@cecadvogados.com.br" className="text-[17px] font-semibold text-acaf-forest hover:underline">
                      gioser@cecadvogados.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-acaf-coral shrink-0 mt-1" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">Endereço de Atendimento</span>
                    <span className="text-[16px] text-acaf-forest font-semibold leading-tight block">
                      AL. Augusto Stellfeld, 1314 (esq. Pres. Taunay)<br />
                      Bigorrilho, CEP 80430-140 — Curitiba, PR
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-acaf-coral shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-acaf-sage/60">Telefone Fixo</span>
                    <a href="tel:+554130191156" className="text-[17px] font-semibold text-acaf-forest hover:underline">
                      (41) 3019-1156
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
