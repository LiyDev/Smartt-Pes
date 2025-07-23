import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  SobreContainer,
  SobreImageHeader,
  SobreText,
  SobreTitle,
  SobreWrapper,
} from "./style";
import sobreIcon from "../../assets/SobreIcon.jpg";
import { useEffect, useState } from "react";

const Sobre = () => {

  const [isIphone, setIsIphone] = useState(false);
  useEffect(() => {
      const userAgentDevice = navigator.userAgent.toLowerCase();
      setIsIphone(userAgentDevice.includes('iphone'));
  },[])    
  
  return (
    <SobreContainer $paddingIphone={isIphone}>
      <Header title="Sobre a podologia" />
      <SobreImageHeader src={sobreIcon} />

      <SobreWrapper>
        <SobreTitle>O que é podologia?</SobreTitle>
        <SobreText>
          A podologia é a área da saúde especializada nos cuidados com os pés. O
          profissional podólogo é responsável por prevenir, diagnosticar e
          tratar diversas condições que afetam a saúde dos pés, como calos,
          unhas encravadas, rachaduras, micoses, verrugas plantares, entre
          outros.
        </SobreText>
        <SobreText>
          Mas a podologia vai além de apenas “cuidar dos pés”. Ela tem um papel
          fundamental na qualidade de vida, no bem-estar e até na mobilidade das
          pessoas. Afinal, os pés sustentam o corpo, nos levam a todos os
          lugares e merecem atenção especial.
        </SobreText>
        <SobreText>
          A podologia é indicada para todas as idades, desde crianças com
          alterações nos dedos ou unhas, até idosos que já apresentam
          dificuldades para cuidar dos próprios pés.
        </SobreText>
        <SobreTitle>
          Como a podologia pode atuar na vida das pessoas?
        </SobreTitle>
        <SobreText>
          • 🦶 Prevenção de problemas: Evita complicações futuras com o cuidado
          correto, especialmente em pessoas com doenças crônicas como diabetes,
          que precisam de atenção redobrada nos pés. 
        </SobreText>
        <SobreText>
            • 👣 Alívio de dores:
          Corrige alterações nas unhas e calosidades que causam desconforto ao
          andar. 
        </SobreText>
        <SobreText>
            • 🩺 Atenção terapêutica: Atua de forma complementar com outras
          áreas da saúde, oferecendo tratamentos e orientações específicas para
          manter os pés saudáveis.
        </SobreText>
        <SobreText>
            • 💅 Estética saudável: Mantém os pés bonitos
          sem abrir mão da segurança e da higiene, sempre com olhar técnico e
          profissional.
        </SobreText>
      </SobreWrapper>
      <Footer position="sticky" />
    </SobreContainer>
  );
};

export default Sobre;
