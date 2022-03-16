import styled from "styled-components";
import logo from "../../assets/img/background.png";

export const Main = styled.main`
  height: 490px;
  overflow-x: auto;
  overflow-y: auto;

  @media (min-width: 767px) {
    height: auto;
  }
`;

export const Header = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #f8f8f8;
  padding: 0px 20px;

  div {
    display: flex;
    align-items: flex-end;
  }
  figure {
    width: 40px;
  }

  img {
    width: 100%;
  }

  h3 {
    font-size: 30px;
    margin: 0px 0px 2px 10px;
  }

  @media (min-width: 767px) {
    display: flex;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${logo});
  background-size: contain;
  height: 450px;
  box-shadow: 0px 4px 4px #00000040;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  figure {
    width: 70px;
  }

  img {
    width: 100%;
  }

  h1 {
    font-size: 55px;
    margin-left: 10px;
  }

  #desktop {
    display: none;
  }

  @media (min-width: 767px) {
    height: 390px;

    #mobile {
      display: none;
    }
    #desktop {
      display: block;
    }
    #logo {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    #desktop {
      font-size: 64px;
    }
  }
`;

export const SobreArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 25px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    font-size: 40px;
  }
  figure {
    width: 200px;
    height: 200px;
    margin: 20px 0px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 767px) {
    margin-top: 60px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 20px;
    }

    p {
      font-size: 20px;
      width: 40%;
    }
  }
`;

export const TimeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 25px;
  margin-bottom: 20px;

  h2 {
    align-self: center;
    font-size: 40px;
    margin: 20px 0px;
  }

  div {
    display: flex;
    margin: 3px 0px;
  }

  figure {
    width: 66px;
    height: 66px;
  }

  img {
    width: 100%;
    border-radius: 90px;
  }

  a svg {
    width: 18px;
    margin: 0px 2px;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div {
      flex-direction: column;
      align-items: center;
    }

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }

    figure {
      width: 130px;
      height: 130px;
      margin-bottom: 10px;
    }

    .links {
      display: flex;
      flex-direction: row;
    }

    a svg {
      width: 24px;
      margin: 0px 5px;
    }
  }

  @media (min-width: 1024px) {
    figure {
      width: 180px;
      height: 180px;
      margin-bottom: 10px;
    }

    p {
      font-size: 22px;
    }

    span {
      font-size: 18px;
    }

    a svg {
      width: 28px;
      height: 28px;
      margin: 0px 5px;
    }
  }

  @media (min-width: 1440px) {
    h2 {
      width: 100%;
      font-size: 50px;
      margin-bottom: 60px;
    }

    figure {
      width: 200px;
      height: 200px;
      margin-bottom: 10px;
    }

    p {
      font-size: 30px;
    }

    span {
      font-size: 24px;
    }

    a svg {
      width: 32px;
      height: 32px;
      margin: 0px 5px;
    }
  }
`;

export const ButtonFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  background-color: #c7c7c7;
  padding: 0px 10px;

  button {
    width: 45%;
    height: 52px;
    border: solid 2px #333333;
    font-size: 12px;
    font-weight: bold;
  }

  @media (min-width: 767px) {
    display: none;
  }
`;
