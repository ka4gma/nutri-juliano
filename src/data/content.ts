/**
 * Conteúdo factual. Fonte: site em produção (nutrijuliano.vercel.app), extraído em 2026-11-25.
 * Cópia integral em docs/audit/conteudo-original.txt. Não acrescentar dado sem validação do profissional.
 */

export const PRO = {
  nome: 'Juliano Barcelos',
  funcao: 'Nutricionista esportivo',
  crn: 'CRN 19753',
  clinica: 'Clínica Nutrivida',
  endereco: 'Rua Silvio da Silva Tavares, 601',
  cidade: 'Bagé/RS',
  telefone: '+55 53 9900-2023',
  instagram: '@nutrijuliano',
  instagramUrl: 'https://instagram.com/nutrijuliano',
  maps: 'https://www.google.com/maps?cid=14884821701238897751',
  artigosUrl: 'https://nutrijuliano.vercel.app/artigos',
  whatsappNumero: '555399002023',
} as const;

export type Formato = 'presencial' | 'online' | 'geral';

/** As duas primeiras mensagens são as originais do site. A "geral" é derivada delas (sem o formato). */
const MENSAGENS: Record<Formato, string> = {
  presencial: 'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta presencial em Bagé/RS.',
  online: 'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta online.',
  geral: 'Olá, Juliano! Vim pelo site e gostaria de agendar uma consulta.',
};

export const whatsappUrl = (formato: Formato = 'geral') =>
  `https://wa.me/${PRO.whatsappNumero}?text=${encodeURIComponent(MENSAGENS[formato])}`;

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Artigos', href: PRO.artigosUrl, externo: true },
  { label: 'Contato', href: '#contato' },
] as const;

export const HERO = {
  // O H1 é uma única frase; a composição tipográfica a divide visualmente.
  h1: { a: 'Nutrição', b: 'esportiva', c: 'personalizada para', d: 'performance, saúde e estética.' },
  apoio:
    'Atendimento presencial em Bagé/RS e consulta nutricional online com Juliano Barcelos, CRN 19753, com acompanhamento individualizado baseado em ciência e prática.',
  ficha: [
    { valor: '+600', rotulo: 'pacientes atendidos' },
    { valor: 'Consulta', rotulo: 'Bagé/RS + online' },
    { valor: '30 dias', rotulo: 'de suporte' },
  ],
} as const;

export const POSICIONAMENTO = {
  rotulo: 'Posicionamento',
  frase: ['Não é apenas um cardápio.', 'É organização alimentar aplicada à sua vida real.'],
  cota: 'sem modelo pronto',
  pontos: [
    'Estratégia alimentar criada para sua realidade, sem modelo pronto.',
    'Plano baseado em avaliação e ciência.',
    'Estratégias realistas para a rotina.',
  ],
} as const;

export const SOBRE = {
  rotulo: 'Sobre Juliano',
  nome: 'Juliano Barcelos',
  funcao: 'Nutricionista esportivo · CRN 19753',
  texto:
    'Atualização constante, prática clínica e vivência com mais de 600 pacientes me permitem criar estratégias que funcionam na vida real, tanto no atendimento presencial em Bagé/RS quanto no online.',
  titulo: 'Nutrição para performance, saúde e estética.',
  legendaFoto: 'Palestra na URCAMP, Bagé/RS',
  altFoto: 'Juliano Barcelos, nutricionista esportivo CRN 19753, palestrando na URCAMP em Bagé/RS',
  registro: ['CRN 19753', 'Formação sólida e atualização contínua', 'Abordagem baseada em ciência e prática', 'Atendimento em Bagé/RS e online'],
} as const;

export const RECEBE = {
  rotulo: 'O que você recebe',
  titulo: 'Um acompanhamento completo, do primeiro contato aos ajustes.',
  lead: 'A consulta organiza o caminho inteiro: avaliação, plano, suporte e retorno para que a estratégia caiba na sua rotina.',
  itens: [
    { titulo: 'Avaliação completa', texto: 'Rotina, objetivos, histórico, exames e composição corporal quando aplicável.' },
    { titulo: 'Plano individualizado', texto: 'Estratégia alimentar criada para sua realidade, sem modelo pronto.' },
    { titulo: 'Ajustes pós-consulta', texto: 'Refinamento da estratégia conforme adesão, evolução e dificuldades da rotina.' },
    {
      titulo: 'Suporte por 30 dias',
      texto: 'Acompanhamento pelo WhatsApp para dúvidas e orientação durante o processo.',
      cota: '30 dias',
    },
    {
      titulo: 'Retorno gratuito',
      texto: 'Retorno em até 15 dias, presencial ou online, para revisar o planejamento.',
      cota: 'até 15 dias',
    },
  ],
} as const;

export const PARA_QUEM = {
  rotulo: 'Para quem é',
  titulo: 'Estratégias para objetivos diferentes.',
  lead: 'O plano é ajustado ao seu momento, à sua rotina e aos dados da avaliação.',
  itens: [
    { titulo: 'Musculação', texto: 'Ganho de massa, definição, força e saúde.' },
    { titulo: 'Jiu-jitsu e padel', texto: 'Performance, resistência, recuperação e prevenção de lesões.' },
    { titulo: 'Estética e energia', texto: 'Mais foco, composição corporal e autoestima.' },
    { titulo: 'Condições clínicas', texto: 'SII, SOP, endometriose, lipedema e outras condições.' },
    { titulo: 'Rotina e comportamento', texto: 'Sono, ansiedade, humor e relação com a comida.' },
  ],
  hormonios: {
    titulo: 'Uso de hormônios e canetas emagrecedoras',
    texto:
      'Para quem já utiliza hormônios ou medicamentos injetáveis para emagrecimento com acompanhamento médico, o suporte nutricional ajuda a organizar alimentação, rotina, composição corporal e adesão ao processo com mais segurança e estratégia.',
    aviso: 'O acompanhamento nutricional não substitui a avaliação médica nem envolve prescrição ou ajuste de medicamentos.',
  },
} as const;

export const FORMATOS = {
  rotulo: 'Como iniciar',
  titulo: 'Consulta nutricional online ou presencial em Bagé/RS.',
  lead: 'A consulta combina avaliação completa, orientação prática e suporte pelo WhatsApp para manter a estratégia funcionando na vida real.',
  presencial: {
    nome: 'Presencial',
    linhas: ['Atendimento na Clínica Nutrivida', 'Rua Silvio da Silva Tavares, 601', 'Bagé/RS'],
    cta: 'Agendar consulta presencial',
  },
  online: {
    nome: 'Online',
    linhas: ['Consulta online para quem está fora de Bagé', 'Agendamento direto pelo WhatsApp', 'Acompanhamento estruturado e individualizado'],
    cta: 'Agendar consulta online',
  },
  valor: 'O valor é informado diretamente pelo WhatsApp, pois pode variar conforme o tipo de acompanhamento.',
} as const;

export const METODO = {
  rotulo: 'Como funciona',
  titulo: 'Como funciona a consulta nutricional',
  lead: 'Cada etapa é pensada para entender você por completo e construir a melhor estratégia para performance, saúde e estética.',
  duracao: 'consulta inicial · em média 60 a 90 minutos',
  etapas: [
    { titulo: 'Conversa aprofundada', texto: 'Sobre objetivos, rotina e histórico.' },
    { titulo: 'Avaliação de exames laboratoriais', texto: '' },
    { titulo: 'Avaliação antropométrica completa', texto: 'Percentual de gordura e composição corporal.' },
    { titulo: 'Análise metabólica e comportamental', texto: '' },
    { titulo: 'Construção da estratégia alimentar personalizada', texto: '' },
  ],
} as const;

export const GOOGLE_URL =
  'https://www.google.com/search?q=NUTRICIONISTA+JULIANO+BARCELOS&oq=NUTRICIONISTA+JULIANO+BARCELOS&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIGCAQQRRg8MgYIBRBFGD3SAQg2MTE2ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x950675652b3606ab:0xce9182795f5ebc57,1,,,,';

export const AVALIACOES = {
  rotulo: 'Avaliações no Google',
  titulo: 'Experiências compartilhadas por quem já acompanha.',
  lead: 'Avaliações públicas de pacientes sobre o acompanhamento de Juliano Barcelos, CRN 19753.',
  nota: 'Avaliações públicas exibidas conforme publicadas no Google.',
  destaque: {
    texto:
      'Maravilhoso, o melhor nutri que eu já fui, eu só estou me sentindo melhor pois o Juliano está me ajudando e estou conseguindo finalmente me sentir bem graças a ele.',
    autor: 'Maria Fara',
    meta: 'Local Guide · Nível 1',
  },
  itens: [
    { texto: 'Excelente profissional, faço acompanhamento mensal e recomendo a todos.', autor: 'Rafael S. de Freitas', meta: 'Local Guide · Nível 2' },
    { texto: 'Ótimo acompanhamento e muita atenção aos detalhes.', autor: 'Avaliação pública', meta: 'Google' },
    { texto: 'Excelente profissional, muito atencioso e compreensivo com o cliente.', autor: 'Pedro Maçã', meta: '2 avaliações' },
    {
      texto: 'Ótimo profissional, faz uma dieta que se encaixa perfeitamente na rotina e o acompanhamento é excelente.',
      autor: 'Kathiane de Azevedo',
      meta: '7 avaliações',
    },
    { texto: 'O Dr. Juliano é um ótimo profissional. Sempre muito atencioso nos seus atendimentos.', autor: 'Anelise La bella', meta: 'Local Guide · 5 avaliações' },
  ],
} as const;

export const FAQ = {
  rotulo: 'Dúvidas comuns',
  titulo: 'Perguntas sobre consulta nutricional em Bagé/RS e online',
  itens: [
    {
      q: 'Qual o valor da consulta?',
      a: 'O valor é informado diretamente pelo WhatsApp, pois pode variar conforme o tipo de acompanhamento. Entre em contato para receber todas as informações e tirar suas dúvidas sem compromisso.',
    },
    {
      q: 'O atendimento é presencial ou online?',
      a: 'O atendimento pode ser presencial na Clínica Nutrivida, em Bagé/RS, ou online. Em ambos os formatos, o suporte pós-consulta é realizado pelo WhatsApp por 30 dias após a consulta.',
    },
    {
      q: 'Preciso levar exames na consulta?',
      a: 'Não é obrigatório, mas exames laboratoriais recentes (hemograma, glicemia, perfil lipídico, hormônios) enriquecem muito a avaliação. Caso não tenha, podemos iniciar sem e solicitar durante o acompanhamento.',
    },
    {
      q: 'Quanto tempo dura a consulta?',
      a: 'A consulta inicial dura em média 60 a 90 minutos. É um tempo necessário para uma avaliação completa: anamnese, exames, avaliação antropométrica e construção da estratégia alimentar.',
    },
    {
      q: 'Funciona para quem não pratica esporte?',
      a: 'Sim! O acompanhamento é para qualquer pessoa, independentemente do nível de atividade física. A estratégia é adaptada à sua rotina e objetivos — seja perda de peso, saúde, condições clínicas ou bem-estar geral.',
    },
    {
      q: 'Atende quem usa hormônios ou canetas emagrecedoras?',
      a: 'Sim, desde que o uso seja acompanhado por profissional habilitado. O trabalho nutricional entra como suporte para ajustar alimentação, rotina, composição corporal e adesão, sem substituir acompanhamento médico ou alterar medicações.',
    },
    {
      q: 'Como funciona o suporte pelo WhatsApp?',
      a: 'Após a consulta, você tem 30 dias de suporte direto pelo WhatsApp para tirar dúvidas, compartilhar evolução e realizar ajustes no planejamento. Além disso, há retorno gratuito em até 15 dias, presencial ou online.',
    },
  ],
} as const;

export const CTA_FINAL = {
  rotulo: 'Agendamento',
  titulo: 'Sua melhor versão começa com uma decisão.',
  complemento: 'Agende sua consulta e dê o próximo passo.',
  cta: 'Quero agendar no WhatsApp',
  nota: 'Atendimento presencial em Bagé/RS ou consulta online · CRN 19753',
} as const;

export const FOOTER = {
  texto:
    'Juliano Barcelos, nutricionista esportivo CRN 19753. Nutrição esportiva para performance, saúde e estética em Bagé/RS e online.',
  local: 'Clínica Nutrivida · Bagé/RS · Online',
} as const;

export const SECOES = [
  { id: 'inicio', rotulo: 'Início', tema: 'escuro' },
  { id: 'posicionamento', rotulo: 'Posicionamento', tema: 'claro' },
  { id: 'sobre', rotulo: 'Sobre', tema: 'escuro' },
  { id: 'acompanhamento', rotulo: 'Acompanhamento', tema: 'claro' },
  { id: 'para-quem', rotulo: 'Para quem é', tema: 'escuro' },
  { id: 'como-iniciar', rotulo: 'Como iniciar', tema: 'claro' },
  { id: 'como-funciona', rotulo: 'Como funciona', tema: 'escuro' },
  { id: 'avaliacoes', rotulo: 'Avaliações', tema: 'claro' },
  { id: 'duvidas', rotulo: 'Dúvidas', tema: 'escuro' },
  { id: 'contato', rotulo: 'Contato', tema: 'latao' },
] as const;
