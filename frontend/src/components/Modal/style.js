import styled from "styled-components";

export const Popup = styled.div`
  width: 99%;
  height: 280px;
  position: absolute;
  top: 8;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #97adb6;
  border-radius: 16px 16px 0px 0px;
  border: 0.5px solid #97adb6;

  section {
    margin-top: 10px;
    margin-left: 21px;
    margin-right: 21px;
  }

  h2 {
    margin-top: 15px;
    font-weight: bold;
  }
`;

export const PopupWaiting = styled.div`
  width: 99%;
  height: 483px;
  position: absolute;
  top: 8;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #97adb6;
  border-radius: 16px 16px 0px 0px;
  border: 1px solid #97adb6;

  section {
    margin-top: 10px;
    width: 90%;
  }

  button {
    background-color: #fbd50e;
    width: 100%;
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
  }
`;

export const Favourite = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 10px;
  flex-direction: row;
  border-bottom: 1px solid #d5dde0;

  div {
    border-radius: 90px;
    background-color: #fbd50e;
    width: 35px;
    height: 35px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  p {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5px;
    color: #3e4958;
  }
`;
