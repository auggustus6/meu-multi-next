import theme from "styles/theme";
import * as S from "./styles";
import StartIcon from "../../../../../public/start.svg";

type BackgroundType = typeof theme.colors;

interface CardAboutContainerProps {
  cardBackground: keyof BackgroundType;
  children: React.ReactNode;
}

const CardAbout = ({ cardBackground, children }: CardAboutContainerProps) => {
  return (
    <S.CardAboutContainer cardBackground={cardBackground}>
      <StartIcon fontSize={"2.45rem"} />
      {children}
    </S.CardAboutContainer>
  );
};

export default CardAbout;
