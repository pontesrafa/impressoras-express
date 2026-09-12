export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  iconName: string;
  highlightBadge?: string;
  features: string[];
}

export interface BrandInfo {
  id: string;
  name: string;
  badge: string;
  popularModels: string[];
  commonServices: string[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  neighborhood: string;
  printer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'servicos' | 'coleta' | 'garantia' | 'pagamento';
}

export const COMPANY_CONFIG = {
  name: 'Impressoras Express',
  tagline: 'Assistência Técnica Especializada em Impressoras e Suprimentos',
  experienceYears: '10+',
  repairedCount: '2.500+',
  satisfactionRate: '98%',
  warrantyDays: 90,
  phoneFormatted: '(22) 99286-2292',
  whatsappNumber: '5522992862292',
  instagram: '@impressorasexpress',
  instagramUrl: 'https://www.instagram.com/impressorasexpress/',
  city: 'Campos dos Goytacazes',
  state: 'RJ',
  addressDisplay: 'Campos dos Goytacazes - RJ e Região',
  hoursWeekday: 'Segunda a Sexta: 08:00 às 18:00',
  hoursSaturday: 'Sábado: 08:00 às 12:00',
  hoursSpecial: 'Atendimento especial (noite, domingos e feriados) sob agendamento prévio via WhatsApp',
};

export const getWhatsAppLink = (customMessage?: string) => {
  const baseMessage = customMessage || 'Olá! Vim pelo site da Impressoras Express e gostaria de solicitar um orçamento para minha impressora.';
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva Completa',
    shortDesc: 'Limpeza ultrassônica profunda, lubrificação de eixos e calibração.',
    fullDesc: 'Evite que sua impressora pare no meio de um trabalho urgente. A revisão preventiva desmonta, limpa o mecanismo, lubrifica os eixos, alinha os cabeçotes e prolonga a vida útil do equipamento.',
    turnaround: '24h a 48h',
    iconName: 'Wrench',
    highlightBadge: 'Mais Recomendado',
    features: [
      'Desobstrução e alinhamento de cabeçote',
      'Higienização interna completa e remoção de resíduos de pó/tinta',
      'Lubrificação técnica com graxa siliconada especial',
      'Calibração de sensores e teste de precisão de cores'
    ]
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva & Placas',
    shortDesc: 'Diagnóstico exato de componentes elétricos, sensores e engrenagens.',
    fullDesc: 'Reparo avançado para impressoras que não ligam, travam o papel, acusam erro fatal ou sofreram curto-circuito. Recuperamos placas lógicas e trocamos engrenagens avariadas.',
    turnaround: '24h a 72h',
    iconName: 'Cpu',
    features: [
      'Reparo de placas lógicas e fontes de alimentação',
      'Troca de roletes tracionadores (pick-up rollers)',
      'Substituição de correias dentadas e encoder',
      'Solução de barulhos mecânicos e atolamentos recorrentes'
    ]
  },
  {
    id: 'reset-almofadas',
    title: 'Reset de Almofadas & Absorvedor',
    shortDesc: 'Elimine o erro de fim da vida útil das almofadas (Waste Ink).',
    fullDesc: 'Quando as luzes piscam sem parar e o computador avisa que a almofada de tinta está no fim da vida útil, fazemos o reset oficial do contador e a troca ou limpeza do absorvedor de resíduos.',
    turnaround: 'Mesmo dia (ou até 24h)',
    iconName: 'RefreshCw',
    highlightBadge: 'Urgência Rápida',
    features: [
      'Reset definitivo do contador de impressões',
      'Substituição de feltro/almofada absorvente',
      'Instalação opcional de dispenser/dreno externo',
      'Garantia de funcionamento sem vazamentos'
    ]
  },
  {
    id: 'desentupimento-cabecote',
    title: 'Desentupimento de Cabeçote',
    shortDesc: 'Técnica química e ultrassônica para desobstruir ejetores de tinta.',
    fullDesc: 'Se sua impressora imprime riscado, faltando cores ou linhas brancas após ficar dias parada, realizamos banho ultrassônico com solvente específico para salvar o cabeçote sem danificar a peça.',
    turnaround: '24h a 48h',
    iconName: 'Droplets',
    features: [
      'Despressurização de dampers e tubulações',
      'Banho químico controlado sem pressão excessiva',
      'Teste de padrão de jatos 100% calibrado',
      'Evita o alto custo de compra de um cabeçote novo'
    ]
  },
  {
    id: 'coleta-entrega',
    title: 'Coleta & Entrega em Domicílio',
    shortDesc: 'Buscamos e entregamos na sua casa ou empresa em Campos dos Goytacazes.',
    fullDesc: 'Não precisa perder tempo no trânsito nem carregar peso. Nossa equipe retira sua impressora embalada com segurança no seu endereço e devolve testada e funcionando.',
    turnaround: 'Agendamento imediato',
    iconName: 'Truck',
    highlightBadge: 'Comodidade Total',
    features: [
      'Atendimento em toda a cidade e distritos vizinhos',
      'Transporte seguro em caixas protegidas contra vazamento',
      'Agendamento pelo WhatsApp no seu horário ideal',
      'Opção de instalação e teste na entrega'
    ]
  },
  {
    id: 'suprimentos-tintas',
    title: 'Suprimentos & Tintas Originais',
    shortDesc: 'Tintas corantes e pigmentadas de alto rendimento para todas as marcas.',
    fullDesc: 'Trabalhamos exclusivamente com tintas e toners certificados que não entopem os bicos injetores e oferecem fidelidade real de cor e alta durabilidade.',
    turnaround: 'Pronta Entrega',
    iconName: 'Layers',
    features: [
      'Garrafas originais Epson (504, 544, 664, 554)',
      'Refis HP originais GT52, GT53 e Canon GI-190/GI-11',
      'Toners para impressoras laser Brother, HP e Samsung',
      'Papéis fotográficos de alta gramatura e papéis especiais'
    ]
  }
];

export const BRANDS: BrandInfo[] = [
  {
    id: 'epson',
    name: 'Epson EcoTank',
    badge: 'Líder em Especialidade',
    accentColor: '#005596',
    popularModels: [
      'L3250', 'L3150', 'L4260', 'L3210', 'L120', 'L220', 'L380',
      'L4150', 'L4160', 'L5190', 'L5290', 'L6171', 'M2170'
    ],
    commonServices: [
      'Reset de almofadas e erro E-11',
      'Desobstrução de cabeçote piezoelétrico',
      'Troca de rolete tracionador de papel',
      'Substituição de dampers e mangueiras de tinta',
      'Reparo de placa mãe que não liga ou queima cabeçote'
    ]
  },
  {
    id: 'hp',
    name: 'HP Ink Tank & DeskJet',
    badge: 'Especialistas Certificados',
    accentColor: '#0096D6',
    popularModels: [
      'HP Ink Tank 415', 'HP Ink Tank 416', 'Smart Tank 515', 'Smart Tank 517',
      'Smart Tank 581', 'DeskJet 2774', 'DeskJet 2776', 'DeskJet 2376',
      'LaserJet Pro M107w', 'LaserJet M1212', 'Neverstop 1000'
    ],
    commonServices: [
      'Substituição de cabeçotes de impressão preto e colorido',
      'Recuperação de cartuchos e circuitos',
      'Reparo do mecanismo do carro de impressão',
      'Troca de kit de tração de papel',
      'Manutenção preventiva em impressoras Laser'
    ]
  },
  {
    id: 'canon',
    name: 'Canon MegaTank',
    badge: 'Atendimento Rápido',
    accentColor: '#CC0000',
    popularModels: ['G3100', 'G3110', 'G3111', 'G3160', 'G4111', 'G6010', 'G7010'],
    commonServices: [
      'Purga e sangria de tubulações de tinta',
      'Reset de código de erro 5B00 (almofadas)',
      'Substituição de cartucho de absorção',
      'Troca de cabeças de impressão CH-10 e BH-10'
    ]
  },
  {
    id: 'brother',
    name: 'Brother & Laser',
    badge: 'Soluções Corporativas',
    accentColor: '#123C8A',
    popularModels: ['DCP-T420W', 'DCP-T520W', 'DCP-T720W', 'HL-1212W', 'DCP-L2540DW', 'HL-L2320D'],
    commonServices: [
      'Reset de unidade de cilindro e fusor',
      'Limpeza de espelhos e conjunto laser',
      'Troca de rolo de fusão e buchas',
      'Desobstrução do sistema capilar de tintas'
    ]
  }
];

export const NEIGHBORHOODS_CAMPOS = [
  'Pelinca', 'Flamboyant', 'Parque Tamandaré', 'Centro', 'Turfe Clube',
  'Parque São Caetano', 'Guarus', 'Jardim Carioca', 'Parque Leopoldina',
  'Parque Santo Antônio', 'Parque Aurora', 'Parque Julião Nogueira',
  'Goytacazes', 'Donana', 'Ururaí', 'Travessão'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Nogueira',
    role: 'Advogado',
    neighborhood: 'Pelinca',
    printer: 'Epson EcoTank L3250',
    rating: 5,
    comment: 'Minha impressora começou a soltar todas as folhas em branco no meio de um prazo judicial. Liguei no WhatsApp, vieram buscar aqui no escritório na Pelinca e no dia seguinte estava consertada e funcionando perfeita. Salvou meu dia!',
    date: 'Há 2 semanas'
  },
  {
    id: '2',
    name: 'Mariana Azevedo',
    role: 'Arquiteta & Designer',
    neighborhood: 'Flamboyant',
    printer: 'HP Smart Tank 515',
    rating: 5,
    comment: 'Excelente atendimento! Minhas impressões coloridas estavam falhando as linhas azuis. Fizeram o desentupimento técnico e ficou com a qualidade de quando saiu da caixa. Honestidade de primeira.',
    date: 'Há 1 mês'
  },
  {
    id: '3',
    name: 'Roberto Silva',
    role: 'Gerente Comercial',
    neighborhood: 'Centro',
    printer: 'Brother DCP-L2540DW Laser',
    rating: 5,
    comment: 'Cuidam do parque de impressoras da nossa distribuidora. Rapidez na coleta, nota fiscal certinha e garantia de 90 dias que dá total segurança.',
    date: 'Há 3 semanas'
  },
  {
    id: '4',
    name: 'Luciana Barreto',
    role: 'Professora',
    neighborhood: 'Parque Tamandaré',
    printer: 'Epson L3150',
    rating: 5,
    comment: 'Apareceu o erro de almofada no domingo à noite. Mandei mensagem no WhatsApp de plantão e na segunda cedo já vieram retirar. Recomendo de olhos fechados!',
    date: 'Há 1 semana'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'marcas',
    category: 'servicos',
    question: 'Quais marcas e modelos de impressoras vocês consertam?',
    answer: 'Atendemos todas as principais marcas do mercado: Epson, HP, Canon, Brother, Lexmark, Samsung e Xerox. Temos bancada especializada tanto para impressoras de tanque de tinta (EcoTank, Ink Tank, MegaTank), jato de tinta convencional quanto impressoras laser monocromáticas e coloridas.'
  },
  {
    id: 'coleta',
    category: 'coleta',
    question: 'Como funciona a Coleta e Entrega em Campos dos Goytacazes?',
    answer: 'Você não precisa sair de casa ou do trabalho. Você nos chama no WhatsApp, combinamos o endereço e o melhor horário, e nosso portador recolhe a máquina devidamente protegida. Após o reparo aprovado e concluído, levamos ela de volta limpa e testada.'
  },
  {
    id: 'garantia',
    category: 'garantia',
    question: 'Qual é a garantia dos serviços prestados?',
    answer: 'Oferecemos garantia de 90 dias (3 meses) em todos os serviços executados e nas peças substituídas. Se qualquer anomalia referente ao serviço realizado se repetir nesse período, revisamos e consertamos imediatamente sem custo.'
  },
  {
    id: 'orcamento',
    category: 'pagamento',
    question: 'O diagnóstico e orçamento têm compromisso?',
    answer: 'O orçamento é rápido e detalhado. Você só paga se aprovar a ordem de serviço após o diagnóstico do técnico. Caso não aprove, você não paga pelo conserto.'
  },
  {
    id: 'prazo',
    category: 'servicos',
    question: 'Qual é o tempo médio para entrega da impressora?',
    answer: 'A maioria dos resets de almofadas e desentupimentos é concluída entre 24h e 48h úteis. Serviços que exigem placas ou peças específicas levam em média de 2 a 4 dias úteis, sempre informados com clareza no orçamento.'
  },
  {
    id: 'horarios-especiais',
    category: 'servicos',
    question: 'Vocês atendem fora do horário comercial (noite e finais de semana)?',
    answer: 'Sim! Sabemos que empresas e profissionais muitas vezes têm urgências à noite ou no fim de semana. Temos atendimento e plantão sob agendamento prévio via WhatsApp.'
  },
  {
    id: 'pagamento',
    category: 'pagamento',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, cartões de crédito e débito (com possibilidade de parcelamento), dinheiro e emitimos nota fiscal eletrônica para empresas (CNPJ) e pessoa física.'
  }
];

export const DIAGNOSTIC_SYMPTOMS = [
  {
    id: 'falha-impressao',
    label: 'Impressão falhada ou riscada',
    desc: 'Cores faltando, listras brancas horizontais ou folhas saindo em branco.',
    likelyCause: 'Entupimento nos microbicos injetores ou ar na mangueira/damper.',
    estimatedTime: '24h - 48h'
  },
  {
    id: 'almofada-residuos',
    label: 'Almofadas de tinta cheias / Erro E-11',
    desc: 'Luzes piscando alternadas e mensagem de fim de vida útil do absorvedor.',
    likelyCause: 'Contador de desperdício de tinta atingiu 100%. Necessita reset e higienização.',
    estimatedTime: 'Mesmo dia ou 24h'
  },
  {
    id: 'atolamento-papel',
    label: 'Papel atolando ou não puxa folha',
    desc: 'Puxa várias folhas juntas, dobra o papel ou a folha para no meio.',
    likelyCause: 'Desgaste ou sujeira no rolete tracionador (pick-up roller) ou engrenagem danificada.',
    estimatedTime: '24h'
  },
  {
    id: 'barulho-estalos',
    label: 'Barulhos fortes, estalos ou tranco',
    desc: 'Carro de impressão bate nas laterais com ruído mecânico áspero.',
    likelyCause: 'Fita encoder suja, correia descalibrada ou falta de lubrificação de guias.',
    estimatedTime: '24h - 48h'
  },
  {
    id: 'nao-liga',
    label: 'Impressora não liga / Apagou de vez',
    desc: 'Nenhuma luz acende após queda de energia ou estalo interno.',
    likelyCause: 'Falha na fonte chaveada interna ou curto-circuito na placa lógica.',
    estimatedTime: '48h'
  },
  {
    id: 'suprimentos',
    label: 'Dúvidas com tintas, toners ou peças',
    desc: 'Preciso de tintas originais, refil ou avaliação geral preventiva.',
    likelyCause: 'Reposição de suprimentos certificados e revisão periódica.',
    estimatedTime: 'Imediato'
  }
];
