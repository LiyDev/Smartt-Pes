import styled from "styled-components";

export const TratamentosContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 90%;
    gap: 1rem;

`

export const PageTitle = styled.h2`
    font-family: 'Lexend', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 30px;
    padding: 1rem;
`

export const TratamentoCard = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`


export const TratamentoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const TratamentoSubtitle = styled.h3`
    font-family: 'Lexend', sans-serif;
    font-size: 1rem;
    font-weight: 500;
`

export const TratamentoDescription = styled.label`
    font-family: 'Lexend', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #6B7582;
    text-align: justify;
`

export const TratamentoIcon = styled.img`
    border-radius: 8px;
`

export const TratamentoRedirect = styled.button`
    border: none;
    background-color: #fff;
`