// FILE: data/plans.js
// ============================================
// PLANOS E VALORES - EDITE AQUI
// ============================================

const PLANS_DATA = {
  currency: "R$",
  
  plans: [
    {
      id: "landing-motion",
      name: "Landing Page High-End",
      price: 543.21,
      period: "",
      maintenance: 100,
      description: "Design premium com animações GSAP e foco em conversão",
      highlighted: false,
      badge: null,
      features: [
        { text: "Design premium interativo", included: true },
        { text: "Animações GSAP/Anime.js", included: true },
        { text: "Storytelling visual", included: true },
        { text: "SEO técnico avançado", included: true },
        { text: "Hospedagem Cloudflare", included: true },
        { text: "Monitoramento 24/7", included: true },
        { text: "Painel administrativo", included: false },
        { text: "Catálogo de produtos", included: false },
        { text: "Sistema de pagamento", included: false },
        { text: "Integração IA", included: false },
      ],
      cta: {
        text: "Solicitar Orçamento",
        whatsapp: "5500000000000",
        message: "Olá! Tenho interesse na Landing Page High-End."
      }
    },
    {
      id: "landing-vitrine",
      name: "Landing + Vitrine",
      price: 998.76,
      period: "",
      maintenance: 200,
      description: "Landing integrada com catálogo estático de produtos",
      highlighted: false,
      badge: null,
      features: [
        { text: "Tudo do plano anterior", included: true },
        { text: "Catálogo de produtos (JSON)", included: true },
        { text: "Botão WhatsApp por produto", included: true },
        { text: "Até 50 produtos inclusos", included: true },
        { text: "Ajustes simples mensais", included: true },
        { text: "Painel administrativo", included: false },
        { text: "Carrinho de compras", included: false },
        { text: "Sistema de pagamento", included: false },
        { text: "Gestão de estoque", included: false },
        { text: "Integração IA", included: false },
      ],
      cta: {
        text: "Solicitar Orçamento",
        whatsapp: "5500000000000",
        message: "Olá! Tenho interesse na Landing + Vitrine."
      }
    },
    {
      id: "landing-admin",
      name: "Landing + Painel Admin",
      price: 1543.21,
      period: "",
      maintenance: 300,
      description: "Site completo com painel de controle personalizado",
      highlighted: true,
      badge: "Mais Escolhido",
      features: [
        { text: "Tudo do plano anterior", included: true },
        { text: "Painel administrativo CMS", included: true },
        { text: "Upload de fotos pelo cliente", included: true },
        { text: "Gestão completa de produtos", included: true },
        { text: "Carrinho + pedido WhatsApp", included: true },
        { text: "2-3 alterações mensais", included: true },
        { text: "Suporte técnico prioritário", included: true },
        { text: "Sistema de pagamento", included: false },
        { text: "Área do cliente", included: false },
        { text: "Integração IA", included: false },
      ],
      cta: {
        text: "Solicitar Orçamento",
        whatsapp: "5500000000000",
        message: "Olá! Tenho interesse na Landing + Painel Admin."
      }
    },
    {
      id: "ecommerce-completo",
      name: "E-commerce Completo",
      price: 2543.21,
      period: "",
      maintenance: 400,
      description: "Loja virtual completa com todas as funcionalidades",
      highlighted: false,
      badge: "Premium",
      features: [
        { text: "Tudo do plano anterior", included: true },
        { text: "Pagamentos (Stripe/Mercado Pago)", included: true },
        { text: "Cálculo automático de frete", included: true },
        { text: "Gestão completa de estoque", included: true },
        { text: "Área do cliente com login", included: true },
        { text: "Backups automáticos", included: true },
        { text: "CDN Global", included: true },
        { text: "Suporte prioritário máximo", included: true },
        { text: "Relatórios de vendas", included: true },
        { text: "Sistema de cupons", included: true },
      ],
      cta: {
        text: "Solicitar Orçamento",
        whatsapp: "5500000000000",
        message: "Olá! Tenho interesse no E-commerce Completo."
      }
    }
  ],

  // Serviços adicionais
  additionalServices: [
    {
      id: "ia-basica",
      name: "Integração IA Básica",
      setupPrice: 1500,
      monthlyPrice: 300,
      description: "Chatbot inteligente para dúvidas simples",
      features: [
        "Responde sobre pedidos",
        "Informa métodos de pagamento",
        "Informações sobre entrega",
        "Disponível 24/7"
      ]
    },
    {
      id: "ia-media",
      name: "Integração IA Média",
      setupPrice: 3800,
      monthlyPrice: 500,
      description: "IA completa com agendamentos e CRM",
      features: [
        "Tudo da IA Básica",
        "Agenda reuniões automaticamente",
        "Salva leads no CRM",
        "Envia e ouve áudios",
        "Processa imagens"
      ]
    },
    {
      id: "ia-avancada",
      name: "Integração IA Avançada",
      setupPrice: null,
      monthlyPrice: null,
      priceLabel: "Sob Consulta",
      description: "Solução enterprise multicanal",
      features: [
        "Tudo da IA Média",
        "Treinamento com bases complexas",
        "Valida pagamentos",
        "Multi-canais (Instagram, Facebook, etc)",
        "Customizações ilimitadas"
      ]
    },
    {
      id: "trafego-pago",
      name: "Gestão de Tráfego Pago",
      setupPrice: 350,
      monthlyPrice: 350,
      description: "Gestão profissional de anúncios",
      features: [
        "Campanhas Google Ads",
        "Campanhas Meta Ads",
        "Relatórios semanais",
        "Otimização contínua"
      ]
    },
    {
      id: "crm",
      name: "CRM Personalizado",
      setupPrice: 0,
      monthlyPrice: 50,
      description: "Plataforma de gestão de leads",
      features: [
        "Organização de contatos",
        "Histórico de interações",
        "Funil de vendas",
        "Relatórios básicos"
      ]
    },
    {
      id: "gestao-mkt",
      name: "Gestão de Marketing Completa",
      setupPrice: 1350,
      monthlyPrice: 1350,
      description: "Analistas dedicados ao seu negócio",
      features: [
        "Análise de mercado",
        "Criação de campanhas",
        "Orçamentos de mídia off",
        "Planos estratégicos mensais",
        "Roteiros de vídeo"
      ]
    }
  ],

  // Serviços de criação de conteúdo
  contentServices: [
    {
      id: "gravacao-video",
      name: "Gravação de Vídeos",
      unitPrice: 100,
      description: "Gravação profissional sem edição (FRELLA)"
    },
    {
      id: "edicao-video",
      name: "Edição de Vídeos",
      unitPrice: 75,
      description: "Edição de vídeos até 60 segundos"
    },
    {
      id: "criativos",
      name: "Artes Estáticas",
      unitPrice: 35,
      description: "Design de artes para redes sociais"
    },
    {
      id: "animacoes",
      name: "Animações",
      unitPrice: 100,
      description: "Artes animadas para destaque"
    }
  ],

  // Cadastro de produtos
  productRegistration: [
    {
      type: "Simples",
      price: 2,
      description: "Nome, Preço, 1 Foto e Descrição curta"
    },
    {
      type: "Intermediário",
      price: 5,
      description: "Simples + Categorias, Tags, SEO e tratamento de foto"
    },
    {
      type: "Completo",
      price: 10,
      description: "Intermediário + Copy persuasiva e variações (P/M/G, Cores)"
    }
  ],

  comparison: {
    enabled: true,
    title: "Compare os Planos",
    subtitle: "Escolha o plano ideal para o momento da sua empresa"
  }
};

// ============================================
// SERVIÇOS - EDITE AQUI
// ============================================

const SERVICES_DATA = [
  {
    id: "social",
    icon: "📱",
    title: "Gestão de Redes Sociais",
    shortDesc: "Presença digital que converte",
    fullDesc: "Gerenciamos suas redes sociais com estratégia, criatividade e foco em resultados. Criamos conteúdo que engaja e converte.",
    deliverables: ["Calendário editorial", "Artes profissionais", "Copywriting estratégico", "Gestão de comunidade"],
    benefits: ["Aumento de engajamento", "Mais visibilidade", "Autoridade no nicho", "Leads qualificados"]
  },
  {
    id: "content",
    icon: "🎨",
    title: "Produção de Conteúdo",
    shortDesc: "Conteúdo que se destaca",
    fullDesc: "Criamos artes, vídeos e animações que param o scroll e fazem sua marca ser lembrada.",
    deliverables: ["Artes para feed", "Reels e vídeos", "Animações", "Stories estratégicos"],
    benefits: ["Visual profissional", "Identidade consistente", "Maior alcance", "Diferenciação"]
  },
  {
    id: "traffic",
    icon: "🎯",
    title: "Tráfego Pago",
    shortDesc: "Anúncios que vendem",
    fullDesc: "Campanhas estratégicas no Meta Ads e Google Ads para trazer clientes prontos para comprar.",
    deliverables: ["Estratégia de campanhas", "Criativos otimizados", "Segmentação avançada", "Otimização contínua"],
    benefits: ["ROI positivo", "Escala previsível", "Leads qualificados", "Vendas diretas"]
  },
  {
    id: "sites",
    icon: "💻",
    title: "Criação de Sites",
    shortDesc: "Sites que convertem",
    fullDesc: "Desenvolvemos sites modernos, rápidos e otimizados para converter visitantes em clientes.",
    deliverables: ["Design exclusivo", "Desenvolvimento responsivo", "SEO otimizado", "Painel administrativo"],
    benefits: ["Presença profissional", "Mais conversões", "Credibilidade", "Autonomia"]
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "E-commerce & Marketplace",
    shortDesc: "Sua loja online completa",
    fullDesc: "Lojas virtuais completas com gestão de produtos, pagamentos e integrações.",
    deliverables: ["Loja completa", "Gateway de pagamento", "Gestão de estoque", "Integrações"],
    benefits: ["Vendas 24/7", "Escalabilidade", "Controle total", "Automação"]
  },
  {
    id: "branding",
    icon: "✨",
    title: "Branding & Identidade",
    shortDesc: "Marca memorável",
    fullDesc: "Construímos identidades visuais que comunicam a essência da sua empresa.",
    deliverables: ["Logo profissional", "Manual de marca", "Papelaria", "Aplicações"],
    benefits: ["Reconhecimento", "Profissionalismo", "Consistência", "Valor percebido"]
  },
  {
    id: "audiovisual",
    icon: "🎬",
    title: "Filmagem & Fotografia",
    shortDesc: "Imagens que vendem",
    fullDesc: "Produção audiovisual profissional para elevar sua comunicação visual.",
    deliverables: ["Vídeos institucionais", "Fotos de produto", "Vídeos para redes", "Edição profissional"],
    benefits: ["Conteúdo premium", "Diferenciação", "Versatilidade", "Impacto visual"]
  },
  {
    id: "consulting",
    icon: "📊",
    title: "Consultoria Estratégica",
    shortDesc: "Direção clara para crescer",
    fullDesc: "Análise completa do seu negócio com plano de ação para alcançar seus objetivos.",
    deliverables: ["Diagnóstico completo", "Plano estratégico", "Mentorias", "Acompanhamento"],
    benefits: ["Clareza", "Foco no resultado", "Decisões assertivas", "Crescimento acelerado"]
  }
];

// ============================================
// CASES / PORTFÓLIO - EDITE AQUI
// ============================================

const CASES_DATA = [
  {
    id: "rocha-brindes",
    client: "Rocha Brindes",
    category: "E-commerce + IA + Tráfego",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    problem: "Processo manual de vendas e atendimento limitado ao horário comercial.",
    solution: "E-commerce completo com IA para atendimento 24/7 e campanhas de tráfego pago.",
    results: ["300% mais vendas", "Atendimento 24/7", "Custo operacional -60%", "ROI de 4.2x"],
    testimonial: "A Império Lord transformou completamente nossa operação. Hoje vendemos enquanto dormimos."
  },
  {
    id: "chopehaus",
    client: "Chopehaus",
    category: "Landing + Painel + WhatsApp",
    thumbnail: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&h=400&fit=crop",
    problem: "Dificuldade em receber pedidos e gerenciar catálogo de produtos.",
    solution: "Landing page com painel administrativo e integração direta com WhatsApp.",
    results: ["Pedidos organizados", "Gestão simplificada", "Clientes mais satisfeitos", "Crescimento de 150%"],
    testimonial: "Agora consigo gerenciar tudo sozinho e os pedidos chegam organizados direto no WhatsApp."
  },
  {
    id: "oli-poli",
    client: "Oli Poli",
    category: "E-commerce + Tráfego + Conteúdo",
    thumbnail: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=600&h=400&fit=crop",
    problem: "Loja física com baixa visibilidade online e vendas sazonais.",
    solution: "E-commerce completo, produção de conteúdo profissional e gestão de tráfego pago.",
    results: ["Vendas online 70% do total", "Presença digital forte", "Faturamento +200%", "Clientes de todo Brasil"],
    testimonial: "De uma loja local viramos referência nacional. A Império Lord fez isso acontecer."
  },
    {
    id: "vieira-motos",
    client: "Vieira Motos",
    category: "Site + Landing + Tráfego",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    problem: "Baixa visibilidade online e dependência apenas de indicações.",
    solution: "Landing pages de alta conversão, campanhas de tráfego pago e presença digital completa.",
    results: ["300% mais contatos", "Custo por lead reduzido", "Marca fortalecida", "Vendas recorrentes"],
    testimonial: "Hoje não dependemos só de indicação. O marketing digital virou nosso principal canal de vendas."
  }
];

// ============================================
// DEPOIMENTOS - EDITE AQUI
// ============================================

const TESTIMONIALS_DATA = [
  {
    name: "Carlos Rocha",
    role: "CEO, Rocha Brindes",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "A IA respondendo clientes 24/7 foi um divisor de águas. Nossa taxa de conversão triplicou e o custo operacional caiu pela metade."
  },
  {
    name: "Amanda Silva",
    role: "Proprietária, Chopehaus",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "O painel administrativo é muito simples de usar. Atualizo meu cardápio em minutos e os pedidos chegam organizados."
  },
  {
    name: "Roberto Vieira",
    role: "Diretor, Oli Poli",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Combinação perfeita: site profissional, conteúdo de qualidade e tráfego qualificado. Resultados incríveis!"
  }
];

// ============================================
// CONFIGURAÇÕES GERAIS - EDITE AQUI
// ============================================

const SITE_CONFIG = {
  company: {
    name: "Império Lord",
    tagline: "Transformamos sua empresa em uma máquina de vendas.",
    description: "Marketing, tráfego pago, criação de sites, gestão, branding e vendas em um único lugar.",
    whatsapp: "5594984361268",
    phone: "(94) 98436-1268",
    email: "contato@imperiolord.com.br",
    address: "Seu endereço aqui",
    cnpj: "46.066.260/0001-60"
  },
  
  social: {
    instagram: "https://www.instagram.com/lord_mt03/",
    facebook: "https://facebook.com/imperiolord",
    linkedin: "https://linkedin.com/company/imperiolord",
    youtube: "https://youtube.com/@imperiolord"
  },

cta: {
  primary: {
    text: "Calcular Meu Projeto",
    link: "/orcamento.html"
  },
  secondary: {
    text: "Ver Nossos Trabalhos",
    link: "#cases"
  },
  tertiary: {
    text: "Falar com Consultor",
    whatsapp: "5594984361268",
    message: "Olá! Gostaria de saber mais sobre os serviços da Império Lord."
  },
  quaternary: {
    text: "Ver Planos e Preços",
    link: "#planos"
  }
},

  stats: [
    { value: "15+", label: "Clientes Atendidos" },
    { value: "30+", label: "Projetos Entregues" },
    { value: "100%", label: "Satisfação" },
    { value: "8 anos", label: "De Experiência" }
  ],

  benefits: [
    { icon: "🤝", title: "Atendimento Humanizado", desc: "Você fala com pessoas, não robôs" },
    { icon: "📈", title: "Foco em Performance", desc: "Resultados mensuráveis e reais" },
    { icon: "🧠", title: "Consultoria + Execução", desc: "Estratégia e mão na massa" },
    { icon: "👥", title: "Equipe Dedicada", desc: "Profissionais focados no seu sucesso" },
    { icon: "⚡", title: "Entrega Rápida", desc: "Agilidade sem perder qualidade" },
    { icon: "📊", title: "Acompanhamento Total", desc: "Relatórios e transparência sempre" }
  ],

  process: [
    { step: "01", title: "Diagnóstico", desc: "Entendemos seu negócio, mercado e objetivos" },
    { step: "02", title: "Proposta", desc: "Criamos um plano estratégico personalizado" },
    { step: "03", title: "Desenvolvimento", desc: "Construímos sua solução com excelência" },
    { step: "04", title: "Entrega & Treinamento", desc: "Você aprende a usar tudo que criamos" },
    { step: "05", title: "Suporte Contínuo", desc: "Acompanhamento e melhorias constantes" }
  ],

  about: {
    title: "Sobre a Império Lord",
    description: "Somos uma agência de marketing digital completa, focada em transformar empresas através de estratégias que realmente funcionam. Combinamos criatividade, tecnologia e dados para entregar resultados extraordinários.",
    mission: "Transformar negócios através do marketing digital estratégico e orientado a resultados.",
    vision: "Ser a agência mais confiável e eficiente do mercado, reconhecida pela excelência em cada projeto.",
    values: ["Resultado", "Transparência", "Inovação", "Comprometimento", "Excelência"]
  },
    clients: [
    "Rocha Brindes",
    "Chope Haus",
    "Oli Poli Shop",
    "Elcana Brasil",
    "Larissa Costa Nail",
    "Igreen",
    "Cantinho da Julia",
    "Fabiana Designer",
    "Alemanha Veículos"
  ]
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.PLANS_DATA = PLANS_DATA;
  window.SERVICES_DATA = SERVICES_DATA;
  window.CASES_DATA = CASES_DATA;
  window.TESTIMONIALS_DATA = TESTIMONIALS_DATA;
  window.SITE_CONFIG = SITE_CONFIG;
}