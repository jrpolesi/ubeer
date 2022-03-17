import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";
import { MailOption } from "grommet-icons";
export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    background-image: url(${backgroundMap});
  }
`;
export const Box = styled.div`
  height: 400px;
  width: 60%;
`;

export const InputText = styled.input`
  width: 80%;
  border: none;
  /* height: 0px; */
`;

export const Label = styled.label`
  border: 2px solid;
  height: 60px;
`;
