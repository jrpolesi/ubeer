import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";

export const Container = styled.div`
  padding: 80px 0 20px;
  min-height: 100vh;
  background: #f7f8f9;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-top: 100px;
    background: url(${backgroundMap}) no-repeat center center fixed;
    background-size: cover;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 auto 0;
    margin-bottom: 30px;
    font-size: 35px;
  }

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

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 50px;
    }

    button {
      margin-top: 60px;
    }
  }
`;
