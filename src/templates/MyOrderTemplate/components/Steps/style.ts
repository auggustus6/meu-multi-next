import styled from "styled-components";

export const Progress = styled.div`
  border-radius: 50%;
  max-width: 6rem;
  width: 100%;
  min-height: 6rem;
  border: 4px solid #20659f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const T = styled.div`
  display: flex;
  position: relative;
  gap: 20px;

  & + & {
    margin-top: 3rem;

    &::before {
      content: "";
      width: 10px;
      background: #20659f;
      height: 3rem;
      position: absolute;
      left: 5%;
      top: -51%;

      @media (max-width: 1440px) {
        left: 7%;
      }

      @media (max-width: 1280px) {
        left: 4%;
      }

      @media (max-width: 1024px) {
        left: 5%;
      }
      @media (max-width: 768px) {
        left: 10%;
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-size: 1.125rem;
  }
`;
