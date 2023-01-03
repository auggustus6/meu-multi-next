import theme from "styles/theme";
import * as S from "./styles";

type ColorsType = typeof theme.colors;

interface LabelProps {
  children: React.ReactNode;
  color?: keyof ColorsType;
}

const Label = ({ children, color = "black" }: LabelProps) => {
  return <S.Label $color={color}>{children}</S.Label>;
};

export default Label;
