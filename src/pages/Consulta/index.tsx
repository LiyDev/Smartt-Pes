import Footer from "../../components/Footer";
import { AgendaContainer, ButtonIcon, ConsultaContainer, ConsultaTitle, WhatsappButton, WhatsappLink } from "./style";
import Header from "../../components/Header";
import Button from "../../components/UI/Button";
import WhatsappLogo from '../../assets/WhatsappLogo.svg'

const Consulta = () => {
    const WhatsappUrl = 'https://api.whatsapp.com/send?phone=5599999999999&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'
    return (
        <ConsultaContainer>
            <Header title="Agendar Consulta"/>
            <AgendaContainer>
                <ConsultaTitle>Para agendar sua consulta, escolha o tipo de atendimento:</ConsultaTitle>
                <WhatsappLink href={WhatsappUrl}>
                    <WhatsappButton>
                        <ButtonIcon src={WhatsappLogo}/>
                        Agendar Consulta Presencial
                    </WhatsappButton>
                </WhatsappLink>
                <Button text="Agendar Teleconsulta" endpoint="" color="#2E3337" bgcolor="#DBE8F2"/>
            </AgendaContainer>
            <Footer/>
        </ConsultaContainer>
    )
}

export default Consulta;