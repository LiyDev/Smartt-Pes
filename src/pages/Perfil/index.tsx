import {
  FotoPerfilContainer,
  PerfilContainer,
  PerfilIcon,
  PerfilMembroTempoText,
  PerfilNome,
  SecaoContainer,
  SecaoTitle,
  WrapperPerfil,
} from "./style";

import ProfileIcon from "../../assets/profileIcon.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfoCard from "../../components/ProfileInfoCard";
import { LucideMail, LucidePhone, LucideLocationEdit, LucideHeart } from "lucide-react";
import { useEffect, useState } from "react";

const Perfil = () => {

    const [isIphone, setIsIphone] = useState(false);
    useEffect(() => {
        const userAgentDevice = navigator.userAgent.toLowerCase();
        setIsIphone(userAgentDevice.includes('iphone'));
    },[]) 

  return (
    <PerfilContainer $paddingIphone={isIphone}>
      <Header title="Perfil" />
      <WrapperPerfil>
        <FotoPerfilContainer>
          <PerfilIcon src={ProfileIcon} />
          <PerfilNome>Ana Silva</PerfilNome>
          <PerfilMembroTempoText>
            Membro desde 1 de julho.
          </PerfilMembroTempoText>
        </FotoPerfilContainer>
        <SecaoContainer>
          <SecaoTitle>Informações Pessoais</SecaoTitle>
          <ProfileInfoCard
            infoText="ana.silva@email.com"
            infoIcon={LucideMail}
            infoTitle="Email"
            sizeIcon={22}
          />
          <ProfileInfoCard
            infoText="(11) 99999-8888"
            infoIcon={LucidePhone}
            infoTitle="Telefone"
            sizeIcon={22}
            
          />
          <ProfileInfoCard
            infoText="Rua das Flores, 123"
            infoIcon={LucideLocationEdit}
            infoTitle="Endereço"
            sizeIcon={22}
          />
        </SecaoContainer>
        <SecaoContainer>
          <SecaoTitle>Planos</SecaoTitle>
          <ProfileInfoCard
            infoText="Sem plano mensal"
            infoIcon={LucideHeart}
            infoTitle="Plano Atual"
            sizeIcon={22}
          />
        </SecaoContainer>
      </WrapperPerfil>
      <Footer />
    </PerfilContainer>
  );
};

export default Perfil;
