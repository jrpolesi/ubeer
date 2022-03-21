import styled from "styled-components";
import map from "../../images/map.svg";

export const Container = styled.div`
  padding: 80px 0 20px;
  min-height: 100vh;
  background: #f7f8f9;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-top: 100px;
    background: url(${map}) no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 95%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    > div {
      width: 100%;
    }

    button {
      margin-top: 30px;
      width: 100%;
    }
  }

  h1 {
    font-family: "comfortaa";
    font-size: 35px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 50px;
    }

    form {
      button {
        margin-top: 50px;
      }
    }
  }
`;
