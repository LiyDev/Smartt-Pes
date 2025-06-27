import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TeleconsultaContainer, TeleconsultaFrame, TeleconsultaText } from "./style";
import TeleconsultaImg from '../../assets/teleconsulta.jpg'
import { ButtonContainer } from "../Home/style";
import Button from "../../components/UI/Button";

const Teleconsulta = () => {
    return (
        <TeleconsultaContainer>
            <Header title="Teleconsulta"/>
            <TeleconsultaFrame src={TeleconsultaImg}/>
            <TeleconsultaText>
                A teleconsulta é uma consulta médica realizada remotamente, utilizando tecnologias de comunicação como videoconferência. Essa modalidade permite que pacientes recebam atendimento médico sem a necessidade de deslocamento físico até um consultório ou clínica.
            </TeleconsultaText>
            <ButtonContainer>
                <Button text="Iniciar Teleconsulta" endpoint="/home"/>
                <Button text="Agendar Teleconsulta" endpoint="/home" color="#2E3337" bgcolor="#DBE8F2"/>
            </ButtonContainer>
            <Footer/>
        </TeleconsultaContainer>
    )
}

export default Teleconsulta;