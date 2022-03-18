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
    background-color: #fbd50e;
    width: 90%;
    height: 48px;
    color: white;
    border-radius: 15px;
    margin-top: 15px;
    border: solid 2px #fbd50e;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
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

  button {
    background-color: #fbd50e;
    width: 90%;
    height: 48px;
    color: white;
    border-radius: 15px;
    margin-top: 15px;
    border: solid 2px #fbd50e;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
