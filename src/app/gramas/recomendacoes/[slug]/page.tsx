import { Recomendations } from '@/components/GrassPage/Recomendation'
import { grassInfo } from '@/helpers/data'

export default function MoreAboutGrass({
  params,
}: {
  params: { slug: string }
}) {
  const grams = grassInfo.filter((grass) =>
    grass.indicate.includes(params.slug),
  )

  return <Recomendations grams={grams} slug={params.slug} />
}
