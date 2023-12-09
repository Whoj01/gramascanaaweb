'use client'

import { AboutUs } from '@/components/AboutUs'
import { GrassSection } from '@/components/GrassSection'
import MainContainer from '@/components/MainContainer'
import { WhereGrass } from '@/components/WhereGrass'
import { WhyUs } from '@/components/WhyBuyUs'
import { HomeSlide } from '@/components/homeSlide'

export default function Home() {
  return (
    <MainContainer>
      <HomeSlide />

      <WhereGrass />

      <AboutUs />

      <GrassSection />

      <WhyUs />
    </MainContainer>
  )
}
