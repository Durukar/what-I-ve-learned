import { login } from './login' 
import { api } from '../api/api'

describe('login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'teste@teste.com'
  const mockPassword = 'teste@teste'
  it('Deve exibir um alert com boas vindas caso o email seja valido', async () =>{
    await login(mockEmail, mockPassword)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
  })

  it('Não deve permitir o acesso sem o email interno', async () =>{
    await login(mockEmail,mockPassword)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  })

  it('Deve exibir um erro caso o email seja inválido', async () =>{
    await login('email@teste.com', '151260')
    expect(mockAlert).toHaveBeenCalledWith('Email e senha invalido')
  })
})