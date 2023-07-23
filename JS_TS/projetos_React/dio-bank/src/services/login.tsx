export const login = (email:string, password:string): void => {
  if(!email || !password) {
    alert('Necessário digitar um email ou senha')
  } else {
    if(email === 'lucasdavila@snews.tv' && password === 'radio@TV') {
      alert(`Bem vindo ${email}!`)
    } else {
      alert('Você não é o meu criador')
    }
  }
}