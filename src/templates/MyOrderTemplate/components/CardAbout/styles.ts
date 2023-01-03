import styled from "styled-components";
import theme from "styles/theme";

type BackgroundType = typeof theme.colors;

interface CardAboutContainerProps {
  cardBackground: keyof BackgroundType;
  flex: number;
}

export const CardAboutContainer = styled.div<CardAboutContainerProps>`
  background: ${(p) => p.theme.colors[p.cardBackground]};
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  flex: ${(p) => p.flex};

  p {
    color: ${theme.colors.white};
    margin-left: 1.6rem;

    span {
      font-weight: bold;
    }
  }
`;
