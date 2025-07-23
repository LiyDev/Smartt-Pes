import styled from "styled-components";

export const ServicesContainer = styled.div<{$paddingIphone?: boolean}>`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-bottom: ${props => props.$paddingIphone ? 'calc(80px + env(safe-area-inset-bottom))' : 0};
`

export const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
`
export const MenuTitle = styled.h2`
    padding: 1.5rem 0;
    text-align: center;
    font-weight: 300;
    font-family: 'Lexend', sans-serif;
`

export const MenuButton = styled.button`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: #fff;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 2rem 1.5rem;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    &:hover {
        background-color: rgb(0,0,0,0.1);
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
`