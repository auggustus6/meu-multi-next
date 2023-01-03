import styled from "styled-components";
import theme from "styles/theme";

export const ContainerOrderTemplate = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  border: 1px solid blue;
  justify-content: space-between;
  margin: 0 auto;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  .blueBold {
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const ContainerOrder = styled.div`
  width: 100%;
  max-width: 33rem;
  border: 1px solid green;
`;

export const ContainerUpdate = styled.div`
  width: 100%;
  max-width: 33rem;
`;

export const InfoContent = styled.div`
  p:not(:last-child) {
    font-size: 1.125rem;
    margin-bottom: 0.7rem;
  }
`;

export const WrapperOrder = styled.div`
  background: red;
`;

export const ContainerUpdateOrder = styled.div`
  border: 1px solid pink;
`;
