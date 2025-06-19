import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HistoricoContainer, ConsultaCardContainer, DataLogo, HistoricoTextContainer, ConsultaTipo, ConsultaData, StatusConsulta, HistoricoLogoContainer, HistoricoWrapper } from './style.ts'
import LogoCalendario from '../../assets/HistoricoCalendarioLogo.svg'
import consultasMock from '../../services/consultasMock.json'


const Historico = () => {

    type Consulta = {
        tipoConsulta: string,
        dataConsulta: string,
        status: string
    }

    return (
        <HistoricoContainer>
            <Header title="Histórico"/>
            <HistoricoWrapper>
                {consultasMock.map((consulta: Consulta, index: number) => (
                <ConsultaCardContainer key={index}>
                    <HistoricoLogoContainer>
                        <DataLogo src={LogoCalendario}/>
                    </HistoricoLogoContainer>
                    <HistoricoTextContainer>
                        <ConsultaTipo>{consulta.tipoConsulta}</ConsultaTipo>
                        <ConsultaData>{consulta.dataConsulta}</ConsultaData>
                    </HistoricoTextContainer>
                    <StatusConsulta>{consulta.status}</StatusConsulta>
                </ConsultaCardContainer>
                ))}
            </HistoricoWrapper>            
            <Footer position="sticky"/>
        </HistoricoContainer>
    )
}

export default Historico;