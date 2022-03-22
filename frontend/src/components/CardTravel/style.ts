import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  height: 99%;
  border-radius: 8px;
  background-color: #fbd50e;

  h2 {
    margin-left: 17px;
    border-bottom: solid 2px #d5dde0;
    padding-top: 16px;
    padding-bottom: 12px;
    margin-right: 15px;
  }
`;

export const DivLocation = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 17px;
    align-items: center;
  }

  span {
    color: black;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    align-items: center;
    margin-right: 2px;
  }

  p {
    color: #3e4958;
    font-size: 16px;
    margin-right: 5px;
  }
`;
