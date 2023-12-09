'use client'

import { XCircle, Phone, Menu } from 'lucide-react'
import { MenuLink } from '../MenuLink'

import * as S from './styles'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScroll, setScroll] = useState<boolean>(false)

  const checkScroll = () => {
    if (window.scrollY >= 110) setScroll((state) => true)
    else setScroll((state) => false)
  }

  const sendMessage = () => {
    const message = 'Olá, gostaria de fazer um orçamento com vocês!'

    window.open(
      `https://api.whatsapp.com/send?phone=5515996218062&text=${message}`,
      '_blank',
    )
  }

  const setCloseMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    if (window.scrollY >= 110) setScroll((state) => true)
    else setScroll((state) => false)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <>
      <S.Indicator />

      <S.Header $isScroll={isScroll}>
        <Image
          src="/canaalogo.png"
          alt="Logo gramas canaã"
          height={124}
          width={124}
          onClick={() => router.push('/')}
          style={{
            cursor: 'pointer',
          }}
        />

        <S.Nav $isOpen={isMenuOpen}>
          <S.NavMenu>
            <MenuLink href="/" onClick={setCloseMenu}>
              Ínicio
            </MenuLink>

            <MenuLink href="/sobre-nos" onClick={setCloseMenu}>
              Sobre nós
            </MenuLink>

            <MenuLink href="/gramas" onClick={setCloseMenu}>
              Gramas
            </MenuLink>

            <MenuLink href="/transporte" onClick={setCloseMenu}>
              Transporte
            </MenuLink>

            <MenuLink href="/obras" onClick={setCloseMenu}>
              Obras
            </MenuLink>

            <S.CloseMenuIcon onClick={() => setIsMenuOpen(false)}>
              <XCircle color="#fff" size={24} />
            </S.CloseMenuIcon>
          </S.NavMenu>
        </S.Nav>

        <S.WppButtons onClick={sendMessage}>
          <Phone size={24} color="#fff" />
          (15) 9962-1806
        </S.WppButtons>

        <S.MenuIcon>
          <Menu
            size={24}
            color={isScroll ? ' #00856fef' : '#25d366'}
            onClick={() => setIsMenuOpen(true)}
          />
        </S.MenuIcon>
      </S.Header>
    </>
  )
}
