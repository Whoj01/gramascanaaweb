/**
 * Conteúdo da página Transporte, fora do JSX para o cliente revisar texto
 * sem mexer em marcação.
 */

export interface BlocoTransporte {
  titulo: string
  paragrafos: string[]
  foto: string
  alt: string
}

export const blocos: BlocoTransporte[] = [
  {
    titulo: 'Entrega rápida na sua obra',
    paragrafos: [
      'Prezamos pelo transporte adequado da grama até a obra, para que a placa chegue em perfeito estado. Com frota própria e freteamentos, atendemos as regiões próximas em até 24 horas.',
      'A grama sai do campo e vai direto para o caminhão: quanto menor o tempo entre o corte e o plantio, maior a chance de pega no destino.',
    ],
    foto: '/carregamento.jpg',
    alt: 'Carregamento de placas de grama no caminhão',
  },
  {
    titulo: 'Logística pensada para o prazo',
    paragrafos: [
      'Mantemos diversos postos com grama disponível para retirada direto do campo, o que preserva a qualidade da placa para o transporte e facilita o plantio do gramado.',
      'A frota conta com carreta, bitrem e truck, e escolhemos o veículo conforme o volume e o acesso da obra.',
    ],
    foto: '/carregamento-2.webp',
    alt: 'Caminhão carregado com placas de grama paletizadas',
  },
  {
    titulo: 'Carregamento paletizado',
    paragrafos: [
      'Toda a grama é carregada paletizada, com maquinário moderno. A carga é travada e conferida antes de sair para o cliente, o que evita perda de placa no trajeto.',
    ],
    foto: '/carregamento-4.webp',
    alt: 'Paletes de grama sendo carregados com maquinário',
  },
]

export interface DadoFrota {
  valor: string
  rotulo: string
}

export const frota: DadoFrota[] = [
  { valor: '24h', rotulo: 'para entregas na região' },
  { valor: '3', rotulo: 'tipos de veículo: carreta, bitrem e truck' },
  { valor: '100%', rotulo: 'da carga paletizada e travada' },
]

export const alcance = {
  titulo: 'Até onde entregamos',
  texto:
    'Atendemos Angatuba, Itapetininga, Sorocaba e toda a região em até 24 horas. Para volumes maiores, avaliamos entregas em outros estados e na América do Sul — é só nos dizer o destino e a metragem.',
}
