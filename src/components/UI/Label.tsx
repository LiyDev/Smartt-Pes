import styled from "styled-components";

const LabelStyled = styled.label`
    font-family: "Lexend", sans-serif;
    font-size: 1rem;
    font-weight: 500;
`

interface Props {
    text: string
    labelFor: string
}

const Label = ({text, labelFor}: Props) => {
    return (
        <LabelStyled htmlFor={labelFor}>
            {text}
        </LabelStyled>
    )
}

export default Label;