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


const Tratamentos = () => {
    return (
        <TratamentosContainer>
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