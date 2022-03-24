import styled from "styled-components";
import Map from "../../assets/img/map.png";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f7f8f9;
  padding: 0px 20px;
  height: 100vh;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #3e4958;

  button {
    width: 85%;
    border-radius: 15px;
    cursor: pointer;
  }

  input {
    text-align: center;
    width: 45%;
    height: 40px;
    background-color: white;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 1px 8px #ccc;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #3e4958;
  }

  @media (min-width: 768px) {
    background-image: url(${Map});
    background-size: cover;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 8px #ccc;
  padding: 20px 0px;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #f7f8f9;
    border-radius: 90px;
  }

  p {
    text-align: center;
    width: 60%;
    margin: 10px 0px;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 85%;
  }

  .QrCode {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 220px;
    background-color: #fbd50e;
    border-radius: 15px;
    margin: 20px 0px;
  }

  .QrCode img {
    width: 150px;
    height: 150px;
  }

  button {
    height: 30px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #3e4958;
  }

  .Adicionar {
    width: 45%;
    height: 40px;
    background-color: white;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 1px 8px #ccc;
  }

  @media (min-width: 450px) {
    width: 410px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #f7f8f9;
  padding: 0px 30px;
  margin: 20px 0px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }

  button {
    width: 100%;
  }

  @media (min-width: 450px) {
    width: 410px;
  }

  @media (min-width: 768px) {
    background-color: #f7f8f900;

    p {
      font-size: 20px;
    }
  }
`;
