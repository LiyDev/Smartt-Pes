import Header from "../../components/Header";
import Label from "../../components/UI/Label";
import LogoIcon from '../../assets/logowhitebg.jpg'

import { FormRegister, RegisterContainer, Input, SubmitButton, LogoContainer, Logo } from "./style";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate('/home')
    }
    return (
        <RegisterContainer>
            <Header title="Novo Cliente" isHome={true}/>
            <LogoContainer>
                <a href="/"><Logo src={LogoIcon}/></a>
            </LogoContainer>
            <FormRegister onSubmit={handleSubmit}>
                <Label text="Nome" labelFor="nome"/>
                <Input 
                type="text" 
                id="nome" 
                placeholder="Jane Doe"
                minLength={4}
                />
                <Label text="Telefone" labelFor="telefone"/>
                <Input 
                type="tel" 
                id="telefone" 
                placeholder="(99) 9 9999 9999"
                minLength={4}
                />
                <Label text="Email" labelFor="email"/>
                <Input 
                type="email" 
                id="email" 
                placeholder="seuemail@email.com"
                minLength={4}
                />
                <Label text="Senha" labelFor="senha"/>
                <Input 
                type="password" 
                id="senha" 
                placeholder="Digite sua senha"
                minLength={4}
                />
                <SubmitButton type="submit">Criar Conta</SubmitButton>
            </FormRegister>
            
        </RegisterContainer>
    )
}

export default Register;