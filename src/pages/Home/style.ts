import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const ButtonContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const TextContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Logo = styled.img`
    width: 300px;
    height: 300px;
`

export const Subtitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
`

export const Description = styled.p`
    text-align: justify;
    font-weight: 400;
    font-size: 1rem;
`

export const TrabalheConoscoText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #61758A;
    cursor: pointer;
    margin-bottom: 1rem;
`