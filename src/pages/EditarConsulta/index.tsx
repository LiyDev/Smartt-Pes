import { LucideLocationEdit, LucideCalendar, LucideCircleUserRound, LucideClipboardPlus } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import { ButtonContainer, EditarConsultaContainer, SecaoContainer, SecaoTitle, Wrapper } from "./style";
import Button from "../../components/UI/Button";
import { useEffect, useState } from "react";


const EditarConsulta = () => {

    const [isIphone, setIsIphone] = useState(false);
    useEffect(() => {
        const userAgentDevice = navigator.userAgent.toLowerCase();
        setIsIphone(userAgentDevice.includes('iphone'));
    },[]) 

  return (
    <EditarConsultaContainer $paddingIphone={isIphone}>
      <Header title="Detalhes da Consulta" />
      <Wrapper>
        <SecaoContainer>
          <SecaoTitle>Informações Pessoais</SecaoTitle>
          <ProfileInfoCard 
          infoTitle="Paciente"
          infoText="Ana Silva"
          infoIcon={LucideCircleUserRound}
          sizeIcon={28}
          />
          <ProfileInfoCard
            infoTitle="Data e Hora"
            infoText="22 de julho, 2024 - 14:00"
            infoIcon={LucideCalendar}
            sizeIcon={28}
          />
          <ProfileInfoCard
            infoTitle="Local"
            infoText="Clínica Rua Silveira Martins, 1004, Narandinba, Salvador."
            infoIcon={LucideLocationEdit}
            sizeIcon={28}
          />
          <ProfileInfoCard
            infoTitle="Tipo de Consulta"
            infoText="Consulta de Rotina"
            infoIcon={LucideClipboardPlus}
            sizeIcon={28}
          />
        </SecaoContainer>
        <SecaoContainer>
          <SecaoTitle>Opções</SecaoTitle>
          <ButtonContainer>
            <Button text="Reagendar Consulta" endpoint=""/>
            <Button text="Cancelar Consulta" endpoint="" color="#2E3337" bgcolor="#DBE8F2"/>
          </ButtonContainer>

        </SecaoContainer>
      </Wrapper>
      <Footer />
    </EditarConsultaContainer>
  );
};

export default EditarConsulta;
