import styled from "styled-components";

export const RegisterContainer = styled.div`

    display: flex;
    flex-direction: column;
    font-family: "Lexend", sans-serif;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0 0 0;
`

export const FormRegister = styled.form`
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1.5rem;
`
export const Logo = styled.img`
    width: 150px;
    height: auto;
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

export const SubmitButton = styled.button`
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