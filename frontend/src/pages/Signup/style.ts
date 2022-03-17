import styled from "styled-components";
import map from "../../images/map.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 775px;
  display: flex;
  flex-direction: column;
  background: url(${map});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Main = styled.div`
  height: 100vh;
 
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

    h1 {
        font-family: "comfortaa";
        font-size: 35px;
        margin-bottom: 10px;
        text-align: center;
    }

    form{
      width: 300px;
      margin-bottom: 10px;

      div{

        margin-bottom: 5px;
      }
      button {
        border-radius: 6px;
      }
      label{
        font-size: 12px;
        margin: 2px;
      }
    }

    

  @media (max-width: 900px){
      background: #F7F8F9;

      h1 {
        text-align: left;
      }
  }
`;
