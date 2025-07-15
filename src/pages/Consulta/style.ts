import styled from "styled-components";

export const ConsultaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const AgendaContainer = styled.div`
    align-self: center;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
`

export const ConsultaTitle = styled.h3`
    margin-top: 1.5rem;
    font-family: 'Lexend', sans-serif;
    font-weight: 500;
    font-size: 22px;
    align-self: flex-start;
`

export const ButtonIcon = styled.img`
    width: 30px;
    height: auto;
`

export const TipoConsultaSelect = styled.select`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    color: #333;
    font-size: 1rem;
    font-family: 'Lexend', sans-serif;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="gray" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.2rem;

    &:focus {
        outline: none;
        background-color: #fff;
    }
`

export const TipoConsutaOption = styled.option`
    background-color: #ffffff;
    color: #333;
    font-size: 1rem;
    font-family: 'Lexend', sans-serif;
    padding: 0.5rem; /* só funciona visualmente em alguns navegadores */
`
export const LabelConsulta = styled.label`
    align-self: flex-start;
    font-family: 'Lexend', sans-serif;
    font-weight: 400;
    font-size: 18px;
`

export const DataConsultaInput = styled.input`
    width: 90%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f5f5f5;
    color: #333;
    font-size: 1rem;
    font-family: 'Lexend', sans-serif;

    &:focus {
        outline: none;
        border-color: #00663e;
        background-color: #fff;
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(50%);
        cursor: pointer;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
`

export const ConsultaButton = styled.button`
    text-align: center;
    width: 50%;
    background-color: #DBE8F2;
    border-radius: 6px;
    border-width: 0;
    color: #2E3337;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
`

export const WhatsappButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    width: 100%;
    background-color: #00663E;
    border-radius: 6px;
    border-width: 0;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
`

export const WhatsappLink = styled.a`
    text-decoration: none;
    width: 50%;
`
export const MinhasConsultasContainer = styled.div`
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
`

export const MinhaConsultaCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 0;
    gap: 1rem;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #F2F2F5;
`

export const TextContainer = styled.div`
    height: auto;
    font-family: 'Lexend', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
`

export const Logo = styled.img`

`

export const VerConsultaButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #F2F2F5;
    cursor: pointer;
`