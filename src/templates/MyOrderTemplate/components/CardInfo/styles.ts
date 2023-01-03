import styled from "styled-components";
import theme from "styles/theme";

interface FlexProps {
  flex: number;
}

export const CardInfoContainer = styled.div<FlexProps>`
  display: flex;
  flex: ${(p) => p.flex};
  padding: 1rem;
  min-height: 10rem;
  border: 1px solid ${theme.colors.cardBorder};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }

  p {
    font-size: 1.125rem;
    color: ${theme.colors.black};
  }
`;
