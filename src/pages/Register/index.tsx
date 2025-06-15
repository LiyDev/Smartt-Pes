import Header from "../../components/Header";
import Label from "../../components/UI/Label";
import LogoIcon from '../../assets/logowhitebg.jpg'

import { FormRegister, RegisterContainer, Input, SubmitButton, LogoContainer, Logo } from "./style";

const Register = () => {

    //pesquisar como escolhe entre dois returned de acordo com boolean
    //fazer algumas validações, como máximo de caracters etc
    //ver se pegar função de onchange por props vai funcionar.
    //fazer lógica pra o submit ir pra uma tela de confirmação ou então voltar pro inicio;
    //fazer campo de erro personalizado (?)
    return (
        <RegisterContainer>
            <Header title="Novo Cliente"/>
            <LogoContainer>
                <Logo src={LogoIcon}/>
            </LogoContainer>
            <FormRegister onSubmit={(e) => {e.preventDefault();}}>
                <Label text="Nome" labelFor="nome"/>
                <Input 
                type="text" 
                id="nome" 
                placeholder="Jane Doe"
                />
                <Label text="Telefone" labelFor="telefone"/>
                <Input 
                type="tel" 
                id="telefone" 
                placeholder="(99) 9 9999 9999"
                />
                <Label text="Email" labelFor="email"/>
                <Input 
                type="email" 
                id="email" 
                placeholder="seuemail@email.com"
                />
                <Label text="Senha" labelFor="senha"/>
                <Input 
                type="password" 
                id="senha" 
                placeholder="Digite sua senha"
                />
                <SubmitButton type="submit">Criar Conta</SubmitButton>
            </FormRegister>
            
        </RegisterContainer>
    )
}

export default Register;