import { login } from './login' 

describe('login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'lucasdavila@snews.tv'
  const mockPassword = 'radio@TV'
  it('Deve exibir um alert com boas vindas', () =>{
    login(mockEmail, mockPassword)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
  })

  it('Não deve permitir o acesso sem o email interno', () =>{
    login(mockEmail,mockPassword)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  })
})