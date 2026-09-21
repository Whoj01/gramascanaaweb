/**
 * Tokens de design como referências a CSS custom properties.
 *
 * Os valores reais vivem no `:root` de `src/app/globals.css`. Aqui só existem
 * strings constantes, então o styled-components continua gerando CSS estático
 * (nada de `({ theme }) => ...`) e o autocomplete funciona nos `styles.ts`.
 */

export const cor = {
  verdeCampo: 'var(--verde-campo)',
  verdeVivo: 'var(--verde-vivo)',
  verdeFundo: 'var(--verde-fundo)',
  terraSeca: 'var(--terra-seca)',
  areiaClara: 'var(--areia-clara)',
  brancoQuente: 'var(--branco-quente)',
  tintaEscura: 'var(--tinta-escura)',
  cinzaTexto: 'var(--cinza-texto)',
  whatsapp: 'var(--whatsapp)',
} as const

export const fonte = {
  display: 'var(--font-display)',
  texto: 'var(--font-texto)',
} as const

/**
 * `:root` usa font-size 62.5%, então 1rem = 10px.
 */
export const tipo = {
  display: 'clamp(4rem, 8vw, 6.4rem)',
  h1: 'clamp(3.2rem, 5vw, 4.8rem)',
  h2: 'clamp(2.8rem, 4vw, 3.6rem)',
  h3: '2.4rem',
  lead: '2rem',
  body: '1.7rem',
  small: '1.4rem',
  stat: 'clamp(4.4rem, 6vw, 5.6rem)',
} as const

export const layout = {
  larguraMax: 'var(--largura-max)',
  espSecao: 'var(--esp-secao)',
  headerAltura: 'var(--header-altura)',
} as const

export const bp = {
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1024px)',
} as const
