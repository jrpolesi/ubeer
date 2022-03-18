import styled from "styled-components";
import map from "../../images/map.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  
`;

export const Main = styled.div`
  height: 100vh;
  background: url(${map}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

    form {
      width: 95%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      >div {
        width: 100%;
      }

      button {
        margin-top: 60px;
        width: 100%;
      }
    }

    h1 {
        font-family: "comfortaa";
        font-size: 35px;
        margin-bottom: 20px;
        text-align: center;
    }

  @media (max-width: 900px){
      background: #F7F8F9;

      h1 {
        text-align: left;
      }

      form {

      button {
        margin-top: 20px;
      }
    }
  }
`;
