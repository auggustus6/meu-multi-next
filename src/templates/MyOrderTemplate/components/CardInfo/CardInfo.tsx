import * as S from "./styles";

interface FlexProps {
  flex: number;
  title: string;
  children: React.ReactNode;
}

const CardInfo = ({ flex, children, title }: FlexProps) => {
  return (
    <S.CardInfoContainer flex={flex}>
      <h4>{title}</h4>
      {children}
    </S.CardInfoContainer>
  );
};

export default CardInfo;
