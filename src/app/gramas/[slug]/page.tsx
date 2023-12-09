import { GrassInfo } from '@/components/GrassPage/GrassInfo'
import { grassInfo } from '@/helpers/data'

export default function MoreAboutGrass({
  params,
}: {
  params: { slug: string }
}) {
  const formatedName = decodeURI(params.slug.split('-').join(' '))

  const grass = grassInfo.find((grass) => grass.name.includes(formatedName))

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return <GrassInfo grass={grass!} />
}
