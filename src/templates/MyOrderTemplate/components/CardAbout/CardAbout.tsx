import theme from "styles/theme";
import * as S from "./styles";
import StartIcon from "../../../../../public/start.svg";

type BackgroundType = typeof theme.colors;

interface CardAboutContainerProps {
  cardBackground: keyof BackgroundType;
  children: React.ReactNode;
  flex: number;
}

const CardAbout = ({
  cardBackground,
  children,
  flex,
}: CardAboutContainerProps) => {
  return (
    <S.CardAboutContainer cardBackground={cardBackground} flex={flex}>
      <StartIcon fontSize={"2.45rem"} />
      {children}
    </S.CardAboutContainer>
  );
};

export default CardAbout;
