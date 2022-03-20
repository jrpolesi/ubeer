import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";

export const Main = styled.main`
  padding: 80px 0 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

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
    padding-top: 100px;
    background: url(${backgroundMap}) no-repeat center center fixed;
    background-size: cover;

    h1 {
      margin-bottom: 50px;
    }

    button {
      margin-top: 60px;
    }
  }
`;
