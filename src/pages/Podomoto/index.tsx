import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { GuideIcon, GuideIconContainer, GuideText, GuideTextContainer, GuideTitle, PodomotoContainer, PodomotoDescription, PodomotoGuideContainer, PodomotoGuideWrapper, PodomotoSubtitle, PodomotoTextContainer, PodomotoTitle } from "./style"
import telIcon from '../../assets/MotoPodoTelefoneIcon.png'
import homeIcon from '../../assets/MotoPodoCasaIcon.png'
import personIcon from '../../assets/MotoPodoPessoaIcon.png'
import Button from "../../components/UI/Button"
import { ButtonContainer } from "../Home/style"
import { useEffect, useState } from "react"

const Podomoto = () => {

    const [isIphone, setIsIphone] = useState(false);
    useEffect(() => {
        const userAgentDevice = navigator.userAgent.toLowerCase();
        setIsIphone(userAgentDevice.includes('iphone'));
    },[]) 
    
    return (
        <PodomotoContainer $paddingIphone={isIphone}>
            <Header title="Emergência"/>

            <PodomotoTextContainer>
                <PodomotoTitle>Serviço de Emergência Homecare</PodomotoTitle>
                <PodomotoDescription>
                    Em caso de emergência podológica, oferecemos atendimento domiciliar rápido e eficiente. Nossa equipe está pronta para atender suas necessidades com a qualidade e segurança que você merece.
                </PodomotoDescription>
            </PodomotoTextContainer>

            <PodomotoGuideContainer>
                <PodomotoSubtitle>
                    Como solicitar                                      
                </PodomotoSubtitle>

                <PodomotoGuideWrapper>
                    <GuideIconContainer>
                        <GuideIcon src={telIcon}/>                                                   
                    </GuideIconContainer>
                    <GuideTextContainer>
                        <GuideTitle>1. Contato Inicial</GuideTitle>
                        <GuideText>Ligue para nossa central de atendimento.</GuideText>
                    </GuideTextContainer>
                </PodomotoGuideWrapper>

                <PodomotoGuideWrapper>
                    <GuideIconContainer>
                        <GuideIcon src={homeIcon}/>                                                   
                    </GuideIconContainer>
                    <GuideTextContainer>
                        <GuideTitle>2. Identificação</GuideTitle>
                        <GuideText>Informe seus dados e a natureza da emergência.</GuideText>
                    </GuideTextContainer>
                </PodomotoGuideWrapper>

                <PodomotoGuideWrapper>
                    <GuideIconContainer>
                        <GuideIcon src={personIcon}/>                                                   
                    </GuideIconContainer>
                    <GuideTextContainer>
                        <GuideTitle>3. Atendimento</GuideTitle>
                        <GuideText>Aguarde a chegada da equipe em sua residência.</GuideText>
                    </GuideTextContainer>
                </PodomotoGuideWrapper>

            </PodomotoGuideContainer>
            
            <ButtonContainer>
                <Button endpoint="" text="Ligar Agora"/> 
                <Button endpoint="" text="Mandar Mensagem" bgcolor="#DBE8F2" color="#2E3337"/> 
            </ButtonContainer>

            <Footer/>
        </PodomotoContainer>
    )
}

export default Podomoto