import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #4b545a;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    box-shadow: 1px 1px 8px #ccc;
    border-radius: 5px;
  }
  img {
    margin-bottom: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbd50e;
    border-radius: 90px;
    box-shadow: 1px 1px 8px #ccc;
    width: 65px;
    height: 65px;
    cursor: pointer;
  }

  img {
  }
`;
