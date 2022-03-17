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
  background: url(${map});
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  }
`;
