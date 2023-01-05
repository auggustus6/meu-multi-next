import Title from "components/Labels/Title/Labels";
import SubTitle from "components/Labels/SubTitle/Label";
import CardInfo from "./components/CardInfo/CardInfo";
import * as S from "./styles";
import CardAbout from "./components/CardAbout/CardAbout";
import Steps from "./components/Steps/Steps";

const MyOrderTemplate = () => {
  return (
    <S.ContainerOrderTemplate>
      <S.Oders>
        <Title color="title">MEU PEDIDO</Title>
        <S.HorizontalGroup>
          <CardInfo title="N. do Pedido" flex={1}>
            <p className="blue-bold">#42120301</p>
          </CardInfo>
          <CardInfo title="Data da Compra" flex={2}>
            <p color="">#42120301</p>
          </CardInfo>
        </S.HorizontalGroup>
        <CardInfo title="Dados Cliente" flex={2}>
          <p>Carlos Augusto Salles</p>
          <p>auggustus6@gmail.com</p>
          <p>+55 17 991821933</p>
        </CardInfo>
        <S.About>
          <SubTitle color="title">VEJA MAIS SOBRE A MULTI</SubTitle>
          <S.HorizontalGroup>
            <CardAbout cardBackground="evaluateService" flex={1}>
              <p>
                Avaliar <br /> Atendimento
              </p>
            </CardAbout>
            <CardAbout cardBackground="fidelity" flex={1}>
              <p>
                Acessar{" "}
                <span>
                  Cliente <br />
                  Fidelidade
                </span>{" "}
              </p>
            </CardAbout>
          </S.HorizontalGroup>
          <S.HorizontalGroup>
            <CardAbout cardBackground="contact" flex={1}>
              <p>
                Entrar em <br /> Contato
              </p>
            </CardAbout>
            <CardAbout cardBackground="multi" flex={1}>
              <p>
                Indique a <br /> Multi
              </p>
            </CardAbout>
          </S.HorizontalGroup>
        </S.About>
      </S.Oders>
      <S.UpdatesOrder>
        <Title color="title">ATUALIZAÇÕES</Title>
        <Steps />
        <Steps />
        <Steps />
        <Steps />
      </S.UpdatesOrder>
    </S.ContainerOrderTemplate>
  );
};

export default MyOrderTemplate;
