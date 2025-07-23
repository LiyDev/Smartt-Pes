import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { 
    PageTitle,
    TratamentoCard, 
    TratamentoDescription, 
    TratamentoIcon, 
    TratamentoRedirect, 
    TratamentosContainer, 
    TratamentoSubtitle, 
    TratamentoTextContainer, 
    Wrapper 
} from "./style";

import { especialidades } from '../../services/tratamentosMock.ts';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from "react";


const Tratamentos = () => {

    const [isIphone, setIsIphone] = useState(false);
    useEffect(() => {
        const userAgentDevice = navigator.userAgent.toLowerCase();
        setIsIphone(userAgentDevice.includes('iphone'));
    },[]) 

    return (
        <TratamentosContainer $paddingIphone={isIphone}>
            <Header title="Serviços"/>
            <PageTitle>Tratamentos</PageTitle>
            <Wrapper>
                {especialidades.map((tratamento, index) => (
                    <TratamentoCard key={index}>
                        <TratamentoIcon  src={tratamento.imagem} alt={tratamento.nome}/>
                        <TratamentoTextContainer>
                            <TratamentoSubtitle>
                                {tratamento.nome}
                            </TratamentoSubtitle>
                            <TratamentoDescription>
                                {tratamento.descricao}
                            </TratamentoDescription>
                        </TratamentoTextContainer>
                        <TratamentoRedirect>
                            <ChevronRight size={30}/>
                        </TratamentoRedirect>
                    </TratamentoCard>
                ))}
                
            </Wrapper>
            <Footer />
        </TratamentosContainer>
    )
}

export default Tratamentos;