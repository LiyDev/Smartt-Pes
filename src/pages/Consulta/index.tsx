import Footer from "../../components/Footer";
import {
  AgendaContainer,
  ButtonContainer,
  ButtonIcon,
  ConsultaButton,
  ConsultaContainer,
  ConsultaTitle,
  DataConsultaInput,
  LabelConsulta,
  Logo,
  LogoContainer,
  MinhaConsultaCard,
  MinhasConsultasContainer,
  TextContainer,
  TipoConsultaSelect,
  TipoConsutaOption,
  VerConsultaButton,
  WhatsappButton,
  WhatsappLink,
} from "./style";
import Header from "../../components/Header";
import WhatsappLogo from "../../assets/WhatsappLogo.svg";
import { ChevronRight } from "lucide-react";
import LogoCalendario from "../../assets/HistoricoCalendarioLogo.svg";
import { ConsultaData, ConsultaTipo } from "../Historico/style";
import { useNavigate } from "react-router";

const Consulta = () => {
  const WhatsappUrl =
    "https://api.whatsapp.com/send?phone=557197272920&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.";

    const navigate = useNavigate();

  return (
    <ConsultaContainer>
      <Header title="Agendar Consulta" />
      <AgendaContainer>
        <LabelConsulta>Escolha a especialidade:</LabelConsulta>
        <TipoConsultaSelect>
          <TipoConsutaOption>Aromaterapia</TipoConsutaOption>
          <TipoConsutaOption>Dermatologia</TipoConsutaOption>
          <TipoConsutaOption>Reflexologia</TipoConsutaOption>
          <TipoConsutaOption>Angiologia</TipoConsutaOption>
          <TipoConsutaOption>Podologia</TipoConsutaOption>
        </TipoConsultaSelect>
        <LabelConsulta>Data da Consulta:</LabelConsulta>
        <DataConsultaInput type="datetime-local" />
        <ButtonContainer>
          <ConsultaButton>Agendar Consulta</ConsultaButton>
          <WhatsappLink href={WhatsappUrl}>
            <WhatsappButton>
              <ButtonIcon src={WhatsappLogo} />
              Agendar por WhatsApp
            </WhatsappButton>
          </WhatsappLink>
        </ButtonContainer>
        <MinhasConsultasContainer>
          <ConsultaTitle>Minhas Consultas</ConsultaTitle>
          <MinhaConsultaCard>
            <LogoContainer>
                <Logo src={LogoCalendario}/>
            </LogoContainer>
            <TextContainer>
                <ConsultaTipo>Consulta de Podologia</ConsultaTipo>
                <ConsultaData>20 de julho, 10:00</ConsultaData>
            </TextContainer>
            <VerConsultaButton onClick={() => navigate('/detalhes')}>
                <ChevronRight size={28}/>
            </VerConsultaButton>
          </MinhaConsultaCard>
          <MinhaConsultaCard>
            <LogoContainer>
                <Logo src={LogoCalendario}/>
            </LogoContainer>
            <TextContainer>
                <ConsultaTipo>Consulta de Aromaterapia</ConsultaTipo>
                <ConsultaData>20 de julho, 10:00</ConsultaData>
            </TextContainer>
            <VerConsultaButton onClick={() => navigate('/detalhes')}>
                <ChevronRight size={28}/>
            </VerConsultaButton>
          </MinhaConsultaCard>
        </MinhasConsultasContainer>
      </AgendaContainer>
      <Footer />
    </ConsultaContainer>
  );
};

export default Consulta;
