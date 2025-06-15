import styled from "styled-components";
import BackArrowSvg from '../assets/backarrow.svg'
import { useNavigate } from "react-router";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #999999;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`

const BackIcon = styled.img`
    width: 20px;
    height: auto;
    cursor: pointer;
    margin-right: 1.5rem;
`

const HeaderTitle = styled.h1`
    font-size: 20px;
    margin: 0;
`

interface Props {
    title: string
}

const Header = ({title}: Props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
                <BackIcon src={BackArrowSvg} onClick={() => navigate(-1)}/>
            <HeaderTitle>
                {title}
            </HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;