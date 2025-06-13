import { 
    ButtonContainer,
    Description,
    HomeContainer,
    Logo,
    Subtitle,
    TextContainer
} from "./style";

import LogoIcon from '../../assets/logo.jpg'
import Button from "../../components/UI/Button";

const Home = () => {

    return (
        <HomeContainer>
            <Logo src={LogoIcon} />
            <TextContainer>
                <Subtitle>Bem-vindo ao seu cuidado completo para os pés</Subtitle>  
                <Description>
                    Descubra uma nova forma de cuidar da saúde dos seus pés com a Smartt Pés. 
                    Agende consultas, acompanhe seu tratamento e receba dicas personalizadas para manter seus pés sempre saudáveis.
                </Description>
            </TextContainer>
            
            <ButtonContainer>
                <Button text="Criar conta" bgcolor="#DBE8F2" color="#2E3337" endpoint="/criar"/>
                <Button text="Entrar" endpoint="/login"/>
            </ButtonContainer>

        </HomeContainer>
    )
}

export default Home;