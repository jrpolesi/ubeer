import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";
export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    margin-bottom: 17px;
  }
  Header.button {
    position: absolute;
  }
  button {
    margin-top: 370px;
    width: 100%;
  }
  h1{
    align-self: start;
    margin-left: 150px;
    margin-bottom: 10px;
    font-size: 35px;
  }
  @media (min-width: 768px) {
    background-image: url(${backgroundMap});
    h1{
      align-self:center;
      margin-left: 0;
      margin-bottom: 10px; 
    }
  }
`;

export const Box = styled.div`
  height: 400px;
  width: 343px;
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Label = styled.label`
  border: 2px solid;
  height: 60px;
`;
