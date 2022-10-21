import { Logo } from "../components/Logo"
import { TextInput } from "../components/TextInput"

import { Envelope, Lock } from 'phosphor-react'
import { GoogleSignIn } from "../components/GoogleSignIn"
import { PrimaryButton } from "../components/PrimaryButton"
import { LinkButton } from "../components/LinkButton"

export function LoginPage() {
  return (
    <div className="
            w-screen 
            h-screen
            flex 
            flex-col
            items-center
            justify-center
            bg-gray-40
            text-gray-800
            ">
      <header>
        <Logo />
        <span className="text-gray-800 text-[52px] font-logo">DUO</span>
      </header>

      <form className="flex flex-col items-center gap-3 items-stretch w-full max-w-sm mt-6">
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Field 
            placeholder="Digite seu email" 
            name="loginEmail"
            type="email"
          />
        </TextInput.Root>
        
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Field 
            placeholder="Digite sua senha" 
            name="loginPassword"
            type="password"
          />
        </TextInput.Root>

        <GoogleSignIn />

        <PrimaryButton type="submit">Acessar</PrimaryButton>
      </form>

      <footer className="flex justify-between w-full max-w-sm mt-8">
        <LinkButton>Crie uma conta</LinkButton>
        <LinkButton>Esqueci minha senha?</LinkButton>
      </footer>
    </div>
  )
}