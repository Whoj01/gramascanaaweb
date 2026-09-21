export interface Grama {
  id: number
  name: string
  pictures: string[]
  banner: string
  description: string
  features: string[]
  href: string
  care: string[]
  indicate: string[]
}

/** Slug de URL sem acento, ex.: "são carlos" -> "sao-carlos". */
export const slugDaGrama = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ')
    .join('-')

export const acharGramaPorSlug = (slug: string) =>
  grassInfo.find((grama) => slugDaGrama(grama.name) === decodeURI(slug))

export const grassInfo: Grama[] = [
  {
    id: 1,
    name: 'esmeralda',
    pictures: [
      '/Esmeralda-0.webp',
      '/esmeralda.webp',
      '/esmeralda-3.webp',
      '/esmeralda-2.webp',
    ],
    banner: '/Banner-grama-esmeralda.webp',
    description:
      'As folhas da grama esmeralda são estreitas, pontiagudas, pequenas e a cor é um verde intenso, semelhante ao verde da joia esmeralda. O nome não é por acaso, a cor desta grama é fiel a cor da pedra preciosa. Muito tolerante às grandes variações de temperatura, sol e água, a grama esmeralda não requer cuidados excessivos. Por este motivo, é muito comum e amplo seu uso em gramados de climas temperados. Uma grama esmeralda bem cuidada pode ter um efeito agradável e terapêutico para quem gosta de caminhar descalço: é densa, macia e relaxante.',
    features: [
      'Boa tolerância ao pisoteio',
      'Média frequência de poda',
      'Ideal para contenção de solos',
      'Cor verde esmeralda',
      'Folhas médias',
      'Boa maciez',
    ],
    href: '/gramas/esmeralda',
    care: [
      'O ideal para o cultivo desta grama é o pleno sol, o solo fértil, as adubações semestrais e as regas regularmente pela manhã. Não é recomendado o plantio para tráfego intenso de veículos nem sombra em excesso. Quanto mais rizomas enraizados mais ela se multiplica. Para aparar a esmeralda, a altura ideal é entre 2 e 3 cm, durante a primavera, aproveitando a ocasião para remover as folhas mortas e durante o corte não reduzir mais que 1/3 de sua altura. O pH ideal no solo para essa grama é aproximadamente de 6,0 a 6,5, um solo levemente ácido.',
    ],
    indicate: ['pracas', 'jardins', 'playgrounds'],
  },

  {
    id: 3,
    name: 'são carlos',
    pictures: [
      '/saocarlos.webp',
      '/sao-carlos-1.webp',
      '/sao-carlos-2.webp',
      '/sao-carlos-3.webp',
      '/sao-carlos-4.webp',
      '/sao-carlos-5.webp',
    ],
    banner: '/Banner-sao-carlos.webp',
    description:
      'As folhas da São Carlos são largas, pequenas e muito parecidas com as folhas da Grama Batatais, só um pouco mais lisa e sem a pelagem. Ela possui mais folhagem do que raiz. São Carlos é um tipo de grama perene, sorrateira e fortemente indicada para praças, áreas ensolaradas e até mesmo meio-sombreadas. É muito boa para locais com chuva frequente, alta umidade e veios de água.',
    features: [
      'Baixa tolerância ao pisoteio',
      'Média frequência de poda',
      'Ideal para áreas semi-sombreadas',
      'Cor verde intensa brilhante',
      'Folhas mais largas',
      'Média maciez',
    ],
    href: '/gramas/sao-carlos',
    care: [
      'Esta grama não é muito resistente à seca e portanto necessita de uma irrigação constante. Ela deve ser podada quando ultrapassa 4 cm de altura ou a cada 20 dias.',
    ],
    indicate: ['pracas', 'jardins', 'sitios'],
  },

  {
    id: 8,
    name: 'batatais',
    pictures: [
      '/batatais.webp',
      '/batatais-1.jpg',
      '/batatais-2.jpg',
      '/batatais-3.jpg',
      '/batatais-4.jpg',
    ],
    href: '/gramas/batatais',
    banner: '/batatais.webp',
    description:
      'As folhas da grama batatais são duras, largas, pequenas e sua textura é aveludada. Ela é de fácil adaptação à áreas amplas e grandes terrenos onde que pegam muito sol. Dada a profundidade de suas raízes ela está entre as preferidas para o plantio de áreas não planas, ela é poderosa para conter a erosão.',
    features: [
      'Bom enraizamento',
      'Muito resistente',
      'Excelente para áreas de muito movimento',
      'Boa adaptação',
      'Baixo custo',
      'Raiz profunda',
    ],
    care: [
      'Entre os poucos cuidados que esta grama requer há apenas uma recomendação: a poda deve ser feita sempre que a altura das folhas superar 5 cm.',
    ],
    indicate: ['sitios', 'playgrounds'],
  },
]
