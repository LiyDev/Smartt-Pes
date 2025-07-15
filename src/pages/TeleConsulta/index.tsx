import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ButtonClick, TeleconsultaContainer, TeleconsultaFrame, TeleconsultaText } from "./style";
import TeleconsultaImg from '../../assets/teleconsulta.jpg'
import { ButtonContainer } from "../Home/style";
import Button from "../../components/UI/Button";

const Teleconsulta = () => {
    return (
        <TeleconsultaContainer>
            <Header title="Teleconsulta"/>
            <TeleconsultaFrame src={TeleconsultaImg}/>
            <TeleconsultaText>
                A teleconsulta é um atendimento online, por vídeo, onde o profissional de saúde (médico ou podólogo) avalia seus sintomas, orienta os cuidados iniciais e, se necessário, agenda um atendimento presencial.
                É prática, segura e feita com todo cuidado e sigilo que você merece.
            </TeleconsultaText>
            <ButtonContainer>
                <ButtonClick href="https://meet.google.com/"><Button text="Iniciar Teleconsulta" endpoint=""/></ButtonClick>
                <Button text="Agendar Teleconsulta" endpoint="/home" color="#2E3337" bgcolor="#DBE8F2"/>
            </ButtonContainer>
            <Footer/>
        </TeleconsultaContainer>
    )
}

export default Teleconsulta;