'use client'

import { XCircle, Phone, Menu } from 'lucide-react'
import { MenuLink } from '../MenuLink'

import * as S from './styles'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { sendMessage } from '@/helpers/sendMessage'
import {
  NOME_EMPRESA,
  TELEFONE_EXIBICAO,
  TELEFONE_WHATSAPP,
} from '@/helpers/contato'

export const Header = () => {
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScroll, setScroll] = useState<boolean>(false)

  const checkScroll = () => {
    if (window.scrollY >= 110) setScroll(true)
    else setScroll(false)
  }

  const setCloseMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    if (window.scrollY >= 110) setScroll(true)
    else setScroll(false)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <S.Header $isScroll={isScroll}>
      <S.HeaderInner>
        <S.LogoButton
          onClick={() => router.push('/')}
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/logo.svg"
            alt={NOME_EMPRESA}
            height={52}
            width={52}
            priority
          />
        </S.LogoButton>

        <S.Nav $isOpen={isMenuOpen}>
          <S.NavMenu>
            <MenuLink href="/" onClick={setCloseMenu}>
              Início
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

            <S.CloseMenuIcon
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <XCircle color="#FBFAF7" size={28} />
            </S.CloseMenuIcon>
          </S.NavMenu>
        </S.Nav>

        <S.HeaderActions>
          <S.PhoneLink
            href={`tel:+${TELEFONE_WHATSAPP}`}
            aria-label={`Ligar para ${TELEFONE_EXIBICAO}`}
          >
            <Phone size={20} />
          </S.PhoneLink>

          <S.WppButtons onClick={sendMessage}>
            <Phone size={18} />
            Pedir orçamento
          </S.WppButtons>

          <S.MenuIcon
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={26} />
          </S.MenuIcon>
        </S.HeaderActions>
      </S.HeaderInner>
    </S.Header>
  )
}
