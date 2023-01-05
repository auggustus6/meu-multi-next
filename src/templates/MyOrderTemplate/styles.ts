import styled from "styled-components";
import theme from "styles/theme";

export const ContainerOrderTemplate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  min-height: 100vh;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Oders = styled.div`
  flex: 1;
`;

export const UpdatesOrder = styled.div`
  padding-left: 3rem;
  flex: 1;
`;

export const About = styled.div`
  padding-top: 30px;
`;

export const HorizontalGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .blue-bold {
    color: ${theme.colors.primary};
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
