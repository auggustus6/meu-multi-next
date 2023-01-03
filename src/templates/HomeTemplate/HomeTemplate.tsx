import * as S from "./styles";
import MeuMulti from "../../../public/meu-multi.svg";

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <S.Container></S.Container>
      <S.FindOrder>
        <MeuMulti width={"29rem"} height={"auto"} />
      </S.FindOrder>
    </S.Wrapper>
  );
};

export default HomeTemplate;
