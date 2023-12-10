import type { Metadata } from 'next'
import { Nunito_Sans as Nunito, Poppins } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ToTop } from '@/components/toTop'
import { WhatsIcon } from '@/components/WhatsIcon'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '300', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '500'],
})

export const metadata: Metadata = {
  title: 'Gramas Canaã',
  description: 'As melhores gramas da região de itapetininga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} ${poppins.className}`}>
        <StyledComponentsRegistry>
          <Header />

          {children}

          <Footer />

          <ToTop />

          <WhatsIcon />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
