import styled from "styled-components";

export const SobreContainer = styled.div<{$paddingIphone?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${props => props.$paddingIphone ? 'calc(80px + env(safe-area-inset-bottom))' : 0};
`

export const SobreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
`

export const SobreImageHeader = styled.img`
    width: 100%;
    margin-bottom: 1.5rem;
`

export const SobreTitle = styled.h2`
    font-size: 22px;
`

export const SobreText = styled.p`
    font-size: 1rem;
    font-weight: 400;
`