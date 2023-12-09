'use client'

import { sendMessage } from '@/helpers/sendMessage'
import * as S from './styles'

import { FaWhatsapp } from 'react-icons/fa'

export const WhatsIcon = () => {
  return (
    <S.CircleDiv onClick={sendMessage}>
      <FaWhatsapp size={42} color="#fff" />
    </S.CircleDiv>
  )
}
