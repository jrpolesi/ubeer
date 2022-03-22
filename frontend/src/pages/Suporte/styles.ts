import styled from "styled-components";
import backgroundMap from "../../assets/img/map.png";

export const Main = styled.main`
  height: 91.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 300;
  font-size: 25.1px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  color: #000000;

  div::-webkit-scrollbar {
    display: none;
  }
  div {
    position: absolute;
    height: 50%;
    width: 80%;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow-y: scroll;
    h3 {
      display: none;
    }
    img {
      display: none;
    }
    ol {
      font-size: 26px;
      margin: 10px 0 0 40px;
    }
    h1{
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 136%;
      color: #000000;
    }
    ol:hover {
      li {
        margin-top: 15px;
        display: block;
      }
    }
    li {
      display: none;
    }
    span {
      position: relative;
      left: 7%;
      top: 20%;
      border-bottom: 1px solid black;
      border-radius: 6px;
      font-size: 13px;
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    background: url(${backgroundMap}) no-repeat center center;
    background-size: cover;
    div {
      ol {
        pointer-events: none;
      }
      height: 80%;
      width: 90%;
      li {
        display: block;
        margin-top: 30px;
        width: 60%;
      }
      span {
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
        cursor: pointer;
      }
      p {
        display: block;
      }
      h3 {
        display: block;
        position: absolute;
        right: 1.3%;
        top: 15%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;
