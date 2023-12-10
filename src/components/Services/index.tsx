'use client'

import Image from 'next/image'
import {
  GrassCardInfoContainer,
  GrassCardInfoText,
  GrassCardInfoTitle,
  GrassInfoContainer,
  GrassCard,
  GrassCardImage,
  GrassCardButton,
  GrassCardViewMore,
} from '../GrassPage/GrassContainer/styles'
import { GrassSectionTitle } from '../GrassSection/styles'
import { sendMessage } from '@/helpers/sendMessage'
import { shimmer, toBase64 } from '@/helpers/ImageOp'

export const Services = () => {
  return (
    <GrassInfoContainer>
      <GrassSectionTitle>Nossos trabalhos</GrassSectionTitle>

      <GrassCard>
        <GrassCardImage>
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475),
            )}`}
            src="/celebration-1.webp"
            alt="Foto da obra"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />

          <GrassCardViewMore onClick={sendMessage} href={''}>
            Fazer orçamento
          </GrassCardViewMore>
        </GrassCardImage>

        <GrassCardInfoContainer>
          <GrassCardInfoTitle>Campo esportivo</GrassCardInfoTitle>

          <GrassCardInfoText>
            Entregas da grama Celebration para o gramado de um campo esportivo,
            aonde é feito treinos e campeonatos da região e para pessoas que
            querem alugar.
          </GrassCardInfoText>

          <GrassCardInfoText>
            Realizamos a entrega rapidamente para o cliente, pois o mesmo nos
            informou pela urgência.
          </GrassCardInfoText>

          <GrassCardInfoText>
            No final, finalizando a instalação do gramado, entregamos mais uma
            obra com excelência e com o nosso cliente satisfeito!
          </GrassCardInfoText>

          <GrassCardButton onClick={sendMessage}>
            Fazer orçamento
          </GrassCardButton>
        </GrassCardInfoContainer>
      </GrassCard>

      <GrassCard>
        <GrassCardImage>
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475),
            )}`}
            src="/tifway-4.webp"
            alt="Foto da obra"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',

              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />

          <GrassCardViewMore onClick={sendMessage} href={''}>
            Fazer orçamento
          </GrassCardViewMore>
        </GrassCardImage>

        <GrassCardInfoContainer>
          <GrassCardInfoTitle>Campo golf</GrassCardInfoTitle>

          <GrassCardInfoText>
            Entregas da grama Tifway 419 para um gramado fino para prática de
            golf, grama recomendada para este tipo de esporte, já que suporta
            podas baixas.
          </GrassCardInfoText>

          <GrassCardInfoText>
            Maior entrega realizada no último ano para o nosso cliente!
          </GrassCardInfoText>

          <GrassCardInfoText>
            Fomos procurados novamente para futuras instalações e manutenções no
            gramado do cliente, o mesmo dando o feedback que foi um trabalho
            excelente!
          </GrassCardInfoText>

          <GrassCardButton onClick={sendMessage}>
            Fazer orçamento
          </GrassCardButton>
        </GrassCardInfoContainer>
      </GrassCard>

      <GrassCard>
        <GrassCardImage>
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475),
            )}`}
            src="/sao-carlos-3.webp"
            alt="Foto da obra"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',

              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />

          <GrassCardViewMore onClick={sendMessage} href={''}>
            Fazer orçamento
          </GrassCardViewMore>
        </GrassCardImage>

        <GrassCardInfoContainer>
          <GrassCardInfoTitle>Playground Sítio</GrassCardInfoTitle>

          <GrassCardInfoText>
            Entrega da grama são carlos para um gramado de playground para a
            área recreativa da chácara, grama macia com baixa necessidade de
            poda. Excelente para lugares com bastante circulação de pessoas.
          </GrassCardInfoText>

          <GrassCardInfoText>
            Cliente nos procurou informando que sua chácara havia várias
            reclamações sobre o seu gramado na área recreativa, aonde indicamos
            a grama são carlos, o qual foi sua escolha!
          </GrassCardInfoText>

          <GrassCardInfoText>
            Depois da instalação, fomos informados que as reclamações acabaram e
            que a demanda da chácara aumentou consideravelmente. O que nos
            garantiu futuros serviços com outras chácaras!
          </GrassCardInfoText>

          <GrassCardButton onClick={sendMessage}>
            Fazer orçamento
          </GrassCardButton>
        </GrassCardInfoContainer>
      </GrassCard>

      <GrassCard>
        <GrassCardImage>
          <Image
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475),
            )}`}
            src="/esmeralda-2.webp"
            alt="Foto da obra"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />

          <GrassCardViewMore onClick={sendMessage} href={''}>
            Fazer orçamento
          </GrassCardViewMore>
        </GrassCardImage>

        <GrassCardInfoContainer>
          <GrassCardInfoTitle>Área comercial condomínio</GrassCardInfoTitle>

          <GrassCardInfoText>
            Entrega da grama esmeralda para todo gramado de entrada e interior
            do condomínio. A grama esmeralda entrega uma cor vibrante que atrai
            muita atenção, perfeita para entradas comerciais e jardins.
          </GrassCardInfoText>

          <GrassCardInfoText>
            Parceria fechada entre o condimínio para o fornecimento da grama
            mais bonita disponível, depois da avaliação do cliente e nossas
            recomendações a grama escolhida foi a esmeralda.
          </GrassCardInfoText>

          <GrassCardInfoText>
            Todo o gramado foi instalado de forma rápida, pois o condomínio já
            se encontrava em estágio final de entrega. Realizando acompanhamento
            por todo overseeding!
          </GrassCardInfoText>

          <GrassCardButton onClick={sendMessage}>
            Fazer orçamento
          </GrassCardButton>
        </GrassCardInfoContainer>
      </GrassCard>
    </GrassInfoContainer>
  )
}
