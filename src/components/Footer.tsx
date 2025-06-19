import {
    Home,
    Layers,
    Package,
    User
} from 'lucide-react';
import styled from 'styled-components';

const FooterContainer = styled.div<{$position?: string}>`
    width: 100vw;
    display: flex;  
    justify-content: space-around;
    background-color: #00663E;
    position: ${props => props.$position || 'fixed' };;
    bottom: 0;
`

const FooterButton = styled.button`
    width: 25%;
    background-color: #00663E;
    color: #ffffff;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
    &:hover{
        background-color: black;
    }
`

const FooterLabel = styled.label`
    
`

interface Props {
    position?: string
}

const Footer = ( {position}: Props) => {
    return (
        <FooterContainer $position={position}>
            <FooterButton>
                <Home size={24}/>
                <FooterLabel>Início</FooterLabel>
            </FooterButton>
            <FooterButton>
                <Layers size={24}/>
                <FooterLabel>Consultas</FooterLabel>
            </FooterButton>
            <FooterButton>
                <Package size={24}/>
                <FooterLabel>Serviços</FooterLabel>
            </FooterButton>
            <FooterButton>
                <User size={24}/>
                <FooterLabel>Perfil</FooterLabel>
            </FooterButton>
        </FooterContainer>
    )
}

export default Footer;