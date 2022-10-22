import { PrimaryButton } from "../components/PrimaryButton";
import { TextInput } from "../components/TextInput"
import ValidationList from "../components/ValidationList";

export function RegisterPage(){
    return(
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
            <h1>Criar uma conta</h1>
            <p>Preencha e encontre seu DUO</p> 
        </header>
            <form className="flex flex-col items-center gap-3 items-stretch w-full max-w-sm mt-6">
                <TextInput.Root>
                    <TextInput.Field
                        placeholder="Nome completo"
                        name="RegisterName"
                        type="text"
                    />
                </TextInput.Root>
                <TextInput.Root>
                    
                    <TextInput.Field
                        placeholder="Email"
                        name="RegisterEmail"
                        type="email"
                    />
                </TextInput.Root>
                <TextInput.Root>
                    <TextInput.Field
                        placeholder="Confirme o email"
                        name="RegisterConfirmEmail"
                        type="email"
                    />
                </TextInput.Root>
                <TextInput.Root>
                    <TextInput.Field
                        placeholder="Senha"
                        name="RegisterPassword"
                        type="password"
                    />
                </TextInput.Root>
                <TextInput.Root>
                    <TextInput.Field
                        placeholder="Confirme a senha"
                        name="RegisterConfirmPassword"
                        type="password"
                    />
                </TextInput.Root>
                <div className="listGroup">
                <ValidationList>Ter mo mínimo 8 dígitos</ValidationList>
                <ValidationList>Ter uma letra maiúscula</ValidationList>
                <ValidationList>Ter uma letra minúscula</ValidationList>
                <ValidationList>Ter um símbolo</ValidationList>
                <ValidationList>Ter um número</ValidationList>
            </div>
            <PrimaryButton type="submit">Próximo</PrimaryButton>
            </form>
        </div>
    );
}