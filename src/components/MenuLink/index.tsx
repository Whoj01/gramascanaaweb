import { LinkProps } from 'next/link'
import * as S from './styles'
import { usePathname } from 'next/navigation'

type MenuLinkProps = LinkProps & {
  children: React.ReactNode
}

export const MenuLink = ({ children, href, ...rest }: MenuLinkProps) => {
  const pathname = usePathname()

  const isActive = href.toString().includes('gramas')
    ? pathname.includes('gramas')
    : pathname === String(href)

  return (
    <S.NavMenuLink href={href} {...rest} $isActive={isActive}>
      {children}
    </S.NavMenuLink>
  )
}
