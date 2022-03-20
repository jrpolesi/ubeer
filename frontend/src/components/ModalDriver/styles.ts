import styled from "styled-components";

export const PopupDriver = styled.div`
  width: 99%;
  height: 280px;
  position: absolute;
  top: 8;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: black;
  border-radius: 16px 16px 0px 0px;
  border: 1px solid #97adb6;

  section {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  button {
    width: 80%;
    padding: 9px;
  }
`;

export const PopupWaitingDriver = styled.div`
  width: 99%;
  height: 280px;
  position: absolute;
  top: 8;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: black;
  border-radius: 16px 16px 0px 0px;
  border: 1px solid #97adb6;

  section {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

`;
