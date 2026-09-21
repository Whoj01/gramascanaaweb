/**
 * Textos da página Sobre nós. Ficam fora do JSX para que o cliente possa
 * revisar o conteúdo sem mexer em marcação.
 *
 * O nome da empresa vem de NOME_EMPRESA (contato.ts), nunca escrito à mão.
 */
import { NOME_EMPRESA } from './contato'

export const abertura = {
  titulo: 'Vinte anos cultivando no mesmo lugar.',
  legendaFoto: 'Nossos talhões em Angatuba – SP',
  paragrafos: [
    `A ${NOME_EMPRESA} planta, corta e entrega a própria grama em Angatuba. Não há atravessador entre o talhão e a sua obra: a placa que chega no caminhão saiu do nosso campo.`,
    'Essa é a diferença que sustenta duas décadas de trabalho. Conhecemos cada espécie que vendemos porque acompanhamos o ciclo inteiro dela, do plantio ao carregamento, e é por isso que conseguimos indicar com segurança qual grama se adapta ao solo e ao uso de cada projeto.',
  ],
}

export interface EtapaTrabalho {
  numero: string
  titulo: string
  texto: string
  foto: string
  alt: string
}

export const etapas: EtapaTrabalho[] = [
  {
    numero: '1',
    titulo: 'Cultivo',
    texto:
      'Talhões próprios em Angatuba, com adubação e irrigação acompanhadas de perto. Cada espécie ocupa a área que melhor responde ao sol e ao tipo de solo dela.',
    foto: '/tst.webp',
    alt: 'Talhão de grama em cultivo em Angatuba',
  },
  {
    numero: '2',
    titulo: 'Corte',
    texto:
      'A colheita acontece no dia do embarque. A grama não fica esperando em pátio, o que preserva a umidade da placa e a chance de pega no destino.',
    foto: '/carregamento.jpg',
    alt: 'Corte e empilhamento das placas de grama',
  },
  {
    numero: '3',
    titulo: 'Entrega',
    texto:
      'O caminhão sai de Angatuba e chega na obra dentro do prazo combinado. Quando o cliente precisa, acompanhamos o plantio e orientamos os primeiros cuidados.',
    foto: '/carregamento-2.webp',
    alt: 'Caminhão carregado com placas de grama para entrega',
  },
]

export const guias = [
  {
    titulo: 'Nossa missão',
    texto:
      'Fornecer grama de qualidade e garantir que o gramado do cliente continue bonito, viçoso e sadio depois da entrega.',
  },
  {
    titulo: 'Nossos valores',
    texto:
      'Organização, seriedade e respeito no trato com o cliente. Só quem trabalha com honestidade fica tanto tempo no mercado.',
  },
]
