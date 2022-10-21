import { Logo } from "../assets/components/Logo"

export function LoginPage() {
  return (
    <div className="
            w-screen 
            h-screen
            flex 
            flex-col
            items-center
            justify-center
            bg-gray-050
            text-gray-800
            ">
      <header>
        <Logo />
        <span className="text-gray-800 text-[52px] font-logo">DUO</span>
      </header>

      <form className="flex flex-col items-center gap-3 items-stretch w-full max-w-sm mt-6">
        <input
          className="text-lg h-12 py-4 px-3 rounded"
          type="email" name="loginEmail" id="loginEmail" placeholder="Digite seu email" 
          />
        <input
          className="text-lg h-12 py-4 px-3 rounded"
          type="password" name="loginPassword" id="loginPassword" placeholder="Digite sua senha" 
        />
        <button
          className="
            bg-white 
            px-4
            h-12
            flex
            items-center
            text-black
            text-opacity-50
            my-3
            "
          >
          Sing in with Google</button>

        <button 
          className="h-12 bg-turq/300 text-gray-050 rounded"
          type="submit"
          >
            Acessar
        </button>
      </form>

      <footer className="flex justify-between w-full max-w-sm mt-8">
        <a className="text-gray-400" href="#">Crie uma conta</a>
        <a className="text-gray-400" href="#">Esqueci minha senha?</a>
      </footer>
    </div>
  )
}