import { REGIAO_TEXTO } from './seo'

/**
 * Perguntas frequentes.
 *
 * Servem a dois propósitos: respondem a dúvida real de quem vai comprar e
 * alimentam o Schema FAQPage, que pode render um rich snippet no Google.
 * As perguntas foram escritas na forma como as pessoas de fato buscam.
 */

export interface PerguntaFrequente {
  pergunta: string
  resposta: string
}

export const perguntas: PerguntaFrequente[] = [
  {
    pergunta: 'Quanto custa o metro quadrado de grama?',
    resposta:
      'O preço varia conforme a espécie, a metragem do pedido e a distância da entrega. Pedidos maiores têm valor por metro menor. Envie a metragem e o endereço da obra pelo WhatsApp que passamos o orçamento fechado, já com o frete.',
  },
  {
    pergunta: 'Qual a melhor grama para sombra?',
    resposta:
      'A São Carlos é a mais tolerante a áreas meio-sombreadas, porque tem folha mais larga e aproveita melhor a luz difusa. Em sombra total nenhuma grama se desenvolve bem: o ideal é pelo menos 4 horas de sol por dia.',
  },
  {
    pergunta: 'Qual grama aguenta mais pisoteio?',
    resposta:
      'A Batatais é a mais resistente ao tráfego intenso, com raiz profunda e folha dura, muito usada em áreas de muito movimento e taludes. A Esmeralda tem boa tolerância e entrega aparência mais fina, sendo a escolha comum em condomínios e praças.',
  },
  {
    pergunta: 'Em quanto tempo a grama é entregue?',
    resposta: `Entregamos em até 24 horas em ${REGIAO_TEXTO}. A grama é cortada no dia do embarque e vai direto para o caminhão, o que preserva a umidade da placa e aumenta a chance de pega.`,
  },
  {
    pergunta: 'Quantos metros de grama vêm em um palete?',
    resposta:
      'Cada palete leva em média 30 m² de grama em placas. O volume exato depende da espécie e da espessura do corte. Na hora do orçamento informamos quantos paletes o seu pedido ocupa e qual veículo vamos usar.',
  },
  {
    pergunta: 'Preciso preparar o terreno antes de receber a grama?',
    resposta:
      'Sim. O terreno deve estar limpo, nivelado e com o solo levemente solto para a raiz pegar. Se houver entulho ou solo muito compactado, é preciso corrigir antes. Quando o cliente pede, acompanhamos o plantio e orientamos os primeiros cuidados.',
  },
]

export const schemaFaq = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: perguntas.map((item) => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.resposta,
    },
  })),
})
