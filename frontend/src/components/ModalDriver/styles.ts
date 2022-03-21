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
    margin-top: 30px;
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
  border-radius: 16px 16px 0px 0px;

  section {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PopUpLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h2 {
    color: #3e4958;
    font-size: 18px;
    font-weight: 700;
  }

  img {
    max-width: 70px;
    max-height: 70px;
    border-radius: 90px;
  }

  p {
    margin-left: 13px;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    align-items: flex-start;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 20px;
  }
`;

export const PopupRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    color: #3e4958;
    font-size: 18px;
    font-weight: bold;
    background-color: #d5dde0;
    border-radius: 100px;
    text-align: end;
  }

  h4 {
    color: #3e4958;
    font-size: 18px;
    font-weight: bold;
    text-align: end;
  }
`;
