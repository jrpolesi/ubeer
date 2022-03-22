import styled from "styled-components";

export const PopupDriver = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #97adb6;
  padding: 25px 0 15px;
  border-radius: 16px 16px 0px 0px;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  button {
    width: 80%;
    padding: 9px;
    margin: 30px auto 5px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  h2 {
    color: #3e4958;
    font-size: 18px;
    font-weight: 700;
  }

  .driver-avatar {
    text-align: center;

    img {
      margin-bottom: 5px;
      max-width: 70px;
      max-height: 70px;
      border-radius: 90px;
    }
  }
  
  p, span {
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
  }

  .stars {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;

  h3 {
    color: #3e4958;
    font-size: 18px;
    font-weight: bold;
    background-color: #d5dde0;
    border-radius: 100px;
    text-align: end;
    padding: 4px 8px;
  }

  h4 {
    color: #3e4958;
    font-size: 18px;
    font-weight: bold;
    text-align: end;
  }
`;
