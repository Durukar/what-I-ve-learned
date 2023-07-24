const conta = {
  email: 'teste@teste.com',
  password: 'teste@teste',
  name: 'Lucas Davila'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1000)
})