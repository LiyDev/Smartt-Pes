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

const Perfil = () => {
  return (
    <PerfilContainer>
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
          />
          <ProfileInfoCard
            infoText="(11) 99999-8888"
            infoIcon={LucidePhone}
            infoTitle="Telefone"
          />
          <ProfileInfoCard
            infoText="Rua das Flores, 123"
            infoIcon={LucideLocationEdit}
            infoTitle="Endereço"
          />
        </SecaoContainer>
        <SecaoContainer>
          <SecaoTitle>Planos</SecaoTitle>
          <ProfileInfoCard
            infoText="Sem plano mensal"
            infoIcon={LucideHeart}
            infoTitle="Plano Atual"
          />
        </SecaoContainer>
      </WrapperPerfil>
      <Footer />
    </PerfilContainer>
  );
};

export default Perfil;
