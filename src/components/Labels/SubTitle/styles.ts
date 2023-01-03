import styled from "styled-components";
import theme from "styles/theme";

type ColorsType = typeof theme.colors;

interface ColorProps {
  $color: keyof ColorsType;
}

export const Label = styled.h2<ColorProps>`
  color: ${(p) => p.theme.colors[p.$color]};
  margin: 1.875rem 0;
  font-size: 1.8rem;
`;
