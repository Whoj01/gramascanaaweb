import { Recomendations } from '@/components/GrassPage/Recomendation'
import { grassInfo } from '@/helpers/data'

export default function MoreAboutGrass({
  params,
}: {
  params: { slug: string }
}) {
  console.log(params.slug)

  const grams = grassInfo.filter((grass) =>
    grass.indicate.includes(params.slug),
  )

  console.log(grams)

  return <Recomendations grams={grams} slug={params.slug} />
}
