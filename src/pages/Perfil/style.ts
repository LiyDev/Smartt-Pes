import styled from 'styled-components';

export const PerfilContainer = styled.div<{$paddingIphone?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${props => props.$paddingIphone ? 'calc(80px + env(safe-area-inset-bottom))' : 0};
`;

export const WrapperPerfil = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
`

export const FotoPerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PerfilIcon = styled.img`
    width: 240px;
    height: auto;
    border-radius: 100%;
`

export const PerfilNome = styled.h2`
    font-family: 'Lexend', sans-serif;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
`

export const PerfilMembroTempoText = styled.label`
    color: #6B7582;
    font-size: 1rem;
    font-weight: 400;
`

export const SecaoContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`

export const SecaoTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;

`



