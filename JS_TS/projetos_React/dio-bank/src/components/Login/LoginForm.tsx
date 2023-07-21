export function LoginForm() {
  return (
    <>
      <label htmlFor='emailInput'>
        Email
      </label>
      <input id='emailInput' type='email' />

      <label htmlFor='passwordInput'>
        Password
      </label>
      <input id='passwordInput' type='password' />
      <button>
        Entrar
      </button>
    </>
  )
}

