import styled from "styled-components";

export const EditarConsultaContainer = styled.div<{$paddingIphone?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${props => props.$paddingIphone ? 'calc(80px + env(safe-area-inset-bottom))' : 0};
`

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
`

export const SecaoContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const SecaoTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1.5rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`