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
    gap: 1rem;
    align-items: center;
`

export const ConsultaTitle = styled.h3`
    font-family: 'Lexend', sans-serif;
    font-weight: 500;
    font-size: 20px;

`

export const WhatsappButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
export const ButtonIcon = styled.img`
    width: 30px;
    height: auto;
`

export const WhatsappLink = styled.a`
    text-decoration: none;
    width: 100%;
`