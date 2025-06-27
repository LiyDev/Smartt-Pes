import styled from 'styled-components';

export const PlanosContainer = styled.div`
  display: flex;    
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const PlanoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background-color: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const PlanoTitulo = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const PlanoPreco = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const PlanoAssinar = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #DBE8F2;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  color: #2E3337;
  margin-top: 0.5rem;
  &:hover {
    background-color: #e6e6ea;
  }
`;

export const BeneficiosList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const BeneficioItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: #333;
`;

export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`