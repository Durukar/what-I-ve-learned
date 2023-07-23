import { api } from '../api/api'

export const login = async (email:string, password:string): Promise<void> => {
  const data:any = await api
  if(!email || !password) {
    alert('Necessário digitar um email ou senha')
  } else {
    if(email === data.email && password === data.password) {
      alert(`Bem vindo ${email}!`)
    } else {
      alert('Email e senha invalido')
    }
  }
}