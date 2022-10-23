import { Envelope, Lock } from "phosphor-react"
import { Button } from "./Components/Button"
import { Checkbox } from "./Components/Checkbox"
import { Heading } from "./Components/Heading"
import { Text } from "./Components/Text"
import { TextInput } from "./Components/TextInput"
import { Logo } from "./Logo"
import "./styles/global.css"

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Lombeira Design System
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-2">
          Endereço de e-mail:
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail!" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          Sua senha:
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-400 mt-1">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">Entrar</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200 transition-all">Esqueceu sua senha</a>
        </Text>
        <Text asChild size="sm">
          <a href="#" className="text-gray-400 underline hover:text-gray-200 transition-all">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

