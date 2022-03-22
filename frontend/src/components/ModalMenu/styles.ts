import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000055;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s;

  .menu {
    position: absolute;
    left: 0%;
    top: 0;
    overflow: hidden;
    min-height: 570px;
    height: 100%;
    width: 90vw;
    max-width: 600px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 4;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    transition: width 0.5s;

    > * {
      transition: opacity 0.5s;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #f8d50e;
      padding: 25px 40px 25px 30px;
      color: white;
      font-size: 18px;

      h2 {
        font-weight: bold;
        margin: 15px 0 4px;
      }

      img {
        width: 80px;
      }

      .closeButton {
        font-family: sans-serif;
        font-size: 30px;
        color: #000000;
        cursor: pointer;
      }
    }

    .avatar{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 55px;
      background-color: #05a1fb;
      color: #FFF;
      border-radius: 90px;
      cursor: pointer;
    }

    .buttons {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      max-height: 400px;
      margin: 30px 0;

      button {
        background-color: #ffffff;
        color: #000000;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
        border-radius: 15px;
        padding: 0px 25px;
      }
    }

    .signout {
      flex-grow: 0;
      margin: auto 0 40px;
      line-height: 150%;
      color: blue;
      border-bottom: 1px solid blue;
      cursor: pointer;
    }
  }

  &.hide {
    opacity: 0;
    width: 0;

    .menu {
      width: 0;

      > * {
        opacity: 0;
      }
    }
  }
`;
