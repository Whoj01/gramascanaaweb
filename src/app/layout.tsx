import type { Metadata } from 'next'
import { Fraunces, Archivo } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { NOME_EMPRESA } from '@/helpers/contato'
import {
  DESCRICAO_PADRAO,
  INDEXAVEL,
  OG_IMAGE,
  REGIAO_TEXTO,
  SITE_URL,
  schemaLocalBusiness,
} from '@/helpers/seo'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ToTop } from '@/components/toTop'
import { WhatsIcon } from '@/components/WhatsIcon'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NOME_EMPRESA} | Grama Esmeralda, São Carlos e Batatais`,
    // cada rota preenche só o próprio nome; o sufixo vem daqui
    template: `%s | ${NOME_EMPRESA}`,
  },
  description: DESCRICAO_PADRAO,
  applicationName: NOME_EMPRESA,
  keywords: [
    'grama',
    'venda de grama',
    'grama esmeralda',
    'grama são carlos',
    'grama batatais',
    'grama em rolo',
    'gramado',
    'paisagismo',
    `grama ${REGIAO_TEXTO}`,
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: NOME_EMPRESA,
    title: `${NOME_EMPRESA} | Grama Esmeralda, São Carlos e Batatais`,
    description: DESCRICAO_PADRAO,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `Grama cultivada pela ${NOME_EMPRESA}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NOME_EMPRESA} | Grama Esmeralda, São Carlos e Batatais`,
    description: DESCRICAO_PADRAO,
    images: [OG_IMAGE],
  },
  robots: {
    index: INDEXAVEL,
    follow: INDEXAVEL,
    googleBot: {
      index: INDEXAVEL,
      follow: INDEXAVEL,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // as variáveis de fonte ficam no <html> para que o :root do globals.css
    // consiga compô-las em --font-display / --font-texto
    <html lang="pt-BR" className={`${fraunces.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaLocalBusiness()),
          }}
        />

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
