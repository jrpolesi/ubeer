import React from "react";
import styled from "styled-components";
export const Popup = styled.main`
  header {
    height: 260px;
    width: 60%;
    background-color: red;
    position: absolute;
    top: 0%;
  }
  main {
    height: 100vh;
    animation-name: teste;
    animation-duration: 0.5s;
    width: 60%;
    left: 0%;
    bottom: 0%;
    position: absolute;
    a {
      position: absolute;
      left: 10%;
      bottom: 10%;
    }
  }
  @keyframes teste {
    from {
      width: 0%;
    }
    to {
      width: 40%;
    }
  }
  div {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    button {
      background-color: #ffffff;
      color: #000000;
      margin: 0 0 80px 0;
      width: 30%;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
      border-radius: 15px;
    }
    span {
      position: absolute;
      top: 10%;
    }
  }
`;
