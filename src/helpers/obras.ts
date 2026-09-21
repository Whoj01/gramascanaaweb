export type EspecieGrama = 'Esmeralda' | 'São Carlos' | 'Batatais'

export type TipoObra =
  | 'condominio'
  | 'construtora'
  | 'praca'
  | 'playground'
  | 'sitio'
  | 'jardim'
  | 'campo'

export const rotuloTipo: Record<TipoObra, string> = {
  condominio: 'Condomínios',
  construtora: 'Construtoras',
  praca: 'Praças',
  playground: 'Playgrounds',
  sitio: 'Sítios e chácaras',
  jardim: 'Jardins',
  campo: 'Campos',
}

export interface FotoObra {
  src: string
  alt: string
  /** true enquanto for foto de acervo, não a foto real da obra */
  placeholder?: boolean
}

export interface Obra {
  /** slug estável; vira rota se um dia houver página de detalhe */
  slug: string
  titulo: string
  /** cidade e UF, ex.: "Itapetininga – SP" */
  local: string
  tipo: TipoObra
  especies: EspecieGrama[]
  /** metros quadrados entregues; ausente quando o cliente não informou */
  metrosQuadrados?: number
  ano: number
  /** uma frase, aparece no card fechado */
  resumo: string
  /** parágrafos, aparecem quando o card é expandido */
  descricao: string[]
  /** fotos[0] é a capa do card */
  fotos: FotoObra[]
  /** aparece na seção de destaque da home */
  destaque?: boolean
}

/**
 * Para substituir por uma obra real: troque `src` da foto, apague o
 * `placeholder: true` e ajuste os campos. Para adicionar, basta um novo item.
 */
export const obras: Obra[] = [
  {
    slug: 'playground-sitio-angatuba',
    titulo: 'Playground de chácara',
    local: 'Angatuba – SP',
    tipo: 'playground',
    especies: ['São Carlos'],
    metrosQuadrados: 1200,
    ano: 2023,
    resumo:
      'Grama macia para a área recreativa, com baixa necessidade de poda.',
    descricao: [
      'Entrega de grama São Carlos para o gramado do playground na área recreativa da chácara. Grama macia, com baixa necessidade de poda e excelente para lugares com bastante circulação de pessoas.',
      'O cliente nos procurou relatando reclamações recorrentes sobre o gramado da área recreativa. Avaliamos o uso do espaço e indicamos a São Carlos, que foi a escolha final.',
      'Depois da instalação, as reclamações acabaram e a procura pela chácara aumentou. O resultado abriu porta para serviços em outras chácaras da região.',
    ],
    fotos: [
      {
        src: '/sao-carlos-3.webp',
        alt: 'Gramado de playground em chácara com grama São Carlos',
      },
    ],
    destaque: true,
  },
  {
    slug: 'area-comercial-condominio',
    titulo: 'Área comercial de condomínio',
    local: 'Itapetininga – SP',
    tipo: 'condominio',
    especies: ['Esmeralda'],
    metrosQuadrados: 3500,
    ano: 2023,
    resumo: 'Entrada e interior do condomínio em grama Esmeralda.',
    descricao: [
      'Entrega de grama Esmeralda para todo o gramado de entrada e interior do condomínio. A Esmeralda tem cor vibrante e atrai atenção, o que a torna perfeita para entradas comerciais e jardins.',
      'Parceria fechada com o condomínio para o fornecimento da grama mais bonita disponível. Depois da avaliação do cliente e das nossas recomendações, a escolhida foi a Esmeralda.',
      'Todo o gramado foi instalado rapidamente, já que o condomínio estava em estágio final de entrega. Fizemos acompanhamento durante todo o período de pega.',
    ],
    fotos: [
      {
        src: '/esmeralda-2.webp',
        alt: 'Área comercial de condomínio com gramado de grama Esmeralda',
      },
    ],
    destaque: true,
  },
  {
    slug: 'praca-central-guarei',
    titulo: 'Praça municipal',
    local: 'Guareí – SP',
    tipo: 'praca',
    especies: ['Esmeralda'],
    metrosQuadrados: 2000,
    ano: 2022,
    resumo: 'Recuperação do gramado central da praça em duas etapas.',
    descricao: [
      'Obra de exemplo. Substitua este texto pela descrição da obra real quando as informações estiverem disponíveis.',
    ],
    fotos: [
      {
        src: '/esmeralda-3.webp',
        alt: 'Gramado de praça municipal',
        placeholder: true,
      },
    ],
    destaque: true,
  },
  {
    slug: 'talude-rodovia',
    titulo: 'Contenção de talude',
    local: 'Angatuba – SP',
    tipo: 'construtora',
    especies: ['Batatais'],
    metrosQuadrados: 8000,
    ano: 2022,
    resumo: 'Batatais em área inclinada, escolhida pela raiz profunda.',
    descricao: [
      'Obra de exemplo. Substitua este texto pela descrição da obra real quando as informações estiverem disponíveis.',
    ],
    fotos: [
      {
        src: '/batatais-3.jpg',
        alt: 'Talude gramado com grama Batatais',
        placeholder: true,
      },
    ],
  },
  {
    slug: 'jardim-residencial-sorocaba',
    titulo: 'Jardim residencial',
    local: 'Sorocaba – SP',
    tipo: 'jardim',
    especies: ['São Carlos'],
    metrosQuadrados: 600,
    ano: 2024,
    resumo: 'Jardim de fundos com área meio-sombreada.',
    descricao: [
      'Obra de exemplo. Substitua este texto pela descrição da obra real quando as informações estiverem disponíveis.',
    ],
    fotos: [
      {
        src: '/sao-carlos-1.webp',
        alt: 'Jardim residencial com grama São Carlos',
        placeholder: true,
      },
    ],
  },
  {
    slug: 'campo-society-itapetininga',
    titulo: 'Campo society',
    local: 'Itapetininga – SP',
    tipo: 'campo',
    especies: ['Esmeralda'],
    metrosQuadrados: 1800,
    ano: 2024,
    resumo: 'Campo de uso intenso, entregue pronto para jogo.',
    descricao: [
      'Obra de exemplo. Substitua este texto pela descrição da obra real quando as informações estiverem disponíveis.',
    ],
    fotos: [
      {
        src: '/esmeralda.webp',
        alt: 'Campo society gramado',
        placeholder: true,
      },
    ],
  },
]

export const obrasDestaque = obras.filter((obra) => obra.destaque)

export const formatarMetros = (metros: number) =>
  `${metros.toLocaleString('pt-BR')} m²`
