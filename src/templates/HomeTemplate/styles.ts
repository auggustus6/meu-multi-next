import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 50%;

  div {
    background: red;
  }
`;

export const FindOrder = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid red;
`;
