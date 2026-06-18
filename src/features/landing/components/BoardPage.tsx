import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface MemberCardProps {
  image: string;
  role: string;
  name: string;
  bio: string;
  education: string;
  area: string;
  since: string;
  linkedin: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  image,
  role,
  name,
  bio,
  education,
  area,
  since,
  linkedin
}) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-md overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl border border-[#0D3C1F]/10 h-full">
      {/* Top Container: Image */}
      <div className="relative aspect-[4/3] bg-[#F0EAE1] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute top-4 right-4 bg-white text-[#0D3C1F] text-[10px] font-mono tracking-widest px-3 py-1 border border-[#0D3C1F]/10 shadow-sm font-semibold select-none z-10">
          {since}
        </div>
      </div>

      {/* Content Block */}
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          {/* Role */}
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#F69066] uppercase mb-2 block font-semibold">
            {role}
          </span>
          {/* Name */}
          <h3 className="font-sans text-lg font-bold text-[#0D3C1F] mb-2">
            {name}
          </h3>
          {/* Bio */}
          <p className="text-[14px] text-[#4A6B5A] leading-relaxed font-light min-h-[50px] mb-4">
            {bio}
          </p>
        </div>

        <div>
          {/* Divider */}
          <div className="border-t border-[#0D3C1F]/10 my-4"></div>

          {/* Technical Metadata */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="block text-[9px] font-mono tracking-wider text-[#0D3C1F]/40 uppercase">
                Formação
              </span>
              <span className="block text-[12px] font-sans font-semibold text-[#0D3C1F] mt-0.5 leading-tight">
                {education}
              </span>
            </div>
            <div>
              <span className="block text-[9px] font-mono tracking-wider text-[#0D3C1F]/40 uppercase">
                Foco Técnico
              </span>
              <span className="block text-[12px] font-sans font-semibold text-[#0D3C1F] mt-0.5 leading-tight">
                {area}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#0D3C1F]/10 my-4"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#0D3C1F]/50 uppercase tracking-widest">
              ACAF Conselheiro
            </span>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-8 h-8 rounded-sm border border-[#0D3C1F]/15 flex items-center justify-center text-[#0D3C1F] hover:bg-[#0D3C1F]/5 hover:text-[#C5A880] hover:border-[#C5A880]/30 transition-all duration-300"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BoardPage: React.FC = () => {
  const boardMembers = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
      role: "Diretor Presidente",
      name: "Dr. Fernando Bastos",
      bio: "Especialista em regulação setorial e relações institucionais com mais de 20 anos de governança no setor de saúde.",
      education: "Direito Público",
      area: "Relações Regulatórias",
      since: "Gestão 2024",
      linkedin: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      role: "Diretora Vice-Presidente",
      name: "Profa. Renata Melo",
      bio: "Pesquisadora de fisiologia e consultora técnica de redes de academias com foco em gestão de qualidade de atendimento.",
      education: "Doutorado Ed. Física",
      area: "Desenvolvimento Técnico",
      since: "Gestão 2024",
      linkedin: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      role: "Diretora Financeira",
      name: "Dra. Carolina Mendes",
      bio: "Auditora corporativa independente com histórico consolidado em reestruturação fiscal e fomento para empresas fitness.",
      education: "Ciências Contábeis",
      area: "Governança & Caixa",
      since: "Gestão 2024",
      linkedin: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      role: "Diretor de Operações",
      name: "Marcus Vinícius",
      bio: "Empreendedor e gestor especialista em escalabilidade operacional de boxes de crossfit e estúdios de treinamento.",
      education: "MBA Gestão Fitness",
      area: "Eficiência Operacional",
      since: "Gestão 2024",
      linkedin: "#"
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-[#0D3C1F] selection:text-[#FAF9F6] font-sans bg-[#F8FAF7]">
      
      {/* Fixed Noise Overlay */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* Navigation Header */}
      <Header />

      <main className="relative z-10 pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0D3C1F] hover:text-[#C5A880] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Início
          </a>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#F69066] mb-4 block font-semibold">
            Conselho Diretivo
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0D3C1F] leading-tight tracking-tight">
            Nossa Diretoria
          </h1>
          <div className="w-16 h-[2.5px] bg-[#C5A880] mt-6 mb-6"></div>
          <p className="text-[19px] text-[#4A6B5A] leading-relaxed font-light">
            Conheça as lideranças corporativas da ACAF Brasil. Um time qualificado que atua na defesa dos interesses e desenvolvimento operacional dos centros de atividade física.
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};
