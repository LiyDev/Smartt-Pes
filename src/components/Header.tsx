import styled from "styled-components";
import BackArrowSvg from '../assets/backarrow-white.svg'
import { useNavigate } from "react-router";
import Logo from '../assets/logowhitebg.jpg'

const HeaderContainer = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 20% 60% 20%;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #999999;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    background-color: #00663E;
    color: #fff;
`

const BackIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackIcon = styled.img`
    width: 20px;
    height: auto;
    cursor: pointer;
    margin-right: 1.5rem;
`

const HeaderTitle = styled.h1`
    text-align: center;
    font-size: 20px;
    margin: 0;
`

const HeaderLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderLogo = styled.img`
    border-radius: 50px;
    width: 50px;
    height: auto;
`

interface Props {
    title: string
    isHome?: boolean
}

const Header = ({title, isHome}: Props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <BackIconContainer>
                {isHome ? <></> : <BackIcon src={BackArrowSvg} onClick={() => navigate('/home')}/>}
            </BackIconContainer>
            <HeaderTitle>
                {title}
            </HeaderTitle>
            <HeaderLogoContainer>
                <HeaderLogo src={Logo}/>
            </HeaderLogoContainer>
        </HeaderContainer>
    )
}

export default Header;