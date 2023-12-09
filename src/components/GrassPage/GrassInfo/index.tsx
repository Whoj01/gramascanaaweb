'use client'

import { grassInfo } from '@/helpers/data'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import * as S from './styles'

import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Flower2,
  RollerCoaster,
  Tractor,
} from 'lucide-react'
import { GiParkBench, GiSoccerKick } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface GrassInfoProps {
  grass: {
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
}

interface Grass {
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

export const GrassInfo = ({ grass }: GrassInfoProps) => {
  const router = useRouter()

  const [OtherGrass, setOtherGrass] = useState<Grass[]>([])

  const sendMessage = () => {
    const message = 'Olá, gostaria de fazer o orçamento da grama ' + grass.name

    window.open(
      `https://api.whatsapp.com/send?phone=5515996218062&text=${message}`,
      '_blank',
    )
  }

  useEffect(() => {
    setOtherGrass(
      grassInfo
        .filter((grassToCompare) =>
          grassToCompare.indicate.some((indicateToCompare) =>
            grass.indicate.some(
              (grassToFind) => grassToFind === indicateToCompare,
            ),
          ),
        )
        .filter((grassToCompare) => grassToCompare.id !== grass.id),
    )
  }, [grass.id, grass.indicate])
  return (
    <>
      <S.FirstSection
        style={{
          backgroundImage: `url(${grass.banner})`,
          backgroundPosition: 'center',
        }}
      >
        <S.BackgroundImage>
          <S.FirstSectionTitle>{grass.name}</S.FirstSectionTitle>

          <S.Divisor />

          <S.FirstSectionText>
            Aplicações e características da grama{' '}
            <S.TextSpan> {grass.name} </S.TextSpan>
          </S.FirstSectionText>
        </S.BackgroundImage>
      </S.FirstSection>

      <S.GrassSectionContainer>
        <S.SlideContainer>
          <Swiper
            breakpoints={{
              768: {
                width: 576,
                slidesPerView: 1,
              },
              900: {
                width: 2000,
                slidesPerView: 3,
              },
            }}
            style={{ height: '100%', width: '100%', marginBottom: '50px' }}
            spaceBetween={20}
            watchSlidesProgress
            loop
            modules={[Navigation, Pagination, Thumbs]}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              enabled: true,
            }}
            pagination={{ clickable: true }}
          >
            {grass.pictures.map((picture) => (
              <SwiperSlide
                key={picture}
                style={{
                  background: `url(${picture}) no-repeat`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  borderRadius: '12px',
                }}
              ></SwiperSlide>
            ))}

            <ChevronLeft
              color="#fff"
              size={124}
              style={{
                height: '40px',
                width: '40px',
              }}
              className="swiper-button-prev"
            />

            <ChevronRight
              color="#fff"
              style={{
                height: '40px',
                width: '40px',
              }}
              className="swiper-button-next"
            />
          </Swiper>
        </S.SlideContainer>

        <S.InfoContainer>
          <S.InfoContainerTitle>
            Grama {grass.name} com você em todos os momentos!
          </S.InfoContainerTitle>

          <S.InfoContainerDivisor />

          <S.InfoContainerText>{grass.description}</S.InfoContainerText>

          <S.InfoContainerTitle>
            Cuidados com a grama {grass.name}
          </S.InfoContainerTitle>

          <S.InfoContainerDivisor />

          {grass.care.map((care, i) => (
            <S.InfoContainerText key={i}>{care}</S.InfoContainerText>
          ))}

          <S.InfoContainerTitle>
            Principais características da grama {grass.name}
          </S.InfoContainerTitle>

          <S.InfoContainerDivisor />

          {grass.features.map((feature) => (
            <S.GrassCardInfoFeature key={feature}>
              <CheckCircle color="#25d366" size={24} />

              <S.GrassCardInfoFeatureText>{feature}</S.GrassCardInfoFeatureText>
            </S.GrassCardInfoFeature>
          ))}

          <S.InfoContainerTitle>
            A grama {grass.name} é principalmente indicada para
          </S.InfoContainerTitle>

          <S.InfoContainerDivisor />

          <S.WhereGrassCards>
            {grass.indicate.map((indicate) => (
              <S.IconGrassBox key={indicate}>
                {indicate === 'pracas' && (
                  <>
                    <GiParkBench size={84} color="rgba(9, 105, 6, 0.5)" />
                    <S.IconGrassText>Praças</S.IconGrassText>
                  </>
                )}
                {indicate === 'campos' && (
                  <>
                    <GiSoccerKick size={84} color="rgba(9, 105, 6, 0.5)" />
                    <S.IconGrassText>Campos</S.IconGrassText>
                  </>
                )}

                {indicate === 'playgrounds' && (
                  <>
                    <RollerCoaster size={84} color="#096906" opacity={0.5} />
                    <S.IconGrassText>Playgrounds</S.IconGrassText>
                  </>
                )}

                {indicate === 'sitios' && (
                  <>
                    <Tractor size={84} color="#096906" opacity={0.5} />
                    <S.IconGrassText>Sítios</S.IconGrassText>
                  </>
                )}

                {indicate === 'jardins' && (
                  <>
                    <Flower2 size={84} color="#096906" opacity={0.5} />

                    <S.IconGrassText>Jardins</S.IconGrassText>
                  </>
                )}
              </S.IconGrassBox>
            ))}
          </S.WhereGrassCards>

          <S.GrassCardButton onClick={sendMessage}>
            Fazer orçamento
          </S.GrassCardButton>

          <S.InfoContainerTitle>Outras recomendações</S.InfoContainerTitle>

          <S.InfoContainerDivisor />

          <S.SlideContainer>
            <Swiper
              breakpoints={{
                768: {
                  width: 576,
                  slidesPerView: 1,
                },
                900: {
                  width: 1350,
                  slidesPerView: 2,
                },
              }}
              style={{ height: '100%', width: '100%' }}
              spaceBetween={20}
              loop
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                enabled: true,
              }}
              pagination={{ clickable: true }}
            >
              {OtherGrass.map((grass) => (
                <SwiperSlide
                  key={grass.id}
                  style={{
                    background: `url(${grass.pictures[0]}) no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    width: '100%',
                    borderRadius: '12px',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <S.SlideItemContainer>
                    <S.SlideItemTitle onClick={() => router.push(grass.href)}>
                      {grass.name}
                    </S.SlideItemTitle>

                    <S.GrassCardButton onClick={() => router.push(grass.href)}>
                      Ver mais!
                    </S.GrassCardButton>
                  </S.SlideItemContainer>
                </SwiperSlide>
              ))}

              <ChevronLeft
                color="#fff"
                size={124}
                style={{
                  height: '40px',
                  width: '40px',
                }}
                className="swiper-button-prev"
              />

              <ChevronRight
                color="#fff"
                style={{
                  height: '40px',
                  width: '40px',
                }}
                className="swiper-button-next"
              />
            </Swiper>
          </S.SlideContainer>
        </S.InfoContainer>
      </S.GrassSectionContainer>
    </>
  )
}
