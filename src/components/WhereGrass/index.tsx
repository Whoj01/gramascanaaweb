import * as S from './styles'
import { Tractor, RollerCoaster, Flower2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { GiSoccerKick, GiParkBench } from 'react-icons/gi'

export const WhereGrass = () => {
  const router = useRouter()

  return (
    <S.WhereGrassContainer>
      <S.WhereGrassTitle>Onde você deseja colocar sua grama?</S.WhereGrassTitle>

      <S.WhereGrassCards>
        <S.IconGrassBox>
          <Tractor
            onClick={() => router.push('/gramas/recomendacoes/sitios')}
            size={84}
            color="#096906"
            opacity={0.5}
          />
          <S.IconGrassText
            onClick={() => router.push('/gramas/recomendacoes/sitios')}
          >
            Sítios
          </S.IconGrassText>
        </S.IconGrassBox>

        <S.IconGrassBox>
          <RollerCoaster
            onClick={() => router.push('/gramas/recomendacoes/playgrounds')}
            size={84}
            color="#096906"
            opacity={0.5}
          />
          <S.IconGrassText
            onClick={() => router.push('/gramas/recomendacoes/playgrounds')}
          >
            Playgrounds
          </S.IconGrassText>
        </S.IconGrassBox>

        <S.IconGrassBox>
          <GiParkBench
            onClick={() => router.push('/gramas/recomendacoes/pracas')}
            size={84}
            color="rgba(9, 105, 6, 0.5)"
          />
          <S.IconGrassText
            onClick={() => router.push('/gramas/recomendacoes/pracas')}
          >
            Praças
          </S.IconGrassText>
        </S.IconGrassBox>

        <S.IconGrassBox>
          <Flower2
            onClick={() => router.push('/gramas/recomendacoes/jardins')}
            size={84}
            color="#096906"
            opacity={0.5}
          />
          <S.IconGrassText
            onClick={() => router.push('/gramas/recomendacoes/jardins')}
          >
            Jardins
          </S.IconGrassText>
        </S.IconGrassBox>
      </S.WhereGrassCards>
    </S.WhereGrassContainer>
  )
}
