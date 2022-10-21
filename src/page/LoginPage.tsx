import { ReactNode } from "react";

interface IProps {
  children: ReactNode,
  name: string
}

export function LoginPage({ children, name }: IProps) {
  return (
    <div className='App'>
      <span className='title'>DUO</span>
      <form>
        <input type="email" name="loginName" id="loginName" placeholder={`${name}`}/>
        <input type="password" name="loginPassword" id="loginPassword" placeholder='Password' />
        <button type="submit">Acessar</button>
        <span className='linkButton'>Esqueceu sua senha?</span>
        <span className='linkButton'>Crie uma conta</span>
      </form>

      {children}
    </div>
  )
}