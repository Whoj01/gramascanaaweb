import { TELEFONE_WHATSAPP } from './contato'

export const sendMessage = () => {
  const message = 'Olá, gostaria de fazer um orçamento com vocês!'

  window.open(
    `https://api.whatsapp.com/send?phone=${TELEFONE_WHATSAPP}&text=${message}`,
    '_blank',
  )
}
