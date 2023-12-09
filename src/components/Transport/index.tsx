'use client'

import Image from 'next/image'
import {
  InfoContainer,
  InfoContainerTitle,
  InfoContainerDivisor,
  InfoContainerText,
} from '../GrassPage/GrassInfo/styles'
import { GrassCardImage, GrassSectionContainer } from '../GrassSection/styles'

import * as S from './styles'
import { Lightbulb, Zap } from 'lucide-react'

export const Transport = () => {
  return (
    <GrassSectionContainer>
      <S.TransportContainer>
        <InfoContainer>
          <InfoContainerTitle>Rápida entrega em sua obra</InfoContainerTitle>

          <InfoContainerDivisor />

          <InfoContainerText>
            Prezamos pelo transporte adequado da grama até a sua obra, fazendo
            com que a grama chegue em perfeito estado para nossos clientes. Com
            a nossa frota de caminhões e freteamentos, atendemos regiões
            próximas em até 24 horas, fazemos entregas internacionais para a
            américa do sul. Entregamos agilidade para sua obra e segurança no
            transporte!
          </InfoContainerText>
        </InfoContainer>

        <S.GrassCardImage>
          <Image
            src="/carregamento.jpg"
            alt="Foto do carregamento de grama"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />
        </S.GrassCardImage>
      </S.TransportContainer>

      <S.TransportContainer>
        <InfoContainer>
          <InfoContainerTitle>Logistica inteligente</InfoContainerTitle>

          <InfoContainerDivisor />

          <InfoContainerText>
            Para atender com rápidez nossos clientes, possuimos diversos postos
            com gramas disponíveis com retirada diretamente do campo, mantendo a
            grama excelente para o transporte e facilitando o plantio do seu
            gramado. Possuímos caminhões do tipo carreta, bitrem e truck para
            realizar a melhor entrega.
          </InfoContainerText>
        </InfoContainer>

        <S.GrassCardImage>
          <Image
            src="/carregamento-2.webp"
            alt="Foto do carregamento de grama"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />
        </S.GrassCardImage>
      </S.TransportContainer>

      <S.TransportContainer>
        <InfoContainer>
          <InfoContainerTitle>Carregamento eficiente</InfoContainerTitle>

          <InfoContainerDivisor />

          <InfoContainerText>
            Todas as nossas gramas são carregadas paletizadas, usando máquinário
            eficiente e moderno. Todas sendo travadas e testadas antes do
            transporte até o cliente!
          </InfoContainerText>
        </InfoContainer>

        <S.GrassCardImage>
          <Image
            src="/carregamento-4.webp"
            alt="Foto do carregamento de grama"
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
            width={500}
            height={300}
          />
        </S.GrassCardImage>
      </S.TransportContainer>

      <S.TransportContainer>
        <InfoContainer>
          <InfoContainerTitle
            style={{
              alignSelf: 'center',
            }}
          >
            Agilidade na entrega
          </InfoContainerTitle>

          <InfoContainerDivisor />

          <InfoContainerText>
            Entendemos que para a eficiência e rápida entrega dos projetos de
            nossos clientes, necessitamos de ter agilidade em nossas entregas,
            algo que hoje já existe.
          </InfoContainerText>
        </InfoContainer>
      </S.TransportContainer>
    </GrassSectionContainer>
  )
}
