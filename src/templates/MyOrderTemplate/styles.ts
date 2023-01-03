import styled from "styled-components";
import theme from "styles/theme";

export const ContainerOrderTemplate = styled.div`
  display: flex;
  padding: 0 4rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

export const Orders = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const About = styled.div`
  display: flex;
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
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ContainerUpdate = styled.div`
  width: 50%;
  margin-left: 5rem;

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const InfoContent = styled.div`
  p:not(:last-child) {
    font-size: 1.125rem;
    margin-bottom: 0.7rem;
  }
`;

export const ContainerCardAbout = styled.div`
  width: 100%;
  max-width: 43rem;
  margin-top: 3rem;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;
