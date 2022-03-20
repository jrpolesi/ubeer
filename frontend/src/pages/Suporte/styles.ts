import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";
import contatoSupport from "../../assets/img/contatoSupport.png";

export const Main = styled.main`
  height: 86.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: absolute;
    height: 50%;
    width: 80%;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow-y: scroll;
    p {
      display: none;
    }
    img {
      display: none;
    }
    ul {
      font-size: 26px;
      margin: 10px 0 0 40px;
    }
    ul:hover {
      li {
        margin-top: 15px;
        display: block;
      }
    }
    li {
      display: none;
    }
    a {
      position: relative;
      left: 7%;
      top: 20%;
      border-bottom: 1px solid black;
      border-radius: 6px;
      font-size: 30px;
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    background: url(${backgroundMap}) no-repeat center center;
    background-size: cover;
    div {
      ul {
        pointer-events: none;
      }
      height: 80%;
      width: 90%;
      li {
        display: block;
        margin-top: 30px;
        width: 60%;
      }
      a {
        display: none;
      }
      img {
        border: 1px solid #ffffff;
        border-width: 50px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        position: absolute;
        display: block;
        right: 0;
        top: 0;
      }
      p {
        display: block;
        position: absolute;
        right: 1.3%;
        top: 20%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;
