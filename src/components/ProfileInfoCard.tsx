import styled from "styled-components";

export const InformacoesCard = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
`;

export const InformacoesIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
`;

export const InformacoesTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const InformacoesTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
`;

export const InformacoesText = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #6B7582;
`;

interface Props {
    infoText: string,
    infoTitle: string,
    infoIcon: React.ElementType,
    sizeIcon: number
}

const ProfileInfoCard = ( {infoText, infoTitle, infoIcon, sizeIcon}: Props ) => {
  const Icon = infoIcon;
  return (
      <InformacoesCard>
        <InformacoesIconContainer>
          <Icon size={sizeIcon} color={'green'} />
        </InformacoesIconContainer>
        <InformacoesTextContainer>
          <InformacoesTitle>
            {infoTitle}
          </InformacoesTitle>
          <InformacoesText>
            {infoText}
          </InformacoesText>
        </InformacoesTextContainer>
      </InformacoesCard>
  );
};

export default ProfileInfoCard;
