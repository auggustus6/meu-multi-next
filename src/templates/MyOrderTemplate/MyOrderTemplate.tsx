import Label from "components/Labels/Labels";
import CardInfo from "./components/CardInfo/CardIndo";
import * as S from "./styles";

const MyOrderTemplate = () => {
  return (
    <S.ContainerOrderTemplate>
      <S.ContainerOrder>
        <Label color="primary">MEU PEDIDO</Label>
        <S.ContainerCard>
          <CardInfo flex={1} title="N. do Pedido">
            <p className="blueBold">#42120301</p>
          </CardInfo>
          <CardInfo flex={3} title="Data da Compra">
            <S.InfoContent>
              <p>29/12/2022 12:02:14</p>
            </S.InfoContent>
          </CardInfo>
        </S.ContainerCard>
        <CardInfo flex={1} title="Dados Cliente">
          <S.InfoContent>
            <p>Carlos Augusto Salles</p>
            <p>auggustus6@gmail.com</p>
            <p>+55 17 991821933</p>
          </S.InfoContent>
        </CardInfo>
      </S.ContainerOrder>
      <S.ContainerUpdate>
        <Label color="primary">ATUALIZAÇÕES</Label>
      </S.ContainerUpdate>
    </S.ContainerOrderTemplate>
  );
};

export default MyOrderTemplate;