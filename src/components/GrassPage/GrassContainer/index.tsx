'use client'

import { grassInfo } from '@/helpers/data'
import { CardGrama } from './CardGrama'
import * as S from './styles'

export const GrassContainer = () => {
  return (
    <S.GrassInfoContainer>
      {grassInfo.map((grass) => (
        <CardGrama key={grass.id} grama={grass} />
      ))}
    </S.GrassInfoContainer>
  )
}
