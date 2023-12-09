'use client'

import Image from 'next/image'
import * as S from './styles'

export const AboutUs = () => {
  return (
    <S.AboutUsContainer id="sobre-nos">
      <S.AboutUsTitle>Sobre nós</S.AboutUsTitle>

      <S.AboutUsSectionLeft>
        <S.AboutUsSectionTitle>Quem somos</S.AboutUsSectionTitle>

        <S.AboutUsSectionText>
          A Gramas Canaã atua no mercado da produção de alta qualificação sendo
          referência no mercado, demonstrando que expandimos a contento e com
          qualidade, para que possamos divulgar a importância de um trabalho que
          é feito com muita organização, seriedade e respeito, garantindo sempre
          a qualidade e excelência de nossas gramas, pois só quem trabalha com
          honestidade e honra poderia estar a tantos anos no mercado.
        </S.AboutUsSectionText>
      </S.AboutUsSectionLeft>

      <S.AboutUsSectionRigth>
        <S.AboutUsSectionTitleRigth>
          Por que a gramas canaã ?
        </S.AboutUsSectionTitleRigth>

        <S.AboutUsSectionTextRigth>
          Para que uma empresa obtenha sucesso é preciso que ela conheça bem o
          produto que oferece, assim para que tudo isso possa dar certo temos os
          melhores profissionais para conquistar e fidelizar nossos clientes,
          sempre atendendo suas necessidades, prestando consultorias e
          informando qual o tipo de grama que mais se adapta às condições
          oferecidas pelo terreno onde será plantada.
        </S.AboutUsSectionTextRigth>
      </S.AboutUsSectionRigth>

      <S.ImageContainer>
        <Image
          src="/aboutUs.jpg"
          alt="Foto de grama cultivada pela Gramas Canaã"
          sizes="100vw"
          width={500}
          height={300}
          style={{
            borderRadius: '8px',
            width: '100%',
            height: 'auto',
          }}
        />
      </S.ImageContainer>

      <S.AboutUsSectionLeft>
        <S.AboutUsSectionTitle>Nossa missão</S.AboutUsSectionTitle>

        <S.AboutUsSectionText>
          Nossa missão aqui na Gramas Canaã é Fornecer Gramas de Qualidade,
          Proporcionando um Futuro Mais Verde e Saudável e garantindo que nossos
          clientes sempre tenham um gramado sempre bonito, viçoso e sadio.
        </S.AboutUsSectionText>
      </S.AboutUsSectionLeft>

      <S.AboutUsSectionRigth>
        <S.AboutUsSectionTitleRigth>Nossos valores</S.AboutUsSectionTitleRigth>

        <S.AboutUsSectionTextRigth>
          Nossos valores são organização, seriedade, respeito e a satisfação do
          Cliente.
        </S.AboutUsSectionTextRigth>
      </S.AboutUsSectionRigth>

      <S.ImageContainer>
        <Image
          src="/tst.jpg"
          alt="Foto de grama cultivada pela Gramas Canaã"
          width={500}
          height={300}
          sizes="100vw"
          style={{
            borderRadius: '8px',
            width: '100%',
            height: 'auto',
          }}
        />
      </S.ImageContainer>
    </S.AboutUsContainer>
  )
}
