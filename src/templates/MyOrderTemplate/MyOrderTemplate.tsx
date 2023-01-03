import Label from "components/Labels/Labels";
import CardAbout from "./components/CardAbout/CardAbout";
import CardInfo from "./components/CardInfo/CardInfo";
import * as S from "./styles";

const MyOrderTemplate = () => {
  return (
    <S.ContainerOrderTemplate>
      <S.Orders>
        <S.ContainerOrder>
          <Label color="primary">MEU PEDIDO</Label>
          <S.ContainerCard>
            <CardInfo flex={1} title="N. do Pedido">
              <p className="blueBold">#42120301</p>
            </CardInfo>
            <CardInfo flex={2} title="Data da Compra">
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
          <S.ContainerCardAbout>
            <Label color="primary">VEJA MAIS SOBRE A MULTI</Label>
            <S.ContainerCards>
              <CardAbout cardBackground="evaluateService">
                <p>
                  Avaliar <br /> Atendimento
                </p>
              </CardAbout>
              <CardAbout cardBackground="fidelity">
                <p>
                  Acessar{" "}
                  <span>
                    Cliente <br /> Fidelidade
                  </span>
                </p>
              </CardAbout>
              <CardAbout cardBackground="contact">
                <p>
                  Entrar em <br /> Contato
                </p>
              </CardAbout>
              <CardAbout cardBackground="multi">
                <p>
                  Indique a <br /> Multi
                </p>
              </CardAbout>
            </S.ContainerCards>
          </S.ContainerCardAbout>
        </S.ContainerOrder>
        <S.ContainerUpdate>
          <Label color="primary">ATUALIZAÇÕES</Label>
        </S.ContainerUpdate>
      </S.Orders>
    </S.ContainerOrderTemplate>
  );
};

export default MyOrderTemplate;
