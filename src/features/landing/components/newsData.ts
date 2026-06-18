export interface Article {
  id: string;
  image: string;
  date: string;
  tag: string;
  title: string;
  description: string;
  content: string[];
  author: string;
  readTime: string;
}

export const newsArticles: Article[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    date: "18 de Junho, 2026",
    tag: "Regulatório",
    title: "ACAF Brasil debate novas regras sanitárias e de acessibilidade com órgãos técnicos",
    description: "Debate detalhado sobre conformidade de climatização, qualidade do ar e normas de acesso facilitado para estúdios e academias de grande porte.",
    author: "Dr. Fernando Bastos",
    readTime: "5 min de leitura",
    content: [
      "O setor fitness brasileiro enfrenta um momento de consolidação regulatória sem precedentes. Nesta semana, a diretoria executiva da ACAF Brasil reuniu-se com comissões técnicas nacionais de regulação para alinhar a interpretação das normas vigentes de acessibilidade e renovação mecânica de ar em grandes recintos.",
      "As novas resoluções detalham parâmetros operacionais específicos para estabelecimentos comerciais com área útil superior a 500 metros quadrados. Entre os pontos centrais do debate, destaca-se a exigência de laudos semestrais de qualidade microbiológica do ar (PMOC) e a instalação de rampas antiderrapantes e elevadores verticais em instalações com mais de um piso.",
      "Segundo Dr. Fernando Bastos, presidente da ACAF, 'nossa missão é orientar as academias e estúdios sobre os procedimentos corretos de adequação, garantindo segurança jurídica aos proprietários e uma experiência inclusiva, saudável e acessível para todos os clientes.'",
      "O comitê regulador abrirá um canal de consulta pública de 30 dias para receber contribuições adicionais, e a ACAF Brasil disponibilizará aos seus associados um manual interativo com os templates oficiais de conformidade."
    ]
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
    date: "12 de Junho, 2026",
    tag: "Mercado",
    title: "Crescimento de centros de treinamento funcional bate recorde histórico nacional",
    description: "Estudo semestral divulgado aponta alta demanda e faturamento recorde em academias e boxes focados em treinos personalizados e de alta intensidade.",
    author: "Profa. Renata Melo",
    readTime: "4 min de leitura",
    content: [
      "A busca por bem-estar, saúde integral e rotinas ativas de treino registrou uma alta expressiva no primeiro semestre de 2026. Segundo levantamento estatístico elaborado pelo observatório de mercado da ACAF Brasil, os boxes de treinamento funcional e estúdios especializados apresentaram um faturamento recorde nacional.",
      "Os dados consolidados indicam uma expansão setorial média de 18% em relação ao ano anterior. Esse crescimento é impulsionado principalmente pela mudança de hábitos da população, que passou a valorizar mais os treinos em pequenos grupos, acompanhamento dinâmico de fisiologia esportiva e flexibilidade de horários.",
      "Além disso, a taxa de fidelização de alunos nesses modelos de estúdios chega a ser 25% superior à das academias tradicionais focadas apenas em musculação livre. Isso demonstra o valor da personalização e do senso de comunidade nos treinos funcionais modernos.",
      "A tendência sinaliza uma grande oportunidade de expansão para pequenos e médios empreendedores fitness que investem em capacitação técnica dos instrutores e em equipamentos com alto padrão de biomecânica."
    ]
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    date: "05 de Junho, 2026",
    tag: "Gestão",
    title: "ACAF lança guia prático de precificação e inteligência financeira para associados",
    description: "Um manual completo desenvolvido por auditores especializados para auxiliar gestores no cálculo de ponto de equilíbrio, margem operacional e fluxo de caixa.",
    author: "Dra. Carolina Mendes",
    readTime: "6 min de leitura",
    content: [
      "A saúde financeira de uma academia ou estúdio depende de uma modelagem de preços precisa e de um controle rigoroso de custos fixos e variáveis. Para sanar as dúvidas mais frequentes de gestores e administradores, a ACAF lança este mês o Guia de Inteligência Financeira Fitness.",
      "O manual apresenta planilhas dinâmicas, fórmulas de custeio por absorção e técnicas recomendadas para calcular a taxa de churn ideal e o custo de aquisição de clientes (CAC). A publicação foi coordenada pela diretora financeira da associação, Dra. Carolina Mendes, que aponta a falta de controle de fluxo de caixa como a principal causa de fechamento precoce de negócios no país.",
      "'A maioria dos gestores define o preço de mensalidade baseando-se apenas na concorrência local, sem considerar seus custos ocultos de manutenção preventiva de maquinário e depreciação de ativos. Nosso guia reverte esse cenário por meio de etapas simples e ferramentas de apoio', afirma Mendes.",
      "O material é de acesso exclusivo para membros ativos da ACAF Brasil e pode ser baixado em formato PDF na área restrita do portal oficial."
    ]
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    date: "28 de Maio, 2026",
    tag: "Tecnologia",
    title: "Como a Inteligência Artificial está transformando o acompanhamento físico nas academias",
    description: "Novos softwares integrados a wearables permitem criar planilhas de treinos evolutivas e identificar padrões de fadiga em tempo real.",
    author: "Marcus Vinícius",
    readTime: "7 min de leitura",
    content: [
      "A tecnologia de Inteligência Artificial deixou de ser uma tendência distante para se tornar realidade nas salas de musculação e estúdios modernos. Softwares analíticos integrados a relógios inteligentes e sensores biométricos estão revolucionando a prescrição de treinos.",
      "Através da coleta contínua de frequência cardíaca, variabilidade de pulso e horas de sono, algoritmos computacionais conseguem prever o nível de recuperação muscular do aluno. Com isso, os treinadores recebem alertas automáticos sugerindo ajustes de carga ou volume de exercício para evitar lesões por overreaching.",
      "Estudos conduzidos em parceria com a FGV Business School e Insper revelam que estabelecimentos que adotaram painéis de dados baseados em IA registraram um aumento de 35% no engajamento dos alunos no primeiro trimestre de uso.",
      "A ACAF Brasil está liderando projetos piloto em estúdios de parceiros associados para validar a integração e criar protocolos nacionais de segurança de dados de saúde no ecossistema fitness brasileiro."
    ]
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    date: "20 de Maio, 2026",
    tag: "Eventos",
    title: "ACAF Brasil confirma data do maior Congresso Nacional de Gestão Fitness de 2026",
    description: "O evento reunirá especialistas em governança, investidores e proprietários para debater tendências, tributação e inovações do setor.",
    author: "Profa. Renata Melo",
    readTime: "5 min de leitura",
    content: [
      "O principal encontro de líderes do setor fitness nacional já tem data definida. A ACAF Brasil confirmou a realização do Congresso de Gestão e Auditoria Fitness 2026 para os dias 15, 16 e 17 de Outubro no centro de convenções corporativas em Curitiba, PR.",
      "A edição deste ano focará em inovação contínua, governança corporativa ativa, reforma tributária e fomento para redes regionais e boxes independentes. O congresso trará palestras de grandes investidores internacionais, mesas de debate sobre sustentabilidade operacional e expositores com as últimas inovações de biomecânica esportiva.",
      "O evento contará também com workshops práticos focados em compliance de dados trabalhistas e marketing digital para centros de atividade física. 'É a oportunidade ideal para networking estratégico de alta performance', destaca Renata Melo, diretora de eventos da ACAF.",
      "As inscrições prévias com desconto promocional estarão abertas a partir do próximo mês, com lote exclusivo gratuito para associados premium."
    ]
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop",
    date: "10 de Maio, 2026",
    tag: "Jurídico",
    title: "Planejamento tributário em academias: Como economizar recursos com governança fiscal",
    description: "Auditores explicam a importância da separação de serviços e as vantagens da transição tributária planejada para o setor fitness.",
    author: "Dra. Carolina Mendes",
    readTime: "8 min de leitura",
    content: [
      "A carga tributária no Brasil é complexa, mas uma gestão fiscal estratégica focada em conformidade legal pode salvar milhares de reais anualmente em impostos corporativos. Academias de ginástica e estúdios de treinamento possuem peculiaridades fiscais valiosas.",
      "Em muitos casos, a correta segregação contábil entre a prestação de serviços educacionais/esportivos e a venda de produtos (como suplementos e roupas) ou serviços adicionais de avaliação física gera créditos fiscais imediatos e evita bitributações desnecessárias.",
      "Além do mais, a escolha estruturada entre Simples Nacional, Lucro Presumido e Lucro Real deve ser avaliada anualmente. Academias de médio porte com altas despesas de depreciação de maquinário importado, por exemplo, encontram no Lucro Real uma economia substancial.",
      "A assessoria jurídica da ACAF Brasil disponibiliza auditorias preliminares gratuitas de simulação tributária como benefício direto para simplificar a vida fiscal dos nossos associados."
    ]
  }
];
