'use client'

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import * as S from './style'
import { sendMessage } from '@/helpers/sendMessage'

export const HomeSlide = () => {
  return (
    <S.SlideContainer id="inicio">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        style={{ height: '100%', width: '100%' }}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade" // Configura o efeito de fade
        fadeEffect={{ crossFade: true }}
        speed={1000}
      >
        <SwiperSlide
          style={{
            background: 'url(/banner_3.jpeg) no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <S.SlideItemContainer>
            <S.SlideItemTitle>A melhor solução para sua obra!</S.SlideItemTitle>

            <S.SlideItemText>
              Solução para paisagismo, jardins, taludes, rodovias e grandes
              áreas. Transforme seu projeto e seu lazer com a Gramas Canaã.
            </S.SlideItemText>

            <S.SlideButton onClick={sendMessage}>Fazer orçamento</S.SlideButton>
          </S.SlideItemContainer>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: 'url(/banner_4.jpeg) no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <S.SlideItemContainer>
            <S.SlideItemTitle>Há mais de 20 anos no mercado!</S.SlideItemTitle>

            <S.SlideItemText>
              Atuando no mercado de alta qualificação, entregando qualidade e
              excelência em nossos serviços a mais de 20 anos.
            </S.SlideItemText>

            <S.SlideButton onClick={sendMessage}>Fazer orçamento</S.SlideButton>
          </S.SlideItemContainer>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: 'url(/banner_1.jpeg) no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <S.SlideItemContainer>
            <S.SlideItemTitle>Entrega rápida e segura</S.SlideItemTitle>

            <S.SlideItemText>
              Realizamos entregas dentro do prazo para todo o Brasil e
              internacionalmente.
            </S.SlideItemText>

            <S.SlideButton onClick={sendMessage}>Fazer orçamento</S.SlideButton>
          </S.SlideItemContainer>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: 'url(/banner_2.jpeg) no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <S.SlideItemContainer>
            <S.SlideItemTitle>Melhor cultivo da região</S.SlideItemTitle>

            <S.SlideItemText>
              Nos últimos anos, desenvolvemos a melhor técnica de cultiva para
              nós e nossos clientes.
            </S.SlideItemText>

            <S.SlideButton onClick={sendMessage}>Fazer orçamento</S.SlideButton>
          </S.SlideItemContainer>
        </SwiperSlide>
      </Swiper>
    </S.SlideContainer>
  )
}
