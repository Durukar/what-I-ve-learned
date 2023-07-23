const conta = {
  email: 'lucasdavila@snews.tv',
  password: 'radio@TV',
  name: 'Lucas Davila'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1000)
})