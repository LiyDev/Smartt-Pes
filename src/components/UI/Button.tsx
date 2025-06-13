import { useNavigate } from "react-router";
import styled from "styled-components";

const ButtonContainer = styled.button<{$bgcolor?: string, $color?: string}>`
    text-align: center;
    width: 100%;
    background-color: ${props => props.$bgcolor || "#00663E"};
    border-radius: 6px;
    border-width: 0;
    color: ${props => props.$color || "#FFFFFF"};
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
`

interface Props {
    text: string,
    endpoint: string,
    bgcolor?: string,
    color?: string
}

const Button = ({bgcolor, color, text, endpoint}: Props) => {
        const navigate = useNavigate();

    return (
        <ButtonContainer $bgcolor={bgcolor} $color={color} onClick={() => navigate(endpoint)}>
            {text}
        </ButtonContainer>
    )
}

export default Button;