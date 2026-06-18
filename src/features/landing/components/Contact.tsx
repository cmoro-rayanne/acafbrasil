import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, ArrowRight } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'O nome do responsável deve ter pelo menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'Informe a empresa, academia ou estúdio.' }),
  cnpj: z.string().min(14, { message: 'Insira um CNPJ válido.' }),
  phone: z.string().min(8, { message: 'Insira um telefone ou WhatsApp válido.' }),
  email: z.string().email({ message: 'Insira um e-mail corporativo válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      cnpj: '',
      phone: '',
      email: '',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Submitted data:', data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contato" className="relative py-20 md:py-32 px-6 md:px-16 bg-[#FAF9F6] overflow-hidden">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-12 h-full border-r border-acaf-forest">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[15px] uppercase tracking-[0.25em] text-acaf-coral mb-4 block font-semibold">
              QUERO ME ASSOCIAR AGORA
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-acaf-forest leading-tight tracking-tight mb-8">
              Solicite sua <span className="font-serif italic font-normal text-acaf-emerald">associação</span>
            </h2>
            <p className="text-[17px] text-acaf-sage leading-relaxed mb-6 font-light max-w-sm">
              Preencha os dados ao lado e nossa equipe entrará em contato em até 48h úteis para apresentar os planos e o processo de adesão.
            </p>
            <ul className="space-y-3 mb-10 text-[17px] text-acaf-sage font-light max-w-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0"></span>
                <span>Sem carência, sem multa de cancelamento</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0"></span>
                <span>Atendimento personalizado para o seu perfil</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0"></span>
                <span>Acesso imediato à área de associados</span>
              </li>
            </ul>

            {/* Bloco de Pagamento */}
            <div className="bg-[#F0EAE1]/40 border border-[#C5A880]/30 p-6 rounded-sm mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />
              <span className="block font-mono text-xs uppercase tracking-wider text-acaf-coral mb-3 font-semibold">
                PAGAMENTO:
              </span>
              <ul className="space-y-2 text-[15px] text-acaf-sage font-light mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0 mt-2"></span>
                  <span><strong>Adesão:</strong> 3 mensalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0 mt-2"></span>
                  <span><strong>Mensalidade ACAF:</strong> R$ 70,00 mensais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full shrink-0 mt-2"></span>
                  <span><strong>Mensalidade ASSESSORIA JURÍDICA:</strong> R$ 80,00 mensais – <em>este boleto será emitido diretamente pela assessoria</em>.</span>
                </li>
              </ul>
              <p className="text-[13px] font-mono text-acaf-sage/80 leading-relaxed border-t border-acaf-forest/10 pt-3">
                Caso você tenha um cupom de desconto, insira na próxima página.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Minimalist High-Conversion Form */}
        <div className="lg:col-span-7 bg-[#FAF9F6] border border-acaf-forest/10 p-8 md:p-12 relative">
          
          {isSubmitted ? (
            /* Success Feedback Layout */
            <div className="flex flex-col items-center justify-center text-center py-16 animate-reveal-up">
              <div className="w-16 h-16 bg-acaf-emerald/10 text-acaf-emerald flex items-center justify-center rounded-full mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-acaf-forest mb-3">
                Solicitação Recebida
              </h3>
              <p className="text-[17px] text-acaf-sage max-w-sm leading-relaxed mb-8 font-light">
                Agradecemos o seu interesse. Nosso comitê estratégico analisará as informações enviadas e entrará em contato em breve para apresentar os planos e o processo de adesão.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-slide-reveal px-6 py-3 border border-acaf-forest text-acaf-forest text-xs font-mono uppercase tracking-widest transition-all"
                style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            /* Form Layout */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome do responsável */}
                <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                  <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                    Nome do responsável
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Roberto Silva"
                    {...register('name')}
                    className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                  />
                  {errors.name && (
                    <span className="text-[17px] text-red-700 block mt-1">{errors.name.message}</span>
                  )}
                </div>

                {/* Empresa, academia ou estúdio */}
                <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                  <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                    Empresa, academia ou estúdio
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Fit Life Academia"
                    {...register('company')}
                    className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                  />
                  {errors.company && (
                    <span className="text-[17px] text-red-700 block mt-1">{errors.company.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CNPJ */}
                <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                  <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 00.000.000/0000-00"
                    {...register('cnpj')}
                    className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                  />
                  {errors.cnpj && (
                    <span className="text-[17px] text-red-700 block mt-1">{errors.cnpj.message}</span>
                  )}
                </div>

                {/* Telefone/WhatsApp */}
                <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                  <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: (11) 99999-9999"
                    {...register('phone')}
                    className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                  />
                  {errors.phone && (
                    <span className="text-[17px] text-red-700 block mt-1">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* E-mail corporativo */}
              <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  placeholder="Ex: roberto@empresa.com.br"
                  {...register('email')}
                  className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest placeholder-acaf-sage/40"
                />
                {errors.email && (
                  <span className="text-[17px] text-red-700 block mt-1">{errors.email.message}</span>
                )}
              </div>

              {/* Mensagem */}
              <div className="group border-b border-acaf-forest/20 focus-within:border-acaf-forest transition-colors py-2">
                <label className="block text-[15px] font-mono uppercase tracking-widest text-acaf-sage group-focus-within:text-acaf-forest transition-colors">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente sua solicitação de associação..."
                  {...register('message')}
                  className="w-full bg-transparent border-none outline-none py-1 text-[17px] text-acaf-forest resize-none placeholder-acaf-sage/40"
                />
                {errors.message && (
                  <span className="text-[17px] text-red-700 block mt-1">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-slide-reveal group w-full bg-acaf-forest text-acaf-sand py-4 text-xs font-mono uppercase tracking-widest hover:text-acaf-forest transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ '--slide-color': '#FAF9F6' } as React.CSSProperties}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar solicitação'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
