import styled from "styled-components"

export const HistoricoContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`

export const HistoricoWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ConsultaCardContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    gap: 1rem;
`

export const HistoricoLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #F2F2F5;
`

export const DataLogo = styled.img`
    
`

export const HistoricoTextContainer = styled.div`
    height: auto;
    font-family: 'Lexend', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
`

export const ConsultaTipo = styled.h3`
    width: 90%;
    color: #000000;
    font-size: 1rem;
     white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`

export const ConsultaData = styled.label`
    color: #6B7582;
    font-size: 14px;
    
`
export const StatusConsulta = styled.label`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
`