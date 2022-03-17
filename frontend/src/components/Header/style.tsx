import styled from "styled-components";

export const Container = styled.div`
    height: 20%;
    width: 100%;
    background-color: #F7F8F9;
    display: flex;
    align-items: center;

    button{
      position: absolute;
      top: 5%;
      left: 5%;  
      width: 84px;
      height: 84px;
      border: none;
      border-radius: 50%;
      margin-left: 10px;
      cursor: pointer;
    }
    button:hover{
        filter: brightness(0.9);
    }
`;