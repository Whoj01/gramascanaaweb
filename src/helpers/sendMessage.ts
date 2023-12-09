export const sendMessage = () => {
  const message = 'Olá, gostaria de fazer um orçamento com vocês!'

  window.open(
    `https://api.whatsapp.com/send?phone=5515996218062&text=${message}`,
    '_blank',
  )
}
