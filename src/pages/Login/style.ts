import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`

export const FormLogin = styled.form`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1.5rem;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    line-height: 1.5rem;
    padding: 1rem 0.5rem;
    background-color: #D0D3D5;
    color: #61758A;
    margin-bottom: 1rem;
`

export const RegisterOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 2rem;
`

export const LoginOptionsLabel = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: #61758A;
    cursor: pointer;
    margin-bottom: 1rem;
`