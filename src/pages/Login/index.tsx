import Header from "../../components/Header";
import { Logo, LogoContainer, SubmitButton } from "../Register/style";
import { FormLogin, Input, LoginContainer, LoginOptionsLabel, RegisterOptionContainer } from "./style"
import LogoIcon from '../../assets/logowhitebg.jpg'
import Label from "../../components/UI/Label";
import { useNavigate } from "react-router";

const Login = () => {
    
    const navigate = useNavigate();

    //fazer lógica pra o submit ir pra uma tela de entrada;
    //fazer campo de erro personalizado (?)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/home")
    }

    return (
        <LoginContainer>
            <Header title="Entrar" isHome={true}/>
            <LogoContainer>
                <a href="/"><Logo src={LogoIcon}/></a>
            </LogoContainer>
            <FormLogin onSubmit={handleSubmit}>
                <Label text="Email ou nome de usuário" labelFor="email"/>
                <Input
                type="email"
                id="email"
                placeholder="seuemail@email.com"
                required
                />
                <Label text="Senha" labelFor="senha"/>
                <Input
                type="password" 
                id="senha" 
                placeholder="Digite sua senha"
                style={{marginBottom:'0'}}
                required
                />
                <LoginOptionsLabel>Esqueceu a senha?</LoginOptionsLabel>
                <SubmitButton type="submit">Entrar</SubmitButton>
            </FormLogin>
            <RegisterOptionContainer>
                <LoginOptionsLabel onClick={() => navigate("/criar")}>Não tem uma conta? Cadastre-se</LoginOptionsLabel>
            </RegisterOptionContainer>
        </LoginContainer>
    )
}

export default Login;